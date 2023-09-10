const btnGatos = document.getElementById('btnGatos');
const btnPerros = document.getElementById('btnPerros');
const contenedorImagen = document.getElementById('imagen');

btnGatos.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const imagenGato = document.createElement('img');
            imagenGato.src = data[0].url;
            contenedorImagen.innerHTML = '';
            contenedorImagen.appendChild(imagenGato);
        })
        .catch(error => {
            console.error('Error al obtener la imagen de gato:', error);
            contenedorImagen.innerHTML = '';
            contenedorImagen.innerHTML = '<p>No se pudo cargar la imágen correctamente.</p>';
        });
});

btnPerros.addEventListener('click', () => {
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const imagenPerro = document.createElement('img');
            imagenPerro.src = data[0].url;
            contenedorImagen.innerHTML = '';
            contenedorImagen.appendChild(imagenPerro);
        })
        .catch(error => {
            console.error('Error al obtener la imagen de perro:', error);
            contenedorImagen.innerHTML = '';
            contenedorImagen.innerHTML = '<p>No se pudo cargar la imágen correctamente.</p>';
        });
});