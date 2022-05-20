<template>
  <div class="vendasProdutos">
    <!-- CAROUSEL -->
    <div 
    offset-y
    text-center
    class="desktop"
    >
      <v-carousel 
      v-model="model"
      cycle
      height="500"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
            </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- COMPUTADORES -->
    <v-row>
      <v-col cols="12">
        <titleH2 class="mt-16">
          <template v-slot:titulo>Computadores</template>
        </titleH2>
        <computadores></computadores>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Produtos extends Vue {
    model = 0;
    loading = false;
    selection = 1;
    items = [
        {
          src: "/vendas/SLIDE1.png",
        },
        {
          src: "/vendas/SLIDE2.png",
        }
    ];

    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }
}
</script>

<style lang="scss">
.v-expansion-panel-content > div {
  padding: 0 !important;
}
@media(max-width: 760px) {
  .desktop {
    display: none;
  }
}
</style>