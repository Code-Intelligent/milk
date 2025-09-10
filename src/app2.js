const products = [
  { id: 1, name: '商品1', price: 99.99 },
  { id: 2, name: '商品2', price: 199.99 },
  { id: 3, name: '商品3', price: 299.99 }
]

class ShoppingApp {
  constructor() {
    this.cart = []
    this.init()
  }

  init() {
    this.renderProducts()
    this.updateCartCount()
  }

  renderProducts() {
    const productsContainer = document.getElementById('products')
    if (!productsContainer) {
      console.warn('Warning: \'products\' element not found in the DOM.')
      return
    }

    products.forEach(product => {
      const productElement = document.createElement('div')
      productElement.className = 'product-card'
      
      // Create elements safely to prevent XSS
      const productName = document.createElement('h3')
      productName.textContent = product.name
      const productPrice = document.createElement('p')
      productPrice.textContent = `￥${product.price}`
      const addToCartButton = document.createElement('button')
      addToCartButton.textContent = '加入购物车'
      addToCartButton.className = 'add-to-cart'
      addToCartButton.setAttribute('data-id', product.id)
      
      productElement.appendChild(productName)
      productElement.appendChild(productPrice)
      productElement.appendChild(addToCartButton)
      productsContainer.appendChild(productElement)
    })

    // Add event delegation for "Add to Cart" buttons
    productsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.getAttribute('data-id'), 10)
        this.addToCart(productId)
      }
    })
  }

  addToCart(productId) {
    const product = products.find(p => p.id === productId)
    if (product) {
      this.cart.push(product)
      this.updateCartCount()
    }
  }

  updateCartCount() {
    const cartCountElement = document.getElementById('cart-count')
    if (cartCountElement) {
      cartCountElement.textContent = this.cart.length
    } else {
      console.warn('Cart count element not found in the DOM.')
    }
  }
}

window.app = new ShoppingApp()