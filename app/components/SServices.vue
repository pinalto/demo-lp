<template>
  <div id="services" class="services">
    <div class="container">
      <div class="row">
        <div class="col col--3">
          <div v-observe-visibility="observerOptions" class="card">
            <figure class="icon">
              <img src="@/assets/imgs/service-1.png" alt="" />
            </figure>
            <p class="title">UI / UX Design</p>
            <p class="description">
              Be set fourth land god darkness make it wherein own
            </p>
          </div>
        </div>
        <div class="col col--3">
          <div v-observe-visibility="observerOptions" class="card">
            <figure class="icon">
              <img src="@/assets/imgs/service-2.png" alt="" />
            </figure>
            <p class="title">Web Development</p>
            <p class="description">
              A she'd them bring void moving third she'd kind fill
            </p>
          </div>
        </div>
        <div class="col col--3">
          <div v-observe-visibility="observerOptions" class="card">
            <figure class="icon">
              <img src="@/assets/imgs/service-3.png" alt="" />
            </figure>
            <p class="title">App / Mobile</p>
            <p class="description">
              Dominion man second spirit he, earth they're creeping
            </p>
          </div>
        </div>
        <div class="col col--3">
          <div v-observe-visibility="observerOptions" class="card">
            <figure class="icon">
              <img src="@/assets/imgs/service-4.png" alt="" />
            </figure>
            <p class="title">Game Design</p>
            <p class="description">
              Morning his saying moveth it multiply appear life be
            </p>
          </div>
        </div>
        <div class="col col--3">
          <div v-observe-visibility="observerOptions" class="card">
            <figure class="icon">
              <img src="@/assets/imgs/service-5.png" alt="" />
            </figure>
            <p class="title">SEO / Marketing</p>
            <p class="description">
              Give won't after land fill creeping meat you, may
            </p>
          </div>
        </div>
        <div class="col col--3">
          <div v-observe-visibility="observerOptions" class="card">
            <figure class="icon">
              <img src="@/assets/imgs/service-6.png" alt="" />
            </figure>
            <p class="title">Photography</p>
            <p class="description">
              Creepeth one seas cattle grass give moving saw give
            </p>
          </div>
        </div>
        <div class="col col--3">
          <div v-observe-visibility="observerOptions" class="card">
            <figure class="icon">
              <img src="@/assets/imgs/service-7.png" alt="" />
            </figure>
            <p class="title">Graphic Design</p>
            <p class="description">
              Open, great whales air rule for, fourth life whales
            </p>
          </div>
        </div>
        <div class="col col--3">
          <div v-observe-visibility="observerOptions" class="card">
            <figure class="icon">
              <img src="@/assets/imgs/service-8.png" alt="" />
            </figure>
            <p class="title">Illustrations</p>
            <p class="description">
              Whales likeness hath, man kind for them air two won't
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observerOptions: {
        callback: this.visibilityChanged,
        intersection: {
          threshold: 0.5
        }
      }
    }
  },
  methods: {
    visibilityChanged(isVisible, { target }) {
      isVisible
        ? target.classList.add('visible')
        : target.classList.remove('visible')
    }
  }
}
</script>

<style lang="scss" scoped>
.services {
  background: #f5f5f5;
  padding: 70px 0;
}

.col {
  min-width: 160px;
}

.card {
  min-width: 170px;
  text-align: center;
  padding: 30px 8px;
  opacity: 0;
  transform: scaleY(3);
  transition: 0.5s ease;
}

.visible {
  opacity: 1;
  transform: scaleY(1);
}

.icon {
  width: 48px;
  height: 48px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  padding-top: 24px;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: $colCaption;
  text-transform: uppercase;
}

.description {
  padding-top: 11px;
  font-size: 16px;
  letter-spacing: 0.005em;
}
</style>
