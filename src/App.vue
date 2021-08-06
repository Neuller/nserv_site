<template>
  <v-app>
    <v-content>
      <cabecalho></cabecalho>
      <router-view></router-view>
      <rodape></rodape>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from "vue";
  import Cabecalho from "./components/Cabecalho.vue";
  import Rodape from "./components/Rodape.vue";

  import { Component } from "vue-property-decorator";

  @Component({
    components: {
      cabecalho: Cabecalho,
      rodape: Rodape
    }
  })
  export default class App extends Vue {}
</script>

<style lang="scss" scoped>
  @import "../src/assets/css/styles.scss";
  @import "../src/assets/css/styles.css";
</style>

<style lang="css" scoped>
  @import "https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css";
  header {
    z-index: 999 !important;
  }
</style>