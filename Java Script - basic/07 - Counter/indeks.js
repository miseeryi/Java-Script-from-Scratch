const increaseCount = document.getElementById("increaseCount");
const resetCount = document.getElementById("resetCount");
const decreaseCount = document.getElementById("decreaseCount");
const counterLabel = document.getElementById("counterLabel");

let count = 0;

increaseCount.onclick = 
function(){
    count++;
    counterLabel.textContent = count;
}

decreaseCount.onclick = 
function(){
    count--;
    counterLabel.textContent = count;
}

resetCount.onclick = 
function(){
    count = 0;
    counterLabel.textContent = count;
}
