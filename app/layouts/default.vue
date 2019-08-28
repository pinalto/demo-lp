<template>
  <div id="root_wrapper" class="root_wrapper">
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.root_wrapper {
  box-shadow: 0 0 18px green;
  margin: auto;
  @include pc {
    max-width: 1366px;
  }
  position: relative;
}
</style>
