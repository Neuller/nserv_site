<template>
  <v-card class="transparent" tile flat>
    <v-container>
      <p class="text-center text-h4 font-weight-light mb-0">Valores</p>

      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card outlined class="mb-4">
            <v-card-title class="grey lighten-4 py-2">
              <span class="text-h6">Pressuposto</span>
            </v-card-title>
            <v-card-text class="blockquote pt-2"
              >Acreditamos que o homem, por meio do trabalho sério e dedicado,
              pode contribuir para seu próprio desenvolvimento, gerando reflexos
              diretos na melhoria da qualidade de vida nas empresas e na
              sociedade. Possuímos inabalável crença na capacidade do ser
              humano. Nossas relações com clientes, colaboradores, parceiros,
              fornecedores, e também a concepção dos produtos, são orientados
              por essa crença e por nossos valores e princípios.</v-card-text
            >
          </v-card>

          <v-card outlined class="mb-4">
            <v-card-title class="grey lighten-4 py-2">
              <span class="text-h6">Confiança nas pessoas</span>
            </v-card-title>
            <v-card-text class="blockquote pt-2"
              >Confiamos nas pessoas, oferecemos apoio, delegamos
              responsabilidade, respeitamos e as tratamos com dignidade,
              incentivando-as à participação, autonomia, autodesenvolvimento e
              incorporação de elevado nível de qualificação e profissionalismo.
              Orientamos nossos colaboradores a agirem de forma absolutamente
              profissional, por meio de atitudes que expressem a importância das
              pessoas e de suas necessidades.</v-card-text
            >
          </v-card>

          <v-card outlined class="mb-4">
            <v-card-title class="grey lighten-4 py-2">
              <span class="text-h6">Satisfação dos clientes</span>
            </v-card-title>
            <v-card-text class="blockquote pt-2"
              >Esforçamo-nos para garantir a plena satisfação do cliente, em
              qualquer circunstância. Nossa atuação é caracterizada pela
              resposta integral, ágil, de forma individualizada e flexível, para
              atender às necessidades específicas de nossos clientes. Buscamos
              fazer a diferença e, com o olhar no futuro, assegurar a liderança
              e competitividade de nosso clientes e conduzí-los à posição de
              vanguarda, com a utilização de nossos produtos.</v-card-text
            >
          </v-card>

          <v-card outlined class="mb-4">
            <v-card-title class="grey lighten-4 py-2">
              <span class="text-h6">Imagem empresarial</span>
            </v-card-title>
            <v-card-text class="blockquote pt-2"
              >Conduzimos nossas ações junto aos clientes, fornecedores,
              colaboradores e todos que se relacionam conosco, de forma a
              consolidar nossa imagem de empresa séria, competente e
              absolutamente confiável.</v-card-text
            >
          </v-card>

          <v-card outlined class="mb-4">
            <v-card-title class="grey lighten-4 py-2">
              <span class="text-h6">Relacionamentos duradouros</span>
            </v-card-title>
            <v-card-text class="blockquote pt-2"
              >Consideramos nossos clientes, fornecedores e colaboradores como
              aliados, com os quais procuramos estabelecer formas de
              relacionamento que garantam uma convivência duradoura e vantajosa,
              fortalecendo e consolidando, a cada momento, os laços de união e
              harmonia, por meio de objetivos comuns.</v-card-text
            >
          </v-card>

          <v-card outlined class="mb-4">
            <v-card-title class="grey lighten-4 py-2">
              <span class="text-h6">Cidadania</span>
            </v-card-title>
            <v-card-text class="blockquote pt-2"
              >Compreendemos nossa responsabilidade como empresa cidadã que
              contribui para o desenvolvimento de pessoas, da economia e da
              sociedade. Entendemos que é nosso dever fazer a nossa parte por
              uma sociedade melhor e pela defesa dos princípios legais, morais e
              éticos.</v-card-text
            >
          </v-card>
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

