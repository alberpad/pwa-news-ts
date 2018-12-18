<template>
  <div class="hello-quasar">
    <h1>{{msg}}</h1>

    <q-layout view="hHr LpR lFf">
      <!-- Header -->
      <q-layout-header>
        <!-- First row of header is a QToolbar -->
        <q-toolbar>
          <!-- showLeft is a model attached to left side drawer below -->
          <q-btn flat round dense @click="showLeft = !showLeft" icon="menu"/>

          <q-toolbar-title>
            Layout Header
            <span slot="subtitle">Optional subtitle</span>
          </q-toolbar-title>

          <!-- showRight is a model attached to right side drawer below -->
          <q-btn flat round dense @click="showRight = !showRight" icon="menu"/>
        </q-toolbar>

        <!-- Second row of header is a QTabs -->
        <q-tabs>
          <q-route-tab
            slot="title"
            icon="view_quilt"
            to="/test-layout/about"
            replace
            hide="icon"
            label="About"
          />
          <q-route-tab
            slot="title"
            icon="view_day"
            to="/test-layout/toolbar"
            replace
            hide="icon"
            label="Toolbar"
          />
          <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs"/>
          <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer"/>
        </q-tabs>
      </q-layout-header>

      <!-- Left Side Drawer -->
      <q-layout-drawer side="left" v-model="showLeft">
        <q-list no-border link inset-separator>
          <q-list-header>Essential Links</q-list-header>
          <q-item to="/">
            <q-item-side icon="school"/>
            <q-item-main label="Home" sublabel="/"/>
          </q-item>
          <q-item to="/about">
            <q-item-side icon="record_voice_over"/>
            <q-item-main label="About" sublabel="/about"/>
          </q-item>
          <q-item to="/login">
            <q-item-side icon="chat"/>
            <q-item-main label="Login" sublabel="/login"/>
          </q-item>
          <q-item to="/twitter">
            <q-item-side icon="rss feed"/>
            <q-item-main label="Twitter" sublabel="@quasarframework"/>
          </q-item>
        </q-list>
      </q-layout-drawer>

      <!-- Right Side Panel -->
      <q-layout-drawer side="right" v-model="showRight">Right Side of Layout</q-layout-drawer>

      <!-- sub-routes get injected here: -->
      <q-page-container>
        <router-view/>
      </q-page-container>

      <!-- Footer -->
      <q-layout-footer>
        <q-toolbar-title>Layout Footer</q-toolbar-title>
      </q-layout-footer>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// @ts-ignore
@Component
export default class HelloQuasar extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
