<template>
  <div id="contact" class="contact">
    <div class="container container--narrow">
      <my-section-title class="title">
        <template v-slot:heading>
          Need a Project?
        </template>
        <template v-slot:body>
          <p>
            Let us know what you're looking for in an agency. We'll take a look
            and see if this could be the start of something beautiful.
          </p>
          <p>
            This is a sample page. Your message will be sent to a black hole.
          </p>
        </template>
      </my-section-title>
      <form id="contact-form" action="" class="form">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
        />
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
        />
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Your Title"
          aria-label="Your Title"
        />
        <textarea
          id="comment"
          name="comment"
          placeholder="Your Comment"
          aria-label="Your Comment"
        />
        <button class="button">Send Message</button>
      </form>
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
.contact {
  background: #f5f5f5;
  padding-bottom: 85px;
  text-align: center;
}

.title {
  max-width: 500px;
  margin: auto;
}

.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 37px;

  input,
  textarea {
    margin: 15px 0;
  }

  #name,
  #email {
    width: 100%;
    @include tablet {
      width: calc(50% - 15px);
    }
  }
  #title {
    width: 100%;
  }
  #comment {
    width: 100%;
    height: 170px;
  }
}
</style>
