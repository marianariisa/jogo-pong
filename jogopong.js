//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//variaveis da minha raquete
let xRaquete = 580;
let yRaquete = 150;
let raqueteComp = 10;
let raqueteAltura = 90;

//variaveis do oponente
let xRaqueteOponente = 10;
let yRaqueteOponente = 150;
let raqueteCompOponente = 10;
let raqueteAlturaOp = 90;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaRaquete();
  colisaoRaquete();
  mostraRaqueteOponente ();
}

function mostraBolinha () {
 circle(xBolinha,yBolinha,diametro)
}

function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }

function verificaColisao () {
  
  if (xBolinha + raio > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha < 0) {
    velocidadeYBolinha *= -1; 
  }
    
}

function mostraRaquete () {
    rect(xRaquete, yRaquete, raqueteComp, raqueteAltura);
}

function movimentaRaquete() { 
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  
}

 function colisaoRaquete() {
    if (xBolinha + raio > xRaquete + raqueteComp) {
      velocidadeXBolinha = -6;
    }

 }

function mostraRaqueteOponente () {
  rect (xRaqueteOponente, yRaqueteOponente, raqueteCompOponente, raqueteAlturaOp)
}
