<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div>
        <div class="hover">
          <span class="hover--fx"> <a target='_blank' href='https://github.com/thorstensson'>GitHub</a></span>
          <span aria-hidden="true" class="hover--fx"> <a target='_blank'
              href='https://github.com/thorstensson'>GitHub</a></span>
        </div>
        <span class="spacer"></span>
        <div class="hover">
          <span class="hover--fx"> <a target='_blank'
              href='https://discord.com/users/1326292436187611199'>Discord</a></span>
          <span aria-hidden="true" class="hover--fx"> <a target='_blank'
              href='https://github.com/thorstensson'>Discord</a></span>
        </div>
        <span class="spacer"></span>
        <div class="hover">
          <span class="nomusk">Twitter</span>
        </div>
      </div>
      <MediaAudioPlayer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px 0 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  font-family: $sans-ui;
  color: $secondary;
  font-size: 15px;
  font-weight: 400;
}

.spacer {
  margin-right: 10px;
}

.nomusk {
  text-decoration: line-through;
  display: none;

  @include this-and-above('lg') {
    display: block;
  }
}
</style>
