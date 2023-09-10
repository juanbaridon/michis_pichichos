const btnGatos = document.getElementById('btnGatos');
const btnPerros = document.getElementById('btnPerros');
const contenedorImagen = document.getElementById('imagen');


function fetchAdorable (url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imagenAdorable = document.createElement('img');
            imagenAdorable.src = data[0].url;
            contenedorImagen.innerHTML = '';
            contenedorImagen.appendChild(imagenAdorable);
        })
        .catch(error => {
            console.error('Error al obtener la imagen:', error);
            contenedorImagen.innerHTML = '';
            contenedorImagen.innerHTML = '<p>No se pudo cargar la imágen correctamente.</p>';
        });
}
btnGatos.addEventListener('click', () => {
    fetchAdorable('https://api.thecatapi.com/v1/images/search')
})

btnPerros.addEventListener('click', () => {
    fetchAdorable('https://api.thedogapi.com/v1/images/search')
});
