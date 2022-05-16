<template>
  <div class="home">
    <v-parallax class="destaque nserv" dark src="../assets/img/bgPrincipal.png">
      <destaque> Compartilhando nossa paixão pela <b>Tecnologia</b>.</destaque>
    </v-parallax>

    <v-card class="mx-auto py-4 py-md-12 presenca" flat>
      <v-container>
        <titleH2>
          <template v-slot:titulo>Conheça nossos Serviços</template>
        </titleH2>
        <v-row>
          <!-- DESENVOLVIMENTO -->
          <v-col cols="12" sm="4" class="text-left">
            <v-card class>
              <v-img
                class="white--text align-end"
                src="../assets/img/bgDesenvolvimento.png"
                gradient="rgba(30, 100, 130, .65), rgba(100, 100, 100, .85)"
                height="450px"
              >
                <div class>
                  <v-list-item dark class="pa-6">
                    <v-list-item-avatar>
                      <v-icon size="40">mdi-monitor-cellphone-star</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="headline"
                        >Desenvolvimento</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider dark></v-divider>
                  <v-card-text
                    style="height: 75px"
                    class="body-1 text-center d-flex pa-2"
                  >
                    <span> Soluções personalizadas para o seu negócio. </span>
                  </v-card-text>
                  <v-divider class="mx-5" dark></v-divider>

                  <v-list dense disabled dark class="transparent px-10">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Análise</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-google-analytics</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Desenvolvimento</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-dev-to</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Implantação</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-account-group</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title> Suporte </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-account-clock-outline</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon></v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                  <v-divider dark></v-divider>
                  <v-btn
                    block
                    tile
                    dark
                    text
                    >
                  </v-btn>
                </div>
              </v-img>
            </v-card>
          </v-col>

          <!-- MANUTENCAO -->
          <v-col cols="12" sm="4" class="text-left">
            <v-card class>
              <v-img
                class="white--text align-end cardEducacional"
                src="../assets/img/bgManutencao.png"
                gradient="rgba(30, 100, 130, .65), rgba(100, 100, 100, .85)"
                height="450px"
              >
                <div class="cardEducacional">
                  <v-list-item dark class="pa-6">
                    <v-list-item-avatar>
                      <v-icon size="40">mdi-wrench</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="headline"
                        >Manutenção</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider dark></v-divider>
                  <v-card-text
                    style="height: 75px"
                    class="body-1 text-center d-flex pa-2"
                  >
                    <span> Assistência técnica especializada. </span>
                  </v-card-text>
                  <v-divider class="mx-5" dark></v-divider>
                  <v-list dense disabled dark class="transparent px-10">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Computadores</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-desktop-classic</v-icon>
                      </v-list-item-icon>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Notebook's</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-laptop</v-icon>
                      </v-list-item-icon>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Monitores</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-monitor</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Televisões</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-television</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Impressoras</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-printer</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                  <v-btn
                    block
                    tile
                    dark
                    text
                    >
                  </v-btn>
                </div>
              </v-img>
            </v-card>
          </v-col>

          <!-- VENDAS -->
          <v-col cols="12" sm="4" class="text-left">
            <v-card class>
              <v-img
                class="white--text align-end"
                src="../assets/img/bgVendas.png"
                gradient="rgba(30, 100, 130, .65), rgba(100, 100, 100, .85)"
                height="450px"
              >
                <div class>
                  <v-list-item dark class="pa-6">
                    <v-list-item-avatar>
                      <v-icon size="40">mdi-sale</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="headline"
                        >Vendas</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider dark></v-divider>
                  <v-card-text
                    style="height: 75px"
                    class="body-1 text-center d-flex pa-2"
                  >
                    <span> Preços competitivos e produtos de qualidade. </span>
                  </v-card-text>
                  <v-divider class="mx-5" dark></v-divider>

                  <v-list dense disabled dark class="transparent px-10">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Preço Baixo</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-cash-multiple</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Qualidade</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-quality-high</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Segurança</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-shield-lock</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title> Velocidade </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>mdi-truck-delivery-outline</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon></v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                  <v-divider dark></v-divider>
                  <v-btn
                    block
                    tile
                    dark
                    to="/vendasProdutos"
                    text
                    >Saiba mais!
                  </v-btn>
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script lang ="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
  .tooltip {
    color: red;
    background: red;
  }
</style>


