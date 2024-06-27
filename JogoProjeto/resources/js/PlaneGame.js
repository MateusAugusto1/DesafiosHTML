const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1824;
const canvasHeight = 576;

canvas.width = canvasWidth
canvas.height = canvasHeight

let prevTime = 0

animate()

function animate() {
    window.requestAnimationFrame(animate)

    ctx.fillRect(0, 0, canvasWidth,canvasHeight)

    let delta = (performance.now() - prevTime) / 1000
    let fps = 1 / delta

    prevTime = performance.now()
    console.log('FPS: ${fps}')
}

let parachutists = [];
        let jumpInterval = 2000; // Intervalo de tempo em milissegundos para os paraquedistas pularem

        function createParachutist() {
            const parachutist = document.createElement('div');
            parachutist.classList.add('parachutist');
            parachutist.style.left = '50%';
            parachutist.style.top = '10%';
            document.body.appendChild(parachutist);
            parachutists.push(parachutist);
        }

        function jumpParachutists() {
            createParachutist();
            setInterval(createParachutist, jumpInterval);
        }

        function animateParachutists() {
            parachutists.forEach(parachutist => {
                let top = parseInt(parachutist.style.top);
                if (top < 100) {
                    parachutist.style.top = (top + 1) + '%';
                }
            });
            requestAnimationFrame(animateParachutists);
        }

        jumpParachutists();
        animateParachutists();