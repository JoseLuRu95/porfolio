<template>
  <v-responsive class="container-section">
    <v-container fill-height fluid class="grey lighten-3 pt-0 mt-0">
      <v-row dense class="d-flex justify-center align-center" style="height: 100%">
        <v-col cols="12" lg="5">
          <p class="my-12 text-center black--text" :class="shrink ? 'display-1' : 'display-3'">About me</p>
          <p class="px-12 my-12 text-center" :class="shrink ? 'body-1' : 'headline'">
            Proficient Front-End developer with almost 2 years of experience building
            and maintaining responsive websites. Aspiring to still working as developer
            adjusting my skills to cutting-edge development technologies, and
            simultaneously extending my abilities to other areas such as Back-End to
            one day become a Full Stack developer.
          </p>
          <v-row class="d-none d-lg-flex justify-center align-center my-12">
            <v-avatar size="150" color="indigo">
              <v-img :src="getImgUrl('photo.jpg')" alt="John"></v-img>
            </v-avatar>
          </v-row>
        </v-col>

        <v-col cols="1" class="d-none d-lg-flex justify-center align-center"  style="height: 100%">
          <div class="divider"></div>
        </v-col>

        <v-col  cols="12" lg="5" class="d-flex justify-center align-center">
          <v-card max-width="600px">
            <v-card-title>
              <p :class="shrink ? 'display-1' : 'display-3'">
                My skills
              </p>
            </v-card-title>
            <v-card-text>
              <v-list subheader v-for="(skill, index) in skills" :key="index">
                <v-subheader v-if="skill.title" >{{skill.title}}</v-subheader>
                <v-list-item>
                  <v-list-item-content>
                    <v-row >
                      <v-col cols="4" v-for="item in skill.list" :key="item.name" class="d-flex justify-center align-center">
                        <v-tooltip top>
                          <template v-slot:activator="{ on }">
                            <v-progress-circular :size="shrink ? 80 : 120" width="8" :value="item.value" color="blue-grey lighten-1" v-on="on">
                              <v-icon v-if="item.icon" :size="shrink ? 20 : 50" :color="item.color" v-text="item.icon"></v-icon>
                              <v-avatar v-else :size="shrink ? 20 : 50" color="white">
                              <v-img
                                :src="getImgUrl(item.img)"
                                contain
                                ></v-img>
                              </v-avatar>
                              <p class="font-weight-medium">
                                {{item.value}}%
                              </p>
                            </v-progress-circular>
                          </template>
                          <span>{{item.name}}</span>
                        </v-tooltip>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      :small="shrink"
      fab
      outlined
      color="black"
      class="button-float"
      @click="goTo('my-work')">
    <v-icon class="black--text">mdi-chevron-double-down</v-icon>
    </v-btn>
  </v-responsive>
</template>

<script>
export default {
  name: 'Pxskill',
  props: {
    goTo: {
      type: Function
    }
  },
  data () {
    return {
      skills: [
        { 'title': '',
          'list': [
            { 'name': 'HTML', 'icon': 'mdi-language-html5', 'color': 'red', 'value': 60 },
            { 'name': 'CSS', 'icon': 'mdi-language-css3', 'color': 'blue', 'value': 60 },
            { 'name': 'JavaScript', 'icon': 'mdi-language-javascript', 'color': 'yellow', 'value': 60 },
            { 'name': 'Vue', 'icon': 'mdi-vuejs', 'color': 'green', 'value': 80 },
            { 'name': 'Vuetify', 'icon': 'mdi-vuetify', 'color': 'blue', 'value': 80 },
            { 'name': 'Figma', 'icon': null, 'img': 'figma.png', 'color': 'black', 'value': 60 },
            { 'name': 'Jest', 'icon': null, 'img': 'jest.png', 'color': 'pink darken-4', 'value': 40 }
          ] }
      ]
    }
  },
  computed: {
    viewSize () {
      return this.$vuetify.breakpoint
    },
    shrink () {
      return this.viewSize.sm || this.viewSize.xs || this.viewSize.md
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
.divider {
  height: 60%;
  width: 1px;
  background-color: black;
}
.button-float {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (max-width: 1264px) {
  .button-float {
    position: absolute;
    top: 10px;
    z-index: 0;
    left: 90%;
    transform: translateX(-50%);
  }
}
</style>
