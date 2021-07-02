<template>
  <v-app>
    <Navigation/>
    <v-container>
      <router-view/> 
    </v-container>
  </v-app>
</template>

<script>
import Navigation from '@/components/navigation.vue'

export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>

<style lang="scss"></style>
