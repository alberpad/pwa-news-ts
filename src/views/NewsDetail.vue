<template>
  <q-page padding>
    <q-btn class="fabR fixed" round color="secondary" icon="arrow_back" @click.native="$router.back()"></q-btn>
    <new-detail :single-new="$store.state.newsModule.singleNew" />
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewDetail from '@/components/News/NewDetail.vue';

@Component({
  components: {
    NewDetail
  }
})
export default class NewsDetailView extends Vue {

}

</script>