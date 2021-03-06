{
    $("button#play-pause").on("click", function() {
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

    $("#time-control input").on("input", (event) => {
        player.skipTo(event.target.value);
    });

     //percent = (part/whole) * 100
    setInterval((event) => {
        if (player.playState !== "playing") { return; }
        const currentTime = player.getTime();
        const duration = player.getDuration();
        const percent = (currentTime/duration) * 100;
        $("#time-control .current-time").text(currentTime);
        $("#time-control input").val(percent);
    }, 1000);
}