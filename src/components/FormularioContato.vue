<template>
  <v-container class="FormularioContato" nogutters>
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="my-2 d-md-none">
        <v-card outlined v-on:click="mostrar()">
          <v-list class="py-0">
            <v-list-item class="text--grey text--darken-3">
              <v-list-item-avatar>
                <v-icon color="grey darken-3">mdi-view-list</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="body-2 text-uppercase"
                  >Formulário de Contato</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-form
          v-if="!isPequeno || aberto"
          ref="form"
          class="pa-5"
          v-model="valid"
        >
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="nome"
                label="Nome:*"
                :rules="[(v) => !!v || 'Esta informação é obrigatória.']"
                outlined
                dense
                required
              ></v-text-field>
              <v-text-field
                v-model="instituicao"
                label="Instituição:"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="telefone"
                label="Telefone:"
                type="text"
                v-mask="['(##) #####-####', '(##) ####-####']"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="E-mail:*"
                :rules="[(v) => !!v || 'Esta informação é obrigatória.']"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="assunto"
                label="Assunto:*"
                :rules="[(v) => !!v || 'Esta informação é obrigatória.']"
                outlined
                dense
                required
              ></v-text-field>
              <v-textarea
                v-model="mensagem"
                label="Mensagem:*"
                :rules="[(v) => !!v || 'Esta informação é obrigatória.']"
                outlined
                dense
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row justify="center"
            ><vue-recaptcha
              ref="recaptcha"
              sitekey="6LeGMygUAAAAABN8Hh1iWp9rOUG1MO3dVjFjcguT"
              @verify="valido"
              @expired="resposta = null"
              class="pb-5"
            ></vue-recaptcha
          ></v-row>

          <v-alert dense type="error" class="text-center" v-if="erro"
            >PREENCHA TODOS OS CAMPOS OBRIGATÓRIOS E VALIDE O CAPTCHA!</v-alert
          >
          <v-row justify="center">
            <v-col cols="12" sm="6">
              <v-btn block class="nserv white--text" v-on:click="enviar()"
                >Enviar Mensagem</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="4" lg="3">
        <v-card outlined>
          <v-list class="py-0">
            <v-list-item>
              <v-btn
                class="pa-0 grey--text text--darken-3"
                href="mailto:nserv@hotmail.com"
                target="_blank"
                text
                block
                x-small
              >
                <v-list-item-avatar>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="body-2"
                    >nserv@hotmail.com</v-list-item-title
                  >
                </v-list-item-content>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card outlined>
          <v-list class="py-0">
            <v-list-item>
              <v-btn
                class="pa-0 grey--text text--darken-3"
                href="tel:+5503133901115"
                target="_blank"
                text
                block
                x-small
              >
                <v-list-item-avatar>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="body-2"
                    >(31) 3390-1115</v-list-item-title
                  >
                </v-list-item-content>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col class cols="12" md="4" lg="3">
        <v-card outlined>
          <v-list class="py-0">
            <v-list-item>
              <v-btn
                class="pa-0 grey--text text--darken-3"
                @click.stop="dialogTrabalhe = true"
                text
                block
                x-small
              >
                <v-list-item-avatar>
                  <v-icon>mdi-account-plus</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="body-2 text-center"
                    >Trabalhe Conosco</v-list-item-title
                  >
                </v-list-item-content>
              </v-btn>

              <v-dialog class v-model="dialogTrabalhe" fullscreen>
                <v-card tile>
                  <v-toolbar
                    dark
                    color="nserv"
                    style="
                      height: 56px;
                      position: fixed;
                      z-index: 300;
                      width: 100%;
                    "
                  >
                    <v-toolbar-title>Trabalhe Conosco</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon dark @click="dialogTrabalhe = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <trabalheConosco></trabalheConosco>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn
                      color="nserv"
                      block
                      text
                      @click="dialogTrabalhe = false"
                      >Voltar</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-dialog
      persistent
      v-model="dialogo"
      v-if="dialogo"
      max-width="450"
      class="text-justify"
    >
      <v-card>
        <v-card-title class="text-center pa-5">Mensagem enviada com sucesso!</v-card-title>
        <v-card-subtitle>
          Em breve entraremos em contato com você.
        </v-card-subtitle>
      </v-card>

      <v-btn color="nserv white--text" @click="dialogo = false">Ok</v-btn>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import VueRecaptcha from "vue-recaptcha";
import { URL_EMAIL_SERVICE as URL } from "../constants";

@Component({
  name: "FormularioContato",

  components: {
    "vue-recaptcha": VueRecaptcha,
  },
})
export default class FormularioContato extends Vue {
  dialogTrabalhe: boolean = false;
  dialogTrabalheMD: boolean = false;
  nome: string = "";
  instituicao: string = "";
  telefone: any = "";
  email: string = "";
  select: any = null;
  assunto: string = "";
  mensagem: string = "";
  faleConosco: any = {};
  aberto: any = null;
  resposta: any = null;
  dialogo: boolean = false;
  erro: boolean = false;

  get form(): Vue & { validate: () => boolean; reset: () => boolean } {
    return this.$refs.form as Vue & {
      validate: () => boolean;
      reset: () => boolean;
    };
  }

  get recaptcha(): Vue & { reset: () => boolean } {
    return this.$refs.recaptcha as Vue & { reset: () => boolean };
  }

  get isPequeno() {
    if (
      this.$vuetify.breakpoint.name == "xs" ||
      this.$vuetify.breakpoint.name == "sm"
    ) {
      return true;
    } else {
      return false;
    }
  }

  mostrar() {
    if (
      this.$vuetify.breakpoint.name == "xs" ||
      this.$vuetify.breakpoint.name == "sm"
    ) {
      this.aberto = !this.aberto;
    }
  }

  valido(recaptchaToken: any) {
    this.resposta = recaptchaToken;
  }

  async enviar() {
    try {
      if (!this.form.validate() || this.resposta == null) {
        this.erro = true;
        return;
      }

      this.faleConosco = {
        nome: this.nome,
        instituicao: this.instituicao,
        telefone: this.telefone,
        email: this.email,
        assunto: this.assunto,
        mensagem: this.mensagem,
        gRecaptchaResponse: this.resposta,
      };

      // let result = await this.$http.post(URL + "ws/sitenserv/contato/", {
      //   faleConosco: this.faleConosco,
      // });

      this.dialogo = true;
      this.erro = false;
      this.form.reset();
      this.recaptcha.reset();
      this.resposta = null;
    } catch (error) {
      console.log("Error: " + error);
    }
  }
}
</script>

<style scoped>
</style>


