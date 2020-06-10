<template>
  <v-container fill-height fluid class="grey lighten-3">
    <v-row dense class="d-flex justify-center no-gutters">
      <v-col cols="12" lg="5">
        <h1 class="display-3 my-12 text-center black--text">About me</h1>
        <p class="px-12 my-12 text-center headline">
          FrontEnd Programmer Jr. with experience designing and landing pages for companies. Basically using API and CRUD, developing projects following SCRUM schema.
        </p>
        <v-row class="d-flex justify-center align-center my-12">
          <v-avatar size="150" color="indigo">
            <v-img :src="getImgUrl('photo.jpg')" alt="John"></v-img>
          </v-avatar>
        </v-row>
      </v-col>
      <v-col cols="1" class="d-flex justify-center">
      <div class="divider"></div>
      </v-col>
      <v-col  cols="12" lg="5" class="d-flex justify-center align-center">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col v-for="(knowledge, index) in knowledges" :key="index" cols="4">
                <v-list two-line subheader>
                  <v-subheader inset>{{knowledge.title}}</v-subheader>
                  <v-list-item v-for="item in knowledge.list" :key="item.name">
                    <v-list-item-avatar class="elevation-4" size="40">
                      <v-icon size="30  " :color="item.color" v-text="item.icon"></v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-rating dense class="ml-4" readonly size="20" :value="item.ranking">
                      </v-rating>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PxKnowledge',
  data () {
    return {
      knowledges: [
        { 'title': 'Web Development',
          'list': [
            { 'name': 'HTML', 'icon': 'mdi-language-html5', 'color': 'red', 'ranking': 4 },
            { 'name': 'CSS', 'icon': 'mdi-language-css3', 'color': 'blue', 'ranking': 3 },
            { 'name': 'JavaScript', 'icon': 'mdi-language-javascript', 'color': 'yellow', 'ranking': 5 }
          ]
        },
        { 'title': 'Frontend',
          'list': [
            { 'name': 'Vue', 'icon': 'mdi-vuejs', 'color': 'green', 'ranking': 5 },
            { 'name': 'Vuetify', 'icon': 'mdi-vuetify', 'color': 'blue', 'ranking': 5 },
            { 'name': 'Angular', 'icon': 'mdi-angular', 'color': 'red', 'ranking': 3 }
          ] },
        { 'title': 'Backend',
          'list': [
            { 'name': 'Node.js', 'icon': 'mdi-nodejs', 'color': 'green', 'ranking': 2 },
            { 'name': 'Python', 'icon': 'mdi-language-python', 'color': 'yellow', 'ranking': 2 },
            { 'name': 'MongoDB', 'icon': 'mdi-database', 'color': 'green', 'ranking': 2 }
          ] }
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
.divider {
  height: 100%;
  width: 1px;
  background-color: black;
}
</style>
