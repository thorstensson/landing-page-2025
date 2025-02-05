<script setup lang="ts"></script>

<template>
  <div class="abs-wrapper">
    <div class="header-wrapper">
      <div class="letter"><span>TJT</span></div>
      <div class="msg">New portfolio March</div>
      <div class="hover">
        <span class="hover-fx cursor"><a>hello@thomasjt.com</a></span>
        <span aria-hidden="true" class="hover-fx"><a>hello@thomasjt.com</a></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Tidy up SCSS at some point after portfolio done; too many repeats, some things can be moved also into mixins, parents,etc
// Even if only a humble landing page, keepP it tidy son

.a {
  text-decoration: none;
}

.abs-wrapper {
  position: absolute;
  width: 100%;
}

.header-wrapper {
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
}

.cursor {
  cursor:pointer;
}

.letter {
  font-weight: 600;
}

.letter span::after {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0px 0 -1px 2px;
}

span {
  display: inline-block;
}

.msg {
  display: none;

  @include this-and-above('lg') {
    display: block;
  }
}
</style>