<template>
  <v-parallax v-resize="onResize" :height="windowSize * 0.8" :src="srcImage">
    <v-row align="center" justify="center" class="pa-0">
      <v-col class="text-center pa-0" cols="12">
        <div> {{phrase}} </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  props: {
    phrase: {
      type: String,
      required: true,
      defaaul: () => { return '' }
    },
    srcImage: {
      type: String,
      required: true,
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
