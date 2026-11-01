// =====================================================
//  CONFIGURACIÓN DE LA GUÍA  (cambia esto para otra ciudad)
// =====================================================
window.GUIA = {
  ciudad: "Florencia",
  subtitulo: "25 sitios con mis notas",
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
    {"nombre": "Catedral de Santa María del Fiore", "tipo": "visita", "dia": 1, "lat": 43.7731, "lng": 11.256, "gmaps": "https://maps.app.goo.gl/XFkxbuwDgdZeCKQi8", "comentario": "No hay ascensor, así que prepárate para subir los 414 escalones hasta la cima del Campanario de Giotto.", "info": "Entrar a la catedral es gratis; cúpula y campanario van con entrada y conviene reservar hora."},
    {"nombre": "Basílica de Santa María Novella", "tipo": "visita", "dia": 1, "lat": 43.7746, "lng": 11.2494, "gmaps": "https://maps.app.goo.gl/uTs6nyFEZkDVCq2ZA", "comentario": "Iglesia gótica, pinturas y frescos de Masaccio, Brunelleschi y Uccello."},
    {"nombre": "Basílica de Santa Croce", "tipo": "visita", "dia": 2, "lat": 43.7687, "lng": 11.2622, "gmaps": "https://maps.app.goo.gl/JZdsqBLVvjR3PyxcA", "comentario": "Cuando estuve entrar era de pago; tiene tumbas de Miguel Ángel, Galileo, Maquiavelo y Dante, junto con impresionantes frescos del siglo XIV de Giotto. (Lo que hicimos fue ir a una misa; a mi madre le hacía ilusión una misa en italiano)."},
    {"nombre": "Basílica de San Lorenzo", "tipo": "visita", "dia": 1, "lat": 43.7749, "lng": 11.2538, "gmaps": "https://maps.app.goo.gl/LnjABLtXaoqXZDg48", "comentario": "Decorada por Brunelleschi, Donatello y Miguel Ángel. Capillas Médici."},
    {"nombre": "Basílica de San Miniato al Monte", "tipo": "visita", "dia": 3, "lat": 43.7598, "lng": 11.265, "gmaps": "https://maps.app.goo.gl/3Q186pDT3StoDQuF9", "comentario": "Se sitúa en la cima de una colina fuera del centro de la ciudad (hay que caminar un poco, pero está justo encima del Piazzale Michelangelo, que es donde todo el mundo se hace fotos). Al subir podrás ver mejor la ciudad con vistas panorámicas de Florencia sin multitudes.\nDentro es un concepto de iglesia distinto y en su parte trasera se encuentra el cementerio de la ciudad (tiene mausoleos bonitos que imitan catedrales y además hay una estatua a tamaño real de dos hermanos, \"Tomba dei fratelli Mazzone\", que tiene una historia curiosa; te llevaría 15 min verlo).", "info": "Ideal al atardecer."},
    {"nombre": "Basílica de Santa Trinita", "tipo": "visita", "dia": 2, "lat": 43.7702, "lng": 11.2519, "gmaps": "https://maps.app.goo.gl/FJW7RvRaibc32hcb7", "comentario": "Del siglo XIV, es una de las mejores iglesias de Florencia para los amantes del arte. Destacan los frescos renacentistas de Domenico Ghirlandaio."},
    {"nombre": "Basílica de la Santissima Annunziata", "tipo": "visita", "dia": 2, "lat": 43.7774, "lng": 11.261, "gmaps": "https://maps.app.goo.gl/7pXLyfGYUH5K98c36", "comentario": "De época renacentista, es única por sus impresionantes claustros, inusualmente grandes. Tanto el Claustro de los Votos como el Claustro de los Muertos presentan obras de arte y frescos fascinantes (esta es una de las que más me sorprendió en mi viaje)."},
    {"nombre": "Galería de la Academia", "tipo": "visita", "dia": 2, "lat": 43.7769, "lng": 11.2587, "gmaps": "https://maps.app.goo.gl/ZRY6RfAR5eSCaLjV7", "comentario": "", "info": "Aquí está el David de Miguel Ángel. Reserva entrada con antelación para evitar colas."},
    {"nombre": "Galería degli Uffizi", "tipo": "visita", "dia": 1, "lat": 43.7678, "lng": 11.2553, "gmaps": "https://maps.app.goo.gl/Njw4L3eGMSUzYdwN7", "comentario": "", "info": "Reserva entrada con antelación y cuenta con al menos 2-3 horas para verla."},
    {"nombre": "Palacio Pitti", "tipo": "visita", "dia": 2, "lat": 43.7651, "lng": 11.25, "gmaps": "https://maps.app.goo.gl/7yiyQAWtWbEppcVM6", "comentario": "Si te sobra tiempo está interesante de ver, pero tampoco es ninguna maravilla (humilde opinión de Parla)."},
    {"nombre": "Jardín de las Rosas", "tipo": "visita", "dia": 3, "lat": 43.7628, "lng": 11.2633, "gmaps": "https://maps.app.goo.gl/pVcFDWbd2U94TsGv9", "comentario": "Tiene buenas vistas de la ciudad y te pilla de camino al Mirador Michelangelo."},
    {"nombre": "Mirador Michelangelo", "tipo": "visita", "dia": 3, "lat": 43.7629, "lng": 11.2651, "gmaps": "https://maps.app.goo.gl/UBFvZbGQz2gtBGVk7", "comentario": "Confía y ve a la Basílica de San Miniato al Monte, son solo 15 min más andando y subir unas escaleras."},
    {"nombre": "Peretola Aeroporto (tranvía)", "tipo": "practico", "dia": 0, "lat": 43.8086, "lng": 11.2012, "gmaps": "https://maps.app.goo.gl/mXJg6bYQT2rEWCg86", "comentario": "Cuidado, que hay dos líneas hasta el centro dependiendo de a dónde quieras ir; hay que tener cuidado en especial para volver al aeropuerto."},
    {"nombre": "Unità (tranvía)", "tipo": "practico", "dia": 0, "lat": 43.7753, "lng": 11.2514, "gmaps": "https://maps.app.goo.gl/Dsau7ze3JN8u9cP99", "comentario": "Parada junto a la estación de tren, a 15 min andando de la Catedral de Santa María del Fiore."},
    {"nombre": "Mercado Central de Florencia", "tipo": "comida", "dia": 1, "lat": 43.7765, "lng": 11.2531, "gmaps": "https://maps.app.goo.gl/NZfDnwDZzSwEnrdZ9", "comentario": "Tiene comida de la zona, viene bien por si llegáis con hambre o queréis tomar un café. Tened en cuenta que junto al mercado ponen puestos con imitaciones de bolsos y recuerdos."},
    {"nombre": "All’Antico Vinaio", "tipo": "comida", "dia": 1, "lat": 43.7684, "lng": 11.257, "gmaps": "https://maps.app.goo.gl/tc1oJRMoATKQ6XWW6", "comentario": "Es típico de la ciudad, son bocatas de fiambre. A mediodía y a la hora de comer se vuelve imposible comprar allí; a la hora de la cena de España está más libre."},
    {"nombre": "Vivoli", "tipo": "comida", "dia": 2, "lat": 43.7697, "lng": 11.2612, "gmaps": "https://maps.app.goo.gl/QGNKyJsDj4Em6ode6", "comentario": "Tienen como especialidad el affogato: una bola de gelato con un café espresso caliente.\nEs muy turístico y para los cafeteros suele ser una buena parada."},
    {"nombre": "Plaza de la Señoría", "tipo": "visita", "dia": 1, "lat": 43.7696, "lng": 11.2558, "gmaps": "https://maps.app.goo.gl/Rm1wqcZgLiAR4Npo8", "comentario": "Funciona como un auténtico museo al aire libre gracias al gran número de esculturas renacentistas y monumentos que alberga."},
    {"nombre": "Fontana del Porcellino", "tipo": "visita", "dia": 1, "lat": 43.7692, "lng": 11.2544, "gmaps": "https://maps.app.goo.gl/bPjoMCoXeTU2J4EJ9", "comentario": "Ritual de buena suerte:\n1. Acariciar el hocico: Hay que frotar el hocico del jabalí (el cual brilla intensamente por el desgaste acumulado del roce de millones de manos).\n2. La moneda: Se coloca una moneda en la boca del animal y se deja soltar.\n3. El augurio: Si la moneda cae y atraviesa la reja de drenaje inferior, se dice que da buena suerte y garantiza que el visitante regresará a Florencia."},
    {"nombre": "Sinagoga", "tipo": "visita", "dia": 2, "lat": 43.7715, "lng": 11.2662, "gmaps": "https://maps.app.goo.gl/fhmunTxW9vLnxnJh8", "comentario": "Si os sobra tiempo es bonita de ver por fuera, y si os sobra el dinero y queréis entrar tienen un museo dentro (yo lo hice porque nunca había estado en una sinagoga, pero no es algo que invitaría a hacer por su belleza)."},
    {"nombre": "Ponte Vecchio", "tipo": "visita", "dia": 1, "lat": 43.768, "lng": 11.2531, "gmaps": "https://maps.app.goo.gl/Gvhbv4XdmoQzCdBJ7", "comentario": ""},
    {"nombre": "Puente de la Santísima Trinidad", "tipo": "visita", "dia": 2, "lat": 43.7691, "lng": 11.2505, "gmaps": "https://maps.app.goo.gl/oBgR7Du5yMkGxE5c8", "comentario": "Para hacer fotos con el Ponte Vecchio de fondo."},
    {"nombre": "Piazza Santa Trinita", "tipo": "visita", "dia": 2, "lat": 43.77, "lng": 11.2513, "gmaps": "https://maps.app.goo.gl/1LFtiep7mKZQv3oWA", "comentario": "Calle con tiendas de lujo (por si quieres algo de Prada)."},
    {"nombre": "Farmacia de Santa María Novella", "tipo": "visita", "dia": 1, "lat": 43.7738, "lng": 11.2483, "gmaps": "https://maps.app.goo.gl/9zcgApftXW6nQVXy5", "comentario": "Básicamente es una tienda de perfumes, pero es bonita de ver y está cerca de la estación central. Si te sobran 15 min es un sitio curioso."},
    {"nombre": "Guarda equipaje", "tipo": "practico", "dia": 0, "lat": 43.776, "lng": 11.2485, "gmaps": "https://maps.app.goo.gl/1d7VZJdD2x8oK7Ty5", "comentario": "Este lo usé en mi último viaje y no me dieron ningún problema.\nEra un punto medio entre los sitios turísticos y el tranvía para alargar el último día de visita."}
  ]
};
