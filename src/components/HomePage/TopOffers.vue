<template>
  <div class="top-offers">
    <div class="container">
      <div class="parent one">
        <div class="child">
          <img src="../../assets/images/playstations.webp" alt="playstations" />
        </div>
        <div class="child">
          <img src="../../assets/images/headset.webp" alt="headset" />
        </div>
        <div class="child">
          <img src="../../assets/images/chairs.webp" alt="chairs" />
        </div>
      </div>
      <div class="parent two">
        <div class="child">
          <img src="../../assets/images/iphones.webp" alt="iphones" />
        </div>
        <div class="child">
          <img src="../../assets/images/laptops.webp" alt="laptops" />
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
    margin: 0 0 30px;
    img {
      width: 100%;
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
