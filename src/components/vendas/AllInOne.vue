<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/computadores/all_in_one_compaq.png'" height="250"/>
        </template>
        <template v-slot:titulo>ALL IN ONE COMPAQ</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>COD. 7822</template>
        <template v-slot:desc1>PROCESSADOR INTEL CORE I3 7ª GE</template>
        <template v-slot:desc2>4GB MEMORIA</template>
        <template v-slot:desc3>500GB HD</template>
        <template v-slot:desc4>WINDOWS 10</template>
      </templateCard>
      
      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/computadores/all_in_one_positivo.png'" height="250"/>
        </template>
        <template v-slot:titulo>ALL IN ONE POSITIVO</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>COD. 8922</template>
        <template v-slot:desc1>PROCESSADOR INTEL CORE I3</template>
        <template v-slot:desc2>6GB MEMORIA</template>
        <template v-slot:desc3>120GB SSD</template>
        <template v-slot:desc4>WINDOWS 10</template>
      </templateCard>

      <!-- TEMPLATE3 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/computadores/all_in_one_thinkcentre.png'" height="250"/>
        </template>
        <template v-slot:titulo>ALL IN ONE THINKCENTRE E73Z</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:codigo>COD. 8833</template>
        <template v-slot:desc1>PROCESSADOR INTEL CORE I3</template>
        <template v-slot:desc2>4GB MEMORIA</template>
        <template v-slot:desc3>500GB HD</template>
        <template v-slot:desc4>WINDOWS 10</template>
      </templateCard>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class AllInOne extends Vue {}
</script>

<style lang="scss">
</style>