// Esperar 2 segundos antes de comenzar la animación
window.onload = function() {
    setTimeout(function() {
        // Deslizar la pantalla de bienvenida
        document.getElementById("intro-screen").classList.add("slide-out");

        // Mostrar el contenido principal
        setTimeout(function() {
            document.getElementById("main-content").classList.add("show");
        }, 1000);  // Tiempo de la animación de la pantalla de bienvenida
    }, 200);  // Tiempo que permanece visible la pantalla de bienvenida
};
// Función para cambiar el contenido según la opción de nav
function changeContent(section) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
  
    // Mostrar el contenido relacionado con la sección seleccionada
    document.getElementById(section).style.display = 'block';
  
    // Cambiar la clase activa en el navbar
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    document.getElementById('nav-' + section).classList.add('active');
  }
  // Función para alternar entre pausar y continuar la reproducción de un video
function togglePlayPause(videoId) {
    var video = document.getElementById(videoId); // Obtener el elemento de video por ID
    if (video.paused) {
        video.play(); // Si está pausado, continuar la reproducción
    } else {
        video.pause(); // Si está reproduciéndose, pausarlo
    }
}
