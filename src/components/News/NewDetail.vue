<template>
  <q-card inline class="q-ma-sm">
    <q-card-media>
      <img :src="singleNew.image">
    </q-card-media>
    <q-card-title>
      {{singleNew.title}}
      <span slot="subtitle">{{singleNew.date}} {{singleNew.time}}</span>
    </q-card-title>
    <q-card-main>{{singleNew.description}}</q-card-main>
  </q-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { INew } from '@/store/News/types';

@Component({})
export default class NewDetail extends Vue {
  @Prop({ type: Object, required: true })
  singleNew!: INew;
}
</script>