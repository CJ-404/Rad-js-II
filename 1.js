function click_Button() {
    let nameTag = document.querySelector("#name");
    let homeTag = document.querySelector("#home");
    let name = nameTag.value;
    let home = homeTag.value;
    if (name.length == 0 || home.length == 0) {
        alert("Fill all the fields")
    } else {
        alert("your Name is = " + name + " & your Home town is = " + home);
    }

}

document.getElementById("btn").addEventListener("click", click_Button);