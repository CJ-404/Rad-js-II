let inpTags = document.querySelectorAll(".inp");
// console.log(inpTags.length);
for (let index = 0; index < inpTags.length; index++) {
    inpTags[index].addEventListener("click", function() {
        if (inpTags[index].checked == 1) {
            for (let i = 0; i < inpTags.length; i++) {
                inpTags[i].disabled = "true";
                document.querySelectorAll("label")[i].style.color = "gray";
            }
        }
    });

}