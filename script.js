document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-card img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            showFullscreen(img);
        });
    });

    function showFullscreen(img) {
        if (document.querySelector('.fullscreen-overlay')) return;

        const overlay = document.createElement('div');
        overlay.className = 'fullscreen-overlay';

        const zoomedImg = document.createElement('img');
        zoomedImg.src = img.src;
        zoomedImg.alt = img.alt;
        zoomedImg.className = 'fullscreen-img';

        overlay.appendChild(zoomedImg);
        document.body.appendChild(overlay);

        // Force reflow to trigger transition
        window.getComputedStyle(overlay).opacity;
        overlay.classList.add('visible');

        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
        });
    }
});
