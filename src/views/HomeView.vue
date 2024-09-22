<template>
  <div class="home-page">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper :products="flashDealsProducts" />
  </div>
</template>

<script setup>
import TheFeatures from "@/components/HomePage/TheFeatures.vue";
import TopOffers from "@/components/HomePage/TopOffers.vue";
import UpperBanner from "@/components/HomePage/upperBanner.vue";
import ProductsSwiper from "@/components/ProductsSwiper.vue";
import { products } from "@/store/products";
let flashDealsProducts = products.slice(0, 8);
</script>
