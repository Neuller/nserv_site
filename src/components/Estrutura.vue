<template>
  <v-card class="transparent" tile flat>
    <v-container>
      <p class="text-center text-h4 font-weight-light mb-0">
        Estrutura Organizacional
      </p>
      <p class="d-md-none text-center text-caption font-italic text--secondary">
        Toque cada célula para ver a descrição
      </p>

      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-container class="organograma aos-init aos-animate" data-aos="fade">
            <div class="row nivel-1">
              <div class="col-6 col-sm-3">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on">Diretoria</a>
                  </template>
                  <span>
                    Responsável pelo desenvolvimento e cumprimento dos
                    princípios de missão, visão e valores da empresa. Define
                    estratégias e políticas em consonância com esses princípios
                    e responde por todas as suas ações. Analisa e implementa
                    recomendações dos colaboradores, assegurando um ambiente
                    participativo e o alcance dos objetivos empresariais.
                  </span>
                </v-tooltip>
              </div>
            </div>

            <div class="row nivel-2">
              <div class="col-4">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on">Comitê de Estratégia</a>
                  </template>
                  <span>
                    Responsável por analisar e propor estratégias de
                    desenvolvimento de produtos e serviços ou desenvolvimento
                    organizacional. Visa identificar oportunidades de
                    crescimento para a empresa.
                  </span>
                </v-tooltip>
              </div>

              <div class="col-4">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on">Qualidade</a>
                  </template>
                  <span
                    >Responsável por auditar, de forma independente, a execução
                    dos processos de Desenvolvimento de Software frente a
                    metodologia estabelecida e formalizada, informando à
                    Diretoria as Não Conformidades, os indicadores de processo e
                    resultado e propor melhoria dos processos a partir das
                    Lições Aprendidas.</span
                  >
                </v-tooltip>
              </div>
            </div>

            <div class="row nivel-3">
              <div class="col-4 col-sm-2 org-n3-1">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on">Marketing e Comercial</a>
                  </template>
                  <span
                    >Responsável pelo relacionamento externo, com foco no
                    cliente e no mercado.</span
                  >
                </v-tooltip>
              </div>

              <div class="col-4 col-sm-2 org-n3-2">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on">Desenvolvimento de Sistemas</a>
                  </template>
                  <span
                    >Responsável pelo desenvolvimento e manutenção das
                    soluções.</span
                  >
                </v-tooltip>
              </div>

              <div class="col-4 col-sm-2 org-n3-3">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on"
                      >Implantação e Suporte de Sistemas</a
                    >
                  </template>
                  <span
                    >Responsável pelo atendimento técnico aos clientes, testes e
                    implantação dos produtos.</span
                  >
                </v-tooltip>
              </div>

              <div class="col-4 col-sm-2 org-n3-4">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on">Infraestrutura e Inovação</a>
                  </template>
                  <span
                    >Responsável pela estrutura computacional e pesquisa de
                    novas metodologias e soluções.</span
                  >
                </v-tooltip>
              </div>

              <div class="col-4 col-sm-2 org-n3-5">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on">Administrativo e Financeiro</a>
                  </template>
                  <span
                    >Responsável por apoiar as operações administrativas e
                    financeiras da empresa.</span
                  >
                </v-tooltip>
              </div>
            </div>

            <div class="row nivel-4">
              <div class="col-10">
                <v-tooltip v-model="show" bottom max-width="50vh" class="black">
                  <template v-slot:activator="{ on, attrs }">
                    <a v-bind="attrs" v-on="on">Projetos</a>
                  </template>
                  <span
                    >Responsável por gerir e conduzir projetos de
                    desenvolvimento de software e infraestrutura.</span
                  >
                </v-tooltip>
              </div>
            </div>

            <div class="row nivel-5">
              <div class="col-3 col-md-2">
                <span>Assessoria de Comunicação</span>
              </div>

              <div class="col-3 col-md-2">
                <span>Assessoria Jurídica</span>
              </div>

              <div class="col-3 col-md-2">
                <span>Contabilidade</span>
              </div>

              <div class="col-3 col-md-2">
                <span>Consultoria</span>
              </div>

              <div class="col-3 col-md-2">
                <span>Agentes de Negócio</span>
              </div>
            </div>
          </v-container>
        </v-col>
      </v-row>
      <p
        class="
          d-none d-md-block
          text-center text-caption
          font-italic
          text--secondary
        "
      >
        PASSE O MOUSE SOBRE AS CÉLULAS PARA VER A DESCRIÇÃO
      </p>

      <!-- 
      <v-expansion-panels focusable class=" detalheEstrutura">
        <v-expansion-panel>
          <v-expansion-panel-header>Diretoria</v-expansion-panel-header>
          <v-expansion-panel-content>
            Responsável pelo desenvolvimento e cumprimento dos princípios de missão, visão e valores da empresa.
            Define estratégias e políticas em consonância com esses princípios e responde por todas as suas ações.
            Analisa e implementa recomendações dos colaboradores, assegurando um ambiente participativo e o alcance dos objetivos empresariais.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Comitê de Estratégia</v-expansion-panel-header>
          <v-expansion-panel-content>
            Responsável por analisar e propor estratégias de desenvolvimento de produtos e serviços ou desenvolvimento organizacional.
            Visa identificar oportunidades de crescimento para a empresa.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Qualidade</v-expansion-panel-header>
          <v-expansion-panel-content>Responsável por auditar, de forma independente, a execução dos processos de Desenvolvimento de Software frente a metodologia estabelecida e formalizada, informando à Diretoria as Não Conformidades, os indicadores de processo e resultado e propor melhoria dos processos a partir das Lições Aprendidas.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Marketing e Comercial</v-expansion-panel-header>
          <v-expansion-panel-content>Responsável pelo relacionamento externo, com foco no cliente e no mercado.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Desenvolvimento de Sistemas</v-expansion-panel-header>
          <v-expansion-panel-content>Responsável pelo desenvolvimento e manutenção das soluções.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Implantação e Suporte de Sistemas</v-expansion-panel-header>
          <v-expansion-panel-content>Responsável pelo atendimento técnico aos clientes, testes e implantação dos produtos.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Infraestrutura e Inovação</v-expansion-panel-header>
          <v-expansion-panel-content>Responsável pela estrutura computacional e pesquisa de novas metodologias e soluções.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Administrativo e Financeiro</v-expansion-panel-header>
          <v-expansion-panel-content>Responsável por apoiar as operações administrativas e financeiras da empresa.</v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Projetos</v-expansion-panel-header>
          <v-expansion-panel-content>Responsável por gerir e conduzir projetos de desenvolvimento de software e infraestrutura.</v-expansion-panel-content>
        </v-expansion-panel>

 
      </v-expansion-panels>-->
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

<style lang="scss">
/* ESTRUTURA ORGANIZACIONAL */

.organograma .row {
  position: relative;
  justify-content: center;
}

.organograma .row a {
  width: 100%;
  height: 100%;
  display: flex;
  display: -ms-flex-box;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
}

.organograma .row > div {
  border-radius: 7px;
  margin: 5px;
  text-align: center;
  height: 60px;
  line-height: 1.25;
  display: flex;
  display: -ms-flex-box;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 11px;
  font-weight: normal;
  letter-spacing: 0px;
  padding: 5px;
}

.organograma .row.nivel-1 > div {
  background-image: linear-gradient(170deg, #8a1812 50%, #a31b19 50%);
  font-size: 14px;
  color: #fff;
}

.organograma .row.nivel-1 > div::after {
  content: "";
  position: absolute;
  border-left: #9d9d9c 4px solid;
  width: 1px;
  height: 175%;
  left: 50%;
  top: 100%;
  margin-left: -2px;
}

.organograma .row.nivel-2 {
  margin-bottom: 25px;
}

.organograma .row.nivel-2 > div {
  background-image: linear-gradient(170deg, #c6c6c6 50%, #d0d0d0 50%);
  color: #000;
  margin: 15px;
}

.organograma .row.nivel-2 > div:first-child::after {
  content: "";
  position: absolute;
  border-top: #9d9d9c 4px solid;
  width: 15%;
  height: 1px;
  left: 100%;
  top: 50%;
  margin-top: -2px;
}

.organograma .row.nivel-2 > div:last-child::after {
  content: "";
  position: absolute;
  border-top: #9d9d9c 4px solid;
  width: 15%;
  height: 1px;
  right: 100%;
  top: 50%;
  margin-top: -2px;
}

.organograma .row.nivel-3 {
  justify-content: space-around;
}

.organograma .row.nivel-3 > div {
  background-image: linear-gradient(170deg, #c6c6c6 50%, #d0d0d0 50%);
  color: #000;
}

.organograma .row.nivel-3 > div::after {
  content: "";
  position: absolute;
  border: #9d9d9c solid;
  border-width: 0;
}

.organograma .row.nivel-3 > div.org-n3-1 {
  margin-left: 0;
  margin-right: 20px;
}

.organograma .row.nivel-3 > div.org-n3-2 {
  margin-left: 20px;
  margin-right: 0px;
}

.organograma .row.nivel-3 > div.org-n3-3 {
  margin-left: 20px;
  margin-right: 0px;
}

.organograma .row.nivel-3 > div.org-n3-4 {
  margin-left: 0px;
  margin-right: 20px;
}

.organograma .row.nivel-3 > div.org-n3-1:after {
  border-left-width: 2px;
  border-top-width: 2px;
  height: 35%;
  width: 85%;
  left: 50%;
  bottom: 100%;
}

.organograma .row.nivel-3 > div.org-n3-2:after {
  border-right-width: 2px;
  border-top-width: 2px;
  height: 35%;
  width: 85%;
  right: 50%;
  bottom: 100%;
}

.organograma .row.nivel-3 > div.org-n3-3:after {
  border-right-width: 2px;
  border-bottom-width: 2px;
  height: 200%;
  width: 8%;
  left: 100%;
  bottom: 50%;
}

.organograma .row.nivel-3 > div.org-n3-4:after {
  border-left-width: 2px;
  border-bottom-width: 2px;
  height: 200%;
  width: 8%;
  right: 100%;
  bottom: 50%;
}

.organograma .row.nivel-3 > div.org-n3-5:after {
  border-top: none;
  border-left: #9d9d9c 2px solid;
  width: 0%;
  height: 200px;
  left: 50%;
  bottom: 100%;
  margin-left: -1px;
}

.organograma .row.nivel-3 > div::before {
  content: "";
  position: absolute;
  border-left: #ccc 2px solid;
  width: 0%;
  left: 50%;
  top: 100%;
}

.organograma .row.nivel-3 > div.org-n3-1:before {
  height: 250%;
}

.organograma .row.nivel-3 > div.org-n3-2:before {
  height: 250%;
}

.organograma .row.nivel-3 > div.org-n3-3:before {
  height: 135%;
}

.organograma .row.nivel-3 > div.org-n3-4:before {
  height: 135%;
}

.organograma .row.nivel-3 > div.org-n3-5:before {
  height: 20%;
}

.organograma .row.nivel-4 > div {
  background-color: #e3e3e3;
  background-image: none;
  border: 1px solid #a31b19;
  color: #000;
}

.organograma .row.nivel-5 {
  background-color: #e3e3e3;
  border: 1px solid #fff;
  border-radius: 7px;
  padding: 5px;
  width: 100%;
  margin: 0 auto;
}

.organograma .row.nivel-5 > div {
  background-color: #f7f7f7;
  background-image: linear-gradient(170deg, #878888 50%, #9d9d9c 50%);
  color: #fff;
  font-weight: normal;
  font-size: 9px;
}

@media (min-width: 576px) {
  .organograma .row {
    margin-bottom: 30px;
    position: relative;
  }

  .organograma .row > div {
    margin: 0 auto;
  }

  .organograma .row.nivel-1 > div::after {
    height: 150px;
  }

  .organograma .row.nivel-2 {
    margin-bottom: 75px;
  }

  .organograma .row.nivel-2 > div {
    background-image: linear-gradient(170deg, #c6c6c6 50%, #d0d0d0 50%);
    color: #000;
  }

  .organograma .row.nivel-2 > div:first-child::after {
    width: 8%;
  }

  .organograma .row.nivel-2 > div:last-child::after {
    width: 8%;
  }

  .organograma .row.nivel-3 > div {
    background-image: linear-gradient(170deg, #c6c6c6 50%, #d0d0d0 50%);
    color: #000;
  }

  .organograma .row.nivel-3 > div::after {
    content: "";
    position: absolute;
    border: #9d9d9c solid;
    border-width: 0;
  }

  .organograma .row.nivel-3 > div.org-n3-1,
  .organograma .row.nivel-3 > div.org-n3-2,
  .organograma .row.nivel-3 > div.org-n3-3,
  .organograma .row.nivel-3 > div.org-n3-4,
  .organograma .row.nivel-3 > div.org-n3-5 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .organograma .row.nivel-3 > div.org-n3-1:after,
  .organograma .row.nivel-3 > div.org-n3-2:after,
  .organograma .row.nivel-3 > div.org-n3-3:after,
  .organograma .row.nivel-3 > div.org-n3-4:after {
    border-left-width: 4px;
    border-top-width: 4px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    height: 75%;
    width: 120%;
    left: 50%;
    bottom: 100%;
    margin-left: -2px;
  }

  .organograma .row.nivel-3 > div.org-n3-5:after {
    border-left-width: 4px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    width: 0%;
    height: 75%;
    left: 50%;
    bottom: 100%;
    margin-left: -2px;
  }

  .organograma .row.nivel-3 > div::before {
    content: "";
    position: absolute;
    border-left: #ccc 2px solid;
    width: 0%;
    left: 50%;
    top: 100%;
    height: 50%;
  }

  .organograma .row.nivel-3 > div.org-n3-1:before,
  .organograma .row.nivel-3 > div.org-n3-2:before,
  .organograma .row.nivel-3 > div.org-n3-3:before,
  .organograma .row.nivel-3 > div.org-n3-4:before,
  .organograma .row.nivel-3 > div.org-n3-5:before {
    height: 50%;
  }

  .organograma .row.nivel-4 > div {
    background-color: #e3e3e3;
    background-image: none;
    border: 1px solid #a31b19;
    color: #000;
  }

  .organograma .row.nivel-5 {
    background-color: #e3e3e3;
    border: 1px solid #fff;
    border-radius: 7px;
    padding: 0.75em;
    width: 80%;
    margin: 0 auto;
  }

  .organograma .row.nivel-5 > div {
    background-color: #f7f7f7;
    background-image: linear-gradient(170deg, #878888 50%, #9d9d9c 50%);
    color: #fff;
    font-weight: normal;
    font-size: 9px;
    margin: 5px;
  }
}

@media (min-width: 768px) {
  .organograma .row > div {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.5px;
    padding: 5px;
  }

  .organograma .row.nivel-1 > div {
    font-size: 16px;
  }

  .organograma .row.nivel-5 > div {
    background-color: #f7f7f7;
    background-image: linear-gradient(170deg, #878888 50%, #9d9d9c 50%);
    color: #fff;
    font-weight: normal;
    font-size: 10px;
  }
}

@media (min-width: 992px) {
  .organograma .row > div {
    font-size: 13px;
    padding: 5px;
  }

  .organograma .row.nivel-1 > div {
    font-size: 18px;
  }

  .organograma .row.nivel-5 > div {
    font-size: 12px;
  }
}

.organograma .row a:hover {
  color: white;
  background: rgba(map-get($grey, "darken-1"), 0.5);
  border-radius: 3px;
}
/* EXPANSION PANELS */

.detalheEstrutura {
  .v-expansion-panel-header {
    padding: 12px 8px;
    min-height: auto;
    font-weight: 300;
    font-size: 18px;
    color: black;
  }
  .v-expansion-panel-content__wrap {
    padding: 8px;
    font-weight: 300;
    font-size: 16px;
  }
}
</style>