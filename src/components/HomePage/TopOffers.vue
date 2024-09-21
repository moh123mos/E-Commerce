<template>
  <div class="top-offers">
    <div class="container">
      <div class="parent one">
        <div class="child">
          <img
            src="../../assets/ella_imgs/playstations.webp"
            alt="playstations"
          />
        </div>
        <div class="child">
          <img src="../../assets/ella_imgs/headset.webp" alt="headset" />
        </div>
        <div class="child">
          <img src="../../assets/ella_imgs/chairs.webp" alt="chairs" />
        </div>
      </div>
      <div class="parent two">
        <div class="child">
          <img src="../../assets/ella_imgs/iphones.webp" alt="iphones" />
        </div>
        <div class="child">
          <img src="../../assets/ella_imgs/laptops.webp" alt="laptops" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-offers {
  background-color: #f5f5f5;
  padding: 20px;
  .parent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    &.one {
      .child {
        width: 30%;
      }
    }
    &.two {
      .child {
        width: 48%;
      }
    }
    .child {
      overflow: hidden;
      border-radius: 5px;
    }
    margin: 0 0 30px;
    img {
      width: 100%;
      scale: 1;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        scale: 1.2;
      }
    }
  }
  @media (max-width: 767px) {
    .parent {
      flex-wrap: wrap;
      .child {
        width: 100% !important;
      }
    }
  }
}
</style>
