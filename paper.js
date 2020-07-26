class Paper{
    constructor(x,y,r)
    {
        var opt={
           
            restitution:0.9,
            friction:0.5,
            density:0.6
        }
        this.body=Bodies.circle(x,y,r,opt)
        this.r=r
        this.image=loadImage("sprites/paper (1).png")
        World.add(world,this.body)
    }
    display()
    {
        var pos =this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    imageMode(RADIUS);
    image(this.image,0,0,this.r,this.r)
    pop();
    }
}