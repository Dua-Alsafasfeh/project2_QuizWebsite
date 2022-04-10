let chosen = JSON.parse(localStorage.chosen),
    correct = JSON.parse(localStorage.correct),
    tfarr = JSON.parse(localStorage.tfarr),
    quiz = JSON.parse(localStorage.quiz),
    count=0,
    tab,
    chcontainer,
    radioout,
    radioin,
    input,
    text;

    for (let i = 0; i < tfarr.length; i++) {
        if(tfarr[i] == true){
            count++;
        }
        
    }

    if(count >= 5){
        document.getElementById("head").textContent = "Pass: " + count+"0%";
        document.getElementById("head").style.backgroundColor = "#00C897";
        document.body.style.backgroundColor = "#00C897";

    }else{
        document.getElementById("head").textContent = "Fail: " + count+"0%";
        document.getElementById("head").style.backgroundColor = "#d71b54";
        document.body.style.backgroundColor = "#d71b54";

    }

    document.getElementById("question").textContent = quiz[0][0];
    for(let i=1; i < quiz[0].length-1; i++){
        chcontainer = document.createElement("div");
        chcontainer.setAttribute("class", "chcontainer");
        document.getElementById("choice").appendChild(chcontainer);

        // document.getElementById("pop").appendChild(document.getElementById("qlist"));

        if((i-1) == correct[0]){
            chcontainer.style.backgroundColor = "rgb(56 178 149 / 50%)";
        }

        if((i-1) == chosen[0]){
            if(chosen[0] == correct[0]){
                chcontainer.style.backgroundColor = "rgb(56 178 149 / 50%)";
            }else{
                chcontainer.style.backgroundColor = "#c637609c";
            }
        }

        radioout = document.createElement("div");
        radioout.setAttribute("class", "radioout");
        chcontainer.appendChild(radioout);

        radioin  = document.createElement("div");
        radioin.setAttribute("class", "radioin");
        radioout.appendChild(radioin);

        input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "answer");
        input.style.display = "none";
        document.getElementById("choice").appendChild(input);

        text = document.createElement("p");
        text.setAttribute("class", "answer");
        text.textContent = quiz[0][i];
        chcontainer.appendChild(text);
    }
    let e = 0;

    for(let i=0; i < tfarr.length; i++){
        tab = document.createElement("div");
        tab.textContent = "Q"+(i+1);
        if(tfarr[i] == true){
            tab.setAttribute("class", "qt");
            tab.setAttribute("id", i+"q");
        }else{
            tab.setAttribute("class", "qf q");
            tab.setAttribute("id", i+"q");
        }
        document.getElementById("listhead").appendChild(tab);
        
/*********************************************************** */
/*********************************************************** */


        tab.onclick = function(){
            // if(e >= quiz[parseInt(this.id)].length-1){
            //     e = ;
            // }
            console.log(parseInt(this.id));
            document.getElementById("question").textContent = quiz[parseInt(this.id)][0];

            document.getElementById("choice").innerHTML = "";

            for(let i=1; i < quiz[parseInt(this.id)].length-1; i++){
                chcontainer = document.createElement("div");
                chcontainer.setAttribute("class", "chcontainer");
                document.getElementById("choice").appendChild(chcontainer);
        
                radioout = document.createElement("div");
                radioout.setAttribute("class", "radioout");
                chcontainer.appendChild(radioout);
        
                radioin  = document.createElement("div");
                radioin.setAttribute("class", "radioin");
                radioout.appendChild(radioin);

                if((i-1) == correct[parseInt(this.id)]){
                    chcontainer.style.backgroundColor = "rgb(56 178 149 / 50%)";
                }

                if((i-1) == chosen[parseInt(this.id)]){
                    if(chosen[parseInt(this.id)] == correct[parseInt(this.id)]){
                        chcontainer.style.backgroundColor = "rgb(56 178 149 / 50%)";
                    }else{
                        chcontainer.style.backgroundColor = "#c637609c";
                        radioin.style.backgroundColor = "#215fa7";

                    }
                }
        
                input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "answer");
                input.style.display = "none";
                document.getElementById("choice").appendChild(input);
        
                text = document.createElement("p");
                text.setAttribute("class", "answer");
                text.textContent = quiz[parseInt(this.id)][i];
                chcontainer.appendChild(text);
            }

            e++;
        }
    }

    document.getElementById("logout").onclick = function(){
        location.href = "../index.html";
    }

//background-color: rgb(56 178 149 / 50%);
//background-color: #c637609c;

document.getElementById("btns").onclick = function(){
    document.getElementById("qlist").style.display = "block";
    document.getElementById("btns").style.display = "none";
}