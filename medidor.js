// Velocidade Máxima 70 km/h.
// A cada 5 km acima do limite a pessoa ganha 1 ponto.
// Math.floor(). (Serve Para Arredondar o Número.)
// caso os pontos forem maior que 12 a carteira estará suspensa.

verificarVelocidade(70);

function verificarVelocidade(vel) {
  const velMax = 70;

  if (vel <= velMax) console.log("OK");
  else {
    const pontos = Math.floor((vel - velMax) / 5);

    if (vel > 70 && vel < 75) {
      console.log("OK");
    }
    if (pontos >= 12) {
      console.log("Carteira Suspensa");
    } else if (vel >= 75) {
      console.log("pontos", pontos);
    }
  }
}
