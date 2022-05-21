x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
to_number = "";
speak_data = "";
apple = "";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
to_number = Number(content);
if(Number.isInteger(to_number)){
document.getElementById("status").innerHTML = "Started drawing apple";
draw_apple = "set";
} else{
  document.getElementById("status").innerHTML = "The speech has not recognized a number";
}
}

function preload(){
apple = loadImage("https://media.istockphoto.com/photos/red-apple-picture-id495878092?b=1&k=20&m=495878092&s=170667a&w=0&h=bJgILGFxOka0ymPlgilH8qaRxFhKole_M6IiYs6RyGM=")
}


function setup() {
 canvas = createCanvas(900, 600);
screen_width = window.innerWidth;
screen_height = window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number + "Apples Drawn";
    speak();
    for(var i = 1; i <= to_number;  i++){
    x = Math.floor(Math.random()* 700);
    y = Math.floor(Math.random()* 400);
   image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
