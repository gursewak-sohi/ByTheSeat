(function() {
    // Deal carouselTicker Init
    if ($("#dealScroll").length > 0) {
        $("#dealScroll").carouselTicker({
            direction: "prev",
        });
    }

    // Feedback carouselTicker Init
    if ($("#feedbackScroll").length > 0) {
        $("#feedbackScroll").carouselTicker({
            direction: "prev",
        });
    }

    // Open Vip modal when about to close modal
    let moveOnce = true;
    const vipModal = document.querySelector("#vipModal");
    if (vipModal) {
        document.body.addEventListener("mousemove", function(e) {
            if (moveOnce && e.pageY < 10) {
                moveOnce = false;
                vipModal.classList.add('active');
            }
        });
    }


    // Animate Floating Header On Scroll
    const header = document.querySelectorAll("header");
    if (header.length > 0) {
        window.onscroll = () => scrollFunction();
        const scrollFunction = () => {
            for (var i = 0; i < header.length; i++) {
                if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                    header[i].classList.add('active');
                } else {
                    header[i].classList.remove('active');
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

    // Tooltip 
    const tooltipShow = (tooltipbtn, tooltip) => {
        let tooltipLink = document.querySelector(tooltipbtn),
            tooltipItem = document.querySelector(tooltip);
        if (tooltipLink && tooltipItem) {
            tooltipLink.onclick = (e) => {
                e.stopPropagation();
                if (tooltipItem.classList.contains('active')) {
                    tooltipItem.classList.remove("active");
                } else {
                    tooltipItem.classList.add("active");
                }
            }
            document.onclick = () => {
                tooltipItem.classList.remove("active");
            }
            tooltipItem.onclick = (e) => {
                e.stopPropagation();
                tooltipItem.classList.remove("active");
            }
        }
    }
    tooltipShow('[data-btn="tooltip"]', '[data-block="tooltip"]');


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
                zoom: true,
                mobileSettings: {
                    showCloseIcon: true,
                },
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
                mobileSettings: {
                    controls: true,
                    showCloseIcon: true,
                },
            });
        }
    }

    // Trigger Gallery click on Button
    const playGallery = document.querySelectorAll('.play-gallery');
    if (playGallery.length) {
        for (var i = 0; i < playGallery.length; i++) {
            playGallery[i].onclick = (el) => {
                el.currentTarget.closest('.light-gallery-wrapper').querySelector('a img').click();
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
                setTimeout(() => {
                    document.body.classList.remove('home');
                    document.body.classList.add('results');
                }, 0);
            }
            resultBtn.onclick = () => {
                document.body.classList.add('back-to-home');
                setTimeout(() => {
                    document.body.scrollTop = 250;
                    document.documentElement.scrollTop = 250;
                    document.body.classList.add('home');
                    document.body.classList.remove('results');
                    document.body.classList.remove('back-to-home');
                }, 300);

            }
        }
    }
    switchView('#searchFlights', '#editSearch', );


    // Switch Between Arrival And Depart On Seat Page
    const switchArivalDepart = (arivalBtnID, departBtnID, arivalID, departID) => {
        let arivalLink = document.querySelector(arivalBtnID),
            departLink = document.querySelector(departBtnID),
            arivalItem = document.querySelector(arivalID),
            departItem = document.querySelector(departID);
        if (arivalLink && departLink && arivalItem && departItem && window.innerWidth < 992) {
            arivalLink.onclick = () => {
                arivalItem.style.display = "block";
                departItem.style.display = "none";
            }
            departLink.onclick = () => {
                arivalItem.style.display = "none";
                departItem.style.display = "block";
            }
        }
    }
    switchArivalDepart('#arivalBtn', '#departBtn', '#arivalBlock', '#departBlock');


    // Slide Booking Footer on Mobile
    const slideBookingFooter = (bookingFooterID) => {
        let FooterItem = document.querySelector(bookingFooterID),
            lastScrollTop = 0;
        if (FooterItem && window.innerWidth < 992) {
            window.addEventListener("scroll", function() {
                let scrollTopPos = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTopPos > lastScrollTop) {
                    FooterItem.classList.add('static');
                } else {
                    FooterItem.classList.remove('static');
                }
                lastScrollTop = scrollTopPos <= 0 ? 0 : scrollTopPos; // For Mobile or negative scrolling
            }, false);
        }
    }
    slideBookingFooter('#bookingFooter');



    // Show hide Pet Block
    if ($("#petRadio").length > 0 && $("#petBlock").length > 0 && $("#petNote").length > 0) {
        $('#petRadio input[type="radio"]').on('change', function(e) {
            let petValue = this.value;
            if (petValue == 'pet-yes') {
                $('#petBlock').css('display', 'flex');
                $('#petNote').css('display', 'flex');
            } else {
                $('#petBlock').css('display', 'none');
                $('#petNote').css('display', 'none');
            }
        });
    }

    // Hide Custom Select
    if ($("#app-cover").length > 0) {
        $('#app-cover #options input[type="radio"]').on('change', function(e) {
            $('#options-view-button').prop('checked', false);
        });
        $(document).on('click', function(e) {
            $('#options-view-button').prop('checked', false);
        });
        $('#options-view-button').on('click', function(e) {
            e.stopPropagation();
        });
    }


    // Booking Process
    if ($("#bookingBlock").length > 0) {
        setTimeout(() => {
            $('#loading').hide();
            $('#bookingBlock').show();
        }, 3000);
        $(document).on('click', '[data-btn="details"]', function(e) {
            $('html, body').animate({ scrollTop: 0 }, 0);
            $('#bookingSteps ul li:nth-child(1)').removeClass('active').addClass('completed');
            $('#bookingSteps ul li:nth-child(2)').addClass('active');
            $('#seatsBlock').hide();
            $('#seatsBtns').hide();
            $('#detailsBlock').css('display', 'flex');
            $('#bookingBtns').empty();
            $('#bookingBtns').append(`<button data-btn="back-to-seats" class="btn btn-light-outline btn-md">Back</button><button data-btn="confirm" class="btn btn-primary btn-md">Next</button>`);
        });
        $(document).on('click', '[data-btn="back-to-seats"]', function(e) {
            $('html, body').animate({ scrollTop: 0 }, 0);
            $('#bookingSteps ul li:nth-child(1)').removeClass('completed').addClass('active');
            $('#bookingSteps ul li:nth-child(2)').removeClass('active');
            $('#seatsBlock').css('display', 'flex');
            $('#seatsBtns').css('display', 'flex');
            $('#detailsBlock').hide();
            $('#bookingBtns').empty();
            $('#bookingBtns').append(`<button data-btn="details" class="btn btn-primary btn-md">Next</button>`);
        });
        $(document).on('click', '[data-btn="confirm"]', function(e) {
            $('#bookingSteps ul li:nth-child(2)').removeClass('active').addClass('completed');
            $('#bookingSteps ul li:nth-child(3)').addClass('active');
            $('html, body').animate({ scrollTop: 0 }, 0);
            $('#detailsBlock').hide();
            $('#detailsBtns').hide();
            $('#confirmBlock').css('display', 'flex');
            $('#bookingBtns').empty();
            $('#bookingBtns').append(`<button data-btn="back-to-details" class="btn btn-light-outline btn-md">Back</button><button data-btn="thanks" class="btn btn-primary btn-md">Confirm and Pay</button>`);
        });
        $(document).on('click', '[data-btn="back-to-details"]', function(e) {
            $('html, body').animate({ scrollTop: 0 }, 0);
            $('#bookingSteps ul li:nth-child(2)').removeClass('completed').addClass('active');
            $('#bookingSteps ul li:nth-child(3)').removeClass('active');
            $('#detailsBlock').css('display', 'flex');
            $('#detailsBtns').css('display', 'flex');
            $('#confirmBlock').hide();
            $('#bookingBtns').empty();
            $('#bookingBtns').append(`<button data-btn="back-to-seats" class="btn btn-light-outline btn-md">Back</button><button data-btn="confirm" class="btn btn-primary btn-md">Next</button>`);
        });
        $(document).on('click', '[data-btn="thanks"]', function(e) {
            window.location.href = "thank-you.html";
        });
    }
})();