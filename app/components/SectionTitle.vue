<template>
  <div>
    <component :is="'h' + level" v-if="$slots.heading" class="heading">
      <slot name="heading" />
    </component>
    <p v-if="$slots.body" class="body">
      <slot name="body" />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 2
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  color: $colCaption;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.01em;
  padding: 60px 0 28px;
  @include tablet {
    padding-top: 92px;
  }
}
</style>
