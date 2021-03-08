<template>
  <v-responsive class="container-section">
    <v-container ref="main-container" fill-height fluid class="pa-0">
      <v-row class="d-flex justify-center align-center pa-2 pa-lg-0" dense style="height: 100%">
        <v-col cols="12" lg="8" xl="7" class="px-2 px-ld-6">
          <v-timeline :dense="shrink" :reverse="!shrink" class="ma-auto">
            <v-timeline-item
              class="py-2 px-1 py-xl-6"
              v-for="(work, i) in works"
              :key="i"
              large
              color="blue-grey lighten-5"
              fill-dot
            >
              <template v-slot:icon>
                <v-avatar size="45">
                  <v-img contain :src="getImgUrl(work.img)"></v-img>
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span :class="`title font-weight-medium`" v-text="work.time"></span>
              </template>
              <v-card class="elevation-2 ma-1" color="rgba(0, 0, 0, 0.01)">
                <v-card-title class="pt-1 pb-0">
                  <div>
                    <p class="mb-0" :class="shrink ? 'subtitle-1' : 'title'">{{work.company}}</p>
                    <p :class="shrink ? 'body-2' : 'subtitle-1'" class="mb-1">{{work.description}}</p>
                  </div>
                </v-card-title>
                <v-card-text class="pt-0 pb-2 px-2" v-if="!!work.tasks">
                  <v-list dense flat color="rgba(0, 0, 0, 0.1)">
                    <v-list-item class="py-0" v-for="(item, index) in work.tasks" :key="index">
                      <v-list-item-content>- {{item}}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>

        <v-col v-show="!shrink" cols="5" lg="4" xl="5" class="pa-0" style="height: 100%">
          <v-parallax
            v-resize="onResize"
            :height="windowSize"
            src="@/assets/banner3.jpg"
            style="width: 100%"
          ></v-parallax>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      class="button-float"
      :small="shrink"
      fab
      outlined
      color="black"
      @click="goTo('my-projects')"
    >
      <v-icon class="black--text">mdi-chevron-double-down</v-icon>
    </v-btn>
  </v-responsive>
</template>

<script>
export default {
  props: {
    srcImage: {
      type: String,
      required: true,
      defaaul: () => {
        return ''
      }
    },
    goTo: {
      type: Function
    }
  },
  data() {
    return {
      windowSize: null,
      isIntersecting: false,
      path: 'job2.png',
      works: [
        {
          company: 'JB Grupo Empresarial S. de R.L de C.V',
          time: 'January 2020 - present',
          description: 'Jr. Front-End Programmer',
          img: 'jb.png',
          tasks: [
            'Building stable and maintainable code utilizing Vue and Vuetify.',
            'Working directly with stakeholders to comprehend business logic.',
            'Assessing project requirements using Scrum and Kanban.',
            'Version control with GIT and GITLAB.',
            'Mainly consuming RESTful API services.',
            'Prototype design utilizing Figma.',
            'Implementing unit testing with JEST (TDD) and debugging.'
          ]
        },
        {
          company: 'Tenneco Walker',
          time: 'February 2019 - August 2019',
          description: 'Process Engineering Intern',
          img: 'tenneco.png',
          tasks: [
            `Engineering document management (Process sheets, work methods, flowcharts and checklists).`,
            `Collaborating with barely started web projects employing basic HTML, CSS and JavaScript as well as Vue framework.`
          ]
        },
        {
          company: 'Meritorious Autonomous University of Puebla',
          time: 'August 2013 - December 2018',
          description: 'B.S. Mechatronic Engineering',
          img: 'buap.png'
        }
      ]
    }
  },
  computed: {
    viewSize() {
      return this.$vuetify.breakpoint
    },
    shrink() {
      return this.viewSize.sm || this.viewSize.xs || this.viewSize.md
    }
  },
  methods: {
    onResize() {
      this.windowSize = this.$refs['main-container'].clientHeight
    },
    getImgUrl(pet) {
      var images = require.context('../assets/', false, /^\.\/.*$/)
      return images(`./${pet}`)
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.button-float {
  position: absolute;
  top: 20px;
  z-index: 0;
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
