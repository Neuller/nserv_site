<template>
  <div>
    <v-row>
      <!-- PRODUTOS EM PROMOCOES -->
      <v-card
        :loading="loading1"
        class="mx-auto my-10"
        max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
            color="green"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="/vendas/MB_TUF_GAMING.png"
        ></v-img>

        <v-card-title>ASUS TUF B360M-PLUS</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value="5.0"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              5.0
            </div>
          </v-row>

           <div class="my-4 text-subtitle-1 red--text">
            R$ • 589,90
          </div>
          
          <div>GAMING INTEL LGA 1151</div>
          <div>SUPORTE A DDR4 2666MHz</div>
          <div>SUPORTE A M.2 32GBPS</div>
          <div>USB 3.1 NATIVO</div>
          <div>MELHOR PROTEÇÃO CONTRA SOBRECORRENTE</div>
          <div>ILUMINAÇÃO RGB AURA SYNC</div>
          <div>ESTABILIDADE DDR4 APRIMORADA</div>
          <div>CONTROLES DE REFRIGERAÇÃO FLEXÍVEIS</div>
          <div>COMPONENTES TUF</div>
        </v-card-text>
      </v-card>
      
    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rodape extends Vue {
    loading1 = false;
    loading2 = false;
    loading3 = false;
    selection = 1;

    reserve1() {
      this.loading1 = true;
      setTimeout(() => (this.loading1 = false), 2000);
    }

    reserve2() {
      this.loading2 = true;
      setTimeout(() => (this.loading2 = false), 2000);
    }

    reserve3() {
      this.loading3 = true;
      setTimeout(() => (this.loading3 = false), 2000);
    }
}
</script>

<style lang="scss">
</style>