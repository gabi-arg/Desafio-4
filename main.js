const btnminus = document.querySelector('.input-minus')
const btnplus = document.querySelector('.input-plus')
const userInput = document.querySelector('.input-number')
const addToCartBtn = document.querySelector('.details-button')
const btnCart = document.querySelector('.header-cart')
const btnCartModal = document.querySelector('.cart-modal')
const productContainer = document.querySelector('.cart-modal-chekout-container')
let cartNotification = document.querySelector('.header-cart--notification')
/* const priceModal = document.querySelector('.cart-modal-price') */


//contador de articulos ingresado por el usuario
let userInputNumber = 0;
//addEventListener = llamo a travez de un evento (click ) desde html para que en js realize una funcion
btnplus.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});
btnminus.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});
//Agregar el total al carrito cdo se presiona el boton
let lastValue = parseInt(cartNotification.innerText);
addToCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;
    cartNotification.innerText = lastValue ;
    cartNotification.style.display = 'block';
    drawProductInModal();
   
}) 
//mostrar el carrito de compras (detalle)
btnCart.addEventListener('click', ()=>{
    btnCartModal.classList.toggle('show');
    if(lastValue == 0) {
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
        
    }else {
        drawProductInModal();
    }
    
})

//Borrar el contenido del carrito
function deleteProduct(){
    const deleteProdBtn = document.querySelector('.cart-modal-delete')
    deleteProdBtn.addEventListener('click',()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue ;
    })
}


function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal-details-container">
        <img class="cart-modal-image" src="./images/image-product-1.jpg" alt="product">
        <div>
            <p class="cart-modal-product">Autumn Limited Edition.</p>
            <p class="cart-modal-price">$125 x3 <span>$375</span></p>
        </div>
        <img class="cart-modal-delete" src="./images/icon-delete.svg" alt="icon- delete">
    </div>
    <button class="cart-modal-checkout">Checkout</button>
    `;
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal-price');
    priceModal.innerHTML = `$125 x ${lastValue}<span>${lastValue*125}.00</span>`;
}
//Cambiar imagenes cuando se presione los botones flecha
const imageContainer = document.querySelector('.gallery-img-container');
const nextGalleryBtn = document.querySelector('.gallery-next');
const previusGalleruBtn = document.querySelector('.gallery-previus');
let imgIndex = 1;
nextGalleryBtn.addEventListener('click',()=>{
    changeNextImg(imageContainer);
})

function changeNextImg(imgContainer){
    if (imgIndex == 4){
        imgIndex = 1;
    } else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
}
previusGalleruBtn.addEventListener('click',()=>{
    changePreviusImg(imageContainer);
})
function changePreviusImg(imgContainer){
    if (imgIndex == 1){
        imgIndex = 4;
    } else {
        imgIndex--;
    }
    
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
}

//Mostrar el modal cdo hago click en la img principal.
const imageModal = document.querySelector('.modal-gallery-background');
const closeModalBtn = document.querySelector('.modal-gallery-close');
imageContainer.addEventListener('click', ()=> {
    imageModal.style.display = 'flex';
});
closeModalBtn.addEventListener('click', ()=>{
    imageModal.style.display = 'none';
})

//CAmbiar las imagenes por las miniaturas


let thumbnails = document.querySelectorAll('.gallery-thumbnail')
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    });
});

//Cambiar las imagenes principales desde los thumbnails en el MODAL
let modalthumbnails = document.querySelectorAll('.modal-gallery-thumbnail');
const modalImageContainer = document.querySelector('.modal-gallery-img-container')
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', event=>{
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    });
});
const previusModalBtn = document.querySelector('.modal-gallery-previus');
const nextModalBtn = document.querySelector('.modal-gallery-next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImg(modalImageContainer);
});

previusModalBtn.addEventListener('click', ()=>{
    changePreviusImg(modalImageContainer);
});
 
 // Mostrar el navbar cuando presiono el menu de hamburgesa
const hamburgerMenu = document.querySelector('.header-menu');
const modalNavbar = document.querySelector('.modal-navbar-background');
const closeModalNavbar = document.querySelector('.modal-navbar-close');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    modalNavbar.style.display = 'flex';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
}); 

