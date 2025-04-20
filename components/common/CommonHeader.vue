<script setup lang="ts">
import LogoSvg from '@/assets/svg/logo.svg'
</script>

<!-- Icon by Vasily Gedzun UA -->
 
<template>
  <div class="header-wrapper">
    <div class="header">
      <LogoSvg class="header__logo" />
      <div class="header__msg">New folio coming.</div>
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
  font-size: 14px;
  font-weight:400;


  &__logo {
    width: 20px;
    height: auto;
    margin-bottom:2px;
 

    @include this-and-above('lg') {
      width: 20px;
      height:auto;
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