control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("all")
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showString("A")
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    basic.showIcon(IconNames.Happy)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showString("X")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("reset")
    basic.showString("R")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("one")
})
radio.setGroup(1)
basic.forever(function () {
	
})
