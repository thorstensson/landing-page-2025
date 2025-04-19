<script setup lang="ts">
import LogoSvg from '@/assets/svg/tt-logo.svg'
</script>

<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="header__msg">New portfolio coming soon.</div>
      <div class="hover">
        <span class="hover--fx cursor"><a>hello@thomasjt.com</a></span>
        <span aria-hidden="true" class="hover--fx"><a>hello@thomasjt.com</a></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Hover class in global as it applies to both header and footer at moment, thus, no BEM for that
.a {
  text-decoration: none;
}

.header-wrapper {
  position: absolute;
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 $page-hpad 0 $page-hpad;
  user-select: none;
  font-family: $sans-ui;
  color: $secondary;
  font-size: 15px;
  font-weight:500;

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