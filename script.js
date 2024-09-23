window.addEventListener("load", function() {
    const contenido = document.getElementById("contenido");

    if (sessionStorage.getItem("preloaderShown")) {
        preloader.style.display = "none";
        contenido.classList.remove("hidden");
        document.body.style.overflow = "auto";
    } else {
        document.getElementById("logo").addEventListener("click", function() {
            preloader.style.display = "none";
            contenido.classList.remove("hidden");
            document.body.style.overflow = "auto";

            sessionStorage.setItem("preloaderShown", "true");
        });
    }
});
