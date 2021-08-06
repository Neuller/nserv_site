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
            <p>Desenvolvedor - Júnior</p>
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
      <v-toolbar-title >Desenvolvedor - Júnior</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon  @click="dialogVaga2 = false">mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

        <v-card-text>
          <p>
            <span class="text-subtitle-1">Atividade profissional:</span>
            <ul>
              <li>Programar em JAVA sob supervisão de desenvolvedor Sênior.</li>
            </ul>
          </p>

          <p>
            <span class="text-subtitle-1">Requisitos técnicos:</span>
            <ul>
              <li>Experiência comprovada em programação e banco de dados SQL;</li>
              <li>Conhecimentos de arquitetura de aplicações web e orientação a objetos.</li>
            </ul>
          </p>
            <p>
            <span class="text-subtitle-1"> Requisitos desejáveis:</span>
            <ul>
              <li>Experiência com banco de dados PostgreSQL;</li>
              <li>Conhecimentos de Freemarker, Servlets, JavaScript, AJAX, HTML, CSS, Eclipse e Java;</li>
              <li>Conhecimentos de Unix/Linux.</li>
            </ul>
          </p>
            <p>
            <span class="text-subtitle-1">Formação acadêmica:</span>
            <ul>
              <li>Curso superior completo em: Ciência da Computação ou congênere.</li>
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
              <li>44 horas - 08:00h às 18:00h.</li>
            </ul>
          </p>
          <p>
            <span class="text-subtitle-1">Benefícios:</span>
            <ul>
              <li>Plano de saúde</li>
              <li>Plano odontológico</li>
              <li>Participação nos resultados</li>
              <li>Seguro de vida</li>
              <li>Previdência privada</li>
              <li>Vale refeição</li>
              <li>Vale transporte</li>
              <li>Uniforme</li>
            </ul>
          </p>
          <p>
            <span class="text-subtitle-1">Salário:</span>
            <ul>
              <li>Enviar pretensão salarial.</li>
            </ul>
          </p>
        
          <p>
            <span class="text-subtitle-1">Observações:</span>
            <ul>
              <li>É desejável que o candidato tenha experiência em empresa de porte médio ou grande e tenha participado de projetos de desenvolvimento significativos.</li>
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
                    >Envie seu currículo destacando a vaga pretendida</span>
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