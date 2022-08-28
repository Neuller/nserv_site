<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/impressoras/epson_tm_t20x.png'" height="250"/>
        </template>
        <template v-slot:titulo>EPSON TM-T20X</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>COD. 1354</template>
        <template v-slot:desc1>IMPRESSORA TÉRMICA</template>
        <template v-slot:desc2>CONEXÃO USB's</template>
      </templateCard>
      
      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/impressoras/hp_107w.png'" height="250"/>
        </template>
        <template v-slot:titulo>HP LASER 107W MONO 4ZB78A</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>8417</template>
      </templateCard>

      <!-- TEMPLATE3 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/impressoras/hp_2774.png'" height="250"/>
        </template>
        <template v-slot:titulo>HP MULTIFUNCIONAL 2774</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>4117</template>
        <template v-slot:desc1>C/ WIRELESS</template>
      </templateCard>

    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Impressoras extends Vue {}
</script>

<style lang="scss">
</style>