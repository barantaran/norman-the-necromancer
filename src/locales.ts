type Locales = {
    [key: string]: {
        [key: string]: string;
    };
};

const LOCALES: Locales = {
    'en': {
        'INTRO_DIALOGUE_1': "Norman wasn't a particularly popular necromancer...",
        'INTRO_DIALOGUE_2': "The other villagers hunted him.",
        'INTRO_DIALOGUE_3': "Sometimes they even finished the job (@)",
        'INTRO_DIALOGUE_4': "But like any self-respecting necromancer...",
        'INTRO_DIALOGUE_5': "Norman just brought himself back.",
        'OUTRO_DIALOGUE_WIN_1': "",
        'OUTRO_DIALOGUE_WIN_2': "It was over.",
        'OUTRO_DIALOGUE_WIN_3': "Norman was able to study peacefully.",
        'OUTRO_DIALOGUE_WIN_4': "But he knew that eventually, they'd be back.",
        'OUTRO_DIALOGUE_WIN_5': "TO BE CONTINUED..",
        'OUTRO_DIALOGUE_LOSE_1': "",
        'OUTRO_DIALOGUE_LOSE_2': "It was over.",
        'OUTRO_DIALOGUE_LOSE_3': "Norman was fallen.",
        'OUTRO_DIALOGUE_LOSE_4': "But he knew that eventually, he'll be back.",
        'OUTRO_DIALOGUE_LOSE_5': "THE END",
        "RITUAL_STREAK_NAME": "Streak",
        "RITUAL_STREAK_DESC": "",
        "RITUAL_BOUNCING_NAME": "Bouncing",
        "RITUAL_BOUNCING_DESC": "Spells bounce",
        "RITUAL_DOUBLESHOT_NAME": "Doubleshot",
        "RITUAL_DOUBLESHOT_DESC": "Cast 2 spells",
        "RITUAL_HUNTER_NAME": "Hunter",
        "RITUAL_HUNTER_DESC": "Spells seek targets",
        "RITUAL_WEIGHTLESS_NAME": "Weightless",
        "RITUAL_WEIGHTLESS_DESC": "Spells are not affected by gravity",
        "RITUAL_KNOCKBACK_NAME": "Knockback",
        "RITUAL_KNOCKBACK_DESC": "Spells knock backwards",
        "RITUAL_CEILING_NAME": "Ceiling",
        "RITUAL_CEILING_DESC": "Adds a ceiling",
        "RITUAL_RAIN_NAME": "Rain",
        "RITUAL_RAIN_DESC": "Spells split when they drop",
        "RITUAL_DRUNKARD_NAME": "Drunkard",
        "RITUAL_DRUNKARD_DESC": "2x damage, wobbly aim",
        "RITUAL_SEER_NAME": "Seer",
        "RITUAL_SEER_DESC": "Spells pass through the dead",
        "RITUAL_TEARSTONE_NAME": "Tearstone",
        "RITUAL_TEARSTONE_DESC": "2x damage when < half HP",
        "RITUAL_IMPATIENCE_NAME": "Impatience",
        "RITUAL_IMPATIENCE_DESC": "Resurrection recharges 2x faster",
        "RITUAL_BLEED_NAME": "Bleed",
        "RITUAL_BLEED_DESC": "Inflicts bleed on hits",
        "RITUAL_ALLEGIANCE_NAME": "Allegiance",
        "RITUAL_ALLEGIANCE_DESC": "Summon your honour guard after resurrections",
        "RITUAL_SALVAGE_NAME": "Salvage",
        "RITUAL_SALVAGE_DESC": "Corpses become souls at the end of levels",
        "RITUAL_STUDIOUS_NAME": "Studious",
        "RITUAL_STUDIOUS_DESC": "Rituals are 50% cheaper",
        "RITUAL_ELECTRODYNAMICS_NAME": "Electrodynamics",
        "RITUAL_ELECTRODYNAMICS_DESC": "Lightning strikes after hits",
        "RITUAL_CHILLY_NAME": "Chilly",
        "RITUAL_CHILLY_DESC": "10% chance to freeze enemies",
        "RITUAL_GIANTS_NAME": "Giants",
        "RITUAL_GIANTS_DESC": "20% chance to resurrect giant skeletons",
        "RITUAL_AVARICE_NAME": "Avarice",
        "RITUAL_AVARICE_DESC": "+1 soul for each corpse you resurrect",
        "RITUAL_HARDENED_NAME": "Hardened",
        "RITUAL_HARDENED_DESC": "Undead have +1 HP*",
        'HEAL_NAME': 'Heal',
        'HEAL_DESCRIPTION': 'Heal 1*',
        'RENEW_NAME': 'Renew',
        'RENEW_DESCRIPTION': '+1* max hp',
        'RECHARGE_NAME': 'Recharge',
        'RECHARGE_DESCRIPTION': '+1\x7F max casts',
        'CONTINUE_NAME': 'Continue',
        'CONTINUE_DESCRIPTION': 'Begin the next level',
        'RITUALS_HEADER': "Rituals:\n\n",
        'LEVEL': 'Level',
        'RESSURECT': "Resurrect",
        'SPACE': "Space"
    },
    'ru': {
        'INTRO_DIALOGUE_1': "Норман не был особо популярным некромантом...",
        'INTRO_DIALOGUE_2': "Остальные жители деревни охотились на него.",
        'INTRO_DIALOGUE_3': "Иногда они даже добивали его (@)",
        'INTRO_DIALOGUE_4': "Но как любой уважающий себя некромант...",
        'INTRO_DIALOGUE_5': "Норман просто возвращался обратно.",
        'OUTRO_DIALOGUE_WIN_1': "",
        'OUTRO_DIALOGUE_WIN_2': "Все было кончено.",
        'OUTRO_DIALOGUE_WIN_3': "Норман мог спокойно заниматься своими исследованиями.",
        'OUTRO_DIALOGUE_WIN_4': "Но он знал, что в конце концов, они вернутся.",
        'OUTRO_DIALOGUE_WIN_5': "ПРОДОЛЖЕНИЕ СЛЕДУЕТ...",
        'OUTRO_DIALOGUE_LOSE_1': "",
        'OUTRO_DIALOGUE_LOSE_2': "Все было кончено.",
        'OUTRO_DIALOGUE_LOSE_3': "Норман пал.",
        'OUTRO_DIALOGUE_LOSE_4': "Но он знал, что в конце концов, он вернется.",
        'OUTRO_DIALOGUE_LOSE_5': "КОНЕЦ",
        "RITUAL_STREAK_NAME": "Серия",
        "RITUAL_STREAK_DESC": "",
        "RITUAL_BOUNCING_NAME": "Отскок",
        "RITUAL_BOUNCING_DESC": "Заклинания отскакивают",
        "RITUAL_DOUBLESHOT_NAME": "Двойной выстрел",
        "RITUAL_DOUBLESHOT_DESC": "Бросаются 2 заклинания",
        "RITUAL_HUNTER_NAME": "Охотник",
        "RITUAL_HUNTER_DESC": "Заклинания ищут цели",
        "RITUAL_WEIGHTLESS_NAME": "Невесомость",
        "RITUAL_WEIGHTLESS_DESC": "Заклинания не подвержены гравитации",
        "RITUAL_KNOCKBACK_NAME": "Отталкивание",
        "RITUAL_KNOCKBACK_DESC": "Заклинания отталкивают врагов",
        "RITUAL_CEILING_NAME": "Потолок",
        "RITUAL_CEILING_DESC": "Добавляет потолок",
        "RITUAL_RAIN_NAME": "Дождь",
        "RITUAL_RAIN_DESC": "Заклинания делятся при падении",
        "RITUAL_DRUNKARD_NAME": "Пьяница",
        "RITUAL_DRUNKARD_DESC": "Двойной урон, прицеливание сбито",
        "RITUAL_SEER_NAME": "Провидец",
        "RITUAL_SEER_DESC": "Заклинания проходят через мертвых",
        "RITUAL_TEARSTONE_NAME": "Слезный камень",
        "RITUAL_TEARSTONE_DESC": "2x урон, когда < половины HP",
        "RITUAL_IMPATIENCE_NAME": "Нетерпение",
        "RITUAL_IMPATIENCE_DESC": "Воскрешение восстанавливается в 2 раза быстрее",
        "RITUAL_BLEED_NAME": "Кровотечение",
        "RITUAL_BLEED_DESC": "Кровотечение при попадании",
        "RITUAL_ALLEGIANCE_NAME": "Верность",
        "RITUAL_ALLEGIANCE_DESC": "Призывает охрану после воскрешения",
        "RITUAL_SALVAGE_NAME": "Спасение",
        "RITUAL_SALVAGE_DESC": "Трупы превращаются в души в конце уровней",
        "RITUAL_STUDIOUS_NAME": "Трудолюбие",
        "RITUAL_STUDIOUS_DESC": "Ритуалы на 50% дешевле",
        "RITUAL_ELECTRODYNAMICS_NAME": "Электродинамика",
        "RITUAL_ELECTRODYNAMICS_DESC": "Молния бьет после попадания",
        "RITUAL_CHILLY_NAME": "Холод",
        "RITUAL_CHILLY_DESC": "10% шанс заморозить врагов",
        "RITUAL_GIANTS_NAME": "Гиганты",
        "RITUAL_GIANTS_DESC": "20% шанс воскресить гигантских скелетов",
        "RITUAL_AVARICE_NAME": "Алчность",
        "RITUAL_AVARICE_DESC": "+1 душа за каждый воскрешенный труп",
        "RITUAL_HARDENED_NAME": "Ожесточение",
        "RITUAL_HARDENED_DESC": "Воскрешенная нежить получает +1 HP",
        'HEAL_NAME': 'Лечение',
        'HEAL_DESCRIPTION': 'Лечить 1*',
        'RENEW_NAME': 'Жизнь',
        'RENEW_DESCRIPTION': '+1* макс. жизни',
        'RECHARGE_NAME': 'Перезарядка',
        'RECHARGE_DESCRIPTION': '+1\x7F макс. заклинаний',
        'CONTINUE_NAME': 'В бой!',
        'CONTINUE_DESCRIPTION': 'Cледующая волна',
        'RITUALS_HEADER': "Ритуалы:\n\n",
        'LEVEL': 'Волна',
        'RESSURECT': "Воскрешение",
        'SPACE': "Пробел"
    },
};
export function getMsg(key: string): string {
    const lng: string = navigator.language.split('-')[0] || 'en';
    
    if (!LOCALES[lng]) {
        console.warn(`Language ${lng} is not supported. Falling back to 'en'.`);
    }

    const message = LOCALES[lng]?.[key] || LOCALES['en'][key];
    return message || '';
}