genderRadios = document.querySelectorAll('.radio-input');

img_pizza = document.getElementById("piz-img")
img_pizza.src = './img/empty-pizza.svg'

// Соусы



genderRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked & this.value === "1") {
            img_pizza.setAttribute('src', './img/souse 1.svg')
        }
        else if (this.checked & this.value === "2") {
            img_pizza.setAttribute('src', './img/souse 2.svg')
        }
    });
});

const add_ingridients = document.querySelector(".add-ingridients");
const button_b = document.querySelector('.category-b')
const allBtn = document.querySelectorAll('.category-b');


function handleCheeseClick(clickedButton) {
    
    allBtn.forEach(button => {
        button.style.backgroundColor = '#FFFAF0'
    })
    add_ingridients.innerHTML = `
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/cheese 1.svg"></button>
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/cheese 2.svg"></button>
    `
    clickedButton.style.backgroundColor = '#FFDBA5';
}

function handleMeatClick(clickedButton) {
    allBtn.forEach(button => {
        button.style.backgroundColor = '#FFFAF0'
    })
    add_ingridients.innerHTML = `
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/meat 1.svg"></button>
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/meat 2.svg"></button>
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/meat 3.svg"></button>
    `
    clickedButton.style.backgroundColor = '#FFDBA5';
}

function handleVegClick(clickedButton) {
    allBtn.forEach(button => {
        button.style.backgroundColor = '#FFFAF0'
    })
    add_ingridients.innerHTML = `
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/veg 1.svg"></button>
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/veg 2.svg"></button>
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/veg 3.svg"></button>
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/veg 4.svg"></button>
    `
    clickedButton.style.backgroundColor = '#FFDBA5';
}

function handleAdditClick(clickedButton) {
    allBtn.forEach(button => {
        button.style.backgroundColor = '#FFFAF0'
    })
    add_ingridients.innerHTML = `
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/add 1.svg"></button>
    <button class="add-btn-ing" onClick='createProduct(1)'><img src="./img/add 2.svg"></button>
    `
    clickedButton.style.backgroundColor = '#FFDBA5';
}

pizza_container = document.querySelector('.pizza-container');

let currentDragged = null;

function createProduct() {

        const fbutton = event.target.closest('.add-btn-ing');
        if (!fbutton) return;

        const img = fbutton.querySelector('img');
        const product = document.createElement('img');
        const imgPath = img.getAttribute('src');
        const newPath = imgPath.replace('/img/', '/img/g');

        product.src = newPath;
        product.draggable = true;
        product.classList.add('draggable-ing');

        product.addEventListener('dragstart', (e) => {
            currentDragged = product;
            e.dataTransfer.setDragImage(new Image(), 0, 0);
        });

        pizza_container.appendChild(product);

}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();

    if (currentDragged) {
        const rect = pizza_container.getBoundingClientRect();

        const x = e.clientX - rect.left - currentDragged.offsetWidth / 2;
        const y = e.clientY - rect.top - currentDragged.offsetHeight / 2;

        currentDragged.style.left = `${x}px`;
        currentDragged.style.top = `${y}px`;

        currentDragged = null;
    }
}

function deleteButton() {
    pizza_container.innerHTML = `
    <img id="piz-img" src="./img/empty-pizza.svg" alt="pizza-img" style="width: 100%;">
    `
    img_pizza = document.getElementById("piz-img");
    genderRadios.forEach(r => r.checked = false);
}