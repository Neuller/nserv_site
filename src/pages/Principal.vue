<template>
  <div class="home">
    <v-parallax class="destaque nserv" dark src="..\assets\img\principal\bg-principal.png">
      <destaque> Compartilhando nossa paixão pela <b>Tecnologia</b>.</destaque>
    </v-parallax>

    <v-card class="mx-auto py-4 py-md-12 presenca" flat>
      <v-container>
        <titleH2>
          <template v-slot:titulo>Conheça nossos Serviços</template>
        </titleH2>
        <v-row>
          <!-- Desenvolvimento -->
          <v-col cols="12" sm="4" class="text-left">
            <v-card class>
              <v-img
                class="white--text align-end"
                src="../assets/img/desenvolvimento/bg-desenvolvimento.png"
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

                  <!-- EM CONSTRUÇÃO -->
                  <div
                    class="text-center d-flex align-center justify-space-around"
                  >
                    <v-tooltip
                      v-model="emConstrucaoDesenvolvimento"
                      v-if="emConstrucaoDesenvolvimento"
                      bottom
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon color="grey lighten-1">
                            mdi-emoticon-sad-outline
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Em Construção...</span>
                    </v-tooltip>
                  </div>

                  <v-btn
                    block
                    tile
                    dark
                    to="/"
                    text
                    @click="saibaMaisDesenvolvimento()"
                    >Saiba mais!</v-btn
                  >
                </div>
              </v-img>
            </v-card>
          </v-col>

          <!-- Manutenção -->
          <v-col cols="12" sm="4" class="text-left">
            <v-card class>
              <v-img
                class="white--text align-end cardEducacional"
                src="../assets/img/manutencao/bg-manutencao.png"
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
                  <v-divider dark></v-divider>

                  <!-- EM CONSTRUÇÃO -->
                  <div
                    class="text-center d-flex align-center justify-space-around"
                  >
                    <v-tooltip
                      v-model="emConstrucaoManutencao"
                      v-if="emConstrucaoManutencao"
                      bottom
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon color="grey lighten-1">
                            mdi-emoticon-sad-outline
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Em Construção...</span>
                    </v-tooltip>
                  </div>

                  <v-btn
                    block
                    tile
                    dark
                    to="/"
                    text
                    @click="saibaMaisManutencao()"
                    >Saiba Mais!</v-btn
                  >
                </div>
              </v-img>
            </v-card>
          </v-col>

          <!-- Vendas -->
          <v-col cols="12" sm="4" class="text-left">
            <v-card class>
              <v-img
                class="white--text align-end"
                src="../assets/img/vendas/bg-vendas.png"
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

                  <!-- EM CONSTRUÇÃO -->
                  <div
                    class="text-center d-flex align-center justify-space-around"
                  >
                    <v-tooltip
                      v-model="emConstrucaoVendas"
                      v-if="emConstrucaoVendas"
                      bottom
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon color="grey lighten-1">
                            mdi-emoticon-sad-outline
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Em Construção...</span>
                    </v-tooltip>
                  </div>

                  <v-btn
                    block
                    tile
                    dark
                    to="/"
                    text
                    @click="saibaMaisVendas()"
                    >Saiba mais!</v-btn
                  >
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
  emConstrucaoDesenvolvimento: boolean = false;
  emConstrucaoManutencao: boolean = false;
  emConstrucaoVendas: boolean = false;

  async saibaMaisDesenvolvimento() {
    if (this.emConstrucaoDesenvolvimento == false) {
      this.emConstrucaoDesenvolvimento = true;
    } else {
      this.emConstrucaoDesenvolvimento = false;
    }
  }

  async saibaMaisManutencao() {
    if (this.emConstrucaoManutencao == false) {
      this.emConstrucaoManutencao = true;
    } else {
      this.emConstrucaoManutencao = false;
    }
  }

  async saibaMaisVendas() {
    if (this.emConstrucaoVendas == false) {
      this.emConstrucaoVendas = true;
    } else {
      this.emConstrucaoVendas = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  color: red;
  background: red;
}
</style>


