var Benefit1 = window.document.getElementById("benefit-1")
var Benefit2 = window.document.getElementById("benefit-2")
var Benefit4 = window.document.getElementById("benefit-4")
var Benefit5 = window.document.getElementById("benefit-5")

function RollToRight() {
    Benefit1.style = "display:none"
    Benefit2.style = "display:none"
    Benefit4.style = "display:flex"
    Benefit5.style = "display:flex"
}

function RollToLeft() {
    Benefit1.style = "display:flex"
    Benefit2.style = "display:flex"
    Benefit4.style = "display:none"
    Benefit5.style = "display:none"
}