const productsData = [
  {
    "id": 1,
    "name": "iPhone 15 Pro",
    "price": 999,
    "description": "The most advanced iPhone yet with titanium design and A17 Pro chip",
    "image": "img/images.jpg"
  },
  {
    "id": 2,
    "name": "MacBook Pro 16\"",
    "price": 2499,
    "description": "Supercharged by M3 Pro and M3 Max chips for extreme performance",
    "image": "img/17608454053275138.jpg"
  },
  {
    "id": 3,
    "name": "Samsung Galaxy S24 Ultra",
    "price": 1199,
    "description": "AI-powered smartphone with S Pen and 200MP camera",
    "image": "img/download (1).jpg"
  },
  {
    "id": 4,
    "name": "Sony WH-1000XM5",
    "price": 399,
    "description": "Industry-leading noise canceling wireless headphones",
    "image": "img/ChatGPT Image Oct 19, 2025, 10_41_19 AM1.png"
  },
  {
    "id": 5,
    "name": "iPad Pro 12.9\"",
    "price": 1099,
    "description": "The ultimate iPad experience with M2 chip and Liquid Retina display",
    "image": "img/download (3).jpg"
  },
  {
    "id": 6,
    "name": "Apple Watch Series 9",
    "price": 399,
    "description": "Advanced health features and the brightest Always-On display",
    "image": "img/download (4).jpg"
  },
  {
    "id": 7,
    "name": "AirPods Pro (2nd Gen)",
    "price": 249,
    "description": "Active noise cancellation and adaptive transparency",
    "image": "img/ChatGPT Image Oct 19, 2025, 10_41_19 AM.png"
  },
  {
    "id": 8,
    "name": "Dell XPS 15",
    "price": 1899,
    "description": "Powerful laptop with Intel i9 and OLED display",
    "image": "img/download (2).jpg"
  },
  {
    "id": 9,
    "name": "Google Pixel 8 Pro",
    "price": 999,
    "description": "AI-driven smartphone with advanced camera system",
    "image": "img/download.jpg"
  },
  {
    "id": 10,
    "name": "PlayStation 5",
    "price": 499,
    "description": "Next-gen gaming console with ultra-high-speed SSD",
    "image": "img/images.jpg"
  }
];

// Initialize localStorage with products data
if (localStorage.getItem('products') == null) {
    localStorage.setItem('products', JSON.stringify(productsData));
}

// Function to render products on the homepage
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    const products = JSON.parse(localStorage.getItem('products')) || productsData;
    
    // Clear existing products
    productGrid.innerHTML = '';
    
    // Render each product
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price.toLocaleString()}</div>
            <a href="detail.html" class="buy-button" data-product-id="${product.id}">View Details</a>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Add event listeners to product cards
    addProductClickListeners();
}

// Function to add click event listeners to product cards
function addProductClickListeners() {
    const buyButtons = document.querySelectorAll('.buy-button[data-product-id]');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-product-id'));
            const products = JSON.parse(localStorage.getItem('products')) || productsData;
            const selectedProduct = products.find(product => product.id === productId);
            
            if (selectedProduct) {
                localStorage.setItem('currentProduct', JSON.stringify(selectedProduct));
                window.location.href = 'detail.html';
            }
        });
    });
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        renderProducts();
    }
});