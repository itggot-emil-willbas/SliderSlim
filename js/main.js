'use strict()';


let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');

let show1 = document.querySelector('.show-number-1');
let show2 = document.querySelector('.show-number-2');
let show3 = document.querySelector('.show-number-3');

let output = document.querySelector('#output');

const updateOutPut = () => {
    output.textContent = parseInt((Number(show1.innerText)+Number(show2.innerText)+Number(show3.innerText))/3);
}

one.addEventListener('input', (e) => {
    console.log("Nu ändras" + e.target.value);
    show1.innerText = e.target.value;
    updateOutPut();
})
two.addEventListener('input', (e) => {
    console.log("Nu ändras" + e.target.value);
    show2.innerText = e.target.value;
    updateOutPut();
})
three.addEventListener('input', (e) => {
    console.log("Nu ändras" + e.target.value);
    show3.innerText = e.target.value;
    updateOutPut();
})



