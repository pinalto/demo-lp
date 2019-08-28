<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="container">
        <div class="row">
          <div class="col col--1">
            <div class="logo" @click="isOpen = true">
              <img src="@/assets/imgs/logo.png" alt="" />
            </div>
          </div>
          <div class="col col--11 nav-panel" :class="{ open: isOpen }">
            <nav>
              <ul class="nav-list">
                <li
                  class="close-button"
                  aria-label="close navigation"
                  @click="isOpen = false"
                >
                  ×
                </li>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Work</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    const self = this
    smoothscroll.polyfill()
    self.$el.querySelectorAll('a[href^="#"]').forEach(function(el) {
      el.addEventListener('click', event => {
        event.preventDefault()
        self.isOpen = false
        const href = el.getAttribute('href')
        const target = document.querySelector(
          href === '#' || href === '' ? 'html' : href
        )
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 9999;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
  @include tablet {
    height: 200px;
  }
}

.header-wrapper {
  position: sticky;
  top: 38px;
}

.nav-panel {
  position: fixed;
  top: 0;
  left: -100vw;
  max-width: 100vw;
  height: 150vh;
  padding-top: 20px;
  overflow-x: hidden;
  background: rgba(255, 255, 255, 0.95);
  transition: all 0.2s ease;
  @include pc {
    position: static;
    padding-top: 0;
    background: none;
    max-width: auto;
    height: auto;
  }
  &.open {
    transform: translateX(100vw);
    @include pc {
      transform: none;
    }
  }
}

.nav-list {
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  @include pc {
    justify-content: flex-end;
    font-size: 12px;
  }
  & > * {
    padding: 13px 25px;
    width: 100%;
    border-bottom: 1px solid silver;
    line-height: 2;

    @include pc {
      margin: 0 12px;
      padding: 0;
      width: auto;
      border: none;
    }
  }
  a {
    display: block;

    color: $colCaption;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
    &:link,
    &:visited {
      color: $colCaption;
    }
    &:hover {
      color: $colHighlight;
    }
    @include pc {
      display: inline;
    }
  }
}

.close-button {
  text-align: right;
  font-size: 36px;
  line-height: 1;
  cursor: pointer;
  @include pc {
    display: none;
  }
}
</style>
