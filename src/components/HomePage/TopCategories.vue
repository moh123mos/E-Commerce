<template>
  <div class="top-category pb-5">
    <div class="container">
      <div class="cyber-banner pb-5">
        <div class="img-fluid">
          <img src="@/assets/ella_imgs/cyber-banner.webp" width="100%" alt="" />
        </div>
      </div>
      <div class="categories">
        <div class="title">
          <h3>top categories</h3>
          <a href="#">shop all</a>
        </div>
        <div
          class="d-flex flex-wrap justify-content-around text-center row-gap-5 column-gap-2"
        >
          <div class="category" v-for="cat in categories" :key="cat.title">
            <div class="img pb-3">
              <img :src="cat.imgURL" width="100%" alt="Url not work" />
            </div>
            <div class="title">{{ cat.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

let categories = reactive([
  {
    title: "Mobile Phones",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
  },
  {
    title: "Laptops & Tablets",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
  },
  {
    title: "Televisions",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
  },
  {
    title: "PCs & Accessories",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
  },
  {
    title: "Audio & Video",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
  },
  {
    title: "Gaming & Accessories",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
  },
  {
    title: "Home Appliances",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
  },
  {
    title: "Kitchen Appliances",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
  },
  {
    title: "Cameras",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
  },
  {
    title: "Consumables",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
  },
  {
    title: "Smart Homes",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
  },
  {
    title: "Accessories",
    imgURL:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
  },
]);
</script>

<style lang="scss" scoped>
.categories {
  > .title {
    display: flex;
    justify-content: center;
    position: relative;
    text-transform: capitalize;
    padding-bottom: 15px;
    h3 {
      font-size: 22px;
      font-weight: bold;
    }
    a {
      position: absolute;
      border-bottom: 1px solid #000;
      right: 0;
      color: #000;
      text-decoration: none;
    }
  }
  .category {
    min-width: calc(95% / 6);
    .img {
      img {
        scale: 1;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          scale: 1.05;
        }
      }
    }
  }
}
</style>
