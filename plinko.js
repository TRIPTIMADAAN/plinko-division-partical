class Plinko{
    constructor(x,y,r){
        var options={
            restitution:0.4,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,r,options)
        this.radius=r
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
         push()
        translate(pos.x,pos.y)
        rotate(angle)
        //imageMade(CENTER)
        noStroke()
        ecllipseMode(CENTER)
        ecllipse(0,0,this.r,this.r)
        pop()
    }
}