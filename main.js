const app = Vue.createApp({
  data () {
    return {
      cart: [],
      premium: true
    }
  },

  methods: {
    incrementCart(id) {
      this.cart.push(id)
    },

    decrementCart(id) {
      this.cart.pop()
    }
  }
})
