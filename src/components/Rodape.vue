<template>
  <v-footer padless>
    <v-container fluid class="py-0">
      <v-row align="center" justify="center" class="text-center grey darken-3">
        <v-col>
          <h2 class="display-1 font-weight-black white--text">FALE CONOSCO</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pb-0">
      <formularioContato></formularioContato>
      <v-divider></v-divider>
      <v-row class="flex-row flex-md-row-reverse justify-space-around">
        <v-spacer class="d-none d-lg-block"></v-spacer>
        <v-col
          cols="12"
          md="2"
          class="d-flex justify-space-around align-center"
        >
          <!-- <v-btn href="#" target="_blank" text>
            <v-icon large class="nserv--text">mdi-facebook</v-icon>
          </v-btn> -->
          <v-btn
            href="https://www.instagram.com/nserv.informatica/"
            target="_blank"
            text
          >
            <v-icon large class="nserv--text">mdi-instagram</v-icon>
          </v-btn>
          <!-- <v-btn href="#" target="_blank" text>
            <v-icon large class="nserv--text">mdi-twitter</v-icon>
          </v-btn>
          <v-btn href="#" target="_blank" text>
            <v-icon large class="nserv--text">mdi-youtube</v-icon>
          </v-btn> -->
          <v-btn
            href="https://www.linkedin.com/company/nserv-informatica"
            target="_blank"
            text
          >
            <v-icon large class="nserv--text">mdi-linkedin</v-icon>
          </v-btn>
        </v-col>
        <v-spacer class="d-none d-lg-block"></v-spacer>
        <v-col cols="12" md="9" lg="6" class="d-sm-flex flex-row text-center">
          <v-divider></v-divider>

          <v-list-item class="pa-0">
            <v-list-item-content class="font-weight-black justify-center">
              <v-btn to="/" small text @click="scrollToTop()">Principal</v-btn>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="pa-0">
            <v-list-item-content class="font-weight-black justify-center">
              <v-btn to="/empresa" small text @click="scrollToTop()"
                >A Empresa</v-btn
              >
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
        </v-col>
        <v-spacer class="d-none d-lg-block"></v-spacer>
      </v-row>
      <!-- <v-row>
        <v-col cols="12" class="azul pa-0 d-sm-flex flex-row text-center">
          <v-list-item class="pa-0">
            <v-list-item-content class="pa-0 font-weight-black justify-center">
              <v-btn
                href="https://www.instagram.com/nserv.informatica/"
                target="_blank"
                block
                text
                dark
                class="white-space-normal"
              >
                Clique e conheça o nosso
                <br class="d-block d-sm-none" />Instagram
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row> -->

      <v-row class="d-md-none grey darken-1 white--text py-2 text-center">
        <v-col cols="12" md="6" class="pa-0">
          <span class="d-block font-weight-light text-caption pa-1 font-italic">
            Copyright
            <b>2021 ©</b>
          </span>
        </v-col>
        <v-col
          md="12"
          class="
            grey
            darken-1
            white--text
            text-center text-caption
            pa-0
            line-height-125
          "
        >
          Rua Coronel João Camargos, 255, Centro |
          <span class="d-inline-block">Contagem - MG</span> | 32.040-620
        </v-col>
      </v-row>

      <v-row class="grey darken-1 white--text pa-2 pb-1 d-none d-md-flex">
        <v-col cols="12" md="6" class="pa-0 text-left">
          <span class="d-block font-weight-light text-caption pa-0font-italic">
            Copyright
            <b>2022 ©</b>
          </span>
        </v-col>
        <v-col
          md="6"
          class="
            grey
            darken-1
            white--text
            text-right text-caption
            pa-0
            line-height-125
          "
        >
          <span class="d-block">Rua Coronel João Camargos, 255, Centro</span>
          <span class="d-block">Contagem - MG, 32.040-620</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rodape extends Vue {
  // ENVIAR PARA O TOPO DA PÁGINA
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
</script>