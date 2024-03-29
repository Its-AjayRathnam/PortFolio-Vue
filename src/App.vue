<template>
  <v-layout class="rounded rounded-md bg-white">
    <v-app class="hero" ref="neonCursorContainer">
      <div class=" h-screen cursor__wrapper ">
        <div class="d-flex align-center justify-space-evenly mytitle">
          <v-avatar class="myHeading" color="red" :size="28">
            <tabler.IconHome />
          </v-avatar>
          <p class="align-center myHeading py-3" hover @click="handleClick('Home')"> Home</p>
          <p class="align-center myHeading py-3"> About</p>
          <p class="align-center myHeading"> Skills</p>
          <p class="align-center myHeading"> Portfolio</p>
          <p class="align-center myHeading"> Contact</p>
          <div class="toggles align-center">
            <v-switch class="align-center mt-5 justify-center" v-model="brightness" color="red" @change="toggleTheme"
              :true-icon="tabler.IconSunHigh" :base-color="black" :false-icon="tabler.IconMoon" inset></v-switch>
          </div>
          <!-- <div class="align-center"><v-icon hover>
              <tabler.IconSun />
            </v-icon></div> -->
        </div>

        <div class=" d-flex justify-start ps-5">
          <v-card class="rounded " color="Red" variant="tonal" elevation="10" width="200" height="200"
            title="Education">
            <div class="d-flex justify-center">
              <p>TEST DATA</p>
            </div>
          </v-card>
        </div>

      </div>

      <span class="cursor"></span>
      <span class="cursor-trail"></span>

    </v-app>
  </v-layout>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { ref, onMounted, onUnmounted } from 'vue';
import { tabler } from './components/Tabler/tabler-icons'

const customCursor = ref(null);
let toggleValue = true;
function toggleClick(){
 return toggleValue= true
}
  

// Attach mousemove event listener to track cursor position

onMounted(() => {
// Attach mousemove event listener to track cursor position
// document.addEventListener('mousemove', updateCursorPosition);
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

const halfCursorSize = 12;
const halfTrailSize = 40;
const scaleMin = 0.35;
const scaleMax = 1.0;
let timeout;

const fancyCursor = (e) => {
  const finalX = e.pageX - halfCursorSize;
  const finalY = e.pageY - halfCursorSize;
  const finalTrailX = e.pageX - halfTrailSize;
  const finalTrailY = e.pageY - halfTrailSize;

  document.querySelector('.cursor').style.transform = `translate(${finalX}px, ${finalY}px) scale(${scaleMin})`;

  setTimeout(() => {
    document.querySelector('.cursor-trail').style.transform = `translate(${finalTrailX}px, ${finalTrailY}px) scale(${scaleMin})`;
  }, 100);

  if (timeout !== undefined) {
    window.clearTimeout(timeout);
  }

  timeout = window.setTimeout(() => {
    document.querySelector('.cursor').style.transform = `translate(${finalX}px, ${finalY}px) scale(${scaleMax})`;
    document.querySelector('.cursor-trail').style.transform = `translate(${finalTrailX}px, ${finalTrailY}px) scale(${scaleMax})`;
  }, 250);

  document.querySelector('.cursor').style.opacity = '1';
  document.querySelector('.cursor-trail').style.opacity = '1';
};

const cursorLoader = () => {
  const cursorWrapper = document.querySelector('.cursor__wrapper');
  if (cursorWrapper) {
    cursorWrapper.addEventListener('mousemove', fancyCursor);
    cursorWrapper.addEventListener('mouseleave', () => {
      document.querySelector('.cursor').style.opacity = '0';
      document.querySelector('.cursor-trail').style.opacity = '0';
    }, false);
    window.addEventListener('scroll', () => {
      document.querySelector('.cursor').style.opacity = '0';
      document.querySelector('.cursor-trail').style.opacity = '0';
    });
  }
};

onMounted(cursorLoader);
onUnmounted(() => {
  // Clean up any event listeners or other resources
});
</script>

<style lang="scss">
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
.hero{
  background-image: url('../assets/appBg.jpg');
  background-size: cover;
  height: 100vh;
}


.cursor {
  background-color: whitesmoke;
  width: 24px;
  height: 24px;
  transform-origin: center;
  top: 0;
  left: 0;
  position: absolute;
  mix-blend-mode: exclusion;
  pointer-events: none;
  will-change: transform;
  transition: transform linear .125s, opacity .125s ease-in .125s;
  border-radius: 100%;
  opacity: 0;
  z-index: 9999;

  &-trail {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid #c52104;
    top: 14px;
    left: 14px;
    position: absolute;
    mix-blend-mode: exclusion;
    pointer-events: none;
    will-change: transform;
    transition: transform linear .125s, opacity .125s ease-in .125s;
    border-radius: 100%;
    opacity: 0;
    z-index: 9999;
  }
}

.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: whitesmoke;
  /* background: #090b0d; */

  &>* {
    z-index: 1;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 0;
    height: 100%;
    border-left: 10px solid whitesmoke;
    pointer-events: none;
    z-index: 0;

  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: transparent;
    pointer-events: none;
    z-index: 0;
    border-bottom: 10px solid whitesmoke;
    transform: translateY(-50%);

    @media (max-width: 500px) {
      content: "This pen isn't for mobile ⛔️";
      font-family: 'IBM Plex Sans';
      line-height: 1.15;
      background: black;
      color: white;
      font-size: 2rem;
      text-align: center;
      padding: 2rem;
      width: 100vw;
      height: 100vh;
      transform: none;
      word-break: break-all;
      top: 0;
      left: 0;
      right: initial;
      z-index: 1000;
      max-width: fit-content;
    }
  }
}
</style>