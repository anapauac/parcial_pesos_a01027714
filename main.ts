input.onButtonPressed(Button.A, function () {
    basic.showNumber(MXN_)
    basic.showString("MXN=")
    basic.showNumber(USD)
    basic.showString("USD")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MXN_)
    basic.showString("MXN")
    basic.showNumber(EUR)
    basic.showString("EUR")
})
let EUR = 0
let MXN_ = 0
let USD = 0
let pesos = 10
USD = MXN_ * 21.2917
EUR = MXN_ * 25.2917
