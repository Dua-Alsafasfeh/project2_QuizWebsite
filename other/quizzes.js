let position = localStorage.usrpos, 
    pos,
    quiz = [
        [
            [
                "Q1: What does HTML stand for?",//0
                "Home Tool Markup Language",//1
                "Hyper Text Markup Language",//2
                "Hyperlinks and Text Markup Language",//3
                2
            ],
            [
                "Q2: Who is making the Web standards?",
                "Mozilla",
                "Microsoft",
                "The World Wide Web Consortium",
                "Google",
                3
            ],
            [
                "Q3: Choose the correct HTML element for the largest heading:",
                "<h1>",
                "<head>",
                "<heading>",
                "<h6>",
                1
            ],
            [
                "Q4: What is the correct HTML element for inserting a line break?",
                "<lb>",
                "<br>",
                "<break>",
                2
            ],
            [
                "Q5: What is the correct HTML for adding a background color?",
                '<body style="background-color:yellow;">',
                '<body bg="yellow">',
                '<background>yellow</background>',
                1
            ],
            [
                "Q6: Choose the correct HTML element to define important text:",
                " <b>",
                ' <strong>',
                ' <i>',
                ' <important>',
                2
            ],
            [
                'Q7: Choose the correct HTML element to define emphasized text:',
                ' <i>',
                ' <italic>',
                ' <em>',
                3
            ],
            [
                'Q8: What is the correct HTML for creating a hyperlink?',
                ' <a url="http://www.w3schools.com">W3Schools.com</a>',
                ' <a href="http://www.w3schools.com">W3Schools</a>',
                ' <a name="http://www.w3schools.com">W3Schools.com</a>',
                ' <a>http://www.w3schools.com</a>',
                2
            ],
            [
                'Q9: Which character is used to indicate an end tag?',
                ' /',
                ' *',
                ' ^',
                ' <',
                1
            ],
            [
                'Q10: How can you open a link in a new tab/browser window?',
                ' <a href="url" target="_blank">',
                ' <a href="url" new>',
                ' <a href="url" target="new">',
                1
            ]
        ],
        [
            [
                'Q1: What does CSS stand for?',
                ' Computer Style Sheets',
                ' Creative Style Sheets',
                ' Cascading Style Sheets',
                ' Colorful Style Sheets',
                3
            ],
            [
                'Q2: What is the correct HTML for referring to an external style sheet?',
                ' <style src="mystyle.css">',
                ' <stylesheet>mystyle.css</stylesheet>',
                ' <link rel="stylesheet" type="text/css" href="mystyle.css">',
                3
            ],
            [
                'Q3: Where in an HTML document is the correct place to refer to an external style sheet?',
                ' In the <body> section',
                ' At the end of the document',
                ' In the <head> section',
                3
            ],
            [
                'Q4: Which HTML tag is used to define an internal style sheet?',
                ' <style>',
                ' <script>',
                ' <css>',
                1
            ],
            [
                'Q5: Which HTML attribute is used to define inline styles?',
                ' class',
                ' styles',
                ' font',
                ' style',
                4
            ],
            [
                'Q6: Which is the correct CSS syntax?',
                ' body:color=black;',
                ' {body;color:black;}',
                ' body {color: black;}',
                ' {body:color=black;}',
                3
            ],
            [
                'Q7: How do you insert a comment in a CSS file?',
                " ' this is a comment",
                ' // this is a comment //',
                ' /* this is a comment */',
                ' // this is a comment',
                3
            ],
            [
                'Q8: Which property is used to change the background color?',
                ' background-color',
                ' bgcolor',
                ' color',
                1
            ],
            [
                'Q9: How do you add a background color for all <h1> elements?',
                ' h1 {background-color:#FFFFFF;}',
                ' h1.all {background-color:#FFFFFF;}',
                ' all.h1 {background-color:#FFFFFF;}',
                1
            ],
            [
                'Q10: Which CSS property is used to change the text color of an element?',
                ' fgcolor',
                ' color',
                ' text-color',
                2
            ]
        ],
        [
            [
                'Q1: Inside which HTML element do we put the JavaScript?',
                ' <scripting>',
                ' <javascript>',
                ' <js>',
                ' <script>',
                4
            ],
            [
                `Q2: What is the correct JavaScript syntax to change the content of the HTML element below? \n\n <p id="demo">This is a demonstration.</p>`,
                ' document.getElementById("demo").innerHTML = "Hello World!";',
                ' document.getElementByName("p").innerHTML = "Hello World!";',
                ' document.getElement("p").innerHTML = "Hello World!";',
                ' #demo.innerHTML = "Hello World!";',
                1
            ],
            [
                'Q3: Where is the correct place to insert a JavaScript?',
                ' The <head> section',
                ' The <body> section',
                ' Both the <head> section and the <body> section are correct',
                2
            ],
            [
                'Q4: What is the correct syntax for referring to an external script called "xxx.js"?',
                ' <script href="xxx.js">',
                ' <script name="xxx.js">',
                ' <script src="xxx.js">',
                3
            ],
            [
                'Q5: The external JavaScript file must contain the <script> tag.',
                ' False',
                ' True',
                1
            ],
            [
                'Q6: How do you write "Hello World" in an alert box?',
                ' alertBox("Hello World");',
                ' alert("Hello World");',
                ' msgBox("Hello World");',
                ' msg("Hello World");',
                2
            ],
            [
                'Q7: How do you create a function in JavaScript?',
                ' function = myFunction()',
                ' function:myFunction()',
                ' function myFunction()',
                3
            ],
            [
                'Q8: How do you call a function named "myFunction"?',
                ' call function myFunction()',
                ' call myFunction()',
                ' myFunction()',
                3
            ],
            [
                'Q9: How to write an IF statement in JavaScript?',
                ' if i = 5',
                ' if i == 5 then',
                ' if (i == 5)',
                ' if i = 5 then',
                3
            ],
            [
                'Q10: How to write an IF statement for executing some code if "i" is NOT equal to 5?',
                ' if i <> 5',
                ' if (i != 5)',
                ' if i =! 5 then',
                ' if (i <> 5)',
                2
            ]
        ]
    ],
    choice = document.getElementById("choice"),
    tfans = [],
    chosen = [],
    correct = [],
    arrcon;


switch (position) {
    case "HTML":
        pos = 0;
    break;

    case "CSS":
        pos = 1;
    break;

    case "JAVASCRIPT":
        pos = 2;
    break;
}

for (let r = 0; r < quiz[pos].length; r++) {
    tfans[r] = false;
    correct[r] = (quiz[pos][r][quiz[pos][r].length-1]-1);
}

/* *********************************************************************************** */

let minutes,
    seconds,
    distance = 600000;//600000

let x = setInterval(function() {

    distance = distance - 1000;

    minutes = String(Math.floor((distance/1000)/60));
    seconds = String(Math.floor(((distance - (minutes*60*1000))/1000)));


  if(seconds.length == 2){
    document.getElementById("timer").innerHTML = minutes+" : "+seconds;
  }else{
  document.getElementById("timer").innerHTML = minutes+" : 0"+seconds;
  }

  if (distance <= 0) {
    clearInterval(x);

    // location.href ="result.html";
    localStorage.tfarr = JSON.stringify(tfans);
    localStorage.chosen = JSON.stringify(chosen);
    localStorage.correct = JSON.stringify(correct);
    localStorage.quiz = JSON.stringify(quiz[pos]);

    document.getElementById("myform").submit();
  }
}, 1000);

/* *********************************************************************************** */

document.getElementById("qhead").textContent = position;

document.getElementById("question").textContent = quiz[pos][0][0];

let i = 0;

document.getElementById("qnum").textContent = "Q"+ (i+1) +" / 10";

document.getElementById("button").disabled = true;
document.getElementById("button").style.backgroundColor = "rgb(140 140 140)";

if(i < quiz[pos].length){

    document.getElementById("question").textContent = quiz[pos][i][0];

    for (let e = 1; e < quiz[pos][i].length-1; e++) {
        let chcontainer = document.createElement('div'),
            radioout = document.createElement('div'),
            inprad = document.createElement('input'),
            radioin = document.createElement('div'),
            answer = document.createElement('div');

        chcontainer.setAttribute("class", "chcontainer");
        let conarr = document.getElementsByClassName("chcontainer");
        chcontainer.onclick = function(){
            document.getElementById("button").disabled = false;
            document.getElementById("button").style.backgroundColor = "#34495e";

            arrcon = document.getElementsByClassName("chcontainer");
            for (let e = 0; e < arrcon.length; e++) {
                if(arrcon[e] == this){
                    tfans[i-1] = false;
                    console.log("index ans: "+(e)+" / Q"+i);
                    let a = (quiz[pos][i-1].length-1);
                    console.log("chosen: "+(e));
                    chosen[i-1] = e;
                    console.log("true answer: "+quiz[pos][i-1][a]);
                    if(quiz[pos][i-1][a] == (e+1)){
                        console.log(true);
                        tfans[i-1] = true;
                    }

                    console.log(this);
                }
            }

            console.log("tfans: "+tfans);

            for (let i = 0; i < conarr.length; i++) {
                conarr[i].childNodes[0].childNodes[0].style.backgroundColor = "unset";
            }
            this.childNodes[0].childNodes[0].style.backgroundColor = "#215fa7";

            this.childNodes[1].checked = true;
        }
        choice.appendChild(chcontainer);

        radioout.setAttribute("class", "radioout");
        chcontainer.appendChild(radioout);

        radioin.setAttribute("class", "radioin");
        radioout.appendChild(radioin);

        inprad.setAttribute("type", "radio");
        inprad.setAttribute("name", "answer");
        inprad.style.display = "none";
        chcontainer.appendChild(inprad);

        answer.setAttribute("class", "answer");
        chcontainer.appendChild(answer);
        answer.textContent = quiz[pos][i][e];
    }

    i++;
}

document.getElementById("button").onclick = function(){
    document.getElementById("progress").value++;
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "rgb(140 140 140)";

    console.log("up i: "+ i);
    if(i < quiz[pos].length){
        console.log("in i: "+ i);

        document.getElementById("question").textContent = quiz[pos][i][0];
        console.log("in ii: "+ i);


        document.getElementById("choice").innerHTML = "";   

        for (let e = 1; e < quiz[pos][i].length-1; e++) {
            let chcontainer = document.createElement('div'),
                radioout = document.createElement('div'),
                radioin = document.createElement('div'),
                inprad = document.createElement('input'),
                answer = document.createElement('div');

            chcontainer.setAttribute("class", "chcontainer");
            let conarr = document.getElementsByClassName("chcontainer");

            chcontainer.onclick = function(){
                document.getElementById("button").disabled = false;
                document.getElementById("button").style.backgroundColor = "#34495e";

                arrcon = document.getElementsByClassName("chcontainer");
                for (let e = 0; e < arrcon.length; e++) {
                    if(arrcon[e] == this){
                        tfans[i-1] = false;
                        console.log("index ans: "+(e)+" / Q"+i);
                        let a = (quiz[pos][i-1].length-1);
                        console.log("chosen: "+(e));
                        chosen[i-1] = e;
                        console.log("true answer: "+quiz[pos][i-1][a]);
                        if(quiz[pos][i-1][a] == (e+1)){
                            console.log(true);
                            tfans[i-1] = true;
                        }
                    }
                }

                console.log("tfans: "+tfans);

                for (let i = 0; i < conarr.length; i++) {
                    conarr[i].childNodes[0].childNodes[0].style.backgroundColor = "unset";
                }
                this.childNodes[0].childNodes[0].style.backgroundColor = "#215fa7";
                this.childNodes[1].checked = true;
            }

            choice.appendChild(chcontainer);

            radioout.setAttribute("class", "radioout");
            chcontainer.appendChild(radioout);

            radioin.setAttribute("class", "radioin");
            radioout.appendChild(radioin);

            inprad.setAttribute("type", "radio");
            inprad.setAttribute("name", "answer");
            inprad.style.display = "none";
            chcontainer.appendChild(inprad);

            answer.setAttribute("class", "answer");
            chcontainer.appendChild(answer);
            answer.textContent = quiz[pos][i][e];
        }

        document.getElementById("qnum").textContent = "Q"+ (i+1) +" / 10";

        if(i == quiz[pos].length-1){
            document.getElementById("button").textContent = "submit";
            document.getElementById("button").onclick = function(){
                localStorage.tfarr = JSON.stringify(tfans);
                localStorage.chosen = JSON.stringify(chosen);
                localStorage.correct = JSON.stringify(correct);
                localStorage.quiz = JSON.stringify(quiz[pos]);

                document.getElementById("myform").submit();
            }
        }
        i++;
    }
}