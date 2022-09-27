//Variáveis do Carro
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let wCarros = 50
let hCarros = 40
let velCarros = [5, 2.5, 3.2, 3.8, 3.3, 2.8]

function mostraCarros() {
  for(let i = 0; i < carros.length; i++) {
    mostra(carros[i], xCarros[i], yCarros[i], wCarros, hCarros)
  }
}

function movimentaCarro() {
  for(let i = 0; i < carros.length; i++) {
    xCarros[i] -= velCarros[i]
  }
}

function cruzouTela(xCarro) {
  return xCarro < -wCarros
}

function carroInfinito() {
  for(let i = 0; i < carros.length; i++) {
    if(cruzouTela(xCarros[i])){
    xCarros[i] = 600
    }
  }
}