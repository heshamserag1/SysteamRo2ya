let btn = document.getElementById("btn");
let breaks = document.getElementById("breaks");
let icon = document.getElementById("icon");
isClick = true;
function toggleBtn () {
    if(isClick) {
        breaks.style.display = "none";
        icon.style.transform = "rotate(0deg)";
        isClick = false;

    }else{
        breaks.style.display = "block";
        icon.style.transform = "rotate(180deg)";
        isClick = true;
    }
};

// stopwatch // 
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
function startBtn () {
    if (!isRunning){
        startTime = Date.now() - elapsedTime;
       timer = setInterval(update,10);
        isRunning = true;
        
    }
}
function stopBtn () {
    if(isRunning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function resetBtn () {
   clearInterval(timer);
     startTime = 0;
     elapsedTime = 0;
     isRunning = false;
     display.textContent = "00:00:00:00"
}
function update (){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60)) %60;
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milsenonds =Math.floor(elapsedTime % 1000 / 10);
    hours = String(hours).padStart(2 , "0");
    minutes = String(minutes).padStart(2 , "0");
    seconds = String(seconds).padStart(2 , "0");
    milsenonds = String(milsenonds).padStart(2 , "0"); 
    display.textContent = `${hours}:${minutes}:${seconds}:${milsenonds}`;
};
// stopwatch // 