<template>
  <v-col cols="12" sm="6" class="d-flex flex-column">
    <v-dialog v-model="dialogVaga2">
      <template v-slot:activator="{ on }">
        <v-card v-on="on" class="d-flex flex-column flex-grow-1" flat light outlined>
          <v-card-text class="text-center px-0 black--text">
            <v-icon color="black" size="50px">mdi-file-code-outline</v-icon>
          </v-card-text>
          <v-card-text
            class="justify-center text-center py-0 black--text text-subtitle-1 d-flex flex-grow-1"
          >
            <p>Desenvolvedor - Estágio</p>
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
      <v-toolbar-title >Desenvolvedor - Estágio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon  @click="dialogVaga2 = false">mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

        <v-card-text>
          <p>
            <span class="text-subtitle-1">Atividade profissional:</span>
            <ul>
              <li>Programar em JAVA e PHP sob supervisão.</li>
            </ul>
          </p>

          <p>
            <span class="text-subtitle-1">Requisitos técnicos:</span>
            <ul>
              <li>Conhecimentos de programação e banco de dados SQL.</li>
              <li>Conhecimentos de arquitetura de aplicações web e orientação a objetos.</li>
            </ul>
          </p>
            <p>
            <span class="text-subtitle-1"> Requisitos desejáveis:</span>
            <ul>
              <li>Experiência com banco de dados PostgreSQL.</li>
              <li>Conhecimentos de ervlets, JavaScript, AJAX, HTML, CSS, Eclipse e Java.</li>
              <li>Conhecimentos de Unix/Linux.</li>
            </ul>
          </p>
            <p>
            <span class="text-subtitle-1">Formação acadêmica:</span>
            <ul>
              <li>Curso superior em andamento em: Ciência da Computação ou congênere.</li>
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
              <li>Uniforme.</li>
              <li>Vale transporte.</li>
            </ul>
          </p>
          <p>
            <span class="text-subtitle-1">Salário:</span>
            <ul>
              <li>Enviar prentensão.</li>
            </ul>
          </p>
        </v-card-text>

        <v-row>
          <v-card-text class="text-center">
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
                >Envie seu currículo destacando a vaga pretendida</span>
              </v-card-action>
            </v-card>
          </v-card-text>
        </v-row>

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
      dialogVaga2: false,
    };
  }
}
</script>