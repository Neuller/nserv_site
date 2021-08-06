<template>
  <v-card class="numeros transparent" tile flat dark>
    <v-container>
      <v-row class="flex-md-row-reverse">
        <v-col md="5" class="pa-0 pt-4">
          <v-list height="100%" class="d-flex align-around jusitfy-center flex-column transparent">
            <v-list-item height>
              <v-list-item-content
                class="text-h4 text-sm-h3 font-weight-thin pt-0"
              >TITULO</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col md="2" class="iconLista pa-0">
          <v-list class="d-flex align-around jusitfy-center flex-column transparent">
            <v-list-item class="pa-0">
              <v-list-item-content class="text-center py-2">
                <v-icon size="75" class="d-inline-block pt-md-3">mdi-office-building</v-icon>
                <v-list-item-title class="headline d-md-none">
                  <span class="font-weight-bold">TEXTO</span>
                  <span class="font-weight-light font-italic px-1">1</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class>
              <v-list-item-content class="text-center py-2">
                <v-icon size="75" class="d-inline-block pt-md-3">mdi-account-group</v-icon>
                <v-list-item-title class="headline d-md-none white-space-normal">
                  <span class="font-weight-bold">TEXTO</span>
                  <span class="font-weight-light font-italic px-1">2</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class>
              <v-list-item-content class="text-center">
                <v-icon size="75" class="d-inline-block pt-md-3">mdi-earth</v-icon>
                <v-list-item-title class="headline d-md-none">
                  <span class="font-weight-bold">TEXTO</span>
                  <span class="font-weight-light font-italic px-1">3</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="d-none d-md-flex justify-end" md="5">
          <v-list height="350" class="d-flex align-around flex-column transparent">
            <v-list-item>
              <v-list-item-content class>
                <v-list-item-title class="headline text-right">
                  <span class="font-weight-bold">TEXTO</span>
                  <span class="font-weight-light font-italic px-1">1</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline text-right">
                  <span class="font-weight-bold">TEXTO</span>
                  <span class="font-weight-light font-italic px-1">2</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="headline text-right">
                <span class="font-weight-bold">TEXTO</span>
                <span class="font-weight-light font-italic px-1">3</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-row justify="center" class="d-flex btnPresenca">
        <div class="pa-3">
          <v-btn dark block outlined to="/">VEJA MAIS</v-btn>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>


<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";

  @Component
  export default class Numeros extends Vue {
    data() {
      return {
        dialog: false,
        dialogMD: false
      };
    }
  }
</script>

<style lang="scss">
  .numeros.v-parallax {
    height: auto !important;
    .v-parallax__content {
      background: rgb(255, 255, 255);
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 5%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 1) 95%
      );
    }
  }

  @media (min-width: 960px) {
    .numeros.v-parallax {
      height: 75vh !important;
    }

    .containerSolucoes {
      .v-image {
        height: 400px;
      }
    }
  }
</style>