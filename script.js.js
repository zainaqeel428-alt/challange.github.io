 function AgeInDays(){
   var birthYear = prompt("What Year Were You Born..?"); 
   var AgeInDayss = (2018 - birthYear) * 365;
   var h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('You are'   +   AgeInDayss   +   'days old.');
   h1.setAttribute('Id', 'AgeInDays');
   h1.appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h1);
 }


 function reset() {
     document.getElementById('AgeInDays').remove();
 }



 // hello

 

// Challange 2: Cat generator


 function GenerateCat() {
     var image = document.createElement('img');
     var div = document.getElementById('flex-cat-gen');
     image.src ="https://cdn2.thecatapi.com/images/4q6.gif";
     div.appendChild(image);
 }


 
 // Challange:3 Rock,Paper,scissor

 function rpsGame(yourChoice){
     console.log('kkk');
      //var  humanChoice, botChoice;
      //humanChoice=yourChoice;
      //botChoice= numberTochoice(randTorpsInt());
      //botChoice= Math.floor(Math.random() * 3);
 }
   
     

      //alert(botchoice);
      //var result= decideWinner(humanChoice, botChoice);
      //var msg= finalMessage(result);
      //console.log(msg);
      //rpsFrontEnd(humanChoice, botChoice, result, msg);
 
 
 //function randTorpsInt(){
   //return Math.floor(Math.random() * 3);
 //}

 //function numberTochoice(number){
  //return 'scissors';
  //return [0, 1, 1][number];
 //}

 //function decideWinner(yourChoice, computerChoice){
  /*
  var rpsDatabase={
       'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
       'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
       'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
     };

     console.log(rpsDatabase);
     console.log(yourChoice);
     console.log(computerChoice);
     


     var yourScore =rpsDatabase[yourChoice][computerChoice];
     var computerScore =rpsDatabase[computerChoice][yourChoice];
     console.log(yourScore);
     console.log(computerScore);
     return [yourScore, computerScore];
     */

     //0 = rock, 1=paper, 2=sissor;

     /*console.log(yourChoice);
     console.log(computerChoice);

     if (yourChoice=0 && computerChoice==1)
     {
        result= 0 ;
     }
     else if (yourChoice=1 && computerChoice==0)
     {
       result=0 ;
     }
     else if (yourChoice=0 && computerChoice==2)
     {
       result = 0;
     }
     else if (yourChoice=2 && computerChoice==1)
     {
       result = 1 ;
     }
    else 
     {
        result = 0.5;
     }
     console.log(result);
     //return result;
 //}

 function finalMessage(result){
   if (result == "0") {
     return 'You lost!', 'color', 'red';
   } else if (result == "1") {
     return 'You Win', 'color', 'yellow';
   } else {
     return 'Tie', 'color', 'green';
   }
 }
  
 function rpsFrontEnd(humanChoice, botChoice, result, msg){
    var imagesDatabase ={
      'rock': document.getElementById('rock').src,
       'paper': document.getElementById('paper').src,
       'scissor': document.getElementById('scissor').src
    }
   

1- first image remove
2- first image replace with bot image
3- show msg in centre
*/


//function rpsFrontEnd(humanChoice, botChoice, result, msg)
//{
  //var imagesDatabase =[
     //'c:/Challenge and game/rock.jpg',
     //'c:/Challenge and game/paper.jpg',
     //'c:/Challenge and game/scissor.jpg'
  //];


 //document.getElementById('rock').remove();
 //document.getElementById('paper').remove();
 //document.getElementById('scissor').remove();


 //var humanDiv = document.createElement('div');
 //var botDiv = document.createElement('div');
  // msgdiv  = document.createElement('div')


//humanDiv.innerHTML="<src='" + imagesDatabase[humanChoice] + "'>";
//botDiv.innerHTML="<src='" + imagesDatabase[botChoice] + "' + >";
  
//console.log(humanDiv);
//console.log(botDiv);



//document.getElementById('flex-box-rps-div').appendChild(humanDiv);
//document.getElementById('flex-box-rps-div').appendChild(botDiv);

 




   
   




 // 1-remove all pics
 // 2-botpics put 
 
 
 //if (botChoice=0){
  //document.getElementById('rock').innerHTML="<img src='https://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
 //}
 //else if (botChoice=1){
  //console.log('i m checking 1');

  //document.getElementById("rock").innerHTML.src="'https://www.doxhub.org/wp-content/uploads/2019/01/Lined-paper-0.5-inch-left-side-border-letter-format-RED-BLUE.png' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"  
 //}
  //else if (botChoice=2){
    //console.log('i m checking 2');

    //document.getElementById("rock").innerHTML.scr ="'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkHtxy4Ph1FIMNsOFs8Vgs7mlBZeNbeuC2qWnKECzCuYtagBpH&usqp=CAU' height=150 width=150 style='box-shadow: opx 10px 50px rgba(37, 50, 233, 1);'>"
 // }
   
  //console.log(botChoice);



  // challange 4

{var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
}
var copyAllbuttons = [];
for (let i=0; i < all_buttons.length; i++) {
  copyAllbuttons.push(all_buttons[1]);
}
  
function buttonColorChange(buttonThingy){
  console.log(buttonThingy);   
}
function buttonthingy(){
  Array.from(document.querySelectorAll('button')).map(function(button) {
             button.style.backgroundColor="red";
            button.style.backgroundColor="green";
  
  
  })
  
  
  
  (function buttonColorChange(buttonthingy) {
  console.log(buttonthingy);
  if (buttonthingy.value = 'red') {
    buttonsRed();
} else if (buttonthingy.value = 'green') {
    buttonsGreen();
  } else if (buttonthingy.value = 'reset') {
    buttonColorReset();
  } else if (buttonthingy.value = 'random') {
    randomColors();
  }
})

//function buttonsRed(){
  console.log('i am in red');

}
  
  for (let i=0; i< all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[i]);
    all_buttons[i].classList.add('btn-danger');
  }
 
    document.getElementById('btn1').style.backgroundColor='red';   
    document.getElementById('btn2').style.backgroundColor='red';   
    document.getElementById('btn3').style.backgroundColor='red';
    
       


    //.innerHTML="button.style.backgroundColor='red'";



{Array.from(document.querySelectorAll('button')).map(function(button) {
  button.style.backgroundColor="green";
})
}

function buttonsred() {
  for (let i=0; i< all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[i]);
    all_buttons[i].classList.add('btn-danger');
  
  }
}
