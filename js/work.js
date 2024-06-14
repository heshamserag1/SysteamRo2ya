theClick = true;
let textDark = document.getElementById("text-dark");
let text2 = document.getElementById("text-2");

function darkModeBtn() {
    if(theClick){
        document.body.style.background  = "#000";
        textDark.style.background = "#000";
        text2.style.color = "#fff";
        textDark.classList.add("sun");
        theClick = false;
    }else {
        document.body.style.background  = "#fff";
        textDark.style.background = "rgba(181, 181, 181, 0.776)";
        text2.style.color = "#000";
        theClick = true;
    }
};