<template>
  <v-card class="transparent" tile flat>
    <v-container>
      <!-- <p class="text-center text-h4 font-weight-light mb-0">Localização</p> -->
      <v-row justify="center  text-center">
        <v-col cols="12" md="10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.1349904621625!2d-44.08037238482613!3d-19.91871554310292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6953de75eaaab%3A0xc5407db7d7990fce!2sNserv!5e0!3m2!1spt-BR!2sbr!4v1623364167752!5m2!1spt-BR!2sbr"
            width="1000"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="iframe"
          ></iframe>
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

<style lang="scss" scoped>
.iframe{
  margin-top: 25px;
}
</style>