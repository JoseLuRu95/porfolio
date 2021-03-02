<template>
  <v-responsive :aspect-ratio="16/7.5">
    <v-container fluid fill-height  class="container-projects grey lighten-3">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <p class="display-2 black--text">My projects</p>
        </v-col>
        <v-col v-for="p in projects" :key="p.title" cols="12" md="6" lg="3">
          <v-card elevation="8" max-width="700px">
            <v-img :src="getImgUrl(p.img)" contain aspect-ratio="1.6"></v-img>
            <v-card-title>
              {{ p.title }}
            </v-card-title>
            <v-card-actions>
              <v-btn :href="p.github" target="_blank" text>Github</v-btn>
              <v-btn :href="p.url" target="_blank"  color="purple" text>Visit</v-btn>
              <v-spacer></v-spacer>
              <v-btn  icon @click="p.show = !p.show">
                <v-icon>{{ p.show ? 'mdi-chevron-double-up' : 'mdi-chevron-double-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <v-card
                v-if="p.show"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;">
                <v-card-text style="height: 85%">
                  <p class="display-1 text--primary">
                    Description
                  </p>
                  <p>{{p.description}}</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="p.show = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      class="button-float"
      fab
      outlined
      color="black"
      @click="goTo('title')">
        <v-icon class="black--text">mdi-chevron-double-up</v-icon>
    </v-btn>
  </v-responsive>
</template>

<script>
export default {
  props: {
    goTo: {
      type: Function
    }
  },
  data () {
    return {
      projects: [
        { title: 'Meetup Page', show: false, description: 'Most complex project. SPA using Vue, Vuetify and Firebase. Requires log in (email, password and verificate password) or sign up (email and password). Users can create meetups, edit their own meeting and join or leave from others', img: 'meeting-app.png', github: 'https://github.com/JoseLuRu95/meetup-app', url: 'https://meetup-app-vue.netlify.app' },
        { title: 'Dust Flare Webpage', show: false, description: 'A customed webpage designed for a local music band, it does utilize basic HTML5, CSS3 and Javascript. Besides,this. page provides all information reletated to the band including their biography, merch, single songs and albums', img: 'dustflare.png', github: 'https://github.com/JoseLuRu95/DustFlareWebPage', url: 'https://dustflareband.netlify.com' },
        { title: 'Contact List', show: false, description: 'Personal contacts SPA, this page was designed usin Angular, Node.js, Express and MondoDB (MEAN Stack). With this APP, users can add contacts by defining their first name, last name and birthday date', img: 'contact-list.png', github: 'https://github.com/JoseLuRu95/contactapp-angular', url: 'https://contactsapp-joseluru.netlify.com' }
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

<style scoped>
.button-float {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.container-projects{
  height: 100%;
}
</style>
