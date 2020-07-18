input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.pause(1000)
        segundos += 1
    }
})
let segundos = 0
basic.forever(function () {
    basic.showNumber(segundos)
})
