// Configuration constants
const CONFIG = {
  selectors: {
    productsContainer: 'products',
    cartCount: 'cart-count'
  },
  classes: {
    productCard: 'product-card'
  },
  defaultProducts: [
    { id: 1, name: '商品1', price: 99.99 },
    { id: 2, name: '商品2', price: 199.99 },
    { id: 3, name: '商品3', price: 299.99 }
  ]
}

class ShoppingApp {
  constructor(config = {}) {
    this.config = { ...CONFIG, ...config }
    this.products = this.config.products || this.config.defaultProducts
    this.cart = []
    this.init()
  }

  init() {
    this.renderProducts()
    this.updateCartCount()
  }

  renderProducts() {
    const productsContainer = document.getElementById(this.config.selectors.productsContainer)
    this.products.forEach(product => {
      const productElement = document.createElement('div')
      productElement.className = this.config.classes.productCard
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>￥${product.price}</p>
        <button onclick="app.addToCart(${product.id})">加入购物车</button>
      `
      productsContainer.appendChild(productElement)
    })
  }

  addToCart(productId) {
    const product = this.products.find(p => p.id === productId)
    if (product) {
      this.cart.push(product)
      this.updateCartCount()
    }
  }

  updateCartCount() {
    document.getElementById(this.config.selectors.cartCount).textContent = this.cart.length
  }
}

window.app = new ShoppingApp()