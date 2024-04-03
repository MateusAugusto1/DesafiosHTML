// Definindo o contexto do canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Definindo tamanho da grade e tamanho da célula
const gridSize = 20;
const cellSize = canvas.width / gridSize;

// Inicialização da cobra
let snake = [{x: 10, y: 10}];
let dx = 0;
let dy = 0;

// Função para desenhar a cobra
function drawSnake() {
  ctx.fillStyle = "#00ff00";
  snake.forEach((cell) => {
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  });
}

// Função para atualizar a posição da cobra
function updateSnake() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  snake.pop();
}

// Função para desenhar a comida
let food = {x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize)};
function drawFood() {
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);
}

// Função para verificar colisões
function checkCollision() {
  if (snake[0].x < 0 || snake[0].x >= gridSize || snake[0].y < 0 || snake[0].y >= gridSize) {
    return true; // Colisão com as paredes
  }
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true; // Colisão consigo mesma
    }
  }
  return false;
}

// Função principal do jogo
function gameLoop() {
  if (checkCollision()) {
    alert("Game Over!");
    return;
  }
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
  updateSnake();
  
  if (snake[0].x === food.x && snake[0].y === food.y) {
    snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
    food = {x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize)};
  }
}

// Definindo controles de direção
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && dy === 0) {
    dx = 0;
    dy = -1;
  }
  if (event.key === "ArrowDown" && dy === 0) {
    dx = 0;
    dy = 1;
  }
  if (event.key === "ArrowLeft" && dx === 0) {
    dx = -1;
    dy = 0;
  }
  if (event.key === "ArrowRight" && dx === 0) {
    dx = 1;
    dy = 0;
  }
});

// Inicializando o jogo
setInterval(gameLoop, 100);
