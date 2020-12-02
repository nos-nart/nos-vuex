<template>
  <div>
    <ul v-for="product in products" :key="product.id">
      <li>{{ product.title }}</li>
    </ul>
  </div>
</template>

<script>
import shop from '@/api/shop';

export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    shop.getProducts((products) => {
      this.products = products;
    })
  }
}
</script>

<style lang="scss" scoped>

</style>