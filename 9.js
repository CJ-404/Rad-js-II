let subTag = document.querySelector("#subject");
let marksTag = document.querySelector("#marks");
let pTag = document.querySelector("p");

document.querySelector("button").addEventListener("click", function() {
    pTag.style.color = "black";
    let sub = subTag.value;
    let marks = marksTag.value;
    if (sub.length == 0 || marks.length == 0) {
        pTag.innerHTML = "Fill All the Fields First";
        pTag.style.color = "red";
    } else {
        marks = Number(marks);
        if (isNaN(marks)) {
            pTag.innerHTML = "Enter Valid Marks for subject";
            pTag.style.color = "red";
        } else {
            if (marks >= 35) {
                if (marks <= 100) {
                    pTag.innerHTML = "You have successfully passed for the " + sub + " subject";
                } else {
                    pTag.innerHTML = "Enter Valid Marks : Marks can't be greater than 100";
                }

            } else {
                pTag.innerHTML = "Sorry you have to work Hard for the " + sub + " subject";
            }
        }
    }
})