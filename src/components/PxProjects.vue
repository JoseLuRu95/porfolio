<template>
  <v-container fluid fill-height class="d-flex justify-center align-center grey lighten-3 pa-0">
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h1 class="display-3 black--text">My projects</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="p in projects" :key="p.title" cols="12" md="6" lg="3">
        <v-card elevation="8">
          <v-img :src="getImgUrl(p.img)" aspect-ratio="1.8"></v-img>
          <v-card-title>
             {{ p.title }}
          </v-card-title>
          <v-card-actions>
            <v-btn :href="p.github" target="_blank" text>Github</v-btn>
            <v-btn :href="p.url" target="_blank"  color="purple" text>Visit</v-btn>
            <v-spacer></v-spacer>
            <v-btn  icon @click="p.show = !p.show">
              <v-icon>{{ p.show ? 'fas fa-chevron-up' : 'fas fa-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="p.show">
              <v-divider></v-divider>
              <v-card-text>
                {{ p.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        { title: 'Meetup Page', show: false, description: 'Most complex project. SPA project using Vue + Vuetify + Firebase. Requires sign up (email, password). User can create meetups, edit own meetups and join or leave them', img: 'meeting-app.png', github: 'https://github.com/JoseLuRu95/meetup-app', url: 'https://meetup-app-vue.netlify.app' },
        { title: 'Dust Flare Webpage', show: false, description: 'A customed webpage designed for a local music band. It use only HTML5, CSS3 and Javascript and provides all the information reletated to the band, that includes their biography, merch, single songs and albums', img: 'dustflare.png', github: 'https://github.com/JoseLuRu95/DustFlareWebPage', url: 'https://dustflareband.netlify.com' },
        { title: 'Contact List', show: false, description: 'Personal contacts SPA, this page was designed usin Angular, Node.js, Express and MondoDB (MEAN Stack). Here, user can add contacts by defining their first name, last name and birthday date', img: 'contact-list.png', github: 'https://github.com/JoseLuRu95/contactapp-angular', url: 'https://contactsapp-joseluru.netlify.com' }
      ]
    }
  },
  methods: {
    getImgUrl (pet) {
      var images = require.context('../assets/', false, /^\.\/.*$/)
      return images(`./${pet}`)
    }
  }
}
</script>
