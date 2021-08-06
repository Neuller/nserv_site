<template>
  <v-card class="transparent" tile flat>
    <v-container>
      <p class="text-center text-h4 font-weight-light mb-0">Visão</p>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <p class="blockquote text-center">
            O conhecimento é o bem maior de um povo e, como tal, deve ser
            gerido, compartilhado, disseminado e democratizado.
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