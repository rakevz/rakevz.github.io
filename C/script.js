document.getElementById('competitionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const raza = document.getElementById('breed').value;
    let valorInicial;
    let imagenRaza;

    if (raza === "PITBULL") {
        valorInicial = 6000000;
        imagenRaza = 'imagenes-perros/pitbull.jpg'; 
    } else if (raza === "BULY") {
        valorInicial = 6500000;
        imagenRaza = 'imagenes-perros/american-bully.jpeg'; 
    } else if (raza === "ROTTWHILLER") {
        valorInicial = 4000000;
        imagenRaza = 'imagenes-perros/rottweiler.jpg'; 
    } else if (raza === "LABRADOR RETRIEVER") {
        valorInicial = 3500000;
        imagenRaza = 'imagenes-perros/labradoretriever.png'; 
    } else if (raza === "GOLDEN RETRIEVER") {
        valorInicial = 3500000;
        imagenRaza = 'imagenes-perros/goldenretriever.png'; 
    } else if (raza === "DOBERMAN") {
        valorInicial = 5000000;
        imagenRaza = 'imagenes-perros/doberman.jpg'; 
    } else if (raza === "DOGO ARGENTINO") {
        valorInicial = 5500000;
        imagenRaza = 'imagenes-perros/dogo.webp'; 
    } else {
        valorInicial = 0; 
    }

    const puesto = parseInt(document.getElementById('position').value);
    let nuevoValor;

    if (puesto === 1) {
        nuevoValor = valorInicial * 2;
    } else if (puesto === 2) {
        nuevoValor = valorInicial + 800000;
    } else if (puesto === 3) {
        nuevoValor = valorInicial + 200000;
    } else {
        nuevoValor = valorInicial;
    }

    document.getElementById('breedResult').textContent = raza;
    document.getElementById('initialValue').textContent = valorInicial.toLocaleString();
    document.getElementById('positionResult').textContent = puesto;
    document.getElementById('newValue').textContent = nuevoValor.toLocaleString();
    document.getElementById('resultImage').src = imagenRaza;
    document.getElementById('resultImage').style.display = 'block';
    document.getElementById('result').style.display = 'block';
});