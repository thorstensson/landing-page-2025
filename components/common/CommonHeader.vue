<script setup lang="ts">
import LogoSvg from '@/assets/svg/tt-logo.svg'
</script>

<template>
  <div class="absolute-wrapper">
    <div class="header">
      <LogoSvg class="header__logo" />
      <div class="header__msg">New portfolio coming soon.</div>
      <div class="hover">
        <span class="hover-fx cursor"><a>hello@thomasjt.com</a></span>
        <span aria-hidden="true" class="hover-fx"><a>hello@thomasjt.com</a></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Hover class in global as it applies to both header and footer at moment
.a {
  text-decoration: none;
}

.absolute-wrapper {
  position: absolute;
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 $page-hpad 0 $page-hpad;
  user-select: none;
  font-display: fallback;
  font-family: $sans-ui;
  color: $secondary;
  font-size: 15px;

  &__logo {
    width: 20px;
    height: auto;
    padding-bottom:6px;

    @include this-and-above('lg') {
      width: 30px;
    }
  }

  &__msg {
    display: none;

    @include this-and-above('lg') {
      display: block;
    }
  }
}

.cursor {
  cursor: pointer;
}
</style>