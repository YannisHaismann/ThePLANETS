let navBtn = document.querySelector(".hamburger-icon");

navBtn.addEventListener("click", (e) => {
    let nav = document.querySelector("#nav");
    if(nav.style.display == "grid"){
        nav.style.display = "none"
        navBtn.style.opacity = "100%";
    }else{
        nav.style.display = "grid";
        navBtn.style.opacity = "50%";
    }
});