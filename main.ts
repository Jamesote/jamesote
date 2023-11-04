basic.forever(function () {
    basic.pause(5000)
    basic.showIcon(IconNames.Square)
    basic.pause(5000)
    basic.showIcon(IconNames.Cow)
    music.play(music.stringPlayable("G A G G G D A - ", 120), music.PlaybackMode.UntilDone)
})
