const options = {
	threshold: [0.2]
}
const observer = new IntersectionObserver(onEntry, options)
const elements = document.querySelectorAll('fieldset')

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


