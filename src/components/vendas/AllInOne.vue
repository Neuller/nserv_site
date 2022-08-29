<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/computadores/all_in_one_compaq.png'" height="250"/>
        </template>
        <template v-slot:titulo>ALL IN ONE COMPAQ 23,8"</template>
        <template v-slot:preco>R$ • 3.106,8</template>
        <template v-slot:codigo>COD. 7822</template>
        <template v-slot:desc1>PROCESSADOR INTEL CORE I3 7100U (7GE)</template>
        <template v-slot:desc2>4GB DDR4</template>
        <template v-slot:desc3>500GB HD + 16GB OPTANE</template>
        <template v-slot:desc4>WINDOWS 10</template>
        <template v-slot:garantia>GARANTIA 06 MESES</template>
      </templateCard>
      
      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/computadores/all_in_one_positivo.png'" height="250"/>
        </template>
        <template v-slot:titulo>ALL IN ONE POSITIVO 18,5"</template>
        <template v-slot:preco>R$ • 1.818,7</template>
        <template v-slot:codigo>COD. 8922</template>
        <template v-slot:desc1>PROCESSADOR INTEL CORE I3 3110M (3GE)</template>
        <template v-slot:desc2>6GB DDR3</template>
        <template v-slot:desc3>120GB SSD</template>
        <template v-slot:desc4>WINDOWS 10</template>
        <template v-slot:garantia>GARANTIA 06 MESES</template>
      </templateCard>

      <!-- TEMPLATE3 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/computadores/all_in_one_thinkcentre.png'" height="250"/>
        </template>
        <template v-slot:titulo>ALL IN ONE THINKCENTRE E73Z 18,5"</template>
        <template v-slot:preco>R$ • 1.688,7</template>
        <template v-slot:codigo>COD. 8833</template>
        <template v-slot:desc1>PROCESSADOR INTEL CORE I3 (4GE)</template>
        <template v-slot:desc2>4GB DDR3</template>
        <template v-slot:desc3>500GB HD</template>
        <template v-slot:desc4>WINDOWS 10</template>
        <template v-slot:garantia>GARANTIA 06 MESES</template>
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