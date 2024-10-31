document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada!");
});





function gallerySlider(galleryId, prevButtonId, nextButtonId) {
    const gallery = document.getElementById(galleryId);
    const imageContainer = gallery.querySelector('.image-container');
    const images = imageContainer.querySelectorAll('img');
    let currentIndex = 0;

    document.getElementById(prevButtonId).addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        updateGallery();
    });

    document.getElementById(nextButtonId).addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateGallery();
    });

    function updateGallery() {
        const offset = -currentIndex * 600; // Largura da imagem
        imageContainer.style.transform = `translateX(${offset}px)`;
    }
}

gallerySlider('gallery-retratos', 'prev-retratos', 'next-retratos');
gallerySlider('gallery-eventos', 'prev-eventos', 'next-eventos');
gallerySlider('gallery-esportes', 'prev-esportes', 'next-esportes');







document.querySelectorAll('.footer-icons a').forEach(icon => {
    icon.addEventListener('click', (e) => {
        alert(`Você está indo para: ${e.target.alt}`);
    });
});






document.querySelectorAll('.footer-icons a').forEach(icon => {
    icon.addEventListener('click', (e) => {
        alert(`Você está indo para: ${e.target.alt}`);
    });
});



