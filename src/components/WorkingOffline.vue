<template>
  <div
    v-if="!isOnline"
    class="q-pa-sm bg-negative text-white round-borders row flex-center"
  >{{$t('working_offline')}}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class WorkingOffline extends Vue {
  @State('isOnline', { namespace: 'appModule' })
  private isOnline!: boolean;
}
</script>
