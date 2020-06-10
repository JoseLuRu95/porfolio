<template>
  <v-footer>
    Footer
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      links: [
        { url: 'https://www.facebook.com/JoseRuGlez', icon: 'fab fa-facebook' },
        { url: 'https://www.linkedin.com/in/jos%C3%A9-luis-ruiz-gonz%C3%A1lez-265721100/', icon: 'fab fa-linkedin' },
        { url: 'https://github.com/JoseLuRu95', icon: 'fab fa-github' }
      ]
    }
  }
}
</script>
