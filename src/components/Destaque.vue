<template>
  <v-container class="fill-height pt-12 mt-4" fluid>
    <v-row align="center" justify="center">
      <v-col class="display-2-responsive font-weight-thin" cols="12" md="10" lg="8">
        <slot></slot>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";

  @Component
  export default class Destaque extends Vue {}
</script>


<style lang="scss">
  //.destaque.v-parallax{
  //.v-parallax__content{
  //background: rgb(255,255,255);
  //background: linear-gradient(162deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 17%, rgba(255,255,255,1) 34%, rgba(255,255,255,0.5) 34%, rgba(255,255,255,0.5) 66%, rgba(255,255,255,1) 66%);
  //  }
  //}
  @media (min-width: 960px) {
    .destaque.v-parallax {
      min-height: 75vh !important;
    }
  }
</style>