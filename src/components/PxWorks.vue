<template>
  <v-container fill-height fluid class="d-flex justify-center align-center pa-0">
    <v-row dense class="pa-0">
      <v-col cols="12" lg="6" class="d-flex justify-center align-center px-12">
        <v-timeline v-intersect="{
                handler: onIntersect,
                options: {
                  threshold: [0, 0.5, 1.0]
                }
              }" reverse>
          <v-timeline-item v-for="(work, i) in works" :key="i" large>
          <template v-slot:icon>
            <v-avatar size="60" color="white">
              <v-img contain :src="getImgUrl(work.img)"></v-img>
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span :class="`title font-weight-medium`" v-text="work.time"></span>
          </template>
          <v-card :class="`primary lighten-${4 - i}`" class="elevation-4">
            <v-card-title class="headline font-weight-light mb-4">{{work.company}}</v-card-title>
            <v-card-text>
              {{work.description}}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      </v-col>
      <v-col cols="6" class="pa-0">
        <v-parallax v-resize="onResize" :height="windowSize" src="@/assets/banner3.jpg">
          <v-row align="center" justify="center" class="pa-0">
            <v-col class="text-center pa-0" cols="12">
              <div> </div>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    srcImage: {
      type: String,
      required: true,
      defaaul: () => { return '' }
    }
  },
  data () {
    return {
      windowSize: null,
      isIntersecting: false,
      path: 'job2.png',
      works: [
        { company: 'Meritorious Autonomous University of Puebla', time: 'August 2013 - December 2018', description: 'Mechatronic Engineer', 'img': 'buap.png' },
        { company: 'APASA S.A. de C.V.', time: 'August 2018 - December 2018', description: 'Engineering Process Intern', img: 'apasa.jpg' },
        { company: 'Tenneco Walker', time: 'February 2019 - August 2019', description: 'Engineering Process Intern', img: 'tenneco.png' },
        { company: 'JB Grupo Empresarial', time: 'January 2020 - currently', description: 'Frontend Programmer', img: 'jb.jpg' }
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
</style>
