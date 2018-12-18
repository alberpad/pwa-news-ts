<template>
  <div>
    <q-field icon="perm_identity" :helper="$t('display_name')">
      <q-input
        v-model="register.displayName"
        :float-label="$t('display_name')"
        @blur="$v.register.displayName.$touch"
        @keyup.enter="submit"
        :error="$v.register.displayName.$error"
      />
    </q-field>

    <q-field icon="perm_identity" :helper="$t('email_help')">
      <q-input
        v-model="register.email"
        :float-label="$t('email')"
        @blur="$v.register.email.$touch"
        @keyup.enter="submit"
        :error="$v.register.email.$error"
      />
    </q-field>

    <q-field icon="enhanced_encryption" :helper="$t('password_help')">
      <q-input
        type="password"
        v-model="register.password"
        :float-label="$t('password')"
        @blur="$v.register.password.$touch"
        @keyup.enter="submit"
        :error="$v.register.password.$error"
      />
    </q-field>
    <q-btn
      class="q-mt-lg full-width"
      color="secondary"
      icon-right="send"
      :label="$t('register_button')"
      @click.native="submit"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IUser } from '@/store/Auth/types';
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

@Component({
  mixins: [validationMixin],
  validations: {
    register: {
      displayName: { required, minLength: minLength(2) },
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  }
})
export default class RegisterForm extends Vue {
  private register: IUser = {
    id: undefined,
    displayName: '',
    email: '',
    password: ''
  };
  private submit(): void {
    this.$v.register.$touch();
    if (this.$v.register.$error) {
      Vue.prototype.$q.notify({
        message: 'Rellene correctamente todos los campos',
        position: 'center',
        type: 'negative',
        timeout: 300
      });
    } else {
      Vue.prototype.$q.notify({
        message: 'Registrando usuario',
        position: 'center',
        type: 'positive',
        timeout: 300
      });
      this.$emit('onRegister', this.register);
    }
  }
}
</script>
