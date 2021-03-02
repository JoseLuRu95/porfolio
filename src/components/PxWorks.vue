<template>
  <v-responsive :aspect-ratio="16/7.5">
    <v-container fluid class="container-works pa-0">
      <v-row dense py-0>
        <v-col cols="12" lg="7" class="d-flex justify-center align-center px-6 py-0 mt-n12">
          <v-timeline v-intersect="{
                  handler: onIntersect,
                  options: {
                    threshold: [0, 0.5, 1.0]
                  }
                }" reverse>
            <v-timeline-item v-for="(work, i) in works" :key="i" large color="blue-grey lighten-5" fill-dot>
              <template v-slot:icon>
                <v-avatar size="45" >
                  <v-img contain :src="getImgUrl(work.img)"></v-img>
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span :class="`title font-weight-medium`" v-text="work.time"></span>
              </template>
              <v-card class="blue-grey lighten-5 elevation-4">
                <v-card-title class="pb-0">
                  <div>
                    <p class="title mb-0">
                      {{work.company}}
                    </p>
                    <p class="subtitle-1">
                      {{work.description}}
                    </p>
                  </div>
                </v-card-title>
                <v-card-text v-if="!!work.tasks">
                  <v-list dense flat color="rgba(0, 0, 0, 0.1)">
                    <v-list-item class="py-0" v-for="(item, index) in work.tasks" :key="index">
                      <v-list-item-content class="py-0">
                        - {{item}}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
          </v-timeline-item>
        </v-timeline>
        </v-col>

        <v-col cols="5" class="pa-0 d-none d-lg-flex">
          <v-parallax v-resize="onResize" :height="windowSize" src="@/assets/banner3.jpg" style="width: 100%" >
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
    class="button-float"
      fab
      outlined
      color="black"
      @click="goTo('my-projects')">
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
      defaaul: () => { return '' }
    },
    goTo: {
      type: Function
    }
  },
  data () {
    return {
      windowSize: null,
      isIntersecting: false,
      path: 'job2.png',
      works: [
        { company: 'JB Grupo Empresarial S. de R.L de C.V', time: 'January 2020 - currently', description: 'Jr. Front-End Programmer', img: 'jb.png', tasks: ['Building stable and maintainable code utilizing Vue and Vuetify.', 'Working directly with stakeholders to comprehend business logic.', 'Assessing project requirements using Scrum and Kanban.', 'Version control with GIT and GITLAB.', 'Mainly consuming RESTful API services.', 'Prototype design utilizing Figma.', 'Implementing unit testing with JEST (TDD) and debugging.']
        },
        { company: 'Tenneco Walker', time: 'February 2019 - August 2019', description: 'Engineering Process Intern', img: 'tenneco.png', tasks: [`Engineering document management (Process sheets, work methods, flowcharts and checklists).`, `Collaborating with barely started web projects employing basic HTML, CSS and JavaScript as well as Vue framework.`]
        },
        { company: 'Meritorious Autonomous University of Puebla', time: 'August 2013 - December 2018', description: 'B.S. Mechatronic Engineering', 'img': 'buap.png' }
      ]
    }
  },
  methods: {
    onIntersect (entries, observer) {
      this.isIntersecting = entries[0].isIntersecting
    },
    onResize () {
      this.windowSize = this.$parent.$el.offsetHeight
    },
    getImgUrl (pet) {
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
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
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
.container-works{
  height: 100% !important;
}
</style>
