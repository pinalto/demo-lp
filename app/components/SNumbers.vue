<template>
  <div class="numbers-wrapper">
    <div class="container">
      <div class="numbers">
        <div class="row">
          <div class="col col--3">
            <div v-observe-visibility="visibilityChanged" class="card">
              <figure class="icon">
                <img src="@/assets/imgs/number-1.png" alt="" />
              </figure>
              <p class="text">
                <span class="number">548</span><br />
                <span class="description">Projects Completed</span>
              </p>
            </div>
          </div>
          <div class="col col--3">
            <div v-observe-visibility="visibilityChanged" class="card">
              <figure class="icon">
                <img src="@/assets/imgs/number-2.png" alt="" />
              </figure>
              <p class="text">
                <span class="number">1465</span><br />
                <span class="description">Working Hours</span>
              </p>
            </div>
          </div>
          <div class="col col--3">
            <div v-observe-visibility="visibilityChanged" class="card">
              <figure class="icon">
                <img src="@/assets/imgs/number-3.png" alt="" />
              </figure>
              <p class="text">
                <span class="number">612</span><br />
                <span class="description">Positive Feedbacks</span>
              </p>
            </div>
          </div>
          <div class="col col--3">
            <div v-observe-visibility="visibilityChanged" class="card">
              <figure class="icon">
                <img src="@/assets/imgs/number-4.png" alt="" />
              </figure>
              <p class="text">
                <span class="number">735</span><br />
                <span class="description">Happy Clients</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.numbers-wrapper {
  background: $colHighlight;
  color: $colBackground;
}
.numbers {
  padding: 48px 0;
  @include pc {
    padding: 94px 0;
  }
}

.card {
  display: flex;
  padding: 16px 10px;
  height: 100%;
  opacity: 0;
  transform: translateY(15px);
  transition: 0.4s ease;
  @include tablet {
    padding: 0;
  }
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

.icon {
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  margin-left: 18px;
  @include pc {
    margin-left: 28px;
  }
}

.number {
  font-size: 18px;
  letter-spacing: 0.03em;
}

.description {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
