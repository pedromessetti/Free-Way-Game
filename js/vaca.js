//Variáveis da Vaca
let xVaca = 100
let yVaca = 366
let colidiu = false
let pontos = 0;

function movimentaVaca() {
  if(keyIsDown(UP_ARROW)) {
    yVaca -= 3
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeMover()){
      yVaca += 3
    }
  }
}

function colisao() {
  for(let i = 0; i < carros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xVaca, yVaca, 15)
    if(colidiu) {
      voltaInicio()
      somColisao.play()
      if(pontos > 0)
      pontos--
    }
  }
}

function voltaInicio() {
  yVaca = 366
}

function exibePontos() {
  textAlign(CENTER)
  textSize(30)
  fill(255,230,50)
  text(pontos, 30, 29)
}

function marcaPonto() {
  if(yVaca < 15){
    pontos++
    ponto.play()
    voltaInicio()
  }
}

function podeMover() {
 return yVaca < 366
}