<template>
  <v-responsive>
    <v-layout class="rounded rounded-md bg-white">
      <v-app class="hero" ref="neonCursorContainer">
        <div class=" h-screen cursor__wrapper ">
          <div>
            <Skills />
          </div>
          <div class="d-flex align-center justify-space-evenly mytitle">
            <v-avatar class="myHeading" :size="28">
              <tabler.IconHome />
            </v-avatar>
            <a class="align-center myHeading py-3" hover @click="handleClick('Home')">Home</a>
            <a class="align-center myHeading py-3" href="#about"> About</a>
            <p class="align-center myHeading"> Skills</p>
            <p class="align-center myHeading"> Portfolio</p>
            <p class="align-center myHeading"> Contact</p>
            <div class="toggles align-center">
              <v-switch class="align-center mt-5 justify-center" v-model="brightness" color="red" @change="toggleTheme"
                :true-icon="tabler.IconSunHigh" :base-color="black" :false-icon="tabler.IconMoon" inset></v-switch>
            </div>
            <span class="shape-blob"></span>
            <span class="shape-blob one"></span>
            <span class="shape-blob two"></span>
            <!-- <div class="align-center"><v-icon hover>
              <tabler.IconSun />
            </v-icon></div> -->
          </div>
          <div class="d-flex justify-start position-absolute px-13 py-3" style="height:400px; width:400px;">
            <span class="d-flex border-60 pborder" style="width: 350px; height: 350px;">
              <span class="d-flex  border-60 pborder2 profile-img" style="width: 350px; height: 350px;"></span>
            </span>
          </div>

          <div class="d-flex justify-center align-center pt-12">
            <v-card class="d-flex align-center justify-center" color="whitesmoke" height="300" width="400"
              variant="tonal" title="Ajay Rathnam">
              <v-card-text>
                I'm a software developer<br> with knowledge of web development and RPA bots development
              </v-card-text>
            </v-card>

          </div>

          <div class=" d-flex justify-end px-10 py-3">
            <v-card class="rounded " color="Red" variant="tonal" elevation="10" width="200" height="200"
              title="Education">
              <div class="d-flex justify-center">
                <v-card-item>
                  <li>SSLC - <strong>96.6%</strong></li>
                  <li>HSC - <strong>64%</strong></li>
                  <li>BSC - <strong>7.8 CGPA</strong></li>
                  <li>MCA - <strong>90%</strong></li>
                </v-card-item>
              </div>
            </v-card>
          </div>

        </div>
        <div style="height: 100vh;" id="about">
          <h1>About</h1>
        </div>
        <span class="cursor"></span>
        <span class="cursor-trail"></span>

      </v-app>
    </v-layout>
  </v-responsive>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { ref, onMounted, onUnmounted } from 'vue';
import { tabler } from './components/Tabler/tabler-icons'
//import { Skills } from './components/Skills/Skills.vue'
const customCursor = ref(null);
let toggleValue = true;
function toggleClick(){
 return toggleValue= true
}
  

// Attach mousemove event listener to track cursor position

onMounted(() => {
// Attach mousemove event listener to track cursor position
//document.addEventListener('mousemove', updateCursorPosition);
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
  document.querySelector('.cursor-trail').style.color = brightness.value ? 'black' : 'red';
  document.querySelector('myHeading').style.color = brightness.value ? 'black' : 'white';
  console.log('brightness', brightness.value)
}
function handleClick(page){
this.$router.push('/Home')
  // alert(`You clicked - ${page} `);
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
    document.querySelector('.cursor').style.backgroundColor = brightness.value ?  'black' : 'red';
  document.querySelector('.cursor-trail').style.border = brightness.value ? '2px solid black' : ' 2px solid red';
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
  //color: red;
  
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
.ppimage{

  width: 100%;
  height: 100%;
  background-size: cover;

}
.pborder{
  border: 4px solid #F44336;
  border-radius: 70% 30% 69% 31% / 29% 54% 46% 71%;
}
.pborder2{
  border: 4px solid white;
  border-radius: 70% 30% 69% 31% / 29% 54% 46% 71%;
}
.cursor {
  //background-color: whitesmoke;
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
    //border: 2px solid #c52104;
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

.shape-blob {
 pointer-events: none;
	background:rgb(234, 62, 62);
	height: 200px;
	width: 200px;
	border-radius: 30% 50% 20% 40%;
  	animation: 
		transform 20s ease-in-out infinite both alternate,
		movement_one 40s ease-in-out infinite both;
	opacity:.7;
	position: absolute;
	left: 70%;
	top: 50%;
}
.shape-blob.one{
	height: 500px;
	width: 500px;
	left: -200px;
	top: -150px;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.two{
	height: 350px;
	width: 350px;
	left: 500px;
	top: -150px;
	transform: rotate(-180deg);
	animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

@keyframes transform
{
    0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
   80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 
}


@keyframes movement_one
{
    0%,
  100% { transform: none; }
   50% { transform: translate(50%, 20%) rotateY(10deg) scale(1.2); }
}

@keyframes movement_two
{
    0%,
  500% { transform: none; }
   50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.2);}
}

.profile-img{
  background-image: url('./assets/ProfilePic/PP.jpeg');
  background-size: cover;
  background-position: center;
}
.cursor__wrapper{
background: #200122;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6f0000, #200122);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6f0000, #200122);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>