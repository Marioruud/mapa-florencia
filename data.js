// =====================================================
//  CONFIGURACIÓN DE LA GUÍA  (cambia esto para otra ciudad)
// =====================================================
window.GUIA = {
  ciudad: "Florencia",
  subtitulo: "21 sitios con mis notas",
  centro: [43.7710, 11.2550],

  // Opcional: enlace CSV de una Google Sheet publicada.
  // En Sheets: Archivo → Compartir → Publicar en la web → formato CSV.
  // Columnas: nombre, tipo, dia, lat, lng, gmaps, comentario, info, foto
  // Si lo dejas vacío, se usan los lugares de abajo.
  sheetCsv: "",

  dias: {
    1: "Día 1 · Centro histórico",
    2: "Día 2 · Arte y Oltrarno",
    3: "Día 3 · Colinas y vistas"
  },

  // tipo: "visita", "comida" o "practico"
  // dia: 1, 2, 3… (o 0 si no pertenece a ningún día)
  // foto: URL de una imagen tuya (opcional)
  lugares: [
    { nombre: "Catedral de Santa María del Fiore", tipo: "visita", dia: 1, lat: 43.7731, lng: 11.2560, gmaps: "https://maps.app.goo.gl/XFkxbuwDgdZeCKQi8",
      comentario: "No hay ascensor, así que prepárate para subir los 414 escalones hasta la cima del Campanario de Giotto.",
      info: "Entrar a la catedral es gratis; cúpula y campanario van con entrada y conviene reservar hora." },
    { nombre: "Basílica de Santa María Novella", tipo: "visita", dia: 1, lat: 43.7746, lng: 11.2494, gmaps: "https://maps.app.goo.gl/uTs6nyFEZkDVCq2ZA",
      comentario: "Iglesia gótica, pinturas y frescos de Masaccio, Brunelleschi y Uccello." },
    { nombre: "Basílica de Santa Croce", tipo: "visita", dia: 2, lat: 43.7687, lng: 11.2622, gmaps: "https://maps.app.goo.gl/JZdsqBLVvjR3PyxcA",
      comentario: "Cuando estuve, entrar era de pago. Tumbas de Miguel Ángel, Galileo, Maquiavelo y Dante, junto con impresionantes frescos del siglo XIV de Giotto. (Lo que hicimos fue ir a una misa: a mi madre le hacía ilusión una misa en italiano.)" },
    { nombre: "Basílica de San Lorenzo", tipo: "visita", dia: 1, lat: 43.7749, lng: 11.2538, gmaps: "https://maps.app.goo.gl/LnjABLtXaoqXZDg48",
      comentario: "Decorada por Brunelleschi, Donatello y Miguel Ángel. Capillas Medici." },
    { nombre: "Basílica de San Miniato al Monte", tipo: "visita", dia: 3, lat: 43.7598, lng: 11.2650, gmaps: "https://maps.app.goo.gl/3Q186pDT3StoDQuF9",
      comentario: "Está en la cima de una colina fuera del centro (hay que caminar un poco, pero queda justo encima del Piazzale Michelangelo, donde todo el mundo se hace fotos). Desde arriba ves Florencia con vistas panorámicas y sin multitudes.\nDentro es un concepto distinto, y detrás está el cementerio de la ciudad (suena feo, pero merece la pena, en especial una estatua a tamaño real de dos hermanos que murieron en la Primera Guerra Mundial).",
      info: "Ideal al atardecer." },
    { nombre: "Basílica de Santa Trinita", tipo: "visita", dia: 2, lat: 43.7702, lng: 11.2519, gmaps: "https://maps.app.goo.gl/FJW7RvRaibc32hcb7",
      comentario: "Del siglo XIV, una de las mejores iglesias de Florencia para los amantes del arte. Frescos renacentistas de Domenico Ghirlandaio." },
    { nombre: "Basílica de la Santissima Annunziata", tipo: "visita", dia: 2, lat: 43.7774, lng: 11.2610, gmaps: "https://maps.app.goo.gl/7pXLyfGYUH5K98c36",
      comentario: "Renacentista, única por sus claustros, inusualmente grandes. El Claustro de los Votos y el de los Muertos tienen obras y frescos fascinantes (una de las que más me sorprendió del viaje)." },
    { nombre: "Galería de la Academia", tipo: "visita", dia: 2, lat: 43.7769, lng: 11.2587, gmaps: "https://maps.app.goo.gl/ZRY6RfAR5eSCaLjV7",
      comentario: "", info: "Aquí está el David de Miguel Ángel. Reserva entrada con antelación para evitar colas." },
    { nombre: "Galería degli Uffizi", tipo: "visita", dia: 1, lat: 43.7678, lng: 11.2553, gmaps: "https://maps.app.goo.gl/Njw4L3eGMSUzYdwN7",
      comentario: "", info: "Reserva entrada con antelación y reserva al menos 2-3 horas para verla." },
    { nombre: "Palacio Pitti", tipo: "visita", dia: 2, lat: 43.7651, lng: 11.2500, gmaps: "https://maps.app.goo.gl/7yiyQAWtWbEppcVM6",
      comentario: "Si te sobra tiempo está interesante, pero tampoco es ninguna maravilla (humilde opinión)." },
    { nombre: "Jardín de las Rosas", tipo: "visita", dia: 3, lat: 43.7628, lng: 11.2633, gmaps: "https://maps.app.goo.gl/pVcFDWbd2U94TsGv9",
      comentario: "Buenas vistas de la ciudad y está de camino al Mirador Michelangelo." },
    { nombre: "Mirador Michelangelo", tipo: "visita", dia: 3, lat: 43.7629, lng: 11.2651, gmaps: "https://maps.app.goo.gl/UBFvZbGQz2gtBGVk7",
      comentario: "Confía y sube a San Miniato al Monte: son 15 minutos más andando y unas escaleras." },
    { nombre: "Peretola Aeroporto (tranvía)", tipo: "practico", dia: 0, lat: 43.8086, lng: 11.2012, gmaps: "https://maps.app.goo.gl/mXJg6bYQT2rEWCg86",
      comentario: "Ojo: hay dos líneas hasta el centro según adónde vayas. Cuidado sobre todo para volver al aeropuerto." },
    { nombre: "Unità (tranvía)", tipo: "practico", dia: 0, lat: 43.7753, lng: 11.2514, gmaps: "https://maps.app.goo.gl/Dsau7ze3JN8u9cP99",
      comentario: "Parada junto a la estación de tren, a 15 min andando de la Catedral." },
    { nombre: "Mercado Central", tipo: "comida", dia: 1, lat: 43.7765, lng: 11.2531, gmaps: "https://maps.app.goo.gl/NZfDnwDZzSwEnrdZ9",
      comentario: "Comida de la zona; viene bien si llegáis con hambre o queréis un café. Junto al mercado ponen puestos de imitaciones de bolsos y souvenirs." },
    { nombre: "All’Antico Vinaio", tipo: "comida", dia: 1, lat: 43.7684, lng: 11.2570, gmaps: "https://maps.app.goo.gl/tc1oJRMoATKQ6XWW6",
      comentario: "Típicos bocatas de fiambre. A mediodía es imposible; como en Europa cenan pronto, si estiráis la cena hay mucha menos gente." },
    { nombre: "Vivoli", tipo: "comida", dia: 2, lat: 43.7697, lng: 11.2612, gmaps: "https://maps.app.goo.gl/QGNKyJsDj4Em6ode6",
      comentario: "Su especialidad es el affogato: bola de gelato con un espresso caliente.\nMuy turístico, pero buena parada para cafeteros." },
    { nombre: "Plaza de la Señoría", tipo: "visita", dia: 1, lat: 43.7696, lng: 11.2558, gmaps: "https://maps.app.goo.gl/Rm1wqcZgLiAR4Npo8",
      comentario: "Un museo al aire libre por la cantidad de esculturas renacentistas y monumentos." },
    { nombre: "Fontana del Porcellino", tipo: "visita", dia: 1, lat: 43.7692, lng: 11.2544, gmaps: "https://maps.app.goo.gl/bPjoMCoXeTU2J4EJ9",
      comentario: "Ritual de buena suerte:\n1. Frota el hocico del jabalí (brilla de tantas manos).\n2. Pon una moneda en su boca y suéltala.\n3. Si cae por la reja de abajo, da buena suerte y volverás a Florencia." },
    { nombre: "Sinagoga", tipo: "visita", dia: 2, lat: 43.7715, lng: 11.2662, gmaps: "https://maps.app.goo.gl/fhmunTxW9vLnxnJh8",
      comentario: "Si os sobra tiempo, bonita por fuera. Dentro hay un museo de pago (yo entré porque nunca había estado en una sinagoga, pero no lo recomendaría por su belleza)." },
    { nombre: "Guarda equipaje", tipo: "practico", dia: 0, lat: 43.7760, lng: 11.2485, gmaps: "https://maps.app.goo.gl/1d7VZJdD2x8oK7Ty5",
      comentario: "Lo usé en mi último viaje sin ningún problema.\nPunto medio entre los sitios turísticos y el tranvía, para alargar el último día." }
  ]
};
