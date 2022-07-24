let inpTag = document.querySelector("input");
let percantageTag = document.querySelector(".perce");
let totalTag = document.querySelector(".total");


inpTag.addEventListener("mouseout", check);
// inpTag.addEventListener("input", function() {
//     percantageTag.innerHTML = "";
//     totalTag.innerHTML = "";
// })

function check() {
    percantageTag.style.color = "black";
    let value = inpTag.value;
    if (value.length == 0) {
        percantageTag.innerHTML = "";
        totalTag.innerHTML = "";
    } else {
        value = Number(value);
        if (isNaN(value)) {
            percantageTag.innerHTML = "Enter valid Number";
            totalTag.innerHTML = "";
            percantageTag.style.color = "red";
        } else {
            percantageTag.innerHTML = "20% of value = " + value * 0.2;
            totalTag.innerHTML = "Total : " + value + " + " + value * 0.2 + " = " + (value + value * 0.2);

        }
    }

}