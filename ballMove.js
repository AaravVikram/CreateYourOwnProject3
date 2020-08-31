class BallMove{
    constructor(){
        var options = {
          bodyA: ball.body,
          pointB: {x:400,y:550},
          length: 0,
          stiffness: 0.05

        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
  shoot(){
    this.sling.bodyA = null;
  }
}