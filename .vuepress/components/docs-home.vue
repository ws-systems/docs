<template>
  <div class="home">
    <div class="hero">
      <img src="/hero.svg" alt="hero">
      <h1>{{ $title }}</h1>
      <p class="description">
        {{ $description }}
      </p>
    </div>
    <div class="features" v-if="sections && sections.length">
      <div class="feature" v-for="section in sections">
        <h2>{{ section.title }}</h2>
        <p class="feature-description" v-if="section.description">
          {{ section.description }}
        </p>
        <ul class="page-list" v-if="section.pages && section.pages.length">
          <li class="page-link" v-for="page in section.pages">
            <NavLink v-if="page.title && page.path" :item="makelink(page.title, page.path)"/>
            <NavLink v-else :item="resolve(page)"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <NavLink v-if="license.link" :item="license"/>
      <span v-else>{{ license.text }}</span>
      <span class="separator"></span>
      Copyright &copy; {{ new Date().getFullYear() }} <NavLink :item="makelink('WhiteStar Systems', 'https://whitestar.systems')"/>
      <br />
      <NavLink class="acknowledgement" :item="makelink('Acknowledgements', '/acknowledgements')"/>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'
import { resolvePage } from './util'

export default {
  computed: {
    sections () {
      return this.$page.frontmatter.sections
    },
    license () {
      return {
        text: (this.$site.themeConfig.licenseText || 'All Rights Reserved'),
        link: this.$site.themeConfig.licenseLink
      }
    },
    path () {
      return this.$page;
    }
  },
  methods: {
    resolve (pageName) {
      var pageLink = '/' + pageName.replace(/\s/g, '-').toLowerCase() + '/';
      return {
        link: resolvePage(this.$site.pages, pageLink, this.$route.path).path,
        text: pageName
      }
    },
    makelink (linkText, linkValue) {
      return {
        link: linkValue,
        text: linkText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  .hero img
    max-height 200px
  .feature
    flex-grow 1
    flex-basis 45%
    max-width 45%
  .icon.outbound
    display none
  .footer
    .separator
      $height = 26px
      $width = 1px

      padding ($height / 2) 0
      margin 0 5px + $width 0 5px
      border-left $width black solid
      height 0
      width 0
      font-size 0
      vertical-align middle
    .acknowledgement
      font-weight 400
      margin-top 15px
      font-size 12px
      text-decoration underline
      display block
</style>
