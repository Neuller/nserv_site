<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/MB_TUF_GAMING.png'" height="250"/>
        </template>
        <template v-slot:titulo>ASUS TUF B360M-PLUS</template>
        <template v-slot:preco>R$ • 589,90</template>
        <template v-slot:desc1>GAMING INTEL LGA 1151</template>
        <template v-slot:desc2>SUPORTE A DDR4 2666MHz</template>
        <template v-slot:desc3>SUPORTE A M.2 32GBPS</template>
        <template v-slot:desc4>USB 3.1 NATIVO</template>
        <template v-slot:desc5>MELHOR PROTEÇÃO CONTRA SOBRECORRENTE</template>
        <template v-slot:desc6>ILUMINAÇÃO RGB AURA SYNC</template>
        <template v-slot:desc7>ESTABILIDADE DDR4 APRIMORADA</template>
        <template v-slot:desc8>CONTROLES DE REFRIGERAÇÃO FLEXÍVEIS</template>
        <template v-slot:desc9>COMPONENTES TUF</template>
      </templateCard>

      <!-- TEMPLATE2 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/MB_H410M_E_PRIME.png'" height="250"/>
        </template>
        <template v-slot:titulo>MB ASUS H410M-E PRIME</template>
        <template v-slot:preco>R$ • CONSULTE DISPONIBILIDADE</template>
        <template v-slot:desc1>DDR4</template>
        <template v-slot:desc2>SOCKET 1200</template>
        <template v-slot:desc3>10/11 GERAÇÃO</template>
      </templateCard>
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