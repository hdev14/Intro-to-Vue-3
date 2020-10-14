app.component('review-form', {
  template: '#review-form',

  data() {
    return {
      name: '',
      review: '',
      rating: null
    }
  },

  methods: {
    onSubmit() {
      if (!(this.name || this.review || this.rating)) {
        alert('Review has empty fields!')
        return
      }

      const review = {
        name: this.name,
        review: this.review,
        rating: this.rating
      };

      this.$emit('review-submitted', review)
    }
  }
})
