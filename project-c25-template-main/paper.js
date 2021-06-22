class paper
{ constructor(x, y, width, height) {
    var options={ 
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
}

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("paper.png");	
    World.add(world, this.body);
    }

    
    

    display(){
       
    
			push()
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
			translate(this.body.x,this.body.y);
			ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);
			strokeWeight(4);
			stroke("black");
			fill("blue");
            pop();
      }
    




}