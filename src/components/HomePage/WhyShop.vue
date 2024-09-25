<template>
  <div class="why-shop-us py-5 text-light">
    <div class="container">
      <h2 class="text-center"><span>Why shop </span>with us?</h2>
      <div class="features d-flex">
        <div class="feat d-flex" v-for="(feat, i) in features" :key="i">
          <div class="img">
            <img :src="require(`@/${feat.img}`)" alt="" />
          </div>
          <div class="content" v-html="feat.details"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
let features = reactive([
  {
    img: `assets/ella_imgs/free-shipping.png`,
    details: `
      <h4>Free Shipping On First Order</h4>
      <p>Praesent suscipit mattis facilisis.</p>
      <a href="#">Learn more</a>`,
  },
  {
    img: `assets/ella_imgs/weekly-flash-sales.png`,
    details: `
      <h4>Weekly Flash Sale</h4>
      <p>Praesent suscipit mattis facilisis.</p>
      <a href="#">Learn more</a>`,
  },
  {
    img: `assets/ella_imgs/discount.png`,
    details: `
      <h4>Anual Payment Discount</h4>
      <p>Praesent suscipit mattis facilisis.</p>
      <a href="#">Learn more</a>`,
  },
  {
    img: `assets/ella_imgs/cash-back.png`,
    details: `
      <h4>Cashback Reward Program</h4>
      <p>Praesent suscipit mattis facilisis.</p>
      <a href="#">Learn more</a>`,
  },
]);
</script>
<style lang="scss">
.why-shop-us {
  background-image: url("@/assets/ella_imgs/why-shop-with-us-banner.webp");
  h2 {
    font-size: 32px;
    font-weight: 900;
    padding-bottom: 20px;
    span {
      color: #10ffda;
    }
  }
  .features {
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 991px) {
      & {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    .feat {
      flex-direction: column;
      align-items: center;
      text-align: center;
      .img {
        img {
          width: 100%;
        }
      }
      .content {
        h4 {
          height: 50px;
          font-size: 18px;
          font-weight: 900;
          margin: 20px 0 0;
        }
        p {
          height: 50px;
          margin-bottom: 0;
        }
        a {
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
