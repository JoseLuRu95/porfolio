<template>
    <v-app-bar app color="white">
      <v-toolbar-title>José Luis' Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-for="(r, index) in links" :key="index" link :href="r.url" >
          <v-icon>{{r.icon}}</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        { url: 'https://www.facebook.com/JoseRuGlez', icon: 'mdi-facebook' },
        { url: 'https://www.linkedin.com/in/jos%C3%A9-luis-ruiz-gonz%C3%A1lez-265721100/', icon: 'mdi-linkedin' },
        { url: 'https://github.com/JoseLuRu95', icon: 'mdi-github' }
      ]
    }
  }
}
</script>
