'use strict';

const forSchleife = document.querySelector('.for-schleife');
const whileSchleife = document.querySelector('.while-schleife');
const doWhileSchleife = document.querySelector('.do-while-schleife');

// for schleife

let ausgabe = 150;
const anzahlAusgabe = 15;

for (let i = 0; i <= anzahlAusgabe; i++) {
    if (i % 3 === 0) {
        forSchleife.innerHTML += `<span class="red">${ausgabe}</span><br>`;
    } else {
        forSchleife.innerHTML += `${ausgabe}<br>`;
    }
    ausgabe -= 21;
    if (i % 3 === 1) {
        forSchleife.innerHTML += `<span class="red">${ausgabe}</span><br>`;
    } else {
        forSchleife.innerHTML += `${ausgabe}<br>`;
    }
    ausgabe += 2;
}

// qhile schleife

let a = 0;
let ausgabe2 = 150;

while (a <= 15) {
    if (a % 3 === 0) {
        whileSchleife.innerHTML += `<span class="red">${ausgabe2}</span><br>`;
    } else {
        whileSchleife.innerHTML += `${ausgabe2}<br>`;
    }
    ausgabe2 -= 21;
    if (a % 3 === 1) {
        whileSchleife.innerHTML += `<span class="red">${ausgabe2}</span><br>`;
    } else {
        whileSchleife.innerHTML += `${ausgabe2}<br>`;
    }
    ausgabe2 += 2;
    a++;
}

// do while schleife

let b = 0;
let ausgabe3 = 150;

do {
    b++;
    if (b % 3 === 1) {
        doWhileSchleife.innerHTML += `<span class="red">${ausgabe3}</span><br>`;
    } else {
        doWhileSchleife.innerHTML += `${ausgabe3}<br>`;
    }
    ausgabe3 -= 21;
    if (b % 3 === 2) {
        doWhileSchleife.innerHTML += `<span class="red">${ausgabe3}</span><br>`;
    } else {
        doWhileSchleife.innerHTML += `${ausgabe3}<br>`;
    }
    ausgabe3 += 2;
} while (b <= 15);
