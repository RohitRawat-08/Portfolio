
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



window.addEventListener("scroll" ,()=>{
    
    if (scrollY > 0 && scrollY < 700){
        lhome.style.color="aqua";

        labout.style.removeProperty('color');
        lskills.style.removeProperty('color');
        lprojects.style.removeProperty('color');
        lcontact.style.removeProperty('color');
    }

    if (scrollY > 600 && scrollY < 1200){
        labout.style.color="aqua";
    
        lhome.style.removeProperty('color');
        lskills.style.removeProperty('color');
        lprojects.style.removeProperty('color');
        lcontact.style.removeProperty('color');
    }


    if (scrollY > 1200 && scrollY < 2000 ){
        lskills.style.color="aqua";

        lhome.style.removeProperty('color');
        labout.style.removeProperty('color');
        lprojects.style.removeProperty('color');
        lcontact.style.removeProperty('color');
    }

    if (scrollY > 2000 && scrollY < 3300 ){
        lprojects.style.color="aqua";

        lhome.style.removeProperty('color');
        labout.style.removeProperty('color');
        lskills.style.removeProperty('color');
        lcontact.style.removeProperty('color');
    }

    if (scrollY > 3300 && scrollY < 3650 ){
        lcontact.style.color="aqua";

        lhome.style.removeProperty('color');
        labout.style.removeProperty('color');
        lskills.style.removeProperty('color');
        lprojects.style.removeProperty('color');
    }

})























const form = document.querySelector("form");
console.log(form);

const FullName = document.getElementById('UserName');
const userEmail = document.getElementById('UserEmail');
const userNo = document.getElementById('UserNo');
const message = document.getElementById('UserMsg');

console.log(FullName.value)

function sendEmail(){
    const bodymsg = `FullName: ${FullName.value} <br> Email :${userEmail.value} <br> Phone Number : ${userNo.value} <br> meaasge:${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rsrawat2929@gmail.com",
        Password : "635D72BFE052ECBD7D9735DAB22C1C708087",
        To : 'rsrawat2929@gmail.com',
        From : 'rsrawat2929@gmail.com',
        // Username : "rawatrohan904@gmail.com",
        // Password : "78AE3E8ED8B6C1777164F23F0148ED2D420B",
        // To : 'rawatrohan904@gmail.com',
        // From : 'rawatrohan904@gmail.com',
        Subject : "New Contact form",
        Body: bodymsg
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    sendEmail();
})






















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
    skillList1.innerHTML=`<li>Html Tags like heading tags, formatting tags, audio tags, video tags, image tag ,anchor tag etc.</li> 
    <li>Elements and Attributes.</li> 
    <li>List : ordered, Unordered, description list.</li> 
    <li>Html Tables.</li>
     <li>Html forms</li> `
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
    skillList2.innerHTML=`<li> Complete knowledge of the basics of Python including Data Types, Loops, Functions, and
            condition Statements. </li> 
            <li>Having very good knowledge of String, List, Tuple, Set, and Dictionary.</li>
            <li>I possess a strong knowledge of Generators, Comprehensions, Decorators, Exception Handling,
            Regular Expressions, and File Handling.</li>
            <li> I have good knowledge of Object-Oriented Programming concepts.</li>`

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
    skillList3.innerHTML=`<li>JavaScript type , Data Type
        Looping Statements, Conditional Statements</li> 
        <li>BOM (Browser Object Model), DOM (Document Object Model)</li> 
        <li>Events, Promises, json</li> 
        <li>Async & Await</li> 
        <li>API & fetch API</li>`

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
    skillList4.innerHTML=`<li>CSS type , CSS Selectors.</li>
        <li>Properties in CSS like Text properties, Font properties, Background properties, Border properties</li>
        <li>Box Model, Display Properties : Flex, Grid, etc.</li>
        <li>Positions : Static, Fixed, Relative etc.</li>
        <li>Transform, Transition, Animation</li>
        <li>Media Query for adding responsiveness.</li>`

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
    skillList5.innerHTML=`<li> Knowledge about Templates Engine, URL Routing, views.</li> 
    <li>I have good knowledge of ORM (Object-relational mapper) concepts.</li>`

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

    skillName6.innerHTML="SQL Skills"
    skillList6.innerHTML=`<li> Extensive Knowledge in writing SQL queries, Excellent at performing CRUD operations on any RDBMS. </li> <li>Worked on topics like Joins, Sub-queries, Grouping, Functions, and Pseudo Columns.</li>
    <li>Knowledge of the Statements (DDL, DML, TCL, DCL, DQL) and also learned about the
    normalization of tables.</li>`

    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}















