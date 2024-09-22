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
        <div
          class="product"
          :class="'product-' + i"
          v-for="(item, i) in products"
          :key="item.id"
        >
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
            <del>${{ (item.priceCents / 100).toFixed(2) }}</del>
            From
            <b class="">${{ ((item.priceCents * 0.9) / 100).toFixed(2) }}</b>
          </div>
          <div class="variations d-flex gap-3 my-2">
            <span
              class="outer rounded-circle border border-dark"
              :class="'outer-' + i + ' ' + (j == 0 && ' active')"
              @click="ChangeVariation(i, j, vari)"
              v-for="(vari, j) in item.variation.Color"
              :key="j"
            >
              <span :style="'background: ' + vari" class="rounded-circle">
              </span>
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
import { defineProps } from "vue";
let props = defineProps({
  products: {
    type: Array,
  },
});
const getImagePath = (imgPath) => {
  return require(`@/assets/${imgPath}`);
};

const ChangeVariation = (item, index, color) => {
  let spansOuterVariation = document.querySelectorAll(`.outer-${item}`);
  let imgOfProduct = document.querySelector(`.product-${item} .img img`);
  let mainSrc = props.products[item].image;
  let mainColor = props.products[item].variation.Color[0].toLowerCase();
  color = color.toLowerCase();
  let curSrc = mainSrc.replace("products", "products/variations");
  curSrc = curSrc.replace(mainColor, color);
  console.log(curSrc);
  imgOfProduct.setAttribute("src", getImagePath(curSrc));
  // console.log(color);
  console.log(imgOfProduct);
  spansOuterVariation.forEach((ele, idx) => {
    ele.classList.remove("active");
    ele.classList.remove("false");
    if (idx == index) {
      ele.classList.add("active");
    }
  });
};
</script>

<style lang="scss" scoped>
.header {
  padding: 10px 0px 40px;
  h2 {
    font-weight: 800;
  }
}
.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .product-details {
    font-size: 18px;
    letter-spacing: 0.5px;
    padding: 10px 0;
  }
  .rating {
    width: 40%;
    img {
      width: 100%;
    }
  }
  .price {
    font-size: 20px;
    font-weight: bold;
    padding: 15px 0;
    b {
      color: #e10600 !important;
    }
  }
  .variations {
    span.outer {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      opacity: 0.7;
      cursor: pointer;
      &.active {
        opacity: 1;
      }
      & > span {
        display: block;
        width: 85%;
        height: 85%;
        border: 0.5px solid #03030359;
      }
    }
  }
  .btn {
    transition: 0.3s;
    margin: 20px 0px 0;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
    &.shadow-edit {
      box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.15);
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
