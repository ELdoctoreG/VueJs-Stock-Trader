<template>
  <v-col cols="12" md="6">
    <v-card class="grey lighten-5 pa-5">
      <v-card-text>
        <div class="headline mb-2 d-flex">
          <h3>{{ stock.name }}</h3>
          <small class="ml-auto"
            >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small
          >
        </div>
      </v-card-text>

      <v-card-actions>
        <div class="pull-left">
          <v-text-field label="Quantity" v-model="quantity"></v-text-field>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          @click="sellStock"
          class="float-right"
          color="primary"
          :disabled="insufficientQuantity || quantity <= 0"
          large
          >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
