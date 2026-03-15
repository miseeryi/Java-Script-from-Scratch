document.getElementById("myh1").textContent = `Kalkulator Luas Lingkaran`;

const phi = 3.14;
let jari;
let sum;

document.getElementById("mysubmit").onclick = 
function(){
    jari = document.getElementById("mytext").value;
    jari = Number(jari);
    sum = phi * jari * jari;
    document.getElementById("myh3").textContent = `${sum} cm`

}