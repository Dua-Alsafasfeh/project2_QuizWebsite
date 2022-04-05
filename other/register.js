'use strict';

let registerarray=[];
let callarr = [];

let username;
let email;
let cem;
let bdate;
let pass;			
let cpass;
let position=document.getElementById("position").value;
localStorage.data;
if(localStorage.data != undefined){
    callfromlocalstorage();
}

function register_constructor(username,email,bdate,pass, position,cem){//////constructor
this.username=username;
this.email=email;
this.cem=cem;
this.bdate=bdate;
this.pass=pass;
this.position=position;


// registerarray.push(this);
if(this.username && this.email && this.pass &&this.position && this.cem ){
    callarr.push(this);
storeInlocalStorage(); 
location.href="../index.html";
}


}


let registerform = document.getElementById("regform");
registerform.addEventListener("submit",function(event){
    event.preventDefault();

    username= document.getElementById("Enter_Name").value;
    email= document.getElementById("Enter_Email").value;
    cem= document.getElementById("Enter_cEmail").value;
    bdate=document.getElementById("bday").value;
    pass= document.getElementById("Enter_Password").value;			
    cpass= document.getElementById("Confirm_Password").value;
    position=document.getElementById("position").value;

     new register_constructor(username,email,bdate,pass, position,cem);
    
     
});



    
    //////// /Password/email id /name/bday/expression code//////////////
    let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /^[A-Za-z]+$/;
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
////////////////////////////////user name////////////////////////////////////

  function usernameValidate() {
    username= document.getElementById("Enter_Name").value;
    if(username=="")
    {
     document.getElementById("errorFN").innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`+"Please enter your name";
    }
   else if(!letters.test(username))
    {
        document.getElementById("errorFN").innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`+"Name field required only alphabet characters";
    }
    else{
        document.getElementById("errorFN").innerHTML="";
    }    
  }

  document.getElementById("Enter_Name").onchange = function () {
        usernameValidate();  
  }
   document.getElementById("Enter_Name").onblur= function (){
       usernameValidate();    
  }
   ////////////////////////////////  email        ///////////////////
   function emailvalidate() {
        email=document.getElementById("Enter_Email").value; 
       
   if(email=='')
    {
        document.getElementById("errorFN2").innerHTML=`<i  class="fa-solid fa-circle-exclamation"></i>`+" Please enter your email id";
    }
    else if (!filter.test(email))
    {
   
      document.getElementById("errorFN2").innerHTML=
      `<i class="fa-solid fa-circle-exclamation"></i>`+"nvalid email";
   } 
   else{
    document.getElementById("errorFN2").innerHTML="";
}   
  }
    document.getElementById("Enter_Email").onchange = function () {
        emailvalidate();  
   }
    document.getElementById("Enter_Email").onblur= function (){
        emailvalidate();    
   }
  //////////////////////////ce/////////////////////////////

  function cemvalidate()
         {
          
            cem= document.getElementById("Enter_cEmail").value;
      

     if (cem=='')
      {
      document.getElementById("errorFN6").innerHTML=
     ` <i class="fa-solid fa-circle-exclamation"></i>`+"Please enter  Confirm Email";  
    }
      else if (email!= cem)
        {
            document.getElementById("errorFN6").innerHTML=
            `<i class="fa-solid fa-circle-exclamation"></i>`+"Email not Matched";

        }
       
      
    else {
        document.getElementById("errorFN6").innerHTML="";
    } 
}

    document.getElementById("Enter_cEmail").onchange = function ()
    {
        cemvalidate();  
  }
   document.getElementById("Enter_cEmail").onblur= function ()
   {

    cemvalidate();    
  }


    //////////////////////////////pass//////////////////
    function passvalidate() {
   
        pass= document.getElementById("Enter_Password").value;
        
       if(pass=='')
        {
            document.getElementById("errorFN4").innerHTML=
            `<i class="fa-solid fa-circle-exclamation"></i>`+"Please enter Password";
        } 
        else if(!pwd_expression.test(pass))
        {
            document.getElementById("errorFN4").innerHTML=
            `<i class="fa-solid fa-circle-exclamation"></i>`+ "Upper case, Lower case, Special character and Numeric letter are required in Password filed";
        }
        else{
            document.getElementById("errorFN4").innerHTML="";
        }   
       }
        document.getElementById("Enter_Password").onchange = function ()
         {
            passvalidate();  
       }
        document.getElementById("Enter_Password").onblur= function ()
        {
      
       passvalidate();    
       }
        ////////////////////////// CONFIRM PASS/////////////////////////
        function cpassvalidate()
         {
            pass= document.getElementById("Enter_Password").value;
            cpass= document.getElementById("Confirm_Password").value;
      

     if (cpass=='')
      {
      document.getElementById("errorFN5").innerHTML=
     ` <i class="fa-solid fa-circle-exclamation"></i>`+"Please enter  Confirm Password";  
    }
      else if (pass!= cpass)
        {
            document.getElementById("errorFN5").innerHTML=
            `<i class="fa-solid fa-circle-exclamation"></i>`+"Password not Matched";

        }
       
      
    else {
        document.getElementById("errorFN5").innerHTML="";
    } 
}

    document.getElementById("Confirm_Password").onchange = function ()
    {
        cpassvalidate();  
  }
   document.getElementById("Confirm_Password").onblur= function ()
   {

    cpassvalidate();    
  }

  
   ////////////////////////////////    BIRTHDAY      ////////////////////////
    function bdatevalidate()
     {
        bdate=document.getElementById("bday").value;

        if(bdate=='')
        {
            document.getElementById("errorFN3").innerHTML=
            `<i class="fa-solid fa-circle-exclamation"></i>`+'Please enter your birthday';
        }
 
     
    else {
        document.getElementById("errorFN3").innerHTML="";
    } 
     }

    document.getElementById("bday").onchange = function ()
    {
        bdatevalidate();  
  }
   document.getElementById("bday").onblur= function ()
   {

    bdatevalidate();    
  }


     
////////////////////////submit////////////////////////////////////////

function storeInlocalStorage(){
    
    localStorage.setItem("data",JSON.stringify(callarr));
   console.log(callarr); 
}


function callfromlocalstorage(){

  JSON.parse(localStorage.getItem("data"));
  console.log(JSON.parse(localStorage.getItem("data")));
  for(let i=0 ; i<JSON.parse(localStorage.getItem("data")).length; i++){
      callarr.push(JSON.parse(localStorage.getItem("data"))[i]);
      console.log(callarr);
  }
}

/////////////////responsive//////////////////


if(window.innerWidth < 814){
    document.getElementById("row1").appendChild(document.getElementById("enter1"));
    document.getElementById("row2").appendChild(document.getElementById("enter2"));
    document.getElementById("row3").appendChild(document.getElementById("enter3"));
    document.getElementById("row4").appendChild(document.getElementById("enter4"));
    document.getElementById("row5").appendChild(document.getElementById("enter5"));
    document.getElementById("row6").appendChild(document.getElementById("enter6"));
 
}