<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/monitores/aoc_18.5.png'" height="250"/>
        </template>
        <template v-slot:titulo>MONITOR AOC 18,5"</template>
        <template v-slot:preco>R$ • 889.90</template>
        <template v-slot:codigo>4643</template>
        <template v-slot:modelo>E970SWHNL</template>
        <template v-slot:desc1>VGA HDMI</template>
      </templateCard>
      
      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/monitores/aoc_21.5.png'" height="250"/>
        </template>
        <template v-slot:titulo>MONITOR AOC 21,5"</template>
        <template v-slot:preco>R$ • 914.90</template>
        <template v-slot:codigo>1903</template>
        <template v-slot:modelo>E2270SWHEN</template>
        <template v-slot:desc1>HDMI</template>
      </templateCard>

      <!-- TEMPLATE3 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/monitores/bpc_19we02.png'" height="250"/>
        </template>
        <template v-slot:titulo>MONITOR BRAZILPC 19"</template>
        <template v-slot:preco>R$ • 689.00</template>
        <template v-slot:codigo>0349</template>
        <template v-slot:modelo>BPC-19WE02-B</template>
        <template v-slot:desc1>HDMI</template>
      </templateCard>

      <!-- TEMPLATE4 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/monitores/tv_multilaser_43.png'" height="250"/>
        </template>
        <template v-slot:titulo>TV MULTILASER 43"</template>
        <template v-slot:preco>R$ • 1,989.90</template>
        <template v-slot:codigo>8428</template>
        <template v-slot:modelo>MODELO TL027</template>
        <template v-slot:desc1>LED SMART</template>
      </templateCard>

    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Monitores extends Vue {}
</script>

<style lang="scss">
</style>