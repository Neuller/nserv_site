<template>
  <v-row align="center" justify="center" class="text-center mb-5">
    <v-col>
      <h2 class="text-h4 text-md-h2">
        <slot name="titulo"></slot>
      </h2>
      <p
        class="text-h6 text-md-h4 font-weight-thin font-weight-thin mx-2 mt-2 mt-md-4 mb-0 line-height-125"
      >
        <slot name="paragrafo"></slot>
      </p>
    </v-col>
  </v-row>
</template>


<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";
  
  @Component
  export default class TitleH2 extends Vue {}
</script>

<style lang="scss">
</style>