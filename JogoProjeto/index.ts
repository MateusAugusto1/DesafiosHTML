document.addEventListener('DOMContentLoaded', () => {
    const airplane = document.getElementById('airplane') as HTMLDivElement;
    let airplaneX = -airplane.offsetWidth; // posição inicial do avião fora da tela à esquerda

    function moveAirplane() {
        airplaneX += 2; // velocidade do avião (ajuste conforme necessário)
        if (airplaneX > window.innerWidth) {
            airplaneX = -airplane.offsetWidth; // reinicia o avião fora da tela à esquerda
        }
        airplane.style.left = airplaneX + 'px';
    }

    setInterval(moveAirplane, 10); // chama a função moveAirplane a cada 10 milissegundos
});
