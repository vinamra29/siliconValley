const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine, world,bodies,constraint



var bg, bgImg, fisherman,fishermanImg
var shark , sharkImg , sharkImg2
var fish1,fish1Img,fish1Group1
var fish2,fish2Img,fish2Group2
var fish3,fish3Img,fish3Group3
var fish4,fish4Img,fish4Group4
var fish5, fish5Img,fish5Group5
var edges, hook , hookImg, hook2
var ball , box ,box2,rod2,rod1
var score = 0
var score2 = 0
var basket1, basket2,basketImg
function preload (){
bg = loadImage ("pond.jpg")
fishermanImg = loadImage ("th-removebg-preview (1).png")
sharkImg = loadAnimation ("sharkm2-removebg-preview.png","mshark1-removebg-preview.png","mshark3-removebg-preview.png")
fish2Img = loadImage("fish2-removebg-preview.png")
fish3Img = loadImage("fish3-removebg-preview.png")
fish4Img = loadImage("fish4-removebg-preview.png")
fish1Img = loadImage("fish1-removebg-preview.png")
fish5Img = loadImage ("fish5.png")
sharkImg2 = loadAnimation ("fm2.png","fm1.png","fm3.png")
hookImg = loadImage ("hk.png")
basketImg = loadImage ("basket.png")
}


function setup() {
  engine = Engine.create();
  world = engine.world
  createCanvas(windowWidth,windowHeight);
  fisherman = createSprite(1000, 200, 50, 50);
  fisherman.addImage(fishermanImg)
  fisherman .velocityX = 2
  shark = createSprite (1000,400,10,10)
  shark.addAnimation("sharkImg",sharkImg)
  shark.scale=1
  shark.velocityX = -5
  
  shark.setCollider ("rectangle",0,0,220,80)
  edges = createEdgeSprites()
  fish1Group1 = createGroup()
  hook = createSprite(900,500,10,10)
  hook.addImage (hookImg)
  hook.scale = 0.03
  hook.velocityX= 2
  hook2 = createSprite(1100,500,10,10)
  hook2.addImage (hookImg)
  hook2.scale = 0.03
  hook2.velocityX= 2
  fish2Group2 = createGroup()
  ball = createSprite (700,250,100,100)
 ball.visible = false
  fish3Group3 = createGroup()
  box = createSprite (1085,250,20,20)
  box.velocityX = 2
  box.visible = false
basket1 = createSprite(200,150,10,10)
basket1.addImage(basketImg)
basket1.scale= 0.2
basket2 = createSprite(400,160,10,10)
basket2.addImage(basketImg)
basket2.scale= 0.2
 box2 = createSprite (930,250,20,20)
 
 box2.velocityX = 2
 box2.visible = false
 rod1 = new rod (box2,hook)
 rod2 = new rod (box,hook2)
  fish4Group4 = createGroup()

  fish5Group5 = createGroup()
 
}

function draw() {
  
  background(bg); 
 textSize (20)
 fill ("black")
 text ("SCORE : "+score,200,50)
 text ("SCORE : "+score2,1400,50)
  shark.collide(edges[3])
 
  shark.collide(edges[2])
  if (shark.collide(edges[0])){
    shark.addAnimation("sharkImg",sharkImg2)
    shark.velocityX = 5
  }
  if (shark.collide(edges[1])){
    shark.addAnimation("sharkImg",sharkImg)
    shark.velocityX = -5
  }
  if (fisherman.collide(edges[1])){
    fisherman.velocityX = - 2
    hook.velocityX = -2
    hook2.velocityX = -2
    box2.velocityX = -2
    box.velocityX = -2
  }
  if (fisherman.collide(ball)){
    fisherman.velocityX =  2
    hook.velocityX = 2
    hook2.velocityX = 2
    box2.velocityX = 2
    box.velocityX = 2
  }
  spawnFish1() 
  spawnFish2()
  spawnFish3()
  spawnFish4()
  spawnFish5()

  drawSprites();
  rod1.display()
  rod2.display()
 
  
  if (keyDown ("DOWN_ARROW")){
    hook.y = hook.y+10
  }
  if (keyDown("UP_ARROW")){
    hook.y = hook.y-10
  }
  
  if (hook.y<fisherman.y+30){
    hook.y = fisherman.y +50
  }
if (fish1Group1.isTouching(hook)||fish1Group1.isTouching(hook2)){


  for (i=0;i<fish1Group1.length;i++){
  if (fish1Group1.get(i).isTouching(hook)){
    fish1Group1.get(i).y = hook.y
    fish1Group1.get(i).x = hook.x
    
   
  }
 
  if (fish1Group1.get(i).isTouching(hook2)){
    fish1Group1.get(i).y = hook2.y
    fish1Group1.get(i).x = hook2.x
  }
  if (fish1Group1.get(i).y<350&& fish1Group1.get(i).isTouching(hook)){
  fish1Group1.get(i).x = 200
  fish1Group1.get(i).y = 140
  fish1Group1.get(i).velocityX = 0
  hook.y = fisherman.y +50
  hook.x = fisherman.x -100
  score = score +3
  }
  
  if (fish1Group1.get(i).y<350&& fish1Group1.get(i).isTouching(hook2)){
    fish1Group1.get(i).x = 400
    fish1Group1.get(i).y = 150
    fish1Group1.get(i).velocityX = 0
    hook2.y = fisherman.y +50
   
    score2 = score2 +3
    }
    if (shark.isTouching(hook)&& shark.isTouching(fish1Group1.get(i))){
      fish1Group1.get(i).remove()
    }
    if (shark.isTouching(hook2)&& shark.isTouching(fish1Group1.get(i))){
      fish1Group1.get(i).remove()
    }
}
}else if (fish2Group2.isTouching(hook)||fish2Group2.isTouching(hook2)){
for (i=0;i<fish2Group2.length;i++){
  if (fish2Group2.get(i).isTouching(hook)){
    fish2Group2.get(i).y = hook.y
    fish2Group2.get(i).x = hook.x
  }
  if (fish2Group2.get(i).isTouching(hook2)){
    fish2Group2.get(i).y = hook2.y
    fish2Group2.get(i).x = hook2.x
  }
  if (fish2Group2.get(i).y<350&& fish2Group2.get(i).isTouching(hook)){
    fish2Group2.get(i).x = 200
    fish2Group2.get(i).y = 140
    fish2Group2.get(i).velocityX = 0
    hook.y = fisherman.y +50
    hook.x = fisherman.x -100
    score = score +5
    }
    if (fish2Group2.get(i).y<350&& fish2Group2.get(i).isTouching(hook2)){
      fish2Group2.get(i).x = 400
      fish2Group2.get(i).y = 150
      fish2Group2.get(i).velocityX = 0
      hook2.y = fisherman.y +50
     
      score2 = score2 +5
      }
      if (shark.isTouching(hook)&& shark.isTouching(fish2Group2.get(i))){
        fish2Group2.get(i).remove()
      }
      if (shark.isTouching(hook2)&& shark.isTouching(fish2Group2.get(i))){
        fish2Group2.get(i).remove()
      }
}
}else if (fish3Group3.isTouching(hook)||fish3Group3.isTouching(hook2)){
for (i=0;i<fish3Group3.length;i++){
  if (fish3Group3.get(i).isTouching(hook)){
    fish3Group3.get(i).y = hook.y
    fish3Group3.get(i).x = hook.x
  }
  if (fish3Group3.get(i).isTouching(hook2)){
    fish3Group3.get(i).y = hook2.y
    fish3Group3.get(i).x = hook2.x
  }
  if (fish3Group3.get(i).y<350&& fish3Group3.get(i).isTouching(hook)){
    fish3Group3.get(i).x = 200
    fish3Group3.get(i).y = 140
    fish3Group3.get(i).velocityX = 0
    hook.y = fisherman.y +50
    hook.x = fisherman.x -100
    score = score +1
    }
    if (fish3Group3.get(i).y<350&& fish3Group3.get(i).isTouching(hook2)){
      fish3Group3.get(i).x = 400
      fish3Group3.get(i).y = 150
      fish3Group3.get(i).velocityX = 0
      hook2.y = fisherman.y +50
     
      score2 = score2 +1
      }
      if (shark.isTouching(hook)&& shark.isTouching(fish3Group3.get(i))){
        fish3Group3.get(i).remove()
      }
      if (shark.isTouching(hook2)&& shark.isTouching(fish3Group3.get(i))){
        fish3Group3.get(i).remove()
      }
}
}else if (fish4Group4.isTouching(hook)||fish4Group4.isTouching(hook2)){
for (i=0;i<fish4Group4.length;i++){
  if (fish4Group4.get(i).isTouching(hook)){
    fish4Group4.get(i).y = hook.y
    fish4Group4.get(i).x = hook.x
  }
  if (fish4Group4.get(i).isTouching(hook2)){
    fish4Group4.get(i).y = hook2.y
    fish4Group4.get(i).x = hook2.x
  }
  if (fish4Group4.get(i).y<350&& fish4Group4.get(i).isTouching(hook)){
    fish4Group4.get(i).x = 200
    fish4Group4.get(i).y = 140
    fish4Group4.get(i).velocityX = 0
    hook.y = fisherman.y +50
    hook.x = fisherman.x -100
    score = score +4
    }
    if (fish4Group4.get(i).y<350&& fish4Group4.get(i).isTouching(hook2)){
      fish4Group4.get(i).x = 400
      fish4Group4.get(i).y = 150
      fish4Group4.get(i).velocityX = 0
      hook2.y = fisherman.y +50
    
      score2 = score2 +4
      }
      if (shark.isTouching(hook)&& shark.isTouching(fish4Group4.get(i))){
        fish4Group4.get(i).remove()
      }
      if (shark.isTouching(hook2)&& shark.isTouching(fish4Group4.get(i))){
        fish4Group4.get(i).remove()
      }
}
}else if (fish5Group5.isTouching(hook)||fish5Group5.isTouching(hook2)){
for (i=0;i<fish5Group5.length;i++){
  if (fish5Group5.get(i).isTouching(hook)){
    fish5Group5.get(i).y = hook.y
    fish5Group5.get(i).x = hook.x
  }
  if (fish5Group5.get(i).isTouching(hook2)){
    fish5Group5.get(i).y = hook2.y
    fish5Group5.get(i).x = hook2.x
  }
  if (fish5Group5.get(i).y<350&& fish5Group5.get(i).isTouching(hook)){
    fish5Group5.get(i).x = 200
    fish5Group5.get(i).y = 140
    fish5Group5.get(i).velocityX = 0
    hook.y = fisherman.y +50
    hook.x = fisherman.x -100
    score = score +2
    }
    if (fish5Group5.get(i).y<350&& fish5Group5.get(i).isTouching(hook2)){
      fish5Group5.get(i).x = 400
      fish5Group5.get(i).y = 150
      fish5Group5.get(i).velocityX = 0
      hook2.y = fisherman.y +50
     
      score2 = score2 +2
      }
      if (shark.isTouching(hook)&& shark.isTouching(fish5Group5.get(i))){
        fish5Group5.get(i).remove()
      }
      if (shark.isTouching(hook2)&& shark.isTouching(fish5Group5.get(i))){
        fish5Group5.get(i).remove()
      }
}
}
if (score>10||score2>10){
background ("black")
fish1Group1.destroyEach()
fish2Group2.destroyEach()
fish3Group3.destroyEach()
fish4Group4.destroyEach()
fish5Group5.destroyEach()
textSize (40)
fill ("white")
text ("YOU WON",200,200)
}
}
function spawnFish1 (){
  if(frameCount%400==0){
    fish1 = createSprite(1800,700,10,10)
    fish1.addImage(fish1Img)
    fish1.y = Math.round(random(490,800))
    fish1.scale = 0.1
    fish1.velocityX = -3
    fish1Group1.add(fish1)
  }
}
function spawnFish2 (){
  if(frameCount%600==0){
    fish2 = createSprite(1800,600,10,10)
    fish2.y = Math.round(random(490,800))
    fish2.addImage(fish2Img)
    fish2.scale = 0.1
    fish2.velocityX = -2
    fish2Group2.add(fish2)
  }
}
function spawnFish3 (){
  if(frameCount%270==0){
    fish3 = createSprite(0,500,10,10)
    fish3.y = Math.round(random(490,800))
    fish3.addImage(fish3Img)
    fish3.scale = 0.2
    fish3.velocityX = 3
    fish3Group3.add(fish3)
  }
}
function spawnFish4 (){
  if(frameCount%500==0){
    fish4 = createSprite(1800,700,10,10)
    fish4.y = Math.round(random(490,800))
    fish4.addImage(fish4Img)
    fish4.scale = 0.1
    fish4.velocityX = -1
    fish4Group4.add(fish4)
  }
}
function spawnFish5 (){
  if(frameCount%300==0){
    fish5 = createSprite(0,700,10,10)
    fish5.y = Math.round(random(490,800))
    fish5.addImage(fish5Img)
    fish5.scale =0.1
    fish5.velocityX = 2
    fish5Group5.add(fish5)
  }
}
function mouseDragged(){
 
 hook2.y = mouseY
 if (hook2.y<fisherman.y+30){
  hook2.y = fisherman.y +50
}
}
