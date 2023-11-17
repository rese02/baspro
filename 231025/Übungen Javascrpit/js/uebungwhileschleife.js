let i = 3;
let j = 1;
let text = '';

while (j <= 10) {
    text += i + ', ';
    i = i + 3;
    text += i + ', ';
    i = i - 2;
    j++;
}

document.getElementById('whileschleife').innerHTML = text;
