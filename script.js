
let lhome = document.getElementById("lhome");
let labout = document.getElementById("labout");
let lskills = document.getElementById("lskills");
let lprojects = document.getElementById("lprojects");
let lcontact = document.getElementById("lcontact");
    
lhome.addEventListener("click",()=>{
    lhome.style.color="aqua";

    labout.style.removeProperty('color');
    lskills.style.removeProperty('color');
    lprojects.style.removeProperty('color');
    lcontact.style.removeProperty('color');

});

labout.addEventListener("click",()=>{
    labout.style.color="aqua";
    
    lhome.style.removeProperty('color');
    lskills.style.removeProperty('color');
    lprojects.style.removeProperty('color');
    lcontact.style.removeProperty('color');
});

lskills.addEventListener("click",()=>{
    lskills.style.color="aqua";

    lhome.style.removeProperty('color');
    labout.style.removeProperty('color');
    lprojects.style.removeProperty('color');
    lcontact.style.removeProperty('color');
});

lprojects.addEventListener("click",()=>{
    lprojects.style.color="aqua";

    lhome.style.removeProperty('color');
    labout.style.removeProperty('color');
    lskills.style.removeProperty('color');
    lcontact.style.removeProperty('color');
});

lcontact.addEventListener("click",()=>{
    lcontact.style.color="aqua";

    lhome.style.removeProperty('color');
    labout.style.removeProperty('color');
    lskills.style.removeProperty('color');
    lprojects.style.removeProperty('color');
});



let icons = document.getElementById("home")
console.log(icons)

if (window.innerWidth <= 600){
    console.log("hello")
}



// let navdiv = document.createElement("div");

// window.addEventListener('resize', ()=> {

//     if(window.innerWidth <= 750){
//         navdiv.style.height="55px";
//         navdiv.style.width="100vw";
//         navdiv.style.border="solid gold";
//     };
    
//     icons.append(navdiv);

// });







