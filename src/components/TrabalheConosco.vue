<template>
  <v-card class="transparent trabalhe" tile flat>
    <v-container>
      <p class="text-center text-h4 font-weight-light mb-0">TRABALHE CONOSCO</p>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <p class="blockquote text-center">
            Nossa equipe é constituída por profissionais qualificados e
            experientes. Para melhor atender ao mercado, mantemos uma equipe
            multidisciplinar formada por técnicos, desenvolvedores,
            administradores, gerente de projetos e executivos, todos com
            vivência em sua área de especialização.
          </p>
          <p class="blockquote text-center">
            Se você é um profissional dedicado ao que faz, gosta de
            aperfeiçoar-se continuamente e tem bom relacionamento com colegas e
            clientes, a <strong>NSERV</strong>
            pode ser um ótimo local para você trabalhar.
          </p>

          <!-- BENEFICIOS -->
          <!-- <v-card outlined light>
            <v-card-title class="grey lighten-3 justify-center"
              >Benefícios</v-card-title
            >
            <v-divider></v-divider>
            <v-row justify="center">
              <v-col cols="12" sm="4" md="3">
                <v-card
                  class="pa-2 transparent d-flex d-sm-block align-content-start"
                  flat
                >
                  <v-card-text class="text-sm-center pa-0 black--text">
                    <v-icon size="30px" class="px-2 d-sm-block"
                      >mdi-medical-bag</v-icon
                    >Plano médico e odontológico
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-card class="pa-2 transparent" flat>
                  <v-card-text class="text-sm-center pa-0 black--text">
                    <v-icon size="30px" class="px-2 d-sm-block"
                      >mdi-shield-half-full</v-icon
                    >Previdência privada
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-card class="pa-2 transparent" flat>
                  <v-card-text class="text-sm-center pa-0 black--text">
                    <v-icon size="30px" class="px-2 d-sm-block"
                      >mdi-currency-usd-circle</v-icon
                    >Participação nos resultados
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-card class="pa-2 transparent" flat>
                  <v-card-text class="text-sm-center pa-0 black--text">
                    <v-icon size="30px" class="px-2 d-sm-block"
                      >mdi-account-circle-outline</v-icon
                    >Seguro de vida em grupo
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-card class="pa-2 transparent" flat light>
                  <v-card-text class="text-sm-center pa-0 black--text">
                    <v-icon size="30px" class="px-2 d-sm-block"
                      >mdi-silverware-fork-knife</v-icon
                    >Auxílio alimentação
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-card class="pa-2 transparent" flat light>
                  <v-card-text class="text-sm-center pa-0 black--text">
                    <v-icon size="30px" class="px-2 d-sm-block">mdi-bus</v-icon
                    >Vale transporte
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" md="3">
                <v-card class="pa-2 transparent" flat light>
                  <v-card-text class="text-sm-center pa-0 black--text">
                    <v-icon size="30px" class="px-2 d-sm-block"
                      >mdi-finance</v-icon
                    >Plano de carreira
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" md="3 ">
                <v-card class="pa-2 transparent" flat light>
                  <v-card-text class="text-sm-center pa-0 black--text">
                    <v-icon size="30px" class="px-2 d-sm-block"
                      >mdi-arrow-decision</v-icon
                    >Plano de cargos e salários
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card> -->

          <!-- <p class="text-h5 font-weight-thin text-center mt-5">Oportunidades</p> -->

          <!-- <v-row justify="center" class="d-flex align-stretch">
            <desenvolvedor></desenvolvedor> -->
            <!-- <desenvolvedor-estagio></desenvolvedor-estagio> -->
            <!-- <suporte></suporte> -->
            <!-- <suporte-estagio></suporte-estagio> -->
            <!-- <designer></designer> -->
            <!-- <designer-estagio></designer-estagio>
            <administrativo></administrativo>
          </v-row> -->

          <p class="text-h5 font-weight-thin text-center mt-5">
            BANCO DE TALENTOS
          </p>
          <p class="text-center font-italic font-weight-light mt-n3">
            Envie seu currículo para o nosso banco de
            talentos.
          </p>

          <v-row justify="center">
            <v-col cols="12" sm="6">
              <v-card
                class
                flat
                light
                outlined
                href="mailto:nserv@hotmail.com"
                target="_blank"
              >
                <v-card-text class="text-center px-0 black--text">
                  <v-icon color="black" size="50px">mdi-email-outline</v-icon>
                </v-card-text>
                <v-card-text
                  class="text-center py-0 black--text text-subtitle-1"
                >
                  <p>nserv@hotmail.com</p>
                </v-card-text>
                <v-card-action>
                  <span
                    class="nserv d-block white--text text-center rounded-b px-2"
                    >INFORME NO ASSUNTO DO E-MAIL A VAGA PRETENDIDA.</span
                  >
                </v-card-action>
              </v-card>
            </v-col>
          </v-row>
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
</style>