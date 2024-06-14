let rateCousmter = document.getElementById("ratecoustmer");
let problem  = document.getElementById("problem");
let iconNav = document.getElementById("icon-nav");
let inpnutNav = document.getElementById("input-nav");
rateCousmter.addEventListener("click" , () => {
    window.scrollTo({
        top:2000,
        left:0,
        behavior:"smooth",
    });
});
problem.addEventListener("click" , () => {
    window.scrollTo({
        top:3000,
        left:0,
        behavior:"smooth",
    });
});
inpnutNav.onclick = () => {
    iconNav.classList.remove("icon-nav");
};
