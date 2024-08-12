
        // Profile Menu Toggle
        const profileButton = document.getElementById('profile-button');
        const profileMenu = document.getElementById('profile-menu');
        const closeProfileMenu = document.getElementById('close-profile-menu');
        const mainContent = document.getElementById('main-content');

        profileButton.addEventListener('click', () => {
            profileMenu.style.transform = 'translateX(0)';
            mainContent.classList.add('blurred');
        });

        closeProfileMenu.addEventListener('click', () => {
            profileMenu.style.transform = 'translateX(100%)';
            mainContent.classList.remove('blurred');
        });

        // Search Popup Toggle
        const searchBar = document.getElementById('search-bar');
        const searchPopup = document.getElementById('search-popup');
        const closeSearchPopup = document.getElementById('close-search-popup');

        searchBar.addEventListener('focus', () => {
            searchPopup.classList.add('active');
            mainContent.classList.add('blurred');
        });

        closeSearchPopup.addEventListener('click', () => {
            searchPopup.classList.remove('active');
            mainContent.classList.remove('blurred');
        });

        // Auto-Rotating Carousel
        const carousel = document.getElementById('carousel');
        const images = carousel.getElementsByTagName('img');
        let index = 0;

        function rotateImages() {
            index++;
            if (index >= images.length) {
                index = 0;
            }
            carousel.scrollTo({
                left: index * images[0].offsetWidth,
                behavior: 'smooth'
            });
        }

        setInterval(rotateImages, 3000);

        // Manual Scrolling with Buttons
        const carouselLeft = document.getElementById('carousel-left');
        const carouselRight = document.getElementById('carousel-right');

        carouselLeft.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = images.length - 1;
            }
            carousel.scrollTo({
                left: index * images[0].offsetWidth,
                behavior: 'smooth'
            });
        });

        carouselRight.addEventListener('click', () => {
            if (index < images.length - 1) {
                index++;
            } else {
                index = 0;
            }
            carousel.scrollTo({
                left: index * images[0].offsetWidth,
                behavior: 'smooth'
            });
        });