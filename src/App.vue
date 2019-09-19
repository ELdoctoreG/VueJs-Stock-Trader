<template>
  <!-- App.vue -->

  <v-app>

    <app-header></app-header>


    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>


<script>
import Header from "./components/Header.vue";
export default {
  name: 'App',
  components: {
    appHeader: Header
  }
};
</script>
