const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  paperObj,dustbinObj,groundObj,render,Render,DustbinIamge,CrumpledPaperImage ;
var box1,box2,box3 ;

function preload(){
  box1,box2,box3 = loadImage(Dustbin.png) ;
  paper = loadImage(CrumpledPaper.png) ;
}
function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER) ;

  box1 = createSprite(650,550,200,20);
  box1.shapeColor = "red" ;

  box2 = createSprite(540,510,20,100) ;
  box2.shapeColor = "red" ;
  
  box3 = createSprite(760,510,20,100) ;
  box3.shapeColor = "red" ;

  var render = Render.create({
    element : document.body ,
    engine : engine ,
    option : {
       width : 1200 ,
       height : 700 ,
       wireframes : false
   }
 });
}

function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display() ;
  paperObj.display() ;
 
  paper.display() ;
  ground.display() ;

  drawSprites();
}

function keyPreesed (){
   if(keyCode === DOWN_ARROW) {
	    Matter.Body.applyEorce(paperObject.body,paperObject.body.position,{x : 85 , y : -85}) 
   }
}