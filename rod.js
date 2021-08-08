class rod  {
constructor (bodyA,bodyB){
    var options = {
        bodyA : bodyA,
        bodyB :bodyB,
        length : 50,
        stiffness :0.05
    }
    this.r = Constraint.create (options)
    World.add(world,this.r)
}
display (){
    line (this.r.bodyA.position.x,this.r.bodyA.position.y,this.r.bodyB.position.x,this.r.bodyB.position.y)
}

}