<template>
  <div ref="cabecalho">
    <v-app-bar fixed>
      <router-link to="/">
        <v-toolbar-title class="d-flex text-left" img>
          <v-img
            src="../assets/img/logo.png"
            lazy-src="https://picsum.photos/id/11/10/6"
            contain
            max-height="50"
            @click="scrollToTop()"
          ></v-img>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-md-flex">
        <v-btn to="/" text @click="scrollToTop()">Principal</v-btn>
        <v-btn to="/empresa" text @click="scrollToTop()">A Empresa</v-btn>
      </v-toolbar-items>

      <div class="text-center d-xs-flex d-md-none">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text small v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn to="/" text @click="scrollToTop()">Principal</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn to="/empresa" text @click="scrollToTop()">A Empresa</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>



<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";

  @Component
  export default class Cabecalho extends Vue {
    mounted() {
      this.alturaCabecalho();
    }
    // ENVIAR PARA O TOPO DA PÁGINA
    scrollToTop() {
      window.scrollTo(0, 0);
    }
    alturaCabecalho() {
      let cabecalho = this.$refs.cabecalho as any;
      let height = cabecalho.clientHeight;
      // debugger;
      this.$store.commit("alturaCabecalho", {
        alturaCabecalho: height
      });
    }
  }
</script>

<style lang="scss">
  .v-app-bar {
    z-index: 200 !important;
  }
  .headerLogo {
    width: 100px;
  }
</style>