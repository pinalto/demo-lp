<template>
  <div id="clients" class="clients">
    <div class="container">
      <div class="row">
        <div class="col col--1-5">
          <figure class="logo">
            <img src="@/assets/imgs/client1.png" alt="HANDMADE" />
          </figure>
        </div>
        <div class="col col--1-5">
          <figure class="logo">
            <img src="@/assets/imgs/client2.png" alt="Mountain" />
          </figure>
        </div>
        <div class="col col--1-5">
          <figure class="logo">
            <img src="@/assets/imgs/client3.png" alt="COLLECTION" />
          </figure>
        </div>
        <div class="col col--1-5">
          <figure class="logo">
            <img src="@/assets/imgs/client4.png" alt="MOUNTAINBIKE" />
          </figure>
        </div>
        <div class="col col--1-5">
          <figure class="logo">
            <img src="@/assets/imgs/client1.png" alt="HANDMADE" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clients {
  padding: 54px;
}

.row {
  justify-content: space-around;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px 0;
  @include pc {
    padding: 10px 0;
  }
  img:hover {
    transform: scale(1.2, 1.2);
  }
}
</style>
