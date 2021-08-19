<template>
  <div class="empresa">
    <v-parallax class="destaque nserv" dark src="@\assets\img\empresa\bg-empresa.jpg">
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
      <!-- MISSAO -->
      <v-tab>
        Missão
        <v-icon>mdi-flag</v-icon>
      </v-tab>
      <!-- VISAO -->
      <v-tab>
        Visão
        <v-icon>mdi-eye</v-icon>
      </v-tab>
      <!-- VALORES -->
      <v-tab>
        Valores
        <v-icon>mdi-check-bold</v-icon>
      </v-tab>
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

      <!-- MISSAO -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <missao></missao>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <!-- VISAO -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <visao></visao>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <!-- VALORES -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <valores></valores>
          </v-card-text>
        </v-card>
      </v-tab-item>
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
      <!-- MISSAO -->
      <v-expansion-panel @click="scrollToMissao()">
        <div ref="missao">
          <v-expansion-panel-header disable-icon-rotate>
            Missão
            <template v-slot:actions>
              <v-icon>mdi-flag</v-icon>
            </template>
          </v-expansion-panel-header>
        </div>
        <v-expansion-panel-content>
          <missao></missao>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- VISAO -->
      <v-expansion-panel @click="scrollToVisao()">
        <div ref="visao">
          <v-expansion-panel-header disable-icon-rotate>
            Visão
            <template v-slot:actions>
              <v-icon>mdi-eye</v-icon>
            </template>
          </v-expansion-panel-header>
        </div>
        <v-expansion-panel-content>
          <visao></visao>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- VALORES -->
      <v-expansion-panel @click="scrollToValores()">
        <div ref="valores">
          <v-expansion-panel-header disable-icon-rotate>
            Valores
            <template v-slot:actions>
              <v-icon>mdi-check-bold</v-icon>
            </template>
          </v-expansion-panel-header>
        </div>
        <v-expansion-panel-content>
          <valores></valores>
        </v-expansion-panel-content>
      </v-expansion-panel>

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

    <!-- Números -->
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
  scrollToMissao() {
    let elemento = this.$refs.missao as any;
    let y = this.heightCabecalho as any;
    elemento.scrollIntoView() + window.scrollBy(0, -56);
  }
  scrollToVisao() {
    let elemento = this.$refs.missao as any;
    elemento.scrollIntoView();
  }
  scrollToValores() {
    let elemento = this.$refs.visao as any;
    elemento.scrollIntoView();
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