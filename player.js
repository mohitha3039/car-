class Player {
    constructor ()
    {
        this.name=''
        this.distance=0
        this.position=null
    }
    readplayercount (){
        var ref = database.ref("playercount")
        ref.on("value",function(data)
        {
            playercount = data.val()
        })
    }
    writeplayercount(a){
        database.ref("/").update({
            playercount:a
             
        })
    }
    createplayer (){
var a = "allPlayer/player"+this.position 
database.ref(a).set ({
name:this.name,
distance:this.distance
})
    }
    
    readallplayers(){
        var ref = database.ref("allPlayer")
        ref.on("value",function(data)
        {
            allPlayer = data.val()
        })   
    }
}