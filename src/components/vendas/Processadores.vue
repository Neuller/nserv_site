<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/processadores/core_i3.png'" height="250"/>
        </template>
        <template v-slot:titulo>CPU CORE I3</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>6366</template>
        <template v-slot:modelo>10105F 3.7HZ / 10100 3.6GHZ</template>
        <template v-slot:desc1>10ª GERAÇÃO</template>
      </templateCard>
      
      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/processadores/core_i5.png'" height="250"/>
        </template>
        <template v-slot:titulo>CPU CORE I5</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>7501</template>
        <template v-slot:modelo>11400F/11400 3.6HZ</template>
        <template v-slot:desc1>11ª GERAÇÃO</template>
      </templateCard>
      
      <!-- TEMPLATE3 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/processadores/core_i7.png'" height="250"/>
        </template>
        <template v-slot:titulo>CPU CORE I7</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>8284</template>
        <template v-slot:modelo>10700F /11700F 2.9HZ</template>
        <template v-slot:desc1>10ª/11ª GERAÇÃO</template>
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