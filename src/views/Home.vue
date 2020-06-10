<template>
 <div class="banner px-1 px-md-8">
   <PxTitle :srcImage="getImgUrl('banner.jpg')"/>
   <PxKnowledge/>
   <!-- <PxPhrase phrase="Lorem" srcImage="https://i.imgur.com/6vv4Pds.jpg"/> -->
   <PxWorks :srcImage="getImgUrl('banner1.jpg')"/>
   <!-- <PxPhrase phrase="Lorem" srcImage="https://i.imgur.com/6vv4Pds.jpg" /> -->
   <PxProjects/>
 </div>
</template>

<script>
import PxTitle from '@/components/PxTitle'
import PxProjects from '@/components/PxProjects'
import PxKnowledge from '@/components/PxKnowledge'
import PxWorks from '@/components/PxWorks'
// import PxPhrase from '@/components/PxPhrase'

export default {
  name: 'home',
  components: {
    PxTitle,
    PxProjects,
    PxKnowledge,
    PxWorks
    // PxPhrase
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
.banner {
  height: 100vh;
}
</style>
