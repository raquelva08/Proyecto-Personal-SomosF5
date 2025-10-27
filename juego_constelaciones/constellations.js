// 50 constelaciones con sus estrellas y conexiones
const CONSTELLATIONS = [
    // Nivel 1-10: Fáciles (3-4 estrellas)
    {
        name: "Cruz del Sur",
        description: "La constelación más pequeña pero más reconocible del hemisferio sur",
        difficulty: 1,
        stars: [
            { id: 1, x: 50, y: 20, name: "Acrux" },
            { id: 2, x: 50, y: 80, name: "Gacrux" },
            { id: 3, x: 25, y: 50, name: "Mimosa" },
            { id: 4, x: 75, y: 50, name: "Delta" }
        ],
        connections: [1, 2, 1, 3, 1, 4]
    },
    {
        name: "Triángulo Austral",
        description: "Pequeña constelación triangular del hemisferio sur",
        difficulty: 1,
        stars: [
            { id: 1, x: 50, y: 30 },
            { id: 2, x: 30, y: 70 },
            { id: 3, x: 70, y: 70 }
        ],
        connections: [1, 2, 3, 1]
    },
    {
        name: "Triángulo del Norte",
        description: "Constelación menor entre Andrómeda y Perseo",
        difficulty: 1,
        stars: [
            { id: 1, x: 50, y: 25 },
            { id: 2, x: 30, y: 75 },
            { id: 3, x: 70, y: 65 }
        ],
        connections: [1, 2, 3, 1]
    },
    {
        name: "Flecha",
        description: "Una de las constelaciones más pequeñas, representa una flecha en vuelo",
        difficulty: 1,
        stars: [
            { id: 1, x: 30, y: 50 },
            { id: 2, x: 50, y: 45 },
            { id: 3, x: 70, y: 50 },
            { id: 4, x: 85, y: 55 }
        ],
        connections: [1, 2, 3, 4]
    },
    {
        name: "Delfín",
        description: "Constelación compacta que recuerda la forma de un delfín",
        difficulty: 1,
        stars: [
            { id: 1, x: 40, y: 40 },
            { id: 2, x: 60, y: 35 },
            { id: 3, x: 55, y: 55 },
            { id: 4, x: 35, y: 60 }
        ],
        connections: [1, 2, 3, 4, 1]
    },
    {
        name: "Corona Boreal",
        description: "Pequeña constelación semicircular que representa una corona",
        difficulty: 1,
        stars: [
            { id: 1, x: 25, y: 60 },
            { id: 2, x: 35, y: 40 },
            { id: 3, x: 50, y: 30 },
            { id: 4, x: 65, y: 40 },
            { id: 5, x: 75, y: 60 }
        ],
        connections: [1, 2, 3, 4, 5]
    },
    {
        name: "Corona Austral",
        description: "Contraparte sureña de la Corona Boreal",
        difficulty: 1,
        stars: [
            { id: 1, x: 30, y: 40 },
            { id: 2, x: 45, y: 30 },
            { id: 3, x: 60, y: 30 },
            { id: 4, x: 75, y: 45 }
        ],
        connections: [1, 2, 3, 4]
    },
    {
        name: "Osa Menor",
        description: "Contiene la Estrella Polar, guía de navegantes durante siglos",
        difficulty: 1,
        stars: [
            { id: 1, x: 50, y: 20, name: "Polaris" },
            { id: 2, x: 45, y: 35 },
            { id: 3, x: 55, y: 50 },
            { id: 4, x: 65, y: 65 },
            { id: 5, x: 50, y: 75 },
            { id: 6, x: 35, y: 65 },
            { id: 7, x: 30, y: 50 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 2]
    },
    {
        name: "Caballito",
        description: "La segunda constelación más pequeña del cielo",
        difficulty: 1,
        stars: [
            { id: 1, x: 40, y: 50 },
            { id: 2, x: 55, y: 45 },
            { id: 3, x: 60, y: 60 },
            { id: 4, x: 50, y: 65 }
        ],
        connections: [1, 2, 3, 4, 1]
    },
    {
        name: "Zorrilla",
        description: "Pequeña constelación entre Cisne y Águila",
        difficulty: 1,
        stars: [
            { id: 1, x: 30, y: 50 },
            { id: 2, x: 50, y: 40 },
            { id: 3, x: 70, y: 50 },
            { id: 4, x: 60, y: 65 }
        ],
        connections: [1, 2, 3, 4]
    },

    // Nivel 11-25: Intermedias (5-7 estrellas)
    {
        name: "Casiopea",
        description: "Forma una W característica, representa a la reina de Etiopía",
        difficulty: 2,
        stars: [
            { id: 1, x: 20, y: 60 },
            { id: 2, x: 35, y: 35 },
            { id: 3, x: 50, y: 50 },
            { id: 4, x: 65, y: 30 },
            { id: 5, x: 80, y: 55 }
        ],
        connections: [1, 2, 3, 4, 5]
    },
    {
        name: "Cefeo",
        description: "Representa al rey de Etiopía, esposo de Casiopea",
        difficulty: 2,
        stars: [
            { id: 1, x: 50, y: 20 },
            { id: 2, x: 35, y: 40 },
            { id: 3, x: 30, y: 70 },
            { id: 4, x: 70, y: 70 },
            { id: 5, x: 65, y: 40 }
        ],
        connections: [1, 2, 3, 4, 5, 1]
    },
    {
        name: "Lira",
        description: "Contiene a Vega, una de las estrellas más brillantes del cielo",
        difficulty: 2,
        stars: [
            { id: 1, x: 50, y: 30, name: "Vega" },
            { id: 2, x: 45, y: 50 },
            { id: 3, x: 35, y: 70 },
            { id: 4, x: 55, y: 70 },
            { id: 5, x: 65, y: 50 }
        ],
        connections: [1, 2, 3, 2, 1, 5, 4]
    },
    {
        name: "Águila",
        description: "Contiene a Altair, parte del Triángulo de Verano",
        difficulty: 2,
        stars: [
            { id: 1, x: 50, y: 25 },
            { id: 2, x: 45, y: 45 },
            { id: 3, x: 50, y: 55, name: "Altair" },
            { id: 4, x: 55, y: 45 },
            { id: 5, x: 40, y: 75 },
            { id: 6, x: 60, y: 75 }
        ],
        connections: [1, 2, 3, 4, 1, 3, 5, 3, 6]
    },
    {
        name: "Cisne",
        description: "También conocida como la Cruz del Norte, representa un cisne en vuelo",
        difficulty: 2,
        stars: [
            { id: 1, x: 50, y: 20, name: "Deneb" },
            { id: 2, x: 50, y: 40 },
            { id: 3, x: 50, y: 60, name: "Albireo" },
            { id: 4, x: 30, y: 50 },
            { id: 5, x: 70, y: 50 },
            { id: 6, x: 50, y: 80 }
        ],
        connections: [1, 2, 3, 6, 3, 2, 4, 2, 5]
    },
    {
        name: "Perseo",
        description: "El héroe que rescató a Andrómeda del monstruo marino",
        difficulty: 2,
        stars: [
            { id: 1, x: 50, y: 20 },
            { id: 2, x: 45, y: 40 },
            { id: 3, x: 50, y: 55 },
            { id: 4, x: 35, y: 70 },
            { id: 5, x: 60, y: 70 },
            { id: 6, x: 70, y: 40 }
        ],
        connections: [1, 2, 3, 4, 3, 5, 3, 2, 6]
    },
    {
        name: "Cochero",
        description: "Contiene a Capella, la sexta estrella más brillante",
        difficulty: 2,
        stars: [
            { id: 1, x: 50, y: 25, name: "Capella" },
            { id: 2, x: 40, y: 45 },
            { id: 3, x: 35, y: 70 },
            { id: 4, x: 55, y: 75 },
            { id: 5, x: 65, y: 50 }
        ],
        connections: [1, 2, 3, 4, 5, 1]
    },
    {
        name: "Andrómeda",
        description: "Contiene la famosa galaxia de Andrómeda, visible a simple vista",
        difficulty: 2,
        stars: [
            { id: 1, x: 30, y: 50 },
            { id: 2, x: 45, y: 45 },
            { id: 3, x: 60, y: 50 },
            { id: 4, x: 75, y: 55 },
            { id: 5, x: 50, y: 65 }
        ],
        connections: [1, 2, 3, 4, 3, 5]
    },
    {
        name: "Pegaso",
        description: "El caballo alado, su cuadrado es fácilmente reconocible",
        difficulty: 2,
        stars: [
            { id: 1, x: 35, y: 35 },
            { id: 2, x: 65, y: 35 },
            { id: 3, x: 65, y: 65 },
            { id: 4, x: 35, y: 65 },
            { id: 5, x: 35, y: 80 },
            { id: 6, x: 20, y: 50 }
        ],
        connections: [1, 2, 3, 4, 1, 6, 4, 5]
    },
    {
        name: "Escorpio",
        description: "Representa al escorpión que picó a Orión, contiene a Antares",
        difficulty: 2,
        stars: [
            { id: 1, x: 35, y: 30, name: "Antares" },
            { id: 2, x: 45, y: 35 },
            { id: 3, x: 55, y: 45 },
            { id: 4, x: 60, y: 55 },
            { id: 5, x: 70, y: 60 },
            { id: 6, x: 75, y: 70 },
            { id: 7, x: 70, y: 80 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        name: "Sagitario",
        description: "El arquero centauro, apunta hacia el centro de la Vía Láctea",
        difficulty: 2,
        stars: [
            { id: 1, x: 40, y: 35 },
            { id: 2, x: 50, y: 30 },
            { id: 3, x: 60, y: 40 },
            { id: 4, x: 50, y: 50 },
            { id: 5, x: 45, y: 65 },
            { id: 6, x: 60, y: 60 },
            { id: 7, x: 70, y: 55 }
        ],
        connections: [1, 2, 3, 4, 5, 4, 6, 7]
    },
    {
        name: "Tauro",
        description: "Contiene las Pléyades y la brillante estrella Aldebarán",
        difficulty: 2,
        stars: [
            { id: 1, x: 45, y: 40, name: "Aldebarán" },
            { id: 2, x: 55, y: 35 },
            { id: 3, x: 60, y: 25 },
            { id: 4, x: 70, y: 20 },
            { id: 5, x: 40, y: 60 },
            { id: 6, x: 35, y: 75 }
        ],
        connections: [1, 2, 3, 4, 3, 2, 1, 5, 6]
    },
    {
        name: "Géminis",
        description: "Los gemelos Cástor y Pólux de la mitología griega",
        difficulty: 2,
        stars: [
            { id: 1, x: 35, y: 30, name: "Cástor" },
            { id: 2, x: 45, y: 30, name: "Pólux" },
            { id: 3, x: 30, y: 50 },
            { id: 4, x: 40, y: 55 },
            { id: 5, x: 30, y: 75 },
            { id: 6, x: 50, y: 75 }
        ],
        connections: [1, 3, 5, 3, 4, 6, 4, 2]
    },
    {
        name: "Leo",
        description: "El león, una de las constelaciones zodiacales más fáciles de encontrar",
        difficulty: 2,
        stars: [
            { id: 1, x: 30, y: 40, name: "Régulus" },
            { id: 2, x: 40, y: 35 },
            { id: 3, x: 50, y: 30 },
            { id: 4, x: 60, y: 35 },
            { id: 5, x: 70, y: 45 },
            { id: 6, x: 65, y: 60 },
            { id: 7, x: 45, y: 55 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 1]
    },
    {
        name: "Aries",
        description: "El carnero, primera constelación del zodiaco",
        difficulty: 2,
        stars: [
            { id: 1, x: 40, y: 50 },
            { id: 2, x: 55, y: 45 },
            { id: 3, x: 70, y: 50 },
            { id: 4, x: 60, y: 65 }
        ],
        connections: [1, 2, 3, 2, 4]
    },
    {
        name: "Cáncer",
        description: "El cangrejo, contiene el cúmulo del Pesebre",
        difficulty: 2,
        stars: [
            { id: 1, x: 35, y: 45 },
            { id: 2, x: 50, y: 35 },
            { id: 3, x: 65, y: 45 },
            { id: 4, x: 60, y: 60 },
            { id: 5, x: 40, y: 65 }
        ],
        connections: [1, 2, 3, 4, 5, 1]
    },

    // Nivel 26-40: Avanzadas (8-10 estrellas)
    {
        name: "Orión",
        description: "El cazador, la constelación más reconocible del cielo nocturno",
        difficulty: 3,
        stars: [
            { id: 1, x: 35, y: 25, name: "Betelgeuse" },
            { id: 2, x: 65, y: 25, name: "Bellatrix" },
            { id: 3, x: 40, y: 50 },
            { id: 4, x: 50, y: 50 },
            { id: 5, x: 60, y: 50 },
            { id: 6, x: 35, y: 75, name: "Rigel" },
            { id: 7, x: 50, y: 70 },
            { id: 8, x: 65, y: 75 }
        ],
        connections: [1, 2, 5, 8, 7, 6, 3, 1, 3, 4, 5]
    },
    {
        name: "Osa Mayor",
        description: "Contiene el famoso asterismo del Carro, guía hacia la Estrella Polar",
        difficulty: 3,
        stars: [
            { id: 1, x: 25, y: 45 },
            { id: 2, x: 35, y: 40 },
            { id: 3, x: 45, y: 35 },
            { id: 4, x: 55, y: 35 },
            { id: 5, x: 60, y: 50 },
            { id: 6, x: 55, y: 65 },
            { id: 7, x: 45, y: 65 },
            { id: 8, x: 35, y: 60 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 2, 8, 7]
    },
    {
        name: "Hércules",
        description: "El héroe griego, contiene el Gran Cúmulo Globular M13",
        difficulty: 3,
        stars: [
            { id: 1, x: 50, y: 20 },
            { id: 2, x: 40, y: 35 },
            { id: 3, x: 35, y: 50 },
            { id: 4, x: 45, y: 60 },
            { id: 5, x: 55, y: 60 },
            { id: 6, x: 65, y: 50 },
            { id: 7, x: 60, y: 35 },
            { id: 8, x: 50, y: 75 }
        ],
        connections: [1, 2, 3, 4, 8, 5, 6, 7, 1, 7, 6, 5, 4, 3, 2]
    },
    {
        name: "Bootes",
        description: "El boyero, contiene a Arturo, la cuarta estrella más brillante",
        difficulty: 3,
        stars: [
            { id: 1, x: 50, y: 70, name: "Arturo" },
            { id: 2, x: 45, y: 55 },
            { id: 3, x: 40, y: 40 },
            { id: 4, x: 45, y: 25 },
            { id: 5, x: 55, y: 25 },
            { id: 6, x: 60, y: 40 },
            { id: 7, x: 55, y: 55 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 1]
    },
    {
        name: "Virgo",
        description: "La virgen, contiene a Spica, estrella de primera magnitud",
        difficulty: 3,
        stars: [
            { id: 1, x: 40, y: 30 },
            { id: 2, x: 50, y: 35 },
            { id: 3, x: 55, y: 50 },
            { id: 4, x: 50, y: 65, name: "Spica" },
            { id: 5, x: 40, y: 70 },
            { id: 6, x: 30, y: 55 },
            { id: 7, x: 35, y: 45 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 1, 7, 3]
    },
    {
        name: "Acuario",
        description: "El aguador, representa a Ganímedes vertiendo agua",
        difficulty: 3,
        stars: [
            { id: 1, x: 40, y: 30 },
            { id: 2, x: 50, y: 25 },
            { id: 3, x: 60, y: 30 },
            { id: 4, x: 55, y: 45 },
            { id: 5, x: 50, y: 55 },
            { id: 6, x: 40, y: 60 },
            { id: 7, x: 35, y: 45 },
            { id: 8, x: 45, y: 70 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 1, 7, 4, 5, 8]
    },
    {
        name: "Capricornio",
        description: "La cabra marina, constelación zodiacal del invierno",
        difficulty: 3,
        stars: [
            { id: 1, x: 30, y: 40 },
            { id: 2, x: 40, y: 35 },
            { id: 3, x: 50, y: 40 },
            { id: 4, x: 60, y: 50 },
            { id: 5, x: 70, y: 60 },
            { id: 6, x: 65, y: 70 },
            { id: 7, x: 55, y: 65 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 4]
    },
    {
        name: "Piscis",
        description: "Los peces, representa dos peces unidos por una cuerda",
        difficulty: 3,
        stars: [
            { id: 1, x: 25, y: 50 },
            { id: 2, x: 35, y: 45 },
            { id: 3, x: 45, y: 50 },
            { id: 4, x: 50, y: 60 },
            { id: 5, x: 60, y: 45 },
            { id: 6, x: 70, y: 40 },
            { id: 7, x: 75, y: 50 }
        ],
        connections: [1, 2, 3, 4, 3, 5, 6, 7]
    },
    {
        name: "Libra",
        description: "La balanza, única constelación zodiacal que representa un objeto",
        difficulty: 3,
        stars: [
            { id: 1, x: 35, y: 40 },
            { id: 2, x: 45, y: 35 },
            { id: 3, x: 55, y: 35 },
            { id: 4, x: 65, y: 40 },
            { id: 5, x: 50, y: 50 },
            { id: 6, x: 40, y: 65 },
            { id: 7, x: 60, y: 65 }
        ],
        connections: [1, 2, 5, 3, 4, 5, 6, 5, 7]
    },
    {
        name: "Ofiuco",
        description: "El portador de la serpiente, atraviesa la eclíptica",
        difficulty: 3,
        stars: [
            { id: 1, x: 50, y: 25 },
            { id: 2, x: 45, y: 40 },
            { id: 3, x: 40, y: 55 },
            { id: 4, x: 50, y: 65 },
            { id: 5, x: 60, y: 55 },
            { id: 6, x: 55, y: 40 },
            { id: 7, x: 35, y: 75 },
            { id: 8, x: 65, y: 75 }
        ],
        connections: [1, 2, 3, 4, 7, 4, 5, 8, 5, 6, 1]
    },
    {
        name: "Serpiente",
        description: "Única constelación dividida en dos partes: Cabeza y Cola",
        difficulty: 3,
        stars: [
            { id: 1, x: 25, y: 40 },
            { id: 2, x: 35, y: 45 },
            { id: 3, x: 40, y: 55 },
            { id: 4, x: 60, y: 55 },
            { id: 5, x: 65, y: 45 },
            { id: 6, x: 75, y: 40 }
        ],
        connections: [1, 2, 3, 4, 5, 6]
    },
    {
        name: "Hidra",
        description: "La serpiente de agua, la constelación más larga del cielo",
        difficulty: 3,
        stars: [
            { id: 1, x: 20, y: 40 },
            { id: 2, x: 30, y: 45 },
            { id: 3, x: 40, y: 50 },
            { id: 4, x: 50, y: 55 },
            { id: 5, x: 60, y: 50 },
            { id: 6, x: 70, y: 55 },
            { id: 7, x: 80, y: 60 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        name: "Dragón",
        description: "Serpentea entre las Osas Mayor y Menor",
        difficulty: 3,
        stars: [
            { id: 1, x: 40, y: 25 },
            { id: 2, x: 35, y: 40 },
            { id: 3, x: 40, y: 55 },
            { id: 4, x: 50, y: 65 },
            { id: 5, x: 60, y: 60 },
            { id: 6, x: 65, y: 45 },
            { id: 7, x: 60, y: 30 },
            { id: 8, x: 50, y: 25 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        name: "Centauro",
        description: "El centauro, contiene a Alfa Centauri, la estrella más cercana",
        difficulty: 3,
        stars: [
            { id: 1, x: 40, y: 30 },
            { id: 2, x: 50, y: 35 },
            { id: 3, x: 60, y: 40 },
            { id: 4, x: 55, y: 55 },
            { id: 5, x: 45, y: 60 },
            { id: 6, x: 35, y: 70 },
            { id: 7, x: 50, y: 75 },
            { id: 8, x: 65, y: 70 }
        ],
        connections: [1, 2, 3, 4, 7, 4, 5, 6, 5, 4, 8]
    },
    {
        name: "Pavo Real",
        description: "Representa al pavo real, ave sagrada de Juno",
        difficulty: 3,
        stars: [
            { id: 1, x: 50, y: 30 },
            { id: 2, x: 45, y: 45 },
            { id: 3, x: 40, y: 60 },
            { id: 4, x: 50, y: 70 },
            { id: 5, x: 60, y: 60 },
            { id: 6, x: 55, y: 45 },
            { id: 7, x: 35, y: 75 },
            { id: 8, x: 65, y: 75 }
        ],
        connections: [1, 2, 3, 4, 7, 4, 5, 8, 5, 6, 1]
    },

    // Nivel 41-50: Muy difíciles (10+ estrellas)
    {
        name: "Eridano",
        description: "El río celestial, desde Orión hasta Achernar",
        difficulty: 4,
        stars: [
            { id: 1, x: 30, y: 20 },
            { id: 2, x: 35, y: 30 },
            { id: 3, x: 30, y: 40 },
            { id: 4, x: 40, y: 50 },
            { id: 5, x: 45, y: 60 },
            { id: 6, x: 55, y: 65 },
            { id: 7, x: 60, y: 75 },
            { id: 8, x: 55, y: 85 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        name: "Nave Argos",
        description: "El barco de Jasón y los Argonautas, dividida en Vela, Popa y Quilla",
        difficulty: 4,
        stars: [
            { id: 1, x: 30, y: 25 },
            { id: 2, x: 40, y: 30 },
            { id: 3, x: 50, y: 35 },
            { id: 4, x: 60, y: 40 },
            { id: 5, x: 55, y: 55 },
            { id: 6, x: 50, y: 65 },
            { id: 7, x: 40, y: 70 },
            { id: 8, x: 35, y: 55 },
            { id: 9, x: 25, y: 45 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 8, 5]
    },
    {
        name: "Fénix",
        description: "El ave que renace de sus cenizas",
        difficulty: 4,
        stars: [
            { id: 1, x: 50, y: 25 },
            { id: 2, x: 40, y: 40 },
            { id: 3, x: 35, y: 55 },
            { id: 4, x: 45, y: 65 },
            { id: 5, x: 55, y: 65 },
            { id: 6, x: 65, y: 55 },
            { id: 7, x: 60, y: 40 },
            { id: 8, x: 30, y: 75 },
            { id: 9, x: 70, y: 75 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 1, 4, 8, 4, 5, 9]
    },
    {
        name: "Grulla",
        description: "El ave zancuda del hemisferio sur",
        difficulty: 4,
        stars: [
            { id: 1, x: 45, y: 25 },
            { id: 2, x: 40, y: 40 },
            { id: 3, x: 45, y: 55 },
            { id: 4, x: 55, y: 60 },
            { id: 5, x: 60, y: 70 },
            { id: 6, x: 65, y: 80 },
            { id: 7, x: 55, y: 45 },
            { id: 8, x: 65, y: 35 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 4, 7, 8]
    },
    {
        name: "Ballena",
        description: "El monstruo marino que iba a devorar a Andrómeda",
        difficulty: 4,
        stars: [
            { id: 1, x: 25, y: 40 },
            { id: 2, x: 35, y: 35 },
            { id: 3, x: 45, y: 40 },
            { id: 4, x: 55, y: 45 },
            { id: 5, x: 60, y: 55 },
            { id: 6, x: 50, y: 65 },
            { id: 7, x: 40, y: 70 },
            { id: 8, x: 35, y: 55 },
            { id: 9, x: 70, y: 65 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 8, 3, 8, 6, 9]
    },
    {
        name: "Pez Austral",
        description: "El pez del sur, contiene la brillante estrella Fomalhaut",
        difficulty: 4,
        stars: [
            { id: 1, x: 45, y: 35, name: "Fomalhaut" },
            { id: 2, x: 40, y: 50 },
            { id: 3, x: 50, y: 55 },
            { id: 4, x: 60, y: 50 },
            { id: 5, x: 65, y: 60 },
            { id: 6, x: 55, y: 70 },
            { id: 7, x: 45, y: 65 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 2]
    },
    {
        name: "Camaleón",
        description: "Pequeña constelación circumpolar del sur",
        difficulty: 4,
        stars: [
            { id: 1, x: 40, y: 40 },
            { id: 2, x: 50, y: 35 },
            { id: 3, x: 60, y: 45 },
            { id: 4, x: 65, y: 60 },
            { id: 5, x: 55, y: 70 },
            { id: 6, x: 45, y: 65 },
            { id: 7, x: 35, y: 55 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 1]
    },
    {
        name: "Tucán",
        description: "Contiene la Pequeña Nube de Magallanes",
        difficulty: 4,
        stars: [
            { id: 1, x: 40, y: 30 },
            { id: 2, x: 50, y: 35 },
            { id: 3, x: 60, y: 45 },
            { id: 4, x: 65, y: 60 },
            { id: 5, x: 55, y: 70 },
            { id: 6, x: 45, y: 60 },
            { id: 7, x: 35, y: 50 },
            { id: 8, x: 30, y: 65 }
        ],
        connections: [1, 2, 3, 4, 5, 6, 7, 1, 6, 8]
    },
    {
        name: "Indio",
        description: "Representa un nativo americano",
        difficulty: 4,
        stars: [
            { id: 1, x: 45, y: 30 },
            { id: 2, x: 40, y: 45 },
            { id: 3, x: 45, y: 60 },
            { id: 4, x: 55, y: 65 },
            { id: 5, x: 60, y: 50 },
            { id: 6, x: 55, y: 35 },
            { id: 7, x: 35, y: 70 },
            { id: 8, x: 65, y: 75 }
        ],
        connections: [1, 2, 3, 4, 8, 4, 5, 6, 1, 3, 7]
    },
    {
        name: "Telescopio",
        description: "Constelación moderna que honra el invento del telescopio",
        difficulty: 4,
        stars: [
            { id: 1, x: 40, y: 35 },
            { id: 2, x: 50, y: 40 },
            { id: 3, x: 55, y: 55 },
            { id: 4, x: 50, y: 70 },
            { id: 5, x: 60, y: 65 },
            { id: 6, x: 65, y: 50 },
            { id: 7, x: 45, y: 60 }
        ],
        connections: [1, 2, 3, 4, 7, 3, 5, 6]
    }
];

// Obtener constelaciones por dificultad
function getConstellationsByDifficulty(level) {
    if (level <= 10) return CONSTELLATIONS.filter(c => c.difficulty === 1);
    if (level <= 25) return CONSTELLATIONS.filter(c => c.difficulty === 2);
    if (level <= 40) return CONSTELLATIONS.filter(c => c.difficulty === 3);
    return CONSTELLATIONS.filter(c => c.difficulty === 4);
}