class Drops{
    constructor(x,y,r){
        var options ={
            isStatic:false,
            friction:0.1,
            density:0.5
        }
        this.r=r;
        this.body= Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos,y) 
    ellipse(0,0,this.r,this,this.r)               
    fill("blue");
     pop();
    }
}