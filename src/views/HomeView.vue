<template>
  <div class="home-page">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper :products="flashDealsProducts" />
    <TopCategories />
    <TopProducts />
    <OurAdvantages />
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

import { products } from "@/store/products";
let flashDealsProducts = products.slice(0, 8);
</script>
