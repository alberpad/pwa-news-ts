<template>
  <div class="fixed-center text-center">
    <p>
      <img src="@/assets/sad.svg" style="width:30vw;max-width:150px;">
    </p>
    <p class="text-faded">{{$t('no_mobile')}}.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NoMobileDevice extends Vue {}
</script>