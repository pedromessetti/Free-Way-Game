//Variáveis das imagens
let estrada
let vaca
let carro1
let carro2
let carro3

let trilha
let ponto
let somColisao

//Carregar as imagens e sons
function preload() {
  estrada = loadImage("imagens/estrada.png")
  vaca = loadImage("imagens/ator-1.png")
  carro1 = loadImage("imagens/carro-1.png")
  carro2 = loadImage("imagens/carro-2.png")
  carro3 = loadImage("imagens/carro-3.png")
  carros = [carro1, carro2, carro3, carro1, carro2, carro3]
  
  trilha = loadSound("sons/trilha.mp3")
  ponto = loadSound("sons/pontos.wav")
  somColisao = loadSound("sons/colidiu.mp3")
}