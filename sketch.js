const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles=[];
var particle;
var man;
var manImg;
var thunder,thunder1,thunder2;
function setup() {
  
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    man=createSprite(550,300,50,50);
   
    umbrella=createSprite(450,300,50,50);
   manImg=loadImage("images/walking Frame/walking_1.png");
  //thunder1=loadImage("images/thunderbolt/1.png");
  

 }

function draw() {
  background("black"); 
  Engine.update(engine); 
 
  if(frameCount%1===0){
    particles.push(new Particle(random(0,1200),2,2));
   
  }
 

  for(var j=0; j<particles.length;j++){
     particles[j].display();
  }
   image(manImg, 500,210, 180,200);

  // //rand=Math.round(random(1,4))
  // if(frameCount%10===0){
  //   thunder=createSprite(random(10,370),random(10,30),10,10);
  // thunder.addImage(thunder1);
  
}