app.component('product-display', {
  template: '#product-display',
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non corporis necessitatibus aliquid ex veritatis amet numquam fuga atque voluptatibus, quaerat tempora culpa voluptates eveniet earum dolore pariatur nam corrupti impedit.',
      link: 'https://github.com/hdev14',
      selectedVariant: 0,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0
        }
      ],
      sizes: [22, 33, 44]
    }
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },

    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },

    updateVariant(index) {
      this.selectedVariant = index
    }
  },

  computed: {
    title() {
      return `${this.brand} ${this.product}`
    },

    image() {
      return this.variants[this.selectedVariant].image
    },

    inStock() {
      return this.variants[this.selectedVariant].quantity
    },

    onSaleMessage() {
      return this.onSale && `${this.brand} ${this.product} is on sale.`
    },

    shipping() {
      if (this.premium) {
        return 'free'
      }

      return 2.99
    }
  }
})
