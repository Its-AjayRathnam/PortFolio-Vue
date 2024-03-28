<template>
  <v-layout class="rounded rounded-md bg-white">
<v-app class="hero" ref="neonCursorContainer">
<div class=" h-screen ">
<div class="d-flex align-center justify-space-evenly mytitle">
  <v-avatar class="myHeading" color="red" :size="28"><tabler.IconHome/></v-avatar>
  <p class="align-center myHeading py-3" hover @click="handleClick('Home')"> Home</p>
  <p class="align-center myHeading py-3" > About</p>
  <p class="align-center myHeading" > Skills</p>
  <p class="align-center myHeading" > Portfolio</p>
  <p class="align-center myHeading" > Contact</p>
  <div class="toggles align-center">
<v-switch class="align-center mt-5 justify-center" 
    v-model="brightness"
    color="red"
    @change="toggleTheme"
    :label="brightness ? 'Light Mode' : 'Dark Mode'"
    inset
  ></v-switch>
  </div>
 

</div>

<div class=" d-flex justify-start ps-5">
  <v-card class="rounded " color="Red" variant="tonal" elevation="10" width="200" height="200" title="Education">
      <div class="d-flex justify-center"> <p>TEST DATA</p></div>
  </v-card>
</div>

</div>

<div class="custom-cursor" ref="customCursor"></div>
</v-app>
</v-layout>  
</template>

<script setup>
import { useTheme } from 'vuetify'
import{ref} from 'vue';
import { tabler } from './components/Tabler/tabler-icons'

const customCursor = ref(null);
let toggleValue = true;
function toggleClick(){
 return toggleValue= true
}
  

// Attach mousemove event listener to track cursor position

onMounted(() => {
// Attach mousemove event listener to track cursor position
document.addEventListener('mousemove', updateCursorPosition);
});

function updateCursorPosition(event) {
// Update the custom cursor position based on mouse coordinates
const x = event.clientX;
const y = event.clientY;
customCursor.value.style.transform = `translate(${x}px, ${y}px)`;
}

const theme = useTheme()
const brightness = ref(false);
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  console.log('brightness', brightness)
}
function handleClick(page){
  alert(`You clicked - ${page} `);
}
</script>

<style>
.mytitle{
  height: 90px;
  z-index: 2;
  
}
.myHeading{
  font-size: 18px;
  color: red;
  
}
.myHeading:hover{
  color: goldenrod;
  text-decoration: line-through;
  cursor: pointer;
}
.myHeading:hover + .custom-cursor {
background-color: grey;
}
.hero{
  background-image: url('../assets/appBg.jpg');
  background-size: cover;
  height: 100vh;
}
.custom-cursor {
position: fixed;
width: 20px;
height: 20px;
background-color:grey; /* Neon color (customize as needed) */
border-radius: 100%;
pointer-events:stroke;
mix-blend-mode:difference; /* Blend mode for creative effects */
z-index: 9999; /* Ensure it's above other elements */
transition: transform 0.2s ease; /* Add animation if desired */
}
</style>