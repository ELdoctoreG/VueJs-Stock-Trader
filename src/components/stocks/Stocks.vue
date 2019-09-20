<template>
  <v-container class="pa-2" fluid>
    <v-row>
      <app-stock v-for="stock in stocks" :stock="stock">{{ stock }}</app-stock>
    </v-row>
  </v-container>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock
  },
    computed: {
      stocks() {
          return this.$store.getters.stocks;
      }
    }
};
</script>
