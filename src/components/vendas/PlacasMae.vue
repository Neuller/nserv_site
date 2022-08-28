<template>
  <div>
    <v-row>
      <!-- TEMPLATE1 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/placas_mae/MB_TUF_GAMING.png'" height="250"/>
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
          <img :src="'/vendas/placas_mae/MB_H410M_E_PRIME.png'" height="250"/>
        </template>
        <template v-slot:titulo>MB ASUS H410M-E PRIME</template>
        <template v-slot:preco>R$ • 664.90</template>
        <template v-slot:codigo>COD. 1638</template>
        <template v-slot:desc1>INTEL LGA 1200</template>
        <template v-slot:desc2>SUPORTE A DDR4</template>
        <template v-slot:desc3>P/ PROCESSADORES DA 10/11 GERAÇÃO</template>
      </templateCard>

      <!-- TEMPLATE3 -->
      <templateCard>
        <template v-slot:imagem>
          <img :src="'/vendas/placas_mae/mb_pcware_ipmh510g.png'" height="250"/>
        </template>
        <template v-slot:titulo>MB PCWARE H510-G</template>
        <template v-slot:preco>R$ • 619.90</template>
        <template v-slot:codigo>COD. 7415</template>
        <template v-slot:desc1>INTEL LGA 1200</template>
        <template v-slot:desc2>SUPORTE A DDR4</template>
        <template v-slot:desc3>P/ PROCESSADORES DA 10/11 GERAÇÃO</template>
      </templateCard>

    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PlacasMae extends Vue {}
</script>

<style lang="scss">
</style>