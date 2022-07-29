(function() {
    // Deal carouselTicker Init
    $("#dealScroll").carouselTicker({
        direction: "prev",
    });

    // Feedback carouselTicker Init
    $("#feedbackScroll").carouselTicker({
        direction: "prev",
    });

    // Open Vip modal when about to close modal
    let moveOnce = true;
    const vipModal = document.querySelector("#vipModal");
    document.body.addEventListener("mousemove", function(e) {
        if (moveOnce && e.pageY < 10) {
            moveOnce = false;
            vipModal.classList.add('active');
        }
    });

    // Animate Floating Header On Scroll
    const header = document.querySelectorAll("header");
    if (header.length > 0) {
        window.onscroll = () => scrollFunction();
        const scrollFunction = () => {
            if (window.innerWidth > 1024) {
                for (var i = 0; i < header.length; i++) {
                    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                        header[i].classList.add('active');
                    } else {
                        header[i].classList.remove('active');
                    }
                }

            }
            if (window.innerWidth <= 1024) {
                for (var i = 0; i < header.length; i++) {
                    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                        header[i].classList.add('active');
                    } else {
                        header[i].classList.remove('active');
                    }
                }
            }
        }
    }

    // Toggle Menu
    const toggleMenu = (toggleID, toggleNav) => {
        let toggleLink = document.querySelector(toggleID),
            toggleItem = document.querySelector(toggleNav);
        if (toggleLink && toggleItem) {
            toggleLink.onclick = () => {
                if (toggleItem.classList.contains('active')) {
                    toggleItem.classList.remove("active");
                } else {
                    toggleItem.classList.add("active");

                }
            }
        }
    }
    toggleMenu('#toggleBtn', '#toggleNav');


    // Close Modal
    const closeModal = (closeBtn, modal) => {
        let closeLink = document.querySelector(closeBtn),
            modalItem = document.querySelector(modal);
        if (closeLink && modalItem) {
            closeLink.onclick = () => {
                modalItem.classList.remove("active");
            }
        }
    }
    closeModal('#closeModal', '#vipModal');

    // Benefit Swiper
    const benefitSwiperID = document.getElementById('benefitSwiper');
    if (benefitSwiperID && window.innerWidth < 992) {
        const benefitSwiper = new Swiper('#benefitSwiper', {
            loop: true,
            autoHeight: true,
            pagination: {
                el: '#benefitSwiper .swiper-pagination',
            },
            navigation: {
                nextEl: '#benefitSwiper .swiper-button-next',
                prevEl: '#benefitSwiper .swiper-button-prev',
            },
        });
    }

    // Affordable Swiper
    const affordableSwiperID = document.getElementById('affordableSwiper');
    if (affordableSwiperID && window.innerWidth < 992) {
        const affordableSwiper = new Swiper('#affordableSwiper', {
            loop: true,
            autoHeight: true,
            pagination: {
                el: '#affordableSwiper .swiper-pagination',
            },
            navigation: {
                nextEl: '#affordableSwiper .swiper-button-next',
                prevEl: '#affordableSwiper .swiper-button-prev',
            },
        });
    }



    // Show Dropdown 
    const showDropdowns = (dropdownLinkID, dropdownContentID) => {
        let dropDownLink = document.querySelectorAll(dropdownLinkID),
            dropDownContent = document.querySelectorAll(dropdownContentID);

        window.onclick = () => {
            dropDownLink.forEach(el => {
                el.classList.remove("active");
            });
            dropDownContent.forEach(el => {
                el.classList.remove("active");
            });
        }

        if (dropDownLink && dropDownContent) {
            const openTabs = el => {
                el.stopPropagation();
                let selectedLink = el.currentTarget.classList,
                    showId = el.currentTarget.dataset.dropdown,
                    currentDropdown = document.querySelector("#" + showId);

                if (selectedLink.contains('active')) {
                    selectedLink.remove("active");
                    currentDropdown.classList.remove("active");
                } else {
                    dropDownLink.forEach(el => {
                        el.classList.remove("active");
                    });
                    dropDownContent.forEach(el => {
                        el.classList.remove("active");
                    });
                    selectedLink.add("active");
                    currentDropdown.classList.add("active");
                }
            }
            dropDownLink.forEach(el => {
                el.addEventListener("click", openTabs);
            });
        }
    }
    showDropdowns('[data-dropdown]', '.dropdown');

    // Play video in Lightbox
    var videoGallery = document.querySelectorAll('.video-gallery');
    if (videoGallery.length) {
        for (var i = 0; i < videoGallery.length; i++) {
            lightGallery(videoGallery[i], {
                plugins: [lgVideo],
                autoplayVideoOnSlide: true,
                zoom: true
            });
        }
    }

    // Trigger Video click on Button
    const playVideoID = document.getElementById('playVideo');
    if (playVideoID) {
        playVideoID.onclick = (el) => {
            el.currentTarget.closest('.video-block').querySelector('.video-gallery img').click();
        }
    }

    // Light Gallery in Lightbox
    var gallery = document.querySelectorAll('.light-gallery');
    if (gallery.length) {
        for (var i = 0; i < gallery.length; i++) {
            lightGallery(gallery[i], {
                plugins: [lgZoom, lgThumbnail],
                speed: 500,
            });
        }
    }

    // Trigger Gallery click on Button
    const playGallery = document.querySelectorAll('.play-gallery');
    if (playGallery.length) {
        for (var i = 0; i < playGallery.length; i++) {
            playGallery[i].onclick = (el) => {
                el.currentTarget.closest('.result-gallery').querySelector('.result-image img').click();
            }
        }
    }


    // Switch View 
    const switchView = (searchBtnID, resultBtnID) => {
        let searchBtn = document.querySelector(searchBtnID),
            resultBtn = document.querySelector(resultBtnID);
        if (searchBtn && resultBtn) {
            searchBtn.onclick = () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                document.body.classList.remove('home');
                document.body.classList.add('results');
            }
            resultBtn.onclick = () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                document.body.classList.add('home');
                document.body.classList.remove('results');
            }
        }
    }
    switchView('#searchFlights', '#editSearch', );
})();