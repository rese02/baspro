"use strict";

let a=1;
let b='1';
let c=1;

if (a===b) {
    c=4;
}   else {
    c=2;
}

console.log(' c hat den wert: ' + c);

let tag = new Date().getDate();

if (tag <= 15) {
    console.log("Wir sind in der ersten Hälfte des Monats.");
  } else {
    console.log("Wir sind in der zweiten Hälfte des Monats.");
  }

let GeraderTag = tag % 2 === 0;
  if (GeraderTag) {
    console.log("Heute ist ein gerader Tag.");
  } else {
    console.log("Heute ist ein ungerader Tag.");
  }
  