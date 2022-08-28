<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/placas_video/intel.png'" height="250"/>
        </template>
        <template v-slot:titulo>VGA INTEL</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:capacidade>4GB / 6GB</template>
        <template v-slot:modelo>GT730 DDR3 / GTX1050TI - GTX1650 - GTX1660TI DDR5/6</template>
        <template v-slot:marca>AFOX / GIGABYTE / GALAX</template>
      </templateCard>
      
      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/placas_video/amd.png'" height="250"/>
        </template>
        <template v-slot:titulo>VGA AMD</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:capacidade>4GB</template>
        <template v-slot:modelo>RX550 128B DDR5</template>
        <template v-slot:marca>PCYES</template>
      </templateCard>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PlacasVideo extends Vue {}
</script>

<style lang="scss">
</style>