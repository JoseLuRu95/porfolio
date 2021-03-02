<template>
  <v-app>
    <v-container fluid pa-0>
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {
  }
}
</script>
