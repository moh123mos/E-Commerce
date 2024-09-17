<template>
  <nav class="">
    <div
      class="first container d-flex justify-content-between align-items-center gap-3"
    >
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="" />
      </div>
      <div class="search">
        <input type="text" class="" placeholder="Search the store" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-search search-icon"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
          />
        </svg>
      </div>
      <div
        class="side-end d-flex justify-content-between align-items-center text-center"
      >
        <div class="available fw-normal" style="font-size: 14px">
          Available 24/7 at <br />
          <strong style="font-size: 16px">(090) 123-4567</strong>
        </div>
        <div class="wishlist">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
              />
            </svg>
          </div>
          <p class="title">wish lists</p>
        </div>
        <div class="sign in">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
              />
            </svg>
          </div>
          <p class="title">sign in</p>
        </div>
        <div
          class="cart"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span class="count position-absolute">2</span>
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
              />
            </svg>
          </div>
          <p class="title">cart</p>
        </div>
      </div>
    </div>
    <div
      class="second container d-flex justify-content-between align-items-center"
    >
      <ul class="links ps-0 d-flex justify-content-between gap-2">
        <li class="link demo">
          <router-link to="">Theme Demo</router-link>
        </li>
        <li class="link">
          <router-link to="">Shop</router-link>
        </li>
        <li class="link product">
          <router-link to="">Product</router-link>
        </li>
        <li class="link">
          <router-link to="">New In</router-link>
        </li>
        <li class="link">
          <router-link to="">must have</router-link>
        </li>
        <li class="link">
          <router-link to="">collections</router-link>
        </li>
        <li class="link">
          <router-link to="">pages</router-link>
        </li>
        <li class="link">
          <router-link to="">buy Ella</router-link>
        </li>
      </ul>
      <div class="assissant d-flex justify-content-end align-items-center">
        <div class="help me-3">
          <div class="icon d-flex align-items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user-headset"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-user-headset headset"
              width="20px"
            >
              <path
                fill="currentColor"
                d="M320 352h-23.1a174.08 174.08 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM48 224a16 16 0 0 0 16-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 0 1-80 80h-32a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h96a112.14 112.14 0 0 0 112-112v-16C416 86.13 329.87 0 224 0S32 86.13 32 192v16a16 16 0 0 0 16 16zm160 0h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64z"
                class=""
              ></path>
            </svg>
            <span>Help</span>
          </div>
        </div>
        <span style="color: #3e4093; font-size: 18px"> | </span>
        <div class="langs ms-3">
          <div
            class="detected d-flex gap-1"
            style="cursor: pointer"
            @click="openList"
          >
            <span v-html="detectedLang.icon"></span>
            <span class="lang">{{ detectedLang.lang }}</span
            >/<span class="currency">USD</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              style="transition: 0.3s; cursor: pointer"
              ref="arrowOfOpen"
            >
              <!-- Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
              <path
                fill="#fff"
                d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
              />
            </svg>
          </div>
          <div class="list" :class="isOpenList ? '' : 'd-none'" ref="langsList">
            <div
              v-for="(lang, i) in langs"
              :key="i"
              class="d-flex gap-1"
              style="cursor: pointer"
              @click="changeLang(i)"
            >
              <span v-html="lang.icon"></span>
              <span class="lang">{{ lang.lang }}</span
              >/<span class="currency">USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
let isOpenList = ref(false);
const langsList = ref(null);
const arrowOfOpen = ref(null);
const langs = ref([
  {
    icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  width="20"
                >
                  <circle
                    style="fill: #f0f0f0"
                    cx="256"
                    cy="256"
                    r="256"
                  ></circle>
                  <g>
                    <path
                      style="fill: #0052b4"
                      d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
                    ></path>
                  </g>
                  <g>
                    <path
                      style="fill: #d80027"
                      d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
                    ></path>
                  </g>
                </svg>`,
    lang: `EN`,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20">
    <path style="fill:#FFDA44;" d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783  L15.923,345.043z"></path>
    <path d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z"></path>
    <path style="fill:#D80027;" d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155  C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z"></path>
</svg>`,
    lang: `DE`,
  },
]);
let detectedLang = ref({
  icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  width="20"
                >
                  <circle
                    style="fill: #f0f0f0"
                    cx="256"
                    cy="256"
                    r="256"
                  ></circle>
                  <g>
                    <path
                      style="fill: #0052b4"
                      d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"
                    ></path>
                    <path
                      style="fill: #0052b4"
                      d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"
                    ></path>
                  </g>
                  <g>
                    <path
                      style="fill: #d80027"
                      d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"
                    ></path>
                    <path
                      style="fill: #d80027"
                      d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"
                    ></path>
                  </g>
                </svg>`,
  lang: `EN`,
});
const changeLang = (i) => {
  detectedLang.value = langs.value[i];
  openList();
};
const openList = () => {
  isOpenList.value = !isOpenList.value;
  if (isOpenList.value) arrowOfOpen.value.style = "rotate: 180deg";
  else arrowOfOpen.value.style = "rotate: 0";
  console.log(isOpenList.value);
};
</script>

<style lang="scss" scoped>
$font-color: #ffc324;
$bg-color: #161880;
nav {
  background-color: #161880;
  padding: 18px;
  padding-bottom: 22px;
  color: #fff;
  .search {
    position: relative;
    flex: 1.5;
    input {
      border: none;
      width: 100%;
      border-radius: 35px;
      padding: 13px 20px;
      &:focus {
        outline: none;
      }
    }
    .search-icon {
      color: #161880;
      position: absolute;
      right: 20px;
      top: 14px;
    }
  }
  .first,
  .second {
    max-width: 1199px;
    margin: auto;
  }
  .first {
    margin-bottom: 2rem;
    .side-end {
      flex: 1;
      .icon,
      .title {
        color: #ffc324;
        cursor: pointer;
      }
      .cart {
        position: relative;
        .count {
          right: -10px;
          top: -10px;
          background: #0a6cdc;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          font-size: 12px;
          padding-top: 5px;
          font-weight: normal;
        }
      }
    }
  }
  .second {
    .links {
      margin-bottom: 0;
      .link {
        position: relative;
        a {
          color: #fff;
          text-decoration: none;
          text-transform: capitalize;
          font-weight: 500;
          transition: 0.3s;
          &:hover {
            color: $font-color;
          }
        }
        &.demo::before,
        &.product::before {
          position: absolute;
          right: 0;
          top: -24px;
          padding: 0 6px;
          font-size: 12px;
        }
        &.demo::before {
          content: "New";
          background-color: #06bfe2;
        }
        &.product::before {
          content: "Hot";
          background-color: #ffbb49;
        }
        &.demo::after,
        &.product::after {
          content: "";
          position: absolute;
          top: -6px;
          border: 5px solid;
          border-color: transparent transparent;
        }
        &.demo::after {
          border-top-color: #06bfe2;
          right: 15px;
        }
        &.product::after {
          border-top-color: #ffbb49;
          right: 10px;
        }
      }
    }
    .assissant {
      .help {
        .icon {
          .headset {
            color: #0a6cdc;
            margin-right: 5px;
            width: 18px;
          }
        }
      }
      .langs {
        position: relative;
        .list {
          position: absolute;
          right: -10px;
          top: 30px;
          z-index: 2;
          background: white;
          color: #000;
          border-radius: 10px;
          padding: 10px 20px;
          box-shadow: 0 0 3px 1px #00000080;
          & > div {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
