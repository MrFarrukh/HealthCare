<template>
  <v-app>
      <v-navigation-drawer app>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
             HEALTHCARE
          </v-list-item-title>
          <v-list-item-subtitle>
            hospital
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        
      </v-app-bar>

      <v-main>

      <v-container fluid>

      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    items: [
          { title: 'Home', icon: 'mdi-home', link:"/"},
          { title: 'Doctors', icon: 'mdi-doctor', link:"/doctors"},
          { title: 'Pateints', icon: 'mdi-medical-bag', link:"/bemors"}, 
          { title: 'Rooms', icon: 'mdi-home', link:"/rooms"}, 
          { title: 'Part', icon: 'mdi-home', link:"/part"}, 
        ],
        right: null,
  }),
};
</script>
