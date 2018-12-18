<template>
  <q-page padding>
    <login-form @onLogin="loginEvent"/>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { ILogin } from '@/store/Auth/types';
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

  private async loginEvent(loginUser: ILogin) {
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
  }
}
</script>

