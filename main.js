const { createApp, ref } = Vue

createApp({
  setup() {
    const product = ref('Boots')
    const description = ref('A pair of warm, fuzzy socks')
    return {
      product,
      description
    }
  }
}).mount('#app')