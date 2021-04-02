class Form {
    constructor (){
        this.heading = createElement ('h1')
        this.inputbox=createInput("enter the name")
       this.button=createButton ("Register")
       this. gretting=createElement('h2')
    }
    display (){
               this.heading.html ('welcome to my car racing ')
        this.heading.position(displayWidth/2-50,0)
       this.inputbox.position (displayWidth/2-40,displayHeight/2-80)
               this.button.position (displayWidth/2+30,displayHeight/2+60)
        this.button.mousePressed (()=>{
            player.name= this.inputbox.value ()
            playercount=playercount+1
            player.position=playercount
            player.writeplayercount(playercount)
            this.inputbox.hide()
            this.button.hide()
        player.createplayer ()    
this.gretting.html("hello agent "+player.name )
this.gretting.position(displayWidth/2-70,displayHeight/4)
        })
    }
}
