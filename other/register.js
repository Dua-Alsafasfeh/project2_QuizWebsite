'use strict';

let registerarray = [];
let callarr = [];

let chkfirst,
    chklast,
    chkmail,
    confmail,
    chkdate,
    chkpass,
    confpass;

let firstname;
let lastname;

let email;
let cem;
let bdate;
let pass;
let cpass;
let position = document.getElementById("pos").value;
localStorage.data;
if (localStorage.data != undefined) {
    callfromlocalstorage();
}

function register_constructor(first, last, email, bdate, pass, position, cem) {//constructor
    this.first = first;
    this.last = last;
    this.email = email;
    this.cem = cem;
    this.bdate = bdate;
    this.pass = pass;
    this.position = position;

    if (firstname && lastname && chkmail && confmail && chkdate && chkpass && confpass) {//this.username && this.email && this.pass &&this.position && this.cem 
        callarr.push(this);
        storeInlocalStorage();
        location.href = "../index.html";
    }
}

let fname,
    lname;


let registerform = document.getElementById("regform");
registerform.addEventListener("submit", function (event) {
    event.preventDefault();

    fname = document.getElementById("first").value;
    lname = document.getElementById("last").value;

    email = document.getElementById("mail").value;
    cem = document.getElementById("cmail").value;
    bdate = document.getElementById("date").value;
    pass = document.getElementById("pass").value;
    cpass = document.getElementById("cpass").value;
    position = document.getElementById("pos").value;

    new register_constructor(fname, lname, email, bdate, pass, position, cem);
});




//////// /Password/email id /name/date/expression code//////////////
let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
let letters = /^[A-Za-z]+$/;
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

////////////////////////////////user name////////////////////////////////////

function firstnameValidate() {
    firstname = document.getElementById("first").value;

    if (firstname == "") {
        document.getElementById("ferr").innerHTML = '<div class="error"> <i class="fa-solid fa-circle-exclamation"></i> &nbsp; Please enter your name </div>';
        firstname = false;
    }
    else if (!(letters.test(firstname))) {
        document.getElementById("ferr").innerHTML = '<div class="error"> <i class="fa-solid fa-circle-exclamation"></i>&nbsp; Name field required only alphabet characters </div>';
        firstname = false;
    }
    else {
        document.getElementById("ferr").innerHTML = "";
        firstname = true;
    }
}

function lastnameValidate() {

    lastname = document.getElementById("last").value;

    if (lastname == "") {
        document.getElementById("lerr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Please enter your name </div>";
        lastname = false;
    }
    else if (!(letters.test(lastname))) {
        document.getElementById("lerr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Name field required only alphabet characters </div>";
        lastname = false;
    }
    else {
        document.getElementById("lerr").innerHTML = "";
        lastname = true;
    }
}

document.getElementById("first").onchange = function () {
    firstnameValidate();
}
document.getElementById("first").onblur = function () {
    firstnameValidate();
}

document.getElementById("last").onchange = function () {
    lastnameValidate();
}
document.getElementById("last").onblur = function () {
    lastnameValidate();
}
//////////////////////////////// email ///////////////////
function emailvalidate() {
    email = document.getElementById("mail").value;

    if (email == '') {
        document.getElementById("merr").innerHTML = `<div class='error'> <i  class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Please enter your email </div>";
        chkmail = false;
    }
    else if (!filter.test(email)) {
        document.getElementById("merr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; invalid  email </div>";
        chkmail = false;
    }
    else {
        document.getElementById("merr").innerHTML = "";
        chkmail = true;
    }
}
document.getElementById("mail").onchange = function () {
    emailvalidate();
}
document.getElementById("mail").onblur = function () {
    emailvalidate();
}
//////////////////////////ce/////////////////////////////

function cemvalidate() {
    cem = document.getElementById("cmail").value;

    if (cem == '') {
        document.getElementById("cmerr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Please enter  Confirm Email </div>";
        confmail = false;
    }
    else if (email != cem) {
        document.getElementById("cmerr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Email not Matched </div>";
        confmail = false;
    }
    else {
        document.getElementById("cmerr").innerHTML = "";
        confmail = true;
    }
}

document.getElementById("cmail").onchange = function () {
    cemvalidate();
}
document.getElementById("cmail").onblur = function () {

    cemvalidate();
}


//////////////////////////////pass//////////////////
function passvalidate() {

    pass = document.getElementById("pass").value;

    if (pass == '') {
        document.getElementById("perr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Please enter Password </div>";
        chkpass = false;
    }
    else if (!pwd_expression.test(pass)) {
        document.getElementById("perr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Upper case, Lower case, Special character and Numeric letter are required in Password filed </div>";
        chkpass = false;
    }
    else {
        document.getElementById("perr").innerHTML = "";
        chkpass = true;
    }

    if (pass == cpass) {
        document.getElementById("cperr").innerHTML = "";
        confpass = true;
    }
}


document.getElementById("pass").onchange = function () {
    passvalidate();
}
document.getElementById("pass").onblur = function () {

    passvalidate();
}
////////////////////////// CONFIRM PASS/////////////////////////
function cpassvalidate() {
    pass = document.getElementById("pass").value;
    cpass = document.getElementById("cpass").value;


    if (cpass == '') {
        document.getElementById("cperr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Please enter  Confirm Password </div>";
        confpass = false;
    }
    else if (pass != cpass) {
        document.getElementById("cperr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + "&nbsp; Password not Matched </div>";
        confpass = false;
    }
    else {
        document.getElementById("cperr").innerHTML = "";
        confpass = true;
    }
}

document.getElementById("cpass").onchange = function () {
    cpassvalidate();
}
document.getElementById("cpass").onblur = function () {

    cpassvalidate();
}


////////////////////////////////    BIRTHDAY      ////////////////////////
function bdatevalidate() {
    bdate = document.getElementById("date").value;

    if (bdate == '') {
        document.getElementById("derr").innerHTML = `<div class='error'> <i class="fa-solid fa-circle-exclamation"></i>` + '&nbsp; Please enter your birthday </div>';
        chkdate = false;
    }


    else {
        document.getElementById("derr").innerHTML = "";
        chkdate = true;
    }
}

document.getElementById("date").onchange = function () {
    bdatevalidate();
}
document.getElementById("date").onblur = function () {

    bdatevalidate();
}



////////////////////////submit////////////////////////////////////////

function storeInlocalStorage() {

    localStorage.setItem("data", JSON.stringify(callarr));
}


function callfromlocalstorage() {
    for (let i = 0; i < JSON.parse(localStorage.getItem("data")).length; i++) {
        callarr.push(JSON.parse(localStorage.getItem("data"))[i]);
    }
}

/////////////////responsive//////////////////


// if (window.innerWidth < 814) {
//     document.getElementById("row1").appendChild(document.getElementById("enter1"));
//     document.getElementById("row2").appendChild(document.getElementById("enter2"));
//     document.getElementById("row3").appendChild(document.getElementById("enter3"));
//     document.getElementById("row4").appendChild(document.getElementById("enter4"));
//     document.getElementById("row5").appendChild(document.getElementById("enter5"));
//     document.getElementById("row6").appendChild(document.getElementById("enter6"));
//     document.getElementById("row7").appendChild(document.getElementById("enter7"));
//     document.getElementById("submit").style.marginLeft = "20%";
// }