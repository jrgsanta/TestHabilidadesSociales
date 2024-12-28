/**************************************
 * Ejemplo de JSON (abreviado).       *
 * Inserta aquí tu JSON completo, o   *
 * cárgalo de forma dinámica con fetch *
 **************************************/

const preguntasJSON = {
    "Habilidades Sociales - Unidad 1": [
      {
        "numero_pregunta": 1,
        "enunciado": "¿Cuál de los siguientes NO es un componente de las habilidades sociales?",
        "opciones": {
          "a": "Componente Espiritual",
          "b": "Componente Motor",
          "c": "Componente Cognitivo",
          "d": "Componente Emocional"
        },
        "respuesta_correcta": "a"
      },
      {
        "numero_pregunta": 2,
        "enunciado": "¿Qué autor desarrolló la teoría de las Inteligencias Múltiples?",
        "opciones": {
          "a": "Daniel Goleman",
          "b": "Alfred Binet",
          "c": "Howard Gardner",
          "d": "Albert Ellis"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 3,
        "enunciado": "La inteligencia intrapersonal se refiere a:",
        "opciones": {
          "a": "La capacidad de comprender y relacionarse con los demás",
          "b": "La capacidad de comprenderse y conocerse a uno mismo",
          "c": "La capacidad de utilizar el lenguaje de manera efectiva",
          "d": "La capacidad de resolver problemas matemáticos"
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 4,
        "enunciado": "¿Qué tipo de inteligencia se relaciona con la empatía y la capacidad de establecer relaciones?",
        "opciones": {
          "a": "Inteligencia lingüística",
          "b": "Inteligencia espacial",
          "c": "Inteligencia interpersonal",
          "d": "Inteligencia intrapersonal"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 5,
        "enunciado": "Un ejemplo de pensamiento irracional es:",
        "opciones": {
          "a": "\"Debo esforzarme para conseguir mis objetivos\"",
          "b": "\"Es importante aprender de los errores\"",
          "c": "\"Si no le caigo bien a todo el mundo, soy un fracaso\"",
          "d": "\"Puedo afrontar los desafíos con confianza\""
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 6,
        "enunciado": "¿Cuál de las siguientes opciones NO es una distorsión cognitiva?",
        "opciones": {
          "a": "Sobregeneralización",
          "b": "Pensamiento polarizado",
          "c": "Filtro mental",
          "d": "Pensamiento positivo"
        },
        "respuesta_correcta": "d"
      },
      {
        "numero_pregunta": 7,
        "enunciado": "La autorrealización se refiere a:",
        "opciones": {
          "a": "El proceso de desarrollo y crecimiento personal",
          "b": "La capacidad de controlar las emociones",
          "c": "La valoración que tenemos de nosotros mismos",
          "d": "La capacidad de resolver conflictos"
        },
        "respuesta_correcta": "a"
      },
      {
        "numero_pregunta": 8,
        "enunciado": "El coeficiente intelectual (CI) se considera una medida:",
        "opciones": {
          "a": "Completa de la inteligencia humana",
          "b": "General de la capacidad cognitiva",
          "c": "Exclusiva de las habilidades sociales",
          "d": "Irrelevante para el desarrollo personal"
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 9,
        "enunciado": "¿Cuál de los siguientes autores es conocido por la terapia racional emotiva conductual (TREC)?",
        "opciones": {
          "a": "Howard Gardner",
          "b": "Albert Ellis",
          "c": "Daniel Goleman",
          "d": "Aaron Beck"
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 10,
        "enunciado": "La teoría del CI ha sido criticada por:",
        "opciones": {
          "a": "Su enfoque limitado en la medición de la inteligencia",
          "b": "Su capacidad para predecir el éxito académico",
          "c": "Su énfasis en la importancia de las habilidades sociales",
          "d": "Su reconocimiento de la diversidad de las habilidades humanas"
        },
        "respuesta_correcta": "a"
      }
    ],
    "Habilidades Sociales - Unidad 2": [
      {
        "numero_pregunta": 11,
        "enunciado": "¿Cuál de los siguientes NO es un elemento de la comunicación?",
        "opciones": {
          "a": "Emisor",
          "b": "Receptor",
          "c": "Mensaje",
          "d": "Intención"
        },
        "respuesta_correcta": "d"
      },
      {
        "numero_pregunta": 12,
        "enunciado": "La comunicación no verbal incluye:",
        "opciones": {
          "a": "El lenguaje escrito",
          "b": "Las palabras habladas",
          "c": "La expresión facial",
          "d": "El lenguaje de señas"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 13,
        "enunciado": "El paralenguaje se refiere a:",
        "opciones": {
          "a": "Los aspectos no semánticos del lenguaje",
          "b": "El estudio del espacio personal",
          "c": "El lenguaje corporal",
          "d": "La comunicación a través de la tecnología"
        },
        "respuesta_correcta": "a"
      },
      {
        "numero_pregunta": 14,
        "enunciado": "La kinesia estudia:",
        "opciones": {
          "a": "El volumen y tono de voz",
          "b": "Los gestos y movimientos del cuerpo",
          "c": "La distancia interpersonal",
          "d": "La apariencia personal"
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 15,
        "enunciado": "¿Cuál de las siguientes zonas de la proxémica se utiliza para interacciones con amigos y familiares?",
        "opciones": {
          "a": "Zona pública",
          "b": "Zona social",
          "c": "Zona personal",
          "d": "Zona íntima"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 16,
        "enunciado": "¿Cuál de los siguientes estilos de comunicación se caracteriza por la defensa de los propios derechos sin violar los de los demás?",
        "opciones": {
          "a": "Estilo asertivo",
          "b": "Estilo pasivo",
          "c": "Estilo agresivo",
          "d": "Estilo manipulador"
        },
        "respuesta_correcta": "a"
      },
      {
        "numero_pregunta": 17,
        "enunciado": "Una persona con un estilo de comunicación pasivo tiende a:",
        "opciones": {
          "a": "Evitar el conflicto",
          "b": "Expresar sus opiniones con seguridad",
          "c": "Interrumpir a los demás",
          "d": "Imponer su voluntad"
        },
        "respuesta_correcta": "a"
      },
      {
        "numero_pregunta": 18,
        "enunciado": "¿Cuál de las siguientes opciones NO es una técnica para mejorar la asertividad?",
        "opciones": {
          "a": "Disco rayado",
          "b": "Banco de niebla",
          "c": "Aplazamiento",
          "d": "Confrontación asertiva"
        },
        "respuesta_correcta": "d"
      },
      {
        "numero_pregunta": 19,
        "enunciado": "¿Cuál de las siguientes barreras de comunicación se relaciona con el uso incorrecto de las palabras?",
        "opciones": {
          "a": "Barreras psicológicas",
          "b": "Barreras fisiológicas",
          "c": "Barreras semánticas",
          "d": "Barreras físicas"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 20,
        "enunciado": "La escucha activa implica:",
        "opciones": {
          "a": "Oír sin prestar atención",
          "b": "Interrumpir al hablante",
          "c": "Prestar atención y comprender el mensaje del emisor",
          "d": "Formular juicios sobre lo que se dice"
        },
        "respuesta_correcta": "c"
      }
    ],
    "Habilidades Sociales - Unidad 3": [
      {
        "numero_pregunta": 21,
        "enunciado": "¿Cuál de las siguientes NO es una característica de un grupo?",
        "opciones": {
          "a": "Estructura de relaciones sociales",
          "b": "Objetivos comunes",
          "c": "Individualismo",
          "d": "Normas"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 22,
        "enunciado": "Un grupo primario se caracteriza por:",
        "opciones": {
          "a": "Relaciones formales y superficiales",
          "b": "Relaciones personales cercanas e íntimas",
          "c": "Un gran número de participantes",
          "d": "Objetivos a corto plazo"
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 23,
        "enunciado": "¿Qué tipo de grupo se forma con el propósito de lograr una tarea específica?",
        "opciones": {
          "a": "Grupo de apoyo",
          "b": "Grupo de interés",
          "c": "Grupo de trabajo",
          "d": "Grupo informal"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 24,
        "enunciado": "¿Cuál de los siguientes factores NO influye en la dinámica de un grupo?",
        "opciones": {
          "a": "Ambiente",
          "b": "Tamaño",
          "c": "Ubicación geográfica",
          "d": "Normas"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 25,
        "enunciado": "La cohesión en un grupo se refiere a:",
        "opciones": {
          "a": "La competencia entre los miembros",
          "b": "La falta de comunicación",
          "c": "El grado de unión y solidaridad",
          "d": "La jerarquía de poder"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 26,
        "enunciado": "Un líder autocrático se caracteriza por:",
        "opciones": {
          "a": "Fomentar la participación de los miembros",
          "b": "Buscar el consenso en la toma de decisiones",
          "c": "Tomar decisiones de manera independiente",
          "d": "Delegar responsabilidades"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 27,
        "enunciado": "¿Cuál de las siguientes fases de un grupo se caracteriza por la aparición de tensiones y conflictos?",
        "opciones": {
          "a": "Fase de tormenta",
          "b": "Fase de formación",
          "c": "Fase de normatividad",
          "d": "Fase de desempeño"
        },
        "respuesta_correcta": "a"
      },
      {
        "numero_pregunta": 28,
        "enunciado": "En la fase de desempeño de un grupo:",
        "opciones": {
          "a": "Se establecen las normas y roles",
          "b": "Surgen conflictos y desacuerdos",
          "c": "Se logra un alto nivel de productividad",
          "d": "El grupo se disuelve"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 29,
        "enunciado": "¿Cuál de las siguientes técnicas de dinamización de grupos se utiliza para generar ideas?",
        "opciones": {
          "a": "Phillips 66",
          "b": "Lluvia de ideas",
          "c": "Juego de roles",
          "d": "Comisión"
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 30,
        "enunciado": "El juego de roles es una técnica que se utiliza para:",
        "opciones": {
          "a": "Fomentar la competencia entre los miembros",
          "b": "Comprender diferentes perspectivas",
          "c": "Resolver problemas matemáticos",
          "d": "Tomar decisiones de manera autocrática"
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 31,
        "enunciado": "¿Cuál de las siguientes opciones describe la función de un/a integrador/a social en un grupo?",
        "opciones": {
          "a": "Fomentar la interacción, promover la colaboración y resolver conflictos.",
          "b": "Dictar normas estrictas y controlar el comportamiento de los miembros.",
          "c": "Tomar decisiones de manera unilateral sin consultar al grupo.",
          "d": "Observar pasivamente la dinámica del grupo sin intervenir."
        },
        "respuesta_correcta": "a"
      },
      {
        "numero_pregunta": 32,
        "enunciado": "¿Cuál de las siguientes es una característica distintiva de un grupo en comparación con un agrupamiento?",
        "opciones": {
          "a": "Proximidad física de las personas.",
          "b": "Estructura social definida e interacción significativa entre los miembros.",
          "c": "Presencia de individuos con diferentes intereses y objetivos.",
          "d": "Ausencia de normas o roles específicos."
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 33,
        "enunciado": "¿Cuál es la diferencia entre un grupo primario y un grupo secundario?",
        "opciones": {
          "a": "Los grupos primarios son más grandes que los grupos secundarios.",
          "b": "Los grupos secundarios se forman con un propósito específico, mientras que los grupos primarios no.",
          "c": "Los grupos primarios se caracterizan por relaciones personales cercanas, mientras que los grupos secundarios son más formales e impersonales.",
          "d": "Los grupos secundarios son más duraderos que los grupos primarios."
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 34,
        "enunciado": "¿Cuál de las siguientes NO es una fase del modelo de Tuckman para el desarrollo de grupos?",
        "opciones": {
          "a": "Formación",
          "b": "Tormenta",
          "c": "Normatividad",
          "d": "Integración"
        },
        "respuesta_correcta": "d"
      },
      {
        "numero_pregunta": 35,
        "enunciado": "¿Cuál es el objetivo principal de la fase de resolución en el desarrollo de un grupo?",
        "opciones": {
          "a": "Establecer las normas y roles del grupo.",
          "b": "Resolver los conflictos y problemas identificados en la fase anterior.",
          "c": "Lograr un alto nivel de productividad en las tareas del grupo.",
          "d": "Celebrar los logros del grupo y prepararse para la finalización."
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 36,
        "enunciado": "¿Cuál de las siguientes técnicas grupales se utiliza para fortalecer la confianza entre los miembros?",
        "opciones": {
          "a": "Debate.",
          "b": "Círculo de confianza.",
          "c": "Lluvia de ideas.",
          "d": "Phillips 66."
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 37,
        "enunciado": "¿Cuál es la principal diferencia entre el trabajo cooperativo y el trabajo colaborativo?",
        "opciones": {
          "a": "El trabajo cooperativo se enfoca en la competencia entre los miembros, mientras que el trabajo colaborativo promueve la colaboración.",
          "b": "El trabajo cooperativo se basa en la división de tareas, mientras que el trabajo colaborativo implica una participación activa y constante en todas las etapas del proyecto.",
          "c": "El trabajo cooperativo es más efectivo para tareas simples, mientras que el trabajo colaborativo es adecuado para tareas complejas.",
          "d": "El trabajo cooperativo se realiza en grupos pequeños, mientras que el trabajo colaborativo se lleva a cabo en grupos grandes."
        },
        "respuesta_correcta": "b"
      },
      {
        "numero_pregunta": 38,
        "enunciado": "¿Qué es el \"Efecto Halo\"?",
        "opciones": {
          "a": "Un tipo de barrera de comunicación",
          "b": "Una técnica de asertividad",
          "c": "Un sesgo cognitivo que influye en la percepción de las personas",
          "d": "Una fase del desarrollo de un grupo"
        },
        "respuesta_correcta": "c"
      },
      {
        "numero_pregunta": 39,
        "enunciado": "¿Cuál de las siguientes opciones NO es una ventaja del trabajo en equipo?",
        "opciones": {
          "a": "Diversidad de habilidades y conocimientos",
          "b": "Unión y colaboración",
          "c": "Apoyo y motivación mutua",
          "d": "Pérdida de autonomía individual"
        },
        "respuesta_correcta": "d"
      },
      {
        "numero_pregunta": 40,
        "enunciado": "¿Cuál de las siguientes opciones es un inconveniente del trabajo en equipo?",
        "opciones": {
          "a": "Mayor éxito en tareas complejas",
          "b": "Posibilidad de conflictos y desacuerdos",
          "c": "Distribución eficiente de tareas",
          "d": "Apoyo y motivación mutua"
        },
        "respuesta_correcta": "b"
      }
    ]
  };
  
  /************************************************
   * A partir del JSON anterior, unificamos todas *
   * las preguntas en un solo array.             *
   ************************************************/
  
  let todasLasPreguntas = [];
  
  for (const unidad in preguntasJSON) {
    if (preguntasJSON.hasOwnProperty(unidad)) {
      todasLasPreguntas = todasLasPreguntas.concat(preguntasJSON[unidad]);
    }
  }
  
  /*********************************
   * Variables de control del test *
   *********************************/
  let preguntasSeleccionadas = [];
  let indicePreguntaActual = 0;
  let aciertos = 0;
  
  // Aquí guardaremos los errores con su pregunta, opción elegida y respuesta correcta
  let preguntasFalladas = [];
  
  /******************
   * Elementos HTML *
   ******************/
  const inicio = document.getElementById("inicio");
  const btnComenzar = document.getElementById("btnComenzar");
  const selectNumPreguntas = document.getElementById("numPreguntas");
  
  const testContainer = document.getElementById("testContainer");
  const preguntaContainer = document.getElementById("preguntaContainer");
  const btnSiguiente = document.getElementById("btnSiguiente");
  
  const resultadoContainer = document.getElementById("resultadoContainer");
  const puntuacion = document.getElementById("puntuacion");
  const erroresDiv = document.getElementById("errores");
  const btnReiniciar = document.getElementById("btnReiniciar");
  
  /*******************************************************
   * Función para mezclar (barajar) el array aleatoriamente
   *******************************************************/
  function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  /***********************************************
   * Función para inicializar el test y preguntas *
   ***********************************************/
  function iniciarTest() {
    // Ocultamos la pantalla de inicio y mostramos el contenedor del test
    inicio.classList.add("oculto");
    testContainer.classList.remove("oculto");
  
    // Reseteamos variables
    indicePreguntaActual = 0;
    aciertos = 0;
    preguntasFalladas = [];
  
    // Tomamos la selección del usuario
    const numPreguntas = parseInt(selectNumPreguntas.value, 10);
  
    // Mezclamos todas las preguntas y seleccionamos las primeras n
    mezclarArray(todasLasPreguntas);
    preguntasSeleccionadas = todasLasPreguntas.slice(0, numPreguntas);
  
    // Mostramos la primera pregunta
    mostrarPregunta(indicePreguntaActual);
  }
  
  /******************************************************
   * Función para mostrar una pregunta en pantalla       *
   ******************************************************/
  function mostrarPregunta(indice) {
    const pregunta = preguntasSeleccionadas[indice];
    preguntaContainer.innerHTML = "";
  
    // Crear título con el enunciado
    const enunciado = document.createElement("h3");
    enunciado.textContent = `Pregunta ${indice + 1}. ${pregunta.enunciado}`;
    preguntaContainer.appendChild(enunciado);
  
    // Crear las opciones como radio buttons
    for (const letra in pregunta.opciones) {
      if (pregunta.opciones.hasOwnProperty(letra)) {
        const opcionTexto = pregunta.opciones[letra];
  
        // Creamos un div para la opción
        const opcionDiv = document.createElement("div");
        opcionDiv.className = "opcion";
  
        // Creamos el input radio
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "opcion";
        radio.value = letra;
  
        // Creamos la etiqueta del radio
        const label = document.createElement("label");
        label.textContent = `${letra}) ${opcionTexto}`;
  
        opcionDiv.appendChild(radio);
        opcionDiv.appendChild(label);
  
        preguntaContainer.appendChild(opcionDiv);
      }
    }
  }
  
  /***************************************************************
   * Función que se ejecuta al pulsar "Siguiente" para verificar *
   * la respuesta elegida y pasar a la siguiente pregunta        *
   ***************************************************************/
  function siguientePregunta() {
    // Obtenemos la opción seleccionada
    const radios = document.getElementsByName("opcion");
    let respuestaElegida = null;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        respuestaElegida = radios[i].value;
        break;
      }
    }
  
    // Si no se ha seleccionado ninguna opción, pedimos al usuario que seleccione
    if (!respuestaElegida) {
      alert("Por favor, seleccione una opción antes de continuar.");
      return;
    }
  
    // Verificamos la respuesta
    const preguntaActual = preguntasSeleccionadas[indicePreguntaActual];
    if (respuestaElegida === preguntaActual.respuesta_correcta) {
      aciertos++;
    } else {
      // Guardamos la pregunta fallada en el array
      preguntasFalladas.push({
        enunciado: preguntaActual.enunciado,
        respuestaSeleccionada: respuestaElegida,
        respuestaCorrecta: preguntaActual.respuesta_correcta,
        opciones: preguntaActual.opciones
      });
    }
  
    // Pasamos a la siguiente pregunta
    indicePreguntaActual++;
  
    // Si quedan más preguntas, las mostramos. Si no, mostramos el resultado
    if (indicePreguntaActual < preguntasSeleccionadas.length) {
      mostrarPregunta(indicePreguntaActual);
    } else {
      finalizarTest();
    }
  }
  
  /*****************************************************
   * Función para mostrar el resultado final del test  *
   *****************************************************/
  function finalizarTest() {
    testContainer.classList.add("oculto");
    resultadoContainer.classList.remove("oculto");
  
    const totalPreguntas = preguntasSeleccionadas.length;
    puntuacion.textContent = `Has acertado ${aciertos} de ${totalPreguntas} preguntas.`;
  
    // Mostramos los errores, si los hay
    erroresDiv.innerHTML = "";
    if (preguntasFalladas.length > 0) {
      const tituloErrores = document.createElement("h3");
      tituloErrores.textContent = "Preguntas contestadas de forma incorrecta:";
      erroresDiv.appendChild(tituloErrores);
  
      preguntasFalladas.forEach((pf, index) => {
        const errorItem = document.createElement("div");
        errorItem.style.border = "1px solid #ccc";
        errorItem.style.margin = "10px 0";
        errorItem.style.padding = "10px";
  
        const preguntaTitulo = document.createElement("p");
        preguntaTitulo.innerHTML = `<strong>${index + 1}.</strong> ${pf.enunciado}`;
        errorItem.appendChild(preguntaTitulo);
  
        const respuestaDada = document.createElement("p");
        respuestaDada.textContent = `Respuesta elegida: ${pf.respuestaSeleccionada}) ${pf.opciones[pf.respuestaSeleccionada]}`;
        respuestaDada.style.color = "red";
        errorItem.appendChild(respuestaDada);
  
        const respuestaCorrecta = document.createElement("p");
        respuestaCorrecta.textContent = `Respuesta correcta: ${pf.respuestaCorrecta}) ${pf.opciones[pf.respuestaCorrecta]}`;
        respuestaCorrecta.style.color = "green";
        errorItem.appendChild(respuestaCorrecta);
  
        erroresDiv.appendChild(errorItem);
      });
    }
  }
  
  /*******************************************************
   * Permite reiniciar el test volviendo a la pantalla   *
   * de inicio y reseteando todos los contenedores       *
   *******************************************************/
  function reiniciarTest() {
    resultadoContainer.classList.add("oculto");
    inicio.classList.remove("oculto");
  }
  
  /******************************
   * Eventos de botones         *
   ******************************/
  btnComenzar.addEventListener("click", iniciarTest);
  btnSiguiente.addEventListener("click", siguientePregunta);
  btnReiniciar.addEventListener("click", reiniciarTest);
  