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
    },
};
export function getMsg(key: string): string {
    const lng: string = navigator.language.split('-')[0] || 'en';
    console.log(`Detected language: ${lng}`);
    console.log(`Available languages: ${Object.keys(LOCALES).join(', ')}`);
    
    if (!LOCALES[lng]) {
        console.warn(`Language ${lng} is not supported. Falling back to 'en'.`);
    }

    const message = LOCALES[lng]?.[key] || LOCALES['en'][key];
    return message || '';
}