class Game {
    constructor ()
    {}
    readgamestate (){
        var ref = database.ref("gamestate")
        ref.on("value",function(data)
        {
            gamestate = data.val()
        })
    }
    writegamestate(a){
        database.ref("/").update({
           gamestate:a
             
        })
    }
playthegame (){
    if (gamestate==0){
        player=new Player ()
        player.readplayercount()
        form=new Form ()
        form.display ()
    } 
    car1s=createSprite (100,100,50,50)
    car1s.addImage(car1)
    car2s=createSprite(200,100,50,50)
    car2s.addImage(car2)
    car3s=createSprite(300,100,50,50)
    car3s.addImage(car3)
    car4s=createSprite(400,100,50,50)
    car4s.addImage(car4)
    cars.push(car1s)
    cars.push(car2s)
    cars.push(car3s)
    cars.push(car4s)

}
startgame (){
    player.readallplayers ()
    var i =0 
    var x=200
    var y =0
    image (track,0,-displayHeight*5,displayWidth,displayHeight*4)
    for(var p in allPlayer )
    {
        i=i+1
        cars[i-1].x=x
        cars[i-1].y=displayHeight-allPlayer[p].distance
        x=x+200
      if (i==player.position)
      {
camera.position.x=displayWidth/2
camera.position.y=cars[i-1].y
      }
    }
    if (keyIsDown(UP_ARROW))
    {
        player.distance=player.distance+30
        player.createplayer() 
    }
    drawSprites()

    
}
}