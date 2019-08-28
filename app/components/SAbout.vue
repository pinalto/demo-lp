<template>
  <div id="about" class="about">
    <div class="container container--narrow">
      <my-section-title class="title">
        <template v-slot:heading>
          About Us
        </template>
        <template v-slot:body>
          Divide have don't man wherein air fourth. Own itself make have night
          won't make. A you under Seed appear which good give. Own give air
          without fowl moveth dry first heaven fruit, dominion she'd won't very
          all.
        </template>
      </my-section-title>
      <figure class="signature">
        <img src="@/assets/imgs/signature.png" alt="" />
      </figure>
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
.about {
  text-align: center;
  padding-bottom: 60px;
  @include tablet {
    padding-bottom: 100px;
  }
}

.title {
  max-width: 620px;
  margin: auto;
}

.signature {
  margin-top: 30px;
}
</style>
