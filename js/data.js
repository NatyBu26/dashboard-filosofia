// Editar aqui ayudantes, respiraciones, puertas, recursos y planificaciones.
// Las 15 semanas y sus 45 clases fueron extraidas de textos-dashboard/Planificaciones semanales de clases.docx.

const imagePaths = {
  "hero": "img/fondos/chicos-filosofando.png",
  "logo": "img/identidad/Logo-Osa-Mayor.png"
};

const helpersData = [
  {
    "id": "aris",
    "name": "Aristóteles",
    "role": "El ayudante de la observación",
    "phrase": "Observar nos ayuda a entender.",
    "description": "Ari invita a mirar despacio, prestar atención y descubrir detalles que al principio no habíamos visto.",
    "image": "img/ayudantes-laboratorio/ayundante-aristoteles.png"
  },
  {
    "id": "socrates",
    "name": "Sócrates",
    "role": "El ayudante de las preguntas",
    "phrase": "Las buenas preguntas nos ayudan a encontrar buenas ideas.",
    "description": "Sócrates cuida la palabra, abre preguntas y ayuda a escuchar respuestas distintas.",
    "image": "img/ayudantes-laboratorio/ayudante-socrates.png"
  },
  {
    "id": "descartes",
    "name": "Descartes",
    "role": "El ayudante de la duda",
    "phrase": "Dudar nos ayuda a pensar.",
    "description": "Descartes acompaña a revisar ideas, volver a mirar y preguntarnos si estamos seguros.",
    "image": "img/ayudantes-laboratorio/ayudante-descartes.png"
  },
  {
    "id": "hipatia",
    "name": "Hipatia",
    "role": "La ayudante del conocimiento",
    "phrase": "¿Qué pasa si probamos algo diferente?",
    "description": "Hipatia invita a explorar, investigar, probar caminos nuevos y aprender con otros.",
    "image": "img/ayudantes-laboratorio/ayundante-hipatia.png"
  },
  {
    "id": "beauvoir",
    "name": "Beauvoir",
    "role": "La ayudante de la libertad y las decisiones",
    "phrase": "Pensar nos ayuda a elegir quién queremos ser.",
    "description": "Beauvoir ayuda a pensar decisiones, diferencias y formas propias de mirar el mundo.",
    "image": "img/ayudantes-laboratorio/ayundante-beauvoir.png"
  }
];

const breathingData = [
  {
    "name": "Respiración del águila",
    "image": "img/respiraciones/01-respiracion-aguila.png",
    "how": "Abrí los brazos como alas. Inhalá elevándolos suavemente y exhalá bajándolos como un águila que planea.",
    "repetitions": "4 veces.",
    "helps": "Ampliar la respiración, mover el cuerpo con calma y sentir libertad."
  },
  {
    "name": "Respiración del globo",
    "image": "img/respiraciones/02-respiracion-globo.png",
    "how": "Imaginá que sos un globo. Inhalá mientras abrís los brazos formando un círculo y exhalá soltando el aire lentamente.",
    "repetitions": "5 veces.",
    "helps": "Tomar conciencia de la respiración y soltar tensiones."
  },
  {
    "name": "Respiración de Spiderman",
    "image": "img/respiraciones/03-respiracion-spiderman.png",
    "how": "Prepará la mano como si lanzaras una telaraña. Inhalá hacia adentro y exhalá estirando el brazo hacia adelante.",
    "repetitions": "4 veces.",
    "helps": "Liberar energía, jugar con el movimiento y volver a enfocarse."
  },
  {
    "name": "Respiración de la taza de chocolate caliente",
    "image": "img/respiraciones/04-respiracion-taza-chocolate.png",
    "how": "Juntá las manos como una taza. Inhalá como si olieras chocolate y exhalá despacio como si lo soplaras.",
    "repetitions": "5 veces.",
    "helps": "Respirar más lento, relajarse y disfrutar calma."
  },
  {
    "name": "Respiración de la mano",
    "image": "img/respiraciones/05-respiracion-mano.png",
    "how": "Recorré el contorno de una mano con el índice de la otra: al subir inhalá, al bajar exhalá.",
    "repetitions": "1 vez con cada mano.",
    "helps": "Concentrarse, ordenar la respiración y calmar la mente."
  },
  {
    "name": "Respiración del cocodrilo",
    "image": "img/respiraciones/06-respiracion-cocodrilo.png",
    "how": "Estirá los brazos como la boca de un cocodrilo. Inhalá al abrir y exhalá al cerrar lentamente.",
    "repetitions": "4 veces.",
    "helps": "Coordinar respiración y movimiento de manera divertida."
  },
  {
    "name": "Respiración del mar",
    "image": "img/respiraciones/07-respiracion-mar.png",
    "how": "Llevá las manos a las orejas como caracoles. Inhalá suave y exhalá diciendo maaaaar despacio.",
    "repetitions": "5 veces.",
    "helps": "Escuchar el propio cuerpo, bajar el ruido externo y encontrar calma."
  },
  {
    "name": "Respiración del arco y la flecha",
    "image": "img/respiraciones/08-respiracion-arco-y-flecha.png",
    "how": "Imaginá un arco. Inhalá llevando la flecha hacia atrás y exhalá soltándola suavemente.",
    "repetitions": "5 veces.",
    "helps": "Enfocar la atención y soltar el aire con intención."
  },
  {
    "name": "Respiración de la flor",
    "image": "img/respiraciones/09-respiracion-flor.png",
    "how": "Cerrá una mano como flor dormida. Inhalá abriéndola lentamente y exhalá cerrándola con suavidad.",
    "repetitions": "3 veces con cada mano.",
    "helps": "Respirar con delicadeza, concentrarse y conectar con la calma."
  }
];

const doorsData = [
  {
    "name": "Puerta 1 - Nos disponemos",
    "image": "img/puertas/puerta-1.png",
    "description": "Entramos al laboratorio con calma, preparando cuerpo, respiración y atención.",
    "invitation": "Hacer una pausa, respirar y preparar la mente para la clase."
  },
  {
    "name": "Puerta 2 - Recibimos la propuesta",
    "image": "img/puertas/puerta-2.png",
    "description": "Aparece una imagen, cuento, canción, pregunta, juego, video, situación o experiencia.",
    "invitation": "Prestar atención a lo que aparece y empezar a preguntarnos qué puede significar."
  },
  {
    "name": "Puerta 3 - Miramos con lupa",
    "image": "img/puertas/puerta-3.png",
    "description": "Miramos despacio, observamos detalles, volvemos a mirar y descubrimos algo nuevo.",
    "invitation": "Observar con atención y preguntarnos qué cambia cuando volvemos a mirar."
  },
  {
    "name": "Puerta 4 - Escuchamos con el corazón",
    "image": "img/puertas/puerta-4.png",
    "description": "Escuchamos de verdad, cuidamos la palabra y hacemos lugar a distintas miradas.",
    "invitation": "Escuchar con respeto, reconocer lo que sienten otros y cuidar la conversación."
  },
  {
    "name": "Puerta 5 - Transformamos",
    "image": "img/puertas/puerta-5.png",
    "description": "Hacemos algo con lo pensado: una acción, construcción, dibujo, gesto, palabra o decisión.",
    "invitation": "Crear algo nuevo a partir de nuestras ideas."
  },
  {
    "name": "Puerta 6 - El caramelo de la semana",
    "image": "img/puertas/puerta-6.png",
    "description": "Nos llevamos una pregunta o idea breve para masticar con la mente durante la semana.",
    "invitation": "Guardar una pregunta o pensamiento para seguir reflexionando."
  }
];

const LSAFrame = "No estamos aprendiendo toda la Lengua de Señas Argentina, porque una lengua es mucho más grande que unas pocas señas. Nos acercamos con respeto a algunos saludos, colores y letras para pensar cómo las manos también pueden comunicar, nombrar y hacer lugar.";

const weeksData = [
  {
    "id": 1,
    "title": "Entramos al Laboratorio Filosófico y miramos con lupa",
    "dates": "6, 7 y 9 de abril",
    "summary": "Presentación del laboratorio y Puerta 3.",
    "theme": "puertas",
    "classes": {
      "tercero": {
        "title": "Entramos al Laboratorio Filosófico",
        "date": "lunes 6 de abril",
        "status": "realizada",
        "tags": [
          "tercero",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lu",
          "Ari – Aristóteles",
          "respiración del globo"
        ],
        "eje": "el Laboratorio Filosófico como espacio para pensar, preguntar, observar y escuchar",
        "ayudante": "Ari – Aristóteles",
        "respiracion": "respiración del globo",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lu",
        "recurso": "obra reversible de Arcimboldo",
        "proposito": "Presentar el Laboratorio Filosófico como un espacio en el que se experimenta con la palabra, las preguntas, las ideas y la escucha. Iniciar el recorrido por las puertas del laboratorio a partir de la Puerta 3: Miramos con lupa.",
        "inicio": "La docente recibe al grupo y propone sentarse en ronda. Se explica que van a comenzar un recorrido dentro del Laboratorio Filosófico.\n\nSe realiza una respiración breve para preparar el cuerpo y la atención. Puede utilizarse la respiración del globo: inhalar mientras los brazos se abren suavemente como si el cuerpo se inflara, y exhalar bajando los brazos con calma.\n\nLuego se abre una conversación inicial:\n\nPreguntas posibles:\n¿Qué es un laboratorio?\n¿Qué se hace en un laboratorio?\n¿Qué cosas se investigan o se experimentan?\n¿Qué podría ser un laboratorio filosófico?\n¿Con qué podríamos experimentar en Filosofía?\n\nLa docente acompaña las ideas que surgen y presenta la noción de que, en este laboratorio, no se experimenta con tubos de ensayo, sino con palabras, preguntas, pensamientos, miradas y formas de escuchar.\n\nPresentación del ayudante\n\nSe presenta a Ari – Aristóteles como ayudante del laboratorio. Se explica que los ayudantes son guardianes de la palabra: cuando alguien tiene al ayudante, tiene la palabra; los demás escuchan.\n\nAri acompaña especialmente esta primera clase porque es el ayudante de la observación. Nos recuerda que mirar con atención ayuda a entender mejor.\n\nFrase de Ari:\n“Observar nos ayuda a entender.”",
        "desarrollo": "La docente presenta las puertas del Laboratorio Filosófico y explica que cada puerta ayuda a ordenar una parte del camino del pensamiento.\n\nEn esta clase se abre la Puerta 3: Miramos con lupa.\n\nSe pregunta:\n\n¿Qué querrá decir mirar con lupa?\n¿Mirar con lupa es solamente usar una lupa de verdad?\n¿Podemos mirar con lupa usando solo los ojos y la atención?\n\nLuego se presenta una obra reversible de Arcimboldo sin anticipar su nombre ni explicar qué es.\n\nPrimer momento: primera mirada\nSe deja un tiempo breve de observación silenciosa. Luego se retira la imagen o se deja de proyectar y se pregunta:\n\n¿Qué vieron primero?\n¿Qué recuerdan de la imagen?\n¿Qué detalles aparecieron?\n¿Todos vieron lo mismo?\n\nSegundo momento: volver a mirar\nLa docente vuelve a mostrar la imagen e invita a observarla nuevamente con más detenimiento.\n\nPreguntas posibles:\n\n¿Qué aparece ahora que antes no habíamos visto?\n¿Qué detalles empiezan a llamar la atención?\n¿Puede una imagen ser una cosa y también otra?\n¿Qué cambia cuando miramos más despacio?\n\nLuego se gira la imagen o se muestra desde otra perspectiva para que el grupo descubra la transformación.",
        "preguntas": [],
        "cierre": "Se recupera la idea de que mirar con lupa no significa solamente ver más grande, sino mirar con atención, detenerse, volver a mirar y descubrir algo nuevo.\n\nPregunta para seguir pensando:\n¿Qué cosas aparecen recién cuando nos tomamos tiempo para mirar?",
        "recursos": "Ayudante Ari.\nImagen de la Puerta 3.\nObra reversible de Arcimboldo.",
        "observacion": ""
      },
      "primero": {
        "title": "Primer encuentro con el Laboratorio Filosófico",
        "date": "martes 7 de abril",
        "status": "realizada",
        "tags": [
          "primero",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lu",
          "Ari – Aristóteles",
          "respiración del globo"
        ],
        "eje": "conocer el Laboratorio Filosófico y descubrir que mirar despacio nos ayuda a encontrar cosas nuevas",
        "ayudante": "Ari – Aristóteles",
        "respiracion": "respiración del globo",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lu",
        "recurso": "obra reversible de Arcimboldo",
        "proposito": "Presentar el espacio de Filosofía como un lugar para pensar juntos, escuchar, mirar con atención y compartir ideas. Iniciar la experiencia del laboratorio a partir de una propuesta visual accesible y sorprendente.",
        "inicio": "La docente invita al grupo a sentarse en ronda y les cuenta que van a entrar al Laboratorio Filosófico.\n\nSe conversa brevemente:\n\n¿Qué será un laboratorio?\n¿Qué se hace allí?\n¿Qué creen que podemos hacer en un laboratorio de ideas?\n\nSe realiza la respiración del globo para preparar el cuerpo y la atención. La docente guía el movimiento de manera sencilla, invitando a inflar y desinflar el cuerpo como un globo.\n\nPresentación del ayudante\n\nSe presenta a Ari como primer ayudante del laboratorio. Se explica que Ari ayuda a mirar con atención y que también cuida la palabra.\n\nLa docente puede decir:\n\n“Cuando Ari está en las manos de alguien, esa persona habla y los demás escuchamos. Así cuidamos las ideas de todos.”",
        "desarrollo": "Se presenta la Puerta 3: Miramos con lupa.\n\nLa docente pregunta:\n\n¿Qué hace una lupa?\n¿Para qué sirve mirar más de cerca?\n¿Alguna vez miraron algo y después descubrieron otra cosa?\n\nLuego se muestra una imagen de Arcimboldo sin decir todavía qué es.\n\nPrimera mirada\nLos niños observan en silencio unos segundos y luego comparten lo que ven.\n\nPreguntas posibles:\n\n¿Qué ven?\n¿Qué colores aparecen?\n¿Qué objetos encuentran?\n¿Qué fue lo primero que miraron?\n\nLa docente valida las observaciones, aunque sean parciales, imaginativas o muy simples. En primero es importante habilitar que digan detalles, colores, formas, objetos o asociaciones libres.\n\nVolvemos a mirar\nLa docente muestra otra vez la imagen y propone mirar con más calma.\n\nPreguntas posibles:\n\n¿Apareció algo nuevo?\n¿Alguien vio algo que antes no había visto?\n¿Qué partes podemos encontrar?\n¿Todos encontramos lo mismo?\n\nLuego se gira la imagen o se muestra la imagen transformada para descubrir que puede aparecer una cara u otra figura.",
        "preguntas": [],
        "cierre": "La docente recupera la experiencia:\n\n“Primero vimos algunas cosas. Después volvimos a mirar y aparecieron otras. Eso es mirar con lupa: mirar despacio, prestar atención y descubrir.”\n\nPuede cerrarse con una respiración breve del abrazo o una frase compartida:\n\n“En Filosofía miramos despacio.”",
        "recursos": "Ayudante Ari.\nImagen de la Puerta 3.\nObra reversible de Arcimboldo.",
        "observacion": ""
      },
      "segundo": {
        "title": "Mirar otra vez para descubrir",
        "date": "jueves 9 de abril",
        "status": "realizada",
        "tags": [
          "segundo",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lu",
          "Ari – Aristóteles",
          "respiración del globo"
        ],
        "eje": "mirar, observar, descubrir detalles y comprender que una misma imagen puede mostrar más de una cosa",
        "ayudante": "Ari – Aristóteles",
        "respiracion": "respiración del globo",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lu",
        "recurso": "imagen de Arcimboldo",
        "proposito": "Presentar el Laboratorio Filosófico y comenzar a trabajar la observación atenta como una forma de pensamiento. Diferenciar una mirada rápida de una mirada más detenida.",
        "inicio": "La docente da la bienvenida al Laboratorio Filosófico y propone una ronda.\n\nSe abre una breve conversación:\n\n¿Qué es un laboratorio?\n¿Qué cosas se pueden investigar?\n¿Se puede investigar una imagen?\n¿Se puede pensar mirando?\n\nSe realiza la respiración del globo para preparar la atención.\n\nPresentación del ayudante y las puertas\n\nSe presenta a Ari como ayudante de la observación. Se explica que Ari acompaña a mirar despacio, descubrir detalles y no quedarse solamente con la primera impresión.\n\nLuego se muestran las puertas del laboratorio. La docente explica que en cada clase se abrirán algunas puertas para ordenar el camino de pensamiento.\n\nSe abre la Puerta 3: Miramos con lupa.",
        "desarrollo": "La docente muestra una imagen de Arcimboldo sin anticipar el nombre de la obra ni explicar qué representa.\n\nPrimera mirada\nLos niños observan en silencio. Luego se abre la conversación.\n\nPreguntas posibles:\n\n¿Qué ven primero?\n¿Qué les llama la atención?\n¿Qué objetos o partes reconocen?\n¿Cómo describirían esta imagen?\n\nLa docente registra oralmente algunas respuestas y ayuda a que el grupo escuche distintas miradas.\n\nSegunda mirada\nLa docente vuelve a mostrar la imagen y propone mirar otra vez.\n\nPreguntas posibles:\n\n¿Qué encontraron después?\n¿Qué apareció ahora que antes no habían visto?\n¿Todos encontraron las mismas partes?\n¿Qué pasa con una imagen cuando la miramos más despacio?\n\nSi la imagen permite una transformación, se gira o se muestra desde otra perspectiva. Se conversa sobre cómo cambió la mirada del grupo.",
        "preguntas": [],
        "cierre": "La docente recupera la diferencia entre mirar rápido y mirar con lupa.\n\nSe puede cerrar con una idea común:\n\n“Cuando volvemos a mirar, aparecen cosas nuevas.”\n\nPregunta para seguir pensando:\n¿Por qué a veces no vemos todo de entrada?",
        "recursos": "Ayudante Ari.\nImagen de la Puerta 3.\nImagen de Arcimboldo.",
        "observacion": ""
      }
    }
  },
  {
    "id": 2,
    "title": "Puerta 4: Escuchamos con el corazón",
    "dates": "13, 14 y 16 de abril",
    "summary": "La escucha atenta como forma de hacer lugar a la palabra del otro.",
    "theme": "puertas",
    "classes": {
      "tercero": {
        "title": "Escuchamos con el corazón: el eco verdadero",
        "date": "lunes 13 de abril",
        "status": "realizada",
        "tags": [
          "tercero",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 4: Escuchamos con el corazó",
          "Sócrates",
          "respiración de la mano"
        ],
        "eje": "la escucha atenta como condición para pensar con otros",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 4: Escuchamos con el corazó",
        "recurso": "tarjetas con frases disparadoras",
        "proposito": "Abrir la idea de que escuchar con el corazón no es solamente oír lo que alguien dice, sino prestarle verdadera atención, guardar algo de sus palabras y poder responder teniendo en cuenta lo que el otro compartió.",
        "inicio": "La docente recibe al grupo en ronda y propone comenzar con la respiración de la mano.\nCada estudiante abre una mano y recorre lentamente sus dedos con el índice de la otra mano: al subir por un dedo, inhala; al bajar, exhala.\n\nLuego se retoma brevemente la clase anterior:\n\n¿Qué puerta habíamos abierto la semana pasada?\n¿Qué significaba mirar con lupa?\n¿Qué descubrimos cuando volvimos a mirar?\n\nLa docente recuerda que en el Laboratorio Filosófico algunas puertas nos ayudan a mirar, otras a escuchar, otras a transformar y otras a llevarnos preguntas para seguir pensando.\n\nPresentación del ayudante\n\nSe presenta a Sócrates como ayudante de la clase.\nSócrates es el ayudante de las preguntas. Nos recuerda que una buena pregunta puede abrir muchas ideas.\n\nLa docente recuerda la regla del ayudante:\n\nCuando alguien tiene a Sócrates, tiene la palabra.\nLos demás escuchan.\nLa palabra circula con cuidado.\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente muestra la Puerta 4 y lee su nombre: Escuchamos con el corazón.\n\nSe abre una primera conversación:\n\n¿Qué querrá decir escuchar con el corazón?\n¿Escuchamos solamente con los oídos?\n¿Se puede escuchar a alguien sin prestarle atención?\n¿Cómo nos damos cuenta de que alguien nos está escuchando de verdad?\n\nLa docente no busca una única respuesta, sino que habilita distintas interpretaciones. Puede recuperar ideas vinculadas con prestar atención, mirar al otro, respetar su turno, no interrumpir, recordar lo que dijo y responder teniendo en cuenta sus palabras.",
        "desarrollo": "La docente presenta el juego del eco verdadero.\n\nCada estudiante recibe o toma una tarjeta con una frase disparadora. Algunas posibles frases:\n\nA mí me gusta…\nNo me gusta…\nMe pone triste…\nMe da alegría…\nAlgo importante para mí es…\nUn lugar que me gusta es…\nUna cosa que me cuesta es…\nAlgo que me gustaría aprender es…\n\nLa dinámica consiste en que cada estudiante debe escuchar al compañero anterior, repetir lo que dijo y luego completar su propia frase.\n\nEjemplo:\n\nPrimer estudiante: “A mí me gusta jugar al fútbol.”\nSegundo estudiante: “Escuché que a él le gusta jugar al fútbol. A mí me gusta dibujar.”\n\nAntes de empezar, la docente puede dar un pequeño tiempo de pensamiento, contando hasta diez, para que cada uno pueda preparar lo que quiere decir.\n\nAcompañamiento de la actividad\n\nDurante el juego, la docente observa si el grupo logra:\n\nescuchar sin interrumpir,\nrecordar lo que dijo el compañero,\nrepetirlo con respeto,\nesperar el turno,\nresponder sin burlas ni comentarios paralelos.\n\nSi la ronda se vuelve muy extensa, se puede hacer con una parte del grupo y luego cerrar con una reflexión común.\n\nSi algún estudiante no recuerda lo dicho por el compañero, se puede preguntar:\n\n¿Qué podríamos hacer para ayudarlo?\n¿Necesita que alguien repita?\n¿Qué nos muestra eso sobre la escucha?",
        "preguntas": [
          "¿Qué fue más difícil: decir lo propio o recordar lo que dijo otro",
          "¿Qué nos ayuda a escuchar mejor",
          "¿Qué cosas nos distraen cuando alguien habla",
          "¿Es posible escuchar y estar pensando en otra cosa al mismo tiempo",
          "¿Cómo se siente una persona cuando no la escuchan",
          "¿Cómo se siente cuando alguien recuerda lo que dijo"
        ],
        "cierre": "La docente propone conversar sobre la experiencia:\n\n¿Pudimos hacer eco verdadero?\n¿El eco fue igual a repetir como loro o fue una forma de cuidar lo que el otro dijo?\n¿Qué necesitamos como grupo para escuchar mejor?\n\nSe recupera la idea central:\n\nEscuchar con el corazón es hacerle lugar a la palabra del otro.\nNo alcanza con estar en silencio: también necesitamos prestar atención.\n\nPregunta para seguir pensando:\n¿A veces creemos que escuchamos, pero en realidad solo estamos esperando nuestro turno para hablar?",
        "recursos": "Ayudante Sócrates.\nImagen de la Puerta 4.\nTarjetas con frases disparadoras.\nTarjeta o afiche de “Escuchamos con el corazón”.\nEspacio en ronda.",
        "observacion": "Esta propuesta está pensada para grupos que pueden sostener una dinámica de escucha por turnos. Si el grupo necesita más encuadre, conviene reducir la cantidad de participantes por ronda o hacer primero una demostración breve con pocos estudiantes."
      },
      "primero": {
        "title": "Escuchar con el corazón: sonidos, silencio y atención",
        "date": "martes 14 de abril",
        "status": "realizada",
        "tags": [
          "primero",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 4: Escuchamos con el corazó",
          "Sócrates",
          "respiración de la mano"
        ],
        "eje": "descubrir que escuchar implica prestar atención con el cuerpo, con los oídos y con la disposición hacia el otro",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 4: Escuchamos con el corazó",
        "recurso": "pin, campanita o sonido breve",
        "proposito": "Acercar a los niños y niñas a la idea de escucha atenta a partir de una experiencia concreta con sonidos, silencio y atención. Diferenciar escuchar rápido de escuchar con cuidado.",
        "inicio": "La docente invita al grupo a sentarse en ronda y recuerda que están entrando al Laboratorio Filosófico.\n\nSe realiza la respiración de la mano.\nLa docente guía despacio:\n\nSubimos por un dedo e inhalamos.\nBajamos por el dedo y exhalamos.\nVamos recorriendo la mano como si nuestra respiración caminara.\n\nLuego se retoma brevemente la clase anterior:\n\n¿Qué hicimos cuando miramos con lupa?\n¿Qué pasaba cuando mirábamos otra vez?\n¿Aparecían cosas nuevas?\n\nLa docente puede decir:\n\n“Hoy vamos a abrir otra puerta. La semana pasada miramos con atención. Hoy vamos a probar qué pasa cuando escuchamos con atención.”\n\nPresentación del ayudante\n\nSe presenta a Sócrates como ayudante de la clase.\nSócrates es curioso y le gustan las preguntas. En esta clase nos va a ayudar a preguntarnos qué significa escuchar.\n\nSe recuerda que el ayudante cuida la palabra y que, cuando alguien habla, los demás intentan escuchar.\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente muestra la Puerta 4 y lee el nombre: Escuchamos con el corazón.\n\nSe pregunta:\n\n¿Qué significa escuchar?\n¿Qué usamos para escuchar?\n¿Escuchar es lo mismo que hacer silencio?\n¿Podemos escuchar algo muy bajito?\n¿Qué pasa si todos hablamos al mismo tiempo?\n\nEn primero pueden aparecer respuestas literales. La docente las toma como punto de partida y acompaña hacia una idea más amplia: escuchar también es prestar atención.",
        "desarrollo": "La docente presenta un pin, campanita, cuenco, cascabel o sonido breve.\n\nPrimera consigna:\n\n“Voy a hacer sonar este objeto. Cuando ya no escuchen el sonido, levantan la mano.”\n\nSe repite varias veces. La docente invita a notar que el sonido no desaparece de golpe para todos igual: algunos dejan de escucharlo antes, otros después.\n\nLuego se propone una variante:\n\nCerrar los ojos.\nEscuchar el sonido inicial.\nQuedarse en silencio.\nAbrir los ojos recién cuando vuelva a sonar.\n\nDespués se amplía la escucha al entorno:\n\n¿Qué sonidos escuchamos adentro del aula?\n¿Qué sonidos vienen de afuera?\n¿Hay sonidos fuertes?\n¿Hay sonidos suaves?\n¿Hay sonidos que aparecen recién cuando hacemos silencio?\n\nPuente filosófico\n\nLa docente conecta la experiencia con la Puerta 4:\n\n“Cuando hicimos silencio, pudimos escuchar sonidos que antes estaban, pero no aparecían para nosotros. A veces con las personas pasa algo parecido: si hablamos encima, no podemos escuchar lo que el otro quiere decir.”\n\nSe abre una breve conversación:\n\n¿Qué necesitamos para escuchar a un compañero?\n¿Cómo sabemos que alguien nos está escuchando?\n¿Qué hacemos con el cuerpo cuando escuchamos?\n\nActividad breve de escucha entre compañeros\n\nSi el clima lo permite, se puede hacer una mini ronda:\n\nCada niño completa una frase corta, por ejemplo:\n\n“Hoy me gusta…”\n“Hoy escuché…”\n“Hoy me siento…”\n\nLa consigna para el grupo es mirar y escuchar al compañero sin interrumpir.\n\nNo es necesario que todos hablen si el tiempo no alcanza. Lo importante es cuidar la experiencia de escucha.",
        "preguntas": [
          "¿Qué fue más fácil: escuchar el sonido o escuchar a un compañero",
          "¿Qué sonidos aparecieron cuando hicimos silencio",
          "¿Qué pasa si quiero hablar mientras otro está hablando",
          "¿El corazón puede ayudarnos a escuchar mejor",
          "¿Cómo se siente que alguien nos escuche con atención"
        ],
        "cierre": "La docente recupera la idea central:\n\nEscuchar con el corazón es escuchar con atención y cuidado.\nA veces necesitamos hacer silencio afuera para poder escuchar mejor.\n\nSe puede cerrar con una última escucha del pin o con una respiración breve.\n\nPregunta para seguir pensando:\n¿Qué cosas escucho cuando me quedo en silencio?",
        "recursos": "Ayudante Sócrates.\nImagen de la Puerta 4.\nPin, campanita, cuenco o sonido breve.\nEspacio en ronda.",
        "observacion": "En primero conviene que la experiencia sea breve, concreta y corporal. La escucha del sonido permite vivenciar la atención antes de pasar a la conversación."
      },
      "segundo": {
        "title": "Escuchar o no escuchar: una escena para pensar",
        "date": "jueves 16 de abril",
        "status": "realizada",
        "tags": [
          "segundo",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 4: Escuchamos con el corazó",
          "Sócrates",
          "respiración de la mano"
        ],
        "eje": "reconocer qué actitudes ayudan a escuchar y cuáles interrumpen la comunicación",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 4: Escuchamos con el corazó",
        "recurso": "dramatizaciones breves sobre escuchar y no escuchar",
        "proposito": "Pensar la escucha desde situaciones concretas y dramatizadas. Reconocer que escuchar con el corazón implica prestar atención, no apurar, no juzgar, no distraerse y hacerle lugar a quien habla.",
        "inicio": "Antes de entrar o al comenzar la clase, la docente puede proponer una pequeña rutina corporal:\n\nmano en alto como señal de pausa,\nmano en el pecho para respirar,\ndedo en la cabeza para recordar que entramos a pensar.\n\nLuego, en ronda, se realiza la respiración de la mano para preparar la atención.\n\nLa docente retoma brevemente:\n\nLa semana pasada abrimos la puerta de mirar con lupa.\nHoy vamos a abrir una puerta nueva: Escuchamos con el corazón.\n\nPresentación del ayudante\n\nSe presenta a Sócrates como ayudante de la clase.\n\nLa docente recuerda:\n\nSócrates nos ayuda a preguntar. Hoy nos va a ayudar a preguntarnos cómo escuchamos y qué pasa cuando no escuchamos de verdad.\n\nSe recuerda la regla del ayudante de la palabra: habla quien lo tiene, los demás escuchan.\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente muestra la Puerta 4.\n\nSe conversa:\n\n¿Qué significa escuchar con el corazón?\n¿Es solamente escuchar sonidos?\n¿Qué pasa cuando alguien nos habla y nosotros miramos para otro lado?\n¿Qué pasa cuando alguien quiere contar algo y lo apuramos?\n¿Qué pasa cuando nos reímos de lo que otro dice?\n\nLa docente puede tomar algunas respuestas y escribir o decir dos columnas oralmente:\n\nAyuda a escuchar: mirar, esperar, prestar atención, preguntar con respeto.\nNo ayuda a escuchar: interrumpir, burlarse, hablar encima, distraerse, apurar.",
        "desarrollo": "La docente presenta pequeñas escenas. Puede pedir voluntarios o dramatizarlas ella misma con algún estudiante.\n\nEscena 1: No escucho porque estoy distraída\nUn niño cuenta algo y la docente mira para otro lado, acomoda cosas o parece no prestar atención.\n\nPreguntas:\n\n¿Lo estaba escuchando?\n¿Cómo se dieron cuenta?\n¿Cómo se habrá sentido quien hablaba?\n\nEscena 2: No escucho porque apuro\nUn niño empieza a contar algo y la docente lo interrumpe: “Dale, rápido, terminá.”\n\nPreguntas:\n\n¿Eso ayuda a contar algo importante?\n¿Qué siente una persona cuando la apuran?\n¿Escuchar con el corazón puede ser apurar?\n\nEscena 3: No escucho porque juzgo\nUn niño dice algo y la docente hace gestos de burla, aburrimiento o desaprobación.\n\nPreguntas:\n\n¿Qué pasó con esa escucha?\n¿El cuerpo también muestra si escuchamos o no?\n¿Qué gestos ayudan a escuchar mejor?\n\nEscena 4: Escucho con atención\nLa docente mira al niño, espera, no interrumpe y luego responde retomando algo de lo que dijo.\n\nPreguntas:\n\n¿Qué cambió en esta escena?\n¿Cómo nos damos cuenta de que ahora sí hubo escucha?\n¿Qué hizo el cuerpo?\n¿Qué hicieron los ojos?\n¿Qué hizo la palabra?\n\nActividad de clasificación gestual\n\nLuego de las escenas, la docente propone una clasificación sencilla con el cuerpo:\n\nPulgar arriba: ayuda a escuchar.\nPulgar abajo: no ayuda a escuchar.\nPulgar al costado: depende / hay que pensarlo.\n\nLa docente nombra acciones y los chicos responden con el pulgar:\n\nmirar a quien habla,\nhablar encima,\nreírse de un compañero,\nesperar el turno,\nhacer ruido mientras otro habla,\npreguntar si no entendí,\nescuchar y después responder.\n\nDespués de algunas respuestas, se pregunta:\n\n¿Por qué elegiste ese pulgar?\n¿Qué tendría que cambiar para que esa acción ayude a escuchar?",
        "preguntas": [
          "¿Escuchar es solo oír",
          "¿Qué partes del cuerpo usamos cuando escuchamos",
          "¿Se puede escuchar con los ojos",
          "¿Qué gestos muestran que estoy prestando atención",
          "¿Qué necesita un grupo para escucharse mejor",
          "¿Cómo podemos cuidar la palabra de los demás"
        ],
        "cierre": "La docente recupera la idea central:\n\nEscuchar con el corazón es prestar atención de verdad.\nNo es solo quedarse callado: es hacerle lugar al otro con el cuerpo, con la mirada y con la palabra.\n\nSe puede cerrar con una vuelta breve:\n\n“Una cosa que ayuda a escuchar es…”\n\nCada niño que quiera completa la frase.\n\nPregunta para seguir pensando:\n¿Cómo me doy cuenta de que alguien me está escuchando de verdad?",
        "recursos": "Ayudante Sócrates.\nImagen de la Puerta 4.\nTarjetas o lista de situaciones.\nPulgar como semáforo corporal.\nEspacio en ronda.",
        "observacion": "En segundo conviene sostener la propuesta con escenas concretas y gestos visibles. La dramatización ayuda a comprender la diferencia entre escuchar y no escuchar sin depender solo de una explicación oral."
      }
    }
  },
  {
    "id": 3,
    "title": "Puerta 5: Transformamos",
    "dates": "20, 21 y 23 de abril",
    "summary": "Pasar de la primera reacción a una respuesta más cuidada.",
    "theme": "puertas",
    "classes": {
      "tercero": {
        "title": "Antes de responder, lo paso por el corazón",
        "date": "lunes 20 de abril",
        "status": "realizada",
        "tags": [
          "tercero",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
          "Beauvoir",
          "respiración de la taza de chocolate caliente"
        ],
        "eje": "transformar una primera reacción en una respuesta más pensada, cuidada y respetuosa",
        "ayudante": "Beauvoir",
        "respiracion": "respiración de la taza de chocolate caliente",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
        "recurso": "tarjetas con situaciones cotidianas",
        "proposito": "Abrir la idea de que no siempre lo primero que nos sale decir o hacer es lo que queremos elegir. Pensar cómo una respuesta puede transformarse cuando nos detenemos, la pasamos por el corazón y buscamos una forma más cuidada de expresarnos.",
        "inicio": "La docente invita al grupo a sentarse en ronda y propone comenzar con la respiración de la taza de chocolate caliente.\n\nCada estudiante junta las manos como si sostuviera una taza. La docente guía:\n\nInhalamos por la nariz, como si oliéramos algo rico y calentito.\nExhalamos despacio, como si sopláramos para enfriarlo.\n\nDespués de algunas respiraciones, se puede abrir una breve ronda:\n\n¿Qué imaginaste dentro de tu taza?\n¿Qué olor tenía?\n¿Qué sensación te dio?\n\nEsta primera ronda permite entrar al laboratorio desde una experiencia tranquila y compartida.\n\nPresentación del ayudante\n\nSe presenta a Beauvoir como ayudante de la clase.\n\nBeauvoir es la ayudante de la libertad y las decisiones. Nos ayuda a pensar que podemos elegir cómo actuar, cómo responder y qué camino tomar.\n\nLa docente puede recordar:\n\n“Hoy Beauvoir nos va a acompañar a pensar qué pasa entre lo primero que nos sale y lo que elegimos decir después de pensarlo.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente presenta una serie de tarjetas con situaciones cotidianas. Antes de leerlas, anticipa la consigna:\n\n“Primero vamos a escuchar una situación y vamos a pensar qué nos saldría decir o hacer enseguida, sin pensarlo demasiado.”\n\nSe aclara que esa primera respuesta no tiene que ser perfecta ni correcta: la idea es reconocer el impulso inicial.\n\nEjemplos de situaciones posibles:\n\nUn compañero te interrumpe mientras estás hablando.\nAlguien se ríe de una idea que dijiste.\nUn amigo no te invita a jugar.\nUn compañero te saca algo sin pedir permiso.\nEstás esperando tu turno y alguien se adelanta.\nAlguien dice algo que no te gusta.\nQuerés participar, pero otros hablan encima.\n\nLa docente lee una situación por vez y habilita algunas respuestas breves.\n\nPrimer momento · Lo primero que me sale\n\nFrente a cada tarjeta, se pregunta:\n\n¿Qué te saldría decir primero?\n¿Qué gesto te saldría hacer?\n¿Qué emoción aparece?\n¿El cuerpo reacciona antes que las palabras?\n\nLa docente puede registrar que a veces aparecen respuestas impulsivas: gritar, contestar mal, empujar, burlarse, irse, interrumpir, quedarse callado con enojo o decir algo hiriente.\n\nNo se trata de juzgar esas respuestas, sino de reconocerlas como una primera reacción.\n\nPuerta 5 · Transformamos\n\nLuego se presenta la Puerta 5: Transformamos.\n\nLa docente introduce la frase:\n\n“Ahora que lo pienso, lo paso por el corazón y elijo cómo decirlo.”\n\nSe explica que transformar no es esconder lo que sentimos ni fingir que no nos importa. Transformar es detenernos un momento para buscar una manera de decir o hacer algo sin lastimar.\n\nSe vuelve a leer una de las tarjetas y se propone una pausa antes de responder. La docente puede contar hasta cinco:\n\nUno… dos… tres… cuatro… cinco…\n\nDespués pregunta:\n\nAhora que lo pensamos un poco más, ¿cómo podríamos decirlo?\n¿Cómo se puede expresar enojo sin lastimar?\n¿Cómo puedo decir que algo no me gustó de una manera más clara?\n¿Qué cambia cuando espero antes de responder?\n\nSegundo momento · Transformamos la respuesta\n\nLa docente propone transformar algunas respuestas impulsivas en respuestas más cuidadas.\n\nEjemplo:\n\nPrimera reacción: “¡Andate, no te quiero escuchar!”\nRespuesta transformada: “No me gustó lo que dijiste. Necesito que me escuches.”\n\nPrimera reacción: “¡Sos malo!”\nRespuesta transformada: “Me hizo sentir mal que me sacaras eso sin pedirme permiso.”\n\nPrimera reacción: “¡Callate!”\nRespuesta transformada: “Quiero terminar de hablar y después te escucho.”\n\nLa docente puede invitar al grupo a construir las respuestas entre todos, sin exigir que cada uno encuentre la frase perfecta.",
        "desarrollo": "",
        "preguntas": [
          "¿Qué diferencia hay entre decir lo primero que me sale y elegir cómo decirlo",
          "¿Pensar antes de hablar puede cambiar lo que pasa después",
          "¿Se puede decir algo que me molesta sin lastimar",
          "¿Qué significa pasar una palabra por el corazón",
          "¿El corazón decide o ayuda a cuidar lo que decimos",
          "¿Qué pasa cuando una respuesta sale sin pensar",
          "¿Qué necesitamos para transformar una palabra"
        ],
        "cierre": "La docente recupera la idea central:\n\nA veces no podemos elegir lo que sentimos primero, pero sí podemos aprender a elegir cómo responder.\n\nSe puede cerrar con una ronda breve:\n\n“Una palabra que puedo cuidar más es…”\n“Una respuesta que puedo transformar es…”\n“Algo que me ayuda a pensar antes de hablar es…”\n\nPregunta para seguir pensando:\n¿Qué palabras necesito pasar más seguido por el corazón antes de decirlas?",
        "recursos": "Ayudante Beauvoir.\nImagen de la Puerta 5.\nTarjetas con situaciones cotidianas.\nFrase de la clase: “Ahora que lo pienso, lo paso por el corazón y elijo cómo decirlo.”\nEspacio en ronda.",
        "observacion": "Esta propuesta está pensada para trabajar la relación entre impulso, emoción, palabra y decisión. En tercero puede sostenerse con mayor intercambio oral, siempre que la docente regule la cantidad de participaciones y ofrezca tiempos breves de pausa antes de responder."
      },
      "primero": {
        "title": "Transformamos con el cuerpo y las palabras",
        "date": "martes 21 de abril",
        "status": "realizada",
        "tags": [
          "primero",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
          "Beauvoir",
          "respiración de la taza de chocolate caliente"
        ],
        "eje": "reconocer una emoción o reacción corporal y buscar una forma más cuidada de responder",
        "ayudante": "Beauvoir",
        "respiracion": "respiración de la taza de chocolate caliente",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
        "recurso": "escenas breves dramatizadas",
        "proposito": "Acercar a los niños y niñas a la idea de transformación desde el cuerpo y las situaciones cotidianas. Reconocer que a veces sentimos enojo, tristeza o molestia, pero podemos buscar una manera más cuidada de decir lo que nos pasa.",
        "inicio": "La docente invita al grupo a sentarse en ronda y propone la respiración de la taza de chocolate caliente.\n\nCada niño junta las manos como si sostuviera una taza. La docente guía:\n\nOlemos algo rico.\nSoplamos despacito para enfriarlo.\nVolvemos a oler.\nVolvemos a soplar.\n\nLuego se puede preguntar:\n\n¿Qué había en tu taza?\n¿Era dulce, calentito, rico, suave?\n¿Qué le pasó a tu cuerpo cuando respiramos despacio?\n\nPresentación del ayudante\n\nSe presenta a Beauvoir como ayudante de la clase.\n\nLa docente puede decir:\n\n“Beauvoir nos ayuda a pensar en las decisiones. A veces algo nos pasa en el cuerpo muy rápido, pero después podemos elegir qué hacer o qué decir.”\n\nSe recuerda que el ayudante cuida la palabra y acompaña la ronda.\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente anticipa que van a imaginar pequeñas situaciones y que, antes de hablar, van a mostrar con el cuerpo cómo se sentirían.\n\nSe aclara:\n\n“No vamos a lastimar a nadie. No vamos a empujar. Solo vamos a mostrar con la cara, los hombros, las manos o la postura qué nos pasaría.”\n\nPrimer momento · El cuerpo reacciona\n\nLa docente relata escenas breves y cercanas.\n\nEjemplos:\n\nEstás jugando con un juguete que te gusta y alguien te lo saca de la mano.\nEstás haciendo un dibujo y alguien se ríe.\nQuerés hablar y otro compañero habla encima.\nAlguien no te deja sentarte en un lugar.\nUn amigo no quiere jugar con vos.\nAlguien rompe algo que estabas armando.\n\nDespués de cada escena, la docente invita:\n\nMostrá con la cara cómo te sentirías.\nMostrá con los hombros qué pasaría.\nMostrá con las manos qué ganas te darían.\nSin hablar, ¿cómo se ve el enojo?\nSin hablar, ¿cómo se ve la tristeza?\n\nLa docente ayuda a nombrar algunas emociones si aparecen:\n\nenojo, tristeza, sorpresa, bronca, vergüenza, ganas de llorar, ganas de gritar.\n\nPuerta 5 · Transformamos\n\nLa docente presenta la Puerta 5: Transformamos.\n\nExplica con palabras simples:\n\n“Transformar es cambiar algo. Hoy vamos a probar cómo una primera reacción, que a veces puede salir fea o lastimar, puede cambiarse por una forma mejor de decir lo que sentimos.”\n\nSe presenta la frase:\n\n“Ahora que lo pienso, lo paso por el corazón y elijo cómo decirlo.”\n\nCon primero puede decirse también en versión más breve:\n\n“Lo pienso, lo paso por el corazón y elijo cómo decirlo.”\n\nSegundo momento · ¿Cómo lo digo mejor?\n\nLa docente vuelve a tomar una escena.\n\nEjemplo:\n\n“Alguien me saca un juguete.”\n\nPrimero pregunta:\n\n¿Qué me saldría hacer?\n¿Qué me saldría decir?\n\nLuego acompaña la transformación:\n\n¿Cómo puedo decirlo sin pegar?\n¿Cómo puedo pedir que me lo devuelva?\n¿Qué palabra ayuda más?\n¿Qué frase cuida más?\n\nPosibles respuestas transformadas:\n\n“Me lo devolvés, por favor.”\n“No me gustó que me lo saques.”\n“Estoy usando eso. Después te lo presto.”\n“Me hizo sentir mal.”\n“Necesito que me pidas permiso.”\n\nLa docente puede dramatizar dos formas:\n\nUna respuesta impulsiva.\nUna respuesta pasada por el corazón.\n\nLuego pregunta:\n\n¿Cuál ayuda más?\n¿Cuál lastima menos?\n¿Cuál nos permite seguir jugando?\n\nActividad breve\n\nLa docente puede elegir tres o cuatro escenas, no más, para sostener la atención.\n\nEn cada una se repite la secuencia:\n\nEscucho la escena.\nMuestro con el cuerpo lo que me pasa.\nPienso qué me saldría primero.\nBusco una forma mejor de decirlo.",
        "desarrollo": "",
        "preguntas": [
          "¿Qué hace mi cuerpo cuando me enojo",
          "¿Qué palabra puede lastimar",
          "¿Qué palabra puede ayudar",
          "¿Puedo decir que algo no me gustó sin gritar",
          "¿Qué significa pensar antes de contestar",
          "¿Qué pasa cuando una palabra pasa por el corazón"
        ],
        "cierre": "La docente recupera:\n\n“Hoy vimos que primero aparece una emoción en el cuerpo. Después podemos pensar y elegir una palabra que cuide más.”\n\nSe puede cerrar con una frase repetida por todos:\n\n“Lo pienso, lo paso por el corazón y elijo cómo decirlo.”\n\nO con una respiración breve para volver a la calma.\n\nPregunta para seguir pensando:\n¿Qué palabra puedo usar cuando algo me molesta?",
        "recursos": "Ayudante Beauvoir.\nImagen de la Puerta 5.\nEscenas breves preparadas por la docente.\nEspacio en ronda.\nPin o sonido de calma, si el grupo necesita cerrar con escucha.",
        "observacion": "En primero conviene trabajar la transformación desde el cuerpo, la dramatización y frases cortas. La idea no es exigir explicaciones largas, sino ayudar a pasar de la emoción corporal a una palabra más cuidada."
      },
      "segundo": {
        "title": "Semáforo de palabras",
        "date": "jueves 23 de abril",
        "status": "realizada",
        "tags": [
          "segundo",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
          "Beauvoir",
          "respiración de la taza de chocolate caliente"
        ],
        "eje": "reconocer maneras de decir que cuidan, lastiman o necesitan transformarse",
        "ayudante": "Beauvoir",
        "respiracion": "respiración de la taza de chocolate caliente",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
        "recurso": "semáforo con pulgar",
        "proposito": "Pensar que no todas las formas de decir algo producen el mismo efecto. Reconocer palabras o respuestas que pueden lastimar, detenerse a pensarlas y transformarlas en formas más amables, claras o cuidadas.",
        "inicio": "La docente invita al grupo a entrar al Laboratorio Filosófico y comenzar con la respiración de la taza de chocolate caliente.\n\nCada estudiante imagina que sostiene una taza con algo rico. Inhala como si oliera su taza y exhala como si soplara despacio.\n\nLuego se puede abrir una ronda breve:\n\n¿Qué había en tu taza?\n¿Qué imaginaste?\n¿Qué sensación te dio respirar así?\n\nPresentación del ayudante\n\nSe presenta a Beauvoir como ayudante de la clase.\n\nLa docente puede decir:\n\n“Beauvoir nos ayuda a pensar en nuestras decisiones. Hoy vamos a pensar en una decisión muy importante: cómo elegimos decir las cosas.”\n\nSe recuerda que el ayudante cuida la palabra y acompaña la conversación.\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente presenta la actividad del semáforo.\n\nExplica que no van a responder todos hablando al mismo tiempo, sino usando el pulgar:\n\nPulgar hacia arriba: verde. Esa forma de decir ayuda o cuida.\nPulgar hacia abajo: rojo. Esa forma de decir lastima o no ayuda.\nPulgar al costado: amarillo. Hay que pensarlo mejor o depende de cómo se diga.\n\nLa docente puede practicar primero con ejemplos sencillos:\n\n“¿Me prestás eso, por favor?”\n“Dame eso ya.”\n“No quiero jugar con vos porque sos malo.”\n“Ahora estoy jugando a otra cosa, después podemos jugar.”\n\nPrimer momento · Clasificamos formas de decir\n\nLa docente lee distintas frases o situaciones. Los niños responden con el pulgar, sin hablar al principio.\n\nEjemplos:\n\n“¡Callate, no quiero escucharte!”\n“Me gustaría terminar de hablar.”\n“Eso que hiciste no me gustó.”\n“¡Sos un desastre!”\n“¿Podés pedírmelo antes de agarrarlo?”\n“Yo pienso distinto.”\n“Tu idea es tonta.”\n“No estoy de acuerdo, pero te escucho.”\n\nDespués de cada una o de algunas, la docente pregunta:\n\n¿Por qué pusiste rojo?\n¿Por qué pusiste verde?\n¿Qué tendría que cambiar para pasar de rojo a amarillo o verde?\n¿La idea está mal o está mal la forma de decirla?\n\nPuerta 5 · Transformamos\n\nLa docente presenta la Puerta 5: Transformamos.\n\nSe introduce la frase:\n\n“Ahora que lo pienso, lo paso por el corazón y elijo cómo decirlo.”\n\nLa docente explica:\n\n“A veces lo que queremos decir puede ser importante, pero la forma en que lo decimos puede lastimar. Entonces no necesitamos borrar la idea, sino buscar una forma mejor de expresarla.”\n\nSegundo momento · Transformamos frases rojas\n\nSe eligen algunas frases que el grupo marcó como rojas.\n\nLa docente propone transformarlas entre todos.\n\nEjemplo:\n\nFrase roja: “¡No quiero jugar con vos!”\nTransformación posible: “Ahora quiero jugar solo, después podemos jugar.”\n\nFrase roja: “¡Callate!”\nTransformación posible: “Quiero terminar de hablar y después te escucho.”\n\nFrase roja: “Tu dibujo es feo.”\nTransformación posible: “A mí me gusta de otra manera, pero es tu dibujo.”\n\nFrase roja: “Dame eso.”\nTransformación posible: “¿Me lo prestás, por favor?”\n\nSe puede volver a usar el pulgar después de transformar:\n\n¿Ahora quedó verde, amarillo o todavía rojo?\n¿Qué palabra ayudó a cambiarlo?\n¿Qué parte pasó por el corazón?",
        "desarrollo": "",
        "preguntas": [
          "¿Todas las palabras hacen sentir lo mismo",
          "¿Una misma idea puede decirse de distintas maneras",
          "¿Qué diferencia hay entre decir algo y decirlo cuidando al otro",
          "¿El tono también importa",
          "¿Hay palabras que cierran una conversación",
          "¿Hay palabras que ayudan a seguir hablando",
          "¿Qué significa transformar una frase"
        ],
        "cierre": "La docente recupera la idea central:\n\n“Transformar no es dejar de decir lo que pensamos. Transformar es buscar una forma de decirlo que cuide más.”\n\nSe puede cerrar con una ronda breve:\n\n“Una palabra que ayuda es…”\n“Una frase que puedo usar cuando algo me molesta es…”\n“Antes de hablar puedo…”\n\nPregunta para seguir pensando:\n¿Qué palabras ayudan a que una conversación no se rompa?",
        "recursos": "Ayudante Beauvoir.\nImagen de la Puerta 5.\nFrases o situaciones preparadas.\nSemáforo con pulgar.\nTarjetas rojo, amarillo y verde, si se desea reforzar visualmente.\nPin o sonido breve para cierre de calma.",
        "observacion": "En segundo conviene usar apoyos visuales y gestuales concretos. El semáforo permite ordenar la participación, evitar que todos hablen al mismo tiempo y ayudar a distinguir entre la idea que se quiere expresar y la forma en que se dice."
      }
    }
  },
  {
    "id": 4,
    "title": "Puerta 6: El caramelo de la semana",
    "dates": "27, 28 y 30 de abril",
    "summary": "Ideas que necesitan tiempo para ser saboreadas y pensadas.",
    "theme": "puertas",
    "classes": {
      "tercero": {
        "title": "Una pregunta para masticar",
        "date": "lunes 27 de abril",
        "status": "realizada",
        "tags": [
          "tercero",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 6: El caramelo de la seman",
          "Descartes",
          "respiración del cuadrado o respiración breve de calma"
        ],
        "eje": "la espera, la atención y el tiempo que necesitan algunas ideas para desplegarse",
        "ayudante": "Descartes",
        "respiracion": "respiración del cuadrado o respiración breve de calma",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 6: El caramelo de la seman",
        "recurso": "experiencia sensorial con caramelo masticable",
        "proposito": "Presentar la Puerta 6: El caramelo de la semana, a partir de una experiencia concreta con los sentidos. Abrir la idea de que algunas preguntas, ideas o descubrimientos no aparecen enseguida, sino que necesitan tiempo, atención y paciencia.",
        "inicio": "La docente invita al grupo a sentarse en ronda y anticipa que entrarán al Laboratorio Filosófico con una experiencia distinta.\n\nSe realiza una respiración inicial. Puede utilizarse la respiración del cuadrado: inhalar, sostener un momento breve y exhalar, siguiendo imaginariamente los lados de un cuadrado. También puede realizarse una respiración breve de calma, adaptada al grupo.\n\nLuego se presenta a Descartes como ayudante de la clase.\n\nDescartes es el ayudante de la duda y del pensamiento cuidadoso. Nos ayuda a no responder enseguida, a mirar con atención y a preguntarnos si las cosas son como parecen.\n\nLa docente puede decir:\n\n“Hoy Descartes nos trae una experiencia para pensar despacio. No vamos a apurarnos. Vamos a probar qué pasa cuando esperamos.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente muestra un recipiente cerrado con caramelos adentro, sin decir todavía qué contiene.\n\nPrimero lo hace sonar y pregunta:\n\n¿Qué creen que hay adentro?\n¿Qué sonido escuchan?\n¿Qué pistas nos da ese sonido?\n¿Podemos saber qué es solo escuchando?\n¿Qué otras cosas necesitamos para descubrirlo?\n\nSe anticipa que la experiencia se realizará con los cinco sentidos, pero siguiendo instrucciones paso a paso.\n\nLa docente pregunta:\n\n¿Cuáles son los cinco sentidos?\n¿Qué parte del cuerpo usamos para mirar?\n¿Qué usamos para oler?\n¿Qué usamos para tocar?\n¿Qué usamos para saborear?\n¿Qué usamos para escuchar?\n\nSi aparece la confusión entre sentidos y sentimientos, se puede aclarar:\n\n“Los sentidos nos ayudan a percibir el mundo con el cuerpo. Los sentimientos nos cuentan algo de lo que nos pasa por dentro. A veces una misma experiencia puede despertar las dos cosas.”",
        "desarrollo": "La docente reparte un caramelo a cada estudiante y aclara que todavía no deben comerlo.\n\nLa experiencia se realiza en varios pasos.\n\nPrimer momento: escuchar\nAntes de repartir o al comenzar, se escucha el sonido del recipiente.\n\nPreguntas posibles:\n\n¿Qué imaginaste al escuchar?\n¿El sonido te dio alguna pista?\n¿Todos imaginamos lo mismo?\n\nSegundo momento: mirar sin abrir\nCada estudiante observa el caramelo cerrado.\n\nPreguntas posibles:\n\n¿Qué ves?\n¿Qué color tiene el envoltorio?\n¿Parece grande o pequeño?\n¿Podés imaginar el sabor solo con mirarlo?\n\nTercer momento: tocar\nLos estudiantes tocan el caramelo sin abrirlo.\n\nPreguntas posibles:\n\n¿Está duro o blando?\n¿Es liso, rugoso, pegajoso?\n¿Hace ruido cuando lo movés?\n¿La textura te da alguna pista?\n\nCuarto momento: abrir despacio\nLa docente invita a abrir el caramelo lentamente, sin llevarlo aún a la boca.\n\nPreguntas posibles:\n\n¿Qué cambió al abrirlo?\n¿Apareció olor?\n¿Se ve igual que antes?\n¿Qué información nueva tenemos ahora?\n\nQuinto momento: oler\nLos estudiantes huelen el caramelo.\n\nPreguntas posibles:\n\n¿Qué olor tiene?\n¿Te recuerda a algo?\n¿El olor coincide con lo que imaginabas?\n¿El olor te hace pensar en un sabor?\n\nSexto momento: probar sin morder\nLa docente indica que pueden poner el caramelo en la boca, pero sin morderlo todavía.\n\nSe invita a dejarlo sobre la lengua un momento.\n\nPreguntas posibles:\n\n¿Qué sabor aparece primero?\n¿Es dulce, ácido, frutal, suave, fuerte?\n¿El sabor cambia mientras esperás?\n¿Qué pasa si no lo mordemos enseguida?\n\nSéptimo momento: masticar despacio\nLuego de un tiempo, se indica que pueden masticarlo lentamente.\n\nPreguntas posibles:\n\n¿Cambió la textura?\n¿Ahora está igual que al principio?\n¿Qué apareció al esperar?\n¿Qué descubriste que no habías notado al comienzo?\n\nPuerta 6 · El caramelo de la semana\n\nDespués de la experiencia, la docente presenta la Puerta 6: El caramelo de la semana.\n\nSe explica:\n\n“En el Laboratorio Filosófico, el caramelo de la semana no siempre será un caramelo real. A veces será una pregunta. Una pregunta que no necesitamos responder enseguida. Una pregunta que podemos llevarnos, guardar, masticar con el pensamiento y volver a pensar durante la semana.”\n\nLa docente puede conectar:\n\n“Así como el caramelo cambió cuando esperamos, algunas ideas también cambian cuando les damos tiempo.”",
        "preguntas": [
          "¿Qué descubrimos cuando no nos apuramos",
          "¿Qué pasó con el caramelo mientras esperábamos",
          "¿Se sentía igual al principio y al final",
          "¿El olor era igual al sabor",
          "¿Podemos descubrir más cuando usamos varios sentidos",
          "¿Hay preguntas que necesitan tiempo",
          "¿Qué significa masticar una idea",
          "¿Qué diferencia hay entre responder rápido y pensar despacio"
        ],
        "cierre": "La docente propone elegir o presentar una pregunta como caramelo de la semana.\n\nPosibles preguntas:\n\n¿Qué cosas se descubren mejor cuando no nos apuramos?\n¿Hay algo que necesita más tiempo para poder descubrirse?\n¿Cuándo hacemos algo más despacio y con más atención, podemos descubrir algo distinto?\n\nSe aclara que no hace falta responder en ese momento. La pregunta queda abierta para acompañar la semana.\n\nPregunta caramelo:\n¿Qué cosas se descubren mejor cuando no nos apuramos?",
        "recursos": "Ayudante Descartes.\nImagen de la Puerta 6.\nCaramelos masticables.\nRecipiente o lata.\nTarjeta con pregunta del caramelo de la semana.\nTarjetas o apoyo visual de los cinco sentidos, si se desea.",
        "observacion": "En tercero puede profundizarse más la relación entre percepción, espera y pensamiento. Es importante sostener la consigna de no comer el caramelo enseguida, porque la espera es parte central de la experiencia filosófica."
      },
      "primero": {
        "title": "Saborear despacio una idea",
        "date": "martes 28 de abril",
        "status": "realizada",
        "tags": [
          "primero",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 6: El caramelo de la seman",
          "Descartes",
          "respiración breve de calma"
        ],
        "eje": "descubrir con los sentidos y experimentar la espera como forma de atención",
        "ayudante": "Descartes",
        "respiracion": "respiración breve de calma",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 6: El caramelo de la seman",
        "recurso": "experiencia sensorial con caramelo masticable",
        "proposito": "Acercar a los niños y niñas a la idea de que mirar, tocar, oler, saborear y esperar nos permite descubrir más cosas. Presentar el caramelo de la semana como una pregunta que se guarda para seguir pensando.",
        "inicio": "La docente invita al grupo a entrar al Laboratorio Filosófico y sentarse en ronda.\n\nSe realiza una respiración breve para preparar el cuerpo. Puede ser una respiración sencilla:\n\nInhalamos despacio.\nGuardamos el aire un momentito.\nSoltamos despacio.\n\nSe repite dos o tres veces.\n\nLuego se presenta a Descartes como ayudante de la clase.\n\nLa docente puede decir:\n\n“Descartes nos ayuda a pensar despacio. A veces nos dan ganas de hacer algo rápido, pero hoy vamos a probar qué pasa cuando esperamos.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente muestra un recipiente cerrado.\n\nLo hace sonar y pregunta:\n\n¿Qué habrá adentro?\n¿Cómo suena?\n¿Parece algo grande o chiquito?\n¿Parece algo duro o blando?\n¿Podemos adivinar sin mirar?\n\nLuego anticipa que harán una experiencia con los sentidos.\n\nLa docente pregunta:\n\n¿Con qué miramos?\n¿Con qué escuchamos?\n¿Con qué tocamos?\n¿Con qué olemos?\n¿Con qué saboreamos?\n\nEn primero conviene acompañar con el cuerpo, señalando ojos, orejas, manos, nariz y boca.",
        "desarrollo": "La docente reparte un caramelo a cada niño y aclara:\n\n“Todavía no lo vamos a comer. Primero vamos a descubrirlo despacio.”\n\nPrimer momento: mirar\nLos niños observan el caramelo cerrado.\n\nPreguntas posibles:\n\n¿Qué color ves?\n¿Qué forma tiene?\n¿Te imaginás de qué sabor puede ser?\n¿Qué te hace pensar el envoltorio?\n\nSegundo momento: tocar\nLos niños tocan el caramelo.\n\nPreguntas posibles:\n\n¿Está duro o blandito?\n¿Es suave o rugoso?\n¿Hace ruido?\n¿Se puede doblar?\n\nTercer momento: abrir\nLa docente guía para abrirlo lentamente.\n\nPreguntas posibles:\n\n¿Qué pasó cuando lo abrimos?\n¿Apareció algún olor?\n¿Cambió algo?\n\nCuarto momento: oler\nLos niños huelen el caramelo.\n\nPreguntas posibles:\n\n¿A qué huele?\n¿Te gusta el olor?\n¿Te recuerda a una fruta o a otra cosa?\n\nQuinto momento: probar sin morder\nLa docente indica que pueden poner el caramelo en la boca, pero todavía no morder.\n\nSe espera unos segundos.\n\nPreguntas posibles:\n\n¿Qué sabor apareció?\n¿Está dulce?\n¿Está fuerte o suave?\n¿Se siente igual que cuando estaba en la mano?\n¿Qué pasa si esperamos un poquito?\n\nSexto momento: masticar\nLuego de un tiempo, la docente permite masticar despacio.\n\nPreguntas posibles:\n\n¿Cambió?\n¿Ahora está más blando?\n¿El sabor se siente igual que al principio?\n\nPuerta 6 · El caramelo de la semana\n\nLa docente presenta la Puerta 6: El caramelo de la semana.\n\nSe explica de manera sencilla:\n\n“Hoy comimos un caramelo real, pero en Filosofía también podemos tener caramelos de pensamiento. Son preguntas que no se comen con la boca. Se guardan en la cabeza y en el corazón para pensarlas un poquito más.”\n\nSe puede hacer un gesto:\n\nLlevar la mano a la boca como si se saboreara.\nLuego llevar la mano a la cabeza.\nDespués al corazón.",
        "preguntas": [
          "¿Qué pasó cuando esperamos",
          "¿Qué descubrimos con la nariz",
          "¿Qué descubrimos con la lengua",
          "¿Qué descubrimos con las manos",
          "¿Era igual antes y después",
          "¿Hay cosas que se conocen mejor despacito",
          "¿Una pregunta también puede quedarse con nosotros"
        ],
        "cierre": "La docente presenta una pregunta caramelo breve.\n\nPosibles preguntas para primero:\n\n¿Qué cosas descubro cuando miro despacio?\n¿Qué pasa cuando espero un poquito?\n¿Qué puedo descubrir si no me apuro?\n\nSe aclara que no tienen que responder ahora. La pregunta queda para pensar durante la semana.\n\nPregunta caramelo:\n¿Qué puedo descubrir si no me apuro?",
        "recursos": "Ayudante Descartes.\nImagen de la Puerta 6.\nCaramelos masticables.\nRecipiente o lata.\nTarjeta con pregunta caramelo.\nApoyo visual de los sentidos, si se desea.",
        "observacion": "En primero conviene sostener la experiencia como una secuencia muy guiada, concreta y sensorial. La espera debe ser breve pero clara, para que puedan vivenciar que no comer enseguida permite descubrir más."
      },
      "segundo": {
        "title": "Una pregunta para masticar despacio",
        "date": "jueves 30 de abril",
        "status": "realizada",
        "tags": [
          "segundo",
          "puertas",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 6: El caramelo de la seman",
          "Descartes",
          "respiración breve de calma o respiración del cuadrado adaptada"
        ],
        "eje": "usar los sentidos para descubrir y comprender que algunas ideas necesitan tiempo",
        "ayudante": "Descartes",
        "respiracion": "respiración breve de calma o respiración del cuadrado adaptada",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 6: El caramelo de la seman",
        "recurso": "experiencia sensorial con caramelo masticable",
        "proposito": "Trabajar la atención, la espera y la observación sensorial a partir de un caramelo. Presentar la Puerta 6 como una forma de llevarse una pregunta para seguir pensando después de la clase.",
        "inicio": "La docente invita al grupo a sentarse en ronda y comenzar con una respiración breve.\n\nPuede usarse una respiración del cuadrado adaptada:\n\nInhalamos contando hasta tres.\nSostenemos un momento.\nExhalamos contando hasta tres.\nDescansamos un momento.\n\nSe repite dos o tres veces.\n\nLuego se presenta a Descartes como ayudante de la clase.\n\nLa docente puede decir:\n\n“Descartes nos ayuda a dudar, a mirar con cuidado y a no responder todo enseguida. Hoy nos va a ayudar a descubrir algo usando los sentidos.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente muestra un recipiente cerrado y lo hace sonar.\n\nSe pregunta:\n\n¿Qué podría haber adentro?\n¿Qué pista nos da el sonido?\n¿Alcanza con escuchar para saber?\n¿Qué otros sentidos podríamos usar?\n\nLuego se recuperan los cinco sentidos.\n\nLa docente puede preguntar:\n\n¿Cuáles son los sentidos?\n¿Qué diferencia hay entre sentido y sentimiento?\n¿Puedo sentir un sabor y también sentir alegría o ansiedad?\n¿Qué percibe el cuerpo?\n¿Qué sentimos por dentro?\n\nEsta distinción puede aparecer de manera breve, sin convertirla en explicación larga.",
        "desarrollo": "Cada estudiante recibe un caramelo, pero se aclara que deberán esperar para comerlo.\n\nLa docente guía la experiencia paso a paso.\n\nPaso 1: Observar\nMirar el caramelo cerrado.\n\nPreguntas:\n\n¿Qué información nos da la vista?\n¿Qué color, forma o envoltorio tiene?\n¿Podemos imaginar el sabor?\n\nPaso 2: Tocar\nTocar el caramelo.\n\nPreguntas:\n\n¿Parece duro o blando?\n¿Es liso o rugoso?\n¿Cambia si lo apretamos suavemente?\n¿Qué nos dice el tacto?\n\nPaso 3: Abrir despacio\nAbrir el envoltorio sin comer.\n\nPreguntas:\n\n¿Qué cambió al abrirlo?\n¿Apareció algo nuevo?\n¿Qué sentido empieza a trabajar ahora?\n\nPaso 4: Oler\nOler el caramelo.\n\nPreguntas:\n\n¿Qué olor tiene?\n¿El olor coincide con el sabor que imaginabas?\n¿Te recuerda a algo?\n\nPaso 5: Probar sin morder\nPoner el caramelo en la boca y dejarlo quieto un momento.\n\nPreguntas:\n\n¿Qué sabor aparece primero?\n¿Qué pasa si no mordemos enseguida?\n¿La textura cambia?\n¿El sabor cambia?\n\nPaso 6: Masticar lentamente\nDespués de esperar, masticar despacio.\n\nPreguntas:\n\n¿Ahora se siente igual que antes?\n¿Qué cambió?\n¿Qué descubrimos por esperar?\n\nPuerta 6 · El caramelo de la semana\n\nLa docente presenta la Puerta 6.\n\nSe explica:\n\n“El caramelo de la semana es una pregunta que nos llevamos para seguir pensando. No tenemos que responderla rápido. Podemos dejarla un tiempo, como dejamos el caramelo en la boca, y ver qué aparece después.”\n\nLa docente puede preguntar:\n\n¿Alguna vez entendiste algo después de pensarlo un rato?\n¿Alguna vez una idea cambió cuando la pensaste de nuevo?\n¿Las preguntas se pueden masticar?",
        "preguntas": [
          "¿Qué descubrimos mejor cuando no nos apuramos",
          "¿Qué sentido nos dio más información",
          "¿Todos sentimos lo mismo",
          "¿El olor y el sabor fueron iguales",
          "¿Qué cambió con el tiempo",
          "¿Una pregunta puede cambiar si la pensamos varios días",
          "¿Qué diferencia hay entre una respuesta rápida y una respuesta pensada"
        ],
        "cierre": "La docente presenta una pregunta caramelo para la semana.\n\nPosibles preguntas:\n\n¿Qué cosas se descubren mejor cuando no nos apuramos?\n¿Hay algo que necesita más tiempo para poder descubrirse?\n¿Cuándo hacemos algo más despacio y con más atención, podemos descubrir algo distinto?\n\nSe invita a no responder en ese momento. La pregunta queda abierta.\n\nPregunta caramelo:\n¿Hay algo que necesita más tiempo para poder descubrirse?",
        "recursos": "Ayudante Descartes.\nImagen de la Puerta 6.\nCaramelos masticables.\nRecipiente o lata.\nTarjetas de sentidos.\nTarjeta con pregunta caramelo.",
        "observacion": "En segundo se puede trabajar más explícitamente la diferencia entre sentidos y sentimientos, y recuperar la experiencia sensorial como puente hacia la idea filosófica de esperar, atender y volver a pensar."
      }
    }
  },
  {
    "id": 5,
    "title": "Construcción colectiva",
    "dates": "4, 5 y 7 de mayo",
    "summary": "Construir juntos para pensar acuerdos, lugar y sostén.",
    "theme": "construcción",
    "classes": {
      "tercero": {
        "title": "Construimos un puente entre todos",
        "date": "lunes 4 de mayo",
        "status": "realizada",
        "tags": [
          "tercero",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
          "Hipatia",
          "respiración del mar"
        ],
        "eje": "construir juntos, ponerse de acuerdo y hacer lugar a cada integrante del grupo",
        "ayudante": "Hipatia",
        "respiracion": "respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
        "recurso": "bloques de papel o cartulina para construir un puente colectivo",
        "proposito": "Explorar qué sucede cuando un grupo tiene que construir algo en común. Observar cómo circulan las ideas, cómo se toman decisiones, qué acuerdos aparecen, qué conflictos surgen y qué significa que cada integrante tenga un lugar dentro de una construcción colectiva.",
        "inicio": "La docente recibe al grupo en el Laboratorio Filosófico y propone comenzar con la respiración del mar.\n\nCada estudiante se tapa suavemente los oídos con las manos, respira con calma y escucha el sonido de su propia respiración, como si fuera el mar dentro de un caracol.\n\nLa docente puede guiar:\n\nInhalamos despacio.\nEscuchamos el mar adentro.\nExhalamos con calma.\nVolvemos a escuchar.\n\nLuego se recuerda que en el Laboratorio Filosófico no solo pensamos hablando: también pensamos haciendo, mirando cómo actuamos y conversando sobre lo que ocurre.\n\nPresentación del ayudante\n\nSe presenta a Hipatia como ayudante de la clase.\n\nHipatia es la ayudante del conocimiento, de la exploración y de las preguntas nuevas. Nos acompaña a pensar qué pasa cuando probamos algo diferente.\n\nLa docente puede decir:\n\n“Hoy Hipatia nos va a acompañar a construir algo entre todos. No vamos a mirar solamente cómo queda al final, sino cómo hacemos para construirlo.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente muestra los bloques de papel o cartulina y explica que cada estudiante recibirá uno.\n\nCada bloque representa a una persona del grupo. Por eso, antes de construir, cada uno debe escribir su nombre en su bloque.\n\nLa docente presenta el desafío:\n\n“Entre todos vamos a construir un puente usando todos los bloques del grupo.”\n\nSe aclara que no se busca que el puente quede perfecto, prolijo o igual al de una foto. Lo importante será observar el proceso:\n\ncómo se organizan,\ncómo escuchan las ideas,\ncómo deciden,\ncómo resuelven desacuerdos,\ncómo hacen lugar a todos los bloques.\n\nConsignas centrales\n\nAntes de comenzar, la docente recuerda algunas reglas:\n\nCada uno escribe su nombre en su bloque.\nTodos los bloques tienen que formar parte del puente.\nNadie mueve el bloque de otro sin pedir permiso.\nEscuchamos las ideas antes de decidir.\nSi no estamos de acuerdo, buscamos una forma de resolverlo hablando.\nEl puente se construye entre todos.\n\nLa docente puede preguntar antes de empezar:\n\n¿Qué necesita un puente para ser puente?\n¿Qué partes tiene que tener?\n¿Qué une un puente?\n¿Un puente separa o acerca?\n¿Qué puede significar construir un puente entre todos?",
        "desarrollo": "Los estudiantes se acercan a una mesa o espacio común con sus bloques.\n\nLa docente interviene lo menos posible, para que el grupo experimente la dificultad real de organizarse. Observa:\n\nquiénes proponen ideas,\nquiénes escuchan,\nquiénes toman decisiones,\nquiénes quedan afuera,\nquiénes se frustran,\nquiénes intentan ordenar,\nqué hacen cuando no están de acuerdo.\n\nSi el grupo se bloquea o se desorganiza demasiado, la docente puede hacer intervenciones breves:\n\n¿Estamos escuchando todas las ideas?\n¿Todos los bloques tienen lugar?\n¿Alguien todavía no pudo poner su bloque?\n¿Qué podemos hacer si dos personas quieren ubicar piezas en lugares distintos?\n¿Necesitan votar, probar o escuchar otra propuesta?\n\nLa idea no es resolver por ellos, sino devolver preguntas que ayuden a pensar el proceso.\n\nPuerta 5 · Transformamos\n\nCuando la construcción avanza, la docente puede nombrar que están abriendo también la Puerta 5: Transformamos.\n\nTransforman bloques sueltos en un puente.\nTransforman ideas individuales en una construcción común.\nTransforman desacuerdos en decisiones compartidas.\n\nLa docente puede decir:\n\n“Cada bloque solo era una pieza. Pero al juntarlos, aparece algo nuevo. La pregunta es cómo hacemos para que eso nuevo sea realmente de todos.”",
        "preguntas": [
          "¿Dónde va tu bloque",
          "¿Pediste permiso para mover el bloque de otro",
          "¿Qué idea estás proponiendo",
          "¿Escuchaste la idea de alguien más",
          "¿Todos están participando",
          "¿Qué hacemos cuando no nos ponemos de acuerdo",
          "¿El puente necesita todos los bloques",
          "¿Qué pasa si alguien queda afuera",
          "Ronda final con Hipatia",
          "Cuando el puente está terminado, la docente invita al grupo a volver a la ronda.",
          "Hipatia circula como ayudante de la palabra.",
          "La docente propone mirar primero el puente en silencio y luego conversar sobre el proceso.",
          "Preguntas posibles:",
          "¿Fue fácil o difícil construir el puente",
          "¿Qué fue lo más difícil",
          "¿Qué salió bien",
          "¿Todos pudieron participar",
          "¿Algunos participaron más que otros",
          "¿Qué pasó cuando aparecieron ideas diferentes",
          "¿El puente quedó hecho por todos o por algunos",
          "¿Un puente está terminado si alguien siente que no tuvo lugar",
          "¿Qué necesita este grupo para construir mejor la próxima vez"
        ],
        "cierre": "La docente recupera la idea central:\n\nConstruir juntos no es solamente juntar piezas. También es escuchar, decidir, esperar, ceder, proponer y hacer lugar.\n\nSe puede cerrar con una frase:\n\n“Un puente une lugares. Hoy pensamos qué necesitamos para unir ideas.”\n\nPregunta para seguir pensando:\n¿Qué necesita un grupo para construir algo que sea de todos?",
        "recursos": "Ayudante Hipatia.\nBloques de papel o cartulina.\nLápices o fibras.\nHoja base o afiche.\nImagen o cartel de la consigna.\nEspacio amplio o mesa común.",
        "observacion": "En tercero esta propuesta permite observar dinámicas grupales con bastante claridad. Es importante no intervenir de entrada para resolver el conflicto, sino dejar que aparezca el problema filosófico: cómo decidir juntos y cómo hacer lugar a todos."
      },
      "primero": {
        "title": "Construimos una casa para todos",
        "date": "martes 5 de mayo",
        "status": "realizada",
        "tags": [
          "primero",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
          "Hipatia",
          "respiración del mar"
        ],
        "eje": "pertenecer a un grupo, cuidar un lugar común y reconocer que cada uno tiene un lugar",
        "ayudante": "Hipatia",
        "respiracion": "respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
        "recurso": "bloques de papel o cartulina para construir una casa colectiva",
        "proposito": "Proponer una experiencia concreta de construcción compartida para pensar qué significa formar parte de un grupo. Trabajar la idea de que cada integrante aporta una pieza y que una casa común necesita cuidado, acuerdos y lugar para todos.",
        "inicio": "La docente invita al grupo a sentarse en ronda y comenzar con la respiración del mar.\n\nLos niños se tapan suavemente los oídos y escuchan su respiración.\n\nLa docente guía de manera simple:\n\nEscuchamos el mar.\nRespiramos despacio.\nEl cuerpo se prepara para pensar.\nLas manos se preparan para construir.\n\nLuego se anticipa que van a hacer una actividad con las manos, pero también con la escucha.\n\nPresentación del ayudante\n\nSe presenta a Hipatia como ayudante de la clase.\n\nLa docente puede decir:\n\n“Hipatia nos ayuda a aprender, descubrir y probar cosas nuevas. Hoy nos va a acompañar a construir una casa entre todos.”\n\nSe recuerda que el ayudante cuida la palabra y que, cuando alguien tiene a Hipatia, los demás escuchan.\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente entrega un bloque de papel o cartulina a cada niño.\n\nCada uno escribe su nombre en su bloque. Si algún niño necesita ayuda, la docente puede acompañar o permitir que copie su nombre.\n\nLuego se explica:\n\n“Este bloque te representa. Es tu parte de la casa. Para que la casa sea de todos, necesitamos que todos los bloques tengan un lugar.”\n\nLa docente presenta el desafío:\n\n“Vamos a construir una casa entre todos.”\n\nAntes de empezar, se conversa brevemente:\n\n¿Qué tiene una casa?\n¿Qué partes necesita?\n¿Para qué sirve una casa?\n¿Qué hace que un lugar se sienta como una casa?\n¿Una casa puede ser de todos?\n\nConsignas centrales\n\nCada niño escribe su nombre en su bloque.\nTodos los bloques tienen que estar en la casa.\nNadie mueve el bloque de otro sin pedir permiso.\nEscuchamos las ideas.\nCuidamos los materiales.\nLa casa se construye entre todos.\n\nEn primero conviene decir pocas consignas y repetirlas con gestos.\n\nLa docente puede reforzar:\n\n“Mi bloque tiene mi nombre. Tu bloque tiene tu nombre. Si quiero mover el tuyo, te pregunto.”",
        "desarrollo": "Los niños se acercan al espacio de construcción.\n\nLa docente puede organizar la tarea de manera más guiada que en tercero, para evitar que se vuelva caótica. Por ejemplo:\n\nPrimero pensamos dónde puede estar el piso.\nDespués dónde van las paredes.\nDespués el techo.\nDespués miramos si todos los bloques tienen lugar.\n\nLa docente puede permitir que el grupo proponga, pero acompañar con preguntas concretas:\n\n¿Dónde podría ir este bloque?\n¿Esta parte puede ser una pared?\n¿Qué bloque puede ayudar a hacer el techo?\n¿Falta alguien?\n¿Todos pusieron su bloque?\n¿Alguien necesita ayuda?\n\nSi aparecen discusiones, la docente puede intervenir:\n\nEscuchemos una idea por vez.\nPreguntemos antes de mover.\nProbemos una forma y después miramos si funciona.\n\nPuerta 5 · Transformamos\n\nLa docente señala que están transformando papeles sueltos en una casa.\n\nPuede decir:\n\n“Antes teníamos muchos bloques separados. Ahora estamos transformándolos en una casa. Para que sea una casa de todos, todos tienen que tener un lugar.”\n\nSe puede hacer una pausa y mirar:\n\n¿Ya parece una casa?\n¿Qué le falta?\n¿Hay bloques que quedaron afuera?\n¿Qué hacemos para que entren?",
        "preguntas": [
          "¿Dónde está tu bloque",
          "¿Tu bloque tiene lugar en la casa",
          "¿Todos los bloques entraron",
          "¿Qué pasa si alguien queda afuera",
          "¿Qué necesita una casa para cuidar a quienes viven ahí",
          "¿Qué necesitamos nosotros para cuidarnos como grupo",
          "Ronda final con Hipatia",
          "Al terminar, la docente invita a mirar la casa construida.",
          "Hipatia circula como ayudante de la palabra.",
          "Preguntas posibles:",
          "¿Fue fácil o difícil construir la casa",
          "¿Qué parte te gustó hacer",
          "¿Todos pudieron poner su bloque",
          "¿Alguien ayudó a otro",
          "¿Qué pasa si una casa no tiene lugar para todos",
          "¿Qué cosas cuidan una casa",
          "¿Qué cosas cuidan un grupo"
        ],
        "cierre": "La docente recupera:\n\n“Cada bloque era de alguien. Cuando los juntamos, hicimos una casa. Una casa de grupo necesita que todos tengan lugar y que cuidemos lo que construimos.”\n\nSe puede cerrar con una frase:\n\n“En nuestra casa de Filosofía todos tenemos un lugar.”\n\nPregunta para seguir pensando:\n¿Qué necesita una casa para ser un lugar cuidado?",
        "recursos": "Ayudante Hipatia.\nBloques de papel o cartulina.\nLápices o fibras.\nHoja base o afiche.\nEspacio de mesa o piso.\nImagen simple de casa, si se necesita como referencia.",
        "observacion": "En primero conviene que la construcción sea más acompañada y visual. La casa funciona como imagen cercana para pensar pertenencia, cuidado y lugar propio dentro del grupo."
      },
      "segundo": {
        "title": "Construimos una torre que se sostenga",
        "date": "jueves 7 de mayo",
        "status": "realizada",
        "tags": [
          "segundo",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
          "Hipatia",
          "respiración del mar"
        ],
        "eje": "sostener una construcción común, acordar decisiones y pensar qué hace que un grupo no se caiga",
        "ayudante": "Hipatia",
        "respiracion": "respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 5: Transformamo",
        "recurso": "bloques de papel o cartulina para construir una torre colectiva",
        "proposito": "Explorar la construcción colectiva a partir de la imagen de una torre. Pensar qué significa sostener algo entre todos, qué partes dan estabilidad y qué acuerdos necesita un grupo para construir sin que la participación se caiga.",
        "inicio": "La docente recibe al grupo y propone comenzar con la respiración del mar.\n\nLos estudiantes se tapan suavemente los oídos y escuchan el sonido de la respiración.\n\nLa docente puede guiar:\n\nInhalamos.\nEscuchamos el mar.\nExhalamos.\nNos preparamos para construir juntos.\n\nLuego se anticipa que la clase va a tener un desafío grupal.\n\nPresentación del ayudante\n\nSe presenta a Hipatia.\n\nLa docente puede decir:\n\n“Hipatia nos ayuda a conocer, descubrir y probar. Hoy vamos a probar cómo se construye algo entre todos y qué necesita una torre para sostenerse.”\n\nSe recuerda que Hipatia también puede circular en la ronda final para cuidar la palabra.\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente entrega a cada estudiante un bloque de papel o cartulina.\n\nCada uno escribe su nombre en su bloque.\n\nLuego se explica:\n\n“Este bloque representa tu lugar dentro del grupo. Hoy todos los bloques tienen que formar parte de una torre.”\n\nSe presenta el desafío:\n\n“Vamos a construir una torre entre todos.”\n\nAntes de empezar, se conversa:\n\n¿Qué es una torre?\n¿Qué necesita una torre para no caerse?\n¿Qué partes la sostienen?\n¿Puede una torre ser alta si no tiene una buena base?\n¿Qué puede pasar si algunos bloques quedan afuera?\n\nConsignas centrales\n\nCada uno escribe su nombre en su bloque.\nTodos los bloques tienen que estar en la torre.\nNadie mueve el bloque de otro sin pedir permiso.\nEscuchamos antes de decidir.\nLa torre tiene que sostenerse como construcción del grupo.\nNo importa que quede perfecta: importa cómo hacemos para construirla.",
        "desarrollo": "Los estudiantes se reúnen alrededor de una mesa o afiche base.\n\nLa docente deja que comiencen a organizarse, observando:\n\nquiénes proponen una base,\nquiénes quieren ubicar piezas arriba,\nquiénes escuchan,\nquiénes cambian bloques sin pedir permiso,\nquiénes quedan afuera de la decisión,\ncómo resuelven si la torre no queda como algunos imaginaban.\n\nLa docente puede intervenir con preguntas, no con soluciones:\n\n¿Qué parte de la torre sostiene a las demás?\n¿Todos los bloques pueden ir arriba?\n¿Qué pasa si no hacemos base?\n¿Quién todavía no pudo poner su bloque?\n¿Estamos moviendo bloques propios o de otros?\n¿Cómo decidimos entre dos ideas distintas?\n\nPuerta 5 · Transformamos\n\nLa docente nombra la transformación:\n\n“Estamos transformando bloques separados en una torre. Pero para que la torre se sostenga, no alcanza con poner piezas. Necesitamos acuerdos.”\n\nSe puede hacer una pausa para observar:\n\n¿La torre parece firme?\n¿Qué la sostiene?\n¿Qué parte está más débil?\n¿Hay bloques que sostienen y otros que decoran?\n¿Todos los lugares son importantes?",
        "preguntas": [
          "¿Qué hace que una torre se sostenga",
          "¿Una torre necesita una base",
          "¿Qué pasa si todos quieren estar arriba",
          "¿Qué pasa si nadie quiere sostener abajo",
          "¿En un grupo también hay cosas que sostienen",
          "¿Qué acuerdos sostienen a este grupo",
          "¿Una torre puede ser de todos si algunos no pudieron participar",
          "Ronda final con Hipatia",
          "Al finalizar, la docente invita a mirar la torre.",
          "Hipatia circula como ayudante de la palabra.",
          "Preguntas posibles:",
          "¿Cómo fue construir la torre",
          "¿Fue fácil o difícil ponerse de acuerdo",
          "¿Qué decisiones tuvieron que tomar",
          "¿Todos los bloques quedaron incluidos",
          "¿Qué parte sostiene más",
          "¿Qué pasaría si sacáramos algunos bloques",
          "¿Qué cosas sostienen a un grupo",
          "¿Qué puede hacer que un grupo se caiga o se desordene"
        ],
        "cierre": "La docente recupera:\n\n“Una torre necesita base, equilibrio y partes que se sostengan entre sí. Un grupo también necesita acuerdos, escucha y lugar para todos.”\n\nSe puede cerrar con una frase:\n\n“Para construir juntos, necesitamos sostenernos juntos.”\n\nPregunta para seguir pensando:\n¿Qué cosas sostienen a nuestro grupo?",
        "recursos": "Ayudante Hipatia.\nBloques de papel o cartulina.\nLápices o fibras.\nHoja base o afiche.\nMesa o espacio común.\nImagen simple de torre, si se desea.",
        "observacion": "En segundo la torre permite pensar la idea de sostén, base y equilibrio. Es una buena actividad para observar cómo se organizan y para abrir luego una conversación sobre acuerdos grupales."
      }
    }
  },
  {
    "id": 6,
    "title": "Volvemos a mirar lo construido",
    "dates": "11, 12 y 14 de mayo",
    "summary": "Revisar lo común: acuerdos, participación y cuidado.",
    "theme": "construcción",
    "classes": {
      "tercero": {
        "title": "¿Un puente es de todos?",
        "date": "lunes 11 de mayo",
        "status": "realizada",
        "tags": [
          "tercero",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
          "Hipatia",
          "respiración del mar"
        ],
        "eje": "revisar una experiencia colectiva para pensar participación, acuerdos, desacuerdos y lugar de cada integrante",
        "ayudante": "Hipatia",
        "respiracion": "respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
        "recurso": "puente construido en la clase anterior",
        "proposito": "Retomar la construcción colectiva del puente para mirar no solo el resultado final, sino el proceso vivido por el grupo. Pensar qué significa que una construcción sea realmente de todos y qué necesita un grupo para acordar, sostener la participación y hacer lugar a cada integrante.",
        "inicio": "La docente invita al grupo a sentarse en ronda y recuerda que la clase anterior construyeron un puente entre todos.\n\nSe comienza con la respiración del mar. Los estudiantes se tapan suavemente los oídos, respiran con calma y escuchan la respiración como si fuera el sonido del mar dentro de un caracol.\n\nLuego la docente anticipa:\n\n“Hoy no vamos a construir desde cero. Hoy vamos a volver a mirar lo que hicimos. A veces, después de hacer algo, podemos pensar mejor qué pasó.”\n\nPresentación del ayudante\n\nSe retoma a Hipatia como ayudante.\n\nLa docente puede decir:\n\n“Hipatia nos acompaña a descubrir y aprender. La semana pasada nos acompañó a construir. Hoy nos va a acompañar a mirar lo que pasó mientras construíamos.”\n\nSe recuerda que Hipatia puede circular como ayudante de la palabra durante la conversación.\n\nPuerta 3 · Miramos con lupa lo construido\n\nLa docente muestra el puente construido o una foto del puente.\n\nSe propone mirarlo en silencio durante unos segundos.\n\nPreguntas para la primera mirada:\n\n¿Qué vemos?\n¿Qué forma tiene?\n¿Parece un puente?\n¿Qué partes lo sostienen?\n¿Qué partes unen?\n¿Qué partes quedaron más fuertes?\n¿Qué partes quedaron más débiles?\n\nLuego se invita a mirar otra vez, pero ya no solo el objeto final, sino el proceso.\n\nPreguntas para volver a mirar:\n\n¿Cómo se construyó?\n¿Quiénes participaron?\n¿Qué ideas aparecieron?\n¿Hubo acuerdos?\n¿Hubo desacuerdos?\n¿Qué pasó cuando no pensaban igual?",
        "desarrollo": "La docente abre una conversación guiada.\n\nSe puede presentar la pregunta central:\n\n¿Un puente está terminado si no todos sienten que participaron?\n\nA partir de allí, se conversa sobre lo que implica construir algo colectivo.\n\nPreguntas posibles:\n\n¿Qué significa que algo sea “de todos”?\n¿Alcanza con que todos hayan puesto un bloque?\n¿También importa si todos pudieron opinar?\n¿Qué pasa cuando algunos deciden más que otros?\n¿Qué pasa cuando alguien se cansa y se va de la actividad?\n¿Qué hacemos cuando no nos ponemos de acuerdo?\n¿Es mejor votar, probar, escuchar más ideas o combinar propuestas?\n\nLa docente puede ir recuperando palabras clave que aparezcan:\n\nescuchar, esperar, decidir, ceder, proponer, pedir permiso, hacer lugar, participar, acordar.\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente recuerda que para revisar una experiencia grupal necesitamos escuchar con cuidado.\n\nSe puede proponer una ronda breve con Hipatia:\n\n“Una cosa que sentí durante la construcción fue…”\n“Una cosa que fue difícil fue…”\n“Una cosa que ayudó al grupo fue…”\n“Una cosa que podríamos hacer mejor la próxima vez es…”\n\nLa consigna es escuchar sin discutir inmediatamente lo que dice cada compañero. Primero se escucha; después se piensa.\n\nPuerta 5 · Transformamos\n\nLa docente propone transformar la experiencia en aprendizajes para el grupo.\n\nSe pregunta:\n\n¿Qué aprendimos sobre construir juntos?\n¿Qué podríamos hacer distinto la próxima vez?\n¿Qué acuerdo necesitamos para que todos puedan participar?\n¿Qué acuerdo necesitamos para cuidar los bloques y las ideas?\n\nEntre todos, se pueden construir tres acuerdos breves para futuras actividades colectivas.\n\nEjemplos:\n\nPedimos permiso antes de mover algo de otro.\nEscuchamos una idea antes de cambiarla.\nBuscamos que todos tengan un lugar.\nSi no estamos de acuerdo, paramos y conversamos.\nNadie queda afuera de una construcción común.",
        "preguntas": [
          "¿Un puente une solo lugares o también personas",
          "¿Qué necesita un puente para sostenerse",
          "¿Qué necesita un grupo para sostenerse",
          "¿Hay partes del puente más importantes que otras",
          "¿En un grupo todos tienen el mismo lugar",
          "¿Qué pasa si alguien no estuvo",
          "¿Cómo hacemos lugar a quien no pudo participar"
        ],
        "cierre": "La docente recupera la idea central:\n\n“Hoy miramos el puente dos veces: primero como construcción y después como experiencia del grupo. Descubrimos que construir juntos no es solo poner piezas, sino escuchar, acordar y hacer lugar.”\n\nSe puede cerrar con una frase colectiva:\n\n“Para construir algo de todos, necesitamos…”\n\nCada estudiante que quiera completa la frase.\n\nPregunta para seguir pensando:\n¿Qué necesita nuestro grupo para construir mejor la próxima vez?",
        "recursos": "Ayudante Hipatia.\nPuente construido o foto del puente.\nAfiche o pizarra para registrar acuerdos.\nImagen de Puerta 3, Puerta 4 y Puerta 5.\nEspacio en ronda.",
        "observacion": "En tercero esta clase permite profundizar la dimensión filosófica de la construcción. El foco está en revisar participación, decisiones y acuerdos, no en evaluar si el puente quedó lindo o prolijo."
      },
      "primero": {
        "title": "La casa de Filosofía: un lugar para todos",
        "date": "martes 12 de mayo",
        "status": "realizada",
        "tags": [
          "primero",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
          "Hipatia",
          "respiración del mar o respiración del abrazo"
        ],
        "eje": "pertenencia, cuidado y lugar dentro del grupo",
        "ayudante": "Hipatia",
        "respiracion": "respiración del mar o respiración del abrazo",
        "puertas": "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
        "recurso": "casa construida en la clase anterior",
        "proposito": "Retomar la casa construida colectivamente para pensar qué significa que un espacio sea de todos. Reconocer que cada integrante tiene un lugar y que una casa común necesita cuidado, escucha y acuerdos simples.",
        "inicio": "La docente invita al grupo a sentarse en ronda y recuerda la construcción de la clase anterior.\n\nSe realiza una respiración breve. Puede ser respiración del mar o respiración del abrazo.\n\nSi se usa respiración del abrazo, la docente guía:\n\nNos abrazamos suavemente.\nInhalamos.\nExhalamos.\nSentimos que el cuerpo se prepara para pensar.\n\nLuego se muestra la casa construida o una foto.\n\nLa docente anticipa:\n\n“Hoy vamos a mirar nuestra casa de Filosofía. No solo vamos a mirar cómo quedó, sino qué nos dice sobre nuestro grupo.”\n\nPresentación del ayudante\n\nSe retoma a Hipatia como ayudante.\n\nLa docente puede decir:\n\n“Hipatia nos ayudó a construir. Hoy nos va a ayudar a mirar la casa y a pensar qué necesita un grupo para cuidarse.”\n\nSe recuerda que Hipatia cuida la palabra y ayuda a escuchar de a uno.\n\nPuerta 3 · Miramos con lupa la casa\n\nLa docente invita a mirar la casa en silencio durante unos segundos.\n\nPreguntas simples:\n\n¿Qué vemos?\n¿Dónde están los nombres?\n¿Está tu bloque?\n¿Dónde quedó?\n¿Qué parte parece techo, pared, puerta o piso?\n¿Hay algún bloque que sostiene a otro?\n\nLuego se vuelve a mirar:\n\n¿Todos los bloques tienen lugar?\n¿Qué pasaría si sacamos un bloque?\n¿La casa cambia?\n¿El grupo cambia si falta alguien?",
        "desarrollo": "La docente abre una conversación sencilla:\n\n¿Qué necesita una casa para ser cuidada?\n¿Qué cosas rompen una casa?\n¿Qué cosas cuidan una casa?\n¿Qué necesita nuestro grupo para estar bien en Filosofía?\n\nSe pueden ir nombrando ideas:\n\nescuchar, esperar, pedir permiso, cuidar los materiales, no empujar, ayudar, hablar de a uno, mirar al que habla.\n\nLa docente puede usar una comparación:\n\n“Así como una casa necesita paredes, techo y piso, un grupo también necesita cosas que lo cuiden.”\n\nPuerta 4 · Escuchamos con el corazón\n\nSe propone una ronda breve con Hipatia.\n\nCada niño puede completar una frase:\n\n“En la casa de Filosofía necesitamos…”\n“Yo puedo cuidar la casa cuando…”\n“Me gusta que en el grupo…”\n“Para que todos tengan lugar, podemos…”\n\nNo es necesario que todos den respuestas largas. En primero pueden ser palabras sueltas.\n\nLa docente puede ayudar reformulando:\n\n“Vos dijiste ayudar. Entonces una parte de nuestra casa puede ser la ayuda.”\n\nPuerta 5 · Transformamos\n\nLa docente propone transformar las ideas en pequeños acuerdos de la casa de Filosofía.\n\nEjemplos:\n\nCuidamos los materiales.\nHablamos de a uno.\nPedimos permiso.\nEscuchamos al compañero.\nAyudamos a quien lo necesita.\nTodos tienen un lugar.\n\nSi se desea, se puede dibujar una casa en un afiche y escribir dentro algunas palabras-acuerdo.",
        "preguntas": [
          "¿Qué hace que una casa sea de todos",
          "¿Una casa puede cuidar",
          "¿Cómo cuidamos un lugar común",
          "¿Qué pasa si alguien queda afuera",
          "¿Qué significa tener un lugar en el grupo",
          "¿Qué puedo hacer yo para cuidar la casa de Filosofía"
        ],
        "cierre": "La docente recupera:\n\n“Nuestra casa no está hecha solamente de bloques. También está hecha de palabras, cuidados y acuerdos.”\n\nSe puede cerrar con una frase:\n\n“En la casa de Filosofía todos tenemos un lugar.”\n\nPregunta para seguir pensando:\n¿Qué puedo hacer para cuidar el lugar de otro?",
        "recursos": "Ayudante Hipatia.\nCasa construida o foto de la casa.\nAfiche con dibujo de casa.\nFibras o marcadores.\nImagen de Puerta 3, Puerta 4 y Puerta 5.",
        "observacion": "En primero conviene que la reflexión sea concreta y visual. La casa funciona como metáfora accesible para pensar pertenencia y cuidado del grupo."
      },
      "segundo": {
        "title": "La torre que nos sostiene",
        "date": "jueves 14 de mayo",
        "status": "realizada",
        "tags": [
          "segundo",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
          "Hipatia",
          "respiración del mar"
        ],
        "eje": "acuerdos, sostén y equilibrio dentro del grupo",
        "ayudante": "Hipatia",
        "respiracion": "respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
        "recurso": "torre construida en la clase anterior",
        "proposito": "Retomar la torre construida colectivamente para pensar qué cosas sostienen a un grupo. Revisar la experiencia de construcción, reconocer acuerdos necesarios y transformar lo vivido en ideas para convivir mejor.",
        "inicio": "La docente invita al grupo a entrar al Laboratorio Filosófico y sentarse en ronda.\n\nSe realiza la respiración del mar:\n\nNos tapamos suavemente los oídos.\nRespiramos.\nEscuchamos el mar adentro.\nNos preparamos para mirar y pensar.\n\nLuego la docente recuerda:\n\n“La semana pasada construimos una torre entre todos. Hoy vamos a volver a mirarla para pensar qué nos enseña.”\n\nPresentación del ayudante\n\nSe retoma a Hipatia como ayudante.\n\nLa docente puede decir:\n\n“Hipatia nos acompaña a aprender de lo que hacemos. A veces una construcción nos muestra cosas del grupo.”\n\nPuerta 3 · Miramos con lupa la torre\n\nLa docente muestra la torre construida o una foto.\n\nPrimero se observa en silencio.\n\nPreguntas para mirar:\n\n¿Qué vemos?\n¿Qué partes tiene la torre?\n¿Qué parte sostiene más?\n¿Qué parte está arriba?\n¿Qué parte está abajo?\n¿Todos los bloques tienen el mismo lugar?\n¿Todos son importantes?\n\nLuego se invita a mirar de nuevo, pero pensando en el proceso.\n\nPreguntas para volver a mirar:\n\n¿Cómo decidimos dónde iba cada bloque?\n¿Todos pudieron participar?\n¿Alguien ordenó la construcción?\n¿Hubo desacuerdos?\n¿Qué hicimos cuando aparecieron ideas distintas?",
        "desarrollo": "La docente abre una conversación sobre la idea de sostén.\n\nPreguntas posibles:\n\n¿Qué necesita una torre para no caerse?\n¿Qué pasa si la base no está firme?\n¿Qué pasa si todos los bloques quieren estar arriba?\n¿Qué pasa si nadie quiere estar abajo?\n¿Los bloques de abajo son menos importantes o sostienen a los demás?\n\nLuego se traslada la pregunta al grupo:\n\n¿Qué sostiene a un grupo?\n¿Qué hace que un grupo se desordene o “se caiga”?\n¿Qué acuerdos nos ayudan a sostenernos?\n¿Qué actitudes son como una base?\n\nLa docente puede registrar palabras en un afiche:\n\nescucha, respeto, turnos, ayuda, paciencia, cuidado, pedir permiso, compartir.\n\nPuerta 4 · Escuchamos con el corazón\n\nSe propone una ronda breve:\n\n“Algo que ayudó a construir la torre fue…”\n“Algo que hizo difícil construir fue…”\n“Una cosa que necesitamos para sostenernos como grupo es…”\n\nHipatia circula como ayudante de la palabra.\n\nLa docente recuerda:\n\n“Escuchar con el corazón también es escuchar cuando alguien dice que algo fue difícil.”\n\nPuerta 5 · Transformamos\n\nLa docente propone transformar la experiencia en acuerdos.\n\nSe pregunta:\n\n¿Qué acuerdo puede ser la base de nuestra torre?\n¿Qué acuerdo puede ser una pared fuerte?\n¿Qué acuerdo puede ayudarnos a no caernos como grupo?\n\nSe pueden elegir tres acuerdos y escribirlos en una torre dibujada:\n\nBase: escuchamos de a uno.\nMedio: pedimos permiso.\nArriba: ayudamos a que todos participen.\n\nO bien:\n\nPara sostenernos necesitamos…\nPara no caernos necesitamos…\nPara construir mejor necesitamos…",
        "preguntas": [
          "¿Sostener es menos importante que estar arriba",
          "¿Quién sostiene a quién en un grupo",
          "¿Un grupo puede caerse aunque nadie lo empuje",
          "¿Qué cosas debilitan a un grupo",
          "¿Qué cosas lo hacen más fuerte",
          "¿Qué parte de la torre me gustaría ser",
          "¿Qué acuerdo nos puede sostener mejor"
        ],
        "cierre": "La docente recupera:\n\n“La torre nos mostró que para construir juntos necesitamos una base. En un grupo, la base puede ser la escucha, el respeto y el cuidado.”\n\nSe puede cerrar con una frase colectiva:\n\n“Nuestra torre se sostiene con…”\n\nCada niño completa con una palabra.\n\nPregunta para seguir pensando:\n¿Qué puedo hacer para sostener mejor a mi grupo?",
        "recursos": "Ayudante Hipatia.\nTorre construida o foto de la torre.\nAfiche con dibujo de torre.\nFibras o marcadores.\nImagen de Puerta 3, Puerta 4 y Puerta 5.\nEspacio en ronda.",
        "observacion": "En segundo la torre permite profundizar la idea de sostén, equilibrio y base. Es una buena oportunidad para transformar la experiencia de construcción en acuerdos visibles para el grupo."
      }
    }
  },
  {
    "id": 7,
    "title": "Receta para cuidarnos",
    "dates": "18, 19 y 21 de mayo",
    "summary": "Convertir experiencias de construcción en ingredientes para convivir.",
    "theme": "construcción",
    "classes": {
      "tercero": {
        "title": "Receta para construir mejor el puente",
        "date": "lunes 18 de mayo",
        "status": "realizada",
        "tags": [
          "tercero",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
          "Hipatia",
          "respiración del mar o respiración de la taza"
        ],
        "eje": "transformar la experiencia del puente en acuerdos, ingredientes y acciones para cuidar el grupo",
        "ayudante": "Hipatia",
        "respiracion": "respiración del mar o respiración de la taza",
        "puertas": "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
        "recurso": "receta simbólica para cuidar el grupo",
        "proposito": "Retomar la experiencia del puente colectivo para pensar qué ingredientes necesita un grupo para construir mejor, ponerse de acuerdo, escuchar distintas ideas y hacer lugar a todos. Transformar lo vivido en una receta simbólica que funcione como referencia para próximos encuentros.",
        "inicio": "La docente invita al grupo a sentarse en ronda y recuerda el recorrido de las semanas anteriores:\n\nPrimero construimos un puente.\nDespués volvimos a mirarlo y pensamos qué pasó al construir juntos.\nHoy vamos a transformar esas ideas en una receta para cuidarnos como grupo.\n\nSe realiza una respiración breve. Puede utilizarse la respiración del mar o la respiración de la taza, conectando con la idea de preparar algo.\n\nLa docente puede decir:\n\n“Hoy vamos a imaginar que nuestro grupo es como una receta. Para que salga bien, necesita ingredientes, pasos y cuidados.”\n\nPresentación del ayudante\n\nSe retoma a Hipatia como ayudante de la clase.\n\nLa docente puede decir:\n\n“Hipatia nos acompaña a descubrir qué aprendimos de la experiencia del puente. Hoy nos va a ayudar a pensar qué ingredientes necesita este grupo para construir mejor.”\n\nHipatia puede circular en la ronda como ayudante de la palabra.\n\nPuerta 3 · Miramos con lupa lo que pasó\n\nLa docente muestra el puente construido o una foto del puente.\n\nSe propone mirar nuevamente, pero ahora buscando pistas para la receta.\n\nPreguntas posibles:\n\n¿Qué pasó cuando construimos el puente?\n¿Qué cosas ayudaron a construir?\n¿Qué cosas hicieron más difícil la actividad?\n¿Qué necesitamos agregar para que el grupo funcione mejor?\n¿Qué ingrediente faltó en algunos momentos?\n¿Qué ingrediente apareció y ayudó?\n\nLa docente puede ir nombrando posibles ingredientes:\n\nescucha, paciencia, respeto, pedir permiso, esperar turnos, ayudar, compartir ideas, hacer lugar, hablar sin lastimar, aceptar cambios.",
        "desarrollo": "La docente presenta la estructura de una receta.\n\nToda receta tiene:\n\nun nombre,\ningredientes,\ncantidades,\npasos,\ntiempo de preparación,\ncuidados.\n\nSe propone crear entre todos una receta titulada:\n\nReceta para construir mejor el puente del grupo\n\nO también:\n\nReceta para cuidarnos cuando pensamos juntos\n\nPrimer momento · Ingredientes\n\nLa docente pregunta:\n\n¿Qué ingredientes necesita nuestro grupo?\n\nSe pueden escribir en el pizarrón o en un afiche.\n\nEjemplos:\n\nuna taza de escucha,\ndos cucharadas de paciencia,\nun puñado de respeto,\nmuchas ganas de ayudar,\nuna pizca de silencio,\ntres cucharadas de pedir permiso,\nun poco de humor cuidado,\nun montón de ideas distintas,\nuna cucharadita de esperar el turno.\n\nLa docente puede ayudar a que los ingredientes no queden solo como palabras lindas, sino conectados con acciones.\n\nPor ejemplo:\n\nEscucha: mirar y prestar atención cuando otro habla.\nRespeto: no burlarse de una idea.\nPaciencia: esperar antes de mover una pieza.\nPedir permiso: no mover el bloque de otro sin preguntar.\n\nSegundo momento · Pasos de preparación\n\nLuego se pregunta:\n\n¿Qué pasos tendría esta receta?\n\nPosibles pasos:\n\nPrimero respiramos y nos preparamos.\nDespués escuchamos las ideas.\nLuego probamos una forma de construir.\nSi no estamos de acuerdo, paramos y conversamos.\nPedimos permiso antes de cambiar algo.\nBuscamos que todos tengan un lugar.\nAl final miramos lo que hicimos y pensamos cómo nos fue.\n\nLa docente puede escribir los pasos en orden, como una receta real.\n\nTercer momento · Cuidado especial\n\nLa docente puede agregar una sección:\n\nCuidado especial:\nNo cocinar esta receta con gritos, burlas o apuro, porque puede romperse la conversación.\n\nPreguntas:\n\n¿Qué cosas arruinan la receta del grupo?\n¿Qué pasa si le ponemos demasiada burla?\n¿Qué pasa si falta escucha?\n¿Qué pasa si nadie espera?\n¿Qué ingrediente no puede faltar?\n\nPuerta 5 · Transformamos\n\nLa docente señala que están transformando una experiencia vivida en una herramienta para el grupo.\n\n“Transformamos lo que pasó con el puente en una receta para la próxima vez.”\n\nSe puede proponer que cada estudiante elija un ingrediente y lo dibuje o escriba en una tarjeta.\n\nLuego esas tarjetas pueden formar parte de un panel de acuerdos del Laboratorio Filosófico.",
        "preguntas": [
          "¿Un grupo se puede cuidar como se cuida una receta",
          "¿Qué pasa si falta un ingrediente importante",
          "¿Todas las recetas salen igual",
          "¿Qué ingrediente aporta cada uno al grupo",
          "¿Se puede aprender de una receta que salió más o menos",
          "¿Qué necesitamos para que nuestras ideas no se quemen, no se corten o no se mezclen mal"
        ],
        "cierre": "La docente lee la receta completa construida entre todos.\n\nLuego pregunta:\n\n¿Qué ingrediente queremos recordar para la próxima clase?\n¿Qué paso de la receta nos puede ayudar más?\n\nSe cierra con la idea:\n\n“Cuidar el grupo también se aprende. Podemos preparar una forma de estar juntos.”\n\nPregunta para seguir pensando:\n¿Qué ingrediente puedo aportar yo para que el grupo construya mejor?",
        "recursos": "Ayudante Hipatia.\nPuente construido o foto del puente.\nAfiche o pizarrón.\nTarjetas para ingredientes.\nFibras o lápices.\nImagen de Puerta 5.\nOpcional: cucharón, recipiente o imagen de receta como apoyo lúdico.",
        "observacion": "En tercero se puede profundizar la metáfora de la receta relacionando cada ingrediente con una acción concreta. Es importante evitar que quede solo en palabras abstractas y volver siempre a la pregunta: “¿Cómo se ve eso en el grupo?”"
      },
      "primero": {
        "title": "Receta para cuidar nuestra casa",
        "date": "martes 19 de mayo",
        "status": "realizada",
        "tags": [
          "primero",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
          "Hipatia",
          "respiración de la taza"
        ],
        "eje": "cuidar el espacio común, reconocer acciones de cuidado y construir una receta sencilla para estar mejor juntos",
        "ayudante": "Hipatia",
        "respiracion": "respiración de la taza",
        "puertas": "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
        "recurso": "receta simbólica para cuidar la casa de Filosofía",
        "proposito": "Retomar la casa construida colectivamente para pensar qué necesita un grupo para cuidarse. Elaborar una receta sencilla con ingredientes como escucha, ayuda, amor, pedir perdón, paciencia y cuidado de los materiales.",
        "inicio": "La docente invita al grupo a sentarse en ronda y recuerda la casa construida en las clases anteriores.\n\nSe realiza la respiración de la taza, conectando con la idea de preparar una receta.\n\nLa docente guía:\n\nJuntamos las manos como una taza.\nOlemos algo rico.\nSoplamos despacio.\nPreparamos el cuerpo para pensar.\n\nLuego puede decir:\n\n“Hoy vamos a preparar una receta, pero no una receta para comer. Vamos a preparar una receta para cuidar nuestra casa de Filosofía.”\n\nPresentación del ayudante\n\nSe retoma a Hipatia.\n\nLa docente puede decir:\n\n“Hipatia nos ayuda a aprender cosas nuevas. Hoy nos va a ayudar a descubrir qué ingredientes necesita nuestra casa para que todos podamos estar bien.”\n\nHipatia puede circular en algunos momentos para cuidar la palabra.\n\nPuerta 3 · Miramos con lupa la casa\n\nLa docente muestra la casa construida o una imagen de la casa.\n\nSe pregunta:\n\n¿Qué vemos en nuestra casa?\n¿Dónde están nuestros nombres?\n¿Todos tienen un lugar?\n¿Qué necesita una casa para estar cuidada?\n¿Qué pasa si una casa no se cuida?\n\nLa docente lleva la conversación hacia el grupo:\n\n“Así como una casa necesita techo, piso y paredes, un grupo también necesita cosas que lo cuiden.”",
        "desarrollo": "La docente puede introducir una canción o juego breve relacionado con cocinar, mezclar o preparar, por ejemplo una canción de cucharita o una pequeña dramatización de cocina.\n\nLuego presenta la idea:\n\n“Vamos a hacer una receta para cuidarnos.”\n\nLa docente puede dibujar una olla, una taza grande o una casa en el pizarrón o en un afiche.\n\nPrimer momento · Ingredientes de cuidado\n\nSe pregunta:\n\n¿Qué ingrediente necesita nuestra casa de Filosofía?\n\nLos niños pueden responder con palabras simples. La docente ayuda a nombrar y reformular.\n\nPosibles ingredientes:\n\nescucha,\nayuda,\namor,\npedir perdón,\nabrazos cuidados,\nrespirar,\ncompartir,\nesperar,\ncuidar los materiales,\ndecir por favor,\ndecir gracias,\nhablar de a uno.\n\nLa docente puede convertir las respuestas en fórmula de receta:\n\nun poquito de escucha,\nmuchas cucharadas de ayuda,\nuna taza de amor,\nuna pizca de paciencia,\ndos cucharadas de pedir perdón,\nun puñado de palabras lindas.\n\nSegundo momento · Mezclamos la receta\n\nLa docente dramatiza la preparación:\n\n“Ponemos una taza de escucha…”\nLos niños hacen gesto de poner algo en una olla imaginaria.\n\n“Agregamos dos cucharadas de ayuda…”\nLos niños hacen gesto de mezclar.\n\n“Ponemos un poquito de pedir perdón…”\nTodos mezclan despacio.\n\nLa docente puede preguntar después de cada ingrediente:\n\n¿Para qué sirve este ingrediente?\n¿Cuándo usamos la ayuda?\n¿Cuándo necesitamos pedir perdón?\n¿Cómo se ve la escucha?\n\nActividad de dibujo\n\nCada niño puede elegir un ingrediente de la receta y dibujarlo en una tarjeta.\n\nEjemplos:\n\nDibujo de ayuda.\nDibujo de escucha.\nDibujo de pedir perdón.\nDibujo de amor.\nDibujo de compartir.\n\nLuego las tarjetas pueden pegarse en un afiche titulado:\n\nReceta para cuidar nuestra casa de Filosofía\n\nPuerta 5 · Transformamos\n\nLa docente recupera:\n\n“Hoy transformamos nuestras ideas en una receta. La receta nos ayuda a recordar cómo queremos estar juntos.”\n\nSe puede vincular con la casa:\n\n“Si usamos estos ingredientes, nuestra casa se cuida mejor.”",
        "preguntas": [
          "¿Qué ingrediente no puede faltar en nuestra casa",
          "¿Qué pasa si falta la escucha",
          "¿Qué pasa si ponemos mucha burla o mucho grito",
          "¿Qué ingrediente puedo traer yo al grupo",
          "¿Cómo se cocina una amistad",
          "¿Cómo se cuida una casa que es de todos"
        ],
        "cierre": "La docente lee la receta armada con el grupo.\n\nLuego pregunta:\n\n¿Qué ingrediente queremos usar hoy?\n¿Qué ingrediente necesitamos practicar más?\n\nSe puede cerrar con una frase:\n\n“En nuestra casa de Filosofía nos cuidamos con…”\n\nCada niño puede decir una palabra o señalar una tarjeta.\n\nPregunta para seguir pensando:\n¿Qué ingrediente puedo usar para cuidar a un compañero?",
        "recursos": "Ayudante Hipatia.\nCasa construida o foto de la casa.\nAfiche con olla, taza o casa.\nTarjetas para dibujar ingredientes.\nFibras, crayones o lápices.\nCanción o juego breve de cocina.\nImagen de Puerta 5.",
        "observacion": "En primero la receta debe ser muy concreta, corporal y visual. Conviene trabajar con gestos de cocinar, dibujos y palabras breves, para que la idea de cuidado grupal quede asociada a acciones simples."
      },
      "segundo": {
        "title": "Receta para sostener la torre",
        "date": "jueves 21 de mayo",
        "status": "realizada",
        "tags": [
          "segundo",
          "construcción",
          "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
          "Hipatia",
          "respiración de la taza o respiración del mar"
        ],
        "eje": "transformar la idea de sostén en ingredientes y acuerdos para el grupo",
        "ayudante": "Hipatia",
        "respiracion": "respiración de la taza o respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transformam",
        "recurso": "receta simbólica para sostener la torre del grupo",
        "proposito": "Retomar la torre construida y la reflexión sobre lo que sostiene a un grupo. Elaborar una receta simbólica con ingredientes que ayuden a que el grupo pueda escucharse, participar, organizarse y sostenerse mejor.",
        "inicio": "La docente invita al grupo a sentarse en ronda.\n\nSe realiza una respiración breve. Puede ser la respiración de la taza, para conectar con la idea de preparar una receta, o la respiración del mar, para recuperar la clase anterior.\n\nLuego se recuerda:\n\nConstruimos una torre.\nDespués pensamos qué la sostenía.\nHoy vamos a preparar una receta para que nuestra torre-grupo se sostenga mejor.\n\nPresentación del ayudante\n\nSe retoma a Hipatia.\n\nLa docente puede decir:\n\n“Hipatia nos acompaña a aprender de lo que hicimos. Hoy vamos a transformar la torre en una receta de grupo.”\n\nSe recuerda que el ayudante cuida la palabra.\n\nPuerta 3 · Miramos con lupa la torre\n\nLa docente muestra la torre construida o una foto.\n\nPreguntas posibles:\n\n¿Qué parte de la torre sostenía más?\n¿Qué pasaba si la base no estaba firme?\n¿Qué partes eran importantes aunque no estuvieran arriba?\n¿Qué aprendimos sobre sostener?\n\nLuego se lleva la idea al grupo:\n\n¿Qué sostiene a nuestro grupo?\n¿Qué hace que el grupo se desordene?\n¿Qué nos ayuda a volver a estar juntos?",
        "desarrollo": "La docente presenta la propuesta:\n\n“Vamos a escribir o imaginar una receta para sostener nuestra torre de Filosofía.”\n\nSe puede dibujar una torre y una olla en el pizarrón, o una torre formada por ingredientes.\n\nPrimer momento · Ingredientes que sostienen\n\nSe pregunta:\n\n¿Qué ingredientes necesita nuestra torre para no caerse?\n\nPosibles ingredientes:\n\nbase de escucha,\nladrillos de respeto,\ncemento de paciencia,\nventanas de atención,\nescalones de ayuda,\npuertas para pedir permiso,\nun techo de cuidado,\nuna pizca de silencio,\nun poco de alegría,\npalabras amables.\n\nLa docente puede guiar para que cada ingrediente tenga sentido:\n\n¿La escucha dónde iría: en la base, en el medio o arriba?\n¿Por qué la paciencia puede sostener?\n¿Qué pasa si sacamos el respeto?\n¿Qué ingrediente une las partes?\n\nSegundo momento · Pasos de la receta\n\nSe construyen pasos simples.\n\nEjemplos:\n\nPrimero respiramos para entrar tranquilos.\nDespués escuchamos la consigna.\nLuego cada uno aporta su idea.\nSi dos ideas son distintas, las escuchamos antes de decidir.\nPedimos permiso antes de cambiar algo.\nAyudamos a que nadie quede afuera.\nAl final miramos cómo quedó y pensamos qué aprendimos.\n\nTercer momento · Dibujo o tarjeta\n\nCada estudiante puede elegir un ingrediente para dibujar o escribir.\n\nLa consigna puede ser:\n\n“Elegí un ingrediente que ayude a sostener al grupo y dibujalo como si fuera parte de la torre.”\n\nLuego se arma un afiche:\n\nReceta para sostener nuestra torre\n\nO:\n\nIngredientes para que el grupo no se caiga\n\nPuerta 5 · Transformamos\n\nLa docente recupera:\n\n“Hoy transformamos una construcción en una receta. La torre nos ayudó a pensar qué sostiene a un grupo, y la receta nos ayuda a recordarlo.”\n\nSe puede preguntar:\n\n¿Qué ingrediente necesitamos usar más seguido?\n¿Qué ingrediente ya tenemos bastante?\n¿Qué ingrediente nos cuesta?",
        "preguntas": [
          "¿Qué sostiene a una torre",
          "¿Qué sostiene a un grupo",
          "¿Todos los ingredientes son igual de importantes",
          "¿Qué pasa si falta la base",
          "¿Qué pasa si falta la escucha",
          "¿Qué ingrediente aporta cada uno",
          "¿Se puede reparar una torre si se empieza a caer",
          "¿Se puede reparar un grupo cuando se desordena"
        ],
        "cierre": "La docente lee la receta construida.\n\nLuego invita a elegir un ingrediente para recordar durante la semana.\n\nSe puede cerrar con una frase:\n\n“Nuestra torre se sostiene con…”\n\nCada estudiante que quiera agrega una palabra.\n\nPregunta para seguir pensando:\n¿Qué ingrediente puedo aportar para sostener mejor al grupo?",
        "recursos": "Ayudante Hipatia.\nTorre construida o foto de la torre.\nAfiche con torre o receta.\nTarjetas de ingredientes.\nFibras, lápices o crayones.\nImagen de Puerta 5.\nOpcional: canción o gesto de mezclar ingredientes.",
        "observacion": "En segundo conviene sostener la metáfora de la torre y la receta al mismo tiempo: la torre permite hablar de base, equilibrio y sostén; la receta permite transformar esas ideas en acciones concretas y recordables."
      }
    }
  },
  {
    "id": 8,
    "title": "Cuerpo, respiración y posturas",
    "dates": "25, 26 y 28 de mayo",
    "summary": "El cuerpo como parte del pensamiento; feriado para Tercero.",
    "theme": "cuerpo",
    "classes": {
      "tercero": {
        "title": "Sin clase por feriado nacional",
        "date": "lunes 25 de mayo",
        "status": "sin clase",
        "tags": [
          "tercero",
          "cuerpo",
          "sin clase"
        ],
        "eje": "",
        "ayudante": "",
        "respiracion": "",
        "puertas": "",
        "recurso": "",
        "proposito": "",
        "inicio": "",
        "desarrollo": "Mensaje del mosaico\n\nNo se realiza clase por feriado nacional.\n\nLa propuesta prevista para este grupo se retoma en la semana siguiente, para que tercero también pueda realizar el recorrido de cuerpo, respiración y posturas.",
        "preguntas": [],
        "cierre": "",
        "recursos": "",
        "observacion": "No se realiza clase por feriado nacional. La propuesta se retoma en la semana siguiente."
      },
      "primero": {
        "title": "Posturas de animales y respiraciones",
        "date": "martes 26 de mayo",
        "status": "realizada",
        "tags": [
          "primero",
          "cuerpo",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
          "puede continuar Hipatia o retomarse Ari como ayudante de la observación corporal",
          "respiración de la abeja, respiración de Spiderman o respiración de la isla"
        ],
        "eje": "reconocer el cuerpo como parte del pensamiento, la calma y la atención",
        "ayudante": "puede continuar Hipatia o retomarse Ari como ayudante de la observación corporal",
        "respiracion": "respiración de la abeja, respiración de Spiderman o respiración de la isla",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
        "recurso": "posturas de animales",
        "proposito": "Explorar el cuerpo como una forma de atención y pensamiento. Reconocer que algunas posturas, movimientos y respiraciones pueden ayudarnos a calmarnos, observarnos y prepararnos para compartir con otros.",
        "inicio": "La docente invita al grupo a entrar al Laboratorio Filosófico y sentarse en ronda o ubicarse en un espacio amplio.\n\nSe realiza una respiración breve. Puede elegirse una respiración lúdica, como la abeja o Spiderman, para entrar en clima corporal.\n\nLuego se pregunta:\n\n¿El cuerpo también nos ayuda a pensar?\n¿Qué hace nuestro cuerpo cuando estamos tranquilos?\n¿Qué hace cuando estamos inquietos?\n¿Podemos escuchar al cuerpo?",
        "desarrollo": "La docente propone recordar o conocer algunas posturas de animales.\n\nSe pueden trabajar pocas posturas, bien guiadas:\n\ntortuga,\ngato,\nperro,\ncobra,\nestrella de mar,\ncangrejo,\ntiburón,\nabeja.\n\nAntes de hacer cada postura, la docente puede preguntar:\n\n¿Cómo se mueve este animal?\n¿Es rápido o lento?\n¿Está escondido, estirado, fuerte, tranquilo?\n¿Qué parte del cuerpo usamos más?\n\nLuego el grupo realiza la postura de manera breve y cuidada.\n\nDespués de cada una, se puede hacer una pausa:\n\n¿Cómo se sintió el cuerpo?\n¿Fue fácil o difícil?\n¿Qué postura nos dio calma?\n¿Qué postura nos dio fuerza?\n¿Qué postura nos hizo reír?\n\nPuente filosófico\n\nLa docente recupera que en Filosofía no pensamos solo con la cabeza. También pensamos con el cuerpo cuando respiramos, observamos, nos movemos, esperamos o nos calmamos.\n\nPreguntas posibles:\n\n¿El cuerpo puede estar pensando?\n¿Una postura puede cambiar cómo me siento?\n¿Qué animal me ayuda a estar tranquilo?\n¿Qué animal me ayuda a sentir fuerza?\n¿Qué postura elegiría para entrar al Laboratorio Filosófico?",
        "preguntas": [],
        "cierre": "Se elige entre todos una postura o respiración para cerrar la clase.\n\nLa docente puede decir:\n\n“Hoy descubrimos que el cuerpo también puede ayudarnos a entrar en calma y a pensar mejor.”\n\nPregunta para seguir pensando:\n¿Qué postura me ayuda a sentirme mejor?",
        "recursos": "Tarjetas o imágenes de posturas.\nEspacio amplio.\nRespiraciones del laboratorio.\nMúsica suave opcional.\nAyudante del laboratorio.",
        "observacion": ""
      },
      "segundo": {
        "title": "Posturas, respiración y cuerpo atento",
        "date": "jueves 28 de mayo",
        "status": "realizada",
        "tags": [
          "segundo",
          "cuerpo",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
          "Hipatia o Ari",
          "respiración de la abeja, respiración de la isla o respiración del mar"
        ],
        "eje": "explorar el cuerpo como lugar de atención, memoria y regulación",
        "ayudante": "Hipatia o Ari",
        "respiracion": "respiración de la abeja, respiración de la isla o respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
        "recurso": "posturas de animales y respiraciones",
        "proposito": "Proponer una experiencia corporal que permita reconocer cómo el movimiento, la respiración y las posturas pueden modificar el clima del grupo, la atención y la disposición para pensar juntos.",
        "inicio": "La docente invita al grupo a ubicarse con espacio para moverse.\n\nSe comienza con una respiración breve. Puede ser respiración del mar o de la abeja, según el clima del grupo.\n\nLuego se abre una conversación inicial:\n\n¿El cuerpo puede ayudarnos a calmarnos?\n¿Qué pasa cuando respiramos más despacio?\n¿Nos damos cuenta de cómo está nuestro cuerpo?\n¿Puede el cuerpo recordar una postura?",
        "desarrollo": "La docente propone realizar un recorrido de posturas de animales.\n\nPuede iniciar con posturas conocidas y sumar alguna nueva:\n\ngato,\nperro,\ncobra,\ntortuga,\ncangrejo,\nestrella de mar,\ntiburón,\nabeja.\n\nLa consigna es realizar cada postura con atención, sin apurarse y cuidando el propio cuerpo y el espacio de los demás.\n\nDespués de algunas posturas, se puede preguntar:\n\n¿Qué postura necesitó más equilibrio?\n¿Cuál nos hizo respirar más profundo?\n¿Cuál nos dio calma?\n¿Cuál nos dio energía?\n¿Qué postura fue más difícil de sostener?\n\nMiramos con lupa el cuerpo\n\nLa docente puede recuperar la Puerta 3 desde el cuerpo:\n\n“Hoy miramos con lupa lo que pasa adentro del cuerpo cuando nos movemos.”\n\nPreguntas posibles:\n\n¿Qué parte del cuerpo se estiró?\n¿Qué parte sostuvo el peso?\n¿Qué postura necesitó fuerza?\n¿Qué postura necesitó silencio?\n¿Qué cambió entre el comienzo y ahora?\n\nTransformamos el clima\n\nLa docente puede vincular con la Puerta 5:\n\n“Cuando respiramos y nos movemos con atención, podemos transformar algo del clima del grupo: si estamos muy acelerados, podemos bajar; si estamos distraídos, podemos volver.”\n\nPreguntas:\n\n¿Una respiración puede transformar cómo me siento?\n¿Una postura puede ayudarme a esperar?\n¿Qué movimiento me sirve cuando estoy inquieto?\n¿Qué postura elegiría para volver a la calma?",
        "preguntas": [],
        "cierre": "Se realiza una postura final tranquila, por ejemplo tortuga o estrella de mar, y una respiración breve.\n\nLa docente recupera:\n\n“Hoy probamos que el cuerpo también puede ayudarnos a pensar, escuchar y estar mejor en el laboratorio.”\n\nPregunta para seguir pensando:\n¿Qué recuerda mi cuerpo después de moverse?",
        "recursos": "Tarjetas o imágenes de posturas.\nEspacio amplio.\nRespiraciones del laboratorio.\nAyudante del laboratorio.\nMúsica suave opcional.\n\nObservación de continuidad:\nLa clase equivalente de tercero se retoma la semana siguiente, ya que en esta semana no tuvo encuentro por feriado nacional.",
        "observacion": ""
      }
    }
  },
  {
    "id": 9,
    "title": "Cuerpo, posturas y naturaleza",
    "dates": "1, 2 y 4 de junio",
    "summary": "Recuperación, observación al aire libre y comienzo del Saludo al Sol.",
    "theme": "naturaleza",
    "classes": {
      "tercero": {
        "title": "Clase recuperada: posturas de animales, respiración y cuerpo atento",
        "date": "lunes 1 de junio",
        "status": "recuperada",
        "tags": [
          "tercero",
          "naturaleza",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
          "Ari o Hipatia",
          "respiración de Spiderman, respiración de la abeja o respiración del mar",
          "clase recuperada por feriado de la semana anterior"
        ],
        "eje": "reconocer el cuerpo como parte del pensamiento, la atención y la calma",
        "ayudante": "Ari o Hipatia",
        "respiracion": "respiración de Spiderman, respiración de la abeja o respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
        "recurso": "posturas de animales y respiraciones",
        "proposito": "Recuperar la clase que no pudo realizarse por feriado nacional, proponiendo una experiencia corporal con posturas de animales y respiraciones. Explorar cómo el cuerpo puede ayudarnos a prestar atención, registrar sensaciones, regular el movimiento y prepararnos para pensar juntos.",
        "inicio": "La docente recibe al grupo y recuerda que la semana anterior no hubo clase por feriado, por eso en este encuentro se retoma la propuesta de cuerpo, respiración y posturas.\n\nSe invita a los estudiantes a ubicarse con espacio suficiente para moverse, cuidando el propio cuerpo y el espacio de los demás.\n\nSe realiza una respiración inicial. Puede elegirse según el clima del grupo:\n\nRespiración de Spiderman.\nRespiración de la abeja.\nRespiración del mar.\n\nLuego se pregunta:\n\n¿Cómo está hoy nuestro cuerpo?\n¿Está quieto, inquieto, cansado, con energía?\n¿Podemos pensar también con el cuerpo?\n¿Qué pasa cuando respiramos antes de movernos?",
        "desarrollo": "La docente propone recordar y practicar posturas de animales trabajadas anteriormente o presentadas como nuevas.\n\nPosibles posturas:\n\ntortuga,\ngato,\nperro,\ncobra,\ncangrejo,\nestrella de mar,\ntiburón,\nabeja.\n\nAntes de cada postura, se puede preguntar:\n\n¿Cómo se mueve este animal?\n¿Es rápido o lento?\n¿Está escondido, estirado, fuerte, tranquilo?\n¿Qué parte del cuerpo usamos más?\n\nDespués de realizar algunas posturas, la docente invita a observar el cuerpo:\n\n¿Qué postura fue más fácil?\n¿Cuál fue más difícil?\n¿Cuál necesitó fuerza?\n¿Cuál necesitó equilibrio?\n¿Cuál nos ayudó a calmarnos?\n¿Qué parte del cuerpo sentimos más?\n¿El cuerpo está igual que al comienzo?\n\nPuente filosófico\n\nLa docente recupera la idea de que en el Laboratorio Filosófico también podemos pensar con el cuerpo.\n\nPreguntas posibles:\n\n¿El cuerpo puede recordar una postura?\n¿Una postura puede cambiar cómo me siento?\n¿Qué animal me ayuda a estar tranquilo?\n¿Qué animal me ayuda a sentir fuerza?\n¿La respiración puede transformar el clima del grupo?",
        "preguntas": [],
        "cierre": "Se elige una postura tranquila para cerrar, por ejemplo tortuga o estrella de mar, y se realiza una respiración breve.\n\nLa docente recupera:\n\n“El cuerpo también nos ayuda a pensar. Cuando respiramos, nos movemos y prestamos atención, podemos conocer mejor cómo estamos.”\n\nPregunta para seguir pensando:\n¿Qué recuerda mi cuerpo después de moverse?",
        "recursos": "Tarjetas o imágenes de posturas de animales.\nEspacio amplio.\nAyudante Ari o Hipatia.\nRespiraciones del laboratorio.\nMúsica suave opcional.",
        "observacion": "Esta clase figura como recuperada porque tercero no tuvo encuentro la semana anterior por feriado nacional."
      },
      "primero": {
        "title": "Mis cinco maravillas del parque",
        "date": "martes 2 de junio",
        "status": "realizada",
        "tags": [
          "primero",
          "naturaleza",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
          "Ari",
          "respiración de Spiderman o respiración de la abeja",
          "clase al aire libre"
        ],
        "eje": "observar la naturaleza con atención, elegir, comparar y descubrir detalles",
        "ayudante": "Ari",
        "respiracion": "respiración de Spiderman o respiración de la abeja",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
        "recurso": "sobrecito “Mis cinco maravillas”",
        "proposito": "Proponer una experiencia al aire libre para observar la naturaleza con atención. Invitar a los niños y niñas a buscar pequeñas maravillas del parque, guardarlas en un sobre, compararlas con las de sus compañeros y elegir una para mirar con más detenimiento.",
        "inicio": "La docente anticipa que la clase se realizará en el parque y que será necesario preparar el cuerpo y recordar acuerdos de cuidado.\n\nAntes de salir, o al llegar al parque, se realiza una respiración breve. Puede ser respiración de Spiderman, respiración de abeja o alguna respiración ya conocida por el grupo.\n\nLuego se recuerdan acuerdos:\n\nCaminamos juntos.\nNo corremos lejos.\nNo arrancamos plantas vivas.\nObservamos antes de tocar.\nCuidamos el parque.\nEscuchamos las indicaciones.\n\nTambién se pueden repasar algunas posturas de animales como forma de preparar el cuerpo: tortuga, gato, perro, cobra, estrella de mar o abeja.\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente entrega o propone armar un sobrecito. Cada niño escribe:\n\nMis cinco maravillas\nNombre: __________\n\nLa docente explica:\n\n“Vamos a buscar cinco maravillas del parque. No tienen que ser cosas grandes ni perfectas. Una maravilla puede ser algo chiquito que nos llame la atención.”\n\nLa lista exacta puede completarse según la consigna definida. Por ejemplo:\n\nhojas distintas,\nramitas,\npiedritas,\nplantitas u objetos naturales caídos,\nalgo que despierte curiosidad.\n\nSe aclara que no se trata de juntar rápido, sino de mirar con atención y elegir.",
        "desarrollo": "Los niños recorren el espacio indicado y van colocando sus hallazgos en el sobre.\n\nLa docente acompaña con preguntas:\n\n¿Qué encontraste?\n¿Por qué lo elegiste?\n¿Estaba en el piso o en una planta?\n¿Tiene una forma especial?\n¿Qué color tiene?\n¿Es suave, duro, seco, rugoso?\n¿Te recuerda a algo?\n¿Qué te dio curiosidad?\n\nDurante la búsqueda, se refuerza la idea de mirar con lupa:\n\n“No buscamos cualquier cosa. Buscamos algo que nos invite a mirar otra vez.”\n\nPuerta 3 · Miramos con lupa lo encontrado\n\nLuego, ya reunidos en el suelo o en ronda, cada niño abre su sobrecito y coloca sus cinco maravillas delante de sí.\n\nLa docente invita a comparar y observar.\n\nPreguntas posibles:\n\n¿Todas las hojas son iguales?\n¿Qué cambia entre una y otra?\n¿Cuál es más grande?\n¿Cuál es más chica?\n¿Cuál tiene más líneas?\n¿Cuál está más seca?\n¿Qué objeto te da más curiosidad?\n¿Qué encontraste que otro no encontró?\n¿Hay algo parecido entre tus maravillas y las de un compañero?\n\nSe puede invitar a agrupar:\n\nhojas con hojas,\nramitas con ramitas,\npiedritas con piedritas,\nobjetos curiosos.\n\nElegimos una maravilla\n\nCada niño elige una de sus cinco maravillas para observar más detenidamente.\n\nPreguntas posibles:\n\n¿Por qué elegiste esa?\n¿Qué tiene de especial?\n¿Qué detalle descubriste recién ahora?\n¿Qué nombre le pondrías?\n¿Qué pregunta te da esta maravilla?\n\nSi hay tiempo, pueden dibujarla o simplemente compartirla en ronda.\n\nPuerta 4 · Escuchamos con el corazón\n\nEn la ronda final, algunos niños muestran la maravilla elegida y cuentan por qué la eligieron.\n\nLa consigna para el grupo es escuchar sin interrumpir.\n\nLa docente puede decir:\n\n“Escuchar con el corazón también es escuchar lo que otro descubrió.”",
        "preguntas": [],
        "cierre": "La docente recupera:\n\n“Hoy salimos al parque y descubrimos que hay maravillas pequeñas. Para encontrarlas, tuvimos que caminar más despacio, mirar con atención y elegir.”\n\nPregunta para seguir pensando:\n¿Qué maravillas aparecen cuando camino más despacio?",
        "recursos": "Sobrecitos de papel.\nLápices para escribir nombre y título.\nEspacio al aire libre.\nAyudante Ari.\nRespiración inicial.\nOpcional: hoja para dibujar una maravilla elegida.",
        "observacion": "Cuando se confirme la lista exacta de elementos a buscar, se ajusta la consigna del sobre “Mis cinco maravillas”."
      },
      "segundo": {
        "title": "Posturas de animales y comienzo del Saludo al Sol",
        "date": "jueves 4 de junio",
        "status": "realizada",
        "tags": [
          "segundo",
          "naturaleza",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
          "Ari o Hipatia",
          "respiración del mar, respiración de la abeja o respiración inicial breve",
          "clase adentro"
        ],
        "eje": "reconocer el cuerpo, recordar posturas y comenzar una secuencia corporal compartida",
        "ayudante": "Ari o Hipatia",
        "respiracion": "respiración del mar, respiración de la abeja o respiración inicial breve",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
        "recurso": "posturas de animales y secuencia inicial de Saludo al Sol",
        "proposito": "Retomar posturas de animales ya conocidas por el grupo y comenzar a aprender una secuencia corporal sencilla: el Saludo al Sol. Explorar cómo el cuerpo puede recordar movimientos, organizarse en una secuencia y ayudar a entrar en calma y atención.",
        "inicio": "La docente invita al grupo a ubicarse en un espacio del aula donde puedan moverse con cuidado.\n\nSe realiza una respiración breve para preparar el cuerpo.\n\nPuede usarse respiración del mar, respiración de la abeja o una respiración sencilla de inhalar y exhalar con calma.\n\nLuego se pregunta:\n\n¿Qué posturas de animales recordamos?\n¿Qué animales hicimos alguna vez con el cuerpo?\n¿El cuerpo se acuerda de una postura?\n¿Qué necesitamos para movernos sin lastimarnos ni molestar a otros?",
        "desarrollo": "La docente propone recordar algunas posturas.\n\nPosibles posturas:\n\ntortuga,\ngato,\nperro,\ncobra,\nestrella de mar,\ncangrejo,\nabeja.\n\nLa docente guía cada una brevemente y pregunta:\n\n¿Qué parte del cuerpo usamos?\n¿Qué postura fue más fácil?\n¿Cuál necesitó más fuerza?\n¿Cuál nos dio calma?\n¿Cuál nos hizo reír?\n¿Cuál recordábamos mejor?\n\nSe puede invitar a que los chicos nombren una postura y el grupo intente recordarla.\n\nPuerta 3 · Miramos con lupa el cuerpo\n\nDespués del repaso, la docente propone observar:\n\n¿Qué cambió en el cuerpo después de movernos?\n¿Respiramos igual que antes?\n¿Estamos más inquietos o más tranquilos?\n¿El cuerpo se calienta, se estira, se despierta?\n\nLa docente recupera que mirar con lupa también puede ser observar lo que pasa en el cuerpo.\n\nPuerta 2 · Nueva propuesta: Saludo al Sol\n\nLa docente presenta el Saludo al Sol como una secuencia de posturas que se hacen una después de otra.\n\nPuede decir:\n\n“Ahora vamos a empezar a aprender una serie de movimientos. No hace falta que salga perfecta. La vamos a aprender de a poco.”\n\nSecuencia posible:\n\nNamasté en el pecho.\nBrazos al cielo.\nPinza hacia la tierra.\nCorredor.\nPerro.\nTabla u oruga, según el grupo.\nCobra.\nPerro.\nCorredor.\nPinza.\nSubimos con brazos al cielo.\nVolvemos a Namasté.\n\nEn esta primera clase no es necesario lograr toda la secuencia con fluidez. Puede trabajarse por partes.\n\nLa docente muestra una postura y el grupo copia.\n\nLuego se une con la siguiente.\n\nPreguntas posibles:\n\n¿Qué postura viene después?\n¿Cuál se parece a una postura de animal que ya conocíamos?\n¿Qué parte fue más difícil de recordar?\n¿Qué ayuda al cuerpo a acordarse?\n¿Necesitamos mirar, escuchar o sentir para aprender la secuencia?\n\nSe puede repetir una parte varias veces:\n\nNamasté.\nBrazos arriba.\nPinza.\nCorredor.\nPerro.\n\nY luego sumar, si el grupo puede:\n\nTabla u oruga.\nCobra.\nPerro.\n\nPuerta 5 · Transformamos\n\nLa docente puede señalar:\n\n“Hoy transformamos posturas sueltas en una secuencia. El cuerpo empezó a recordar un camino.”\n\nPreguntas:\n\n¿Qué cambia cuando una postura viene después de otra?\n¿El cuerpo puede aprender un orden?\n¿Qué nos ayuda a pasar de una postura a otra?\n¿La respiración ayuda al movimiento?",
        "preguntas": [],
        "cierre": "Se repite una parte del Saludo al Sol de manera tranquila.\n\nLuego el grupo vuelve a sentarse y se recupera:\n\n“Hoy recordamos posturas de animales y empezamos a aprender el Saludo al Sol. El cuerpo también puede aprender, recordar y ayudarnos a estar atentos.”\n\nPregunta para seguir pensando:\n¿Qué postura recuerda mejor mi cuerpo?",
        "recursos": "Espacio del aula.\nTarjetas o imágenes de posturas.\nSecuencia simple del Saludo al Sol.\nAyudante Ari o Hipatia.\nRespiración inicial.",
        "observacion": "Esta clase se realizó adentro. El foco no está en la salida al parque, sino en el repaso corporal y el inicio del Saludo al Sol como secuencia."
      }
    }
  },
  {
    "id": 10,
    "title": "Cuerpo, naturaleza y Saludo al Sol",
    "dates": "8, 9 y 11 de junio",
    "summary": "Movimiento, observación, clasificación y atención al aire libre.",
    "theme": "naturaleza",
    "classes": {
      "tercero": {
        "title": "Posturas de animales, respiraciones y Saludo al Sol",
        "date": "lunes 8 de junio",
        "status": "realizada",
        "tags": [
          "tercero",
          "naturaleza",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
          "Ari o Hipatia",
          "respiración de la flor, respiración de la abeja o respiración del mar",
          "realizada"
        ],
        "eje": "reconocer el cuerpo como espacio de atención, memoria, respiración y movimiento",
        "ayudante": "Ari o Hipatia",
        "respiracion": "respiración de la flor, respiración de la abeja o respiración del mar",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
        "recurso": "posturas de animales y secuencia de Saludo al Sol",
        "proposito": "Profundizar el recorrido corporal iniciado la semana anterior, recuperando posturas de animales, respiraciones y movimientos ya conocidos para avanzar hacia una secuencia más integrada: el Saludo al Sol. Pensar el cuerpo como parte del aprendizaje, la memoria y la disposición para filosofar.",
        "inicio": "La docente invita al grupo a ubicarse en un espacio amplio, cuidando el lugar propio y el de los demás.\n\nSe comienza con una respiración breve. Puede elegirse según el clima del grupo:\n\nRespiración de la flor: abrir y cerrar la mano como una flor que despierta y descansa.\nRespiración de la abeja: inhalar y exhalar con un zumbido suave.\nRespiración del mar: taparse suavemente los oídos y escuchar la propia respiración.\n\nLuego se pregunta:\n\n¿Cómo está hoy nuestro cuerpo?\n¿Qué posturas recuerda de la clase anterior?\n¿El cuerpo puede acordarse de algo?\n¿Una respiración puede preparar el pensamiento?\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente anticipa que van a realizar un recorrido corporal:\n\nPrimero recordarán posturas de animales.\nLuego unirán algunas de esas posturas en una secuencia.\nFinalmente, conversarán sobre qué pasa con el cuerpo cuando se mueve, respira y recuerda.\n\nSe aclara que no se busca hacer posturas perfectas, sino observar el cuerpo con atención.",
        "desarrollo": "La docente propone recordar algunas posturas conocidas:\n\ntortuga,\ngato,\nperro,\ncobra,\ncangrejo,\nestrella de mar,\ntiburón,\nabeja.\n\nAntes o después de cada postura, se puede preguntar:\n\n¿Qué animal estamos representando?\n¿Qué parte del cuerpo sostiene esta postura?\n¿Qué postura necesita fuerza?\n¿Cuál necesita equilibrio?\n¿Cuál nos da calma?\n¿Cuál nos da energía?\n¿Cuál recuerda mejor el cuerpo?\n\nLa docente invita a realizar las posturas con cuidado, prestando atención a la respiración y al espacio.\n\nPuerta 3 · Miramos con lupa el cuerpo\n\nLuego de algunas posturas, se hace una pausa.\n\nPreguntas posibles:\n\n¿Qué cambió en el cuerpo desde que empezamos?\n¿Respiramos igual que al comienzo?\n¿Qué postura fue más cómoda?\n¿Cuál fue más desafiante?\n¿El cuerpo puede estar atento?\n¿El cuerpo tiene memoria?\n\nLa docente puede abrir una conversación breve sobre la memoria corporal:\n\n¿Hay movimientos que hacemos sin pensarlos tanto?\n¿Cómo sabe el cuerpo qué postura viene después?\n¿Qué pasa cuando repetimos una secuencia varias veces?\n\nLa docente presenta o retoma la secuencia del Saludo al Sol.\n\nPuede guiarla paso a paso:\n\nNamasté en el pecho.\nBrazos al cielo.\nPinza hacia la tierra.\nCorredor.\nPerro.\nTabla u oruga.\nCobra.\nPerro.\nCorredor.\nPinza.\nBrazos al cielo.\nNamasté.\n\nPrimero se realiza lentamente, con la docente guiando cada paso.\nLuego, si el grupo puede, se repite una segunda vez con menos palabras, dejando que el cuerpo recuerde la secuencia.\n\nPuerta 5 · Transformamos\n\nLa docente recupera:\n\n“Hoy transformamos posturas sueltas en una secuencia. También transformamos el movimiento en una forma de atención.”\n\nPreguntas posibles:\n\n¿Qué cambia cuando hacemos una postura sola y cuando la unimos con otras?\n¿Qué ayuda al cuerpo a recordar el orden?\n¿Qué pasa si nos apuramos?\n¿La respiración ayuda al movimiento?\n¿El movimiento puede cambiar cómo nos sentimos?",
        "preguntas": [],
        "cierre": "Se vuelve a una postura tranquila, como Namasté, tortuga o estrella de mar.\n\nLa docente invita a registrar una sensación:\n\nUna postura que recordé fue…\nUna postura que me costó fue…\nUna respiración que me ayudó fue…\nMi cuerpo ahora se siente…\n\nSe cierra con una idea:\n\n“El cuerpo también piensa, recuerda y nos ayuda a estar disponibles para escuchar.”\n\nPregunta para seguir pensando:\n¿El cuerpo tiene memoria?",
        "recursos": "Tarjetas o imágenes de posturas de animales.\nSecuencia de Saludo al Sol.\nEspacio amplio.\nAyudante Ari o Hipatia.\nRespiraciones del laboratorio.\nMúsica suave opcional.",
        "observacion": "En tercero esta clase puede abrir una conversación más profunda sobre memoria corporal, atención y movimiento. Conviene dar lugar a los aportes de los chicos sin perder el ritmo corporal de la clase."
      },
      "primero": {
        "title": "Vivo, no vivo y Saludo al Sol",
        "date": "martes 9 de junio",
        "status": "realizada",
        "tags": [
          "primero",
          "naturaleza",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
          "Ari",
          "respiración de la abeja o respiración del globo",
          "realizada"
        ],
        "eje": "observar elementos de la naturaleza, distinguir vivo/no vivo/tuvo vida y continuar el trabajo corporal con Saludo al Sol",
        "ayudante": "Ari",
        "respiracion": "respiración de la abeja o respiración del globo",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 5: Transformam",
        "recurso": "maravillas recolectadas en el parque y secuencia inicial de Saludo al Sol",
        "proposito": "Retomar la salida al parque y las “cinco maravillas” recolectadas para conversar sobre lo vivo, lo no vivo y aquello que alguna vez tuvo vida. Integrar esa observación con una experiencia corporal sencilla de Saludo al Sol.",
        "inicio": "La docente invita al grupo a sentarse en ronda y recuerda la salida al parque de la semana anterior.\n\nSe pregunta:\n\n¿Qué buscamos en el parque?\n¿Qué guardamos en el sobrecito?\n¿Qué maravillas encontramos?\n¿Todas eran iguales?\n¿Qué cosa te llamó más la atención?\n\nSe realiza una respiración breve para entrar al Laboratorio Filosófico. Puede ser respiración de la abeja, del globo o una respiración ya conocida.\n\nPuerta 3 · Volvemos a mirar las maravillas\n\nLa docente invita a recuperar los sobrecitos o a recordar los elementos recolectados.\n\nSi los objetos están disponibles, cada niño puede elegir uno para mirar otra vez.\n\nPreguntas posibles:\n\n¿Qué elegiste?\n¿Qué detalle ves ahora?\n¿Tiene color, forma, textura, líneas, olor?\n¿Está seco o fresco?\n¿Es duro o blando?\n¿Te sigue dando curiosidad?\n\nLa docente recupera la idea de mirar con lupa:\n\n“Cuando volvemos a mirar, pueden aparecer detalles nuevos.”",
        "desarrollo": "La docente propone clasificar oralmente algunos elementos.\n\nSe puede armar en el piso o en el pizarrón tres grupos:\n\nVivo\nNo vivo\nTuvo vida\n\nLa docente pregunta:\n\n¿Una piedra está viva?\n¿Una hoja seca está viva?\n¿Una ramita está viva?\n¿Un árbol está vivo?\n¿Una flor arrancada sigue viva?\n¿Qué necesita algo para vivir?\n¿Algo puede no estar vivo ahora, pero haber sido parte de algo vivo antes?\n\nSe acompaña con ejemplos simples:\n\nUn árbol está vivo.\nUna piedra no está viva.\nUna hoja seca no está viva ahora, pero tuvo vida porque fue parte de una planta.\nUna ramita caída no está viva ahora, pero perteneció a un árbol.\n\nLa docente no busca definiciones científicas cerradas, sino abrir una conversación inicial desde la observación.\n\nPuente filosófico\n\nSe puede conversar:\n\n¿Cómo sabemos si algo está vivo?\n¿Moverse alcanza para estar vivo?\n¿Respirar alcanza?\n¿Crecer es estar vivo?\n¿Qué cosas de la naturaleza cambian con el tiempo?\n¿Algo que ya no está vivo puede seguir siendo importante?\n\nSegunda parte · Saludo al Sol\n\nLuego de la conversación, la docente propone mover el cuerpo.\n\nPuede decir:\n\n“Estuvimos mirando cosas de la naturaleza. Ahora vamos a saludar al sol con el cuerpo.”\n\nSe presenta una versión breve y muy guiada del Saludo al Sol:\n\nNamasté.\nBrazos al cielo.\nPinza hacia la tierra.\nUn pie atrás como corredor.\nPerro.\nCobra.\nVolvemos despacio.\nNamasté.\n\nEn primero conviene hacerlo muy simple, imitando a la docente y sin exigir precisión.\n\nPreguntas durante la práctica:\n\n¿Qué parte del cuerpo sube hacia el sol?\n¿Qué parte baja hacia la tierra?\n¿Qué postura parece un animal?\n¿Qué postura ya conocíamos?\n¿Qué siente el cuerpo cuando se estira?\n\nPuerta 5 · Transformamos\n\nLa docente puede recuperar:\n\n“Hoy transformamos una búsqueda en una conversación y después transformamos el cuerpo con movimiento.”\n\nPreguntas posibles:\n\n¿Qué cambió después de movernos?\n¿El cuerpo quedó igual?\n¿El Saludo al Sol nos dio calma, energía o las dos cosas?\n¿Podemos saludar con el cuerpo?",
        "preguntas": [],
        "cierre": "Se vuelve a la ronda y se recupera una idea central:\n\n“Hoy pensamos en lo vivo, lo no vivo y lo que tuvo vida. También saludamos al sol con el cuerpo.”\n\nSe puede cerrar con una frase:\n\n“Una cosa viva que conozco es…”\n“Una cosa que tuvo vida es…”\n“Una postura que me gustó fue…”\n\nPregunta para seguir pensando:\n¿Cómo nos damos cuenta de que algo está vivo?",
        "recursos": "Sobrecitos “Mis cinco maravillas”.\nElementos recolectados del parque.\nTarjetas o cartel: vivo / no vivo / tuvo vida.\nEspacio para moverse.\nSecuencia simple de Saludo al Sol.\nAyudante Ari.",
        "observacion": "En primero conviene sostener la clasificación desde ejemplos concretos y no desde definiciones abstractas. El Saludo al Sol funciona como continuidad corporal y como puente entre naturaleza, cuerpo y cuidado."
      },
      "segundo": {
        "title": "Clase afuera: desafío 5, 4, 3, 2, 1",
        "date": "jueves 11 de junio",
        "status": "realizada",
        "tags": [
          "segundo",
          "naturaleza",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
          "Ari",
          "respiración del mar, respiración de la abeja o respiración inicial breve",
          "realizada / clase al aire libre"
        ],
        "eje": "observar la naturaleza con atención, clasificar, comparar y descubrir detalles",
        "ayudante": "Ari",
        "respiracion": "respiración del mar, respiración de la abeja o respiración inicial breve",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
        "recurso": "desafío de búsqueda 5, 4, 3, 2, 1",
        "proposito": "Proponer una experiencia de observación al aire libre que permita mirar la naturaleza con atención, comparar elementos, reconocer diferencias y descubrir detalles. Trabajar la búsqueda como una forma de mirar con lupa el entorno.",
        "inicio": "La docente anticipa que la clase se realizará afuera y recuerda acuerdos de cuidado.\n\nAntes de salir o al llegar al parque, se realiza una respiración breve.\n\nSe pueden recordar acuerdos:\n\nCaminamos dentro del espacio indicado.\nNo arrancamos plantas vivas.\nBuscamos objetos caídos o disponibles.\nCuidamos el parque.\nEscuchamos la consigna completa antes de empezar.\nVolvemos cuando la docente llama.\n\nLa docente puede decir:\n\n“Hoy vamos a mirar el parque con lupa. No una lupa de verdad, sino con atención.”\n\nPresentación del ayudante\n\nSe retoma a Ari como ayudante de la observación.\n\nLa docente puede decir:\n\n“Ari nos recuerda que observar es mirar despacio. Hoy vamos a buscar elementos de la naturaleza, pero no vale juntar cualquier cosa rápido. Tenemos que mirar, comparar y elegir.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente presenta el desafío:\n\n5, 4, 3, 2, 1\n\nLa consigna puede ser:\n\n5 hojas distintas.\n4 frutos, semillas o elementos pequeños de la naturaleza.\n3 ramitas.\n2 piedras.\n1 objeto curioso.\n\nLa lista puede ajustarse según lo que efectivamente hayan buscado.\n\nLa docente aclara:\n\n“No gana quien termina primero. La idea es encontrar elementos diferentes y poder contar por qué los elegimos.”",
        "desarrollo": "Los estudiantes recorren el espacio delimitado y buscan los elementos.\n\nDurante la búsqueda, la docente acompaña con preguntas:\n\n¿Estas hojas son realmente distintas?\n¿En qué se diferencian?\n¿Tienen distinto color, forma, tamaño o textura?\n¿Qué hace que ese objeto sea curioso?\n¿Esa ramita estaba caída?\n¿Esa piedra se parece a otra?\n¿Qué encontraste que no habías visto al principio?\n\nSe puede invitar a mirar antes de levantar:\n\nPrimero miro.\nDespués elijo.\nDespués guardo.\n\nPuerta 3 · Miramos con lupa lo encontrado\n\nAl finalizar la búsqueda, el grupo se reúne en ronda o en el suelo.\n\nCada estudiante o pequeño grupo coloca delante suyo los elementos encontrados.\n\nLa docente propone comparar:\n\n¿Cuáles hojas son parecidas?\n¿Cuáles son diferentes?\n¿Qué hoja tiene más líneas?\n¿Qué piedra es más lisa?\n¿Qué ramita tiene una forma especial?\n¿Qué objeto curioso apareció?\n¿Alguien encontró algo que nadie más encontró?\n\nSe puede ordenar colectivamente:\n\nhojas juntas,\nramitas juntas,\npiedras juntas,\nobjetos curiosos juntos.\n\nElegimos un elemento para observar\n\nCada estudiante elige uno de sus elementos.\n\nPreguntas posibles:\n\n¿Por qué elegiste ese?\n¿Qué detalle te llamó la atención?\n¿Qué pregunta te da?\n¿Tiene algo que antes no viste?\n¿Podrías describirlo sin decir su nombre?\n\nLa docente puede proponer que algunos compartan su elección con el grupo.\n\nPuerta 4 · Escuchamos con el corazón\n\nDurante la ronda final, se retoma la escucha:\n\n“Cuando alguien muestra su hallazgo, los demás escuchamos qué descubrió.”\n\nPreguntas para quienes escuchan:\n\n¿Qué descubrió tu compañero?\n¿Alguien eligió algo parecido?\n¿Alguien miró algo de una manera distinta?",
        "preguntas": [
          "¿Qué diferencia hay entre juntar y observar",
          "¿Qué encontramos cuando miramos despacio",
          "¿Por qué dos hojas pueden ser parecidas pero no iguales",
          "¿Qué hace que algo sea curioso",
          "¿La naturaleza se repite o siempre cambia",
          "¿Qué cosas pequeñas suelen pasar desapercibidas",
          "¿Podemos aprender mirando el suelo"
        ],
        "cierre": "La docente recupera:\n\n“Hoy hicimos una búsqueda, pero también hicimos una investigación. Miramos, comparamos, elegimos y escuchamos los descubrimientos de otros.”\n\nSe puede cerrar con una frase:\n\n“Hoy descubrí…”\n“Me dio curiosidad…”\n“Me sorprendió…”\n\nPregunta para seguir pensando:\n¿Qué aparece cuando miro el parque como investigador?",
        "recursos": "Espacio al aire libre.\nSobres, bolsitas o espacio para recolectar.\nConsigna 5, 4, 3, 2, 1.\nAyudante Ari.\nOpcional: hoja de registro o dibujo posterior.",
        "observacion": "En segundo esta clase retoma la salida que no se realizó la semana anterior. El desafío 5, 4, 3, 2, 1 permite mayor autonomía que en primero, porque exige comparar cantidades y diferencias entre elementos."
      }
    }
  },
  {
    "id": 11,
    "title": "Saludos, seres vivos y formas de comunicarnos",
    "dates": "15, 16 y 18 de junio",
    "summary": "Feriado para Tercero; saludos, cuerpo y seres vivos en Primero y Segundo.",
    "theme": "saludos",
    "classes": {
      "tercero": {
        "title": "Sin clase por feriado nacional",
        "date": "lunes 15 de junio",
        "status": "sin clase",
        "tags": [
          "tercero",
          "saludos",
          "sin clase"
        ],
        "eje": "",
        "ayudante": "",
        "respiracion": "",
        "puertas": "",
        "recurso": "",
        "proposito": "",
        "inicio": "",
        "desarrollo": "Mensaje del mosaico\n\nNo se realiza clase por feriado nacional.\n\nLa clase prevista para este grupo se retoma en la semana siguiente.\n\nClase desplazada a Semana 12:\nClase afuera: posturas, Saludo al Sol y juego de penales con instrucciones.",
        "preguntas": [],
        "cierre": "",
        "recursos": "",
        "observacion": "No se realiza clase por feriado nacional. La propuesta se retoma en la semana siguiente."
      },
      "primero": {
        "title": "¿Saludamos solo con palabras?",
        "date": "martes 16 de junio",
        "status": "realizada",
        "tags": [
          "primero",
          "saludos",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Sócrates o Ari",
          "respiración del arquero, respiración del globo o respiración de la mano",
          "realizada"
        ],
        "eje": "descubrir que el saludo puede hacerse con palabras, gestos, miradas, movimientos y distintas partes del cuerpo",
        "ayudante": "Sócrates o Ari",
        "respiracion": "respiración del arquero, respiración del globo o respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: exploración corporal de saludos",
        "proposito": "Iniciar el recorrido sobre los saludos, invitando a los niños y niñas a pensar si saludamos solamente con palabras o si también podemos saludar con el cuerpo, la mirada, los gestos y el movimiento.",
        "inicio": "La docente invita al grupo a entrar al Laboratorio Filosófico y sentarse en ronda.\n\nSe realiza una respiración breve. Puede ser respiración del globo, respiración de la mano o respiración del arquero.\n\nLuego se abre una conversación inicial:\n\n¿Qué hacemos cuando saludamos?\n¿Cuándo saludamos?\n¿A quiénes saludamos?\n¿Siempre saludamos igual?\n¿Qué palabras usamos para saludar?\n\nLa docente puede recuperar saludos conocidos:\n\nhola, chau, buen día, buenas tardes, buenas noches, hasta luego.\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente plantea la pregunta central:\n\n¿Saludamos solo con palabras?\n\nSe invita a pensar:\n\n¿Podemos saludar sin hablar?\n¿Podemos saludar con una mano?\n¿Podemos saludar con los ojos?\n¿Podemos saludar con todo el cuerpo?\n¿Qué pasa si alguien no escucha nuestra voz?\n¿Qué pasa si estamos lejos?",
        "desarrollo": "La docente propone una exploración corporal.\n\nConsigna:\n\n“Vamos a probar distintas formas de saludar sin usar palabras.”\n\nPosibles propuestas:\n\nSaludamos con una mano.\nSaludamos con las dos manos.\nSaludamos con los ojos.\nSaludamos con la cabeza.\nSaludamos con los hombros.\nSaludamos con los codos.\nSaludamos con un dedo.\nSaludamos con los pies, sin patear.\nSaludamos con una reverencia.\nSaludamos desde lejos.\nSaludamos en silencio.\n\nDespués de cada forma, se puede preguntar:\n\n¿Se entendió que era un saludo?\n¿Qué parte del cuerpo usamos?\n¿Fue un saludo alegre, tímido, divertido o tranquilo?\n¿Cómo cambia el saludo cuando cambia el cuerpo?\n\nPuerta 3 · Miramos con lupa los saludos\n\nLa docente invita a observar con atención:\n\n¿Qué tiene que tener un gesto para que sea saludo?\n¿Cómo nos damos cuenta de que alguien nos está saludando?\n¿La mirada importa?\n¿La distancia importa?\n¿El saludo puede ser fuerte o suave?\n¿Puede haber saludos que no nos gusten?\n\nSe puede conversar brevemente sobre el cuidado:\n\nNo todos quieren saludar de la misma manera.\nAlgunos saludos necesitan permiso.\nUn saludo puede cuidar o incomodar.\n\nActividad · Inventamos saludos\n\nLa docente propone inventar saludos simples.\n\nPuede ser individual, en parejas o en pequeños grupos.\n\nConsignas posibles:\n\nInventar un saludo para entrar a Filosofía.\nInventar un saludo para saludar a un amigo.\nInventar un saludo silencioso.\nInventar un saludo para decir “qué bueno verte”.\nInventar un saludo con una sola parte del cuerpo.\n\nLos niños muestran algunos saludos al grupo.\n\nLa docente puede preguntar:\n\n¿Qué quiso decir ese saludo?\n¿Cómo supimos que era un saludo?\n¿Qué parte del cuerpo usaron?\n¿Fue un saludo con palabras o sin palabras?\n\nPuerta 4 · Escuchamos con el corazón\n\nAunque la clase trate sobre saludos, se recupera la escucha:\n\n“Cuando alguien muestra su saludo, los demás miramos y escuchamos con atención.”\n\nSe puede pedir que el grupo observe sin interrumpir y después diga una cosa que vio.\n\nPuerta 5 · Transformamos\n\nLa docente señala:\n\n“Transformamos el saludo en muchas formas distintas. Descubrimos que una misma intención puede decirse con palabras, manos, ojos o movimientos.”\n\nPreguntas posibles:\n\n¿Un saludo puede decir algo sin palabras?\n¿Qué puede decir un saludo?\n¿Puede decir alegría?\n¿Puede decir cuidado?\n¿Puede decir “te veo”?\n¿Puede decir “quiero acercarme”?",
        "preguntas": [],
        "cierre": "La clase cierra eligiendo un saludo para el Laboratorio Filosófico.\n\nPuede ser un saludo grupal simple que se use al comienzo o al final de próximas clases.\n\nLa docente recupera:\n\n“Hoy descubrimos que saludar no es solamente decir hola. También podemos saludar con el cuerpo, con la mirada y con gestos que hacen lugar al otro.”\n\nPregunta para seguir pensando:\n¿Qué hace que un saludo sea un verdadero encuentro?",
        "recursos": "Espacio en ronda.\nAyudante Sócrates o Ari.\nTarjetas con palabras de saludo, si se desea.\nMúsica breve opcional para moverse.\nPizarra o afiche para registrar ideas.",
        "observacion": "En primero conviene sostener la propuesta desde el movimiento, el juego y la exploración corporal. La pregunta filosófica aparece a partir de la experiencia: qué significa saludar y cómo hacemos lugar al otro."
      },
      "segundo": {
        "title": "Seres vivos, saludos y Saludo al Sol",
        "date": "jueves 18 de junio",
        "status": "realizada",
        "tags": [
          "segundo",
          "saludos",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Ari o Hipatia",
          "respiración de la abeja, respiración del mar o respiración de la mano",
          "realizada"
        ],
        "eje": "articular naturaleza, cuerpo y comunicación: lo vivo, lo no vivo, los saludos y el movimiento compartido",
        "ayudante": "Ari o Hipatia",
        "respiracion": "respiración de la abeja, respiración del mar o respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: conversación sobre seres vivos/no vivos, exploración de saludos y práctica de Saludo al Sol",
        "proposito": "Retomar el trabajo sobre seres vivos/no vivos y vincularlo con el cuerpo y los saludos. Explorar distintas formas de saludar y continuar el aprendizaje del Saludo al Sol como secuencia corporal compartida.",
        "inicio": "La docente invita al grupo a entrar al Laboratorio Filosófico y sentarse en ronda.\n\nSe realiza una respiración breve para preparar el cuerpo y la atención. Puede ser respiración de la abeja, del mar o de la mano.\n\nLuego se recupera lo trabajado anteriormente:\n\n¿Qué habíamos observado en la naturaleza?\n¿Qué cosas estaban vivas?\n¿Qué cosas no estaban vivas?\n¿Qué cosas habían tenido vida?\n¿Cómo nos damos cuenta de que algo está vivo?\n\nPrimer momento · Seres vivos y no vivos\n\nLa docente abre una conversación con ejemplos.\n\nPuede preguntar:\n\n¿Un árbol está vivo?\n¿Una piedra está viva?\n¿Una hoja seca está viva?\n¿Una ramita caída está viva?\n¿Una flor está viva?\n¿Un banco está vivo?\n¿Un animal está vivo?\n¿Qué necesita algo para vivir?\n\nSe puede organizar oralmente en tres grupos:\n\nVivo\nNo vivo\nTuvo vida\n\nLa docente recupera la idea de observar antes de responder:\n\n“No siempre alcanza con contestar rápido. A veces hay que mirar con lupa: ¿está vivo ahora?, ¿nunca estuvo vivo?, ¿o formó parte de algo vivo?”\n\nPuente hacia los saludos\n\nLa docente puede introducir:\n\n“Los seres vivos también se comunican de distintas maneras. Nosotros usamos palabras, gestos, miradas y movimientos. Una de las formas de comunicarnos es saludar.”\n\nSe pregunta:\n\n¿Qué saludos conocemos?\n¿Cuándo saludamos?\n¿Saludamos igual a todos?\n¿Se puede saludar sin hablar?\n¿Los animales saludan?\n¿Cómo se saludan algunos animales?\n¿El cuerpo puede saludar?\n\nSegundo momento · Exploramos saludos\n\nLa docente propone explorar saludos con distintas partes del cuerpo.\n\nConsignas posibles:\n\nSaludamos con la mano.\nSaludamos con los ojos.\nSaludamos con la cabeza.\nSaludamos con los codos.\nSaludamos con los hombros.\nSaludamos desde lejos.\nSaludamos en silencio.\nSaludamos como si fuéramos un animal tranquilo.\nSaludamos como si fuéramos un animal curioso.\n\nDespués de algunas pruebas, se conversa:\n\n¿Qué saludo se entendió mejor?\n¿Cuál fue más divertido?\n¿Cuál fue más tranquilo?\n¿Cuál fue más respetuoso?\n¿Hay saludos que necesitan permiso?\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente recupera que saludar también implica reconocer al otro.\n\nPreguntas posibles:\n\n¿Qué sentimos cuando alguien nos saluda?\n¿Qué sentimos cuando alguien no nos saluda?\n¿Un saludo puede hacer que alguien se sienta incluido?\n¿Un saludo puede incomodar?\n¿Cómo sabemos si el otro quiere ese saludo?\n\nSe puede introducir la idea de cuidado:\n\nNo todos quieren saludar igual.\nPodemos buscar saludos que cuiden al otro.\nSaludar también es mirar si el otro está disponible.\n\nTercer momento · Saludo al Sol\n\nLa docente retoma el Saludo al Sol, vinculándolo con el tema de los saludos.\n\nPuede decir:\n\n“Así como saludamos a una persona, también existe una secuencia que se llama Saludo al Sol. Es una forma de mover el cuerpo, respirar y empezar con atención.”\n\nSe practica la secuencia o una parte de ella:\n\nNamasté.\nBrazos al cielo.\nPinza.\nCorredor.\nPerro.\nTabla u oruga.\nCobra.\nPerro.\nCorredor.\nPinza.\nBrazos al cielo.\nNamasté.\n\nEn segundo se puede pedir que recuerden algunas partes de la secuencia aprendida la semana anterior.\n\nPreguntas posibles:\n\n¿Qué postura recordamos?\n¿Qué parte viene después?\n¿Qué saludo hacemos con las manos?\n¿Qué pasa con el cuerpo cuando repetimos la secuencia?\n¿El cuerpo puede saludar?\n\nPuerta 5 · Transformamos\n\nLa docente recupera:\n\n“Hoy transformamos una conversación sobre seres vivos en una conversación sobre saludos. También transformamos el saludo en movimiento con el Saludo al Sol.”\n\nPreguntas posibles:\n\n¿Qué formas distintas de saludar encontramos?\n¿Una postura puede ser un saludo?\n¿Un saludo puede cuidar?\n¿Qué cambia cuando saludamos con atención?\n¿Qué necesita un saludo para ser respetuoso?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "La docente invita a elegir un saludo para cerrar la clase. Puede ser un saludo con la mano, con la mirada, con Namasté o con una postura tranquila.\n\nSe recupera la idea central:\n\n“Hoy pensamos en lo vivo, en los saludos y en el cuerpo. Descubrimos que comunicarnos no es solo hablar: también es mirar, movernos, esperar y cuidar al otro.”\n\nPregunta para seguir pensando:\n¿Saludar es solo decir hola?",
        "recursos": "Tarjetas o ejemplos de vivo / no vivo / tuvo vida.\nEspacio para moverse.\nSecuencia de Saludo al Sol.\nAyudante Ari o Hipatia.\nRespiración inicial.\nAfiche o pizarra para registrar saludos.",
        "observacion": "En segundo esta clase funciona como puente entre naturaleza, cuerpo y comunicación. Permite recuperar lo trabajado sobre seres vivos/no vivos y abrir el recorrido de los saludos sin abandonar la continuidad corporal del Saludo al Sol."
      }
    }
  },
  {
    "id": 12,
    "title": "Saludos, festejos mundialistas y cuerpo en movimiento",
    "dates": "22, 23 y 25 de junio",
    "summary": "Gestos, reglas, festejos y comunicación corporal.",
    "theme": "mundial",
    "classes": {
      "tercero": {
        "title": "Clase afuera: posturas, Saludo al Sol y penales con festejo",
        "date": "lunes 22 de junio",
        "status": "recuperada",
        "tags": [
          "tercero",
          "mundial",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Ari o Hipatia",
          "respiración del arquero",
          "clase recuperada / realizada al aire libre"
        ],
        "eje": "cuerpo, posturas, reglas, juego compartido, saludos y festejos",
        "ayudante": "Ari o Hipatia",
        "respiracion": "respiración del arquero",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: posturas, Saludo al Sol, pelota y juego de penales por equipos",
        "proposito": "Aprovechar el interés del grupo por el Mundial para realizar una clase corporal al aire libre que combine respiración, posturas, Saludo al Sol, juego de penales y creación de festejos. Trabajar la escucha de instrucciones, la espera del turno, el reconocimiento de posturas y la construcción de un saludo o festejo grupal.",
        "inicio": "La docente anticipa que la clase será afuera y que tendrá movimiento, posturas y juego.\n\nAntes de comenzar, se recuerdan acuerdos:\n\nEscuchamos la consigna completa antes de jugar.\nEsperamos el turno.\nCuidamos el cuerpo propio y el de los demás.\nNo empujamos.\nNo nos burlamos si alguien erra.\nBuscamos que el juego sea de todos.\nDespués de patear, cada uno va a buscar la pelota para que pueda patear su compañero.\n\nSe realiza la respiración del arquero.\n\nLa docente puede guiar:\n\nNos paramos firmes, como arqueros antes de un penal.\nMiramos hacia adelante.\nInhalamos preparando el cuerpo.\nExhalamos soltando tensión.\nAbrimos los brazos como si estuviéramos atentos a la pelota.\nVolvemos al centro.\n\nLuego se pregunta:\n\n¿Qué necesita un arquero antes de atajar?\n¿Qué necesita alguien antes de patear?\n¿El cuerpo puede prepararse para jugar?\n¿Escuchar instrucciones también es parte del juego?\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente presenta la clase en tres momentos:\n\nPrimero, recordamos posturas de animales.\nDespués, hacemos una secuencia de Saludo al Sol.\nFinalmente, armamos equipos para un juego de penales con posturas y festejos.\n\nSe aclara que el juego no consiste solo en patear. También hay que:\n\norganizarse en grupo,\ninventar un festejo,\nelegir una postura,\npresentarse ante los demás,\nescuchar y adivinar posturas,\nesperar el turno,\nbuscar la pelota para el compañero.\n\nPrimer momento · Recordamos posturas\n\nLa docente guía un breve repaso de posturas ya conocidas.\n\nPosibles posturas:\n\ntortuga,\nperro,\ncobra,\ngato,\ncangrejo,\nestrella de mar,\nabeja,\ntiburón,\ncorredor,\nguerrero.\n\nDespués de algunas posturas, se pregunta:\n\n¿Qué postura recordaba el cuerpo?\n¿Cuál necesitó más equilibrio?\n¿Cuál necesitó fuerza?\n¿Cuál nos dio calma?\n¿Cuál nos prepara para jugar?\n\nSegundo momento · Saludo al Sol\n\nLa docente propone realizar una secuencia breve de Saludo al Sol.\n\nSecuencia posible:\n\nNamasté en el pecho.\nBrazos al cielo.\nPinza hacia la tierra.\nCorredor.\nPerro.\nTabla u oruga.\nCobra.\nPerro.\nCorredor.\nPinza.\nBrazos al cielo.\nNamasté.\n\nSe realiza primero guiada paso a paso. Si el grupo puede, se repite una vez más intentando que el cuerpo recuerde el orden.\n\nPreguntas posibles:\n\n¿Qué postura ya conocíamos?\n¿Qué parte fue más difícil?\n¿Qué ayuda al cuerpo a recordar una secuencia?\n¿El cuerpo también tiene memoria?\n\nTercer momento · Armamos equipos\n\nLa docente organiza al grupo en equipos.\n\nCada equipo debe:\n\ninventar un saludo o festejo de gol,\nponerse de acuerdo en cómo mostrarlo,\nelegir una postura para cada integrante,\nrecordar el orden de participación.\n\nLa docente acompaña con preguntas:\n\n¿Cómo van a decidir el festejo?\n¿Todos están de acuerdo?\n¿El festejo es del equipo o de uno solo?\n¿Todos tienen una postura?\n¿Qué necesitan para organizarse mejor?\n\nCuarto momento · Presentación, adivinanza y penales\n\nCada equipo pasa al frente.\n\nPrimero, los integrantes se presentan uno por uno con la postura elegida.\nLos demás compañeros observan y tienen que decir qué postura es.\nLuego, cada integrante patea al arco cuando le corresponde.\nDespués de patear, va a buscar la pelota para que pueda patear el siguiente compañero.\nCuando termina de patear todo el equipo, realizan juntos el saludo o festejo de gol que inventaron.\n\nLa docente puede recordar:\n\nNo se grita encima de quien presenta.\nAdivinamos con respeto.\nSi alguien se equivoca, puede volver a intentar.\nEl festejo es para celebrar, no para burlarse.\nEl equipo espera a todos antes de hacer el festejo final.\n\nPuerta 3 · Miramos con lupa el juego\n\nDurante o después del juego, la docente puede detenerse a observar:\n\n¿Qué equipos lograron organizarse?\n¿Qué festejos se entendieron?\n¿Qué posturas fueron fáciles de reconocer?\n¿Qué pasó cuando alguien erró?\n¿Qué pasó cuando alguien acertó?\n¿El grupo pudo esperar?\n¿El grupo pudo escuchar?\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente recupera la importancia de escuchar instrucciones y también de mirar al otro con atención.\n\nPreguntas posibles:\n\n¿Es fácil esperar el turno cuando queremos jugar?\n¿Qué pasa si no escuchamos la consigna?\n¿Qué pasa si un compañero está mostrando una postura y hablamos encima?\n¿Cómo se siente alguien cuando los demás miran y escuchan lo que hace?\n\nPuerta 5 · Transformamos\n\nLa docente señala:\n\n“Hoy transformamos la energía del Mundial en una clase para pensar con el cuerpo. También transformamos un penal en una actividad con reglas, posturas, espera, equipo y festejo.”\n\nPreguntas posibles:\n\n¿Qué cambia cuando un juego tiene reglas?\n¿Qué hace que un festejo sea de equipo?\n¿Se puede festejar cuidando a los demás?\n¿Qué necesita un grupo para jugar bien?\n¿Qué fue más importante: patear, esperar, mirar, adivinar o festejar?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "El grupo vuelve a la ronda o a un espacio de calma.\n\nSe realiza nuevamente una respiración del arquero.\n\nLa docente recupera:\n\n“Hoy jugamos con el cuerpo, pero también pensamos. Para jugar con otros necesitamos reglas, escucha, espera, acuerdos y cuidado.”\n\nSe puede cerrar con una frase:\n\n“Para jugar en equipo necesitamos…”\n\nCada estudiante que quiera completa con una palabra.\n\nPregunta para seguir pensando:\n¿Cuándo un festejo comparte alegría y cuándo puede incomodar a otros?",
        "recursos": "Pelota.\nEspacio al aire libre.\nReferencia de arco o conos/mochilas para marcar.\nTarjetas o imágenes de posturas, si se desea.\nAyudante Ari o Hipatia.\nRespiración del arquero.\nSecuencia de Saludo al Sol.",
        "observacion": "Esta clase recupera la propuesta que no pudo realizarse por feriado. El clima mundialista funciona como entrada significativa, pero el foco filosófico está en el cuerpo, el juego compartido, las reglas, la espera, la organización grupal y el sentido de los festejos."
      },
      "primero": {
        "title": "Saludos y festejos de gol",
        "date": "martes 23 de junio",
        "status": "realizada",
        "tags": [
          "primero",
          "mundial",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Ari o Sócrates",
          "respiración del arquero",
          "realizada"
        ],
        "eje": "reconocer que los saludos y festejos comunican con el cuerpo, los gestos y el movimiento",
        "ayudante": "Ari o Sócrates",
        "respiracion": "respiración del arquero",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: festejos de gol de jugadores conocidos proyectados en video o imágenes",
        "proposito": "Continuar el recorrido sobre los saludos, incorporando los festejos de gol como gestos corporales que comunican alegría, identidad, reconocimiento y pertenencia. Observar festejos de jugadores conocidos, imitarlos o adivinarlos, e inventar saludos/festejos propios.",
        "inicio": "La docente invita al grupo a sentarse en ronda.\n\nSe realiza la respiración del arquero, conectando con el clima mundialista.\n\nLa docente puede decir:\n\n“Hoy vamos a pensar en saludos y festejos. En el fútbol, muchas veces los jugadores no solo hacen goles: también hacen gestos, saludos o festejos que otros reconocen.”\n\nSe abre la conversación:\n\n¿Qué hacen los jugadores cuando meten un gol?\n¿Todos festejan igual?\n¿Conocen algún festejo famoso?\n¿Un festejo dice algo?\n¿Podemos saludar o festejar sin palabras?\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente presenta la pregunta central:\n\n¿Un festejo también puede ser un saludo?\n\nSe explica que van a mirar algunos festejos de gol y tratar de descubrir qué comunican con el cuerpo.\n\nLa consigna es mirar con atención:\n\nqué hace el cuerpo,\nqué hacen los brazos,\nqué hace la cara,\nsi el jugador corre, salta, señala, se queda quieto, abraza o mira al público.",
        "desarrollo": "La docente proyecta algunos festejos de jugadores conocidos.\n\nDespués de cada festejo, puede preguntar:\n\n¿Qué hizo el jugador?\n¿Qué parte del cuerpo usó?\n¿Fue un festejo tranquilo o muy grande?\n¿Parecía alegría, fuerza, sorpresa, orgullo?\n¿Alguien lo reconoce?\n¿Qué nos hizo darnos cuenta?\n\nLa docente ayuda a observar el gesto y no solo a nombrar al jugador.\n\nJuego · Adivinar saludos o festejos\n\nLa docente puede proponer que algunos estudiantes representen un festejo conocido y los demás intenten adivinar.\n\nConsignas:\n\nMostramos el festejo sin hablar.\nLos demás miran con atención.\nAdivinamos con respeto.\nNo nos burlamos del que actúa.\nTodos pueden inventar o elegir un gesto simple.\n\nTambién se puede jugar a:\n\n“Saludo de jugador”\n“Festejo de gol”\n“Festejo silencioso”\n“Festejo de equipo”\n\nPuerta 3 · Miramos con lupa los gestos\n\nLa docente invita a pensar:\n\n¿Cómo nos dimos cuenta de qué festejo era?\n¿Qué detalles del cuerpo ayudaron?\n¿Un gesto puede tener nombre?\n¿Un gesto puede ser reconocido por muchas personas?\n¿Qué pasa cuando copiamos un gesto de otro?\n\nActividad · Inventamos un festejo propio\n\nEn parejas o pequeños grupos, los niños inventan un saludo/festejo.\n\nConsignas posibles:\n\nUn festejo para celebrar una buena idea.\nUn festejo para entrar a Filosofía.\nUn festejo para decir “lo logramos”.\nUn saludo de equipo.\nUn festejo silencioso.\n\nLuego algunos grupos lo muestran.\n\nLa docente puede preguntar:\n\n¿Qué quiso decir ese festejo?\n¿Era de una persona o del grupo?\n¿Se entendió sin palabras?\n¿Qué parte del cuerpo usaron?\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente recuerda que cuando alguien muestra un gesto, necesita que los demás miren con respeto.\n\nPreguntas posibles:\n\n¿Cómo se siente mostrar algo con el cuerpo?\n¿Qué ayuda a animarse?\n¿Qué pasa si otros se ríen de manera burlona?\n¿Qué diferencia hay entre reírse con alguien y reírse de alguien?\n\nEsta pregunta puede quedar abierta para profundizar en otra clase.",
        "preguntas": [],
        "cierre": "La docente recupera:\n\n“Hoy descubrimos que un festejo también comunica. Puede decir alegría, equipo, sorpresa, fuerza o emoción, aunque no use palabras.”\n\nSe puede cerrar con un saludo/festejo grupal para Filosofía.\n\nPregunta para seguir pensando:\n¿Qué puede decir un gesto sin usar palabras?",
        "recursos": "Proyector.\nVideo o imágenes de festejos de gol de jugadores conocidos.\nEspacio para moverse.\nAyudante Ari o Sócrates.\nRespiración del arquero.",
        "observacion": "En primero el foco está en reconocer que el cuerpo comunica. La reflexión sobre burla puede aparecer de manera breve si surge, pero se puede retomar con más profundidad en clases posteriores."
      },
      "segundo": {
        "title": "Festejos de gol: adivinar, mirar y pensar",
        "date": "jueves 25 de junio",
        "status": "realizada",
        "tags": [
          "segundo",
          "mundial",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Ari o Sócrates",
          "respiración del arquero",
          "realizada"
        ],
        "eje": "observar gestos corporales, reconocer festejos, pensar qué comunican y cómo se interpretan",
        "ayudante": "Ari o Sócrates",
        "respiracion": "respiración del arquero",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: videos de festejos de jugadores y juego de YouTube para adivinar el jugador según el festejo",
        "proposito": "Continuar el trabajo sobre saludos y comunicación corporal, incorporando festejos mundialistas. Observar festejos de jugadores conocidos, jugar a adivinar el jugador a partir del gesto y comenzar a pensar cómo un gesto puede comunicar alegría, identidad, pertenencia o también ser interpretado de diferentes maneras.",
        "inicio": "La docente invita al grupo a entrar al Laboratorio Filosófico y sentarse mirando hacia el proyector.\n\nSe realiza la respiración del arquero:\n\nNos paramos o sentamos firmes.\nInhalamos como si nos preparáramos para atajar.\nExhalamos soltando tensión.\nAbrimos los brazos con atención.\nVolvemos al centro.\n\nLuego se pregunta:\n\n¿Qué hacen los jugadores cuando meten un gol?\n¿Todos festejan igual?\n¿Qué festejos conocemos?\n¿Algunos festejos se reconocen aunque no sepamos el nombre del jugador?\n¿Un gesto puede volverse famoso?\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente presenta la clase:\n\nPrimero, vamos a mirar festejos.\nDespués, vamos a jugar a adivinar jugadores por sus festejos.\nFinalmente, vamos a pensar qué comunican esos gestos.\n\nLa pregunta central puede ser:\n\n¿Cómo sabemos qué quiere decir un gesto?\n\nPrimer momento · Observamos festejos proyectados\n\nLa docente proyecta algunos festejos de jugadores conocidos.\n\nDespués de cada video o imagen, pregunta:\n\n¿Qué hizo con los brazos?\n¿Qué hizo con la cara?\n¿Corrió, saltó, señaló, abrazó, bailó?\n¿Qué emoción parecía mostrar?\n¿Era un festejo individual o con otros?\n¿Alguien lo reconoció?\n¿Qué detalle ayudó a reconocerlo?\n\nSe busca que los chicos observen el gesto con precisión, no solo que nombren al jugador.\n\nSegundo momento · Juego de YouTube: adivinar el jugador\n\nLa docente propone un juego proyectado de YouTube donde se debe adivinar el jugador a partir del festejo.\n\nAntes de comenzar, se acuerdan reglas:\n\nEsperamos a ver el gesto.\nNo gritamos todos encima.\nPodemos levantar la mano o responder por turnos.\nEscuchamos las ideas de otros.\nSi nos equivocamos, no pasa nada: estamos observando.\n\nDurante el juego, la docente puede pausar algunos festejos y preguntar:\n\n¿Qué pista nos da el cuerpo?\n¿Qué parte del festejo reconocieron?\n¿Alguien pensó en otro jugador?\n¿Puede haber festejos parecidos?\n¿Qué pasa cuando copiamos un festejo famoso?\n\nPuerta 3 · Miramos con lupa los gestos\n\nLa docente invita a mirar más allá del juego.\n\nPreguntas posibles:\n\n¿Qué hace que un festejo se pueda reconocer?\n¿El gesto siempre significa lo mismo?\n¿Importa quién lo hace?\n¿Importa cuándo lo hace?\n¿Importa frente a quién lo hace?\n¿Puede un gesto ser divertido para unos y molesto para otros?\n\nTercer momento · Inventamos un saludo/festejo\n\nEn pequeños grupos, los estudiantes inventan un saludo o festejo.\n\nConsignas posibles:\n\nUn festejo para celebrar una buena idea.\nUn saludo de equipo.\nUn festejo silencioso.\nUn festejo que no sea burla.\nUn gesto para decir “lo logramos”.\nUn saludo para entrar a Filosofía.\n\nCada grupo lo muestra y los demás intentan interpretar qué quiso comunicar.\n\nPreguntas:\n\n¿Qué quiso decir ese gesto?\n¿Se entendió?\n¿Qué parte del cuerpo comunicó más?\n¿Parecía festejo, saludo, baile o juego?\n¿Era agradable para todos?\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente recupera:\n\n“Cuando alguien muestra algo con el cuerpo, también necesita ser mirado con cuidado.”\n\nPreguntas posibles:\n\n¿Qué sentimos cuando otros se ríen de lo que hacemos?\n¿Qué diferencia hay entre reírse juntos y burlarse?\n¿Cómo podemos mirar el gesto de otro sin hacerlo sentir mal?\n¿Un festejo puede hacer lugar a otros?\n¿Un festejo puede dejar a alguien afuera?\n\nPuerta 5 · Transformamos\n\nLa docente señala:\n\n“Hoy transformamos un juego de adivinar jugadores en una conversación sobre gestos, saludos y formas de comunicarnos.”\n\nPreguntas posibles:\n\n¿Qué aprendimos sobre los gestos?\n¿Qué gesto puede cuidar?\n¿Qué gesto puede incomodar?\n¿Qué cambia cuando pensamos antes de festejar?\n¿Podemos inventar festejos que incluyan y no lastimen?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "Se recupera la idea central:\n\n“Los gestos también hablan. Un festejo puede mostrar alegría, pero también necesitamos pensar cómo lo reciben los demás.”\n\nSe puede cerrar con un saludo/festejo grupal breve, acordado entre todos.\n\nPregunta para seguir pensando:\n¿Un festejo siempre es divertido para todos?",
        "recursos": "Proyector.\nVideo de festejos de gol de jugadores conocidos.\nJuego de YouTube para adivinar jugador según festejo.\nEspacio para moverse.\nAyudante Ari o Sócrates.\nRespiración del arquero.",
        "observacion": "En segundo se agrega el juego proyectado de adivinar jugadores por festejos. La actividad permite sostener atención visual, participación y una primera reflexión sobre el significado de los gestos. La discusión sobre burla puede quedar planteada para profundizar en la semana siguiente."
      }
    }
  },
  {
    "id": 13,
    "title": "Gestos, saludos, nombres y formas de hacer lugar",
    "dates": "29, 30 de junio y 2 de julio",
    "summary": "Del festejo a la pregunta por celebrar, burlarse y comunicarse con las manos.",
    "theme": "LSA",
    "classes": {
      "tercero": {
        "title": "Festejos mundialistas: ¿celebrar o burlarse?",
        "date": "lunes 29 de junio",
        "status": "realizada",
        "tags": [
          "tercero",
          "LSA",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Sócrates o Beauvoir",
          "respiración del arquero",
          "realizada"
        ],
        "eje": "pensar qué comunican los gestos, los saludos y los festejos; distinguir entre celebrar con otros y burlarse de otros",
        "ayudante": "Sócrates o Beauvoir",
        "respiracion": "respiración del arquero",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: videos de festejos de jugadores, juego de adivinar el jugador por el festejo y conversación filosófica sobre la burla",
        "proposito": "Continuar el recorrido mundialista iniciado la semana anterior, esta vez poniendo el foco en los saludos y festejos de gol como gestos que comunican. Pensar cuándo un festejo comparte alegría y cuándo puede transformarse en burla, humillación o exclusión.",
        "inicio": "La docente invita al grupo a entrar al Laboratorio Filosófico y recuerda la clase anterior, en la que jugaron con posturas, penales y festejos de equipo.\n\nSe realiza la respiración del arquero:\n\nNos paramos o sentamos firmes.\nInhalamos como si nos preparáramos para un penal.\nExhalamos soltando tensión.\nAbrimos los brazos como un arquero atento.\nVolvemos al centro.\n\nLuego se pregunta:\n\n¿Qué festejos de gol conocemos?\n¿Todos los jugadores festejan igual?\n¿Qué festejos se hicieron famosos?\n¿Un festejo puede decir algo sin palabras?\n¿Un festejo siempre es alegría?\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente presenta la clase:\n\n“Hoy vamos a mirar festejos mundialistas, jugar a reconocerlos y después pensar una pregunta importante: ¿un festejo siempre es agradable para todos?”\n\nSe anticipan tres momentos:\n\nMirar festejos de jugadores conocidos.\nJugar a adivinar el jugador por el festejo.\nPensar la diferencia entre festejar, compartir alegría y burlarse.\n\nPrimer momento · Miramos festejos proyectados\n\nLa docente proyecta videos o imágenes de festejos de gol de jugadores conocidos.\n\nDespués de cada festejo, pregunta:\n\n¿Qué hizo el jugador?\n¿Qué parte del cuerpo usó?\n¿Qué emoción parecía mostrar?\n¿Era un festejo individual o con otros?\n¿A quién parecía dirigido?\n¿Qué detalle ayudó a reconocerlo?\n\nLa docente orienta la observación para que no sea solamente “adivinar quién es”, sino mirar con lupa el gesto.\n\nSegundo momento · Juego de adivinar el jugador\n\nSe propone un juego, por ejemplo desde YouTube, donde se debe adivinar el jugador según su festejo.\n\nAntes de jugar, se acuerdan reglas:\n\nMiramos el festejo completo.\nNo gritamos todos encima.\nPodemos responder por turnos.\nSi alguien se equivoca, no nos burlamos.\nEscuchamos las ideas de los demás.\n\nDurante el juego, la docente puede pausar algunos momentos y preguntar:\n\n¿Qué pista nos dio el cuerpo?\n¿Qué gesto fue más reconocible?\n¿Puede haber festejos parecidos?\n¿Qué pasa cuando muchas personas copian un festejo?\n¿Un gesto puede tener “dueño”?\n\nPuerta 3 · Miramos con lupa los gestos\n\nLa docente abre la reflexión:\n\n“Los gestos también hablan. Pero a veces no todos entienden lo mismo.”\n\nPreguntas posibles:\n\n¿Un gesto siempre significa lo mismo para todos?\n¿Importa quién lo hace?\n¿Importa cuándo lo hace?\n¿Importa frente a quién lo hace?\n¿Puede un festejo ser divertido para unos y molesto para otros?\n¿Puede un festejo ser alegría para quien gana y burla para quien pierde?\n\nTercer momento · Celebrar o burlarse\n\nLa docente plantea dos escenas breves para pensar:\n\nEscena 1: un equipo mete un gol y todos se abrazan.\nEscena 2: un equipo mete un gol y festeja mirando al otro equipo, imitando o cargando a quienes perdieron.\n\nPreguntas:\n\n¿Qué diferencia hay entre las dos escenas?\n¿En las dos hay alegría?\n¿En las dos hay cuidado?\n¿Cuándo un festejo se vuelve burla?\n¿La intención alcanza?\n¿Importa cómo lo recibe el otro?\n¿Puedo decir “era un chiste” si al otro le dolió?\n\nLa docente puede registrar dos columnas:\n\nCelebrar con otros\nCompartir alegría.\nAbrazar.\nAgradecer.\nReconocer el equipo.\nNo humillar.\n\nBurlarse de otros\nCargar.\nImitar para lastimar.\nFestejar mirando al que perdió.\nHacer sentir menos.\nDejar afuera.\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente propone pensar desde el lugar del otro.\n\nPreguntas posibles:\n\n¿Cómo se siente alguien cuando se burlan de su error?\n¿Cómo se siente alguien cuando los demás festejan sin humillarlo?\n¿Se puede perder y sentirse respetado?\n¿Se puede ganar y cuidar al que perdió?\n¿Qué necesita un festejo para no lastimar?\n\nSe recupera la idea:\n\n“Escuchar con el corazón también es pensar cómo puede sentirse el otro.”\n\nPuerta 5 · Transformamos\n\nLa docente invita a transformar un festejo que podría ser burla en un festejo cuidado.\n\nEjemplos:\n\nEn lugar de señalar al que perdió, abrazamos al equipo.\nEn lugar de imitar el error de otro, hacemos un gesto propio.\nEn lugar de gritarle al rival, festejamos mirando a nuestro grupo.\nEn lugar de humillar, inventamos un saludo de equipo.\n\nLos estudiantes pueden proponer alternativas.\n\nActividad breve · Inventar un festejo que incluya\n\nEn pequeños grupos, inventan un festejo que cumpla tres condiciones:\n\nCelebra una alegría.\nNo se burla de nadie.\nPuede hacerlo todo el equipo.\n\nLuego lo muestran y el grupo observa:\n\n¿Se entendió?\n¿Incluía a todos?\n¿Podía incomodar a alguien?\n¿Qué comunicaba?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "La docente recupera:\n\n“Hoy pensamos que un gesto no es solo un movimiento. Un festejo puede compartir alegría, pero también puede lastimar si humilla o se burla. Por eso, cuando celebramos, también podemos cuidar.”\n\nPregunta para seguir pensando:\n¿Cuándo un festejo hace lugar al otro y cuándo lo deja afuera?",
        "recursos": "Proyector.\nVideos o imágenes de festejos de gol.\nJuego de YouTube para adivinar jugadores por festejos.\nPizarra o afiche para registrar ideas.\nAyudante Sócrates o Beauvoir.\nRespiración del arquero.",
        "observacion": "Esta clase retoma el interés mundialista y lo transforma en una conversación filosófica sobre gestos, intención, interpretación, burla y cuidado del otro. Funciona como cierre del bloque mundialista antes de iniciar LSA en tercero."
      },
      "primero": {
        "title": "Saludar con las manos: saludos y nombres en LSA",
        "date": "martes 30 de junio",
        "status": "realizada",
        "tags": [
          "primero",
          "LSA",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
          "Sócrates",
          "respiración de la mano",
          "realizada"
        ],
        "eje": "descubrir que las manos también pueden comunicar, saludar y nombrar",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
        "recurso": "videos de saludos en LSA y alfabeto dactilológico",
        "proposito": "Iniciar un acercamiento respetuoso a la Lengua de Señas Argentina a partir de algunos saludos y del alfabeto dactilológico. Pensar que comunicarnos no siempre implica usar la voz y que aprender otra forma de saludar o nombrar puede hacer lugar a otros.",
        "inicio": "La docente invita al grupo a sentarse en ronda.\n\nSe realiza la respiración de la mano:\n\nAbrimos una mano.\nCon un dedo de la otra mano recorremos cada dedo.\nInhalamos al subir.\nExhalamos al bajar.\nPreparamos las manos para pensar y comunicar.\n\nLuego se recupera el recorrido anterior:\n\n¿De cuántas maneras saludamos?\n¿Saludamos solo con palabras?\n¿Podemos saludar con el cuerpo?\n¿Podemos saludar sin voz?\n\nFrase marco\n\nLa docente presenta la frase marco de manera sencilla:\n\n“No vamos a aprender toda la Lengua de Señas Argentina, porque una lengua es mucho más grande que unas pocas señas. Vamos a acercarnos con respeto a algunos saludos y letras para pensar cómo las manos también pueden comunicar, nombrar y hacer lugar.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente plantea la pregunta central:\n\n¿Se puede decir “hola” sin voz?\n\nSe anticipa la clase:\n\nVamos a mirar algunos saludos en LSA.\nVamos a probar saludos con las manos.\nVamos a conocer algunas letras del alfabeto dactilológico.\nVamos a intentar decir nuestra inicial o parte de nuestro nombre.\n\nPrimer momento · Videos de saludos en LSA\n\nLa docente proyecta uno o más videos breves de saludos en LSA.\n\nSaludos posibles:\n\nhola,\nchau,\nbuen día,\nbuenas tardes,\nbuenas noches,\ngracias.\n\nDespués de mirar, se pregunta:\n\n¿Qué hicieron las manos?\n¿La cara también comunicaba?\n¿El cuerpo estaba quieto o acompañaba?\n¿Qué saludo reconocimos?\n¿Fue fácil o difícil copiarlo?\n¿Qué cambia cuando saludamos sin voz?\n\nLa docente guía la práctica de algunas señas de saludo, despacio y repitiendo.\n\nPuerta 3 · Miramos con lupa las manos\n\nLa docente invita a mirar con atención:\n\n¿Hacia dónde va la mano?\n¿Está abierta o cerrada?\n¿Se mueve rápido o despacio?\n¿La cara acompaña?\n¿El saludo se entiende solo con la mano o también con la mirada?\n\nSe refuerza la idea de observar y no copiar apurados.\n\nSegundo momento · Alfabeto dactilológico\n\nLa docente presenta el alfabeto dactilológico como una forma de representar letras con las manos.\n\nAclara de forma simple:\n\n“Esto nos puede ayudar a decir letras, por ejemplo las letras de nuestro nombre.”\n\nNo es necesario aprender todo el alfabeto en una sola clase. Se puede empezar por:\n\nla inicial de cada nombre,\nalgunas letras repetidas del grupo,\nletras fáciles de observar,\nletras que aparezcan en nombres de los niños.\n\nActividad · Mi inicial con las manos\n\nCada niño busca la letra inicial de su nombre.\n\nLa docente puede mostrar un abecedario dactilológico en imagen o lámina.\n\nConsigna:\n\nBusco la primera letra de mi nombre.\nLa observo.\nLa pruebo con la mano.\nLa muestro cuando me sienta listo.\n\nPreguntas posibles:\n\n¿Qué letra elegiste?\n¿Es la inicial de tu nombre?\n¿Fue fácil hacerla con la mano?\n¿Tu mano tuvo que aprender una forma nueva?\n¿Cómo se siente decir una letra sin voz?\n\nPuente filosófico · El nombre\n\nLa docente abre una conversación breve:\n\n¿Para qué sirve nuestro nombre?\n¿Qué pasa cuando alguien dice nuestro nombre?\n¿Qué pasa cuando alguien aprende a decirlo de otra manera?\n¿Mi nombre soy yo?\n¿Me gusta que me nombren bien?\n¿Aprender la inicial de alguien puede ser una forma de saludarlo?\n\nPuerta 4 · Escuchamos con el corazón\n\nSe propone una ronda corta:\n\nCada niño que quiera muestra su inicial con la mano.\n\nLos demás miran en silencio y tratan de reconocerla.\n\nLa docente recuerda:\n\n“Cuando alguien muestra su nombre o su inicial, lo miramos con respeto.”",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "Se repasan dos o tres saludos aprendidos y algunas iniciales.\n\nLa docente recupera:\n\n“Hoy descubrimos que se puede saludar sin voz y que las manos también pueden decir letras de nuestro nombre.”\n\nPregunta para seguir pensando:\n¿Qué cambia cuando alguien aprende a decir mi nombre de otra manera?",
        "recursos": "Videos breves de saludos en LSA.\nImagen o lámina del alfabeto dactilológico.\nProyector.\nAyudante Sócrates.\nEspacio en ronda.\nOpcional: tarjetas con iniciales.",
        "observacion": "En primero conviene ir despacio, seleccionar pocos saludos y trabajar el alfabeto desde la inicial del nombre. El objetivo no es memorizar todo, sino abrir la experiencia de que las manos también pueden saludar y nombrar."
      },
      "segundo": {
        "title": "Las manos también dicen: saludos, colores y nombres en LSA",
        "date": "jueves 2 de julio",
        "status": "realizada",
        "tags": [
          "segundo",
          "LSA",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Sócrates",
          "respiración de la mano",
          "realizada"
        ],
        "eje": "acercarse a la LSA como forma de comunicación, reconocimiento e inclusión",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: saludos en LSA, colores en LSA y alfabeto dactilológico",
        "proposito": "Realizar un primer acercamiento a algunos saludos, colores y letras del alfabeto dactilológico en LSA. Pensar cómo aprender otra forma de comunicación puede ayudar a reconocer al otro y hacer lugar a distintas maneras de decir.",
        "inicio": "La docente invita al grupo a sentarse mirando hacia el proyector.\n\nSe realiza la respiración de la mano para preparar la atención y las manos.\n\nLuego pregunta:\n\n¿Se puede hablar sin voz?\n¿Las manos pueden decir algo?\n¿Una lengua siempre se escucha?\n¿Alguna vez vieron comunicarse con señas?\n\nFrase marco\n\nLa docente presenta la frase marco:\n\n“No vamos a aprender toda la Lengua de Señas Argentina, porque una lengua es mucho más grande que unas pocas señas. Vamos a acercarnos con respeto a algunos saludos, colores y letras para pensar cómo las manos también pueden comunicar, nombrar y hacer lugar.”\n\nPuerta 2 · Recibimos la propuesta\n\nSe anticipa la clase:\n\nPrimero miramos saludos en LSA.\nDespués aprendemos algunos colores.\nLuego conocemos el alfabeto dactilológico.\nFinalmente intentamos decir nuestra inicial o parte de nuestro nombre.\n\nPregunta central:\n\n¿Qué cambia cuando aprendo una forma de comunicarme que otra persona necesita?\n\nPrimer momento · Saludos en LSA\n\nLa docente proyecta videos breves o muestra saludos.\n\nSaludos posibles:\n\nhola,\nchau,\nbuen día,\nbuenas tardes,\nbuenas noches,\ngracias.\n\nSe practica de manera grupal.\n\nPreguntas posibles:\n\n¿Qué partes del cuerpo comunican?\n¿Solo trabajan las manos?\n¿La cara también dice algo?\n¿Qué saludo fue más fácil?\n¿Cuál necesitamos mirar más?\n\nSegundo momento · Colores en LSA\n\nLa docente presenta algunos colores en LSA.\n\nColores sugeridos:\n\nrojo,\nazul,\namarillo,\nverde,\nblanco,\nnegro.\n\nSe puede practicar mirando objetos del aula:\n\n¿Dónde vemos algo rojo?\n¿Dónde vemos algo azul?\n¿Qué color tiene esta cartuchera?\n¿Podemos decir ese color con las manos?\n\nLa docente puede aclarar que se trabajarán pocos colores para recordarlos mejor.\n\nPuerta 3 · Miramos con lupa las señas\n\nLa docente invita a observar:\n\n¿La mano está abierta o cerrada?\n¿Dónde empieza el movimiento?\n¿Dónde termina?\n¿Se mueve una mano o las dos?\n¿La seña se parece a algo que conocemos?\n¿Qué pasa si cambiamos el movimiento?\n\nSe refuerza que aprender una seña requiere atención y respeto.\n\nTercer momento · Alfabeto dactilológico\n\nLa docente presenta el alfabeto dactilológico.\n\nPuede decir:\n\n“Con el alfabeto podemos representar letras. Nos sirve, por ejemplo, para decir nombres.”\n\nSe muestra una lámina o imagen del alfabeto.\n\nActividad posible:\n\nCada estudiante busca la inicial de su nombre.\nLuego intenta hacerla con la mano.\nQuien se anime, prueba dos o tres letras de su nombre.\nAlgunos pueden presentarse: “Hola” + inicial o nombre deletreado parcialmente.\n\nPuente filosófico · Nombre y reconocimiento\n\nPreguntas posibles:\n\n¿Por qué es importante el nombre?\n¿Qué sentimos cuando alguien aprende nuestro nombre?\n¿Qué pasa si alguien lo dice mal todo el tiempo?\n¿Aprender la forma de nombrar a otro puede ser una forma de cuidado?\n¿Mi nombre me presenta?\n¿Presentarme es solo decir mi nombre?\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente propone una ronda breve:\n\nCada estudiante que quiera muestra su inicial o un saludo.\n\nLos demás miran con atención y respeto.\n\nSe recupera:\n\n“Cuando alguien intenta comunicarse de una manera nueva, necesita tiempo y respeto.”\n\nPuerta 5 · Transformamos\n\nLa docente invita a pensar:\n\n“Hoy transformamos la idea de hablar. Descubrimos que no siempre necesitamos la voz para saludar, nombrar o decir un color.”\n\nPreguntas posibles:\n\n¿Qué cambió en nuestra forma de pensar la comunicación?\n¿Qué podemos hacer si alguien se comunica de otra manera?\n¿Aprender algunas señas puede hacer que alguien se sienta incluido?\n¿Las manos también pueden abrir una puerta?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "Se repasan algunos saludos, colores e iniciales.\n\nLa docente recupera:\n\n“Hoy aprendimos que las manos también pueden decir hola, colores y letras. Pero sobre todo pensamos que comunicarnos también es hacer lugar.”\n\nPregunta para seguir pensando:\n¿Todas las formas de decir necesitan voz?",
        "recursos": "Videos de saludos en LSA.\nVideos o imágenes de colores en LSA.\nLámina del alfabeto dactilológico.\nProyector.\nAyudante Sócrates.\nEspacio en ronda.",
        "observacion": "En segundo esta clase concentra saludos, colores y alfabeto porque el grupo cuenta con menos encuentros disponibles antes del cierre. Es importante priorizar la experiencia filosófica y comunicativa por encima de la memorización perfecta."
      }
    }
  },
  {
    "id": 14,
    "title": "LSA, colores, nombres y formas de presentarnos",
    "dates": "6, 7 y 9 de julio",
    "summary": "Presentarnos con las manos; feriado del 9 de julio para Segundo.",
    "theme": "LSA",
    "classes": {
      "tercero": {
        "title": "Presentarnos con las manos: saludos, colores y nombres en LSA",
        "date": "lunes 6 de julio",
        "status": "realizada",
        "tags": [
          "tercero",
          "LSA",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Sócrates",
          "respiración de la mano",
          "realizada"
        ],
        "eje": "acercarse a la LSA como una forma de comunicación, presentación y reconocimiento del otro",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: saludos en LSA, colores en LSA, alfabeto dactilológico y presentación personal",
        "proposito": "Iniciar un acercamiento respetuoso a algunos saludos, colores y letras del alfabeto dactilológico en LSA. Pensar qué significa presentarnos, decir nuestro nombre y aprender una forma de comunicación que no depende de la voz.",
        "inicio": "La docente invita al grupo a sentarse en ronda o mirando hacia el proyector.\n\nSe realiza la respiración de la mano:\n\nAbrimos una mano.\nCon un dedo de la otra mano recorremos cada dedo.\nInhalamos al subir.\nExhalamos al bajar.\nPreparamos las manos para pensar, saludar y comunicar.\n\nLuego se abre la conversación:\n\n¿Se puede hablar sin voz?\n¿Las manos pueden decir algo?\n¿Una lengua siempre se escucha?\n¿Alguna vez vieron comunicarse con señas?\n¿Qué significa presentarse?\n\nFrase marco\n\nLa docente presenta la frase marco:\n\n“No vamos a aprender toda la Lengua de Señas Argentina, porque una lengua es mucho más grande que unas pocas señas. Vamos a acercarnos con respeto a algunos saludos, colores y letras para pensar cómo las manos también pueden comunicar, nombrar y hacer lugar.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente anticipa la clase:\n\nPrimero vamos a mirar y practicar algunos saludos en LSA.\nDespués vamos a aprender algunos colores.\nLuego vamos a conocer el alfabeto dactilológico.\nFinalmente vamos a intentar presentarnos usando saludo, nombre o inicial.\n\nPregunta central:\n\n¿Presentarme es solo decir mi nombre?\n\nPrimer momento · Saludos en LSA\n\nLa docente proyecta o muestra algunos saludos en LSA.\n\nSaludos posibles:\n\nhola,\nchau,\nbuen día,\nbuenas tardes,\nbuenas noches,\ngracias.\n\nDespués de mirar, se pregunta:\n\n¿Qué hicieron las manos?\n¿La cara también comunicaba?\n¿El cuerpo acompañaba?\n¿Qué saludo fue más fácil de copiar?\n¿Cuál necesitó mirar más despacio?\n¿Qué cambia cuando saludamos sin voz?\n\nEl grupo practica algunos saludos de manera pausada.\n\nLa docente puede recordar:\n\n“No copiamos apurados. Primero miramos con atención, después probamos.”\n\nPuerta 3 · Miramos con lupa las señas\n\nLa docente invita a observar con precisión:\n\n¿La mano está abierta o cerrada?\n¿La seña se hace cerca de la cara, del cuerpo o en el espacio?\n¿Se mueve una mano o las dos?\n¿La expresión de la cara ayuda?\n¿Qué pasa si cambio el movimiento?\n\nSe recupera la idea de que una seña no es cualquier gesto: tiene forma, movimiento, ubicación y sentido.\n\nSegundo momento · Colores en LSA\n\nLa docente presenta algunos colores en LSA.\n\nColores sugeridos:\n\nrojo,\nazul,\namarillo,\nverde,\nblanco,\nnegro.\n\nSe puede trabajar con objetos del aula o tarjetas de colores.\n\nPreguntas posibles:\n\n¿Qué color vemos acá?\n¿Cómo se dice con las manos?\n¿Qué seña fue más fácil?\n¿Qué seña fue más difícil?\n¿Un color se puede decir sin usar la voz?\n¿El color está en el objeto, en la mirada o en cómo lo nombramos?\n\nSe pueden practicar frases simples:\n\nHola.\nMi color favorito es…\nMe gusta el color…\n\nNo hace falta que armen oraciones completas en LSA; la intención es acercarse a algunas señas y pensar la comunicación.\n\nTercer momento · Alfabeto dactilológico\n\nLa docente presenta el alfabeto dactilológico como una forma de representar letras con las manos.\n\nAclara:\n\n“El alfabeto dactilológico no es toda la LSA. Es una herramienta que permite representar letras, por ejemplo para decir nombres.”\n\nSe muestra una lámina o imagen del alfabeto.\n\nActividad:\n\nCada estudiante busca la inicial de su nombre.\nLuego intenta hacerla con la mano.\nQuien se anime puede intentar deletrear su nombre completo o una parte.\nTambién pueden practicar nombres cortos o iniciales de compañeros.\n\nPreguntas posibles:\n\n¿Qué letra representa mi nombre?\n¿Mi mano tuvo que aprender una forma nueva?\n¿Es fácil decir mi nombre con las manos?\n¿Qué siento cuando otro intenta decir mi nombre bien?\n¿Mi nombre me presenta?\n\nCuarto momento · Presentarnos en LSA\n\nLa docente propone una presentación sencilla.\n\nModelo posible:\n\nSaludo en LSA.\nInicial o nombre con alfabeto dactilológico.\nColor favorito, si el grupo puede.\nCierre con “gracias” o “chau”.\n\nCada estudiante puede pasar o hacerlo desde su lugar, según el clima del grupo.\n\nConsigna:\n\n“Nos presentamos con respeto. No hace falta que salga perfecto. Lo importante es intentar comunicarnos de una manera nueva.”\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente recuerda que mirar a alguien que se presenta también es una forma de escucha.\n\nPreguntas posibles:\n\n¿Qué necesita alguien cuando se presenta?\n¿Qué pasa si los demás se ríen?\n¿Qué pasa si los demás miran con atención?\n¿Cómo me siento cuando alguien intenta aprender mi nombre?\n¿Aprender el nombre de otro puede ser una forma de cuidado?\n\nPuerta 5 · Transformamos\n\nLa docente recupera:\n\n“Hoy transformamos la idea de hablar. Descubrimos que no siempre necesitamos voz para saludar, nombrar, decir un color o presentarnos.”\n\nPreguntas posibles:\n\n¿Qué cambió en nuestra forma de pensar la comunicación?\n¿Todas las formas de decir necesitan sonido?\n¿Qué pasa cuando aprendemos una forma de comunicación que otra persona necesita?\n¿Las manos también pueden abrir una puerta?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "Se repasan algunos saludos, colores e iniciales.\n\nLa docente recupera:\n\n“Hoy nos acercamos a la LSA con respeto. Aprendimos que las manos también pueden saludar, nombrar y presentar algo de nosotros.”\n\nPregunta para seguir pensando:\n¿Qué cambia cuando alguien aprende a decir mi nombre de otra manera?",
        "recursos": "Videos de saludos en LSA.\nVideos o imágenes de colores en LSA.\nLámina del alfabeto dactilológico.\nProyector.\nTarjetas de colores.\nAyudante Sócrates.\nEspacio en ronda.",
        "observacion": "En tercero esta clase puede avanzar más que en primero porque el grupo tiene mayor autonomía para observar, comparar, practicar y presentarse. El foco no está en memorizar perfectamente, sino en pensar la comunicación, el nombre y el reconocimiento del otro."
      },
      "primero": {
        "title": "Colores con las manos: seguimos aprendiendo LSA",
        "date": "martes 7 de julio",
        "status": "realizada",
        "tags": [
          "primero",
          "LSA",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
          "Sócrates",
          "respiración de la mano",
          "realizada"
        ],
        "eje": "continuar el acercamiento a la LSA a través de colores, saludos y nombres",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
        "recurso": "colores en LSA, saludos aprendidos y alfabeto dactilológico",
        "proposito": "Continuar el recorrido iniciado la semana anterior, repasando saludos e iniciales del nombre y sumando algunos colores en LSA. Explorar cómo una seña puede nombrar algo que vemos y cómo las manos también pueden decir colores.",
        "inicio": "La docente invita al grupo a sentarse en ronda o mirando hacia el proyector.\n\nSe realiza la respiración de la mano:\n\nSubimos por un dedo inhalando.\nBajamos exhalando.\nSeguimos dedo por dedo.\nPreparamos las manos para saludar, nombrar y mirar.\n\nLuego se recupera la clase anterior:\n\n¿Qué saludos aprendimos?\n¿Se puede decir “hola” sin voz?\n¿Qué letras buscamos con las manos?\n¿Alguien recuerda la inicial de su nombre?\n\nLa docente puede invitar a mostrar, de manera voluntaria, un saludo o una inicial.\n\nFrase marco\n\nLa docente vuelve a presentar la frase marco, de forma sencilla:\n\n“No estamos aprendiendo toda la Lengua de Señas Argentina. Nos estamos acercando con respeto a algunos saludos, colores y letras para pensar cómo las manos también pueden comunicar, nombrar y hacer lugar.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente anticipa:\n\n“Hoy vamos a seguir saludando con las manos y vamos a aprender algunos colores en LSA.”\n\nPregunta central:\n\n¿Un color se puede decir con las manos?\n\nPrimer momento · Repaso de saludos\n\nSe repasan algunos saludos trabajados:\n\nhola,\nchau,\nbuen día,\ngracias.\n\nLa docente puede proponer:\n\nSaludamos todos juntos.\nSaludamos en silencio.\nSaludamos a un compañero desde el lugar.\nSaludamos y miramos si el otro nos vio.\n\nPreguntas posibles:\n\n¿Cómo sabemos que el saludo llegó?\n¿La mirada ayuda al saludo?\n¿Qué pasa si saludo y el otro no me mira?\n¿Saludar también es esperar al otro?\n\nSegundo momento · Repaso de iniciales\n\nLa docente muestra nuevamente el alfabeto dactilológico.\n\nCada niño puede buscar o recordar la inicial de su nombre.\n\nConsigna:\n\n“Muestro mi inicial con la mano. Los demás miran con respeto.”\n\nNo es necesario que todos la hagan perfectamente. Se puede acompañar uno por uno o por pequeños grupos.\n\nPreguntas posibles:\n\n¿Tu mano se acordaba?\n¿Qué letra era?\n¿Qué pasa cuando otro reconoce tu inicial?\n¿El nombre también puede saludarnos?\n\nTercer momento · Colores en LSA\n\nLa docente presenta pocos colores para empezar.\n\nColores sugeridos:\n\nrojo,\nazul,\namarillo,\nverde.\n\nSi el grupo responde bien, se pueden sumar:\n\nblanco,\nnegro.\n\nSe puede usar un video breve o imágenes.\n\nDespués de cada color, se practica con calma.\n\nLa docente puede mostrar objetos del aula:\n\n¿Qué color tiene esta cartuchera?\n¿Qué color tiene esta hoja?\n¿Qué color tiene este lápiz?\n¿Podemos decir ese color con las manos?\n\nPuerta 3 · Miramos con lupa los colores\n\nLa docente invita a observar:\n\n¿La seña del color se hace con una mano o con dos?\n¿La mano se mueve?\n¿Dónde empieza?\n¿Dónde termina?\n¿Fue fácil copiarla?\n¿Qué color recordamos mejor?\n\nTambién se puede mirar el entorno:\n\n¿Qué colores vemos en el aula?\n¿Qué colores aparecen en nuestra ropa?\n¿Todos vemos el mismo color?\n¿Un color puede tener muchas formas de nombrarse?\n\nActividad · Mi color elegido\n\nCada niño elige un color.\n\nPuede ser:\n\nsu color favorito,\nun color que tenga puesto,\nun color que ve en el aula,\nun color de una tarjeta.\n\nLuego intenta mostrar la seña de ese color.\n\nSi se quiere, puede combinar:\n\nsaludo + inicial + color.\n\nEjemplo de secuencia simple:\n\nHola.\nMi inicial.\nColor elegido.\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente recuerda que en esta clase mirar con atención es una forma de escuchar.\n\nPreguntas posibles:\n\n¿Qué necesita un compañero cuando está probando una seña nueva?\n¿Qué hacemos si se equivoca?\n¿Podemos ayudar sin reírnos?\n¿Por qué hace falta paciencia para aprender otra forma de comunicarse?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "Se repasan algunos saludos, algunas iniciales y dos o tres colores.\n\nLa docente recupera:\n\n“Hoy aprendimos que las manos también pueden decir colores. También seguimos pensando que comunicarnos no es solo hablar: es mirar, esperar y hacer lugar.”\n\nPregunta para seguir pensando:\n¿Qué color me gustaría poder decir con las manos?",
        "recursos": "Videos de colores en LSA.\nVideos de saludos en LSA, si se desea repasar.\nLámina del alfabeto dactilológico.\nTarjetas u objetos de colores.\nProyector.\nAyudante Sócrates.\nEspacio en ronda.",
        "observacion": "En primero conviene avanzar de a poco: pocos colores, mucho repaso y práctica breve. Es importante sostener la alegría de decir el nombre o la inicial, porque el reconocimiento personal vuelve más significativa la experiencia."
      },
      "segundo": {
        "title": "Sin clase por feriado nacional",
        "date": "jueves 9 de julio",
        "status": "sin clase",
        "tags": [
          "segundo",
          "LSA",
          "sin clase"
        ],
        "eje": "",
        "ayudante": "",
        "respiracion": "",
        "puertas": "",
        "recurso": "",
        "proposito": "",
        "inicio": "",
        "desarrollo": "Mensaje del mosaico\n\nNo se realiza clase por feriado nacional.\n\nLa continuidad del trabajo con LSA se retoma en la semana siguiente.\n\nClase siguiente prevista:\nRepaso de saludos, colores y alfabeto dactilológico. Juego “Veo veo” en LSA y cierre del recorrido.\n\nObservación de continuidad:\nComo segundo cuenta con una clase menos en esta parte final del recorrido, la próxima clase integra repaso y juego de cierre en una misma propuesta.",
        "preguntas": [],
        "cierre": "",
        "recursos": "",
        "observacion": "No se realiza clase por feriado nacional del 9 de julio. La propuesta se retoma en la semana siguiente."
      }
    }
  },
  {
    "id": 15,
    "title": "Cierre: veo veo en LSA, nombres y formas de comunicar",
    "dates": "13, 14 y 16 de julio",
    "summary": "Cierre del recorrido con saludos, colores, nombres y comunicación respetuosa.",
    "theme": "LSA",
    "classes": {
      "tercero": {
        "title": "Repasamos, nos presentamos y jugamos Veo veo en LSA",
        "date": "lunes 13 de julio",
        "status": "cierre",
        "tags": [
          "tercero",
          "LSA",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Sócrates",
          "respiración de la mano",
          "realizada / cierre del recorrido"
        ],
        "eje": "integrar saludos, colores, nombres y formas de presentación en LSA, reflexionando sobre la comunicación y el reconocimiento del otro",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: saludos, colores, alfabeto dactilológico y juego Veo veo en LSA",
        "proposito": "Cerrar el recorrido de LSA retomando saludos, colores y alfabeto dactilológico. Proponer una instancia de presentación personal con las manos y un juego de Veo veo en LSA para pensar cómo la mirada, las manos y la atención también forman parte de la comunicación.",
        "inicio": "La docente invita al grupo a sentarse en ronda o mirando hacia el espacio de proyección.\n\nSe realiza la respiración de la mano:\n\nAbrimos una mano.\nCon un dedo de la otra mano recorremos cada dedo.\nInhalamos al subir.\nExhalamos al bajar.\nPreparamos las manos para saludar, nombrar, mirar y comunicar.\n\nLuego se recupera la clase anterior:\n\n¿Qué saludos en LSA recordamos?\n¿Qué colores aprendimos?\n¿Qué letras del alfabeto dactilológico practicamos?\n¿Alguien recuerda cómo hacer la inicial de su nombre?\n¿Qué significa presentarse?\n\nFrase marco\n\nLa docente retoma la frase marco:\n\n“No estamos aprendiendo toda la Lengua de Señas Argentina, porque una lengua es mucho más grande que unas pocas señas. Nos estamos acercando con respeto a algunos saludos, colores y letras para pensar cómo las manos también pueden comunicar, nombrar y hacer lugar.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente anticipa la clase:\n\nPrimero vamos a repasar saludos, colores y letras.\nDespués vamos a intentar presentarnos con las manos.\nLuego vamos a jugar Veo veo en LSA.\nAl final vamos a pensar qué cambió en nuestra forma de entender la comunicación.\n\nPregunta central:\n\n¿Todas las formas de decir necesitan voz?\n\nPrimer momento · Repaso de saludos\n\nSe repasan algunos saludos en LSA:\n\nhola,\nchau,\nbuen día,\nbuenas tardes,\nbuenas noches,\ngracias.\n\nLa docente puede proponer distintas formas de repaso:\n\nhacer la seña todos juntos,\nhacerla en silencio,\nhacerla mirando a un compañero,\nhacerla y esperar que el otro responda.\n\nPreguntas posibles:\n\n¿Cómo sabemos que el saludo llegó?\n¿Qué lugar tiene la mirada?\n¿La cara también comunica?\n¿Qué cambia cuando saludamos sin hablar?\n\nSegundo momento · Repaso de colores\n\nSe repasan los colores aprendidos:\n\nrojo,\nazul,\namarillo,\nverde,\nblanco,\nnegro.\n\nLa docente puede mostrar tarjetas u objetos del aula para que el grupo diga el color con las manos.\n\nPreguntas posibles:\n\n¿Qué color recordamos mejor?\n¿Qué color costó más?\n¿Qué seña necesitó mirar con más atención?\n¿Un color puede decirse sin voz?\n¿Qué pasa si no miro al otro mientras hace la seña?\n\nTercer momento · Nos presentamos con las manos\n\nLa docente propone una presentación breve.\n\nModelo posible:\n\nsaludo en LSA,\nnombre o inicial con alfabeto dactilológico,\ncolor favorito en LSA,\nsaludo de cierre.\n\nCada estudiante puede hacerlo desde su lugar o pasar al frente, según el clima del grupo.\n\nConsigna:\n\n“No buscamos que salga perfecto. Buscamos intentar comunicarnos de una manera nueva y mirar con respeto a quien se presenta.”\n\nPreguntas posibles:\n\n¿Presentarme es solo decir mi nombre?\n¿Qué más muestro cuando me presento?\n¿Qué siento cuando alguien mira mi presentación con atención?\n¿Qué pasa cuando alguien intenta aprender mi nombre?\n\nCuarto momento · Veo veo en LSA\n\nLa docente presenta el juego:\n\n“Vamos a jugar Veo veo, pero usando señas de colores.”\n\nDinámica posible:\n\nUn estudiante o la docente elige un objeto visible del aula.\nDice o señala: “Veo veo…”\nLuego realiza la seña del color en LSA.\nEl grupo mira alrededor y trata de adivinar qué objeto es.\nQuien adivina puede pasar a elegir otro objeto.\n\nEjemplo:\n\nVeo veo algo rojo.\nVeo veo algo azul.\nVeo veo algo verde.\n\nLa consigna es mirar con atención y esperar el turno para responder.\n\nPuerta 3 · Miramos con lupa\n\nLa docente recupera:\n\n“Para jugar en LSA necesitamos mirar con lupa: mirar la mano, el movimiento, el color y también el espacio.”\n\nPreguntas posibles:\n\n¿Qué fue más importante: mirar rápido o mirar bien?\n¿Qué detalles de la seña nos ayudaron?\n¿Qué pasó cuando no mirábamos?\n¿Mirar también puede ser una forma de escuchar?\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente plantea:\n\n“En esta clase escuchamos con los ojos y con la atención.”\n\nPreguntas posibles:\n\n¿Qué necesita una persona cuando se comunica de otra manera?\n¿Qué hacemos si no entendemos?\n¿Nos reímos o pedimos que repita?\n¿Cómo podemos acompañar a alguien que está aprendiendo?\n¿Cómo hacemos lugar a distintas formas de decir?\n\nPuerta 5 · Transformamos\n\nLa docente recupera el recorrido:\n\n“Empezamos pensando en saludos y gestos. Después pensamos en festejos y burlas. Ahora nos acercamos a la LSA para descubrir que las manos también pueden saludar, nombrar, decir colores y presentarnos.”\n\nPreguntas posibles:\n\n¿Qué cambió en nuestra idea de comunicación?\n¿Hablar es solamente usar la voz?\n¿Las manos también pueden abrir una puerta?\n¿Qué aprendimos sobre mirar al otro?\n¿Qué aprendimos sobre hacer lugar?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "Se propone una ronda final.\n\nCada estudiante puede completar una frase:\n\n“Hoy me llevo…”\n“Aprendí que las manos…”\n“Una seña que recuerdo es…”\n“Una forma de hacer lugar al otro es…”\n\nLa docente cierra:\n\n“Comunicar no es solamente hablar. También es mirar, esperar, intentar, repetir, cuidar y hacer lugar.”\n\nPregunta para seguir pensando:\n¿Cómo puedo hacer lugar a alguien que se comunica distinto a mí?",
        "recursos": "Videos o imágenes de saludos en LSA.\nTarjetas de colores.\nLámina del alfabeto dactilológico.\nProyector.\nObjetos del aula para jugar Veo veo.\nAyudante Sócrates.\nEspacio en ronda.",
        "observacion": "En tercero la clase funciona como cierre conceptual del recorrido: comunicación, gestos, nombres, cuidado, interpretación y reconocimiento. Es importante recuperar el vínculo con las clases mundialistas para mostrar continuidad entre gesto, festejo, saludo y lengua."
      },
      "primero": {
        "title": "Veo veo con las manos: saludos, colores y nombres",
        "date": "martes 14 de julio",
        "status": "cierre",
        "tags": [
          "primero",
          "LSA",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
          "Sócrates",
          "respiración de la mano",
          "realizada / cierre del recorrido"
        ],
        "eje": "repasar saludos, colores e iniciales en LSA a través del juego y la observación",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el coraz",
        "recurso": "juego Veo veo en LSA, saludos, colores e iniciales",
        "proposito": "Cerrar el recorrido de primero retomando de manera pausada los saludos, colores e iniciales trabajadas en LSA. Jugar Veo veo usando señas de colores y seguir pensando que las manos también pueden comunicar, nombrar y hacer lugar.",
        "inicio": "La docente invita al grupo a sentarse en ronda.\n\nSe realiza la respiración de la mano.\n\nLa docente guía:\n\nSubimos por un dedo inhalando.\nBajamos exhalando.\nSeguimos dedo por dedo.\nPreparamos las manos para saludar y jugar.\n\nLuego se pregunta:\n\n¿Qué saludos aprendimos con las manos?\n¿Qué colores recordamos?\n¿Alguien recuerda su inicial?\n¿Se puede decir algo sin voz?\n\nFrase marco\n\nLa docente retoma la frase marco en versión sencilla:\n\n“No aprendimos toda la Lengua de Señas Argentina. Nos acercamos con respeto a algunos saludos, colores y letras para pensar cómo las manos también pueden comunicar, nombrar y hacer lugar.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente anticipa:\n\n“Hoy vamos a repasar lo que aprendimos y después vamos a jugar Veo veo con colores en LSA.”\n\nPregunta central:\n\n¿Mirar también puede ser una forma de escuchar?\n\nPrimer momento · Repaso de saludos\n\nSe repasan pocos saludos:\n\nhola,\nchau,\nbuen día,\ngracias.\n\nLa docente puede proponer:\n\nsaludamos todos juntos,\nsaludamos a un compañero,\nsaludamos en silencio,\nsaludamos y esperamos que el otro responda.\n\nPreguntas posibles:\n\n¿Cómo sé que el otro me saludó?\n¿Qué hace la mano?\n¿Qué hace la mirada?\n¿Qué pasa si saludo y nadie me mira?\n\nSegundo momento · Repaso de iniciales\n\nLa docente muestra la lámina del alfabeto dactilológico.\n\nCada niño puede buscar o recordar la inicial de su nombre.\n\nConsigna:\n\n“Mostramos la inicial con las manos. Los demás miramos con respeto.”\n\nNo es necesario que todos pasen al frente. Se puede hacer desde el lugar.\n\nPreguntas posibles:\n\n¿Qué letra muestra tu mano?\n¿Es la primera letra de tu nombre?\n¿Cómo se siente decir una letra sin voz?\n¿Qué pasa cuando otro reconoce mi inicial?\n\nTercer momento · Repaso de colores\n\nSe repasan algunos colores:\n\nrojo,\nazul,\namarillo,\nverde.\n\nSi el grupo puede, se suman:\n\nblanco,\nnegro.\n\nLa docente puede mostrar tarjetas u objetos del aula.\n\nPreguntas posibles:\n\n¿Qué color es?\n¿Cómo lo decimos con las manos?\n¿Qué color recordamos mejor?\n¿Qué color necesitamos mirar otra vez?\n\nCuarto momento · Juego Veo veo en LSA\n\nLa docente explica:\n\n“Vamos a jugar Veo veo, pero el color lo vamos a decir con las manos.”\n\nDinámica simple:\n\nLa docente elige un objeto del aula.\nHace la seña del color.\nLos niños miran y buscan algo de ese color.\nResponden levantando la mano o señalando.\nDespués puede pasar algún niño a elegir un objeto y mostrar el color.\n\nEjemplos:\n\nVeo veo algo rojo.\nVeo veo algo azul.\nVeo veo algo verde.\n\nLa docente sostiene el ritmo para que el juego no se vuelva desordenado.\n\nPuerta 3 · Miramos con lupa\n\nSe conversa:\n\n¿Qué tuvimos que mirar para jugar?\n¿Miramos la mano?\n¿Miramos el aula?\n¿Miramos los colores?\n¿Qué pasaba si nos apurábamos?\n\nLa docente recupera:\n\n“Para entender una seña necesitamos mirar con atención.”\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente plantea:\n\n“Hoy escuchamos también con los ojos.”\n\nPreguntas posibles:\n\n¿Qué hacemos si un compañero se equivoca?\n¿Nos reímos o lo ayudamos?\n¿Qué necesita alguien cuando está aprendiendo?\n¿Cómo hacemos lugar a una forma nueva de comunicarnos?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "Se realiza una ronda breve.\n\nCada niño puede elegir:\n\nun saludo,\nuna inicial,\nun color.\n\nLa docente recupera:\n\n“Hoy jugamos y repasamos. Las manos pueden saludar, decir colores y mostrar letras de nuestro nombre.”\n\nPregunta para seguir pensando:\n¿Qué puedo decir con mis manos?",
        "recursos": "Lámina del alfabeto dactilológico.\nTarjetas u objetos de colores.\nVideos breves de saludos o colores, si se desea repasar.\nProyector.\nAyudante Sócrates.\nEspacio en ronda.",
        "observacion": "En primero el cierre debe ser lúdico, breve y repetitivo. El objetivo principal es que puedan reconocer que las manos comunican y que mirar con atención también es una forma de escuchar."
      },
      "segundo": {
        "title": "Repaso y Veo veo en LSA: cierre del recorrido",
        "date": "jueves 16 de julio",
        "status": "cierre",
        "tags": [
          "segundo",
          "LSA",
          "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
          "Sócrates",
          "respiración de la mano",
          "realizada / cierre del recorrido"
        ],
        "eje": "integrar saludos, colores, nombres y juego en LSA como forma de comunicación y reconocimiento",
        "ayudante": "Sócrates",
        "respiracion": "respiración de la mano",
        "puertas": "Puerta 1: Nos disponemos · Puerta 2: Recibimos la propuesta · Puerta 3: Miramos con lupa · Puerta 4: Escuchamos con el corazón · Puerta 5: Transforma",
        "recurso": "al: repaso de LSA y juego Veo veo",
        "proposito": "Cerrar el recorrido de segundo retomando lo trabajado en la clase anterior: saludos, colores y alfabeto dactilológico. Integrar esos aprendizajes en un juego de Veo veo en LSA y en una reflexión sobre las distintas formas de comunicación.",
        "inicio": "La docente invita al grupo a sentarse en ronda o mirando hacia el proyector.\n\nSe realiza la respiración de la mano para preparar la atención.\n\nLuego se recupera:\n\n¿Qué saludos aprendimos?\n¿Qué colores vimos?\n¿Qué es el alfabeto dactilológico?\n¿Para qué nos puede servir?\n¿Alguien recuerda su inicial?\n\nFrase marco\n\nLa docente retoma la frase marco:\n\n“No aprendimos toda la Lengua de Señas Argentina, porque una lengua es mucho más grande que unas pocas señas. Nos acercamos con respeto a algunos saludos, colores y letras para pensar cómo las manos también pueden comunicar, nombrar y hacer lugar.”\n\nPuerta 2 · Recibimos la propuesta\n\nLa docente anticipa:\n\n“Hoy vamos a repasar y después vamos a jugar Veo veo usando LSA. Al final vamos a pensar qué aprendimos sobre comunicarnos.”\n\nPregunta central:\n\n¿Todas las formas de decir necesitan voz?\n\nPrimer momento · Repaso de saludos\n\nSe repasan saludos:\n\nhola,\nchau,\nbuen día,\nbuenas tardes,\nbuenas noches,\ngracias.\n\nLa docente puede hacer un juego rápido:\n\nyo hago una seña y ustedes dicen qué saludo es,\nyo digo el saludo y ustedes hacen la seña,\nun compañero muestra y los demás observan.\n\nPreguntas posibles:\n\n¿Qué saludo recordamos mejor?\n¿Cuál necesitó más práctica?\n¿Qué parte del cuerpo ayuda además de la mano?\n\nSegundo momento · Repaso de colores\n\nSe repasan colores:\n\nrojo,\nazul,\namarillo,\nverde,\nblanco,\nnegro.\n\nSe usan tarjetas u objetos del aula.\n\nLa docente puede preguntar:\n\n¿Qué color tiene este objeto?\n¿Cómo lo digo con las manos?\n¿Alguien ve otro objeto del mismo color?\n¿Puede un color decirse sin voz?\n\nTercer momento · Repaso del alfabeto dactilológico\n\nLa docente muestra nuevamente la lámina del alfabeto.\n\nActividad:\n\nCada estudiante busca su inicial.\nQuien se anime intenta hacer dos o tres letras de su nombre.\nAlgunos pueden presentarse con saludo + inicial o nombre breve.\n\nPreguntas posibles:\n\n¿Para qué sirve poder decir mi nombre?\n¿Qué siento cuando alguien aprende mi nombre?\n¿Nombrar bien a alguien puede ser una forma de respeto?\n¿Presentarme es solo decir mi nombre?\n\nCuarto momento · Veo veo en LSA\n\nLa docente presenta el juego:\n\n“Vamos a jugar Veo veo usando las señas de colores.”\n\nDinámica:\n\nUn estudiante o la docente elige un objeto visible.\nRealiza la seña del color en LSA.\nEl grupo observa y busca objetos de ese color.\nQuienes quieran responder deben esperar el turno.\nDespués se verifica si el objeto elegido coincide.\n\nVariantes:\n\nVeo veo algo rojo.\nVeo veo algo azul y pequeño.\nVeo veo algo verde cerca de la ventana.\nVeo veo algo blanco que usamos para trabajar.\n\nSi el grupo puede, se puede sumar una pista con inicial dactilológica del objeto, aunque no es necesario.\n\nPuerta 3 · Miramos con lupa\n\nLa docente recupera:\n\n“Para jugar necesitamos mirar con mucha atención: mirar la seña, mirar el aula, mirar los colores y pensar antes de responder.”\n\nPreguntas posibles:\n\n¿Qué tuvimos que observar?\n¿Qué pasaba cuando no mirábamos la seña?\n¿Mirar puede ser parecido a escuchar?\n¿Qué detalles importan en una seña?\n\nPuerta 4 · Escuchamos con el corazón\n\nLa docente pregunta:\n\n¿Qué necesita una persona cuando se comunica de una forma que no conocemos?\n¿Qué hacemos si no entendemos?\n¿Podemos pedir que repita con respeto?\n¿Qué hacemos si alguien se equivoca?\n¿Cómo acompañamos a alguien que está aprendiendo?\n\nSe recupera la idea de paciencia y cuidado.\n\nPuerta 5 · Transformamos\n\nLa docente invita a pensar el recorrido:\n\n“Transformamos nuestra idea de comunicación. Al principio podíamos pensar que comunicarse era hablar con la voz. Ahora vimos que también podemos saludar, nombrar y jugar usando las manos, la mirada y el cuerpo.”\n\nPreguntas posibles:\n\n¿Qué cambió en nuestra forma de pensar?\n¿Qué aprendimos sobre las manos?\n¿Qué aprendimos sobre mirar?\n¿Qué aprendimos sobre hacer lugar a otros?\n¿Qué puerta abrió esta experiencia?",
        "desarrollo": "",
        "preguntas": [],
        "cierre": "Se realiza una ronda final.\n\nCada estudiante puede completar una frase:\n\n“Una seña que recuerdo es…”\n“Aprendí que comunicar…”\n“Me gustó cuando…”\n“Para hacer lugar a otro puedo…”\n\nLa docente cierra:\n\n“Comunicar no es solo decir palabras. También es mirar, esperar, intentar, nombrar con cuidado y respetar la forma en que otro puede expresarse.”\n\nPregunta para seguir pensando:\n¿Cómo puedo hacer lugar a alguien que se comunica de otra manera?",
        "recursos": "Videos o imágenes de saludos y colores en LSA.\nLámina del alfabeto dactilológico.\nTarjetas u objetos de colores.\nProyector.\nAyudante Sócrates.\nEspacio en ronda.",
        "observacion": "En segundo esta clase integra y cierra el recorrido, ya que la semana anterior no hubo encuentro por feriado. Conviene priorizar el repaso, el juego y la reflexión final sobre comunicación e inclusión."
      }
    }
  }
];

const resourcesData = [
  {
    "id": "obras",
    "name": "Obras de arte",
    "description": "Imágenes usadas como disparadores para mirar con lupa, conversar y abrir preguntas.",
    "image": "img/recursos/obras-de-arte/dali-cisnes-reflejando-elefantes.jpg",
    "status": "Disponible",
    "items": [
      {
        "title": "Arcimboldo - El hortelano invertido",
        "image": "img/recursos/obras-de-arte/arcimboldo-el-hortelano-invertido.jpg",
        "description": "Obra reversible de Arcimboldo. Recurso usado para trabajar la Puerta 3: Miramos con lupa."
      },
      {
        "title": "Arcimboldo - Obra reversible",
        "image": "img/recursos/obras-de-arte/arcimboldo-reversible .jpg",
        "description": "Imagen disparadora para observar detalles, girar la mirada y conversar."
      },
      {
        "title": "Dalí - Cisnes reflejando elefantes",
        "image": "img/recursos/obras-de-arte/dali-cisnes-reflejando-elefantes.jpg",
        "description": "Imagen para mirar más de una vez y abrir preguntas sobre percepción."
      }
    ],
    "emptyMessage": "Se irán agregando más obras de arte."
  },
  {
    "id": "videos",
    "name": "Videos",
    "description": "Aquí se organizarán videos disparadores, saludos en LSA, colores en LSA y juegos de adivinar festejos.",
    "status": "En construcción",
    "items": []
  },
  {
    "id": "fichas",
    "name": "Fichas imprimibles",
    "description": "Aquí se podrán guardar tarjetas, semáforos, registros y materiales para imprimir.",
    "status": "En construcción",
    "items": []
  },
  {
    "id": "canciones",
    "name": "Canciones",
    "description": "Aquí se organizarán canciones para entrar, moverse o cerrar.",
    "status": "En construcción",
    "items": []
  },
  {
    "id": "LSA",
    "name": "LSA",
    "description": "Aquí se reunirán saludos, colores, alfabeto dactilológico y materiales para el Veo veo en LSA.",
    "status": "En construcción",
    "items": []
  },
  {
    "id": "posturas",
    "name": "Posturas y respiraciones",
    "description": "Aquí se organizarán tarjetas de respiraciones, posturas y secuencias corporales.",
    "status": "En construcción",
    "items": []
  },
  {
    "id": "juegos",
    "name": "Materiales para juegos",
    "description": "Aquí se guardarán dinámicas de ronda, construcción, observación y movimiento.",
    "status": "En construcción",
    "items": []
  }
];
