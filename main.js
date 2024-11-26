/*====================titleHomeYouness=========================*/
const titleDisplay = document.querySelector(".title__top")

const wordsTitle = titleDisplay.children[0].innerText.split('');
titleDisplay.innerHTML = ''
wordsTitle.forEach((letter, indx) => {
    titleDisplay.innerHTML += `
    <h1>${letter}
    <span>${letter}</span>
    </h1>`
})


/*====================Opacity Youness Navbar=========================*/

const article = document.querySelector('.article')
const navbarBack = document.querySelector('.navbar__background')
const subTitle = document.querySelector('.sub__opacity')

let counterOpacity = 1;
let heightNav = 0;
let oldScroll = window.scrollY


window.addEventListener('scroll', () => {
    if (scrollY > 0 && scrollY < 300) {
        if (window.scrollY > oldScroll) {
            counterOpacity -= 0.01
            titleDisplay.style.opacity = counterOpacity
            subTitle.style.opacity = counterOpacity
            heightNav += 1
            navbarBack.style.height = `${heightNav}px`
            if (counterOpacity <= 0) {
                counterOpacity = 0
            }
            if (heightNav >= 100) {
                heightNav = 100
            }
        } else {
            counterOpacity += 0.01
            titleDisplay.style.opacity = counterOpacity
            subTitle.style.opacity = counterOpacity
            heightNav -= 1
            navbarBack.style.height = `${heightNav}px`
            if (counterOpacity >= 1) {
                counterOpacity = 1
            }
            if (heightNav <= 0) {
                heightNav = 0
            }
        }
        oldScroll = window.scrollY
    }

    if (window.scrollY == 0) {
        titleDisplay.style.opacity = 1
        navbarBack.style.height = "0px"
        subTitle.style.opacity = 1

    } else if (window.scrollY > 300) {
        titleDisplay.style.opacity = 0
        navbarBack.style.height = "100px"
        subTitle.style.opacity = 0
    }
})



// ================================= CURSOR ============================================

const cursor = document.querySelector('.cursor__el');


document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`

})


const allLinks = document.querySelectorAll('a')

allLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.opacity = .8
        cursor.style.width = "35px"
        cursor.style.height = "35px"
    })

    link.addEventListener('mouseleave', () => {
        cursor.style.transition = "width .3s, height .3s, opacity .3s"
        cursor.style.opacity = 1
        cursor.style.width = "25px"
        cursor.style.height = "25px"
    })
})


// ================================= NAVBAR ============================================


const menuItem = document.querySelector('.menu__items');
const closeIcon = document.getElementById('close');

const navbarliens = document.querySelector('.navbar__liens')
menuItem.addEventListener('click', () => {
    navbarliens.classList.add('active')
})

closeIcon.addEventListener('click', () => {
    navbarliens.classList.remove('active')
})

// =============================================SCROLLTEXT===============================

const scrollContent = document.querySelector('.scroll__auto');
const scrollText = document.querySelector('.scroll__content');
const scrollFooter = document.querySelector('.scroll__footer')

const nodeText = [];

const nodeTextfooter = [];


for (let i = 0; i < 10; i++) {
    nodeText[i] = scrollText.cloneNode(true)
    nodeTextfooter[i] = scrollText.cloneNode(true)
}

nodeText.forEach(item => {
    scrollContent.appendChild(item)
})

nodeTextfooter.forEach(item => {
    scrollFooter.appendChild(item)
})









// =============================================SLIDERTESTEMONIALS===============================

const next = document.querySelector('.slider__next')

const prev = document.querySelector('.slider__prev')

const slide = document.querySelector('.slider__slider')

const testimonials = [
    {
        textOne: "SOME KIND WORDS FROM MY CLIENTS.",
        textTwo: "It was such a joy to work with one of the most talented and hard-working designers we ever met. Fungi Dube is such an inspiring creative.",
        textThree: "FONTWERK",
        textFoor: "TYPE FOUNDRY, BERLIN.",
        img: "./images/slider__one.jpg"
    },
    {
        textOne: "SOME KIND WORDS FROM MY CLIENTS.",
        textTwo: "I wanted to share specialty coffee from Burundi with the world. My reaction: Emotional! I wanted an African Brand Designer, I got one of the best! I recommend 1000%!",
        textThree: "patrick ndirimurukundo",
        textFoor: "RUKUNDO IKAWA GOURMET, UK.",
        img: "./images/slider__two.jpg"
    },
    {
        textOne: "SOME KIND WORDS FROM MY CLIENTS.",
        textTwo: "Working with Fungi was inspiring. Her intake is very detailed. She did a great job embracing my values into my personal branding and it has helped me be consistent with my public persona.",
        textThree: "TINASHE JOHNSON",
        textFoor: "DENTIST, BERMUDA",
        img: "./images/slider__three.jpg"
    },
    {
        textOne: "SOME KIND WORDS FROM MY CLIENTS.",
        textTwo: "We enjoyed working with Fungi. She is a true professional. She took the time to understand our brand (and our vision), and communicated it well and cohesively.",
        textThree: "KUMBIRAI MAKANZA",
        textFoor: "SMART MOBILITY, CAPE TOWN",
        img: "./images/slider__foor.jpg"
    },
    {
        textOne: "SOME KIND WORDS FROM MY CLIENTS.",
        textTwo: "You rarely find someone who is kind, talented and reliable. Couldn’t be happier about our collaboration!",
        textThree: "CHRISTOPH KOEBERLIN",
        textFoor: "FONT ENGINEER, BERLIN",
        img: "./images/slider__five.jpg"
    },
]

const testimonialsMap = testimonials.map(testi => {
    return `<div class="slider__info">
    <div class="slider__info-text">
        <h3>${testi.textOne}</h3>
        <p>${testi.textTwo}</p>
        <div class="info__sub">
            <h2>${testi.textThree}</h2>
            <p class="founder">${testi.textFoor}</p>
        </div>
    </div>

    <div class="slider__info-img">
        <img src="${testi.img}" alt="">
    </div>
</div>`
})


const testiJoins = testimonialsMap.join('')

slide.innerHTML = testiJoins

const sliderInfo = document.querySelectorAll('.slider__info')

const sliderFirst = sliderInfo[0].cloneNode(true);
const sliderLast = sliderInfo[sliderInfo.length - 1].cloneNode(true);

slide.appendChild(sliderFirst)
slide.insertBefore(sliderLast, sliderInfo[0])



document.documentElement.style
    .setProperty('--lenthTesti', testimonials.length + 2);

console.log(testimonials.length)

let counterSlide = -90;

function nextSlide() {
    if (counterSlide == -90 * (testimonials.length + 1)) return
    counterSlide -= 90
    slide.style.transform = `translateX(${counterSlide}vw)`;
    slide.classList.add('active')
}

function prevSlide() {
    if (counterSlide == 0) return
    counterSlide += 90
    slide.style.transform = `translateX(${counterSlide}vw)`;
    slide.classList.add('active')
}



next.addEventListener('click', () => nextSlide())
prev.addEventListener('click', () => prevSlide())


slide.addEventListener('transitionend', () => {
    if (counterSlide == -90 * (testimonials.length + 1)) {
        counterSlide = -90
        slide.style.transform = `translateX(${counterSlide}vw)`;
        slide.classList.remove('active')
    } else if (counterSlide == 0) {
        counterSlide = -90 * testimonials.length
        slide.style.transform = `translateX(${counterSlide}vw)`;
        slide.classList.remove('active')
    }
})


next.addEventListener('mouseenter', () => {
    cursor.style.opacity = .8
    cursor.style.width = "35px"
    cursor.style.height = "35px"
})

next.addEventListener('mouseleave', () => {
    cursor.style.transition = "width .3s, height .3s, opacity .3s"
    cursor.style.opacity = 1
    cursor.style.width = "25px"
    cursor.style.height = "25px"
})

prev.addEventListener('mouseenter', () => {
    cursor.style.opacity = .8
    cursor.style.width = "35px"
    cursor.style.height = "35px"
})

prev.addEventListener('mouseleave', () => {
    cursor.style.transition = "width .3s, height .3s, opacity .3s"
    cursor.style.opacity = 1
    cursor.style.width = "25px"
    cursor.style.height = "25px"
})



// ===============================CARDINSTAGRAM===========================

const cardInstagram = document.querySelectorAll('.cards__instagram a');


let options = {
    threshold: .2,
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active')
        } else {
            entry.target.classList.remove('active')
        }
    })
}, options)


cardInstagram.forEach(card => {
    observer.observe(card)
})
