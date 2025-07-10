let theNum = Math.trunc(Math.random()*100) + 1;

let theNumEntered = document.getElementById("theNumEntered");

document.getElementById("submitBtn").onclick = function() {
    if(theNumEntered.value == theNum){
        document.getElementById("result").textContent = "Doğru bildin!! " + theNum;
    }
    if(theNumEntered.value > theNum){
        document.getElementById("result").textContent = "Daha küçük";
    }
    if(theNumEntered.value < theNum){
        document.getElementById("result").textContent = "Daha büyük";
    }
}
