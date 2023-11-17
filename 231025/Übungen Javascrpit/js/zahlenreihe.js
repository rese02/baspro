"use strict";

let ausgabe = 2;
let summe = 0;

for (let i=1; i<=10; i++) {

    if (i===10) {
        document.write(ausgabe);
    } else {
        document.write(ausgabe + ', ');
    }

    summe = summe + ausgabe;
    ausgabe = ausgabe + 5;
  }

document.write('<br>Die Summe beträgt: ' + summe);
