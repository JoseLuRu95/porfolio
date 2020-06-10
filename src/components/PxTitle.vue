<template>
  <v-parallax v-resize="onResize" src="@/assets/banner.jpg" :height="windowSize">
    <v-row align="center" justify="center" class="pa-0">
      <v-col class="text-center pa-0" cols="12">
        <h1 class="display-3 black--text font-weigth-medium">José Luis Ruiz González</h1>
        <div class="horizontal-line black" ></div>
        <h1 class="display-2 black--text font-weigth-medium">Frontend Developer</h1>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  props: {
    srcImage: {
      type: String,
      defaaul: () => { return '' }
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
</style>
