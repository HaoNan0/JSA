// Function to load product details on detail page
function loadProductDetail() {
    const currentProduct = localStorage.getItem('currentProduct');
    
    if (!currentProduct) {
        // If no product selected, redirect to home
        window.location.href = 'index.html';
        return;
    }
    
    const product = JSON.parse(currentProduct);
    
    // Update page title
    document.title = `${product.name} - TechHub`;
    
    // Update breadcrumb
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="index.html">Home</a> / 
            <a href="index.html#products">Products</a> / 
            <span>${product.name}</span>
        `;
    }
    
    // Update product image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }
    
    // Update product info
    const productTitle = document.querySelector('.product-info h1');
    if (productTitle) {
        productTitle.textContent = product.name;
    }
    
    const productPrice = document.querySelector('.product-price');
    if (productPrice) {
        productPrice.textContent = `$${product.price.toLocaleString()}`;
    }
    
    const productDescription = document.querySelector('.product-description');
    if (productDescription) {
        productDescription.textContent = product.description;
    }
}

// Quantity control functions
let quantity = 1;

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
    }
}

// Image change function
function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

// Add to cart functionality with authentication check
function addToCart() {
    if (!requireLogin('add to cart')) {
        return;
    }
    
    // User is logged in, proceed with add to cart
    const currentProduct = localStorage.getItem('currentProduct');
    if (!currentProduct) {
        alert('Product not found');
        return;
    }
    
    const product = JSON.parse(currentProduct);
    const quantity = parseInt(document.getElementById('quantity').textContent);
    
    // Get existing cart or create new one
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        // Update quantity
        existingItem.quantity += quantity;
    } else {
        // Add new item
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success message
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
}

// Initialize detail page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetail();
    
    // Add event listener to Add to Cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }
});
