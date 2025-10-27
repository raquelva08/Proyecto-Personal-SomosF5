// Estado del juego
let gameState = {
    phase: 'start', // 'start', 'showing', 'playing', 'success', 'failure'
    currentConstellation: null,
    userPattern: [],
    level: 1,
    score: 0,
    availableConstellations: [],
    highlightedStar: null
};

// Elementos DOM
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const starsContainer = document.getElementById('starsContainer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const constellationInfo = document.getElementById('constellationInfo');
const constellationName = document.getElementById('constellationName');
const constellationDesc = document.getElementById('constellationDesc');

// Mensajes
const startMessage = document.getElementById('startMessage');
const showingMessage = document.getElementById('showingMessage');
const successMessage = document.getElementById('successMessage');
const failureMessage = document.getElementById('failureMessage');
const successName = document.getElementById('successName');

// Inicializar canvas
function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    drawLines();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Actualizar constelaciones disponibles según nivel
function updateAvailableConstellations() {
    gameState.availableConstellations = getConstellationsByDifficulty(gameState.level);
}

// Iniciar juego
function startGame() {
    updateAvailableConstellations();
    
    if (gameState.availableConstellations.length === 0) return;
    
    // Seleccionar constelación aleatoria
    const randomIndex = Math.floor(Math.random() * gameState.availableConstellations.length);
    gameState.currentConstellation = gameState.availableConstellations[randomIndex];
    gameState.userPattern = [];
    gameState.phase = 'showing';
    
    // Actualizar UI
    updateUI();
    renderStars();
    
    // Mostrar patrón
    showPattern();
}

// Mostrar patrón de la constelación
function showPattern() {
    const pattern = gameState.currentConstellation.connections;
    let index = 0;
    
    function highlightNext() {
        if (index >= pattern.length) {
            setTimeout(() => {
                gameState.phase = 'playing';
                updateUI();
            }, 500);
            return;
        }
        
        gameState.highlightedStar = pattern[index];
        renderStars();
        drawLines();
        
        setTimeout(() => {
            gameState.highlightedStar = null;
            renderStars();
            index++;
            setTimeout(highlightNext, 200);
        }, 400);
    }
    
    highlightNext();
}

// Manejar clic en estrella
function handleStarClick(starId) {
    if (gameState.phase !== 'playing' || !gameState.currentConstellation) return;
    
    gameState.userPattern.push(starId);
    const currentIndex = gameState.userPattern.length - 1;
    
    // Verificar si es correcto
    if (gameState.currentConstellation.connections[currentIndex] !== starId) {
        gameState.phase = 'failure';
        updateUI();
        setTimeout(() => {
            gameState.level = 1;
            gameState.score = 0;
            gameState.phase = 'start';
            updateUI();
            clearStars();
        }, 2500);
        return;
    }
    
    renderStars();
    drawLines();
    
    // Verificar si completó la constelación
    if (gameState.userPattern.length === gameState.currentConstellation.connections.length) {
        gameState.phase = 'success';
        gameState.score++;
        updateUI();
        drawLines();
        
        setTimeout(() => {
            gameState.level++;
            updateUI();
            setTimeout(startGame, 500);
        }, 3000);
    }
}

// Renderizar estrellas
function renderStars() {
    starsContainer.innerHTML = '';
    
    if (!gameState.currentConstellation) return;
    
    gameState.currentConstellation.stars.forEach(star => {
        const starBtn = document.createElement('button');
        starBtn.className = 'star';
        starBtn.style.left = `${star.x}%`;
        starBtn.style.top = `${star.y}%`;
        
        const isHighlighted = gameState.highlightedStar === star.id;
        const isConnected = gameState.userPattern.includes(star.id);
        const orderIndex = gameState.userPattern.indexOf(star.id);
        
        if (gameState.phase !== 'playing') {
            starBtn.disabled = true;
        }
        
        // Contenedor interno
        const starInner = document.createElement('div');
        starInner.className = 'star-inner';
        starInner.style.width = (isHighlighted || isConnected) ? '50px' : '28px';
        starInner.style.height = (isHighlighted || isConnected) ? '50px' : '28px';
        
        // Efecto glow
        if (isHighlighted || isConnected) {
            const glow = document.createElement('div');
            glow.className = 'star-glow';
            starInner.appendChild(glow);
        }
        
        // Punto de la estrella
        const dot = document.createElement('div');
        dot.className = isHighlighted || isConnected ? 'star-dot active' : 'star-dot normal';
        starInner.appendChild(dot);
        
        // Número de orden
        if (isConnected) {
            const number = document.createElement('div');
            number.className = 'star-number';
            number.textContent = orderIndex + 1;
            starInner.appendChild(number);
        }
        
        // Nombre de la estrella (solo en éxito)
        if (star.name && gameState.phase === 'success') {
            const name = document.createElement('div');
            name.className = 'star-name';
            name.textContent = star.name;
            starInner.appendChild(name);
        }
        
        starBtn.appendChild(starInner);
        starBtn.addEventListener('click', () => handleStarClick(star.id));
        starsContainer.appendChild(starBtn);
    });
}

// Dibujar líneas en el canvas
function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (!gameState.currentConstellation) return;
    
    // Líneas de guía (durante 'showing')
    if (gameState.phase === 'showing') {
        ctx.strokeStyle = 'var(--sombraColorSuave)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        gameState.currentConstellation.connections.forEach((starId, index) => {
            const star = gameState.currentConstellation.stars.find(s => s.id === starId);
            if (!star) return;
            
            const x = (star.x / 100) * canvas.width;
            const y = (star.y / 100) * canvas.height;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    // Líneas del usuario
    if (gameState.userPattern.length > 1) {
        ctx.strokeStyle = 'var(--colorAcento)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'var(--sombraColor)';
        
        ctx.beginPath();
        gameState.userPattern.forEach((starId, index) => {
            const star = gameState.currentConstellation.stars.find(s => s.id === starId);
            if (!star) return;
            
            const x = (star.x / 100) * canvas.width;
            const y = (star.y / 100) * canvas.height;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        ctx.shadowBlur = 0;
    }
    
    // Constelación completa (éxito)
    if (gameState.phase === 'success') {
        ctx.strokeStyle = 'var(--colorAcento)';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'var(--sombraColor)';
        
        ctx.beginPath();
        gameState.currentConstellation.connections.forEach((starId, index) => {
            const star = gameState.currentConstellation.stars.find(s => s.id === starId);
            if (!star) return;
            
            const x = (star.x / 100) * canvas.width;
            const y = (star.y / 100) * canvas.height;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        ctx.shadowBlur = 0;
    }
}

// Actualizar UI
function updateUI() {
    scoreElement.textContent = gameState.score;
    levelElement.textContent = gameState.level;
    
    // Mostrar/ocultar mensajes
    startMessage.style.display = gameState.phase === 'start' ? 'block' : 'none';
    showingMessage.style.display = gameState.phase === 'showing' ? 'block' : 'none';
    successMessage.style.display = gameState.phase === 'success' ? 'block' : 'none';
    failureMessage.style.display = gameState.phase === 'failure' ? 'block' : 'none';
    
    // Información de la constelación
    if (gameState.currentConstellation && gameState.phase !== 'start') {
        constellationInfo.style.display = 'block';
        constellationName.textContent = gameState.currentConstellation.name;
        constellationDesc.textContent = gameState.currentConstellation.description;
    } else {
        constellationInfo.style.display = 'none';
    }
    
    // Mensaje de éxito
    if (gameState.phase === 'success' && gameState.currentConstellation) {
        successName.textContent = gameState.currentConstellation.name;
    }
}

// Limpiar estrellas
function clearStars() {
    starsContainer.innerHTML = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameState.currentConstellation = null;
    gameState.userPattern = [];
}

// Reiniciar juego
function resetGame() {
    gameState.level = 1;
    gameState.score = 0;
    gameState.phase = 'start';
    gameState.userPattern = [];
    updateUI();
    clearStars();
}

// Event listeners
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

// Inicializar
updateUI();