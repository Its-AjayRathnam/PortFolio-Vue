<template>
    <v-app>
      <!-- App Bar -->
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
      </v-app-bar>
  
      <!-- Navigation Drawer -->
      <v-navigation-drawer app v-model="drawer" clipped>
        <!-- Your navigation links here -->
        <!-- Example: v-list, v-list-item, v-icon, etc. -->
      </v-navigation-drawer>
  
      <!-- Main Content -->
      <v-main>
        <!-- Your page content here -->
        <!-- Example: router-view, other components, etc. -->
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false, // Control the drawer state
      };
    },
  };
  </script>
  