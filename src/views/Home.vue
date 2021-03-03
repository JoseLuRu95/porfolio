<template>
 <div class="banner">
   <PxTitle id="title" :srcImage="getImgUrl('banner.jpg')" :goTo="goTo"/>
   <PxKnowledge id="about-me" :goTo="goTo"/>
   <PxWorks id="my-work" :srcImage="getImgUrl('banner1.jpg')" :goTo="goTo"/>
   <PxProjects id="my-projects" :goTo="goTo"/>
 </div>
</template>

<script>
import PxTitle from '@/components/PxTitle'
import PxProjects from '@/components/PxProjects'
import PxKnowledge from '@/components/PxKnowledge'
import PxWorks from '@/components/PxWorks'

export default {
  name: 'home',
  components: {
    PxTitle,
    PxProjects,
    PxKnowledge,
    PxWorks
  },
  methods: {
    getImgUrl (pet) {
      var images = require.context('../assets/', false, /^\.\/.*$/)
      return images(`./${pet}`)
    },
    goTo (section) {
      this.$vuetify.goTo(`#${section}`)
    }
  }
}
</script>

<style scoped>
.banner {
  height: 100vh;
}
.container-section{
  min-height: 94vh !important;
  width: 100%;
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
