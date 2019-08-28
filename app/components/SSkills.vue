<template>
  <div class="skills-wrapper">
    <div class="container">
      <div class="row">
        <div class="col col--6">
          <my-section-title>
            <template v-slot:heading>
              Professional Skills
            </template>
          </my-section-title>
          <div class="skills">
            <my-gauge class="gauge" caption="UI/UX Design" :value="75" />
            <my-gauge class="gauge" caption="WEB Development" :value="90" />
            <my-gauge class="gauge" caption="Marketing" :value="65" />
          </div>
        </div>
        <div class="col col--6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MySectionTitle from '@/components/SectionTitle'
import MyGauge from '@/components/Gauge'

export default {
  components: {
    MySectionTitle,
    MyGauge
  }
}
</script>

<style lang="scss" scoped>
.skills-wrapper {
  background: #f9f9f9;
  padding: 50px 0 80px;
  @include tablet {
    background-image: url('../assets/imgs/skills.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
  }
}

/deep/ .heading {
  padding: 0;
  text-align: center;
  @include pc {
    text-align: left;
    padding-top: 120px;
  }
}

.skills {
  padding: 0 20px;
  @include pc {
    padding: 0 86px 70px 0;
  }
}

.gauge {
  margin-top: 40px;
}
</style>
