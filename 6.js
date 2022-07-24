document.querySelector("button").addEventListener("click", function() {
    let inp = document.querySelector("#num").value;
    let value = Number(inp);
    if (inp.length == 0) {
        alert("Fill the Field First");
    } else {
        if (isNaN(value)) {
            alert("Enter Valid Number");
        } else {
            alert(value ** (1.0 / 2.0));
        }
    }
})