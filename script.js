const cartItems = document.getElementById('cart-items');

function addToCart(product) {
    const item = document.createElement('li');
    item.textContent = product;
    cartItems.appendChild(item);

    // הסרת הודעת "העגלה שלך ריקה" אם קיימת
    if (cartItems.children[0].textContent === "העגלה שלך ריקה") {
        cartItems.removeChild(cartItems.children[0]);
    }
}
