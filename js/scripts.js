document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        gap: 5,
        breakpoints: {
            1200: {
                perView: 3
            },
            800: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    });

    glide.on('run', () => {
        updateBullets();
    });

    glide.mount();


    function updateBullets() {
        const bullets = document.querySelectorAll('.glide__bullet');
        bullets.forEach((bullet, index) => {
            if (bullet.classList.contains('glide__bullet--active')) {
                bullet.style.backgroundColor = '#0056b3'; 
                bullet.style.transform = 'scale(1.2)'; 
            } else {
                bullet.style.backgroundColor = '#007BFF'; 
                bullet.style.transform = 'scale(1)'; 
            }
        });
    }

    updateBullets();
});


document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    mobileNavToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
    });
});
