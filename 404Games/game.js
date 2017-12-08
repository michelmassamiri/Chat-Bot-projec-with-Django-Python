var ctx; // contexte global
var rightCarY = 50;
var leftCarY = 200;
var canvasWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var canvasHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var score = 0, life = 5;
var imageObj = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
imageObj.src = 'car.png';
imageObj2.src = 'carOK.png';
imageObj3.src = 'carSignaled.png';
var gameCanStart = false;

// generation du contexte
function startGame()
{
  var canvas = document.getElementById("canvas");
  canvas.style.display = 'block';
  document.getElementById("legende").style.display = 'block';
  ctx = canvas.getContext("2d");
  draw();
}

var Car = {
  x : 0,
  y : 0,
  width :50,
  height :50,
  direction : true,
  ok : Math.floor((Math.random() * 2)),
  isSignaled : false,

  draw_car : function(){

    if(this.ok == 0 && !this.isSignaled)
    ctx.drawImage(imageObj, this.x, this.y);
    else if (this.ok == 0 && this.isSignaled)
    ctx.drawImage(imageObj3, this.x, this.y);
    else
    ctx.drawImage(imageObj2, this.x, this.y);

      //ctx.fillRect(0, 0,this.width, this.height);
      //ctx.drawImage(imageObj, this.x, this.y);

  },

  isPointInside : function(x,y){
    return( x>=this.x
      && x<=this.x+this.width
      && y>=this.y
      && y<=this.y+this.height);
    },

    move_car : function(){

      // On update la position
      if(life > 0 && gameCanStart)
      {
        if(this.direction == true){
          this.x += 5;
          if(this.x > 650){
            if(this.ok == 0 && !this.isSignaled && life > 0)
            life--;
            this.x = -50;
            this.ok = Math.floor((Math.random() * 2));
            this.isSignaled = false;
          }
        }
        else {
          this.x -= 5;
          if(this.x < -50){
            if(this.ok == 0 && !this.isSignaled && life >0 )
            life--;
            this.x = 650;
            this.ok = Math.floor((Math.random() * 2));
            this.isSignaled = false;
          }
        }
      }
      // Dessine voiture
      if(this.ok == 0 && !this.isSignaled)
      ctx.drawImage(imageObj, this.x, this.y);
      else if (this.ok == 0 && this.isSignaled)
      ctx.drawImage(imageObj3, this.x, this.y);
      else
      ctx.drawImage(imageObj2, this.x, this.y);
      //ctx.fillRect(this.x, this.y,50, 50);

    }
  };

  function draw() {

    ctx.fillStyle = 'rgb(54, 51, 39)';
    ctx.fillRect(0, 0,600, 300);
    if (canvas.getContext) {

      var cars = [];

      var car1 = Object.create(Car);
      car1.x = 50;
      car1.y = rightCarY;
      car1.draw_car();
      car1.ok = 0;
      cars.push(car1);

      var car2 = Object.create(Car);
      car2.x = 250;
      car2.y = rightCarY;
      car2.draw_car();
      car2.ok = 1;
      cars.push(car2);

      var car3 = Object.create(Car);
      car3.x = 500;
      car3.y = rightCarY;
      car3.draw_car();
      car3.ok = 1;
      cars.push(car3);

      var car4 = Object.create(Car);
      car4.direction = false;
      car4.x = 550;
      car4.y = leftCarY;
      car4.draw_car();
      car4.ok = 0;
      cars.push(car4);

      var car5 = Object.create(Car);
      car5.direction = false;
      car5.x = 350;
      car5.y = leftCarY;
      car5.draw_car();
      car5.ok = 1;
      cars.push(car5);

      var car6 = Object.create(Car);
      car6.direction = false;
      car6.x = 100;
      car6.y = leftCarY;
      car6.draw_car();
      car6.ok = 1;
      cars.push(car6);

      document.getElementById("canvas").addEventListener("mousedown", myFunction);

      function update()
      {
        // clean background
        ctx.clearRect(0, 0,50, 50);
        ctx.fillStyle = 'rgb(54, 51, 39)';
        ctx.fillRect(0, 0,600, 300);

        ctx.moveTo(20,150);
        ctx.lineTo(170,150);

        ctx.moveTo(220,150);
        ctx.lineTo(370,150);

        ctx.moveTo(420,150);
        ctx.lineTo(570,150);

        ctx.strokeStyle = "#fdb019";
        ctx.stroke();

        ctx.font = "16pt Calibri,Geneva,Arial";
        ctx.fillStyle = 'rgb(150, 150, 150)';
        ctx.fillText("Score : " + score,490,25);
        ctx.fillText("Vie : " + life,10,25);

        if(life == 0)
        {
          ctx.font = "65pt Calibri,Geneva,Arial";
          ctx.fillText("Game Over",110,170);
        }

        if(!gameCanStart)
        {
          ctx.font = "35pt Calibri,Geneva,Arial";
          ctx.fillText("Press ENTER to start",110,185);
        }

        // On update les voitures
        cars.forEach(function(element) {
          element.move_car();
        });
      }

      function myFunction() {
        cars.forEach(function(element) {

          var xtoSend = event.clientX - document.getElementById("canvas").offsetLeft;
          var ytoSend = event.clientY - document.getElementById("canvas").offsetTop;
          if(element.isPointInside(xtoSend,ytoSend))
          {
            if(element.ok == 0 )
            {
              element.isSignaled = true;

              score++;
            }
            else {
              if( life > 0)
              life--;
            }
          }
        });
      }

      setInterval(update,18)
    }
  }

  $(document).keypress(function(e) {
      if(e.which == 13) {
          gameCanStart = true;
      }
  });
