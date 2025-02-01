<template>
  <div class="footer-wrapper">
    <div>
      <a target='_blank' href='https://github.com/thorstensson'>GITHUB</a>
      <a target='_blank' href='https://thomasthorstensson.photography'>/ WP</a>
    </div>
    <MediaAudioPlayer />
  </div>
</template>

<style lang="scss" scoped>
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
  font-family: "Space Mono", "Space Mono Fallback: Arial", sans-serif;
  color: #FAF8FF;
  font-display: fallback;
  font-size: 12px;
}

a {
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: $accent;
}
</style>
