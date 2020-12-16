class ground{
     constructor(x,y,w,r){
          var options = {isStatic = true}
        this.x  = x ;
        this.y  = y ;
        this.w  = w ;
        this.r  = r ;
     
        this.body = Bodies.rectangle(x,y,w,r,options) ;
        World.add(world , this.body) ;   
    }
}

display()
{
var groundPos = this.blody.postion ;
}