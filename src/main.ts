import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import './registerServiceWorker';

// Plugins
import '@/plugins/vue-axios';
import '@/plugins/vuelidate';
import i18n from '@/plugins/vue-i18n';
// End Plugins

// Quasar
import './styles/quasar.styl';
import 'quasar-extras/animate';
import 'quasar-extras/roboto-font';
import 'quasar-extras/material-icons';
import {
  Quasar,
  QBtn,
  QLayout,
  QLayoutHeader,
  QLayoutDrawer,
  QPage,
  QPageContainer,
  QToolbar,
  QToolbarTitle,
  QList,
  QListHeader,
  QItemSeparator,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QLayoutFooter,
  QPageSticky,
  QField,
  QInput,
  QTabs,
  QRouteTab,
  QIcon,
  QJumbotron,
  Notify,
  Loading,
  QCard,
  QCardMain,
  QCardMedia,
  QCardTitle,
  QCardSeparator,
  QCardActions,
  QInfiniteScroll,
  QSpinner
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QBtn,
    QLayout,
    QLayoutHeader,
    QLayoutDrawer,
    QPage,
    QPageContainer,
    QToolbar,
    QToolbarTitle,
    QList,
    QListHeader,
    QItemSeparator,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QLayoutFooter,
    QPageSticky,
    QField,
    QInput,
    QTabs,
    QRouteTab,
    QIcon,
    QJumbotron,
    QCard,
    QCardMain,
    QCardMedia,
    QCardTitle,
    QCardSeparator,
    QCardActions,
    QInfiniteScroll,
    QSpinner
  },
  directives: {},
  plugins: { Notify, Loading }
});
// End Quasar

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
