
<template>
  <v-layout class="rounded rounded-md bg-white">
    <v-navigation-drawer class="bg-white">
      <v-list>
        <v-list-item title="Navigation items"></v-list-item>
      </v-list>
      </v-navigation-drawer>
    <v-app-bar title="Ajay Rathnam" class="bg-white font-bold"
    color="white">
  <div id="navv" class="float-left"> 
   
    <v-btn class="rounded-circle d-inline-block" @click="toggleTheme"
    v-if="brightness"><tabler.IconSun class="rounded-circle"/></v-btn>
    <v-btn class="rounded-circle d-inline-block" @click="toggleTheme" v-else ><v-icon><tabler.IconMoon/></v-icon></v-btn>
  </div>
    </v-app-bar>
    
    <v-main class="d-flex justify-center align-center bg-amber">
      
  <router-view></router-view>
    </v-main>
  </v-layout>
  </template>
  
  <script setup>
  import { useTheme } from 'vuetify'
  import { tabler } from './components/Tabler/tabler-icons'
  const theme = useTheme()
  let brightness = true;
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    brightness = !brightness
    console.log('brightness', brightness)
  }
  </script>