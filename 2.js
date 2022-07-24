let pTag = document.querySelector('p');

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let rem_h = 24 - h;
let ampm = (h >= 12) ? "pm" : "am";
h = h % 12;
h = h ? h : 12;
h = h < 10 ? '0' + h : h;
m = m < 10 ? '0' + m : m;

pTag.innerHTML = "Now the time is " + h + " : " + m + ampm;
console.log(typeof(m));

let btn = document.querySelector('button');
rem_m = m;
if (m > 0) {
    rem_m = 60 - m;
    rem_h -= 1;
}

btn.innerHTML = "Remains " + rem_h + " hours and " + rem_m + " minutes more...";