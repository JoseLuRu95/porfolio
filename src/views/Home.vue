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
  padding: 0;
}
</style>
