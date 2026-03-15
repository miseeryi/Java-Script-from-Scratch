let userName 

document.getElementById("mysubmit").onclick = 
function (){
    userName = document.getElementById('mytext').value;
    document.getElementById("myh1").textContent = `Hai! ${userName}`;
}