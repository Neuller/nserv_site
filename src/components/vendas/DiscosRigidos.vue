<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/discos_rigidos/hd.png'" height="250"/>
        </template>
        <template v-slot:titulo>DISCO RÍGIDO (MECÂNICO)</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:capacidade>1TB / 2TB</template>
        <template v-slot:modelo>SATA3 / SKYHAWK GS0160 / GS0161</template>
        <template v-slot:marca>SEAGATE</template>
      </templateCard>

      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/discos_rigidos/ssd.png'" height="250"/>
        </template>
        <template v-slot:titulo>SSD's</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:capacidade>120GB / 240GB / 480GB</template>
        <template v-slot:marca>MULTILASER / KINGSTON / GIGABYTE / MAXPRINT</template>
      </templateCard>

      <!-- TEMPLATE3 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/discos_rigidos/ssd_m2.png'" height="250"/>
        </template>
        <template v-slot:titulo>SSD's M2</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:capacidade>128GB / 240GB / 256GB</template>
        <template v-slot:marca>PATRIOT / ADATA / KINGSPEC</template>
      </templateCard>

    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class DiscosRigidos extends Vue {}
</script>

<style lang="scss">
</style>