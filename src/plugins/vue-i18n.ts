import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import messages from '@/i18n';
import appModule from '@/store/App/index';

const i18n = new VueI18n({
  // @ts-ignore
  locale: appModule.state.selectedLanguage,
  // @ts-ignore
  fallbackLocale: appModule.state.selectedLanguage,
  messages
});
export default i18n;
// import Vue from 'vue';
// import VueI18n from 'vue-i18n';

// Vue.use(VueI18n);

// import VueI18n from 'vue-i18n';
// import messages from 'src/i18n';

// // @ts-ignore
// export default ({ app, Vue }) => {
//   Vue.use(VueI18n);
//   app.i18n = new VueI18n({
//     locale: 'en-us',
//     fallbackLocale: 'en-us',
//     messages
//   });
// };
