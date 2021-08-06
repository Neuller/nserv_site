<template>
  <div class="cidada">
    <v-parallax
      class="destaque nserv"
      dark
      src="..\assets\img\desenvolvimento/bg-desenvolvimento.png"
    >
      <destaque>TEXTO PRINCIPAL</destaque>
    </v-parallax>
    <v-container class="py-7">
      <v-expansion-panels class="py-2" focusable hover>
        <v-expansion-panel>
          <v-expansion-panel-header class="title">
            <span class="d-inline">
              TITULO:
              <span class="font-weight-bold d-inline-block">SUBTITULO</span>
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <blockquote class="blockquote">TEXTO</blockquote>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="py-2" focusable hover>
        <v-expansion-panel>
          <v-expansion-panel-header class="title">
            <span class="d-inline">
              TITULO:
              <span class="font-weight-bold d-inline-block">SUBTITULO</span>
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <blockquote class="blockquote">TEXTO</blockquote>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="py-2" focusable hover>
        <v-expansion-panel>
          <v-expansion-panel-header class="title">
            <span class="d-inline">
              TITULO:
              <span class="font-weight-bold d-inline-block">SUBTITULO</span>
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <blockquote class="blockquote">TEXTO</blockquote>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="py-2" focusable hover>
        <v-expansion-panel>
          <v-expansion-panel-header class="title">
            <span class="d-inline">
              TITULO:
              <span class="font-weight-bold d-inline-block">SUBTITULO</span>
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <blockquote class="blockquote">TEXTO</blockquote>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="py-2" focusable hover>
        <v-expansion-panel>
          <v-expansion-panel-header class="title">
            <span class="d-inline">
              TITULO:
              <span class="font-weight-bold d-inline-block">SUBTITULO</span>
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <blockquote class="blockquote">TEXTO</blockquote>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

    <!-- DIRECAO -->
    <v-parallax height="100vh" class dark src="..\assets\img\desenvolvimento\bg-direcao3.jpg">
      <v-card class="presenca transparent" tile flat dark>
        <v-container class="py-7">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="7" md="5" class="d-flex justify-center">
              <v-card class="transparent" flat>
                <div class="headline font-weight-thin">
                  <p>
                    "Em nossa operação e nas situações de interação com a
                    comunidade, mantemos nosso princípio de colaborar para o
                    desenvolvimento da sociedade e formação de cidadãos.
                  </p>
                  <p>
                    Nosso modelo de negócio, SaaS
                    <i>(software as a service)</i>, nos possibilita alcançar
                    qualquer ponto do território nacional, mantendo os padrões
                    de qualidade e reduzindo as dificuldades logísticas da
                    implantação das soluções."
                  </p>
                  <div
                    class="
                      d-block d-sm-none
                      body-2
                      font-weight-thin font-italic
                      text-right
                      pr-2
                    "
                  >
                    DIREÇÃO
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col sm="5" md="5" lg="4" class="d-none align-end d-sm-flex">
              <v-card flat tile class="transparent">
                <v-img
                  cover
                  src="..\assets\img\desenvolvimento\bg-direcao2.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <div
                    class="
                      black
                      lighten-4
                      body-2
                      font-weight-thin font-italic
                      text-right
                      pr-2
                    "
                  >
                    DIREÇÃO
                  </div>
                </v-img>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-card>
    </v-parallax>

    <v-card class="mx-auto py-4 py-md-12 presenca" flat>
      <v-container>
        <!--Solução Auge Educacional -->
        <titleH2>
          <template v-slot:titulo>TITULO</template>
          <template v-slot:paragrafo>SUBTITULO</template>
        </titleH2>
        <v-row class="align-stretch d-flex">
          <v-col cols="12" md="6" lg="3" class="text-left align-stretch d-flex">
            <v-card class="canal d-flex flex-column" dark>
              <v-card-title class="headline text-wrap">TITULO</v-card-title>

              <v-divider dark></v-divider>
              <v-card-text
                class="body-1 pa-3 flex-grow-1 align-start"
                style="height: auto"
              >
                <span>TEXTO</span>
              </v-card-text>
              <v-divider dark></v-divider>
              <v-card-actions block tile dark to="/" text>
                <v-btn href="#" target="_blank" text block>LINK</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3" class="text-left align-stretch d-flex">
            <v-card class="ihgmg d-flex flex-column" dark>
              <v-card-title class="headline">TITULO</v-card-title>

              <v-divider dark></v-divider>
              <v-card-text
                class="body-1 pa-3 flex-grow-1 align-start"
                style="height: auto"
              >
                <span>TEXTO</span>
              </v-card-text>
              <v-divider dark></v-divider>
              <v-card-actions block tile dark>
                <v-btn href="#" target="_blank" text block>LINK</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="3" class="text-left align-stretch d-flex">
            <v-card class="fazenda d-flex flex-column" dark>
              <v-card-title class="headline">
                TITULO
                <br />TITULO
              </v-card-title>

              <v-divider dark></v-divider>
              <v-card-text
                class="body-1 pa-3 flex-grow-1 align-start"
                style="height: auto"
              >
                <span>TEXTO</span>
              </v-card-text>
              <v-divider dark></v-divider>
              <v-card-actions block tile dark text>
                <v-btn
                  class="d-none d-sm-block"
                  @click.stop="dialogGaleriaSM = true"
                  text
                  block
                  >GALERIA</v-btn
                >

                <v-btn @click.stop="dialogGaleria = true" text block
                  >GALERIA</v-btn
                >

                <!-- MODAL GALERIA -->
                <v-dialog v-model="dialogGaleriaSM" max-width="85vh">
                  <v-card>
                    <v-card-title class="headline">TITULO</v-card-title>

                    <v-card-text>
                      <v-carousel
                        delimiter-icon="mdi-minus"
                        show-arrows-on-hover
                        prev-icon="mdi-chevron-left"
                        next-icon="mdi-chevron-right"
                        touch
                        class="d-none d-sm-block"
                      >
                        <v-carousel-item
                          v-for="(foto, i) in fotos"
                          :key="i"
                          :src="foto.src"
                        ></v-carousel-item>
                      </v-carousel>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialogGaleriaSM = false"
                        >FECHAR</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog class="d-sm-none" v-model="dialogGaleria" fullscreen>
                  <v-card>
                    <v-card-title class="headline">TITULO</v-card-title>

                    <v-card-text>
                      <v-carousel
                        delimiter-icon="mdi-minus"
                        :show-arrows="false"
                        touch
                        class="d-sm-none"
                      >
                        <v-carousel-item
                          v-for="(foto, i) in fotos"
                          :key="i"
                          :src="foto.src"
                        ></v-carousel-item>
                      </v-carousel>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialogGaleria = false"
                        >FECHAR</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="3" class="text-left align-stretch d-flex">
            <v-card class="solar d-flex flex-column" dark>
              <v-card-title class="headline">
                TITULO
                <br />TITULO
              </v-card-title>

              <v-divider dark></v-divider>
              <v-card-text
                class="body-1 pa-3 flex-grow-1 align-start"
                style="height: auto"
              >
                <span>TEXTO</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogGaleria: false,
      dialogGaleriaSM: false,
      fotos: [
        {
          src: require("../assets/img/desenvolvimento/galeria/1.jpg"),
        },
        {
          src: require("../assets/img/desenvolvimento/galeria/2.jpg"),
        },
        {
          src: require("../assets/img/desenvolvimento/galeria/3.jpg"),
        },
        {
          src: require("../assets/img/desenvolvimento/galeria/4.jpg"),
        },
        {
          src: require("../assets/img/desenvolvimento/galeria/5.jpg"),
        },
      ],
    };
  },
};
</script>