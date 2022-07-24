function area() {
    let width = document.querySelector("#width").value;
    let height = document.querySelector("#height").value;
    let pTag = document.querySelector("p");
    pTag.style.color = "black";
    if (width.length == 0 || height.length == 0) {
        pTag.innerHTML = "Enter all Fileds";
        pTag.style.color = "red";
    } else {
        width = Number(width);
        height = Number(height);
        if (isNaN(width) || isNaN(height)) {
            pTag.innerHTML = "Enter valid inputs";
            pTag.style.color = "red";
            document.querySelector("#height").value = "";
            document.querySelector("#width").value = "";
        } else {
            let area = width * height;
            pTag.innerHTML = "Area of the rectangle is " + area + "cm2";
        }

    }
}

document.querySelector("#btn").addEventListener("click", area);