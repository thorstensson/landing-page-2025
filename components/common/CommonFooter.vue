<template>
  <div class="abs-wrapper">
    <div class="footer-wrapper">
      <div>
        <a target='_blank' href='https://github.com/thorstensson'>GITHUB</a>
        <a target='_blank' href='https://thomasthorstensson.photography'>/ WP</a>
      </div>
      <MediaAudioPlayer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.abs-wrapper {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px 0 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  font-display: fallback;
  font-family: $sans-ui;
  color: #FAF8FF;
  font-display: fallback;
  font-size: 13px;
}

a {
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: $accent;
}
</style>
