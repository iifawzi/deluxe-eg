
function moveRight() {
    const ourWorkContainer = document.getElementById("ourWorkContainer");
    ourWorkContainer.scrollTo(ourWorkContainer.scrollLeft += 290,0);
};

function moveLeft() {
    const ourWorkContainer = document.getElementById("ourWorkContainer");
    ourWorkContainer.scrollTo(ourWorkContainer.scrollLeft -= 290,0);
}
