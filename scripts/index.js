
function moveRight() {
    const ourWorkContainer = document.getElementById("ourWorkContainer");
    const scrollValue = ourWorkContainer.scrollLeft;
    ourWorkContainer.scrollLeft += 290;
};

function moveLeft() {
    const ourWorkContainer = document.getElementById("ourWorkContainer");
    ourWorkContainer.scrollLeft -= 290;
}