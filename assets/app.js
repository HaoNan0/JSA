[
  {
    "id": 1,
    "name": "iPhone 15 Pro",
    "price": 999,
    "description": "The most advanced iPhone yet with titanium design and A17 Pro chip",
    "image": "images/iphone15pro.png"
  },
  {
    "id": 2,
    "name": "MacBook Pro 16\"",
    "price": 2499,
    "description": "Supercharged by M3 Pro and M3 Max chips for extreme performance",
    "image": "images/macbookpro.png"
  },
  {
    "id": 3,
    "name": "Samsung Galaxy S24 Ultra",
    "price": 1199,
    "description": "AI-powered smartphone with S Pen and 200MP camera",
    "image": "images/galaxys24.png"
  },
  {
    "id": 4,
    "name": "Sony WH-1000XM5",
    "price": 399,
    "description": "Industry-leading noise canceling wireless headphones",
    "image": "images/sonyxm5.png"
  },
  {
    "id": 5,
    "name": "iPad Pro 12.9\"",
    "price": 1099,
    "description": "The ultimate iPad experience with M2 chip and Liquid Retina display",
    "image": "images/ipadpro.png"
  },
  {
    "id": 6,
    "name": "Apple Watch Series 9",
    "price": 399,
    "description": "Advanced health features and the brightest Always-On display",
    "image": "images/applewatch.png"
  },
  {
    "id": 7,
    "name": "AirPods Pro (2nd Gen)",
    "price": 249,
    "description": "Active noise cancellation and adaptive transparency",
    "image": "images/airpodspro.png"
  },
  {
    "id": 8,
    "name": "Dell XPS 15",
    "price": 1899,
    "description": "Powerful laptop with Intel i9 and OLED display",
    "image": "images/dellxps15.png"
  },
  {
    "id": 9,
    "name": "Google Pixel 8 Pro",
    "price": 999,
    "description": "AI-driven smartphone with advanced camera system",
    "image": "images/pixel8pro.png"
  },
  {
    "id": 10,
    "name": "PlayStation 5",
    "price": 499,
    "description": "Next-gen gaming console with ultra-high-speed SSD",
    "image": "images/ps5.png"
  }
]


if (localStorage.getItem('data') == null) {
    localStorage.setItem('data', JSON.stringify(data))
}