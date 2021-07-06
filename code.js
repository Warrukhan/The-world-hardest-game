var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2f637df6-e785-4311-b4cf-d22f0c5a3afd","58d9c712-fa62-4d93-a20a-26dbc797deb6","b31612a2-bfc6-4b36-9318-bda792e970a8","f9eab05a-33c7-4325-85ed-b5915eda626d","c02f4154-cbf8-4e22-bc12-3f9c889d97bd","1fbaacc3-3921-4b9c-947d-e9e0ae31397a"],"propsByKey":{"2f637df6-e785-4311-b4cf-d22f0c5a3afd":{"name":"boy","sourceUrl":"assets/api/v1/animation-library/gamelab/Cdj6_FVDCJx_ztcX_HgY3.Kj_erWrKTZ/category_people/green_shirt_books.png","frameSize":{"x":155,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Cdj6_FVDCJx_ztcX_HgY3.Kj_erWrKTZ","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":155,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Cdj6_FVDCJx_ztcX_HgY3.Kj_erWrKTZ/category_people/green_shirt_books.png"},"58d9c712-fa62-4d93-a20a-26dbc797deb6":{"name":"villain 1","sourceUrl":"assets/api/v1/animation-library/gamelab/SMCJmpJ0VRui7g3k8aU5.C4d_Qa_cc5./category_fantasy/monster_11.png","frameSize":{"x":252,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"SMCJmpJ0VRui7g3k8aU5.C4d_Qa_cc5.","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SMCJmpJ0VRui7g3k8aU5.C4d_Qa_cc5./category_fantasy/monster_11.png"},"b31612a2-bfc6-4b36-9318-bda792e970a8":{"name":"sword1","sourceUrl":null,"frameSize":{"x":278,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"XTj7LjKdAPWeJOtdCaMPON0DpqaK1eP0","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":394},"rootRelativePath":"assets/b31612a2-bfc6-4b36-9318-bda792e970a8.png"},"f9eab05a-33c7-4325-85ed-b5915eda626d":{"name":"villlain2","sourceUrl":null,"frameSize":{"x":248,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"kZg9SkUtvN3dnMA1LIYYzcjpHdIiEAr2","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":368},"rootRelativePath":"assets/f9eab05a-33c7-4325-85ed-b5915eda626d.png"},"c02f4154-cbf8-4e22-bc12-3f9c889d97bd":{"name":"award_trophy1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png","frameSize":{"x":312,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qYuvwscvicUp26fkvQOaDTrPjKxv1BlU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png"},"1fbaacc3-3921-4b9c-947d-e9e0ae31397a":{"name":"sword2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ao_nAChsEDiE4Ey3LxARAi.M3.360IbA/category_video_games/sword2.png","frameSize":{"x":390,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"ao_nAChsEDiE4Ey3LxARAi.M3.360IbA","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ao_nAChsEDiE4Ey3LxARAi.M3.360IbA/category_video_games/sword2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var count = 0;
var me = createSprite(28,352);
me.setAnimation("boy");
me.scale = 0.2;

var problem = createSprite(30,250);
problem.setAnimation("villain 1");
problem.scale = 0.2;

var shadi  = createSprite(365,100);
shadi.setAnimation("villlain2");
shadi.scale = 0.2;

 var goal = createSprite(15,25);
 goal.setAnimation("award_trophy1_1");
 goal.scale = 0.1;
 
  var sword = createSprite(365,100);
  sword.setAnimation("sword1");
  sword.scale = 0.1;
  
   var sword2 = createSprite(30,250);
   sword2.setAnimation("sword2_1");
   sword2.scale = 0.1;
   
   var gameState = "serve";
   


function draw() {
}
background("lightgreen");

playSound("assets/category_movement/cartoon_blast_off_3.mp3");


if (gameState=== "serve"); {
  fill("red");
  textSize(20);
  text("PRESS SPACE TO START!",100,180);
  
  sword.velocityX = 0;
  sword2.velocityX = 0;
  sword.x = 365;
  sword.y = 100;
  sword2.x = 30;
  sword2.y = 250;
}


fill("blue");
textSize(18);
text("DEATHS) : "+count,285,20); 


createEdgeSprites();
sword.bounceOff(rightEdge);
sword.bounceOff(leftEdge);
sword2.bounceOff(rightEdge);
sword2.bounceOff(leftEdge);



me.bounceOff(edges);
if (keyWentUp("right")) {
  me.x = me.x+3;
}

if (keyDown("left")) {
  me.x = me.x-3;
}
if (keyDown("up")) {
  me.y = me.y-3;
}

if (keyDown("down")) {
  me.y = me.y+3;
}

if (keyDown("space") || gameState ==="serve") {
  sword.velocityX = 8;
  sword2.velocityX = 8;
  gameState = "play";
  
}

 if (sword.isTouching(me) ||
 sword2.isTouching(me))  {
  count = count+1;
  me.x = 28;
  me.y = 352;
  gameState = "serve";
  
 }
if (me.isTouching(problem) || 
  me.isTouching(shadi)) {
 count = count+1;
 me.x = 28;
 me.y = 352;
 gameState = "serve";
  
}

if (me.isTouching(goal)) {
  me.x = 26;
  me.y = 368;
  goal.x = 14;
  goal.y = 370;
  sword.velocityX = 0;
  sword2.velocityX = 0;
  fill("red");
  text("HURRY! you beat everyone!!", 150,200);
  
}

if(count === 5){
    gameState = "over";
    sword.velocityX = 0;
      sword2.velocityX = 0;
      sword.x = 370;
      sword.y = 100;
    sword2.x = 30;
    sword2.y = 266;
    fill("green");
    text("GAME OVER!!",120,170);
    text("PRESS 'R' TO RESTART",120,200);
    
  }

 if(keyDown("r") || gameState === "over"){
    count = 0;
    gameState = "serve";
  }



drawSprites();

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
