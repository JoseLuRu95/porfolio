<template>
  <v-app>
    <NavBar/>
      <router-view/>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>

// import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default {
  components: {
    // Footer,
    NavBar
  }

}
</script>
