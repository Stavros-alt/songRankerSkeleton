const CONFIG = {
    siteTitle: "Song Ranker Skeleton",
    siteDescription: "A generic, easy-to-use song ranker template.",
    accentColors: [
        '#00ff9d', // ralsei green. whatever.
        '#00f2ff', // cyan
        '#ff00ff'  // pink
    ],
    defaultBgColor: '#000000',
    
    // definitions for your collections. slug is for storage keys. just keep it unique.
    franchises: [
        {
            slug: 'example',
            displayName: "Example Game",
            dataVariable: "exampleSongList",
            groups: [
                { id: '1', name: "Set 1" },
                { id: '2', name: "Set 2" }
            ]
        }
    ],
    
    // supabase settings. don't leak your keys.
    supabase: {
        url: 'https://tsqubxgafnzmxejwknbm.supabase.co',
        key: 'sb_publishable_ZYm_PTc6nIPS6t7MKsWKrQ_pwSiLCq2'
    },
    
    // social links. change these or people will bother me.
    links: {
        kofi: "https://ko-fi.com/stavros916",
        discord: "https://discord.gg/MeGrt5kvK4",
        github: "https://github.com/stavros-alt/drSongRanker"
    },
    
    // project defaults. don't break them.
    defaults: {
        currentGame: 'example',
        showRatings: false,
        hideLeaderboard: false,
        preventDuplicates: true,
        felfebMode: false,
        includeBonus: false,
        useSystemCursor: false
    }
};

window.RANKER_CONFIG = CONFIG;
