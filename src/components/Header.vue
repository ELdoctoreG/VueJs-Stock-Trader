<template>
  <div>
    <v-toolbar dark>
      <v-toolbar-title class="ml-8 mr-12 font-weight-light">
        <router-link to="/">
          Stock Trader
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn to="/portfolio" activeClass="primary">
          Portfolio
        </v-btn>
        <v-btn to="/stocks" activeClass="primary">
          Stocks
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn activeClass="primary" @click="endDay">
          End Day
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark v-on="on">
              Save & Load
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="#" @click="saveData">
              <v-list-item-title>Save Data</v-list-item-title>
            </v-list-item>
            <v-list-item to="#" @click="loadData">
              <v-list-item-title>Load Data</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <h3 class="text-center ml-12 mr-5 mb-0 font-weight-light">
        Funds: <strong>{{ funds | currency }}</strong>
      </h3>
    </v-toolbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        // stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style>
.v-application a {
  color: white !important;
  text-decoration: none;
}
</style>
