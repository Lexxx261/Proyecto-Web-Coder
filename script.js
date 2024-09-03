window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    const contenido = document.getElementById("contenido");

    // Verifica si el preloader ya fue mostrado en esta sesión
    if (sessionStorage.getItem("preloaderShown")) {
        preloader.style.display = "none"; // Oculta el preloader si ya se mostró en esta sesión
        contenido.classList.remove("hidden"); // Muestra el contenido principal
        document.body.style.overflow = "auto"; // Permite el scroll nuevamente
    } else {
        // Si no se ha mostrado en esta sesión, asigna el evento de clic
        document.getElementById("logo").addEventListener("click", function() {
            preloader.style.display = "none"; // Oculta el preloader al hacer clic
            contenido.classList.remove("hidden"); // Muestra el contenido principal
            document.body.style.overflow = "auto"; // Permite el scroll nuevamente

            // Marca que el preloader ya fue mostrado en esta sesión
            sessionStorage.setItem("preloaderShown", "true");
        });
    }
});
