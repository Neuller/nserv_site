<template>
  <v-col cols="12" sm="6" class="d-flex flex-column">
    <v-dialog v-model="dialogVaga2">
      <template v-slot:activator="{ on }">
        <v-card v-on="on" class="d-flex flex-column flex-grow-1" flat light outlined>
          <v-card-text class="text-center px-0 black--text">
            <v-icon color="black" size="50px">mdi-file-star-outline</v-icon>
          </v-card-text>
          <v-card-text
            class="justify-center text-center py-0 black--text text-subtitle-1 d-flex flex-grow-1"
          >
            <p>Web Designer - Estágio</p>
          </v-card-text>

              <v-card-action>
                <v-btn
                  
                  block
                  small
                  tile
                  class="nserv d-block white--text text-center rounded-b"
                >Clique para saber mais!</v-btn>
              </v-card-action>
            
        </v-card>
      </template>
      
      <v-card>
        <v-app-bar
      color="nserv"
      dark
      class="mb-3"
    >
      <v-toolbar-title >Web Designer - Estágio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon  @click="dialogVaga2 = false">mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

        <v-card-text>
          <p>
            <span class="text-subtitle-1">Atividade profissional:</span>
            <ul>
              <li>Criação e manutenção de interfaces centradas no usuário: estruturação, navegação e visualização do conteúdo.</li>
              <li>Sistemas web, diagramação, infografia, apostilas, cartilhas, manuais, apresentações.</li>
              <li>Produção de conteúdo para sites e redes sociais.</li>
            </ul>
          </p>




          <p>
            <span class="text-subtitle-1"> Requisitos técnicos:</span>
            <ul>
              <li>Domínio de softwares de escritório.</li>
              <li>Domínio de softwares gráficos (Photoshop, Illustrator, InDesign, CSS e/ou HTML).</li>
            </ul>
          </p>


          <p>
            <span class="text-subtitle-1"> Requisitos desejáveis:</span>
            <ul>
              <li>Domínio de Lógica de Programação.</li>
              <li>Domínio de ferramentas de design.</li>
              <li>Desenvolvimento de software WEB.</li>
              <li>Elaboração de documentação para acompanhamentos.</li>
            </ul>
          </p>
            <p>
            <span class="text-subtitle-1">Formação acadêmica:</span>
            <ul>
              <li>Curso superior em andamento em: Design Gráfico, Design Digital ou áreas afins.</li>
            </ul>
          </p>

          <p>
            <span class="text-subtitle-1">Idiomas:</span>
            <ul>
              <li>Compreensão de literatura técnica no idioma inglês.</li>
            </ul>
          </p>

          <p>
            <span class="text-subtitle-1">Carga horária:</span>
            <ul>
              <li>30 horas -  08:15 às 14:15.</li>
            </ul>
          </p>
          <p>
            <span class="text-subtitle-1">Benefícios:</span>
            <ul>
              <li>Uniforme</li>
              <li>Vale transporte</li>
            </ul>
          </p>
          <p>
            <span class="text-subtitle-1">Bolsa:</span>
            <ul>
              <li>Enviar pretensão.</li>
            </ul>
          </p>

        </v-card-text>
              <v-card-text>
                <v-card max-width="600" flat light outlined href="mailto:nserv@hotmail.com" target="_blank">
                  <v-card-text class="text-center px-0 black--text">
                    <v-icon color="black" size="50px">mdi-email-outline</v-icon>
                  </v-card-text>
                  <v-card-text class="text-center py-0 black--text text-subtitle-1">
                    <p>nserv@hotmail.com</p>
                  </v-card-text>
                  <v-card-action>
                    <span
                      class="nserv d-block white--text text-center rounded-b px-2"
                    >Envie seu currículo e portifólio destacando a vaga pretendida</span>
                  </v-card-action>
                </v-card>
              </v-card-text>



        <div class="pa-3">
          <v-btn color="nserv darken-1 ma-4" block outlined @click="dialogVaga2 = false">Voltar</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";

  @Component
  export default class Rodape extends Vue {
    data() {
      return {
        dialogVaga2: false
      };
    }
  }
</script>