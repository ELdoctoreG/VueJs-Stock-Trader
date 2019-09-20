<template>
    <v-container class="pa-2" fluid>
        <v-row>
            <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from "./Stock.vue";

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
    appStock: Stock
    }
}
</script>
