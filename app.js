function mymenufunctions(){
    var menuBtn = document.getElementById("mynavmenu");
    if(menuBtn.className==="nav-menu"){
        menuBtn.className += "responsive";

    }else{
        menuBtn.className = "nav-menu";
    }
}

// dark mode 



const body =document.querySelector("body"),
toogleSwitch = document.getElementById("toogle-switch");

toogleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
})