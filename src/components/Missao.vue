<template>
  <v-card class="transparent" tile flat>
    <v-container>
      <p class="text-center text-h4 font-weight-light mb-0">Missão</p>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <p class="blockquote text-center">
            Nossa missão é contribuir para a melhoria do desempenho das
            instituições e empresas clientes, com o intuito de entregar:
            computadores, periféricos, outros produtos e serviços na área de
            tecnologia, com segurança, comodidade e velocidade, oferendo as
            melhores marcas e o melhor custo-benefício do mercado.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rodape extends Vue {
  data() {
    return {
      dialog: false,
      dialogMD: false,
    };
  }
}
</script>

<style lang="scss">
</style>