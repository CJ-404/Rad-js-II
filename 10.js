let left = "NAN";
let right = "NAN";
let pTag = document.querySelector(".display");

let ad = 0;
let su = 0;
let mul = 0;
let di = 0;
let end = 0;

document.querySelector(".ac").addEventListener("click", function() {
    pTag.innerHTML = "";
    left = "NAN";
    right = "NAN";
})

let numbersTags = document.querySelectorAll(".input");

function start() {
    for (let i = 0; i < numbersTags.length; i++) {
        numbersTags[i].addEventListener("click", leftInit)
    }
}

function leftInit() {
    if (isNaN(Number(left))) {
        left = this.innerHTML;
        pTag.innerHTML = left;
    } else {
        left = left + this.innerHTML;
        pTag.innerHTML = left;
    }

    document.querySelector(".add").addEventListener("click", mid);
    document.querySelector(".sub").addEventListener("click", mid);
    document.querySelector(".mult").addEventListener("click", mid);
    document.querySelector(".div").addEventListener("click", mid);


}

function rightInit() {
    if (isNaN(Number(right))) {
        right = this.innerHTML;
    } else {
        right = right + this.innerHTML;
    }
    pTag.innerHTML = right;

}

let eqTags = document.querySelectorAll(".eq");

function mid() {
    if (this.innerHTML == '+') {
        ad = 1;
    } else if (this.innerHTML == '-') {
        su = 1;
    } else if (this.innerHTML == '*') {
        mul = 1;
    } else if (this.innerHTML == '/') {
        di = 1;
    }
    pTag.innerHTML = "";
    for (let i = 0; i < numbersTags.length; i++) {
        numbersTags[i].removeEventListener("click", leftInit);
    }
    for (let i = 0; i < numbersTags.length; i++) {
        numbersTags[i].addEventListener("click", rightInit)
    }

    for (let i = 0; i < eqTags.length; i++) {
        eqTags[i].addEventListener("click", seteq);
    }


}



function seteq() {
    if (ad == 1) {
        pTag.innerHTML = Number(left) + Number(right);
    } else if (su == 1) {
        pTag.innerHTML = Number(left) - Number(right);
    } else if (mul = 1) {
        pTag.innerHTML = Number(left) * Number(right);
    } else if (di == 1) {
        pTag.innerHTML = Number(left) / Number(right);
    }
    ad = 0;
    su = 0;
    mul = 0;
    di = 0;
    for (let j = 0; j < eqTags.length; j++) {
        eqTags[j].removeEventListener("click", seteq);
    }
    for (let i = 0; i < numbersTags.length; i++) {
        numbersTags[i].removeEventListener("click", rightInit)
    }
    document.querySelector(".add").removeEventListener("click", mid);
    document.querySelector(".sub").removeEventListener("click", mid);
    document.querySelector(".mult").removeEventListener("click", mid);
    document.querySelector(".div").removeEventListener("click", mid);
    left = "NAN";
    right = "NAN";
    document.querySelector("button").style.display = "block";

}

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    this.style.display = "none";
    start();
});