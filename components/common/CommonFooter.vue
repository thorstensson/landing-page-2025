<template>
  <div class="abs-wrapper">
    <div class="footer-wrapper">
      <div>
        <div class="hover">
          <span class="hover-fx"> <a target='_blank' href='https://github.com/thorstensson'>GitHub</a></span>
          <span aria-hidden="true" class="hover-fx"> <a target='_blank'
              href='https://github.com/thorstensson'>GitHub</a></span>
        </div>
        <span class="spacer"></span>
        <div class="hover">
          <span class="hover-fx"> <a target='_blank'
              href='https://discord.com/users/1326292436187611199'>Discord</a></span>
          <span aria-hidden="true" class="hover-fx"> <a target='_blank'
              href='https://github.com/thorstensson'>Discord</a></span>
        </div>
        <span class="spacer"></span>
        <div class="hover">
          <span class="strike nomusk">Twitter</span>
        </div>
      </div>
      <MediaAudioPlayer />
    </div>
  </div>
</template>

//TODO: Need to tidy up in line with BEM

<style lang="scss" scoped>
.abs-wrapper {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.strike {
  text-decoration: line-through;
}

.spacer {
  margin-right: 10px;
}

.nomusk {
  display: none;

  @include this-and-above('lg') {
    display: block;
  }
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
  font-size: 15px;
}
</style>
