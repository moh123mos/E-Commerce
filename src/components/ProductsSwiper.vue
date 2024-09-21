<template>
  <div class="products-swiper">
    <div class="container py-5">
      <div class="header d-flex justify-content-between">
        <h2 class="text-danger fs-2 fw-blod">Flash Deals</h2>
        <div class="shop-all">
          <a href="#" class="text-dark">Shop All</a>
        </div>
      </div>
      <div class="products d-flex flex-wrap justify-content-between">
        <div class="product" v-for="(item, i) in products" :key="item.id">
          <div class="img">
            <img
              width="100%"
              height="250px"
              :src="getImagePath(item.image)"
              alt=""
            />
          </div>
          <div class="product-details">
            <span>(product {{ i + 5 }}) </span>
            <span>{{ item.name }}</span>
          </div>
          <div class="rating">
            <img
              :src="
                getImagePath(`ratings/rating-${item.rating.stars * 10}.png`)
              "
              alt=""
            />
          </div>
          <div class="price">
            <del>{{ ((item.priceCents * 0.9) / 100).toFixed(2) }}</del>
            From
            <b class="text-danger">{{ (item.priceCents / 100).toFixed(2) }}</b>
          </div>
          <div class="variations">
            <span v-for="(vari, i) in item.variation" :key="i">
              <span v-for="(attr, i) in vari" :key="i"> {{ attr + " " }} </span>
            </span>
          </div>
          <div
            class="btn btn-outline-warning text-dark border border-dark rounded-pill shadow-edit"
          >
            Choose Options
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { products } from "@/store/products";
import { defineProps } from "vue";
defineProps({
  products: {
    type: Array,
  },
});
const getImagePath = (imgPath) => {
  return require(`@/assets/${imgPath}`);
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .rating {
    width: 40%;
    img {
      width: 100%;
    }
  }
  .btn {
    transition: 0.3s;
    &.shadow-edit {
      box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.15);
    }
  }
}
@media (max-width: 576px) {
  .product {
    width: 97%;
  }
}
@media (min-width: 577px) {
  .product {
    width: 47%;
  }
}
@media (min-width: 1199px) {
  .product {
    width: 23%;
  }
}
</style>
