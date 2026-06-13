// Grab the HTML elements using their unique IDs
const evaluatedText = document.getElementById('evaluatedText');
const letterCount = document.getElementById('letterCount');

// Listen for any input changes in real-time
evaluatedText.addEventListener('input', () => {
    // Get the current length of the text inside the textbox
    const textLength = evaluatedText.value.length;
    
    // Update the h3 tag with the calculated length
    letterCount.textContent = textLength;
});