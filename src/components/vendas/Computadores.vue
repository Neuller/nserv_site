<template>
  <div>
    <v-row>
      <!-- CORE I3 -->
      <v-card
        :loading="loading1"
        class="mx-auto my-10"
        max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
            color="green"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="/vendas/CPU_CORE_I3.png"
        ></v-img>

        <v-card-title>CPU CORE I3 - 10ª GERACAO</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value="4.0"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              4.0
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1 red--text">
            R$ • CONSULTE DISPONIBILIDADE
          </div>

          <div>CPU CORE I3 10100 3.60GHZ</div>
          <div>MB ASUS H510M-E PRIME (1200) DDR4 11/10</div>
          <div>8GB DDR4 2400Mhz</div>
          <div>SSD 240GB</div>
          <div>GABINETE KMEX</div>
          <div>WINDOWS 11</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            color="red lighten-2"
            text
            href="/documentos/CPU_CORE_I3.pdf"
            target="_blank"
            @click="reserve1"
          >
            DOWNLOAD
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- CORE I5 -->
      <v-card
        :loading="loading2"
        class="mx-auto my-10"
        max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
            color="green"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="/vendas/CPU_CORE_I5.png"
        ></v-img>

        <v-card-title>CPU CORE I5 - 10ª GERACAO</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              4.5
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1 red--text">
            R$ • CONSULTE DISPONIBILIDADE
          </div>

          <div>CPU CORE I5 10400 2.90GHZ</div>
          <div>MB ASUS H510M-E PRIME (1200) DDR4 11/10</div>
          <div>8GB DDR4 2400Mhz</div>
          <div>SSD 240GB</div>
          <div>GABINETE KMEX</div>
          <div>WINDOWS 11</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            color="red lighten-2"
            text
            href="/documentos/CPU_CORE_I5.pdf"
            target="_blank"
            @click="reserve2"
          >
            DOWNLOAD
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- CORE I7 -->
      <v-card
        :loading="loading3"
        class="mx-auto my-10"
        max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
            color="green"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="/vendas/CPU_CORE_I7.png"
        ></v-img>

        <v-card-title>CPU CORE I7 - 10ª GERACAO</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value="5.0"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              5.0
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1 red--text">
            R$ • CONSULTE DISPONIBILIDADE
          </div>

          <div>CPU CORE I7 10700F 2.9 GHZ</div>
          <div>MB ASUS H510M-E PRIME (1200) DDR4 11/10</div>
          <div>8GB DDR4 2400Mhz</div>
          <div>SSD 240GB</div>
          <div>GABINETE KMEX</div>
          <div>WINDOWS 11</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            color="red lighten-2"
            text
            href="/documentos/CPU_CORE_I7.pdf"
            target="_blank"
            @click="reserve3"
          >
            DOWNLOAD
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Rodape extends Vue {
    loading1 = false;
    loading2 = false;
    loading3 = false;
    selection = 1;

    reserve1() {
      this.loading1 = true;
      setTimeout(() => (this.loading1 = false), 2000);
    }

    reserve2() {
      this.loading2 = true;
      setTimeout(() => (this.loading2 = false), 2000);
    }

    reserve3() {
      this.loading3 = true;
      setTimeout(() => (this.loading3 = false), 2000);
    }
}
</script>

<style lang="scss">
</style>