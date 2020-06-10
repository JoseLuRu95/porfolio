<template>
  <div class="projects-section">
    <px-projects/>
  </div>
</template>

<script>
import PxProjects from '@/components/PxProjects'
export default {
  components: {
    PxProjects
  }
}
</script>

<style lang="scss" scope>
.projects-section {
  background:linear-gradient(to right,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.644)) , url("../assets/wallpaper.jpg") no-repeat center fixed;
  background-size: cover;
  height: 87.2vh;
}
</style>
