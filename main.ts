input.onButtonPressed(Button.A, function () {
    X += -1
    if (X < 0) {
        basic.showIcon(IconNames.No)
        basic.pause(5000)
        X = 0
    }
})
input.onButtonPressed(Button.B, function () {
    X += 1
    if (X > 4) {
        basic.showIcon(IconNames.No)
        X = 4
    }
})
let X = 0
X = 2
basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        basic.pause(500)
        basic.clearScreen()
        led.plot(X, Y)
    }
})
