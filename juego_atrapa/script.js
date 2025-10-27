// script.js
// Código del juego "Atrapa el Círculo" con comentarios línea a línea para aprender y explicar.

// Espera a que todo el HTML esté cargado antes de ejecutar el código.
// Esto evita errores al intentar obtener elementos que aún no existen en el DOM.
document.addEventListener('DOMContentLoaded', () => {

    // --- Obtener elementos del DOM y guardarlos en variables para usarlos más tarde ---
    // Objeto "screens" que agrupa las tres pantallas del juego (inicio, juego, fin).
    const screens = {
        start: document.getElementById('start-screen'),      // Pantalla de inicio
        game: document.getElementById('game-screen'),        // Pantalla del juego en curso
        gameOver: document.getElementById('game-over-screen'), // Pantalla de fin de juego
    };
    
    // Botón para iniciar el juego (en la pantalla de inicio).
    const startButton = document.getElementById('start-button');
    // Botón para reiniciar el juego (en la pantalla de fin).
    const restartButton = document.getElementById('restart-button');
    // Elemento que muestra la puntuación en tiempo real.
    const scoreDisplay = document.getElementById('score-display');
    // Elemento que muestra el tiempo restante en segundos.
    const timeDisplay = document.getElementById('time-display');
    // Elemento que muestra la puntuación final en la pantalla de fin.
    const finalScore = document.getElementById('final-score');
    // Contenedor del tablero donde se mueve el objetivo.
    const gameBoard = document.getElementById('game-board');
    // El "círculo" objetivo que el jugador debe pulsar.
    const target = document.getElementById('target');

    // --- Estado del juego (variables que controlan el progreso) ---
    let score = 0;                     // Puntuación actual del jugador
    const GAME_DURATION = 30;          // Duración del juego en segundos (constante)
    let timeLeft = GAME_DURATION;      // Tiempo restante, inicializado al valor de la constante
    let targetInterval = null;         // Referencia al intervalo que mueve el objetivo (para poder pararlo)
    let timerInterval = null;          // Referencia al intervalo del temporizador (para poder pararlo)

    // --- Funciones auxiliares --- 

    /**
     * Muestra solo la pantalla indicada y oculta las demás.
     * @param {('start'|'game'|'gameOver')} screenName - nombre de la pantalla a mostrar
     */
    function showScreen(screenName) {
        // Recorre todos los elementos de screens y les quita la clase 'active' (los oculta).
        Object.values(screens).forEach(screen => {
            screen.classList.remove('active');
        });
        // A la pantalla solicitada le añade la clase 'active' para mostrarla.
        screens[screenName].classList.add('active');
    }

    /**
     * Inicia el juego: reinicia estados, muestra la pantalla de juego y arranca los intervalos.
     */
    function startGame() {
        // Reinicia la puntuación a 0 al comenzar.
        score = 0;
        // Reinicia el tiempo restante a la duración de la partida.
        timeLeft = GAME_DURATION;
        // Actualiza los elementos visuales con los valores iniciales.
        scoreDisplay.textContent = score;
        timeDisplay.textContent = timeLeft;

        // Asegura que no haya intervalos activos anteriores (por si se pulsa iniciar varias veces).
        clearInterval(targetInterval);
        clearInterval(timerInterval);

        // Muestra la pantalla del juego.
        showScreen('game');

        // Coloca el objetivo en una posición inicial aleatoria.
        moveTarget(); // primera colocación inmediata
        // Mueve el objetivo cada 900 ms (puedes ajustar para cambiar la dificultad).
        targetInterval = setInterval(moveTarget, 900);
        // Inicia el temporizador que actualiza cada segundo.
        timerInterval = setInterval(updateTimer, 1000);
    }

    /**
     * Termina la partida: detiene intervalos, muestra la puntuación final y la pantalla de fin.
     */
    function endGame() {
        // Para los intervalos para que el juego deje de actualizarse.
        clearInterval(targetInterval);
        clearInterval(timerInterval);
        // Muestra la puntuación final en la pantalla de fin.
        finalScore.textContent = score;
        // Cambia a la pantalla de juego finalizado.
        showScreen('gameOver');
    }

    /**
     * Función llamada cada segundo por el intervalo del temporizador.
     * Resta un segundo al tiempo restante y finaliza el juego si llega a 0.
     */
    function updateTimer() {
        timeLeft--;                      // Decrementa el tiempo restante en uno
        timeDisplay.textContent = timeLeft; // Actualiza la pantalla con el nuevo valor
        if (timeLeft <= 0) {             // Si el tiempo llega a 0 o menos...
            endGame();                   // ...se termina la partida
        }
    }

    /**
     * Mueve el objetivo a una posición aleatoria dentro del tablero.
     * Usa porcentajes para que el posicionamiento sea responsivo con el tamaño del tablero.
     */
    function moveTarget() {
        // Calculamos top y left en porcentajes, dejando un margen del 5% al 90% (para que no se salga).
        // Math.random() * 85 + 5 -> valor entre 5 y 90.
        const top = `${Math.random() * 85 + 5}%`;
        const left = `${Math.random() * 85 + 5}%`;
        // El 5% es el margen de seguridad, así el círculo nunca aparece pegado a los bordes.
        // Aplicamos los valores al estilo del objetivo.
        target.style.top = top;
        target.style.left = left;
    }

    /**
     * Manejador del evento click sobre el objetivo.
     * Incrementa la puntuación y mueve el objetivo inmediatamente (feedback rápido).
     */
    function onTargetClick() {
        score += 10;                     // Añade 10 puntos por cada clic (puedes ajustar)
        scoreDisplay.textContent = score; // Actualiza la visualización de la puntuación
        moveTarget();                    // Mueve el objetivo inmediatamente para dar feedback
    }

    // --- Asociar eventos a botones y elementos interactivos ---
    // Cuando el jugador hace clic en "Empezar a Jugar", se llama a startGame.
    startButton.addEventListener('click', startGame);
    // Cuando el jugador pulsa "Jugar de Nuevo" en la pantalla de fin, se reinicia el juego.
    restartButton.addEventListener('click', startGame);
    // Cada vez que se haga clic sobre el objetivo, se ejecutará onTargetClick.
    target.addEventListener('click', onTargetClick);

    // --- Estado inicial de la app: mostrar la pantalla de inicio ---
    showScreen('start');

}); // Fin del DOMContentLoaded
