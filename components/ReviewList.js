app.component('review-list', {
  template: '#review-list',
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
})
