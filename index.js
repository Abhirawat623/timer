const currentTime =document.querySelector(".para");
const allButton = document.querySelector(".btn-container");

let seconds= 0;
let minutes = 0;
let hours = 0;
let timerId= 0; //to optimise p of timer

function displayTime(hours,minutes,seconds){
currentTime.innerText =`${hours < 10 ? `0${hours}`:hours } : ${minutes <10 ? `0${minutes}` :minutes} : ${seconds<10? `0${seconds}`:seconds}`
}


function handleButtonClick(event){  //the below function is alled here, basicallly man logic for the timer
    const button = event.target.name;
if(button ==="start"){
timerId =setInterval(()=>{
seconds++;
if (seconds>58){    //if sec becomes 59,0 starts and minutes increase
    seconds = 0;
    minutes++;
    if(minutes>58){
minutes = 0;            //if min becomes 59,0 min starts and hour increaes
hours++;
    }
    
}


displayTime(hours,minutes,seconds); //it shows the above changed p acc to new inner html f function displayTime

},1000 );} //1000 is milisecnds here

if(button ==="stop"){
    clearInterval(timerId); //it stops the interval and holds previous value there; ---.clearInterval
}
if( button==="reset"){
    clearInterval(timerId);
    seconds = minutes = hours = 0;
    displayTime(hours,minutes,seconds)
}

}

allButton.addEventListener("click",handleButtonClick);