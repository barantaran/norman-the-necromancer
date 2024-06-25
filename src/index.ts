import * as sprites from "./sprites.json";
import { init, updateParticles, updateTweens } from "./engine";
import { Game, INTRO, PLAYING, SHOPPING, WIN, LOSE, OUTRO } from "./game";
import { render, screenToSceneCoords } from "./renderer";
import { Cast, Resurrect } from "./actions";
import { angleBetweenPoints } from "./helpers";
import { Player } from "./objects";
import { isComplete, isLevelFinished, updateLevel } from "./levels";
import { Studious, Bleed, Bouncing, Tearstone, Ceiling, Drunkard, Salvage, Chilly, Hunter, Knockback, Rain, Seer, Doubleshot, Streak, Weightless, Electrodynamics, Impatience, Giants, Avarice, Hardened, Allegiance } from "./rituals";
import { buy, enterShop, selectShopIndex, shop } from "./shop";
import { dust } from "./fx";
import { BPM, play, toggleMusic } from "./sounds";
import { March } from "./behaviours";
import { getMsg } from "./locales";

let player = Player();
player.sprite = sprites.skull;
let game = new Game(player);
// game.debugMode = true;
let paused = false;

const ARROW_UP = 38;
const ARROW_DOWN = 40;
const SPACE = 32;
const ENTER = 13;
const KEY_P = 80;
const KEY_S = 83;
const KEY_s = 115;


const INTRO_DIALOGUE = [
  getMsg("INTRO_DIALOGUE_1"),
  getMsg("INTRO_DIALOGUE_2"),
  getMsg("INTRO_DIALOGUE_3"),
  getMsg("INTRO_DIALOGUE_4"),
  getMsg("INTRO_DIALOGUE_5"),
];

const OUTRO_DIALOGUE_WIN = [
  getMsg("OUTRO_DIALOGUE_WIN_1"),
  getMsg("OUTRO_DIALOGUE_WIN_2"),
  getMsg("OUTRO_DIALOGUE_WIN_3"),
  getMsg("OUTRO_DIALOGUE_WIN_4"),
  getMsg("OUTRO_DIALOGUE_WIN_5"),
];

const OUTRO_DIALOGUE_LOSE = [
  getMsg("OUTRO_DIALOGUE_LOSE_1"),
  getMsg("OUTRO_DIALOGUE_LOSE_2"),
  getMsg("OUTRO_DIALOGUE_LOSE_3"),
  getMsg("OUTRO_DIALOGUE_LOSE_4"),
  getMsg("OUTRO_DIALOGUE_LOSE_5"),
];

onpointerup = () => {
  if (game.state === INTRO) {
    play();
    game.state = PLAYING;
    game.player.sprite = sprites.norman_arms_down;
  }

  if(game.state === PLAYING) {
    Cast()
  };
  
  if(game.state === OUTRO){
    window.location = window.location;
  }
}

onpointermove = ({ clientX, clientY }) => {
  let p1 = player.center();
  let p2 = screenToSceneCoords(clientX, clientY);
  game.spell.targetAngle = angleBetweenPoints(p1, {x:p2.x,y:-p2.y});
}

onkeydown = ({ which: key }) => {
  if (game.state === PLAYING) {
    if (key === SPACE) Resurrect();
    if (key === KEY_P) paused = !paused;
  } else if (game.state === SHOPPING) {
    if (key === ARROW_UP) selectShopIndex(-1);
    if (key === ARROW_DOWN) selectShopIndex(+1);
    if (key === ENTER) buy();
  }

  if(key === KEY_S || key === KEY_s) {
    toggleMusic();
  }
}

let normanIsBouncing = false;

function update(dt: number) {
  updateDialogue(dt);
  render(dt);
  if (paused) return;

  if (game.state === PLAYING) {
    updateLevel(dt);
  }

  if (game.state !== INTRO) {
    game.update(dt);
  }

  updateTweens(dt);
  updateParticles(dt);


  if (game.state === PLAYING && isLevelFinished()) {
    if (isComplete()) {
      onWin();
    } else {
      game.onLevelEnd();
      enterShop();
    }
  }

  if (game.state === LOSE) {
    onLose();
  }

  if (game.level === 2 && !normanIsBouncing) {
    game.player.addBehaviour(new March(game.player, 0));
    game.player.updateClock = 100;
    game.player.updateSpeed = 60_000 / BPM * 2;
    normanIsBouncing = true;
  }
}

function onWin() {
  game.state = WIN;
  game.dialogue = OUTRO_DIALOGUE_WIN;
}

function onLose() {
  game.dialogue = OUTRO_DIALOGUE_LOSE;
  setTimeout(()=>game.state=OUTRO, 2000);
}

let dialogueTimer = 0;

function updateDialogue(dt: number) {
  if ((dialogueTimer += dt) > 4000) {
    game.dialogue.shift()
    dialogueTimer = 0;

    // If the player watched the whole dialogue, remind them to click to start
    if (game.state === INTRO && game.dialogue.length === 0) {
      game.dialogue.push("                (Click to begin)");
    }
  }
}

game.addRitual(Streak);

shop.rituals = [
  Bouncing,
  Ceiling,
  Rain,
  Doubleshot,
  Hunter,
  Weightless,
  Knockback,
  Drunkard,
  Seer,
  Tearstone,
  Impatience,
  Bleed,
  Salvage,
  Studious,
  Electrodynamics,
  Chilly,
  Giants,
  Avarice,
  Hardened,
  Allegiance,
];

game.dialogue = INTRO_DIALOGUE;

init(game.stage.width, game.stage.height, update);
dust().burst(200);