<template>
  <q-item class="dark">
    <q-item-side>
      <q-item-tile avatar>
        <img :src="singleNew.image">
      </q-item-tile>
    </q-item-side>
    <q-item-main :label="title"/>
    <q-item-side right>
      <q-item-tile icon="forward" color="white" @click.native="$emit('onForward')"></q-item-tile>
    </q-item-side>
  </q-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { INew } from '@/store/News/types';

@Component
export default class NewItem extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  singleNew!: INew;

  get title() {
    return `${this.singleNew.title.substr(0, 30)}...`;
  }
}
</script>

