class Box{
    constructor(x,y,width,height)
    {
        var options={
            'restitution':1,
            'friction':0.3,
            'density':1.0
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    //this.body=Bodies.rectangle(200,100,50,50,options);
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
    }
      
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke('green');
        fill(255);
        //rect(pos.x,pos.y,this.width,this.height);
        rect(0,0,this.width,this.height);
        pop();
    }
}