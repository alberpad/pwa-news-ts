<template>
  <div>
    <q-field icon="perm_identity" :helper="$t('email_help')">
      <q-input
        v-model="login.email"
        :float-label="$t('email')"
        @blur="$v.login.email.$touch"
        @keyup.enter="submit"
        :error="$v.login.email.$error"
      />
    </q-field>

    <q-field icon="enhanced_encryption" :helper="$t('password_help')">
      <q-input
        type="password"
        v-model="login.password"
        :float-label="$t('password')"
        @blur="$v.login.password.$touch"
        @keyup.enter="submit"
        :error="$v.login.password.$error"
      />
    </q-field>
    <q-btn
      class="q-mt-lg full-width"
      color="secondary"
      icon-right="send"
      :label="$t('login_button')"
      @click.native="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ILogin } from '@/store/Auth/types';
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

@Component({
  mixins: [validationMixin],
  validations: {
    login: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  }
})
export default class LoginForm extends Vue {
  private login: ILogin = {
    email: '',
    password: ''
  };
  private submit(): void {
    this.$v.login.$touch();
    if (this.$v.login.$error) {
      Vue.prototype.$q.notify({
        message: 'Email y Password requeridos',
        position: 'center',
        type: 'negative',
        timeout: 300
      });
    } else {
      Vue.prototype.$q.notify({
        message: 'Validando usuario',
        position: 'center',
        type: 'positive',
        timeout: 300
      });
      this.$emit('onLogin', this.login);
    }
  }
}
</script>
