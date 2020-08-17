class Paper {
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
        this.body = Bodies.circle(x, y, 20, options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

    
        fill("green");
        ellipse(pos.x, pos.y, 40);
    }
}