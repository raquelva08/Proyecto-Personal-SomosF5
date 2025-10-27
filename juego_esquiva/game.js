// 🎮 Referencias a elementos del HTML
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); // "ctx" es el pincel con el que dibujamos en el canvas
const startScreen = document.getElementById('startScreen');
const gameOver = document.getElementById('gameOver');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');
const livesEl = document.getElementById('lives');
const finalScoreEl = document.getElementById('finalScore');

// 🎨 Paleta de colores (para mantener coherencia visual con tu diseño CSS)
const palette = {
    fondoOscuro: "#FEF7DC",
    acento: "#A13F80",
    texto: "#271112",
    sombra: "#432323",
    brillo: "rgba(161, 63, 128, 0.7)",
    fuego: "#FF9966",
    navePrincipal: "#A13F80",
    naveBrillo: "#D87CAF",
};

// ⚙️ Configuración del tamaño del lienzo (área del juego)
canvas.width = 600;
canvas.height = 600;

// 📊 Variables del estado del juego
let gameState = 'start'; // Puede ser "start", "playing" o "gameover"
let score = 0; // Puntos del jugador
let highscore = localStorage.getItem('highscore') || 0; // Máxima puntuación guardada en el navegador
let lives = 3; // Vidas del jugador
let gameSpeed = 2; // Velocidad inicial de los asteroides
let asteroidSpawnRate = 0.015; // Probabilidad de que aparezca un nuevo asteroide
let lastScoreIncrease = 0;
let gameTime = 0; // Tiempo total transcurrido

// 🧍‍♂️ Objeto "player" → nuestra nave
const player = {
    x: canvas.width / 2 - 20, // Posición inicial (centrada horizontalmente)
    y: canvas.height - 80,    // Posición vertical (cerca del fondo)
    width: 40,
    height: 40,
    speed: 6, // Velocidad de movimiento lateral
    dx: 0,    // Dirección (negativo izquierda, positivo derecha)
    invincible: false // Estado temporal de invulnerabilidad al chocar
};

// Arrays donde guardamos los objetos del juego
let asteroids = []; // Lista de asteroides activos
let particles = []; // Lista de partículas (explosiones)

// 🎹 Teclas que controlan la nave
const keys = { ArrowLeft: false, ArrowRight: false, a: false, d: false };

// Eventos de teclado (presionar y soltar teclas)
document.addEventListener('keydown', e => {
    if (e.key in keys) keys[e.key] = true;
});
document.addEventListener('keyup', e => {
    if (e.key in keys) keys[e.key] = false;
});

// Eventos de botones de inicio y reinicio
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// Mostrar récord en pantalla inicial
highscoreEl.textContent = highscore;
startScreen.classList.add('active');


// 🟢 FUNCIÓN PRINCIPAL: comenzar el juego
function startGame() {
    // Reiniciar todos los valores
    gameState = 'playing';
    score = 0;
    lives = 3;
    gameSpeed = 2;
    asteroidSpawnRate = 0.015;
    gameTime = 0;
    asteroids = [];
    particles = [];
    player.x = canvas.width / 2 - 20;
    player.invincible = false;
    
    // Ocultar pantallas de inicio y game over
    startScreen.classList.remove('active');
    gameOver.classList.remove('active');
    
    updateStats(); // Actualiza vidas y puntuación
    gameLoop();    // Inicia el bucle del juego
}


// 🧮 Actualiza la información de la interfaz (puntos, vidas, récord)
function updateStats() {
    scoreEl.textContent = score;
    livesEl.textContent = '❤️'.repeat(lives); // Dibuja corazones según las vidas
    
    // Si hay nuevo récord, guardarlo en localStorage
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
        highscoreEl.textContent = highscore;
    }
}


// 🚀 Dibuja la nave del jugador
function drawPlayer() {
    // Parpadeo si es invencible
    if (player.invincible && Math.floor(Date.now() / 100) % 2 === 0) ctx.globalAlpha = 0.3;

    // Triángulo principal (la nave)
    ctx.fillStyle = palette.navePrincipal;
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2, player.y);
    ctx.lineTo(player.x, player.y + player.height);
    ctx.lineTo(player.x + player.width, player.y + player.height);
    ctx.closePath();
    ctx.fill();

    // Brillo decorativo interno
    ctx.shadowBlur = 20;
    ctx.shadowColor = palette.brillo;
    ctx.fillStyle = palette.naveBrillo;
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2, player.y + 10);
    ctx.lineTo(player.x + 10, player.y + player.height - 10);
    ctx.lineTo(player.x + player.width - 10, player.y + player.height - 10);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    // 🔥 Llama del motor (parpadea)
    if (Date.now() % 200 < 100) {
        ctx.fillStyle = palette.fuego;
        ctx.beginPath();
        ctx.arc(player.x + player.width / 2, player.y + player.height, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.globalAlpha = 1;
}


// ⏩ Movimiento de la nave
function updatePlayer() {
    // Detectar teclas presionadas
    if (keys.ArrowLeft || keys.a) player.dx = -player.speed;
    else if (keys.ArrowRight || keys.d) player.dx = player.speed;
    else player.dx = 0;

    // Aplicar movimiento
    player.x += player.dx;

    // Evitar que salga del canvas
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
}


// 🌑 Crear un nuevo asteroide
function spawnAsteroid() {
    const size = Math.random() * 30 + 20; // Tamaño aleatorio
    const speedVariation = Math.random() * 2;
    asteroids.push({
        x: Math.random() * (canvas.width - size),
        y: -size,
        width: size,
        height: size,
        speed: speedVariation + gameSpeed, // Velocidad
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        color: `hsl(${Math.random() * 20 + 330}, 50%, 45%)` // Color burdeos/rosa
    });
}


// 🎨 Dibuja todos los asteroides
function drawAsteroids() {
    asteroids.forEach(a => {
        ctx.save();
        ctx.translate(a.x + a.width / 2, a.y + a.height / 2);
        ctx.rotate(a.rotation);
        
        // Cuerpo irregular del asteroide
        ctx.fillStyle = a.color;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius = a.width / 2 * (0.8 + Math.random() * 0.4);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        // Contorno suave
        ctx.strokeStyle = 'rgba(67, 35, 35, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
    });
}


// 🧱 Actualiza la posición y las colisiones de los asteroides
function updateAsteroids() {
    for (let i = asteroids.length - 1; i >= 0; i--) {
        const a = asteroids[i];
        a.y += a.speed;
        a.rotation += a.rotationSpeed;
        
        // Si sale del canvas → sumar puntos y eliminar
        if (a.y > canvas.height) {
            asteroids.splice(i, 1);
            score += 10;
            updateStats();
            continue;
        }

        // Si colisiona con el jugador
        if (!player.invincible && checkCollision(player, a)) {
            createExplosion(a.x + a.width / 2, a.y + a.height / 2); // efecto visual
            asteroids.splice(i, 1);
            lives--;
            updateStats();
            player.invincible = true; // breve invulnerabilidad
            setTimeout(() => player.invincible = false, 1500);
            if (lives <= 0) endGame();
        }
    }
}


// 💥 Crea partículas para la explosión visual
function createExplosion(x, y) {
    for (let i = 0; i < 20; i++) {
        particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            size: Math.random() * 4 + 2,
            life: 1,
            color: `hsl(${Math.random() * 20 + 330}, 70%, 60%)`
        });
    }
}


// 🔄 Actualiza las partículas (movimiento + desvanecimiento)
function updateParticles() {
    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        if (p.life <= 0) particles.splice(i, 1);
    });
}


// 💫 Dibuja las partículas (explosión)
function drawParticles() {
    particles.forEach(p => {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    });
}


// ⏫ Aumenta la dificultad progresivamente
function increaseDifficulty() {
    gameTime++;
    // Cada cierto tiempo aumenta velocidad y frecuencia de asteroides
    if (gameTime % 180 === 0) {
        if (gameSpeed < 6) gameSpeed += 0.3;
        if (asteroidSpawnRate < 0.04) asteroidSpawnRate += 0.002;
    }
    // Cada segundo aumenta puntos automáticamente
    if (gameTime % 60 === 0) {
        score += 5;
        updateStats();
    }
}


// 🔚 Termina el juego
function endGame() {
    gameState = 'gameover';
    finalScoreEl.textContent = score;
    gameOver.classList.add('active');
}


// 🌸 Fondo animado (líneas suaves que se mueven)
function drawBackground() {
    ctx.strokeStyle = 'rgba(161, 63, 128, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        const y = (Date.now() * 0.5 + i * 150) % canvas.height;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}


// 🔁 Bucle del juego: se ejecuta muchas veces por segundo
function gameLoop() {
    if (gameState !== 'playing') return;
    
    // Fondo claro semitransparente (borra frame anterior)
    ctx.fillStyle = 'rgba(254, 247, 220, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawBackground(); // Fondo animado

    // Probabilidad de generar asteroide nuevo
    if (Math.random() < asteroidSpawnRate) spawnAsteroid();

    // Actualizar lógica del juego
    updatePlayer();
    updateAsteroids();
    updateParticles();
    increaseDifficulty();
    
    // Dibujar todos los elementos
    drawAsteroids();
    drawParticles();
    drawPlayer();
    
    // Vuelve a llamar al bucle
    requestAnimationFrame(gameLoop);
}


// 📏 Detectar colisiones entre la nave y los asteroides
function checkCollision(player, asteroid) {
    const cx = asteroid.x + asteroid.width / 2;
    const cy = asteroid.y + asteroid.height / 2;
    const r = asteroid.width / 2 - 5;
    const margin = 12;

    // Puntos del triángulo de la nave
    const top = { x: player.x + player.width / 2, y: player.y + margin };
    const left = { x: player.x + margin, y: player.y + player.height - margin };
    const right = { x: player.x + player.width - margin, y: player.y + player.height - margin };

    // Distancia entre puntos
    const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

    // Si cualquier punto está dentro del radio del asteroide → colisión
    if (dist(cx, cy, top.x, top.y) < r || dist(cx, cy, left.x, left.y) < r || dist(cx, cy, right.x, right.y) < r) return true;

    // Cálculo más preciso de área (detectar contacto parcial)
    const areaOrig = Math.abs((left.x * (top.y - right.y) + top.x * (right.y - left.y) + right.x * (left.y - top.y)) / 2);
    const area1 = Math.abs((cx * (top.y - right.y) + top.x * (right.y - cy) + right.x * (cy - top.y)) / 2);
    const area2 = Math.abs((left.x * (cy - right.y) + cx * (right.y - left.y) + right.x * (left.y - cy)) / 2);
    const area3 = Math.abs((left.x * (top.y - cy) + top.x * (cy - left.y) + cx * (left.y - top.y)) / 2);

    // Si la suma de áreas coincide con la original, hay colisión
    return Math.abs(areaOrig - (area1 + area2 + area3)) < 1;
}
