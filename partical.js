class Partical{
    constructor(x,y,r){
        var options={
            restitution:0.4,
            isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options)
        this.color=this.color(random(0,255),random(0,255),random(0,255))
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
        fill(this.color)
        ecllipseMode(CENTER)
        ecllipse(0,0,this.r,this.r)
        pop()
    }
}