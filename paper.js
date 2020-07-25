class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.rectangle(x,y,radius,radius,options);
        this.width=radius;
        this.height=radius;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
        //ellipse(pos.x,pos.y,this.width,this.height);
    }
};