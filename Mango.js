class Mango {
    constructor(x, y,r) {
        var options = {
          isStatic:true,
          friction :1,
          restitution:0
        }
        this.x = x;
        this.y = y;
        this.r=r;
        this.image = loadImage("images/mango1.png");
        this.body = Bodies.circle(x, y ,r,options);
        World.add(world, this.body);
      }
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}