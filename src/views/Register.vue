<template>
  <q-page padding>
    <register-form @onRegister="registerEvent"/>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
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
  @State('isOnline', { namespace: 'appModule' })
  private isOnline!: boolean;
  @Watch('isOnline')
  private onIsOnlineChanged(val: boolean) {
    if (!val) {
      this.$router.push('/login');
    }
  }

  // Este control de flujo está implementado en el router
  // En el curso se implementó aquí de esta forma
  // private mounted() {
  //   if ( !this.isOnline ) {
  //     this.$router.push('/login');
  //   }
  // }

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