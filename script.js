
// <!-- ------challenge one------->
function clickMe(){
    let v = prompt("how old are you")
    let ageInDays = v * 365; 
    let h1 = document.createElement("h1");
    let message = document.createTextNode("you are " +  ageInDays+" days old")
    h1.appendChild(message);
    h1.setAttribute("id","ageInDays");
    document.getElementById("answer").appendChild(h1);
    // return v;
}
function reset1(){
    document.getElementById("ageInDays").remove()
}

// ----cat Generator-----//
function CatGenerator(){
let image = document.createElement("img")
let div = document.getElementById("catimage");
image.src = "kitty-oh.gif";
div.appendChild(image);
}
function reset(){
   document.getElementById("catimage").remove();
}


// ------rock paper game----


function rpsGame(yourchoice){
   console.log(yourchoice.id) 
   let humanchoice, botchoice;
   humanchoice = yourchoice.id;
   botchoice = numberTochoice(randTorpsInt());
   console.log("bot is " + botchoice);
   results = decideWinner(humanchoice, botchoice)
   console.log(results)
   message = finalMessage(results)
   console.log(message)
   rpsFrontEnd(yourchoice.id,botchoice,message)
}
function randTorpsInt(){
    return (Math.floor(Math.random()*3));
}
function  numberTochoice(number){
    return  (["rock","paper","scissors"][number]);
}
function decideWinner(yourchoice, computerchoice){
    rpsGamedatabase={
        "rock": {"scissors":1, "rock":0.5, "paper":0},
        "paper": {"rock":1, "paper":0.5,"scissors":0},
        "scissors":{"paper":1,"scissors":0.5,"rock":0}
    }
    let yourscore  = rpsGamedatabase[yourchoice][computerchoice]
    let computerscore = rpsGamedatabase[computerchoice][yourchoice]
    return [yourscore, computerscore];
}
function finalMessage([yourscore,computerscore]){
    if(yourscore === 0){
        return {"message": "You lost!", "color": "red"};
    }
    else  if(yourscore === 0.5){
        return {"message": "You tied!", "color": "yellow"};
    }
    else{
        return {"message": "You Won!", "color": "green"};
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice,finalMessage){
    let imagesDatabase = {
        'rock':document.getElementById("rock").src,
        'paper':document.getElementById("paper").src,
        'scissors':document.getElementById("scissors").src
    }
    
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    let humanDiv = document.createElement("div");
    let botdiv = document.createElement("div");
    let messagediv = document.createElement("div");
    // humandiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>" 
  humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice]  + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
  messagediv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
  botdiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1); margin-right:100px;'>"

 document.getElementById("flex-box-div").appendChild(humanDiv);
 document.getElementById("flex-box-div").appendChild(messagediv);
 document.getElementById("flex-box-div").appendChild(botdiv);

}




// challenge 4: change the color of buttons
let all_buttons = document.getElementsByTagName("button");
// console.log(all_buttons)

let copyAllbuttons=[];
for(let i = 0; i<all_buttons.length; i++){
    copyAllbuttons.push(all_buttons[i].classList[1]);
}
console.log(copyAllbuttons)
function buttonColorChange(buttonthingy){
   if(buttonthingy.value === "red"){
       buttonnRed();
   }
   else if(buttonthingy.value ==="green"){
       buttongreen()
   }
   else if(buttonthingy.value==="reset"){
       buttonColorReset()
   }
   else{
       randomcolors();
   }
}

function buttonnRed(){
    for(let i=0; i<all_buttons.length; i++){
        // console.log(all_buttons[i].classList[1])
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add("button2")
    }
}
function  buttongreen(){
    for(let i = 0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("green")
    }
}
function buttonColorReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllbuttons[i]);
    }
}
function randomcolors(){
    let choices = ["button1","button2","orange","gold","yellow","green","purple"]
    for(let i=0; i<all_buttons.length;i++){
        let  randomNumber = Math.floor(Math.random()*7);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}