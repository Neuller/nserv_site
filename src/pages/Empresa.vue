<template>
  <div class="empresa">
    <v-parallax class="destaque nserv" dark src="../assets/img/bgEmpresa.png">
      <destaque
        >Há mais de cinco anos no mercado, trabalhando para assegurar a posição
        de vanguarda aos nossos clientes</destaque
      >
    </v-parallax>

    <v-tabs
      class="d-none d-md-block" 
      color="nserv"
      background-color="grey lighten-4"
      slider-color="grey darken-2"
      centered
      icons-and-text
      fixed-tabs
    >
      
      <!-- LOCALIZACAO -->
      <v-tab>
        Localização
        <v-icon>mdi-map-marker</v-icon>
      </v-tab>
      <!-- TRABALHE CONOSCO -->
      <v-tab>
        Trabalhe Conosco
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-tab>

      <!-- LOCALIZACAO -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <localizacao></localizacao>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <!-- TRABALHE CONOSCO -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <trabalhe></trabalhe>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>

    <v-expansion-panels class="d-md-none" accordion focusable>
      <!-- LOCALIZACAO -->
      <v-expansion-panel @click="scrollToLocalizacao()">
        <div ref="localizacao">
          <v-expansion-panel-header disable-icon-rotate>
            Localização
            <template v-slot:actions>
              <v-icon>mdi-map-marker</v-icon>
            </template>
          </v-expansion-panel-header>
        </div>
        <v-expansion-panel-content class="pa-0">
          <localizacao></localizacao>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- TRABALHE CONOSCO -->
      <v-expansion-panel @click="scrollToTrabConosco()">
        <div ref="trabConosco">
          <v-expansion-panel-header disable-icon-rotate>
            Trabalhe Conosco
            <template v-slot:actions>
              <v-icon>mdi-account-multiple-plus</v-icon>
            </template>
          </v-expansion-panel-header>
        </div>
        <v-expansion-panel-content>
          <trabalhe></trabalhe>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { store } from "../store/mainStore";

@Component
export default class Empresa extends Vue {
  heightCabecalho: any = null;

  mounted() {
    this.getAlturaCabecalho();
  }

  scrollToLocalizacao() {
    let elemento = this.$refs.organizacional as any;
    elemento.scrollIntoView();
  }
  
  scrollToTrabConosco() {
    let elemento = this.$refs.localizacao as any;
    elemento.scrollIntoView();
  }
  // OBTEM DA STORE O VALOR DA ALTURA DO CABECALHO
  getAlturaCabecalho() {
    this.heightCabecalho = this.$store.state.alturaCabecalho;
    // console.log(this.heightCabecalho);
  }
}
</script>

<style lang="scss">
  .v-expansion-panel-content > div {
    padding: 0 !important;
  }
</style>