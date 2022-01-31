var clicks = 0;

function countClicks(){
document.getElementById('click').value = ++clicks;
document.getElementById('submit').innerHTML = clicks;
}


/* Timer countdown */
var secs=60;
var counter=setInterval(timer, 1000);

function timer(){
 secs--;
 if (secs <= 0){
 clearInterval(counter);
 document.getElementById("click").disabled = true;

 document.getElementById("seconds").innerHTML=0;
 return;

 }
 document.getElementById("seconds").innerHTML=secs;
}