<template>
  <q-page padding>
    <register-form @onRegister="registerEvent"/>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { IUser } from '@/store/Auth/types';
import RegisterForm from '@/components/RegisterForm.vue';
const namespace: string = 'authModule';

@Component({
  components: {
    RegisterForm
  }
})
export default class LoginPage extends Vue {
  @Action('register', { namespace })
  private register!: Function;
  @State('error', { namespace })
  private error!: boolean;
  @State('errorMessage', { namespace })
  private errorMessage!: string;
  @State('message', { namespace })
  private message!: string;

  private async registerEvent(registerUser: IUser) {
    Vue.prototype.$q.loading.show();
    setTimeout(async () => {
      //const { data } = await this.login(user);
      this.register(registerUser).then(() => {
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