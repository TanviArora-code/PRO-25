class Paper {
    constructor(x,y,radius){
        var options ={
            restitution : 0.3,
            friction : 0.5,
            density: 1.2

            
        }
    this.image = loadImage("paper.png");    
    this.body = Bodies.circle(x,y,20,options)
    World.add(world,this.body);
    this.radius = radius
    }
    display(){
       // ellipseMode(RADIUS);
        var position = this.body.position;
        translate(position.x,position.y);
        rotate(this.body.angle);
        //ellipse(position.x, position.y, this.radius, this.radius);
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius);
    }
}