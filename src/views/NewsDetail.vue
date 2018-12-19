<template>
  <q-page padding>
    <q-btn
      class="fabR fixed"
      round
      color="secondary"
      icon="arrow_back"
      @click.native="$router.back()"
    ></q-btn>
    <new-detail :single-new="$store.state.newsModule.singleNew"/>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewDetail from '@/components/News/NewDetail.vue';
import { Route } from 'vue-router';
import { State } from 'vuex-class';

@Component({
  components: {
    NewDetail
  }
})
export default class NewsDetailView extends Vue {
  @State('isLogged', { namespace: 'authModule' })
  private isLogged!: boolean;
}
</script>