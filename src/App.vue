<template>
  <v-responsive class="mx-auto">
    <v-layout class="rounded rounded-md bg-white">
      <v-app class="hero" ref="neonCursorContainer">
        <div class=" h-screen cursor__wrapper ">
          <span class="shape-blob"></span>
          <span class="shape-blob one"></span>
          <span class="shape-blob two"></span>
          <div class="d-flex align-center justify-space-evenly mytitle">
            <p class="align-center myHeading py-3" @click="ScrollUp">Home</p>
            <a class="align-center myHeading" href="#skills">Skills</a>
            <a class="align-center myHeading" href="#projects">Projects</a>
            <a class="align-center myHeading py-3" href="#about"> About</a>
            <a class="align-center myHeading" href="#contact"> Contact</a>
            <!-- <div class="toggles align-center">
              <v-switch class="align-center mt-5 justify-center" v-model="brightness" color="red" @change="toggleTheme"
              :true-icon="tabler.IconSunHigh" :base-color="black" :false-icon="tabler.IconMoon" inset></v-switch>
            </div> -->

            <!-- <div class="align-center"><v-icon hover>
              <tabler.IconSun />
            </v-icon></div> -->
          </div>
          <div class="d-flex justify-center align-center  ">
            <div class=" justify-center align-center d-flex">
              <div class="splashBg position-relative justify-center align-center d-flex">
                <img src="./assets/splashRed.jpg" alt="Ajay Rathnam" />
                <div class="magicpattern px-10 ms-10"></div>
              </div>
            </div>
            <div class=" myInfo d-flex justify-center align-center">
              <div class="d-flex align-center">
                <p class="text-h3"><span>Hey, I'm Ajay</span>
                <p class="d-inline-block py-7 text-h6">a
                  <span class="" style="color: tomato;">Software Programmer</span>,
                  <br>"With 2 years experience in creating .NET core APIs,<br> Experienced in optimizing database
                  queries, reducing query execution time by 40% and enhancing application performance."
                </p>
                </p>
              </div>

              <!-- </div> -->
              <!-- <v-card class="d-flex align-center justify-center" color="whitesmoke" height="300" width="400"
              variant="tonal" title="Ajay Rathnam" xs8>
              <v-card-text>
                I'm a software developer<br> with knowledge of web development and RPA bots development
              </v-card-text>
            </v-card> -->

            </div>
          </div>
          <!-- <div class="d-flex justify-start position-absolute px-13 py-3" style="height:300px; width:300px;">
            <span class="d-flex border-60 pborder" style="width: 300px; height: 300px;">
              <span class="d-flex  border-60 pborder2 magicpattern" ></span>
            </span>
          </div> -->



          <!-- <div class=" d-flex justify-end px-10 py-3">
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
          </div> -->

        </div>
        <div class="h-screen" id="skills">
          <h1 class="text-h3">Skills</h1>
          <div class="mx-11">
            <ul class="skillImages pt-12"
              style="list-style: none; display: grid; grid-auto-rows: 13.75rem; grid-template-columns: auto auto auto; padding: 10px">
              <li class="skillImg" style="animation-delay: 3500ms; width: 30em;">
                <div>
                  <v-img src="./assets/new-php-logo.svg" :hover="!showSkills" height="120" width="100"></v-img>
                  <v-card v-if="showSkills">
                    TEst
                  </v-card>
                </div>
              </li>
              <li class="skillImg" style="animation-delay: 1000ms; width: 25em;">
                <div>
                  <v-img src="./assets/html-5-svgrepo-com.svg" height="120" width="100"></v-img>
                </div>
              </li>
              <li class="skillImg" style="animation-delay: 1000ms;">
                <div>
                  <v-img src="./assets/dotnet-svgrepo-com.svg" class="rounded-circle" color="white" height="100"
                    width="100"></v-img>
                </div>
              </li>
              <li class="skillImg" style="animation-delay: 3000ms;">
                <div>
                  <v-img src="./assets/sql-database-generic-svgrepo-com.svg" height="100" width="100"></v-img>
                </div>
              </li>
              <li class="skillImg" style="animation-delay: 3000ms;">
                <div>
                  <v-img src="./assets/mongodb-svgrepo-com.svg" height="100" width="100" color="white"
                    class="rounded-circle"></v-img>
                </div>
              </li>
              <li class="skillImg" style="animation-delay: 2500ms;">
                <div>
                  <v-img src="./assets/postgresql-svgrepo-com.svg" height="100" width="100"></v-img>
                </div>
              </li>
              <li class="skillImg" style="animation-delay: 3000ms;">
                <div>
                  <v-img src="./assets/artificial-bot-intelligence-svgrepo-com.svg" color="white" width="100"
                    height="100" class="rounded-lg"></v-img>
                </div>
              </li>
              <li class="skillImg" style="animation-delay: 2200ms;">
                <div>
                  <v-img src="./assets/automation-engineering-hardware-2-svgrepo-com.svg" color="white" width="100"
                    height="80" class="rounded-pill"></v-img>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div style="height: 100vh;" id="projects">
          <h1>Projects</h1>
        </div>
        <div style="height: 100vh;" id="about">
          <h1>About</h1>
        </div>
        <div style="height: 100vh;" id="contact">
          <h1>Contact</h1>
          <div class="d-flex justify-center align-center">
            <v-card class="" style="width:600px; box-shadow: 1px 6px 39px 2px rgba(232,26,26,0.67);
-webkit-box-shadow: 1px 6px 39px 2px rgba(232,26,26,0.67);
-moz-box-shadow: 1px 6px 39px 2px rgba(232,26,26,0.67);" variant="outlined">
              <v-toolbar-title style="text-align: center;" class="py-3 text-h5">Get In Touch</v-toolbar-title>
              <v-text-field class="py-2" v-model="contact.name" required label="Name"
                :prepend-inner-icon="tabler.IconUser">
              </v-text-field>
              <v-text-field v-model="contact.email" required label="Email" :prepend-inner-icon="tabler.IconMail">
              </v-text-field>
              <v-text-field v-model="contact.phonenumber" label="Mobile Number (optional)"
                :prepend-inner-icon="tabler.IconPhone">
              </v-text-field>
              <v-textarea v-model="contact.message" label="Message" required :prepend-inner-icon="tabler.IconMessage">
              </v-textarea>
              <v-btn @click="submitMessage" class=" my-1 mx-10" style="align-content: center;">
                Submit
              </v-btn>
              <v-btn @click="clear" class=" my-1" style="align-content: center;">
                CLEAR
              </v-btn>
            </v-card>

          </div>
          <div class="d-flex align-center justify-center">
            <v-btn class="contactIcon mx-10 mt-3" :icon="tabler.IconBrandInstagram"></v-btn>
            <v-btn class="contactIcon mx-10 mt-3" :icon="tabler.IconBrandGithub"></v-btn>
            <v-btn class="contactIcon mx-10 mt-3" :icon="tabler.IconBrandGmail"></v-btn>
          </div>

        </div>

        <div class="d-flex justify-end align-end px-6 py-6">
          <v-btn @click="ScrollUp" :icon="tabler.IconArrowUp"></v-btn>
        </div>
        <span class="cursor"></span>
        <span class="cursor-trail"></span>

      </v-app>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
    >{{ snackbarText }}
    <template v-slot:actions>
      <i icon="close" class="mdi mdi-close" @click="snackbar=false"> </i>
</template>
  </v-snackbar>
  </v-responsive>
</template>

<script setup>
import { useTheme, useDisplay } from 'vuetify'
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { tabler } from './components/Tabler/tabler-icons'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
//import { Skills } from './components/Skills/Skills.vue'
const { mobile } = useDisplay();
const customCursor = ref(null);
let toggleValue = true;
function toggleClick() {
  return toggleValue = true
}

const scrollToElement = (elementId) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
// Attach mousemove event listener to track cursor position
const initialState = {
  name: '',
  email: '',
  phonenumber: '',
  message: ''
}
const contact = reactive({
  ...initialState,
})
const rules = {
  name: { required },
  email: { required, email },
  message: { required }
}
const v$ = useVuelidate({ rules, contact })
function clear() {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    contact[key] = value
  }
}
const submitMessage = async() => {

const formattedBody = `Name: ${contact.name}, Email: ${contact.email}, Number: ${contact.phonenumber}, Message: ${contact.message}`
const requestOptions ={
  method: 'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ text: formattedBody})
}
// fetch('https://chat.googleapis.com/v1/spaces/AAAA8X6dB-s/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ZPkHguSMXN3wprM-st-ukInosvXaw0cUOglwLm51QJg', requestOptions)
// .then((res)=>{
//   console.log("1 then",res);
// })
// .then((res)=>{
//   console.log("2 thes",res);
// })
// .catch((err)=>{
//   console.log("catch",err);
// })

try{


const response = await fetch('https://chat.googleapis.com/v1/spaces/AAAA8X6dB-s/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ZPkHguSMXN3wprM-st-ukInosvXaw0cUOglwLm51QJg', requestOptions);
  const data = await response.json();
  console.log(data);
  clear();
  showSuccess('Recieved successfully')
}
catch(err){
console.log("ty catch ",err);
showSuccess('Recieption failed')

}
}
const snackbar = ref(false)
const snackbarText = ref('')
const showSuccess = (msg)=>{
  snackbarText.value = msg;
  snackbar.value = true
}
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
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  document.querySelector('.cursor-trail').style.color = brightness.value ? 'black' : 'red';
  document.querySelector('myHeading').style.color = brightness.value ? 'black' : 'white';
  console.log('brightness', brightness.value)
}
function handleClick(page) {
  this.$router.push('/Home')
  // alert(`You clicked - ${page} `);
}
function ScrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
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
    document.querySelector('.cursor').style.backgroundColor = brightness.value ? 'black' : 'red';
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
<style>
@import "@/styles/splash.scss";
</style>
<style lang="scss">
.imgColumn {
  float: left;
  width: 33.33%;
  padding: 5px;
}

.mytitle {
  height: 90px;
  z-index: 2;
  

}

.myHeading {
  font-size: 18px;
  position: relative;
  text-decoration: solid;
  color: white;
  filter: drop-shadow(2px 3px 5px Red);
  
  //color: red;

}

.myHeading:hover {
  color: rgb(218, 32, 32);
  text-decoration: line-through;
  cursor: pointer;
}

.myInfo {
  z-index: 1;
}

.hero {
  background-image: url('../assets/appBg.jpg');
  background-size: cover;
  height: 100vh;
}

#skills {
  display: table;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.skillImages {
  max-width: 100vh;
  height: 100vh;
  list-style-type: none !important;
}

.ppimage {

  width: 100%;
  height: 100%;
  background-size: cover;

}

.pborder {
  border: 4px solid #F44336;
  border-radius: 70% 30% 69% 31% / 29% 54% 46% 71%;
}

.pborder2 {
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
  background: rgb(51, 51, 51);
  height: 200px;
  width: 200px;
  border-radius: 30% 50% 20% 40%;
  animation:
    transform 20s ease-in-out infinite both alternate,
    movement_one 40s ease-in-out infinite both;
  opacity: .7;
  position: absolute;
  left: 70%;
  top: 50%;
}

.shape-blob.one {
  height: 500px;
  width: 500px;
  left: -200px;
  top: -150px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

.shape-blob.two {
  height: 350px;
  width: 350px;
  left: 500px;
  top: -150px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

@keyframes transform {

  0%,
  100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }

  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }

  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }

  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }

  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
}


@keyframes movement_one {

  0%,
  100% {
    transform: none;
  }

  50% {
    transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
  }
}

@keyframes movement_two {

  0%,
  500% {
    transform: none;
  }

  50% {
    transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
  }
}

.profile-img {
  background-image: url('./assets/ProfilePic/PP.jpeg');
  background-size: cover;
  background-position: center;
}
</style>