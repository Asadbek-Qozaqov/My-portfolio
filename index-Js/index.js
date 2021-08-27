// ===============================  menyuni ochilib yopilishi uchun id orqali murojat  ===============================
let navMenu = document.getElementById('nav-menu');
let navToogle = document.getElementById('nav-toogle');
let navClse = document.getElementById('nav-close');


// ================================  menyu ochilishi uchun yozilgan js cod  =================================
if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// ============================  menyu yopilishi uchun yozilgan js cod  ===================================
if (navClse) {
    navClse.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// =============================  menyudagi elementlarni bosganda ham menyu yopilishi uchun kerak bolgan cod  =============================
function lincAction() {
    let navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu')
}


// =============================  SKILLS BO'LIMIGA ACCARDION EFFECTI  =============================
let actives1 = true;
let actives2 = false;
let actives3 = false;

function activeSkills(amallar) {
    if (amallar === '1') {
        actives1 = !actives1;
        if (actives1 === false) {
            document.getElementById('skills-arrow-active1').classList.remove('skills-arrow-active');
            document.getElementById('skills-list-active1').classList.remove('skills-list-active');
        } else if (actives1 === true) {
            document.getElementById('skills-arrow-active1').classList.add('skills-arrow-active');
            document.getElementById('skills-list-active1').classList.add('skills-list-active');
        }
    } else if (amallar === '2') {
        actives2 = !actives2;
        if (actives2 === true) {
            document.getElementById('skills-arrow-active2').classList.add('skills-arrow-active');
            document.getElementById('skills-list-active2').classList.add('skills-list-active');
        } else if (actives2 === false) {
            document.getElementById('skills-arrow-active2').classList.remove('skills-arrow-active');
            document.getElementById('skills-list-active2').classList.remove('skills-list-active');
        }
    } else if (amallar === '3') {
        actives3 = !actives3;
        if (actives3 === true) {
            document.getElementById('skills-arrow-active3').classList.add('skills-arrow-active');
            document.getElementById('skills-list-active3').classList.add('skills-list-active');
        } else if (actives3 === false) {
            document.getElementById('skills-arrow-active3').classList.remove('skills-arrow-active');
            document.getElementById('skills-list-active3').classList.remove('skills-list-active');
        }
    }
}

//==============================  QUALIFIKATION TAB ni ishlatuvchi funksiya  ============================
function addAndRemove(event) {
    if (event === 'education') {
        document.getElementById('qualification-content1').classList.add('qualification-tab-active');
        document.getElementById('qualification-content2').classList.remove('qualification-tab-active');

        document.getElementById('education').classList.add('qualification-button-active');
        document.getElementById('work').classList.remove('qualification-button-active')

    } else if (event === 'work') {
        document.getElementById('qualification-content2').classList.add('qualification-tab-active');
        document.getElementById('qualification-content1').classList.remove('qualification-tab-active');

        document.getElementById('work').classList.add('qualification-button-active');
        document.getElementById('education').classList.remove('qualification-button-active')

    }
}


// ================================  SERVICES NING MODAL QISMI  ==================================
let modalViews = document.querySelectorAll('.services-modal'),
    modalBtns = document.querySelectorAll('.services-button'),
    modalCloses = document.querySelectorAll('.services-modal-close');


for (let i = 0; i < modalViews.length; i++) {
    modalBtns[i].addEventListener('click', () => {
        modalViews[i].classList.add('active-modal')
    });

    modalCloses[i].addEventListener('click', () => {
        modalViews[i].classList.remove('active-modal')
    })

}


// ======================================  PORTFOLIO SWIPPER yani bu yerda portfolio qismidagi sliderni js kodi joylashgan  =====================================
let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


// ======================================  TESTIMONIAL yani mijozlar qismidagi sliderning js codlari joylashgan  =====================================
let swiperTestimonial = new Swiper(".testimonial-container", {
    loop: true,  // loop bu slayderni oxirgi elementi kelganda yana qaytadan boshlab ketishi yani chegarada tohtab qolmasligini taminlaydi
    grabCursor: true, // grabCursor bu slayderni ustiga kursor borganda u qolchaga aylanip qolishini taminlab beradi
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true, // clickable bu sliderning pastidagi nuqtalarni bosganda ham slider o'tishini taminlab beradi
        dynamicBullets: true,  // dynamicBullets bu sliderni nuqtachalari bosilganda effectivni ishlashi uchun kerak
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});


// SCROLL SECTION ACTIVE LINK yani foydalanuvchi qaysi sectionda turgan bolsa shu sectonga mos linkdagi menu active boladi
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    // scrollY bu scrol bolganda ecranga korinmay qolgan qismining uzunligi u string tipiga ega

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            // sectionTop bu otip ketgan sectionni boshlanish yani top borderidan boshlanib browserni topqismigacha bolgan masofaga teng
            sectionId = current.getAttribute('id');


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);


// ==================================  CHANGE BACGROUND HEADER bu js cod proect scrol bolganda menuni bacgroundiga stil qoshish uchun  ==================================
function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);


// ================================  SHOW SCROLL UP yani bu element header qisimda bolganingizda korinmaydi va pastga scroll qilib tushishni boshlaganingizda paydo boladi ==============================
function windowScrollUp() {
    const scrollUP = document.getElementById('scroll-up');

    if (this.scrollY >= 560) {
        // scrollY bu skrol qilingan masofa va u px da o'lchanadi
        scrollUP.classList.add('show-scroll')
    } else {
        scrollUP.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', windowScrollUp);


// ================================  DARK LIGHT THEME yani qorong'u yoriq tema qismi  ==============================
let darkTheme = true;

document.getElementById('theme-button').addEventListener('click', () => {
    darkTheme = !darkTheme;

    if (darkTheme === false) {
        document.body.classList.remove('dark-theme');
        document.getElementById('theme-button').classList.remove('uil-sun');
        document.getElementById('theme-button').classList.add('uil-moon');

    } else if (darkTheme === true) {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-button').classList.remove('uil-moon');
        document.getElementById('theme-button').classList.add('uil-sun');
    }
});

// AOS scrol bolgnda effectli chiqishlarning js codi

AOS.init({
    once: true,   // bu cod aosni bir marta ishlatadi
    disable: 'boolean', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function ///// bu kodlar aosni qaysi ekranlarda ishlamasligini taminlaydi
});










