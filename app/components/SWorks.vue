<template>
  <div id="works" class="works-wrapper">
    <div class="container container--full">
      <div class="works">
        <figure v-for="(url, index) in images" :key="index" class="work">
          <img :src="url" alt="" />
        </figure>
      </div>
      <button class="more-button" @click="loadMore">
        Load More Work
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: []
    }
  },
  created() {
    this.loadWorks()
  },
  methods: {
    loadWorks() {
      const step = 4
      const url = 'https://picsum.photos/341/300?random='
      for (let i = 0; i < step; i++) {
        this.images.push(url + (this.images.length + 1))
      }
    },
    loadMore() {
      this.loadWorks()
    }
  }
}
</script>

<style lang="scss" scoped>
.works {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.work {
  position: relative;
  flex: auto;
  width: 50%;
  @include tablet {
    width: 25%;
  }
  img {
    width: 100%;
  }
  &::after {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.75);
    content: '\f06e';
    color: #eee;
    font-family: 'Font Awesome 5 Free';
    font-weight: 400;
    font-size: 40px;
    opacity: 0;
    transition: all 0.4s ease;
    cursor: pointer;
  }
  &:hover::after {
    opacity: 1;
  }
}

.more-button {
  display: block;
  width: 100%;
  padding: 27px 0;
  text-align: center;
  background: #f5f5f5;
  color: #8e8e8e;
  font-size: 12px;
  letter-spacing: 0.1em;
  line-height: 18px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease;
  margin: 0;
  @include tablet {
    margin: inherit;
  }
  @include pc {
    padding: 45px 30px;
  }
  &:hover {
    color: #5e5ebe;
    font-size: 18px;
  }
}
</style>
