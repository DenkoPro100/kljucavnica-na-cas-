input.onButtonPressed(Button.AB, function () {
    čakaj = 0
    servos.P0.setAngle(180)
    basic.showNumber(čas / 1000)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        `)
    while (čakaj < čas) {
        čakaj += 1000
        basic.pause(1000)
        led.plotBarGraph(
        čakaj,
        čas
        )
    }
    servos.P0.setAngle(0)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . .
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.A, function () {
    čas += 10000
})
let čakaj = 0
let čas = 0
čas = 0
