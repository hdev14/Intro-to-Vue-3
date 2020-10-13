const app = Vue.createApp({
  data () {
    return {
      product: 'Socks',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non corporis necessitatibus aliquid ex veritatis amet numquam fuga atque voluptatibus, quaerat tempora culpa voluptates eveniet earum dolore pariatur nam corrupti impedit.',
      image: './assets/images/socks_green.jpg',
      link: 'https://github.com/hdev14',
      inventory: 100,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2234, color: 'blue' }
      ],
      sizes: [22, 33, 44]
    }
  }
})
