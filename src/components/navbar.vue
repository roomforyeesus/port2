<template>
  <v-card
    flat
    tile
    class="d-flex flex-column"
    style="height: 100vh"
  >
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://i.ibb.co/ZcPrKVC/not-lawyer-morty-headshot-sm.jpg"
          title="Hanlei Liang"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="tab.route"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Projects" value="projects"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="About Me" value="about"></v-list-item>
        </v-list>

        <v-divider></v-divider>

      </v-navigation-drawer>
      <v-main style="height: 500px"></v-main>
    </v-layout>
  </v-card>
</template>
<script lang="ts">

export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'Projects', icon: 'mdi-folder' },
          { title: 'About Me', icon: 'mdi-account' },
        ],
        rail: true,
      }
    },
  }
</script>