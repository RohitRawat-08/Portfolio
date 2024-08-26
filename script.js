
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














// !===============for html


let box1 = document.getElementById("box1")
let cross = document.getElementById("cross")
let skillName1 = document.getElementById("skillName")
let skillList1 = document.getElementById("skillList")

box1.addEventListener('click',toggle)
cross.addEventListener('click',toggle)

function toggle(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    skillName1.innerHTML="Html Skills"
    skillList1.innerHTML=`<li>one</li> <li>two</li> <li>Tree</li> <li>four</li> <li>five</li> `
    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}


// !===============for python

let box2 = document.getElementById("box2")
let skillName2 = document.getElementById("skillName")
let skillList2 = document.getElementById("skillList")

box2.addEventListener('click',toggle2)

function toggle2(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    skillName2.innerHTML="Python Skills"
    skillList2.innerHTML=`<li>one</li> <li>two</li> <li>Tree</li>`

    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}



// !===============for js

let box3 = document.getElementById("box3")
let skillName3 = document.getElementById("skillName")
let skillList3 = document.getElementById("skillList")

box3.addEventListener('click',toggle3)

function toggle3(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    skillName3.innerHTML="JavaScript Skills"
    skillList3.innerHTML=`<li>one</li> <li>two</li> <li>Tree</li>`

    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}




// !===============for css

let box4 = document.getElementById("box4")
let skillName4 = document.getElementById("skillName")
let skillList4 = document.getElementById("skillList")

box4.addEventListener('click',toggle4)

function toggle4(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    skillName4.innerHTML="CSS Skills"
    skillList4.innerHTML=`<li>one</li> <li>two</li> <li>Tree</li>`

    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}


// !===============for django

let box5 = document.getElementById("box5")
let skillName5 = document.getElementById("skillName")
let skillList5 = document.getElementById("skillList")

box5.addEventListener('click',toggle5)

function toggle5(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    skillName5.innerHTML="Django Skills"
    skillList5.innerHTML=`<li>one</li> <li>two</li> <li>Tree</li>`

    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}



// !===============for sql

let box6 = document.getElementById("box6")
let skillName6 = document.getElementById("skillName")
let skillList6 = document.getElementById("skillList")

box6.addEventListener('click',toggle6)

function toggle6(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    skillName6.innerHTML="sql Skills"
    skillList6.innerHTML=`<li>one</li> <li>two</li> <li>Tree</li>`

    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}