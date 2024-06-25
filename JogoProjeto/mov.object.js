// Definindo variáveis para o avião e o objeto a ser lançado
document.addEventListener('DOMContentLoaded', function() {
    const Plane_ = document.getElementById('Plane_');
    const container = document.getElementById('container');

    let Plane_y = 200; // Posição inicial do avião

    function createObject() {
        const object = document.createElement('div');
        object.className = 'object';
        object.style.left = Plane_.offsetLeft + 'px';
        object.style.top = Plane_.offsetTop + 'px';
        container.appendChild(object);

        let objectY = Plane_.offsetTop;

        // Movimentação do objeto
        const interval = setInterval(function() {
            objectY += 5; // Velocidade do objeto
            object.style.top = objectY + 'px';

            // Verifica se o objeto saiu do container
            if (objectY > container.offsetHeight) {
                clearInterval(interval);
                container.removeChild(object);
            }
        }, 30);
    }

    // Evento de pressionar a tecla de espaço para lançar um objeto
    document.addEventListener('keydown', function(event) {
        if (event.key === ' ') { // Tecla de espaço
            createObject();
        }
    });
});
