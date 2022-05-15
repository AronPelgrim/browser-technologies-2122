const nextValidation = document.querySelector('input[type=submit]')
const form = document.querySelector('form')
const options = {
	threshold: [0.2]
}
const observer = new IntersectionObserver(onEntry, options)
const elements = document.querySelectorAll('fieldset')
let array = []

function onEntry(entry) {
    entry.forEach((change) => {
        if(change.isIntersecting) {
            change.target.classList.add('visible')
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
        console.log("hans");
    } else {
        return false;
    }
}

nextValidation.addEventListener("click", () => {
    validate()
})