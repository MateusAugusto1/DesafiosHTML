const object = document.getElementById('Object');
const screenWidth = window.innerWidth;
let position = 0;
let direction = 1; // 1 means moving right, -1 means moving left
const speed = 4; // Change this value to adjust the speed of the object

function moveObject() {
    position += speed * direction;
    if (position > screenWidth - object.offsetWidth || position < 0) {
        direction *= -1; // Change direction
    }
    object.style.left = position + 'px';
    requestAnimationFrame(moveObject);
}

// Start the animation
moveObject();
