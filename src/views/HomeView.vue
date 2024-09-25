<template>
  <div class="home-page">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <div class="flash-deals">
      <ProductsSwiper
        :products="flashDealsProducts"
        titleSwiper="Flash Deals"
        colorTitle="danger"
        parentClass="flash-deals"
      />
    </div>
    <TopCategories />
    <TopProducts />
    <OurAdvantages />
    <div class="kitchen-appliance">
      <ProductsSwiper
        :products="kitchenProducts"
        titleSwiper="Top Kitchen Appliances"
        colorTitle="dark"
        parentClass="kitchen-appliance"
      />
      <div class="poster kitchen-poster container py-5 d-flex gap-3">
        <div class="img w-50" style="height: 450px">
          <img
            src="@/assets/ella_imgs/kitchen-poster-left.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div class="img w-50" style="height: 450px">
          <img
            src="@/assets/ella_imgs/kitchen-poster-right.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mens-products">
      <ProductsSwiper
        :products="mensProducts"
        titleSwiper="Top Men's Products"
        colorTitle="dark"
        parentClass="mens-products"
      />
      <div class="poster mens-poster container py-5 d-flex gap-3">
        <div class="img w-50" style="height: 450px">
          <img
            src="@/assets/ella_imgs/mens-poster-left.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div class="img w-50" style="height: 450px">
          <img
            src="@/assets/ella_imgs/mens-poster-right.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="womens-products">
      <ProductsSwiper
        :products="womensProducts"
        titleSwiper="Top Women's Products"
        colorTitle="dark"
        parentClass="womens-products"
      />
      <div class="poster womens-poster container py-5 d-flex gap-3">
        <div class="img w-50" style="height: 450px">
          <img
            src="@/assets/ella_imgs/womens-poster-left.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div class="img w-50" style="height: 450px">
          <img
            src="@/assets/ella_imgs/womens-poster-right.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="home-appliance">
      <ProductsSwiper
        :products="homeProducts"
        titleSwiper="Top Home Appliances"
        colorTitle="dark"
        parentClass="home-appliance"
      />
      <div class="poster home-poster container py-5">
        <div class="img w-100">
          <img
            src="@/assets/ella_imgs/home-appliance.png"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- recommended for you -->
    <div class="recommended-for-you">
      <ProductsSwiper
        :products="recommendedForYou"
        titleSwiper="Top Home Appliances"
        colorTitle="dark"
        parentClass="recommended-for-you"
      />
    </div>
    <!-- why shop with us -->
    <WhyShop />
  </div>
</template>

<script setup>
import OurAdvantages from "@/components/HomePage/OurAdvantages.vue";
import TheFeatures from "@/components/HomePage/TheFeatures.vue";
import TopCategories from "@/components/HomePage/TopCategories.vue";
import TopOffers from "@/components/HomePage/TopOffers.vue";
import TopProducts from "@/components/HomePage/TopProducts.vue";
import UpperBanner from "@/components/HomePage/upperBanner.vue";
import ProductsSwiper from "@/components/ProductsSwiper.vue";
import WhyShop from "@/components/HomePage/WhyShop.vue";

import { products } from "@/store/products";
const getProductsByCategory = (category) => {
  return products.filter((el) => {
    for (let e of el.keywords) {
      if (e == category) return true;
    }
  });
};
const getProductsRandomly = (cnt) => {
  let arr = [];
  for (let i = 0; i < cnt; i++) {
    arr.push(products[Math.floor(Math.random() * 36)]);
  }
  return arr;
};
let flashDealsProducts = products.slice(0, 8);
let kitchenProducts = getProductsByCategory("kitchen");
let mensProducts = getProductsByCategory("mens");
let womensProducts = getProductsByCategory("womens");
let homeProducts = getProductsByCategory("home");
let recommendedForYou = getProductsRandomly(5);
</script>

<style lang="scss" scoped>
.poster {
  .img {
    overflow: hidden;
    img {
      scale: 1;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        scale: 1.05;
      }
    }
  }
}
@media (max-width: 991px) {
  .poster {
    flex-wrap: wrap;
    justify-content: center;
    .img {
      width: 100% !important;
    }
  }
}
</style>
