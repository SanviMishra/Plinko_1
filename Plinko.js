class Plinko{

    constructor(x, y,radius){
        var options ={
            isStatic:true,
            restitution:0.3,
            friction:0.1,
            density:0.5
        }

        this.body=Bodies.circle(x, y,radius,options);
        this.r=radius;
         //this.ball=loadImage("paper.png");
         
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
       ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
       
    }

}