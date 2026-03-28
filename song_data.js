const exampleSongList = [
    {
        id: "example_1",
        name: "Example Track 1",
        artist: "Unknown",
        album: "Example Album",
        file: "audio/example1.mp3",
        duration: 120, 
        group: "1" // match this with config.js groups
    },
    {
        id: "example_2",
        name: "Example Track 2",
        artist: "Unknown",
        album: "Example Album",
        file: "audio/example2.mp3",
        duration: 150,
        group: "2"
    }
];

// put it on window so app.js can find it. don't touch this.
window.exampleSongList = exampleSongList;
