let i = 1;
let text = ''

while (i <= 5) {
    //console.log('Zeile:' + i);

    // text = text  ist das gleiche wie : text +=
    text += 'Zeile: ' + i + '<br>'
    i++;
}

document.getElementById('whileschleife').innerHTML =  text;
document.getElementById('whileschleife').style.color = 'red';