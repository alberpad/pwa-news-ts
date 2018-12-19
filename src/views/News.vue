<template>
  <q-page>
    <q-infinite-scroll :handler="loadMore" ref="infiniteScroll">
      <q-list dark highlight v-if="arrayNews.length">
        <q-list-header class="bg-header">{{$t('news')}}</q-list-header>
        <new-item
          :single-new="singleNew"
          v-for="singleNew in arrayNews"
          :key="singleNew.id"
          @onForward="goNewsDetail(singleNew)"
        ></new-item>
      </q-list>
      <div slot="message" class="row justify-center">
        <div class="col-auto">
          <q-spinner :size="40" color="secondary"/>
        </div>
      </div>
    </q-infinite-scroll>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { mapActions, mapMutations, mapState } from 'vuex';
import { INew } from '@/store/News/types';
import NewItem from '@/components/News/NewItem.vue';
import { AxiosResponse } from 'axios';
import { Route } from 'vue-router';

@Component({
  components: {
    NewItem
  },
  computed: {
    ...mapState('newsModule', ['news', 'offlineNews', 'start', 'limit']),
    ...mapState('appModule', ['isOnline']),
    ...mapState('authModule', ['isLogged'])
  },
  methods: {
    ...mapMutations('newsModule', ['setNews', 'setSingleNew', 'setStart', 'setOfflineNews'])
  }
})
export default class News extends Vue {
  // From ...mapState in @Component
  private news!: INew[];
  private offlineNews!: INew[];
  private start!: number;
  private limit!: number;
  private isOnline!: boolean;
  @Action('paginatedNews', { namespace: 'newsModule' })
  private paginatedNews!: Function;
  // From ...mapMutations in @Component
  private setNews!: Function;
  private setSingleNew!: Function;
  private setStart!: Function;
  private setOfflineNews!: Function;
  private isLogged!: boolean;

  @Watch('isOnline')
  isOnlineChanged(val: boolean) {
    if (val) {
      // @ts-ignore
      this.$refs.infiniteScroll.resume();
    }
  }

  private loadMore(index: number, done: Function) {
    this.setStart(this.news.length);
    if (this.isOnline) {
      setTimeout(() => {
        this.paginatedNews().then((res: AxiosResponse) => {
          if (!res.data.length) {
            done(true);
          } else {
            done();
          }
        });
      }, 2000);
    } else {
      setTimeout(() => {
        done(true);
      }, 1000);
    }
  }

  async mounted() {
    console.log('News Mounted');
    this.setStart(0);
    // @ts-ignore
    this.$q.loading.show();
    setTimeout(async () => {
      this.paginatedNews().then(() => {
        if (this.news) {
          Vue.prototype.$q.notify({
            type: 'positive',
            message: 'Noticias obtenidas',
            position: 'center',
            timeout: 500
          });
        } else {
          Vue.prototype.$q.notify({
            type: 'negative',
            message: 'Error Obteniendo las noticias',
            position: 'center',
            timeout: 500
          });
        }
      });
      // @ts-ignore
      this.$q.loading.hide();
    }, 2000);
  }

  get arrayNews() {
    if (this.isOnline) {
      return this.news;
    }
    return this.offlineNews;
  }

  private goNewsDetail(singleNew: INew) {
    this.setSingleNew(singleNew);
    // this.$router.push({ name: 'news-detail', params: { id: singleNew.id } });
    this.$router.push(`news/${singleNew.id}`);
  }
}
</script>

<style lang="stylus">
.dark {
  background-color: grey;
  color: #fff;
}

.bg-header {
  background-color: #666666;
  color: #000000;
  text-align: center;
}

.q-list {
  padding: 0 !important;
}

.q-item {
  border-bottom: 1px solid white;
}
</style>

