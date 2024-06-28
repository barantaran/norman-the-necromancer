import * as sprites from "./sprites.json";
import { getMsg } from "./locales";

import { canvas, clear, ctx, drawNineSlice, drawSceneSprite, drawSprite, particleEmitters, Sprite, write } from "./engine";
import { clamp, Point, randomInt } from "./helpers";
import { INTRO, PLAYING, SHOPPING } from "./game";
import { shop } from "./shop";
import { Frozen } from "./behaviours";

const ICON_SOULS = "$";

let screenShakeTimer = 0;

export function screenshake(time: number) {
  screenShakeTimer = time;
}

export function screenToSceneCoords(x: number, y: number): Point {
  let r = canvas.getBoundingClientRect();
  let sx = (x - r.x) * (canvas.width / r.width) | 0;
  let sy = (y - r.y) * (canvas.height / r.height) | 0;
  return { x: sx / game.stage.scale, y: sy / game.stage.scale - game.sceneOrigin.y};
}

export function render(dt: number) {
  clear();
  ctx.save();

  if (screenShakeTimer > 0) {
    screenShakeTimer -= dt;
    ctx.translate(randomInt(2), randomInt(2));
  }

  ctx.translate(game.sceneOrigin.x, game.sceneOrigin.y);
  drawBackground();
  drawParticles();
  drawObjects();
  if (game.state === PLAYING) drawReticle();
  if(game.debugMode) drawSceneDebug();
  ctx.restore();

  drawHud();

  if (game.state === SHOPPING) {
    drawShop();
  }
}

function drawShop() {
  write(getMsg("RITUALS_HEADER"), 160, 20);
  let selected = shop.items[shop.selectedIndex];
  for (let item of shop.items) {
    write(
      `${item === selected ? ">" : ""}${
        item.name
      }  $${item.cost}\n`,
    );
  }
  write("\n" + selected?.description + "\n");
}

function drawHud() {
  if (game.dialogue.length) {
    write(game.dialogue[0], 75, 50);
  }

  if (game.state === INTRO) return;

  drawSprite(sprites.norman_icon, 0, 0);

  for (let i = 0; i < game.player.maxHp; i++) {
    let sprite = i < game.player.hp ? sprites.health_orb : sprites.health_orb_empty;
    drawSprite(sprite, 11 + i * 4, 0);
  }

  for (let i = 0; i < game.spell.maxCasts; i++) {
    let sprite = i < game.spell.casts ? sprites.cast_orb : sprites.cast_orb_empty;
    drawSprite(sprite, 11 + i * 4, 6);
  }

  let souls = game.souls | 0;
  if (souls) {
    let multiplier = game.getStreakMultiplier();
    let bonus = multiplier ? `..+${multiplier * 100 + "%"}  ${getMsg("STREAK_BONUS")}` : "";
    write(`${ICON_SOULS}${souls} ${bonus}`, game.stage.width / 2 - 30, 0);
  }

  write(`${getMsg('LEVEL')} ${game.level+1}`, game.stage.width - 50, 2);

  let x = game.stage.width / 2 - 40;
  let y = game.stage.height / 2 + 60;

  if (game.state === PLAYING) {
    let progress = clamp(game.ability.timer / game.ability.cooldown, 0, 1);
    drawNineSlice(sprites.pink_frame, x, y, 52 * (1 - progress) | 0, 10);
    write(getMsg("RESSURECT"), x + 10, y + 2);
    if (progress === 1) write(" (" + getMsg("SPACE")+")");
    else write(" (" + (((1 - progress) * game.ability.cooldown) / 1000 | 0) + "s)");
    drawSprite(sprites.skull, x + 1, y + 1);
  }

  write(getMsg("SOUND_TOGG"), x - 150, y + 2);
}

function drawOrbs(
  x: number,
  y: number,
  value: number,
  maxValue: number,
  sprite: Sprite,
  emptySprite: Sprite,
) {
  let x0 = x - (maxValue * 4) / 2;
  for (let i = 0; i < maxValue; i++) {
    drawSceneSprite(i < value ? sprite : emptySprite, x0 + i * 4, y);
  }
}

function drawObjects() {
  for (let object of game.objects) {
    drawSceneSprite(object.sprite, object.x, object.y + object.hop);

    if (object.getBehaviour(Frozen)) {
      drawNineSlice(sprites.ice, object.x, -object.sprite[3], object.sprite[2], object.sprite[3]);
    }

    if (object.maxHp > 1 && object !== game.player) {
      if (object.maxHp < 10) {
        let { x } = object.center();
        drawOrbs(x, -6, object.hp, object.maxHp, sprites.health_orb, sprites.health_orb_empty);
      } else {
        drawSceneSprite(sprites.health_orb, object.x, -6);
        write(`${object.hp}/${object.maxHp}`, object.x + 6, 0);
      }
    }

    let { x } = object;
    for (let behaviour of object.behaviours) {
      if (behaviour.sprite) {
        drawSceneSprite(behaviour.sprite, x, -12);
        x += behaviour.sprite[2] + 1;
      }
    }
  }
}

function drawBackground() {
  for (let i = 0; i < game.stage.width / 16; i++) {
    let sprite = i % 5 ? sprites.wall : sprites.door;
    drawSceneSprite(sprite, i * 16, 0);
    drawSceneSprite(sprites.floor, i * 16, -sprites.floor[3]);
    drawSceneSprite(sprites.ceiling, i * 16, game.stage.ceiling);
  }
}

function drawReticle() {
  let { x, y } = game.getCastingPoint();
  let sprite = sprites.reticle;
  drawSceneSprite(sprite, x - sprite[2] / 2, y - sprite[3] / 2);
}

function drawParticles() {
  for (let emitter of particleEmitters) {
    for (let particle of emitter.particles) {
      let variant = emitter.variants[particle.variant];
      let progress = particle.elapsed / particle.duration;
      let sprite = variant[progress * variant.length | 0];
      drawSceneSprite(sprite, particle.x, particle.y);
    }
  }
}

function drawSceneDebug() {
  if (game.debugSceneDraw.length < 1) return;

  while (game.debugSceneDraw.length) {
    let debugDraw = game.debugSceneDraw.pop();
    switch (debugDraw.type) {
      case "line":
        drawDebugLine(debugDraw.from, debugDraw.to, debugDraw.color);
    }
  }
}

function drawDebugLine(from: Point, to: Point, color: 'green'){
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.strokeStyle = color;
  ctx.stroke();
}
