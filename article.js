const sectionProduct = document.querySelector('.section__product');

const products = [
    {
        img_one: "./product/product__one.jpg",
        path_one: "/product__one",
        class: "article__one",
        img_two: "./product/product__two.png",
        path_two: "/product__two"
    },
    {
        img_one: "./product/product__three.jpg",
        path_one: "/product__three",
        class: "article__two",
        img_two: "./product/product__foor.jpg",
        path_two: "/product__foor",
    },
    {
        img_one: "./product/product__five.png",
        path_one: "/product__five",
        class: "article__three",
        img_two: "./product/product__six.jpg",
        path_two: "/product__six",

    }
]


const myProducts = products.map(product => {
    return `
    <article class="${product.class}">
                <div class="product__one">
                <div class= "back__div-product"></div>
                    <a href="${product.path_one}">
                        <img src="${product.img_one}" alt="">
                    </a>
                </div>

                <div class="product__two">
                <div class= "back__div-product"></div>
                    <a href="${product.path_two}">
                        <img src="${product.img_two}" alt="">
                    </a>
                </div>
            </article>
    `
})

const myProductsJoin = myProducts.join('')

sectionProduct.innerHTML = myProductsJoin


{/* <article class="article__one">
                <div class="product__one">
                    <a href="#">
                        <img src="./product/product__one.jpg" alt="">
                    </a>
                </div>

                <div class="product__two">
                    <a href="#">
                        <img src="./product/product__two.png" alt="">
                    </a>
                </div>
            </article> */}

const articleOne = document.querySelector('.article__one');
const articleOneTop = articleOne.getBoundingClientRect().top;

const articleTwo = document.querySelector('.article__two');
const articleTwoTop = articleOne.getBoundingClientRect().top;

document.addEventListener('scroll', () => {
    if (scrollY >= articleOneTop) {
        articleOne.classList.add('active')
    } else {
        articleOne.classList.remove('active')
    }

    if (scrollY >= articleTwoTop) {
        articleTwo.classList.add('active')
    } else {
        articleTwo.classList.remove('active')
    }
})



// ========================================TAMPLATE======================

const templates = [
    {
        path: "brand",
        img: "./images/card__one.jpg",
        alt: "image__one",
        name: "brand identity questionnaire",
        price: "$ 5.99"
    },

    {
        path: "pricing",
        img: "./images/card__two.jpg",
        alt: "image__two",
        name: "pricing & packages guide",
        price: "$ 3.99"
    },

    {
        path: "creative",
        img: "./images/card__three.jpg",
        alt: "image__three",
        name: "creative & visual direction",
        price: "$ 3.99"
    }
]


const myTem = templates.map(template => {

    return `<a href="${template.path}" class="card">
    <div class="img__card">
        <img src="${template.img}" alt="${template.alt}">
    </div>

    <div class="price__name-card">
        <p>${template.name}</p>
        <span>${template.price}</span>
    </div>
</a>`
    // const lien = document.createElement('a');
    // lien.setAttribute('href', template.path);
    // lien.setAttribute('class', 'card');

    // const myDiv = document.createElement('div');
    // myDiv.setAttribute('class', 'img__card');

    // const img = document.createElement('img');
    // img.src = template.img;
    // img.setAttribute('alt', template.alt);
    // myDiv.appendChild(img);

    // const myDivTwo = document.createElement('div');
    // myDivTwo.setAttribute('class', 'price__name-card');

    // const text = document.createElement('p');
    // text.innerText = template.name;

    // const span = document.createElement('span');
    // span.innerText = template.price;

    // myDivTwo.appendChild(text);
    // myDivTwo.appendChild(span);

    // lien.appendChild(myDiv);
    // lien.appendChild(myDivTwo);

    // return lien
})

const myTemplates = myTem.join('')

const templateCards = document.querySelector('.template__cards');
templateCards.innerHTML = myTemplates


