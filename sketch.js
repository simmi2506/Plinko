const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;

function setup() {

    createCanvas(480, 750);

    engine = Engine.create();
    world = engine.world;


    border1 = new Ground(240, 748, 480, 15);
    border2 = new Ground(2, 375, 15, 750);
    border3 = new Ground(478, 375, 15, 750);

    for (var i = 0; i <= 480; i = i + 80) {
        divisions.push(new Bar(i, 750 - 300 / 2, 10, 300));
    }
   

}

function draw() {
    background(0);
    Engine.update(engine);
    border1.display();
    border2.display();
    border3.display();


    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 11));
    }
    for (var a = 0; a < particles.length; a++) {
        particles[a].display();
    }

    
}