<template>
  <div class="quasar-fw">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloQuasar msg="Ejemplo con Quasar 2"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloQuasar from '@/components/HelloQuasar.vue';

@Component({
  components: {
    HelloQuasar
  }
})
export default class QuasarFw extends Vue {}
</script>
