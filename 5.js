document.querySelector("button").addEventListener("click", function() {
    let color = this.style.backgroundColor;
    if (color == "red") {
        this.style.backgroundColor = "blue";
    } else {
        this.style.backgroundColor = "red";
    }
});