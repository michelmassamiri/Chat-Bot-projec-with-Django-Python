$(function(){

  var largeur = 15;
  var canvasWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var canvasHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  var canvas = document.getElementById("canvas0");
  canvas.height = canvasHeight;
  canvas.width = canvasWidth;

  var decalage = canvasWidth/2 - 810/2;
  var ctx;
  var scale = 1;
  var startAnim = false;
  var mainAnim;
  var speed = 40;

  start();

  function startAnimation()
  {
    startAnim = true;
  }

  function start()
  {
    var canvas = document.getElementById("canvas0");
    if (canvas.getContext) {
      ctx = canvas.getContext("2d");
      setTimeout(startAnimation, 4000);
      draw();
    }
  }

  function draw()
  {

    ctx.clearRect(0,0,canvasWidth,canvasHeight); // effacer le canvas

    if(startAnim)
    {
      ctx.translate(canvasWidth/2, canvasHeight/2);
      ctx.rotate(Math.PI / 180);
      ctx.scale(scale, scale);
      ctx.translate(-canvasWidth/2, -canvasHeight/2);
      scale += 0.000045;

      // On stop l'animation quand on est rentré dans le 0
      if(scale >= 1.012)
      {
        clearInterval(mainAnim);
        canvas.style.display = 'none';
        startGame();
      }

        else {
          clearInterval(mainAnim);
          speed-=0.2;
          mainAnim = setInterval(draw, speed);
        }
    }

    ctx.clearRect(0,0,canvasWidth,canvasHeight); // effacer le canvas
    // first 4
    ctx.fillRect(decalage+0, 100, largeur, 325);
    ctx.fillRect(decalage+0, 425, 225, largeur);
    ctx.fillRect(decalage+110, 315, largeur, 220);

    // 0
    ctx.fillRect(decalage+288, 130, largeur, 385);
    ctx.fillRect(decalage+493, 130, largeur, 385);
    ctx.fillRect(decalage+288, 115, 220, largeur);
    ctx.fillRect(decalage+288, 500, 220, largeur);


    // last 4
    ctx.fillRect(decalage+580, 100, largeur, 325);
    ctx.fillRect(decalage+580, 425, 230, largeur);
    ctx.fillRect(decalage+690, 315, largeur, 220);

    ctx.font = "20pt Calibri,Geneva,Arial";

    ctx.fillText("File Not Found",decalage+320,600);

  }
  mainAnim = setInterval(draw, speed);

});
