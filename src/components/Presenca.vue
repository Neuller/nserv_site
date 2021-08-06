<template>
  <v-card class="mx-auto py-0 py-md-4 presenca" flat tile>
    <v-container>
      <titleH2>
        <template v-slot:titulo>Presença</template>
        <template v-slot:paragrafo>Deixamos nossa marca por onde passamos!</template>
      </titleH2>

      <v-row justify="center" dense>
        <v-col
          class="d-flex align-stretch"
          v-for="cliente in clientes"
          :key="cliente.src"
          cols="4"
          sm="3"
          md="2"
        >
          <v-tooltip bottom :disabled="$vuetify.breakpoint.mdAndUp">
            <template v-slot:activator="{ on, attrs }">
              <v-card color="grey lighten-4" elevation="1" v-bind="attrs" v-on="on">
                <v-img :src="cliente.src" class="white align-end py-4 flex-shrink-1" contain></v-img>
                <v-card-actions
                  class="flex-grow-1 text-center headline grey lighten-4 pa-4 d-none d-md-flex"
                >
                  <v-card-text class>{{cliente.title}}</v-card-text>
                </v-card-actions>
              </v-card>
            </template>
            <span>{{cliente.title}}</span>
          </v-tooltip>
        </v-col>

        <v-col
          class="d-flex align-stretch outrosClientes"
          v-for="cliente1 in clientes1"
          :key="cliente1.src"
          cols="4"
          sm="3"
          md="2"
        >
          <v-tooltip bottom :disabled="$vuetify.breakpoint.mdAndUp">
            <template v-slot:activator="{ on, attrs }">
              <v-card color="grey lighten-4" elevation="1" v-bind="attrs" v-on="on">
                <v-img :src="cliente1.src" class="white align-end py-4 flex-shrink-1" contain></v-img>
                <v-card-actions
                  class="flex-grow-1 text-center headline grey lighten-4 pa-4 d-none d-md-flex"
                >
                  <v-card-text class>{{cliente1.title}}</v-card-text>
                </v-card-actions>
              </v-card>
            </template>
            <span>{{cliente1.title}}</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="btnClientes d-none">
      <v-btn
        to="/clientes"
        block
        class="nserv white--text"
        @click="scrollToTop()"
      >Veja nossa página de clientes</v-btn>
    </v-container>

    <v-container>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header disable-icon-rotate>
            Veja mais clientes
            <template v-slot:actions>
              <v-icon>mdi-plus</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col
                class="d-flex align-stretch pa-1"
                v-for="cliente1 in clientes1"
                :key="cliente1.src"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card color="white d-flex align-center" width="100%">
                  <div class="d-flex flex-row align-center">
                    <div class="flex-shrink-1">
                      <v-img width="75" :src="cliente1.src" class contain></v-img>
                    </div>
                    <div
                      class="flex-grow-1 line-height-125 pa-1 font-weight-light text-body-2"
                    >{{cliente1.title}}</div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="d-flex align-stretch pa-1"
                v-for="cliente2 in clientes2"
                :key="cliente2.src"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card width="100%">
                  <div class="d-flex flex-row align-top">
                    <div class="flex-shrink-1">
                      <v-icon class="pa-1" size="7">mdi-hexagon-outline</v-icon>
                    </div>
                    <div
                      class="flex-grow-1 line-height-125 pa-1 font-weight-light"
                    >{{cliente2.title}}</div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="d-flex align-stretch pa-1"
                v-for="cliente3 in clientes3"
                :key="cliente3.src"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card width="100%">
                  <div class="d-flex flex-row align-top">
                    <div class="flex-shrink-1">
                      <v-icon class="pa-1" size="7">mdi-hexagon-outline</v-icon>
                    </div>
                    <div
                      class="flex-grow-1 line-height-125 pa-1 font-weight-light"
                    >{{cliente3.title}}</div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-card>
</template>


<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";
  @Component
  export default class Presenca extends Vue {
    clientes: any = [];
    clientes1: any = [];
    clientes2: any = [];
    clientes3: any = [];
    mounted() {
      this.clientes = [
        {
          title: "FIAT - Betim-MG",
          src: require("../assets/img/clientes/FIAT-Betim.png")
        },
        {
          title: "FIAT - Goiana-PE",
          src: require("../assets/img/clientes/Jeep.png")
        },
        {
          title: "FIAT - Campo Largo-PR",
          src: require("../assets/img/clientes/FIAT-Parana.png")
        },
        {
          title: "FIAT - Córdoba-AR",
          src: require("../assets/img/clientes/FIAT-Cordoba.png")
        },
        {
          title: "Instituto Ayrton Senna",
          src: require("../assets/img/clientes/IAS.png")
        },
        {
          title: "Sistema de Informações da Educação de Pernambuco",
          src: require("../assets/img/clientes/SIEPE.png")
        },
        {
          title: "Programa de Informação da Gestão - Petrolina",
          src: require("../assets/img/clientes/PROIG.png")
        },
        {
          title: "Sistema Educacional do Ipojuca",
          src: require("../assets/img/clientes/SEI.png")
        },
        {
          title: "Sistema Educacional de São Bento do Una",
          src: require("../assets/img/clientes/UNA-SE.png")
        },
        {
          title: "Sistema de Gestão Educacional - Santa Cruz Cabrália",
          src: require("../assets/img/clientes/cabralia.png")
        },
        {
          title: "Sistema Educacional de Gravatá",
          src: require("../assets/img/clientes/gravata.png")
        },
        {
          title: "Sistema Educacional de Chã Grande",
          src: require("../assets/img/clientes/chagrande.png")
        },
        {
          title: "Escola de Formação Gerencial - Contagem",
          src: require("../assets/img/clientes/EFG.png")
        },
        {
          title: "Instituto de Tecnologia de Pernambuco",
          src: require("../assets/img/clientes/ITEP.png")
        },
        {
          title: "Sistema de Educação de Licínio de Almeida",
          src: require("../assets/img/clientes/Licinio Almeida.png")
        },
        {
          title: "Instituto Histórico e Geográfico de Minas Gerais",
          src: require("../assets/img/clientes/IHG-MG.png")
        },
        {
          title: "Inspetoria Madre Mazzarello",
          src: require("../assets/img/clientes/IMM.png")
        }
      ];
      this.clientes1 = [
        {
          title: "Centro Educacional Maria Auxiliadora - DF",
          src: require("../assets/img/clientes/CEMA.png")
        },
        {
          title: "Colégio Auxilium - GO",
          src: require("../assets/img/clientes/Auxilium.png")
        },
        {
          title: "Colégio Pio XII - MG",
          src: require("../assets/img/clientes/PioXII.png")
        },
        {
          title: "Escola Nossa Senhora Auxiliadora - MG",
          src: require("../assets/img/clientes/ENSA.png")
        },
        {
          title: "Insituto Auxiliadora - Silvânia-GO",
          src: require("../assets/img/clientes/Auxiliadora-Silvania.png")
        },
        {
          title: "Instituto Auxiliadora - São João Del Rey-MG",
          src: require("../assets/img/clientes/Auxiliadora-SJDR.png")
        },
        {
          title: "Instituto Maria Auxiliadora - GO",
          src: require("../assets/img/clientes/IMA.png")
        },
        {
          title: "Instituto Maria Imaculada - MG",
          src: require("../assets/img/clientes/IMI.png")
        },
        {
          title: "Instituto Teresa Valsé - MG",
          src: require("../assets/img/clientes/ITV.png")
        },
        {
          title: "Patronato Madre Mazzarello - GO",
          src: require("../assets/img/clientes/Patronato.png")
        },
        {
          title: "AMFRI-Associação Dos Municipios da Região Foz do Rio Itajaí",
          src: require("../assets/img/clientes/itajai.jpg")
        },
        {
          title: "Secretaria de Estado da Educação Cultura e Desporto de Roraima",
          src: require("../assets/img/clientes/roraima.jpg")
        },
        {
          title: "Prefeitura da Cidade do Rio de Janeiro",
          src: require("../assets/img/clientes/rio.jpg")
        },
        {
          title: "Prefeitura do Jaboatão Dos Guararapes",
          src: require("../assets/img/clientes/jaboatao.jpg")
        },
        {
          title: "Prefeitura Municipal de Altamira",
          src: require("../assets/img/clientes/altamira.jpg")
        },
        {
          title: "Prefeitura Municipal de Caruaru",
          src: require("../assets/img/clientes/caruaru.jpg")
        },
        {
          title: "Prefeitura Municipal de Caxias do Sul",
          src: require("../assets/img/clientes/caxiasdosul.jpg")
        },
        {
          title: "Prefeitura Municipal de Diadema",
          src: require("../assets/img/clientes/diadema.jpg")
        },
        {
          title: "Prefeitura Municipal de Itajaí",
          src: require("../assets/img/clientes/itajai.jpg")
        },
        {
          title: "Prefeitura Municipal de Joinville",
          src: require("../assets/img/clientes/joinville.jpg")
        },
        {
          title: "Prefeitura Municipal de Manaus",
          src: require("../assets/img/clientes/manaus.jpg")
        },
        {
          title: "Prefeitura Municipal de Marília",
          src: require("../assets/img/clientes/marilia.jpg")
        },
        {
          title: "Prefeitura Municipal de Mossoró",
          src: require("../assets/img/clientes/mossoro.jpg")
        },
        {
          title: "Prefeitura Municipal de Parnaíba",
          src: require("../assets/img/clientes/parnaiba.jpg")
        },
        {
          title: "Prefeitura Municipal de Pinhais",
          src: require("../assets/img/clientes/pinhais.jpg")
        },
        {
          title: "Prefeitura Municipal de Ponta Grossa",
          src: require("../assets/img/clientes/pontagrossa.jpg")
        },
        {
          title: "Prefeitura Municipal de Santarém",
          src: require("../assets/img/clientes/santarem.jpg")
        },
        {
          title: "Prefeitura Municipal de São José do Rio Preto",
          src: require("../assets/img/clientes/saojoseriopreto.jpg")
        },
        {
          title: "Prefeitura Municipal de São José Dos Pinhais",
          src: require("../assets/img/clientes/saojosepinhais.jpg")
        },
        {
          title: "Prefeitura Municipal de São Mateus",
          src: require("../assets/img/clientes/saomateus.jpg")
        },
        {
          title: "Prefeitura Municipal de Sao Vicente",
          src: require("../assets/img/clientes/saovicente.jpg")
        },
        {
          title: "Prefeitura Municipal de Sobral",
          src: require("../assets/img/clientes/sobral.jpg")
        },
        {
          title: "Prefeitura Municipal de Teresina",
          src: require("../assets/img/clientes/teresina.jpg")
        },
        {
          title:
            "Serviço Apoio Micro e Pequenas Empresas de São Paulo - Sebrae-Sp",
          src: require("../assets/img/clientes/sebrae.jpg")
        },
        {
          title: "Secretaria da Educação e Cultura do Estado do Piauí",
          src: require("../assets/img/clientes/piaui.jpg")
        },
        {
          title: "Secretaria da Educ. e Cultura do Tocantins",
          src: require("../assets/img/clientes/tocantins.jpg")
        },
        {
          title: "Secretaria de Educação do Estado de Sergipe",
          src: require("../assets/img/clientes/sergipe.jpg")
        },
        {
          title: "Secretaria da Educação e Cultura da Paraíba",
          src: require("../assets/img/clientes/paraiba.jpg")
        },
        {
          title: "Secretaria de Educação de Mato Grosso",
          src: require("../assets/img/clientes/matogrosso.jpg")
        },
        {
          title: "Secretaria de Estado da Educação do Rio Grande do Sul",
          src: require("../assets/img/clientes/riograndedosul.jpg")
        },
        {
          title: "Secretaria de Estado da Educação de Rondônia",
          src: require("../assets/img/clientes/rondonia.jpg")
        },
        {
          title: "Secretaria Municipal de Educação Araguaína",
          src: require("../assets/img/clientes/araguaina.jpg")
        },
        {
          title: "APERAM (Cia. Aços Especiais Itabira - ACESITA)",
          src: require("../assets/img/clientes/aperam.jpg")
        },
        {
          title: "Companhia de Saneamento de Minas Gerais - Copasa",
          src: require("../assets/img/clientes/copasa.jpg")
        },
        {
          title: "Zurich (Companhia de Seguros Minas Brasil)",
          src: require("../assets/img/clientes/zurich.jpg")
        },
        {
          title: "CONAB - Companhia Nacianal de Abastecimento",
          src: require("../assets/img/clientes/conab.jpg")
        },
        {
          title:
            "Empresa da Tecnologia da Informação e Comunicação do Município de São Paulo - PRODAM-SP S/A",
          src: require("../assets/img/clientes/prodam.jpg")
        },
        {
          title: "FUMSOFT Sociedade Mineira de Software",
          src: require("../assets/img/clientes/fumsoft.jpg")
        },
        {
          title: "Fundação Banco do Brasil",
          src: require("../assets/img/clientes/fundacao.jpg")
        },
        {
          title: "Fundação Getúlio Vargas",
          src: require("../assets/img/clientes/fgv.jpg")
        },
        {
          title: "MGS -Minas Gerais Administração e Serviços S/A",
          src: require("../assets/img/clientes/mgs.jpg")
        },
        {
          title: "Ordem Dos Advogados do Brasil",
          src: require("../assets/img/clientes/oab.jpg")
        },
        {
          title: "Secretaria do Estado de Educação de Goiás",
          src: require("../assets/img/clientes/goias.jpg")
        },
        {
          title: "SENAI - Serviço Nacional de Aprendizagem Industrial",
          src: require("../assets/img/clientes/senai.jpg")
        },
        {
          title: "Toshiba do Brasil S/A - Unidade Contagem",
          src: require("../assets/img/clientes/toshiba.jpg")
        },
        {
          title: "Cemig Distribuição S.A - Mg",
          src: require("../assets/img/clientes/cemig.jpg")
        },
        {
          title: "Nova Era Silicon S/A",
          src: require("../assets/img/clientes/novaera.jpg")
        },
        {
          title: "Rede Bandeirantes de Tv - MG",
          src: require("../assets/img/clientes/band.jpg")
        }
      ];
    }
  }
</script>
<style lang="scss">
  .home .outrosClientes {
    display: none !important;
  }
  .presenca .v-card__text {
    min-height: 40px;
    line-height: 1.25;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    flex-grow: 1;
  }
</style>