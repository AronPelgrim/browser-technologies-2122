const nextValidation = document.querySelector('input[type=submit]')
const form = document.querySelector('form')
const options = {
	threshold: [0.4]
}
const observer = new IntersectionObserver(onEntry, options)
const elements = document.querySelectorAll('fieldset')
const popUp = document.querySelector('div')
let array = []

function onEntry(entry) {
    entry.forEach((change) => {
        if(change.isIntersecting) {
            change.target.classList.add('visible')
        }else {
            change.target.classList.remove('visible')
        }
    })
}    
for (let elm of elements) {
    observer.observe(elm)
}

const validate = () => {
    const input = document.getElementsByName('inputvalue')
    for (var i = 0; i < input.length; i++) {
        array.push(input[i].value)
    }
    if (array.includes('')) {
        popUp.classList.add('popup')
    }
}

const removeValidate = () => { 
    if (popUp.classList.contains('popup')) {
        popUp.classList.remove('popup')
    }
}

nextValidation.addEventListener("click", () => {
    validate()
})

form.addEventListener("input", () => {
    removeValidate()
})