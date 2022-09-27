function setup() {
  createCanvas(500, 400);
  trilha.loop()
}

function draw() {
  background(estrada);
  mostra(vaca, xVaca, yVaca, 35, 35)
  mostraCarros()
  movimentaCarro()
  movimentaVaca()
  carroInfinito()
  colisao()
  exibePontos()
  marcaPonto()
}

function mostra(elemento, x, y, comprimento, altura) {
  image(elemento, x, y, comprimento, altura)
}
