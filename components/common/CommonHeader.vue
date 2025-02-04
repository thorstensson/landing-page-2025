<script setup lang="ts">

</script>

<template>
  <!--No mailto on purpose, chrome ios makes it clickable, rest can read (weary of robots)-->
  <div class="abs-wrapper">
  <div class="header-wrapper">
    <div class="letter"><span>T</span></div>
    <div class="msg">NEW PORTFOLIO MARCH 1</div>
    <div><a>HOLA@THOMASJT.COM</a></div>
  </div>
</div>
</template>

<style lang="scss" scoped>
// Tidy up SCSS at some point after portfolio done; too many repeats, some things can be moved also into mixins, parents,etc
// Even if only a humble landing page, keepP it tidy son

.abs-wrapper {
  position: absolute;
  width:100%;
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
  font-size: 13px;
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

a:link,
a:visited,
a:active,
a:focus,
a:visited {
  text-decoration: none !important;
  border-bottom: none;
}

a {
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: $accent;
}

.msg {
  display:none;
  @include this-and-above('lg') {
        display:block;
    }
}


</style>