const app = Vue.createApp({
  data () {
    return {
      cart: 0,
      product: 'Socks',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non corporis necessitatibus aliquid ex veritatis amet numquam fuga atque voluptatibus, quaerat tempora culpa voluptates eveniet earum dolore pariatur nam corrupti impedit.',
      image: './assets/images/socks_green.jpg',
      link: 'https://github.com/hdev14',
      inventory: 100,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg'
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg'
        }
      ],
      sizes: [22, 33, 44]
    }
  },

  methods: {
    addToCart() {
      this.cart++
    },

    removeFromCart() {
      if (this.cart > 1)
        this.cart--
    },

    updateImage(variantImage) {
      this.image = variantImage
    }
  }
})
