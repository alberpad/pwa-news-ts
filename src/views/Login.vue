<template>
  <q-page padding>
    <login-form @onLogin="loginEvent"/>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { ILogin, IUser } from '@/store/Auth/types';
import LoginForm from '@/components/LoginForm.vue';
const namespace: string = 'authModule';

@Component({
  components: {
    LoginForm
  }
})
export default class LoginPage extends Vue {
  @Action('login', { namespace })
  private login!: Function;
  @State('error', { namespace })
  private error!: boolean;
  @State('errorMessage', { namespace })
  private errorMessage!: string;
  @State('message', { namespace })
  private message!: string;
  @Action('allNews', { namespace: 'newsModule' })
  private allNews!: Function;
  @Mutation('setOfflineNews', { namespace: 'newsModule' })
  private setOfflineNews!: Function;
  @State('isOnline', { namespace: 'appModule' })
  private isOnline!: boolean;
  @State('user', { namespace })
  private user!: IUser;
  @Mutation('setIsLogged', { namespace })
  private setIsLogged!: Function;

  private async loginEvent(loginUser: ILogin) {
    if (this.isOnline) {
      Vue.prototype.$q.loading.show();

      setTimeout(async () => {
        //const { data } = await this.login(user);
        this.login(loginUser).then(() => {
          if (!this.error) {
            Vue.prototype.$q.notify({
              type: 'positive',
              message: this.message,
              position: 'center',
              timeout: 500
            });
            this.allNews();
            this.$router.push('/');
          } else {
            Vue.prototype.$q.notify({
              type: 'negative',
              message: this.errorMessage,
              position: 'center',
              timeout: 500
            });
          }
        });

        Vue.prototype.$q.loading.hide();
      }, 2000);
    } else {
      setTimeout(() => {
        if (this.user) {
          Vue.prototype.$q.loading.show();

          if (loginUser.email === this.user.email && loginUser.password === this.user.password) {
            this.setIsLogged(true);
            Vue.prototype.$q.notify({
              type: 'positive',
              message: this.$t('login_offline_success'),
              position: 'center',
              timeout: 500
            });
            Vue.prototype.$q.loading.hide();
            this.$router.push('/');
          } else {
            Vue.prototype.$q.notify({
              type: 'negative',
              message: this.$t('login_error'),
              position: 'center',
              timeout: 500
            });
          }
          Vue.prototype.$q.loading.hide();
        } else {
          Vue.prototype.$q.notify({
            type: 'negative',
            message: 'La primera vez hay que acceder con conexión',
            position: 'center',
            timeout: 500
          });
        }
      }, 2000);
    }
  }
}
</script>

