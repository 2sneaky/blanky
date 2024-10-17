// Create a div element for the cursor tag
const cursorTag = document.createElement('div');
cursorTag.innerText = 'this is your cursor';
cursorTag.style.position = 'absolute';
cursorTag.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
cursorTag.style.color = 'white';
cursorTag.style.padding = '5px 10px';
cursorTag.style.borderRadius = '5px';
cursorTag.style.pointerEvents = 'none'; // Prevent it from blocking mouse events
document.body.appendChild(cursorTag);

// Update the position of the cursor tag
document.addEventListener('mousemove', (event) => {
    cursorTag.style.left = event.pageX + 'px';
    cursorTag.style.top = (event.pageY + 20) + 'px'; // Slightly below the cursor
});

// Optional: Hide the tag when the mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursorTag.style.display = 'none';
});

// Show the tag when the mouse enters the window
document.addEventListener('mouseenter', () => {
    cursorTag.style.display = 'block';
});
