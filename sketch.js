const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

function preload() {
    
}

function setup(){
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(600,390,1200,20);
    stand1 = new Ground(940,160,190,10);
    stand2 = new Ground(490,305,250,10);

    polygon = new Dart(200,390);

    //small tier
    SPblock1 = new PinkBox(880,135,30,40);
    SPblock2 = new PinkBox(910,135,30,40);
    SPblock3 = new PinkBox(940,135,30,40);
    SPblock4 = new PinkBox(970,135,30,40);
    SPblock5 = new PinkBox(1000,135,30,40);
    SBblock6 = new BlueBox(910,95,30,40);
    SBblock7 = new BlueBox(940,95,30,40);
    SBblock8 = new BlueBox(970,95,30,40);
    SGblock9 = new GreenBox(940,55,30,40);

    //tall tier
    TPblock1 = new PinkBox(400,285,30,40)
    TPblock2 = new PinkBox(430,285,30,40);
    TPblock3 = new PinkBox(460,285,30,40);
    TPblock4 = new PinkBox(490,285,30,40);
    TPblock5 = new PinkBox(520,285,30,40);
    TPblock6 = new PinkBox(550,285,30,40);
    TPblock7 = new PinkBox(580,285,30,40);
    TBblock8 = new BlueBox(430,245,30,40);
    TBblock9 = new BlueBox(460,245,30,40);
    TBblock10 = new BlueBox(490,245,30,40);
    TBblock11 = new BlueBox(520,245,30,40);
    TBblock12 = new BlueBox(550,245,30,40);
    TGblock13 = new GreenBox(460,215,30,40);
    TGblock14 = new GreenBox(490,215,30,40);
    TGblock15 = new GreenBox(520,215,30,40);
    TLPblock16 = new PurpBox(490,165,30,40);

    launcher = new Chain(polygon.body,{x:200, y:200});
}

function draw(){
    background(100);
    Engine.update(engine);

    SPblock1.display();
    SPblock2.display();
    SPblock3.display();
    SPblock4.display();
    SPblock5.display();
    SBblock6.display();
    SBblock7.display();
    SBblock8.display();
    SGblock9.display();

    SPblock1.score();
    SPblock2.score();
    SPblock3.score();
    SPblock4.score();
    SPblock5.score();
    SBblock6.score();
    SBblock7.score();
    SBblock8.score();
    SGblock9.score();

    TPblock1.display();
    TPblock2.display();
    TPblock3.display();
    TPblock4.display();
    TPblock5.display();
    TPblock6.display();
    TPblock7.display();
    TBblock8.display();
    TBblock9.display();
    TBblock10.display();
    TBblock11.display();
    TBblock12.display();
    TGblock13.display();
    TGblock14.display();
    TGblock15.display();
    TLPblock16.display();

    TPblock1.score();
    TPblock2.score();
    TPblock3.score();
    TPblock4.score();
    TPblock5.score();
    TPblock6.score();
    TPblock7.score();
    TBblock8.score();
    TBblock9.score();
    TBblock10.score();
    TBblock11.score();
    TBblock12.score();
    TGblock13.score();
    TGblock14.score();
    TGblock15.score();
    TLPblock16.score();

    stand1.display();
    stand2.display();
    platform.display();
    launcher.display();   
    polygon.display();

    fill("white");
    strokeWeight(8);
    textSize(24);
    text("Score: " + score, 150, 100);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        launcher.attach(polygon.body);
    }
}

