<template>
  <v-col cols="12" md="6">
    <v-card class="grey lighten-5 pa-5">
      <v-card-text>
        <div class="headline mb-2 d-flex">
          <h3>{{ stock.name }}</h3>
          <small class="ml-auto">(Price: {{ stock.price }})</small>
        </div>
      </v-card-text>

      <v-card-actions>
        <div class="pull-left">
          <v-text-field label="Quantity" v-model="quantity"></v-text-field>
        </div>
        <v-spacer></v-spacer>
        <v-btn @click="buyStock" class="float-right" color="primary" :disabled="quantity <= 0"
               large>Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>


<script>
  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockID: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };
        console.log(order);
        this.quantity = 0;
      }
    }
  }
</script>