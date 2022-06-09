class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:0.25,
restitution:0.8,

        }
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
this.x=x
this.y=y
this.r=r
this.image=loadImage("ball.png")
    }
    display(){
var angle=this.body.angle
var pos=this.body.position
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()
    }
}