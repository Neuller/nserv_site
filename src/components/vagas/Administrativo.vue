<template>
  <v-col cols="12" sm="6" class="d-flex flex-column">
    <v-dialog v-model="dialogVaga2">
      <template v-slot:activator="{ on }">
        <v-card v-on="on" class="d-flex flex-column flex-grow-1" flat light outlined>
          <v-card-text class="text-center px-0 black--text">
            <v-icon color="black" size="50px">mdi-file-edit-outline</v-icon>
          </v-card-text>
          <v-card-text
            class="justify-center text-center py-0 black--text text-subtitle-1 d-flex flex-grow-1"
          >
            <p>Assistente Administrativo e Financeiro</p>
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
      <v-toolbar-title >Assistente Administrativo e Financeiro</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon  @click="dialogVaga2 = false">mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

        <v-card-text>
          <p>
            <span class="text-subtitle-1">Atividade profissional:</span>
            <ul>
              <li>Atendimento aos clientes internos.</li>
              <li>Documentar demandas de serviços dos setores.</li>
              <li>Documentar saídas de estoque.</li>
              <li>Efetuar pagamentos em bancos.</li>
              <li>Receber e protocolar correspondências recebidas.</li>
            </ul>
          </p>

          <p>
            <span class="text-subtitle-1">Requisitos técnicos:</span>
            <ul>
              <li>Excelente conhecimento em informática: Internet e produtos office.</li>
              <li>Experiência em rotinas administrativas e financeiras.</li>
              <li>Experiência em contas a pagar e receber.</li>
            </ul>
          </p>
            <p>
            <span class="text-subtitle-1"> Requisitos desejáveis:</span>
            <ul>
              <li>Experiência em atendimento a clientes.</li>
            </ul>
          </p>
            <p>
            <span class="text-subtitle-1">Formação acadêmica:</span>
            <ul>
              <li>Ensino médio concluído.</li>
            </ul>
          </p>


          <p>
            <span class="text-subtitle-1">Idiomas:</span>
            <ul>
              <li>Não há necessidade de conhecimento de idioma estrangeiro.</li>
            </ul>
          </p>


          <p>
            <span class="text-subtitle-1">Carga horária:</span>
            <ul>
              <li>38:45 horas - 08:15h às 17:00h.</li>
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