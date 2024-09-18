<template>
  <nav class="desktop fixed">
    <div
      class="container d-flex justify-content-between align-items-center gap-3"
      data-v-429ebe28=""
    >
      <div class="logo" data-v-429ebe28="">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAlCAYAAADr98PUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjAzNDAwZGQtMTY0MC00OGU2LTk5YzQtMGRlOGIxM2E4YjI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVERTU1QUE0RjlCRjExRUNCQkExOEFGODg0MkRCQjIxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVERTU1QUEzRjlCRjExRUNCQkExOEFGODg0MkRCQjIxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjlmNWZmZGQtMGQzYS1jYjQ5LThmMDQtMWE2MzRjMjFhNmU0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MmIzYWNhYWEtMTZiNy0yMzQzLTk0NTIt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"
          alt=""
          data-v-429ebe28=""
        />
      </div>
      <ul
        data-v-429ebe28=""
        class="links ps-0 d-flex justify-content-between gap-2"
      >
        <li data-v-429ebe28="" class="link demo">
          <a
            data-v-429ebe28=""
            href="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            >Theme Demo</a
          >
        </li>
        <li data-v-429ebe28="" class="link">
          <a
            data-v-429ebe28=""
            href="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            >Shop</a
          >
        </li>
        <li data-v-429ebe28="" class="link product">
          <a
            data-v-429ebe28=""
            href="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            >Product</a
          >
        </li>
        <li data-v-429ebe28="" class="link">
          <a
            data-v-429ebe28=""
            href="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            >New In</a
          >
        </li>
        <li data-v-429ebe28="" class="link">
          <a
            data-v-429ebe28=""
            href="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            >must have</a
          >
        </li>
        <li data-v-429ebe28="" class="link">
          <a
            data-v-429ebe28=""
            href="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            >collections</a
          >
        </li>
        <li data-v-429ebe28="" class="link">
          <a
            data-v-429ebe28=""
            href="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            >pages</a
          >
        </li>
        <li data-v-429ebe28="" class="link">
          <a
            data-v-429ebe28=""
            href="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            >buy Ella</a
          >
        </li>
      </ul>
      <div class="end d-flex justify-content-between align-items-center gap-3">
        <div class="search" data-v-429ebe28="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            fill="currentColor"
            class="bi bi-search search-icon"
            viewBox="0 0 16 16"
            data-v-429ebe28=""
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              data-v-429ebe28=""
            ></path>
          </svg>
        </div>
        <div
          class="cart"
          data-bs-toggle="offcanvas"
          data-bs-target="#cart-offcanvas"
          aria-controls="cart-offcanvas"
          data-v-429ebe28=""
        >
          <span class="count position-absolute" data-v-429ebe28="">2</span>
          <div class="icon" data-v-429ebe28="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
              data-v-429ebe28=""
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                data-v-429ebe28=""
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup></script>
<style lang="scss" scoped>
$font-color: #ffc324;
$bg-color: #161880;
body {
  height: 9999px;
}
nav {
  &.desktop.fixed {
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: #161880;
    color: #fff;
    padding: 25px 0;
  }
  padding: 10px;
  margin-bottom: 2rem;
  .search,
  .cart {
    cursor: pointer;
  }
  .cart {
    position: relative;
    .count {
      right: -10px;
      top: -10px;
      background: #dd2745;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      font-size: 16px;
      padding-top: 2px;
      padding-left: 7px;
    }
  }
  .links {
    margin-bottom: 0;
    flex: 0.8;
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
</style>
