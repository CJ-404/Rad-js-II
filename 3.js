function click_Button() {
    let nameTag = document.querySelector("#name");
    let bdayTag = document.querySelector("#bday");
    let name = nameTag.value;
    let bday = bdayTag.value;
    if (name.length == 0 || bday.length == 0) {
        alert("Fill all the fields")
    } else {
        let date = Number(Date.parse(bday + " 00:00:00"));
        if (!isNaN(date)) {
            let now = Number(new Date().getFullYear());
            date = date / (1000 * 60 * 60 * 24 * 365); //milli seconds convert to years
            let age = Math.ceil((now - 1970) - date);
            alert("your Name is = " + name + " & your Age is = " + age);


        } else {
            alert("Enter a valid Date Please");
        }

    }

}

document.getElementById("btn").addEventListener("click", click_Button);