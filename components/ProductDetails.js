app.component('product-details', {
  template: '#product-details',
  props: {
    details: {
      type: String,
      required: true
    }
  },

  computed: {
    description() {
      return this.details
    }
  }
})
