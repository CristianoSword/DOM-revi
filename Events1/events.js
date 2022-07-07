// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p')

    p.textContent = 'Eu mudei por causa de um inline event handler'
}

// Add event handler as a property of the button element
const button = document.querySelector('button')
button.onclick = changeText