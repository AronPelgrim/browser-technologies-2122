const nextValidation = document.querySelectorAll('.next, submit')
const form = document.querySelector('form')
let array = []

const validate = () => {
    const input = document.getElementsByName('inputvalue')
    for (var i = 0; i < input.length; i++) {
        array.push(input[i].value)
    }
    if (array.includes('')) {
        console.log("hans");
    } else {
        return false;
    }
}

nextValidation.forEach(nextValidation => {
    nextValidation.addEventListener("click", () => {
        validate()
    })
})