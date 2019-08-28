<template>
  <div id="testimonials" class="testimonials">
    <div class="container">
      <slick ref="slick" class="carousel" :options="slickOptions">
        <div class="testimonial">
          <p class="text">
            “ Outstanding job and exceeded all expectations. It was a pleasure
            to work with them on a sizable first project and am looking forward
            to start the next one asap.”
          </p>
          <p class="name">Michael Hopkins</p>
        </div>
        <div class="testimonial">
          <p class="text">
            “ Outstanding job and exceeded all expectations. It was a pleasure
            to work with them on a sizable first project and am looking forward
            to start the next one asap.”
          </p>
          <p class="name">Michael Hopkins</p>
        </div>
        <div class="testimonial">
          <p class="text">
            “ Outstanding job and exceeded all expectations. It was a pleasure
            to work with them on a sizable first project and am looking forward
            to start the next one asap.”
          </p>
          <p class="name">Michael Hopkins</p>
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'

export default {
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonials {
  background: $colHighlight;
  color: $colBackground;
  position: relative;
  padding-bottom: 60px;
}

/deep/ .slick-slider {
  position: relative;
  height: 100%;
}

/deep/ .slick-dots {
  display: flex;
  justify-content: center;
  li {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1px;
    cursor: pointer;
    &::after {
      display: block;
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $colHighlightUnder;
    }
    &.slick-active::after {
      width: 10px;
      height: 10px;
      background: $colBackground;
    }
    button {
      display: none;
    }
  }
}

.testimonial {
  width: 100%;
  text-align: center;
  padding: 80px 0 60px;
  @include pc {
    padding: 174px 0 100px;
  }
}

.text {
  max-width: 680px;
  margin: auto;
  font-size: 24px;
  letter-spacing: 0.01em;
}

.name {
  padding-top: 30px;
  font-size: 12px;
  letter-spacing: 0.1em;
  line-height: 1;
  text-transform: uppercase;
}
</style>
