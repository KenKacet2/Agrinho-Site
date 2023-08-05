var character = document.querySelector(".character");
var map = document.querySelector(".map");

//Posicionamento
var x = 90;
var y = 100;
var held_directions = []; 
var speed = 10;

///////////////////////////////

const placeCharacter = () => {
   
   var pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
   );
   
   const held_direction = held_directions[0];
   if (held_direction) {
      if (held_direction === directions.right) {x += speed;}
      if (held_direction === directions.left) {x -= speed;}
      if (held_direction === directions.down) {y += speed;}
      if (held_direction === directions.up) {y -= speed;}
      character.setAttribute("facing", held_direction);
   }
   character.setAttribute("walking", held_direction ? "true" : "false");
   
   //LIMITES MAPA
   var leftLimit = -520;
   var rightLimit = 1275;
   var topLimit = -1000;
   var bottomLimit = 1000;
   if (x < leftLimit) { x = leftLimit; }
   if (x > rightLimit) { x = rightLimit; }
   if (y < topLimit) { y = topLimit; }
   if (y > bottomLimit) { y = bottomLimit; }
   
   
   var camera_left = pixelSize * 66;
   var camera_top = pixelSize * 42;
   
   map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
   character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
}



const step = () => {
   placeCharacter();
   window.requestAnimationFrame(() => {
      step();
   })
}
step();



/* Direções */
const directions = {
   up: "up",
   down: "down",
   left: "left",
   right: "right",
}
const keys = {
   //Setas
   38: directions.up,
   37: directions.left,
   39: directions.right,
   40: directions.down,
   //Wasd
   87: directions.up,
   65: directions.left,
   68: directions.right,
   83: directions.down,
}
document.addEventListener("keydown", (e) => {
   var dir = keys[e.which];
   if (dir && held_directions.indexOf(dir) === -1) {
      held_directions.unshift(dir)
   }
})

document.addEventListener("keyup", (e) => {
   var dir = keys[e.which];
   var index = held_directions.indexOf(dir);
   if (index > -1) {
      held_directions.splice(index, 1)
   }
});


///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

                     //Rochas

function No() {
   document.getElementById('FALA2').style.animation = "FALA2 5s ease-out forwards";
}

function Mover() {
   document.getElementById('pedras').style.left = "120%";
   document.getElementById('hitpedras').style.zIndex = "-2";
   document.getElementById('hitpedras').style.cursor = "default"
   document.getElementById('hitespada').style.zIndex = "8";
   document.getElementById('hitpedras2').style.zIndex = "-2";

   document.getElementById("ARRASTANDO").play();
   document.getElementById("ESPADA").play(); 
   document.getElementById('almas').style.animation = "SOULANI1 6s ease forwards";
}

                     //& Espada

      function Grab() {
         document.getElementById("espada").style.animation = "espadaopacity 2s ease forwards";
         document.getElementById('hitespada').style.zIndex = "-1";
         document.getElementById('hitespada').style.cursor = "default";
         document.getElementById("ESPADA2").play();
   
          document.getElementById("ESPADA").volume = 0.0;
          document.getElementById('almas').removeAttribute("loop");
          document.getElementById("FALA9").style.animation = "FALA9 2s ease forwards";
         }

/////////////////////////////////////////////
////////////////////////////////////////////

            //Saco

function Saco() {
 document.getElementById("Bag").style.animation = "opacidadeSACO 2s ease forwards";

 document.getElementById("PLASTIC").play();
 document.getElementById("hitsaco").style.zIndex = "-2";
 document.getElementById('hitsaco').style.cursor = "default";
 document.getElementById("FALA5").style.animation = "FALA5 3s ease forwards";
}

            //Garrafa

function Garrafa() {
   document.getElementById("Garrafa").style.animation = "opacidadeGARRAFA 1s ease forwards";
   document.getElementById("hitgarrafa").style.cursor = "default";
   document.getElementById("hitgarrafa").style.zIndex = "-2";

   document.getElementById("SAND").play();
}

            //Roupa

function Roupa() {
   document.getElementById("roupa").style.animation = "opacidadeROUPA 1s ease forwards";
   document.getElementById("hitroupa").style.cursor = "default";
   document.getElementById("hitroupa").style.zIndex = "-2";

   document.getElementById("FALA3").style.animation = "FALA3 3s forwards";
   document.getElementById("ROUPA").play();
}

            //TACO

function Taco() {

   document.getElementById("taco").style.animation = "opacidadeTACO 2s ease forwards";
   document.getElementById("hittaco").style.cursor = "default";
   document.getElementById("hittaco").style.zIndex = "-2";
   document.getElementById("TACOSOM").play();

   document.getElementById("FALA10").style.animation = "FALA10 2s ease forwards";
}

            //UKULELE

function UKULELE2() {

   document.getElementById("hitukulele2").style.cursor = "default";
   document.getElementById("hitukulele2").style.zIndex = "-2";
   document.getElementById("hitukulele").style.zIndex = "17";
   document.getElementById("UKULELESOM").play();
   document.getElementById("notas").style.opacity = "100%"
   document.getElementById("notas").play();
               
}

function UKULELE() {

   document.getElementById("ukulele").style.animation = "opacidadeUKULELE 1s ease forwards";
   document.getElementById("hitukulele").style.cursor = "default";
   document.getElementById("hitukulele").style.zIndex = "-2";
   document.getElementById("FALA4").style.animation = "FALA4 3s ease forwards";
   
   document.getElementById("TACOSOM").play();
   document.getElementById("UKULELESOM").pause();
   document.getElementById("notas").style.opacity = "0%";
}

            //ESQUELETO

function ESQUELETO1() {

   document.getElementById("hitmão").style.cursor = "default";
   document.getElementById("hitmão").style.zIndex = "-2";
   document.getElementById("hitbraco").style.zIndex = "9";
   document.getElementById("mão").style.opacity = "0%";
   document.getElementById("braco").style.opacity = "100%";
   document.getElementById("FALA6").style.animation = "FALA6 1s ease forwards";

   document.getElementById("ESQUELETOSOM").play();
}

function ESQUELETO2() {

   document.getElementById("hitbraco").style.cursor = "default";
   document.getElementById("hitbraco").style.zIndex = "-2";
   document.getElementById("hittorso").style.zIndex = "9";
   document.getElementById("hittorso").style.cursor = "pointer";
   document.getElementById("hittorso2").style.zIndex = "9";
   document.getElementById("hittorso2").style.cursor = "pointer";
   document.getElementById("braco").style.opacity = "0%";
   document.getElementById("torso").style.opacity = "100%";
   document.getElementById("FALA7").style.animation = "FALA7 1s ease forwards";

   document.getElementById("ESQUELETOSOM2").play();
}

function ESQUELETO3() {

   document.getElementById("hittorso").style.zIndex = "-2";
   document.getElementById("hittorso").style.cursor = "default";
   document.getElementById("hittorso2").style.zIndex = "-2";
   document.getElementById("hittorso2").style.cursor = "default";
   document.getElementById("torso").style.opacity = "0%";

   document.getElementById("esqueleto").style.animation = "SKELETON 3s ease forwards";
   document.getElementById("ESQUELETOSOM3").play();
   document.getElementById("FALA8").style.animation = "FALA8 3s ease forwards";


   document.getElementById("hitpedras").style.zIndex = "9";
}

            //CARTA

function CARTA() {
   document.getElementById("carta").style.animation = "CARTA 2s ease forwards";
   document.getElementById("FALA11").style.animation = "FALA11 2s ease-in-out forwards";
   document.getElementById("hitcarta").style.zIndex = "-2";
   document.getElementById("CARTASOM").play();
}

            //TV

function Program(){

   document.getElementById("Back").style.zIndex = "7";
   document.getElementById("Back").style.opacity = "100%";
   document.getElementById("Program").style.zIndex = "20";
   document.getElementById("Program").style.opacity = "100%";
   document.getElementById("FALA").style.opacity = "100%";
   document.getElementById("FALA").style.zIndex = "9";
   document.getElementById("button").style.opacity = "100%";
   document.getElementById("button").style.zIndex = "10";
   document.getElementById("button2").style.opacity = "100%";
   document.getElementById("button2").style.zIndex = "10";

   document.getElementById("botao").play();
   document.getElementById("TVSOM2").play();
   document.getElementById("PROGRAMASOM").play();
}

function Desligar(){
   document.getElementById("Back").style.zIndex = "-7";
   document.getElementById("Back").style.opacity = "0%";
   document.getElementById("Program").style.zIndex = "-8";
   document.getElementById("Program").style.opacity = "0%";
   document.getElementById("FALA").style.opacity = "0%";
   document.getElementById("FALA").style.top = "1000%";
   document.getElementById("button").style.opacity = "0%";
   document.getElementById("button").style.zIndex = "-10";
   document.getElementById("button2").style.opacity = "0%";
   document.getElementById("button2").style.zIndex = "-10";
   
   document.getElementById("TV2").style.zIndex = "-11";
   document.getElementById("hittv").style.zIndex = "-11";
   document.getElementById("hittv2").style.zIndex = "8";

   document.getElementById("botao").play();
   document.getElementById("TVSOM2").pause();
   document.getElementById("PROGRAMASOM").pause();
}

function Coletar(){
   TV.style.animation = "opacidadeTV 1s ease forwards"
   document.getElementById("hittv2").style.zIndex = "-11";
   document.getElementById("TVCOLETA").play();
}

document.getElementById("hittv").addEventListener("mouseover", () => {
var TV2 = document.getElementById("TV2");
document.getElementById("TV2").style.opacity = "100%";
var TVSOM = document.getElementById("TVSOM");
TVSOM.play();
})

document.getElementById("hittv").addEventListener("mouseout", () => {
var TV2 = document.getElementById("TV2");
TV2.style.opacity = "0%";
var TVSOM = document.getElementById("TVSOM");
TVSOM.pause();
})

window.addEventListener('click', () => {
   var fundo = document.getElementById("FUNDO1");
   fundo.play();

})

function Comecar() {
   document.getElementById("start").style.animation = "Starting 1s ease-in forwards";
   document.getElementById("PS1").style.animation = "Starting 1s ease-in forwards";
   document.getElementById("hitstart").style.zIndex = "-19";
   document.getElementById("CLICK").play();
}

function Brief() {
   document.getElementById("start1").style.animation = "Starting 2s ease-in forwards";
   document.getElementById("PS2").style.animation = "Starting 1s ease-in forwards";
   document.getElementById("PS3").style.animation = "PS 10s ease-in forwards";
   document.getElementById("hithint").style.zIndex = "-20";
}

var FIM2=9;
var FIM=0;
var fundo = document.getElementById("FUNDO1");

function Add(){

   console.log(FIM)
   FIM++;

   if (FIM==FIM2){

      fundo.pause();
      document.getElementById("FINAL").play();
      document.getElementById("FINAL").style.animation = "FINAL 2s ease-in forwards";
      document.getElementById("start1").style.animation = "FINAL 2s ease-in forwards";
      document.getElementById("FINAL").setAttribute = "loop";
   }
}
