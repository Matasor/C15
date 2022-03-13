class CannonBall{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.raio=30;
        this.body=Bodies.circle(this.x,this.y,this.raio,options);
        this.image=loadImage('./assets/cannonball.png');
    
    }
    shoot(){
    var newangle = cannon.angle- 28;
    newangle = newangle*(3.14/180);

    var velocity = p5.Vector.fromAngle(newangle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,{
    x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)
    });

}

    display(){
        var positionn=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,positionn.x,positionn.y,this.raio,this.raio);
        pop();
        
    }
}