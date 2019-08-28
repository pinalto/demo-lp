<template>
  <div id="process" class="process">
    <div class="container">
      <my-section-title class="title">
        <template v-slot:heading>
          Our Work Process
        </template>
        <template v-slot:body>
          Was years it seasons was there form he in in them together over that,
          third sixth gathered female creeping bearing behold years.
        </template>
      </my-section-title>
      <figure class="movie">
        <video
          class="video"
          src="images/hd0109.mov"
          preload="metadata"
          loop
          playsinline
          muted
          @loadedmetadata="videoLoaded"
        />
      </figure>
    </div>
  </div>
</template>

<script>
import MySectionTitle from '@/components/SectionTitle'

export default {
  components: {
    MySectionTitle
  },
  methods: {
    videoLoaded: event => {
      event.target.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.process {
  padding-bottom: 100px;
  text-align: center;
}

.title {
  max-width: 520px;
  margin: auto;
}

.video {
  display: block;
  margin: 60px auto 0;
  width: 100%;
  @include pc {
    width: 1015px;
  }
}
</style>
