<template>
  <div>
    <p class="text">
      <span class="caption">{{ caption }}</span>
      <span class="value">{{ value }}%</span>
    </p>
    <div class="bar-base">
      <div class="bar" :style="barStyle" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    barStyle() {
      return 'width: ' + this.value + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  color: $colCaption;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: -3px;
}

.value {
  margin-left: 20px;
}

.bar-base {
  margin-top: 16px;
  border-bottom: 3px solid #d8d8d8;
  height: 3px;
  position: relative;
}

.bar {
  border-bottom: 3px solid $colHighlight;
}
</style>
