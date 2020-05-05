<template>
  <footer class="s-footer h-dark-bg">
    <div class="right-vert-line"></div>

    <div class="row s-footer__main">
      <div class="column large-6">
        <div class="section-intro">
          <h3 class="subhead">Get In Touch</h3>

          <h1 class="display-1">
            Have an idea or a concept that really excite you?
            Let's turn that idea into reality. Shoot me a message.
          </h1>
        </div>

        <div class="footer-email-us">
          <a href="mailto:hamrouni.amin@gmail.com" class="btn btn--primary h-full-width">Let's Talk</a>
        </div>
      </div>

      <div class="column large-5">
        <div class="footer-contacts">
          <div class="footer-contact-block">
            <h5 class="footer-contact-block__header">Email</h5>
            <p class="footer-contact-block__content">
              <a href="mailto:hamrouni.amin@gmail.com">hamrouni.amin@gmail.com</a>
            </p>
          </div>
          <!-- end footer-contact-block -->
          <div class="footer-contact-block">
            <h5 class="footer-contact-block__header">Phone</h5>
            <p class="footer-contact-block__content">
              <a href="tel:+33669667998">(+33) 06 69 66 79 98</a>
            </p>
          </div>
          <!-- end footer-contact-block -->
          <div class="footer-contact-block">
            <h5 class="footer-contact-block__header">Social</h5>
            <ul class="footer-contact-block__list">
              <li>
                <a target="_blank" href="https://www.instagram.com/amine_the_almighty/">Instagram</a>
              </li>
            </ul>
          </div>
          <!-- end footer-contact-block -->
        </div>
      </div>
    </div>
  </footer>
  <!-- end s-footer -->
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer-contact-block {
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.2;
}

.footer-contact-block a {
  color: #ffffff;
}

.footer-contact-block a:hover,
.footer-contact-block a:focus {
  color: #f9861a;
}

.footer-contact-block__content,
.footer-contact-block__list li {
  padding: 0.8rem 0;
}

.footer-contact-block__list {
  list-style: none;
  margin-top: 0.4rem;
  margin-left: 0;
}

.footer-contact-block__list li {
  padding-left: 0;
}

.footer-contact-block__header {
  color: rgb(255, 255, 255);
  margin: 0;
}
</style>
