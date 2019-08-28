<template>
  <div class="footer-wrapper">
    <div class="container">
      <footer class="footer">
        <div class="company">
          <p class="name">Sample Page.</p>
          <p class="copyright">
            This is a sample page by
            <a href="https://twitter.com/pinalto_">pinalto</a>.
          </p>
          <p class="copyright">
            Thanks to
            <a
              href="https://dribbble.com/sudinasa"
              target="_blank"
              rel="noopener"
              >Svetlana</a
            >
            for a great design.
          </p>
        </div>
        <div class="contact-info">
          <p class="email">sample@______.com</p>
          <p class="tel">03 xxxx 5678</p>
        </div>
        <div class="footer-nav">
          <ul>
            <li>Projects</li>
            <li>News</li>
            <li>About</li>
            <li>Events</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Legals</li>
          </ul>
        </div>
        <div class="sns">
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  background: #000;
  color: #fff;
  font-size: 15px;
  padding-bottom: 10vw;
  @include tablet {
    padding: 100px 100px 90px;
  }
}

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: -30px;
  & > * {
    margin-top: 30px;
    flex-grow: 1;
  }
}

.company {
  min-width: 250px;
}

.name {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.01em;
  padding-bottom: 20px;
}

.contact-info {
  min-width: 200px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-nav {
  width: 200px;
  display: flex;
  flex-wrap: wrap;

  li {
    display: inline-block;
    width: 46%;
  }
}
</style>
