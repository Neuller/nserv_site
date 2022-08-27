<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/MEMORIAS.png'" height="250"/>
        </template>
        <template v-slot:titulo>MEMÓRIAS DDR</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:desc1>DDR3 - 1333MHZ/2400MHZ</template>
        <template v-slot:desc2>DDR4 - 2400MHZ/2666MHZ/3200MHZ</template>
        <template v-slot:desc3>P/ COMPUTADORES E NOTEBOOKS</template>
      </templateCard>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Memorias extends Vue {}
</script>

<style lang="scss">
</style>