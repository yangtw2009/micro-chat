input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
})
radio.setGroup(1)
