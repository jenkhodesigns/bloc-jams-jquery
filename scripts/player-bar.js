{
    $("button#play-pause").on("click", (event) => {
        player.playPause();
        $(this).attr("playState", player.playState);
    });

    $("button#next").on("click", (event) => {
        if (player.playState !== "playing") { return; }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex >= album.songs.length) { return; }

        const nextSong = album.songs[nextSongIndex];
        player.playPause(nextSong);
    });

    $("button#previous").on("click", (event) => {
        if (player.playState !== "playing") { return; }

        currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const prevSongIndex = currentSongIndex - 1;
        if(prevSongIndex >= album.songs.length) { return; }

        const prevSong = album.songs[prevSongIndex];
        player.playPause(prevSong);
    });
}