radio.onReceivedNumber(function (receivedNumber) {
    let Fart = 0
    if (receivedNumber == 3) {
        if (FRAMOVER == 1) {
            bitbot.move(BBMotor.Right, BBDirection.Forward, 100)
            bitbot.move(BBMotor.Left, BBDirection.Forward, 41)
        } else {
            bitbot.move(BBMotor.Right, BBDirection.Reverse, 100)
            bitbot.move(BBMotor.Left, BBDirection.Reverse, 30)
        }
    } else if (receivedNumber == 4) {
        if (FRAMOVER == 1) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, 100)
            bitbot.move(BBMotor.Right, BBDirection.Forward, 25)
        } else {
            bitbot.move(BBMotor.Left, BBDirection.Reverse, 100)
            bitbot.move(BBMotor.Right, BBDirection.Reverse, 25)
        }
    } else if (receivedNumber == 1) {
        if (0 == Fart) {
            bitbot.go(BBDirection.Forward, 60)
            FRAMOVER = 1
        }
    } else if (receivedNumber == 2) {
        if (0 == Fart) {
            bitbot.go(BBDirection.Reverse, 60)
            FRAMOVER = 0
        }
    } else if (receivedNumber == 5) {
        FRAMOVER = 1
        bitbot.stop(BBStopMode.Coast)
    } else if (receivedNumber == 6) {
        FRAMOVER = 1
        bitbot.go(BBDirection.Forward, 100)
    } else if (receivedNumber == 7) {
        bitbot.move(BBMotor.Right, BBDirection.Forward, 100)
    } else if (receivedNumber == 8) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 100)
    }
})
let FRAMOVER = 0
radio.setGroup(22)
FRAMOVER = 0
