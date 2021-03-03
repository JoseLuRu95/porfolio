<template>
  <v-responsive class="container-title">
    <v-parallax class="title-style" v-resize="onResize" src="@/assets/banner.jpg" :height="windowSize">
      <v-row align="center" justify="center" class="pa-0">
        <v-col class="text-center pa-0" cols="12">
          <h1 class="display-3 white--text font-weigth-medium">José Luis Ruiz González</h1>
          <div class="horizontal-line black" ></div>
          <h1 class="display-2 grey--text font-weigth-medium">Front-End Developer</h1>
          <v-btn
            class="mt-4"
            fab
            outlined
            color="white"
            @click="goTo('about-me')">
              <v-icon class="white--text">mdi-chevron-double-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </v-responsive>
</template>

<script>
export default {
  props: {
    srcImage: {
      type: String,
      defaaul: () => { return '' }
    },
    goTo: {
      type: Function
    }
  },
  data () {
    return {
      windowSize: null
    }
  },
  methods: {
    onResize () {
      this.windowSize = this.$parent.$el.offsetHeight
    }
  }

}
</script>

<style scoped>
.horizontal-line {
  width: 100vw;
  height: 1px;
}
.title-style {
  width: 100% !important;
}
.container-title{
  min-height: 94vh !important;
  width: 100vw !important;
}
</style>
