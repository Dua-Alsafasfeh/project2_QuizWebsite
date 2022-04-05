document.getElementById("btn2").onclick = function(){
    location.href = "register.html";
}

document.getElementById("btn1").onclick = function(){
    document.getElementById("pop").style.display = "flex";
}

document.getElementById("close").onclick = function(){
    document.getElementById("pop").style.display = "none";
}

let arrobj=JSON.parse(localStorage.data);
console.log(arrobj);

document.getElementById("button").onclick=function(){ 
    console.log("IN1");
    for(let i=0; i < arrobj.length; i++){
        console.log("i: "+i);
        console.log("arrobj.length: "+arrobj.length);
        if (arrobj[i].username == document.getElementById("name").value){
            if(arrobj[i].pass == document.getElementById("password").value){
             document.getElementById("main1").style.display="none";
             document.getElementById("main2").style.display="block";
             document.getElementById("pop").style.display="none";
             document.getElementById("welcome").textContent=arrobj[i].username;

                
            }else {
                document.getElementById("erroruser").textContent="user name and password are not matched";
            }
           
        }else{
            console.log("error");
            document.getElementById("erroruser").textContent="user name is not found";
        }
    
    }

}

document.getElementById("start").onclick = function(){
    location.href = "quizzes.html";
}