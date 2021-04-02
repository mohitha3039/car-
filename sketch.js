var playercount =0
var database
var gamestate = 0
var game,form,player
var allPlayer
var car1,car2,car3,car4
var car1s,car2s,car3s,car4s
var cars=[]
var track 
function preload (){
car1=loadImage("car1.png")
car2=loadImage("car2.png")
car3=loadImage("car3.png")
car4=loadImage("car4.png")
track=loadImage("track.jpg")
}
  

function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database ()
   game=new Game ()
   game.readgamestate () 
   game.playthegame()
    
}

function draw(){
    background("white");
  if (playercount==4)
{
    game.writegamestate(1)
}  
if (gamestate==1)
{
  game.startgame ()
}
}


