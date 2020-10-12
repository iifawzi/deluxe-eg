function move(dir) {
    const ourWorkContainer = document.getElementById("ourWorkContainer");
    if (dir === "right"){
    ourWorkContainer.scrollTo(ourWorkContainer.scrollLeft += 290,0);
    }else {
    let remainingToNearest = ourWorkContainer.scrollLeft % 290;
    if (remainingToNearest === 0){
    ourWorkContainer.scrollTo(ourWorkContainer.scrollLeft -= 290,0);
    }else {
        ourWorkContainer.scrollTo(ourWorkContainer.scrollLeft -= remainingToNearest,0);
    }
    }
}
