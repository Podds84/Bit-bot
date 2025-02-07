/**
 * HØGRE FRAM
 */
/**
 * HØGRE BAK
 */
/**
 * VENSTRE FRAM
 */
/**
 * VENSTRE BAK
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        if (FRAMOVER == 1) {
            bitbot.move(BBMotor.Right, BBDirection.Forward, 100)
            bitbot.move(BBMotor.Left, BBDirection.Forward, 15)
        } else {
            bitbot.move(BBMotor.Right, BBDirection.Reverse, 100)
            bitbot.move(BBMotor.Left, BBDirection.Reverse, 20)
        }
    } else if (receivedNumber == 4) {
        if (FRAMOVER == 1) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, 100)
            bitbot.move(BBMotor.Right, BBDirection.Forward, 15)
        } else {
            bitbot.move(BBMotor.Left, BBDirection.Reverse, 100)
            bitbot.move(BBMotor.Right, BBDirection.Reverse, 10)
        }
    } else if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 50)
        FRAMOVER = 1
    } else if (receivedNumber == 2) {
        bitbot.go(BBDirection.Reverse, 60)
        FRAMOVER = 0
    } else if (receivedNumber == 5) {
        FRAMOVER = 1
        bitbot.stop(BBStopMode.Coast)
    } else if (receivedNumber == 6) {
        FRAMOVER = 1
        bitbot.go(BBDirection.Forward, 100)
    } else if (receivedNumber == 7) {
        bitbot.move(BBMotor.Right, BBDirection.Forward, 100)
        bitbot.move(BBMotor.Left, BBDirection.Forward, 0)
    } else if (receivedNumber == 8) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 100)
        bitbot.move(BBMotor.Right, BBDirection.Forward, 0)
    }
})
let FRAMOVER = 0
radio.setGroup(22)
FRAMOVER = 1
