<template>
  <div class="hero-wrapper">
    <div class="container">
      <div id="hero" class="hero-wrapper-2">
        <div class="row">
          <div class="col col--6"></div>
          <div class="col col--6">
            <div class="hero">
              <my-section-title :level="1" class="title">
                <template v-slot:heading>
                  We Design and Develop
                </template>
                <template v-slot:body>
                  <p>This is a sample page.</p>
                  <p>
                    We are a new design studio based in USA. We have over 20
                    years of combined experience, and know a thing or two about
                    designing websites and mobile apps.
                  </p>
                </template>
              </my-section-title>
              <a href="#" class="button contact-us">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MySectionTitle from '@/components/SectionTitle'

export default {
  components: {
    MySectionTitle
  }
}
</script>

<style lang="scss" scoped>
.hero-wrapper {
  .webp & {
    background: url('../assets/imgs/banner.jpg?webp') no-repeat left/cover;
  }
  .no-webp & {
    background: url('../assets/imgs/banner.jpg') no-repeat left/cover;
  }
  @include sp {
    background-position-x: 10%;
  }
}

.hero {
  padding: 54px 0 90px;
  @include tablet {
    padding: 100px 0 120px;
  }
  @include pc {
    padding: 132px 64px 160px 60px;
  }
}
/deep/ .heading {
  color: #1d1d1d;
  font-size: 38px;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 40px;
  @include tablet {
    padding-top: 60px;
  }
  @include pc {
    padding-top: 92px;
  }
}

/deep/ .body {
  background: rgba(255, 255, 255, 0.7);
  color: #666;
  font-size: 18px;
  letter-spacing: 0.005em;
  line-height: 28px;
  padding: 10px;
  @include pc {
    background: none;
    color: inherit;
    font-size: 16px;
    line-height: 28px;
    padding: 0;
  }
}

.contact-us {
  margin-top: 40px;
}
</style>
