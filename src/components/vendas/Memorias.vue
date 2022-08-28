<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/memorias/memorias_desktop.png'" height="250"/>
        </template>
        <template v-slot:titulo>MEMÓRIAS P/ COMPUTADORES</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:desc1>CAPACIDADEs 4GB / 8GB / 16GB</template>
        <template v-slot:desc2>MODELOs DDR3 / DDR4</template>
        <template v-slot:desc3>MARCAs KINGSTON / MARKVISION / CRUCIAL / WINMEMORY</template>
      </templateCard>
      
      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/memorias/memorias_note.png'" height="250"/>
        </template>
        <template v-slot:titulo>MEMÓRIAS P/ NOTEBOOKs</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:desc1>CAPACIDADEs 4GB / 8GB / 16GB</template>
        <template v-slot:desc2>MODELOs DDR3 / DDR4</template>
        <template v-slot:desc3>MARCAs KINGSTON / MARKVISION / CRUCIAL / WINMEMORY</template>
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