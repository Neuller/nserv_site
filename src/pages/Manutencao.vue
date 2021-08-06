<template>
  <div>
    <v-parallax
      class="destaque blue"
      dark
      src="..\assets\img\manutencao\bg-manutencao.png"
    >
      <destaque>
        <b>TITULO</b>, <br class="d-none d-sm-inline" />TITULO
      </destaque>
    </v-parallax>

    <!-- Arquitetura -->
    <v-card class="mx-auto py-md-12 arquitetura" flat>
      <v-container>
        <titleH2>
          <template v-slot:titulo>TITULO</template>
        </titleH2>
        <v-row>
          <v-col cols="12">
            <div style="max-height: 100vw; height: 75vh">
              <v-img
                contain
                height="100%"
                src="../assets/img/manutencao/arquitetura.png"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card
      class="mx-auto py-4 py-md-12"
      style="
        background-image: linear-gradient(
          to right,
          #2e6b8c 40%,
          #0b415f 70%,
          #0b415f 85%,
          #2e6b8c 100%
        );
      "
      flat
      dark
      tile
    >
      <v-container>
        <titleH2>
          <template v-slot:titulo>TITULO</template>
          <template v-slot:paragrafo>SUBTITULO</template>
        </titleH2>
        <v-row justify="center" align="center">
          <v-col class="d-none d-md-block imgAppsMd" cols="7">
            <div>
              <v-img src="../assets/img/manutencao/app-gestor.png"></v-img>
              <v-img src="../assets/img/manutencao/app-educador.png"></v-img>
              <v-img src="../assets/img/manutencao/app-familia.png"></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="7" md="5">
            <v-card class="mb-3" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-img
                class="d-md-none mt-4"
                height="40vh"
                aspect-ratio="1"
                contain
                src="../assets/img/manutencao/app-familia.png"
              ></v-img>
              <v-card-title class="justify-center font-weight-light pt-3 pb-2"
                >TITULO</v-card-title
              >
              <v-card-text
                class="
                  px-3
                  text-center text-body-1
                  font-weight-thin
                  white--text
                  line-height-125
                "
                >SUBTITULO</v-card-text
              >

              <v-card-text class="py-0 caption text-center justify-center">
                <span>LINK:</span>
              </v-card-text>
              <v-card-actions class="pa-0">
                <v-btn
                  x-small
                  text
                  block
                  class="pa-4"
                  @click.stop="dialogVideoFamilia = true"
                >
                  <v-icon size="16" class="pr-1">mdi-youtube</v-icon>TITULO
                </v-btn>

                <v-dialog
                  v-model="dialogVideoFamilia"
                  fullscreen
                  hide-overlay
                  transition="dialog-bottom-transition"
                >
                  <v-btn
                    icon
                    dark
                    @click="dialogVideoFamilia = false"
                    style="position: fixed; z-index: 300; right: 5px; top: 5px"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-card
                    class="d-flex justify-center align-center"
                    style="background-color: rgba(0, 0, 0, 0.85)"
                  >
                    <div style="width: 100vw; height: 57vw">
                      <iframe
                        width="100%"
                        height="100%"
                        src="#"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>

            <v-card class="mb-3" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-img
                class="d-md-none mt-4"
                height="40vh"
                aspect-ratio="1"
                contain
                src="../assets/img/manutencao/app-educador.png"
              ></v-img>
              <v-card-title class="justify-center font-weight-light pt-3 pb-2"
                >TITULO</v-card-title
              >
              <v-card-text
                class="
                  px-3
                  text-center text-body-1
                  font-weight-thin
                  white--text
                  line-height-125
                "
                >SUBTITULO</v-card-text
              >
              <v-card-text class="py-0 caption text-center justify-center">
                <span>LINK:</span>
              </v-card-text>
              <v-card-actions class="pa-0">
                <v-btn
                  x-small
                  text
                  block
                  class="pa-4"
                  @click.stop="dialogVideoEducador = true"
                >
                  <v-icon size="16" class="pr-1">mdi-youtube</v-icon>TITULO
                </v-btn>

                <v-dialog
                  v-model="dialogVideoEducador"
                  fullscreen
                  hide-overlay
                  transition="dialog-bottom-transition"
                >
                  <v-btn
                    icon
                    dark
                    @click="dialogVideoEducador = false"
                    style="position: fixed; z-index: 300; right: 5px; top: 5px"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-card
                    class="d-flex justify-center align-center"
                    style="background-color: rgba(0, 0, 0, 0.85)"
                  >
                    <div style="width: 100vw; height: 57vw">
                      <iframe
                        width="100%"
                        height="100%"
                        src="#"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>

            <v-card class="mb-3" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-img
                class="d-md-none mt-4"
                height="40vh"
                aspect-ratio="1"
                contain
                src="../assets/img/manutencao/app-gestor.png"
              ></v-img>
              <v-card-title class="justify-center font-weight-light pt-3 pb-2"
                >TITULO</v-card-title
              >
              <v-card-text
                class="
                  px-3
                  text-center text-body-1
                  font-weight-thin
                  white--text
                  line-height-125
                "
                >SUBTITULO</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-parallax height="auto" src="..\assets\img\manutencao\bg-30-2.jpg">
      <v-card class="mx-auto py-4 py-md-12 transparent" dark flat>
        <v-container>
          <titleH2>
            <template v-slot:titulo>TITULO</template>
          </titleH2>

          <v-row justify="center" class="d-flex d-md-none btnPresenca">
            <v-dialog
              v-model="dialogArquivos"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <v-toolbar
                dark
                color="azul"
                style="height: 56px; position: fixed; z-index: 300; width: 100%"
              >
                <v-toolbar-title>TITULO</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="dialogArquivos = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card>
                <especificacao></especificacao>
                <div class="pa-3">
                  <v-btn
                    color="grey darken-2"
                    block
                    dark
                    @click="dialogArquivos = false"
                    >Voltar</v-btn
                  >
                </div>
              </v-card>
            </v-dialog>
          </v-row>

          <v-row justify="center" class="d-none d-md-flex btnPresenca">
            <v-dialog v-model="dialogArquivosMD">
              <v-card>
                <especificacao></especificacao>
                <div class="pa-3">
                  <v-btn
                    color="grey darken-2"
                    block
                    dark
                    @click="dialogArquivosMD = false"
                    >Voltar</v-btn
                  >
                </div>
              </v-card>
            </v-dialog>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-currency-usd</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal"
                        >TITULO</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-cloud</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal">
                        TITULO
                        <i>TITULO</i> (TITULO)
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-cellphone-text</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal"
                        >TITULO</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-shield</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal"
                        >TITULO</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-target-account</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal"
                        >TITULO</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-code-greater-than-or-equal</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal"
                        >TITULO</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-clock</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal"
                        >TITULO</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-handshake</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal">
                        TITULO
                        <i>(TITULO)</i>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card outlined height="83px" class="d-flex align-center" light>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-face-agent</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="white-space-normal"
                        >TITULO</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card outlined light>
                <v-card-title class="grey lighten-3 justify-center"
                  >TITULO</v-card-title
                >
                <v-divider></v-divider>
                <v-row justify="center">
                  <v-col cols="12" sm="4" md="2">
                    <v-card class="pa-2 transparent" flat>
                      <v-card-text class="text-center pa-0">
                        <v-icon large>mdi-database</v-icon>
                      </v-card-text>
                      <v-card-text class="text-center pa-0 black--text"
                        >TITULO</v-card-text
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="4" md="2">
                    <v-card class="pa-2 transparent" flat>
                      <v-card-text class="text-center pa-0">
                        <v-icon large>mdi-cast-education</v-icon>
                      </v-card-text>
                      <v-card-text class="text-center pa-0 black--text"
                        >TITULO</v-card-text
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="4" md="2">
                    <v-card class="pa-2 transparent" flat>
                      <v-card-text class="text-center pa-0">
                        <v-icon large>mdi-school</v-icon>
                      </v-card-text>
                      <v-card-text class="text-center pa-0 black--text"
                        >TITULO</v-card-text
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="4" md="2">
                    <v-card class="pa-2 transparent" flat>
                      <v-card-text class="text-center pa-0">
                        <v-icon large>mdi-cogs</v-icon>
                      </v-card-text>
                      <v-card-text class="text-center pa-0 black--text"
                        >TITULO</v-card-text
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="4" md="2">
                    <v-card class="pa-2 transparent" flat light>
                      <v-card-text class="text-center pa-0">
                        <v-icon large bl>mdi-book-open-page-variant</v-icon>
                      </v-card-text>
                      <v-card-text class="text-center pa-0 black--text"
                        >TITULO</v-card-text
                      >
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-parallax>

    <v-card class="mx-auto py-4 py-md-12" flat>
      <v-container>
        <titleH2>
          <template v-slot:titulo>TITULO</template>
        </titleH2>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4">
            <v-card class="mb-5" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-card-text
                class="d-flex pa-1 justify-center text-center align-center"
              >
                <v-avatar color="nserv" size="64">
                  <v-img
                    aspect-ratio="1"
                    contain
                    src="../assets/img/manutencao/resultados1.png"
                  ></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text
                class="
                  d-flex
                  pa-1
                  justify-center
                  text-center
                  flex-grow-1
                  align-center
                  subtitle-1
                  font-weight-light
                "
              >
                <div class="black--text">
                  TE
                  <b class="font-weight-black">XT</b>
                  O
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="mb-5" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-card-text
                class="d-flex pa-1 justify-center text-center align-center"
              >
                <v-avatar color="nserv" size="64">
                  <v-img
                    aspect-ratio="1"
                    contain
                    src="../assets/img/manutencao/resultados2.png"
                  ></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text
                class="
                  d-flex
                  pa-1
                  justify-center
                  text-center
                  flex-grow-1
                  align-center
                  subtitle-1
                  font-weight-light
                "
              >
                <div class="black--text">
                  TE
                  <b class="font-weight-black"> XT </b>
                  O
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="mb-5" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-card-text
                class="d-flex pa-1 justify-center text-center align-center"
              >
                <v-avatar color="nserv" size="64">
                  <v-img
                    aspect-ratio="1"
                    contain
                    src="../assets/img/manutencao/resultados3.png"
                  ></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text
                class="
                  d-flex
                  pa-1
                  justify-center
                  text-center
                  flex-grow-1
                  align-center
                  subtitle-1
                  font-weight-light
                "
              >
                <div class="black--text">
                  TE
                  <b class="font-weight-black">XT</b>
                  O
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="mb-5" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-card-text
                class="d-flex pa-1 justify-center text-center align-center"
              >
                <v-avatar color="nserv" size="64">
                  <v-img
                    aspect-ratio="1"
                    contain
                    src="../assets/img/manutencao/resultados4.png"
                  ></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text
                class="
                  d-flex
                  pa-1
                  justify-center
                  text-center
                  flex-grow-1
                  align-center
                  subtitle-1
                  font-weight-light
                "
              >
                <div class="black--text">
                  TE
                  <b class="font-weight-black">XT</b>
                  O
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="mb-5" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-card-text
                class="d-flex pa-1 justify-center text-center align-center"
              >
                <v-avatar color="nserv" size="64">
                  <v-img
                    aspect-ratio="1"
                    contain
                    src="../assets/img/manutencao/resultados5.png"
                  ></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text
                class="
                  d-flex
                  pa-1
                  justify-center
                  text-center
                  flex-grow-1
                  align-center
                  subtitle-1
                  font-weight-light
                "
              >
                <div class="black--text">
                  TE
                  <b class="font-weight-black">XT</b>O
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="mb-5" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-card-text
                class="d-flex pa-1 justify-center text-center align-center"
              >
                <v-avatar color="nserv" size="64">
                  <v-img
                    aspect-ratio="1"
                    contain
                    src="../assets/img/manutencao/resultados6.png"
                  ></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text
                class="
                  d-flex
                  pa-1
                  justify-center
                  text-center
                  flex-grow-1
                  align-center
                  subtitle-1
                  font-weight-light
                "
              >
                <div class="black--text">
                  TE
                  <b class="font-weight-black">XT</b>
                  O
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="mb-5" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-card-text
                class="d-flex pa-1 justify-center text-center align-center"
              >
                <v-avatar color="nserv" size="64">
                  <v-img
                    aspect-ratio="1"
                    contain
                    src="../assets/img/manutencao/resultados7.png"
                  ></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text
                class="
                  d-flex
                  pa-1
                  justify-center
                  text-center
                  flex-grow-1
                  align-center
                  subtitle-1
                  font-weight-light
                "
              >
                <div class="black--text">
                  <b class="font-weight-black">TEX</b>
                  TO
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="mb-5" color="rgba(255, 255, 255, 0.1)" outlined>
              <v-card-text
                class="d-flex pa-1 justify-center text-center align-center"
              >
                <v-avatar color="nserv" size="64">
                  <v-img
                    aspect-ratio="1"
                    contain
                    src="../assets/img/manutencao/resultados8.png"
                  ></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text
                class="
                  d-flex
                  pa-1
                  justify-center
                  text-center
                  flex-grow-1
                  align-center
                  subtitle-1
                  font-weight-light
                "
              >
                <div class="black--text">
                  TE
                  <b class="font-weight-black">XT</b>O
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-parallax
      height="auto"
      style="background-position: bottom"
      dark
      class="blue"
      src="..\assets\img\manutencao\bg-25-8.jpg"
    >
      <numeros></numeros>
    </v-parallax>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Educacional extends Vue {
  data() {
    return {
      dialogArquivos: false,
      dialogArquivosMD: false,
      dialogVideoFamilia: false,
      dialogVideoEducador: false,
      dialogVideoDiario: false,
      dialogVideoGestor: false,
    };
  }
}
</script>
