<template>
  <div class="footer-app py-5">
    <div class="subscribe container">
      <div class="title text-center">
        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <p>Get the latest updates on new products and upcoming sales</p>
      </div>
      <form class="input-email text-center" @submit.prevent>
        <input type="text" placeholder="enter your email address" />
        <input type="submit" value="Submit" />
      </form>
      <div class="links-pages d-flex">
        <div class="shop">
          <h4>Shop</h4>
          <a href="#">Electronics</a>
          <a href="#">Computers & Laptops</a>
          <a href="#">Smartphones & Tablets</a>
          <a href="#">Cameras</a>
          <a href="#">Video Games & Systems</a>
          <a href="#">Home Furniture</a>
          <a href="#">Weekly Special</a>
        </div>
        <div class="further-info">
          <h4>FURTHER INFO.</h4>
          <a href="#">About</a>
          <a href="#">Customer Service</a>
          <a href="#">Reward Program</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Blog</a>
        </div>
        <div class="customer-service">
          <h4>CUSTOMER SERVICE</h4>
          <a href="#">Search Terms</a>
          <a href="#">Advanced Search</a>
          <a href="#">Orders And Returns</a>
          <a href="#">Contact us</a>
          <a href="#">Theme FAQs</a>
          <a href="#">Consultant</a>
          <a href="#">Store Locations</a>
        </div>
        <div class="contact-us">
          <div class="logo">
            <img src="@/assets/ella_imgs/footer-logo.webp" alt="footer logo" />
          </div>
          <div class="location">
            <div class="icon"></div>
            <div class="details">
              <p>685 Market Street</p>
              <p>San Francisco, CA 94105, US</p>
            </div>
          </div>
          <div class="phone">
            <div class="icon"></div>
            <div class="details">
              <a href="tel:+(415)555-5555">call us at (415) 555-5555</a>
            </div>
          </div>
          <div class="email">
            <div class="icon"></div>
            <div class="details">
              <a href="mailto:example@domain.com">example@domain.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer-app {
  background-color: #f5f5f5;
  .links-pages {
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: column;
      row-gap: 7px;
      a {
        color: #a5a5a5;
        text-decoration: none;
      }
    }
  }
}
</style>
