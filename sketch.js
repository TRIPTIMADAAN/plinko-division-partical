const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var plinko=[]
var partical=[]
var division=[]
var gameState="onSling";
var divisionHeight=300
function setup() {
 var canvas= createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  if(frameCount%60===0)
  {
    partical.push(new Partical(random(width/2-10,width/2+10),10,10))
}
if(frameCount%60===0)
{
  plinko.push(new Plinko(random(width/2-10,width/2+10),10,10))
}
for(var k=0;k<=width;k=k+80){
  division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}
for(var j=40;j<=width;j=j+50){
  plinko.push(new Plinko(j,75))
}
for(var j=15;j<=width-10;j=j+50){
  plinko.push(new Plinko(j,175))
}
for(var j=0;j<partical.length;j++){
partical[j].display();
}
for(var k=0;k<division.length;k++){
division[k].display();
}
for(var s=0;s<plinko.length;s++){
  plinko[s].display();
}

  drawSprites();
}