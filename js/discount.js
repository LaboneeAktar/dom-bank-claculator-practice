/*
document.getElementById('btn-discount').addEventListener('click', function () {
    const buttonDiscount = document.getElementById('discount-price');
    const discountPriceString = buttonDiscount.innerText;
    const discountPrice = parseFloat(discountPriceString);

    const mainPrice = document.getElementById('main-price');
    const previousMainPriceString = mainPrice.innerText;
    const mainPriceTk = parseFloat(previousMainPriceString);

    const productPrice = document.getElementById('product-price');
    const productPriceString = productPrice.innerText;
    const newPrice = parseFloat(productPriceString);

    const newDiscountPrice = (mainPriceTk * 30) / 100;
    buttonDiscount.innerText = newDiscountPrice;

    const afterDiscount = mainPriceTk - newDiscountPrice;
    productPrice.innerText = afterDiscount;
})
*/

//Discount calculate using input field "DOM"

// document.getElementById('input-field').addEventListener('keyup', function (event) {
//     const text = event.target.value;

//     const discountButton = document.getElementById('btn-discount');
//     if (text == 'DOM') {
//         discountButton.removeAttribute('disabled');
//     }
//     else {
//         alert('No Discount');
//     }
// })
document.getElementById('btn-discount').addEventListener('click', function () {
    const buttonDiscount = document.getElementById('discount-price');
    const discountPriceString = buttonDiscount.innerText;
    const discountPrice = parseFloat(discountPriceString);

    const mainPrice = document.getElementById('main-price');
    const previousMainPriceString = mainPrice.innerText;
    const mainPriceTk = parseFloat(previousMainPriceString);

    const productPrice = document.getElementById('product-price');
    const productPriceString = productPrice.innerText;
    const newPrice = parseFloat(productPriceString);

    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    inputField.value = '';

    if (inputFieldText == 'DOM') {
        const newDiscountPrice = (mainPriceTk * 30) / 100;
        buttonDiscount.innerText = newDiscountPrice;

        const afterDiscount = mainPriceTk - newDiscountPrice;
        productPrice.innerText = afterDiscount;

    }
    else {
        alert('Discount Code is Not Matche so, No Discount Available for You');
    }
})