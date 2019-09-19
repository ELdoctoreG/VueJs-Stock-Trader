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
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark v-on="on">
                Save & Load
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="#">
                <v-list-item-title>Save Data</v-list-item-title>
              </v-list-item>
              <v-list-item to="#">
                <v-list-item-title>Load Data</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style>
.v-application a {
  color: white !important;
  text-decoration: none;
}
</style>
