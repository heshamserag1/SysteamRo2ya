
const darkMode = document.getElementById("team");
theClick = true;
function darkModes (){
    if(theClick){
       document.body.style.background = "#000";
       theClick = false;
    }else {
        document.body.style.background = "#fff";
        theClick = true;
    }
};

// team and work // 
// page-1 // 
localStorage.getItem("dark","mode");
localStorage.data = JSON.stringify(darkMode);
let textPage1 = document.getElementById("text-1");
let textPage2 = document.getElementById("text-2");
function darkModePage1(){
   if(theClick){
    textPage1.style.background = "#000";
    textPage2.style.background = "#000";
    theClick = false;
   }else{
    textPage1.style.background = "rgba(0, 50, 135,1)";
    textPage2.style.background = "rgba(217 , 217 , 217 , 1)";
    theClick = true;
   }
};
// page-1 // 

// // // page-2 // 
let txt1 = document.getElementById("text-1");
let txt2 = document.getElementById("text-2");
let agza1 =document.getElementById("agaza-1");
let agza2 = document.getElementById("agaza-2");
function darkModePage2 (){
    if(theClick){
        document.body.style.background = "#000";
        txt1.style.color = "#fff";
        txt2.style.background = "#000";
        txt2.style.border = "none";
        agza1.style.color = "#000";
        agza1.style.backgroundColor = "#fff";
        agza2.style.color = "#000";
        agza2.style.backgroundColor = "#fff";
        theClick = false;
    } else{
        document.body.style.background = "#fff";
        txt1.style.color = "#000";
        txt2.style.background = "rgba(217 , 217 , 217 , 1)";
        agza1.style.color = "#000";
        agza1.style.backgroundColor = "#2b2929be";
        agza2.style.color = "#000";
        agza2.style.backgroundColor = "#2b2929be";
        theClick = true;
    }
};


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
};
function stopBtn () {
    if(isRunning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
};
function resetBtn () {
   clearInterval(timer);
     startTime = 0;
     elapsedTime = 0;
     isRunning = false;
     display.textContent = "00:00:00:00"
};
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

// page-2 //

// HomePage // 
const textHome1 = document.getElementById("text-1");
const textHome2 = document.getElementById("text-2");
const textHome3 = document.getElementById("text-3");
const textHome4 = document.getElementById("text-4");
function darkModeBtn (){
    if(theClick){
        document.body.style.background = "#000";
        textHome1.style.color = "#fff";
        textHome2.style.color = "#fff";
        textHome3.style.color = "#fff";
        textHome4.style.color = "#fff";
        theClick = false;
    }else{
        document.body.style.background = "#fff";
        textHome1.style.color = "#000";
        textHome2.style.color = "#000";
        textHome3.style.color = "#000";
        textHome4.style.color = "#000";
        theClick = true;
    }
};
// HomePage //