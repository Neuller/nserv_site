import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify";
import Destaque from "./components/Destaque.vue";
import FormularioContato from "./components/FormularioContato.vue";
import VueResource from "vue-resource"
import TitleH2 from "./components/genericos/TitleH2.vue"
import Numeros from "./components/Numeros.vue"
import Visao from "./components/Visao.vue"
import Missao from "./components/Missao.vue"
import Valores from "./components/Valores.vue"
import Estrutura from "./components/Estrutura.vue"
import Localizacao from "./components/Localizacao.vue"
import TrabalheConosco from "./components/TrabalheConosco.vue"
import { store } from "./store/mainStore"
import Vuex from "vuex";
import VueTheMask from "vue-the-mask";
import Desenvolvedor from "./components/vagas/Desenvolvedor.vue";
import DesenvolvedorEstagio from "./components/vagas/DesenvolvedorEstagio.vue";
import SuporteEstagio from "./components/vagas/SuporteEstagio.vue";
import DesignerEstagio from "./components/vagas/DesignerEstagio.vue";
import Suporte from "./components/vagas/Suporte.vue";
import Designer from "./components/vagas/Designer.vue";
import Administrativo from "./components/vagas/Administrativo.vue";
import Computadores from "./components/vendas/Computadores.vue";
import AllInOne from "./components/vendas/AllInOne.vue";
import Processadores from "./components/vendas/Processadores.vue";
import PlacasMae from "./components/vendas/PlacasMae.vue";
import Memorias from "./components/vendas/Memorias.vue";
import DiscosRigidos from "./components/vendas/DiscosRigidos.vue";
import PlacasVideo from "./components/vendas/PlacasVideo.vue";
import Impressoras from "./components/vendas/Impressoras.vue";
import Monitores from "./components/vendas/Monitores.vue";
import TemplateCard from "./components/genericos/TemplateCard.vue"

// COMPONENTES
Vue.component("destaque", Destaque);
Vue.component("formularioContato", FormularioContato);
Vue.component("titleH2", TitleH2);
Vue.component("numeros", Numeros);
Vue.component("visao", Visao);
Vue.component("missao", Missao);
Vue.component("valores", Valores);
Vue.component("estrutura", Estrutura);
Vue.component("localizacao", Localizacao);
Vue.component("trabalheConosco", TrabalheConosco);
Vue.component("desenvolvedor", Desenvolvedor);
Vue.component("desenvolvedor-estagio", DesenvolvedorEstagio);
Vue.component("suporte", Suporte);
Vue.component("suporte-estagio", SuporteEstagio);
Vue.component("designer", Designer);
Vue.component("designer-estagio", DesignerEstagio);
Vue.component("administrativo", Administrativo);
Vue.component("computadores", Computadores);
Vue.component("allInOne", AllInOne);
Vue.component("processadores", Processadores);
Vue.component("placasMae", PlacasMae);
Vue.component("memorias", Memorias);
Vue.component("discosRigidos", DiscosRigidos);
Vue.component("placasVideo", PlacasVideo);
Vue.component("impressoras", Impressoras);
Vue.component("monitores", Monitores);
Vue.component("templateCard", TemplateCard);

Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueTheMask);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app")
