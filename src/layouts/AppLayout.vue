<template>
  <q-layout view="lHh Lpr lFf" v-if="isMobile">
    <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn
          v-if="isLogged"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu"></q-icon>
        </q-btn>

        <q-toolbar-title>
          {{appName}}
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
        <q-btn
          v-for="lang in languages"
          flat
          round
          :disable="lang.key !== selectedLanguage"
          :key="lang.key"
          dense
          icon="language"
          color="white"
          @click.native="setLanguage(lang.key)"
        >{{lang.label}}</q-btn>
      </q-toolbar>
      <working-offline/>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      v-if="isLogged"
    >
      <q-list no-border link inset-delimiter>
        <q-list-header>{{$t('welcome_user', {name: user.displayName})}}</q-list-header>

        <q-item @click.native="$router.push('/news')">
          <q-item-side icon="burst_mode"/>
          <q-item-main :label="$t('news')"/>
          <q-item-side right icon="subdirectory_arrow_right"/>
        </q-item>
        <q-item @click.native="logout">
          <q-item-side icon="account_circle"/>
          <q-item-main :label="$t('logout')"/>
          <q-item-side right icon="subdirectory_arrow_right"/>
        </q-item>

        <q-item @click.native="$router.push('/about')">
          <q-item-side icon="info"/>
          <q-item-main label="About"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
    <q-layout-footer>
      <q-tabs v-if="!isLogged">
        <q-route-tab default icon="home" to="/" name="home" exact slot="title"/>
        <q-route-tab icon="input" to="/login" name="login" exact slot="title"/>
        <q-route-tab
          v-if="isOnline"
          icon="account_box"
          to="/register"
          name="register"
          exact
          slot="title"
        />
      </q-tabs>
      <q-tabs v-else>
        <q-route-tab default icon="home" to="/" name="home" exact slot="title"/>
        <q-route-tab icon="burst_mode" to="/news" name="news" exact slot="title"/>
      </q-tabs>
    </q-layout-footer>
  </q-layout>
  <q-layout view="lHh Lpr lFf" v-else>
    <no-mobile-device/>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { openURL } from 'quasar';
import { State, Mutation } from 'vuex-class';
import { IArrayLanguages } from '@/store/App/types';
import { mapState, mapMutations } from 'vuex';
import WorkingOffline from '@/components/WorkingOffline.vue';
import NoMobileDevice from '@/components/NoMobileDevice.vue';

@Component({
  computed: {
    ...mapState('appModule', ['version', 'isOnline'])
  },
  methods: {
    ...mapMutations('appModule', ['setLanguage'])
  },
  components: {
    WorkingOffline,
    NoMobileDevice
  }
})
export default class AppLayout extends Vue {
  public leftDrawerOpen: boolean = Vue.prototype.$q.platform.is.desktop ? true : false;
  public isMobile: boolean = Vue.prototype.$q.platform.is.mobile ? true : false;
  private openURL: Function = openURL;
  @State('languages', { namespace: 'appModule' })
  private languages!: IArrayLanguages;
  @State('selectedLanguage', { namespace: 'appModule' })
  private selectedLanguage!: string;
  @Mutation('setIsOnline', { namespace: 'appModule' })
  private setIsOnline!: Function;
  @Mutation('unsetUser', { namespace: 'authModule' })
  private unsetUser!: Function;
  @State('appName')
  private appName!: string;
  @State('isLogged', { namespace: 'authModule' })
  private isLogged!: boolean;
  @State('user', { namespace: 'authModule' })
  private user!: boolean;

  @Watch('selectedLanguage')
  onLanguageChanged(val: string) {
    this.$i18n.locale = val;
  }
  mounted() {
    window.addEventListener('online', () => {
      this.setIsOnline(true);
    });
    window.addEventListener('offline', () => {
      this.setIsOnline(false);
    });
  }
  logout() {
    Vue.prototype.$q.loading.show();
    setTimeout(() => {
      this.unsetUser();
      this.$router.push('/login');
      Vue.prototype.$q.loading.hide();
    }, 2000);
  }
}
</script>

