<template>
  <v-responsive>
    <v-layout class="rounded rounded-md bg-white">
      <v-app class="hero" ref="neonCursorContainer">
        <div class=" h-screen cursor__wrapper ">
          <span class="shape-blob"></span>
            <span class="shape-blob one"></span>
            <span class="shape-blob two"></span>
            <div class="d-flex align-center justify-space-evenly mytitle">
              <p class="align-center myHeading py-3" @click="ScrollUp">Home</p>
              <a class="align-center myHeading" href="#skills">Skills</a>
              <a class="align-center myHeading"  href="#projects">Projects</a>
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
          <div class="d-flex justify-start align-start position-absolute">
            <div class="magicpattern" ></div>
          </div>
          <!-- <div class="d-flex justify-start position-absolute px-13 py-3" style="height:300px; width:300px;">
            <span class="d-flex border-60 pborder" style="width: 300px; height: 300px;">
              <span class="d-flex  border-60 pborder2 magicpattern" ></span>
            </span>
          </div> -->

          <div class=" myInfo pt-11 px-12">
            <div class="d-flex position-relative text-h3">
              <p><span >Hey, I'm Ajay</span></p>
            </div>
            <div class="d-flex position-relative pt-4 text-h6"><p class="text-left">a <span style="color: tomato;">Software Programmer</span>,<br>"With 2 years experience in creating .NET core APIs,<br> Experienced in optimizing database queries, reducing query execution time by 40% and enhancing application performance." </p></div>
            <!-- <v-card class="d-flex align-center justify-center" color="whitesmoke" height="300" width="400"
              variant="tonal" title="Ajay Rathnam" xs8>
              <v-card-text>
                I'm a software developer<br> with knowledge of web development and RPA bots development
              </v-card-text>
            </v-card> -->

          </div>

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
        <div style="height: 100vh;" id="skills">
          <h1>Skills</h1>
          <div>
            <v-table>
            <tbody>
              <tr>
                <td><v-img src="./assets/new-php-logo.svg" height="120" width="100"class="skillImages"></v-img></td>
                <td><v-img src="./assets/html-5-svgrepo-com.svg" height="120" width="100" class="skillImages"></v-img></td>
                <td>
                  <v-img src="./assets/dotnet-svgrepo-com.svg" color="white" height="100" width="100" class="skillImages rounded-circle"></v-img>
                </td>
              </tr>
              <tr>
                <td>
                  <v-img src="./assets/sql-database-generic-svgrepo-com.svg" height="100" width="100" class="skillImages"></v-img>
                </td>
                <td>
                  <v-img src="./assets/mongodb-svgrepo-com.svg" height="100" width="100" color="white" class="skillImages rounded-circle"></v-img>
                </td>
                <td>
                  <v-img src="./assets/postgresql-svgrepo-com.svg" height="100" width="100" class="skillImages"></v-img>
                </td>
              </tr>
              <tr>
                <td>
                  <v-img src="./assets/artificial-bot-intelligence-svgrepo-com.svg" color="white" width="100" height="100" class="skillImages rounded-lg"></v-img>
                </td>
                <td></td>
                <td>
                  <v-img src="./assets/automation-engineering-hardware-2-svgrepo-com.svg" color="white" width="100" height="80" class="skillImages rounded-pill"></v-img>
                </td>
              </tr>
            </tbody>
          </v-table>
          </div>
         
          
        </div>
        <div style="height: 100vh;" id="projects">
          <h1>Projects</h1>
        </div>
        <div style="height: 100vh;"  id="about">
          <h1>About</h1>
        </div>
        <div class="magicpattern d-flex justify-center align-center" >

          </div>
        <div class="d-flex justify-end align-end px-6 py-6">
          <v-btn @click="ScrollUp" :icon="tabler.IconArrowUp"></v-btn>
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
const scrollToElement = (elementId) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
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
function ScrollUp(){
  window.scrollTo({
    top:0,
    left:0,
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
.imgColumn{
  float: left;
  width: 33.33%;
  padding: 5px;
}
.mytitle{
  height: 90px;
  z-index: 2;
  
}
.myHeading{
  font-size: 18px;
  position: relative;
  text-decoration: solid;
  color: white;
  filter: drop-shadow(2px 3px 5px Red);
  //color: red;
  
}
.myHeading:hover{
  color: goldenrod;
  text-decoration: line-through;
  cursor: pointer;
}
.myInfo{
  margin: auto;
  top: 6%;
  left: 33%;
  position: absolute;
}
.hero{
  background-image: url('../assets/appBg.jpg');
  background-size: cover;
  height: 100vh;
}
#skills{
            display: table;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px; 
}
.skillImages{
  max-width: 100px; 
            height: auto;
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
.magicpattern:hover{
  width: 500px;
  height: 500px;
  filter: drop-shadow(10px 10px 10px tomato);
}
.magicpattern { 
  width: 450px;
  height: 450px;
  transition: height 2s, width 2s, filter 3s;
  filter: drop-shadow(3px 3px 3px Red);
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M746.5 573q-45.5 73-87 181.5T487.5 901q-130.5 38-141-122T175 559.5Q14 500 106.5 391T279 174q80-108 184.5 4T689 282.5q121-7.5 112 105T746.5 573Z%22%2F%3E%3C%2FclipPath%3E%3Cpattern id=%22b%22 patternUnits=%22userSpaceOnUse%22 width=%22100%25%22 height=%22100%25%22%3E%3Cimage href=%22data:image%2Fjpeg;base64%2C%2F9j%2F4AAQSkZJRgABAQAAAQABAAD%2F4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb%2F2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD%2F2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD%2FwAARCAH0ARkDASIAAhEBAxEB%2F8QAHQAAAgICAwEAAAAAAAAAAAAABgcFCAMEAAECCf%2FEAE4QAAIBAgUCBAQEBAMECAQDCQECAwQRAAUGEiEHMRMiQVEIFGFxMoGRoRUjQlIWscEkYtHwCRczVHKS4fFDU4KiGDRjJTVlc3STssLD%2F8QAHAEAAgIDAQEAAAAAAAAAAAAABAUDBgECBwAI%2F8QAOBEAAgICAAQDBQgCAQQDAQAAAQIAAwQRBRIhMRNBUQYiYXGBFCMykaGxwdHh8DMkNELxFVJyYv%2FaAAwDAQACEQMRAD8A+cUdQ3GC7SOfnLqlXY3AwDq1+cbdLO8TbgTiK+pbkKN2ly4LxW3hmSt9R0Qdz62dGvii0J1F+H09L83y+eDOMoyr5bhAYpAi2Rww7fhF%2FrfHy71XHTCslMFiNxw7%2FhAzOoqtSZ3SNvaP+FSMbehANv8APFeM1rDPUOSTYk4DxsV6hsneug+WpZuIcTwbEt+zIQbCHbZ2OY73r0B9JHTMvpjXJB5tj3IQTfGK%2FNgcMBKc7bO5w%2Fscdj6fbHnjgY9oL2PvjJmqnczRLcji18SVJEWYKBf0xowoSR3xP5NAjzIDxcjEFrcq7jzhNHj3BY5fhtyiY6vmmWNrCil5t9MKzWFJNBndeWUgmpk7%2FwDiOLifBP07l1hqisho6iCJqejeRxJ%2FUtjxivfWvT38P1hm9NGijwquVeO34jhLiZ7Pfysuh5GdI4j7M0Ui0UvuxERmHoG3qJeRTc48BD3BxIT020ncRcYwbUX2xY0O5y7JqNbkGYo42J7cYMtBwRLnVKZWAXxVvf74EUcbid2JnT1VJHmMCxk7mlUD9cSnRXUl4bemNkpa%2FYGX++MPp7pDJejGjM%2Fos5SaurIIwYt4NwUuTb0tj5918UEc7WYHnDd64aozeDUAyDMKqR1oqSFI4y5IQFAeB6YS1RP4jlicb4NIoX3e0O4%2FnVX011q3ORvqRrud6+Q3qexIoPlWwxIZbWywTI6XuDwMRKknkHE%2FpfKajNMzpqeKNm3yqDbn1wxDeZlT5jDnX+rM7TLsuySrnYxpTK6qewuMLN3eRiSe5wy+udAtDqqOmUWVKWIW9rAYWyob2tgvH0yBhIX2e83MrjleojVEJuwHb64O+o1VPPPR0wBCxUyL+2Cz4aOjeZ9XNZQZBl0G5lBlck2AUeuMvxH9PM10FraryKvjMb0pCWJ9MZS1WyhT5gbha4rCk2bHy89RUZNTqa6Jpiu0ML3x9Jc61v0MpPhHgo8vmo2zhaJE8FbeP4%2FqT62x816WJkcMX9cHMNXXyaQqA0r+EGsBg7K4emUULHsZnFs8PzI8+n8yKynO5qfUDGnXyTOQOMNGop8xnokE0tlIuAMKnSCZXJqbLlzmZoqI1UYqHXuse4bj+mLb9cI+jmWUmS0%2FTXMYaiaSC9QsUxkAFuCSTwT7YMyuWq+tFTe%2FPyGpauBMFqfnY9fy+piby3TtO7eLJ5iMTMNJHD5I0tbHWWSAqQMboU3Nxg0W8h6mMWrUr0E0pVAOMdwOTjurktIfpjXaS%2FbDGnMCQA0cxmR2A59caNTIQCFxsEG17Y1KhSb4aU8RLdBIcjEAXcj52JxgucZpsa%2Fm98Oashisp+TRqw6lXI+wP7YzRXvxjBGb+vrjahiLcj7Y+czN6epGpY74K51TWGow6AqcllNz2Fr4rvWkpVTI3dHZefvh5fCdWtlup9Qxg3M2TlVP1M0a%2FwD+2EdnJvmtYbHmeQ%2F%2FAHHHlHuE%2FH+IVa2n+g%2FczRdrnnGNjY++O3Nu2MTG5Nzj0FZpk3AdzjIklvXGsLkWHAx6Qn0OPTyufKb8dSQfpiUoK945FZSRziBQkd8bcEhUjm1vpjR0DDUZYeY1LhgZc34POolXpPNs7zilc2iymZWse11NjhH9QdTnOMwqqyWTe88ryMSfUknBT8MuYIuXa3DOP5GSSy8%2FQHCUrq953Ysx5wmowtZLHyHb6zpV3tWPsLduewKpPnpd6H6ma1TMHY7TjTMgva+O5GY9iceAQBcnnD5Bqc0yMg2uWMyKTie0apn1PlcJW+6riH38wxBJY+uLBfCl0ml19rWnlNHI8VEfmWdULW28jHr7Vx6jY3YSFA9jaQbMCOvlVNU9Uc6Ej3MTpECP91ALYXBDX98Mrr1l8uX9T8+E6FS1W5F%2FbC3aSx8oGDcY7pUn0EGt2raMzU8Zdgdpxcz4A+jWU9R9fn+MTokeXw%2FMhSoJfntzimkE738thhv9DOq+pOn2q6GtyTNJqOVpVjZ0axKk2IP0wS9YsqKzNDkHoevlGP8AGvo6h051fzahp542WFgo2iwAt2xXBPBjk9+cND4jNS5hn%2FUPMKzMKtp5Ztrl2NySRhTBgTbB+Ivh0qvwmuQ3M8fnw0db8z6Pa2pc7yiOJnceA6SDysrfbGr8SPUrNOofUXMs5zNlMs7BrIOALcAYVukopJ86o0iBJMq8D74KeqFBJT6gnqHjKnaoII+mJE5Eyg3mRJw5+znp17b+HpBXLIWq6yOBb3ZgMXM6ifCnVaA+Hmi11UZjE71aRzSxqLbA4uOfXFK6HMHpqhZU4IOH1rD4htfaw6NUGis0zqWeipHVFQgA7V7Akcm2Cco2u9fhnQB6zbEJG9a+O%2FT4RIOwgqSobkNgiqc6qKCppJwx2bRuwN0NN85XxRykJ4kgUs3YXPc4tP8AEF8Ouj+nPSLINY5fqlaytrFjWWE7bNuW90tzYYPyeJV0OiMN8x1GnDsc21vt+X079SOv0+sD9JVceZJHNEwIYfpgnZFWRl7WGEx0t1M9FXtl7ksv9PPbDbp6o1jNJGMLcy967teUs2FfVbhDf49yMruZ2F%2FXGFFu1rY9VFzO33x6Rdp5wbTaTqRqoJ1PRTj6Y0akcEAYkT2xpVCFsNcawhhJrKw1ZEiJx6Y1%2FwA8b1RD641fB+h%2FXFrxztJRcxNWkSrEKEn1OJ%2FJst+alWMDucQkLgHkYLdKZjTwVcZkFwGGPnrIZlrJXvDfZ6mi%2FKRLzoEy3%2FwudHtL1Ghc2zbMrR5xV2aCWGa0wSKVJAm3sQWhuQBcji4vikuoYSmb1vlZQaiQgEWIG44+q%2FwwZ10e1V8PtRkGTVdJQa9yeKpzCqZoCtRJCrkgq9rMu1lW17g829cfMjXqzVmdVmY1dS09RVTvNNK%2F4pHZiWY%2FUkk%2FnhdwzJcoUsOyTv5fCWf2m4VT9qvbGUqlZCgEa5h106+qt3BgLJcEm1xjwbEWsf1xszIq8A%2FnjA23nk4cTn7jl2Ji+wOO1tx6DHDbvjoHHpDuZxz3+2M0ZIPGMCt7HGaLv6Xx6Toesc%2FQeaWmyLqLUxn8Gl6jn6llGFOzE3JOLE%2FD5o2Ct6R9Qq6SRknrMtkgU27Ko3fucVwdjyDf%2FhiCmxLHfl7g6P5RplUXYyp4g1sAj6zjMSfW2O12g83xrlySQDxjgc3wYBqK2eb8LxqwLXI9sXW+AXrvpnpfqeoo85pPEjzWH5dbAEq3oefTFH4mO7t++GB0XpavM+pGRUMEjLvqlLWP9I5OM21i2vRnltCgg9jDj4p9S5RqDqjnlXlcEaK9ZI1l9OcJEyXbE9r6ZpdZ50TIzgV0wBJvcBjgcK+a%2FOCsdQiACQ22+I2zNiNiSLYItJxTz51RLCpY+On+eB6BC3OHV8OmjP8AE2vsno3QEPUpwfvgoHQJmaVLNoGR3WTK66LU8lTOhBMSD9sLpY33dsXu+ObpDk+kqmjzKikiWSSmXxFUjvbFHJWiSRgXtY4mw7zbUGYannTk0d73HT8KOhaTW3VvT+S18ipDNVL4hJH4RycPr4%2FenmgNF6jpYNOzp48tOGniDAlD6X++Kq9GNUVen9e5XX5dUvBLDLuV1axHGM3V3X+bav1jmdbmmYy1LtMfM7Ek2wO9RtzVffYRnVdyUb306jXqT5%2FSBh8FHOxSecNvTHTPV+o+nM+f5ZkVTPQ0zlpJUiZlX7kCwwnaepjEys3POPoR0r+K3pr0z+GGLST5G82aT00kIRYxtd3BG5mwdmZFtaqKhskyDGJ2SF3KHyQT0+YrEUKkOBb88TOs89zTMBTUVVXVEsFPHaON5Cyp9gTxgz6TdPcy66dU4NOZU8NM1Y7zM8n4UQck%2FvjL8RnSDMekOt5NLZlVRTusSyJLF2dT2NvT7YkTMrOQtTfi1uWWjDsXGcJZrfXl31I9YuNF74cykmQEsq8YefTivgrqWbxzaRQRY4z%2FAAXZT0kqtYZlL1UNG0MdN%2Fsq1j7YS9%2FNe%2FBNu18WA6KdF+j3UvqBrSsyLODDklBUeFRwU8gUG4uXBPdQe2A+JZiq7hlPQDrCKFqxcPmsJHL17dDvpofGV4qYUNa%2FPG7HJVCvZTid19lOXZDrPMskyqrFVT0dS8SSgg7gD34xDeGWcLbDjCHPWreohGO4f8Mw2OPLxFhe2NxIQGtbtj20aj0xY8StV0TDX2F0JCVNMxXtjU+Xb6%2FpiaqQLc40%2FwDnvi2Y91ATRlH4lUwulOUa1v8AXG5S1bRNdTY4jeD64yIx3Y+eSNxLRe1TAiWR+FDVVcvU+nokqXVZsurVcBuHVYHYg+48o%2FTCPz3MjV1Mjg33MThk%2FCnHJJ1QNSly1LllWRY25kj8H%2F8A64Ts8pck+npiNMdEBYDuf4EsmVxvJysdK7DsAa%2FUkfvMUshPscYSTjt2JPbHk3vicLK+zFjszo%2FW+OWx1jn0xtoSPc9iwPGNiFxuFxjWHIx7j583tjQjUkRuU7l3vh%2F6gaNqvhh1zogZTImoYIJKlasDymMr2v8Akf1xTKpZfEYqOL4bHQDPXpsu1pky33VuSSsh7+ZfT9GOE67bje+B6KPBLaHc7jbO4i+Wo5%2FLX7AfwJwsb8Y7BvjGWJ4x6F%2FTBoicsZsxeb1w4PhooKh+p+W16Qu8VIHkmZVuFWxHOFDTKSwFrHF%2FP+j%2FAOmuUZv0911rCfNKZKylp%2FDWnYjeV2k3+mNcgsKSEHUyehFY7btKRa1eN9WZxIgsrV0xH23nEIJVU3tfE3reONdT5oY7qhq5SATc%2FiOB4kAe+DavdQbgto5W1NuOsYWKkC3ths%2FD3rGs091FyaqgkN1qFOE4rAffBv0m3PrXL7G21i1%2FbjEjHakT1TEOI3PiL6359rrVOYU9fWNJHFMUUFrgAemELLM0j7ie+N3VtVJLqPMWZrk1D8n74h%2FEIxOvuKFEkts8RjqHXSWimzLW9FTxIXPmNvyxF6wSSn1NmUEo2stQ4I%2FPDT+EDP8Ap%2FkfUCqq9dxM4+Tb5Q2YgP69vW3bCt1%2FmFPmWtM5rKMHwZayUx377dxt+2I6mJyT6aH7zcuPCAHrIqJufvg5zj5ldN5eQWEe0WHp2wF5XTtU1McZIG5gLnF4OuHw%2FaQ0V8NWn9VUmexzZjKkLOl1Acutzttzxgq7IFJUMO5hWGQN9dEyrnS%2FqBqHQOrKPUGnK5qatpydrr7HuD9MbnVfqRqTqRqyfPtS1zVVXIFUsewAHAAxo9NNA6l15qMZXpnKp6+eNS7LEPwr7kngYw6t03mOndSVWVZtSyU9TA+ySKQWZSPQ4IragXcx1zAfpLHX9pfE+G%2Fr%2Fepu6UNXBS1U8aNtK+n2xL6Nz%2FU+VTVL5LmNZSmRSsngSsm4exsecWM6XUnw8Q%2FDnXy53PQf4lMEviGST%2FaRN%2FQEHe3bBL8JNf8AD9SdO88OuDk4zYySeN89Yu0VvKEv%2Fp64ifiorFh8LeiB85JlIKMcE8x0da9fiPhK46IzWqzLNGp6gPLNuJPBJODecAVLbVK2FiCPXE58O3VbpNoDqdqWrz2lEVFVswoKhoPE8NAx8tgCRcW5x511rPTOstbZvnWmoPBoJpSYl27b8fit6XwWc+xr+UIQuh1mvBr18c0t+cgU8zk4yGNjxbGGkqFYsQh743VeQ%2Fgiv+WDUy3B7y2tWCOgkfU0jkXt641PkTiUqzVbbkWxpbpvfDvHudk3uUfiq%2Ff9RKP49Dvxjz68DGxTwmQ298cnlPrUswAj8+C6BJ+qFdDILlspfaPr8xBhCSEhhbn2xZT4KtPV8nUWtzaNo0pYKFYZt17kyTxlQPzQnn2xXXOstqsnzWsyurRVqKOeSnl2sGAdGKtYjg8g8jHldWGgfP8AqNbsa2isGwa32%2FX+pHNxxbHknHt+ecYziWAGc%2FPHA2PIvjsevH649MT2MZEW5+t8Y1HIxtQxs5Fxe+I27yapDY2hG78N+nq3PtTZxTUXDpk1S97cdsKORGRiGUgjjnFpvgryVxq7M6qZVENRlzUjG%2FILken2B5wjOp+kZNJaxzjJmQhaatmSO%2FN03Haf0tgZcyuy3wQeoEfZXAcujHGS6+4dagOzkHuL47Dn2OO2jsb27Y6Cc9v3wYDuV0gjvM0UhB74enwtanzmj6hwZLR1sqQ19NPE8auQr+QkXHrzhEojdsM74fa%2F+GdVMlqmbaDIybvupGN2UuhA7zeqw1tsGBmpXmbPK9ag%2FwAxamUN9wxxDMTfkHBT1GplptcZ5EhBVa6WxH1Yn%2FXAw+Cl2RuDuST1npLGx98WC+D7plL1F15WqlLJLHllDJUuVNtota+K%2FJ2F8OH4bup+pem+sXk09XGnGZU70tRYA7kI7c4xYjOnKp6zahwlgaBOvKRKHWOb0sZJWOrkUE%2FfECOTbErqyqkrNSZlUubtJUyMT7knEXGCWA+uJ1Y60ZkjbbEYnRehjqc9rJ5BcU9K7fnbAZmMhfMalz%2FVK5%2FfFoPh3+H7PtQ9IdUdTaaifwqWKSNHv+IKPNYetsVhzCmkjrpkcch2%2FwA8R0Xiy1wPKEvQUQN6zLljP8zGAeS6j98ODqzn+cLk2TZPNmdRLTRQgpE0rFE49ATxgc6EdJ8%2F6sa+y7S2Q0vjTTPva5sqovck+2GN8U%2FTXNunOq6fTWaRbZoIFPBupB9QcSWXqblQ94TjVMeog78PvWPN+kup6jNMsy2GuWsg8KWKUkXANwQR2xB9UdbZnr%2FXGY6lzGJIp6yTeY4x5UHoBgl6BdHtW9Sc6qY9N5HNXCliLSsgAVL9rkm2IPXGlqnTWr67K83pXpqimmKSROLFSPTG9d1IvOvxaljox8h05T2%2FWY8ny7MTkclT4b7GuAbcHBDpDQGtMyyKrz7L8kr5aCG%2FiVCQOYxbvdgLYtJnnWDoNN8M0em8so6YZoKKOFKUU9pY5xa7lrdr35vjd6O%2FFp0u0f0Dm0bmmVy%2FxSmppoBEkIMdQWBsxbsO%2FN8B2Z2SQTXXvrqS5qmqkPyHYOtE+XqJUXQPTnU+v9VHINO0ZlqSrO5Zgqoo9ST2wQVuns%2F6Yaon0xqan8GoWzWDXVlPYg+uNTpr1jzrQGuKrU+Q0sD+OHWSCUeVkJva45Fsa+vtc6s6sarrNXZjSAGMKgWBCUiQdhf%2FAI4sdFV9lo8TQTX13K8jmq3dI3oxiZaY3gEiBefbEtAvr6YW+j9SyVEBgcEsptg7oa4MncWtiSynwW0xnW%2FZ8JxKlTOZq6xoSTge+ZHvjYz%2FADEKjC+BT+Jj+4%2Friz8PNQp96Uj2lxTVmlFMqgFBPfEtlEcLSKHYd%2FXER3PBxnp5jE4YG4++ORshIIlFw7lotDMNifQ74Lun9PW6E1lrHL88iglyX5AvSAjfMJHdQ3%2F0m1uLEm3tij3UAVWYalzPN61kNTmFXNVTFEVAZJHLNZVAAFyeAAMNL4VNW1idW8gygTN4NU0yOt+D%2FJcgfqBhNagzNqyslctcsx7ffAGNi2Y%2FUnuT%2FH%2FqdC49xbB4lj+Ii9dIANAcul0Rvz2QW2f%2FALa7ASEljsx5%2FLGFl+2PUjlib98Yyfrhio85zxmG5ywxwAepx1fvxjq5v7Y3kXNNhNgsScSFFLCrAn398RIP+eM0chUgfXEbLsQvGyPCcNL8f9H%2FAKl6d6XzLVGr9dQGamyfJnmiiVbl3uDYXsL2Btc4r710z3JtT6uzfUFFBsjr6yWeJG7ojMSqm3sLDEl0FklbpN1Oq0n2vS5crAX5tsk5%2FbCVzDNpqpt0kpPphJVhscpiD0U%2FXr8Z0272kxRw1truyxVXqeihN9h5Ek7JmhUyRhiFQAY193PA749sAxvuvfHFSMcs3GLAg8pzG5+ZiZ3ExuBa+HH8NelJNTdTsmo%2FBL7pxztuF+pwpYPlFYEs35Ytr8BGodN5X1lymTMqLxVjWSQhiDwqknj7DDCilSDs+RkVXKze%2FwBopPiW6eDQXVfPsohYvCKjxVYgj8Y3W%2FfChMLt2UnFsfjS6k6K6h6+q9QaapYkWfiwHPHH2xVmapYt5VAGNjV4ShSeupHcAG2JrLA1+2DvpLl71Gr6YKm4qjtx9sBke6Q8HnFovgv6Q1evtexqYLxrC+4epBGIbLBUpc+UzRUbW0JXPPqeSPOKwyLYmZz++NGI7XBAFwb4bnX7ptV6E1vmWWSptSOocID7XwqDCqGxkFzjZG5lDCSvW1Tcrd5aP4f%2FAIjdXaa6Y6m6b09TEuVT0skljHd1LCzWN+xxWitqBUVUs3fcxP74Y3S7KtultTZoVYiOl2XtxhXu+1iOcQ0oq2Ow85ObSwCkf5jb+H7rLnnRzW9FqXIBCZ1PhMsq3V0buDgq+J%2Fq1nHVDXCahzkxiWSFVVYxZVUdgMIzTdHU5hnNHS06lpJJkVQPe+GT1l0fm+ms1pYs1p5I3enVgHUg2P3xIfDFgJ7w%2FFdtbVevrHZ8GXxH0PRw55R1+TPW09cqS3jIDq6i1ufTCZ63dSp+pfUfOtXPTJTfPVDMsSm+xRwAT6m3riH6ZZbWV1RVx0qszeHfj0wP5hTPR5lNHU3DCQ3H541qrrXINnnLEtjGnxAuiehPwEMMryrNqzSktbFTStAgs0gU7R9zgoynoh1Kn6ey68j07UnJwhk8bjlP7gL3I+tsWN0X176M6Q+F3%2FC9dlqnNWoWgNKtNczTMD5y9rd+bk4W0XxhZxD0Um6eQadpw5pWo1q%2FENhEePw272+uIkzcp2IpUdDPZmzWCV6jp1PceomP4Qei+hupldnk+tKxyaEKsVMkvhlr8lye%2FGC%2FLeqvSXo7T6s6dR0713y1VURxPHGsi1IN7Bn+nbn2xVXSucZ9RRVddls1VCH4d4mZePYkYaPRj4epeqOlMx1ZVajWkIkkSGPw95Zl7lyTwL4Ks2bntvsJQ66ehgGFXyNsDoYv9P6wjoa+eVaeyTzMwUdgCe2GTQZ0ktOkiEecXwQ5T8OekKjpgmdwZ08mdOLo4lXwfE3W8O3%2FAK3wDan0dqLpv8oudT00kNUCEeBywDDuDcDnnB7ZdWS3Kp6y3cGzbuFhucgj9pzPq8lWIOBr5s+5xzMs1VoeWvfEH88P7cPcRmWvUrPHM9b8nn3EX6Y7HpjxfHpTzihyhRv%2FAAoHxOv+kYDYh6mYc%2F8A9PJhV5hFNSVUlLVKVmhdo5FPcMDYj9b4avwkEj4h9G2Uk%2FOSfl%2FJfAZ1cgSm6qaypkUqsOf5hGB7AVEgxsygKv1%2FiF+KfB5fj%2FEEWJvjGfc49NjGTxc41gu5zzEcX%2FXHLgH8vyx5JNu98dXx6YmVT9cZFaxvjXDbe2N7K8tqc0qUpqdeCRufnao9yceklavYwVBsmWM6L5dV5b8MHVXU8lAXjrp6PLoJVUseQ6yDj2MsRwmsg0Nn2pJZoKFYI5kbYkc0qxmRrE2UsQPT1I4v7YbeltbZlkHT9elGUQU9VlNRVyVNSlSwZ55maFgew2hTCLc9ibi%2FbbhylqCogpMxy2LLJGKs0cEJEW0FrvIwZStvpf17EYYcM4Wb3LuOhlhXBWmvWU3Ub6CKmr6R60pSyyUcC7SLk1MY47bgCwYjkenrgr0z0j%2FheqqY6roZp8niVHaYLZJXIuVJBKgXB53drHudoYy0lFQ1E+VUmbyxVsMQkRY55WWQe6mUyXVuDxbjv2vjSzPPs1yyIV2T5nTzuISKqGnp97wx8AcMLPyDchUtwBfvix%2F%2FAAuPQOfrFNlmOPwg%2FWYP%2FwAOWRZrV1LZdXvSU6RyNHwX3koDGRzb8Vxb1Fu2Mfwww1Gl+vceWbWqflaKvhlZRbYfl3DE%2FwDhN8R3Trq5X0eYw0E1S5CT2CCJVaVSfMhvzYnv+wxZPSc3TSHVUmo6ekMmbRZfVJK0crTGNGRlYgFiFvcrx6AcGwwtuqqtqZquhH6yFyD+GUOr81erctLIXJ55N8aBnW%2FAxnz6hOU5tPlxSaMRN5VlHnCkAgNwLmx7gAHuOMR4b6euFbMd9YOSSeskIK1lZSqAEfTFtPgq6tzaEz7OsydxupMslkQfW2KgRtYgH19sNXo9JU0mW6qzaNSUgyp1JtwC3GIbyWQiFYhHicrdj3+U2+s3VGt6k6jq85rW800hYWP1wuqOBZ6hFdwAT740Zal2NycdRTsjg7jcfXEnNoamWtDtzGfRDR3TbpTQfBbm2fU+e05z6ojL1CmQblcHhNvftig2YR0sVU6oxZQxthq6BzasrukurI2qHIp1QqN3AwmJJWZyWub4FxvcZ%2FnGGRYjKvL1J6%2FL4R1fCzm+k8p6z6YrtUwCSggrVkkDC447Ej1F8PH%2FAKQHrVoLqLrGhyvRlJGVyqHZNVBAu9j%2FAEj6DFTumkc0mscuaO42S7iR7AY99RK1qrV2YShiw8UgEnG7DmtDfCS47AKLD3HQfWWF+C%2FqR020BqPOMw17ToRLTBKed4PFWM+otza49cJ7rbqvTeqOo+d53pGiNNldVVO8Cbdvlv3t6X9samgcmqK3Jc2rVRrQoefywEyq4l8173xhVXxS47xsct%2FC5da3D7Uq1UGj6F+Qkm3%2FACw0tD%2FDRqzVvRifqBT1lLHGIZJ4adyd8iLyTxwOxwsNbV7PpbKqBEsAq8%2Flhi6X6v8AULJejsuisozMx0E0bRW8MF0VvxBW9AcRs9oq3WdHczYCz8tZ30EO+lnW3pLpfoPmGjM5yYtnAhnikiFJuFRI17MXtx6dzxbCA051E1dkGVV+X6dzqtoaauZvEhgkIVr8W%2F8AbDWofha1vF0cn6lSzUvhNTtV%2FLFj4vhf3drflhPZPUxUGVidIAZoXDgkX8wNxjOK9ILsnUk9ZNgqTYdNodYUzaW6p6QyXLc6rcszSignkWWldgdrSdwdvPP3HONLVmt9X6tq4o9X1BX5EWSEReEAT3JHe+Hppz4safMJsnptRaSjSjpAGnkR%2FFbeBYMqkC1ufW+InXOU5d8R+r6nO9KMmWUGXRJTPNPFZ6iTvfaDwLEck4MpymD7tXXxjiyguinW+nr0iHnrIqiAbDcg2740%2FwAzje1XlUGlcxkyl5VaanlaKTa1xcYh%2FnIf7hi0416vWGEovE67KMgo%2FeKU9ucdofN2P3x0RwCTj3GObEj88Uo9IjUb1HJ8I5kT4hNHMiG5riosD6xtf09r4HfiEyLM9O9btcUGa0whmfPKusRQ6teGeQzQtdePNHIjW7i9iAQQDL4TF+U606azOGSISU9Q7oJIlkH%2FAGbA+VgQTYm3sbHvhq%2F9I50rOiutm5paSaSryilnmmgXaZ3JdQ7Lc7WCqFsLCyqbc8iXZZSytCOnUb+PQiWejgT5GCblPXRYDzIUgN+Wx5ymLnmwxjN72xsTwlGsfTGuwtgsHcrTDlOjPJPtjq+Oz98dojyOscYuzGwHucekWy3SZ8upGrqpKcMQCfMw52j1OGp07pcvpM9oVr5YY6Gkku7FVJkYAkKxsQe%2FINrC%2FwCYhlGWRU4ghqZVjScqXBYAsfQEngY3s8qR4r0NGpWCB7IshvIG%2FL%2FT9MFYy8rCxhsA9vWP8WtcOks34jGHnFdSaT1G2c008qeKJHW7g742O0rutwbEAgfa59dXNNX02cZVDGYlNTGCI6iYLaReCQO7Bge%2FvYceuAuLP3zKhOUZmUuB5JZBdGtfltzWDAM1mAv6AXN8RtNNLRpPRzbgpYMsRvZWF7G1+CAe9r%2Frh8c80KVp6BvL0MX35T265vKH41fmOo6eOaGWWLM8rQxxy+IoZU45I%2FE478DgAni17QOa5l8%2FVg1Hh%2FNvICd%2FksxI%2FCWC7QOfxMPub4GUepSYVVM4Dx9vQEYlKeZM5WGkj%2F2cqpDgsxDse3l5HsB2H2wvOfYw5WMXtsmaSVdRlGdwVKlj4RVvMpQqe%2Fbn9fX3OHn0V1HOtZW1EflkkCK0xZlVGU7lsRYe%2FwDrfCwrdA5tFSRVUcVS8dvKXS97+oAHlHbv3xL6Lkrcip6rLJiyVUqGSFXBtuXlXLX4t7c9vQjkdbgr9DJ15guod9Z9CHXyUuoMiyy2eFGjlRGJSdUuSEubEi9+OeQD38tc5IpqeZ4KmF4ZoyVeORSrKwPIIPY4sdpPqRFncH8FzYzUtcrpKkiShljmUizFls1jbgm9wbH0vpa3OWa909WGupoKfNqPdNBLRhD8wyDaRKASWXvZuG59iRia5UsHiA9ZhaXcbEQ1HAZ5lRFuSfTFyenXQjNcr+FzU+vaimkiOajwYmcWQoP3uTioeW5h8lVpIiIfDe3bF3NIfE%2FmWd%2FDTnnTdKSEw5PSeMZNvmKlrWwst2QNesPwkQ75u%2F8AHnr4ykNZRS08rROhBBsb4wxwsSFxvZtXLVVck5f8bE416WphjmVmG4X7dsSE6EHYLzaBj96P6Lziv6RazraOINGsal7juMI+egkjqDGYyLG2LndIeqmmNFfC%2FnqVWWQtPmk3yykjm9sU7zvNDWZlNPEAqs5IA9MA49jl3J7bjW6mtK1IP+fjLhfAj0E0jr9NRag1NmsMMuW0p+XhYgG5B8xv6DFZOpGV0WW60zWkiqVkjjq5FDL2IDHtia6K6zzrI8yrzSVs0afJyBwjkXFvXC4zfM5a%2FM6iplYlpJGYkn64lVGDFye83ruVQB+npLn%2FAA%2F578P2R%2FDnqZdYQ0zagnWdQXQmViRaMRn74qDW+HUVxWmXys%2FlH0vxidoDVf8AV5NMg8hlIJ%2FPEHpmuWjz%2FL6qWJZlhqopDG3ZwGBsfvbEFVZqZn3vcsVl6XIiDz0T+3T0jH11pPN8qybJZ8zy6ppYZ0BjeWJkDiw7EjnF0OhOT%2FDjQ%2FDnNNrNsn%2FirU8hqTVsvjhreUIDz7WthJfFZ8R2Q9SdMad0Zk+l3onpfDlmlkK+UgW2pb0wlNfZ7LTZZl1BTysqlLsL%2FTANqW5dYXeusmspqWvR2p7nR%2Fn4xnZ31%2F1u3Tmt0BluZRjJCHgiYx%2FzvA3cJu9rfTBZon4ddG530Bl1zXagmTMXpJKldrKIoytzsYWvc298bWo9DdDsv+FWDUdNmdMc7kpI5FmFReZ6g902X+%2FFuMVpm1LnUOlY8spcwrFo5GXfAsrCNvut7HG+LqxSK9jR6n1kuLkU2MX1rR327y5HT34deiGsemIroMyK18caDxqeqBlaQjncpuAPpYdsROgPhznyvReoNT5H1InpJ99R4SwJG0DLESAX3A2Jt3FrYSGitA9Rs2yOpzzTZqYYEXbI0VR4Rk4uVHI3fbC7pdda5osvrNMUOe5lDRVEzLPSpUOsbm%2FO5QbYLqR2JAeNBlBNgE9SCNgHXwmhrvLPkpHrZq%2Fx5pJCXYm5Zr8m+An5s%2F3HEpqynzGkMa1sjEMLi7XGBrd9Diz4r%2FdjruUHjuQLM1iqcvwg8GH6+2PQbd6%2FtjHftjtDbm+EMrAbUanw25tLQda9HkEefNYUsR3ubYkPiC1DnDdSNQ0eZr4QkrHqoIRIW8Omm%2FnQJ9LRSRi3pa3pgb6BEf8AXVoosLj+O0np2%2Fmrzic+Ka69bc7Fh%2F8Akso%2FCLD%2FAPdlLew9OcQ21IxUkdt%2FxHdHFMvFwzTU5CsSCPXWoqJ5C1ybWxrFu+PTnm174xkj374mA0IlZyTudbh62HpiZ07RU1VVMs8pV1G4EDcPt%2FyRiFbj2%2FLG1QSrGZLE3ZbcdvrjM2oYLYCYW5lnuYtSmiUx2jfdIFYeZxcbgV4P%2FviOnzinrUjWdGjqEUoZFc+dfS9%2FXi3e+IuG7tt3cMe2CrTWg6nO6gbGQx7S9y9u3pfGzZTVjmY9I2qqv4hYErGyZCmWacBIpA1zxewcH88TOSaZzTM2B+XkG++0EGzHvccYZGS9JqOJ0eeZncf0cbR+dsNTRPT7JVmUTRSFE7+gZvS4A5%2FO+Ixmm78IjZvZqyn3rj+UTGWdN66BGaqgYSMwVEMZJPvxYg%2FmcOLpf0BkzWqjrKumZQPSxu33%2FwDfD801oTLJ%2FAK0UUEEdtzk3LD2GGrl+W5XlixvDFGhQWFvbAlz2MeUGJraa6jpR1ispekmQxLHR11EsjCzNccfTjEpT%2FD1pXUVfFUNlscElPzGUjsp4tY+%2FHvhowjK6mo+YEKbx3YAYKMl%2Fh7SBoqlElHFibX+nfEVS7sCiAXu6iU66i%2FDtpXRWaVy0NJSRnM4m2O6KXQ8kgH+m%2F0I9ODin8+sqDJa6rpIKSodqZpIrsbXPIIJ3E2+2Po%2F8VWXTwx5Hm0SKIPHeGa4BsNhPbufyx8ttX0QoNU5tRJUrKsVbMBsPl%2FGfoMO7QVQKe4mMfJsprPKe8jvEfeWJ788Cww8Oirwnpr1DE7m8lCka%2Fe9%2FwDTCOhQubD98XP+C34e6vq1pHWtNJTStGKA+EVkKDxbHaT7%2FbA7sEXmMlxQWJPboZTh2Jbn%2FLHjeVINr4L9f6IzHR+f1eTZhGY5qaVo3B9CDbAvFS73CbuSbWx4nfWaPW1bcp7xsZpXVVL0KyilUMsdRXO5PocAGmspfUGd0WULOkJq50h8Rz5V3EC5+nOHZ1b0ZNpLoJooyIy%2FPFqi5PvhAUtW9JMs0L7WU3BB5BwJjPzqxHqYwtblZVbyAlzuoHwtaT6D5JFN%2FwBYUWcZzm+XmVaeBANgtc8AnjFOXjUVToW53kfvhm9J8+zLU+qZVzbMZZxHRSAGVy1gB25ws8zAjzSpVG4Ez2I+5xKgZF0x3CeZG5Solo9JaJ6bz%2FC7mmd5lqWOHPBKxipty3uDwu38Rv74r5pnK6nM9SUVBQU8k8sk6hUjUsx59AME9bTywdJqKs3teae1vcY8dD9dS9PuoeWajjy1K1onKGJza4YckH0OBypQMQdyxrfVlBF1oD%2FdQ5yLR+TZ31wyPS+vKp8uy95kjqS%2F8sj1Ckn8Nzxgp+N%2FQnTzQeqMnodB1odJqTdNCJvFEZvx5vqPTC066a+q+oHVKbPxQCjeUxIsSG5AFgLm3Jxo64mrKDPMkrc3y53jgMczxSLbxVDA259xgdK2BRmPl2nr9EnkJ16eX+iD2oHrKfIqSCaORVYAjcCL8YdvRbXuhcp0bJpvPsmafM6uTZGi0hmapBHlRbA2P0NsTWs3y%2F4ls20norReVpl06hmmqapVURoFFwNt7gYi9WaQrfhr6o6davamzQ0jrUqUG0SLax4N7HGfGDpyuNGFYGLYzh26bHaSK6z6kdKcmqskqshNDBVM81PHWQOrxhh3XkXxIdBP8Daq0hNpmpoaV9RV5nkkaenuzsSSHD2NgLj14xzrT15yfqp8lGmTnL6alUqZJmDuS34jx2Axq6tyPTPSXSWU610Jnjw5srII2MqyCoVh5vLa1vtxjNbEgjXUxheioQ3N73mPSJLr9oDUXT3UMOV59UU8wmi8WB4CdpQk+4BvhT3H%2FJwW9VupGp+oeoTmmpq7x5o4xHGAgRUX2AGAfxjixYpZKgG7znvFslb8pnkSSTjoH1vjv6X4xxFBOF8QiHXRCc0nVnSUw4K5vTWPexLgDE78UVTHVda87qIXDRvS5XtKnggZdTgEfpga6Rx7uqWj1BADZ9QA34FvmEvhk%2FF908q9L61yXVKUcNJQ6pyHL6hKSHayUE8FPHBLSl1JEjKI0cuLKfF4uBcjtYA4Un5RkKXbDDqCdMd%2FDoO8QTm54xjNh6XFsZHW2Mb9rc4n3vtFpnjGalJ+YRR6m364w44GZSCDYg3vjwOzPKdGSSRlW81xY4bnSKnnqYJqk1FkSSxF+ThUK3izCQX2yi%2Fa2G%2F0ehZ8tqgn9E1hxbuMQZI2mpbfZof9aPTRjhyKkFWS80hihQ7ix9sGNBqHQuRBJKrPYl2knarEkjsT5bkj9sJDWDJaMVWeyUdLAnnQMAC3PPPc24tz%2FnhX57nWUyT7aXLZ5zLYpUVLMsdr8sFAN%2FyGPY3KV5R3jvj3ELKCVXQEuVD8R2kIZ46ejzuNk3bVFmAv9eLj88M3TWu%2F8T5cazLy8wPChSCMfPOq0hn+UVcU%2FgxvDLFHOrRWdU3KG2sQBtYXsRawPri5fwk1iJCuXVUJLPwCSbfQ8%2F8APGNTjktyg95Xq0bKoe0L1XrITq31m1roucCCanyyIuVWWV%2FMzeqAHlj68KcCXTnrRqDVueRU+b9UIo2mkVY6dKaRpAe58oYMDx3Nh9MG%2FwAS%2FwAP+sNX68bNI6d54mRWgAvIu3b+AqSNvPYj7EHGl0E6VzaOo870nm+V5+KbOxHTZgj0kzq0anlFAQxWb1axYejLziGkiqvodNEV%2FNYdkSxs0Ca%2F6Z5hlVPnM+e1McXjxNdSzOv9CG9xft3x8rdfab1HpXUtZBqXTuY5RLUzyzwxV9PJC7RlzZgHAJU+h7H0x9jOn2iNPaVonoshpvlxIocoWv6D17n874+cPx2nwOqEeS19Y9XmlEZ5J6h0tugkZTCoPsoDCw4Fvrhtzs1CNZ1Y%2FtBkAKsB01qV2hrXQjYAPyxcX4XPidzXov0l1dLQOhqayaGGJmH4bg3timKi5sB+eGlLQ%2FwzoZDWxsfEr80u%2Fp5VHGBrW6AH1hOISSfkT+Ui+p2t6nWeoqvO6ly0tTIXY%2FUm+AuOZ1kDg8g3GMbMzsWY3x7gjaRwqi5JsMbzzu1r8x7xv671fm+d9INM5fmVVLKIJHEQY8Ko9BhSLft3w3+puRVeS9NNH09TSNEZo2mDEdwcKVQquLgnEFPKqnl9ZMeYn3+8bXw8adrc1zzM6mGB3SDL5GYgfTADUZaf4vMkg23ma4P3xZr4S9c6b0XozWOa5nlaVEnyRiQsO1xiuWpc6jr88qa2kiEaSys6gelzjBdnYgeUf41FFSLa3WW66l9Hem+l%2FhU03nVLqpKnOaoxyeDvB3MwuyhRzx74COjHwsai1Ppr%2FrUOZUMGW0heRYHY+JIqdz7DCv19ncyaU0%2FAjsLRXIvx2xudMOrWuadBoei1JWQ5RUhjJSrJZGOFbpclbaMtKZmDaor8%2FUj18tD08jMmXZpkeVdcKDMs2olraGkzGN5YSLh1U9rYbnxl9X9FdZNU6a09oLTxp56ZEp2kMSxmR5CAqAD0H1wmtFdNtadSeptZRaUymevlpJGnmMQBCKPUknA3q0ZtkfUN4J1kp62gqkUgizI6MP0IIx4Iruvve8oiSy0K3OB2OhHv1R6UdRfhxodM64ps4hgqJXVVlpXu0Tlfwm4scKHWms9V9QtX02Z6qzWasqnXb4slhZR6AAAD8hiT6x9aNf8AU2qyXItS53JUUuXqPCiChVDdtxt3Nh3ODrTeY9KqvR5yeryoVWphFIUVKZnnLW8hRlBsO1+RjakPWge3q0OxMuyweCx7f7qEOrOgen8q6Nrqmm1DJLmctPHJZmXwXaQgbV4v6++AXXPRHNenukMv1JXZrT1kbbEliRSDGWFxYnuP0x3n3TTqlU9O21EYqsZXBaVad6ghlAP4xHfj9L4H8013qnUFLSZLq3OZ56GlQGKKWwW4FgTYXbj3vieoso77hF6q%2FM2tRMalqI6jNJGjXaBYdsRH%2FwBWJPU8lM2c1JpTePeQMRHiD2%2FfD+phyCc6yz982z5zU282vj0intbGPdza%2FGPQkIwGe0CXQMY%2FRaqbJ9f5LmaZdQVzpUiNY62MvGpcFBJYMpDpu3owIKuqt6Yuj8eXTLOU6Y6M1JXUeVvBmkj1uW1FK8rTLTGJSUkvZBuDREWv+HuOQaIdN6uRdb5DCrECTMqdODzzIuG%2F126t5xVZ%2FNots4rKjLNPolLSUs1Q0kdFKYYxVJGrG0ZMytuAAuV57YSZ1FtlyNX3E6R7N5fDkwHXMOlPMD02W93oAd9CG0d6PQalf66kankZDa4xpMp9ecbtdVtPKWY9zfGg7gYajeus59leH4h8PtPBvfHRxwn645+eN1PWC76xraH0LpTNcmopMyzDM0r6pXmDRhDAibioFrbr+Um9%2FwAvc56ZZJPkVdX5ZUyRuN8bK6ghXUg2IJsTjnRaWgn0ZR1xoYZGpUqKWVmHI2tu449RL6%2FW3bEvTxz5TXUVZNA1O1WHdYNhCxqrkhRfm21gb84Bax+cq3ada4Vg4q41ORWNNofXY6%2FrCeq6YUupJFarjkk81hGT5Sftb0xNZN0E1lQhJMlyemhtceMQyFQfQWUEcfUYNNF17JNDLEqqXCncR74fGms0hqYEgqpUsPYWBwdiV1k6PSDcaDBSwUfzK4v0kj0zlctdqCMVDqwkcBPKzd7H8x784J+k8sIz+lrKJ46cKynYqgcX4wxurVTSVWQT0NLsCkWay2sPX3wk816gdP8ApzmGVwUeaUwlcAeHJOFZhf8AtP8Ap743crW%2FPvYEF4Y9b4rAjR7S8Oe5fS5nkEecyurmkTzuo7IRfni%2FBvgc07X6YzGFJ4XiYn8JWxJH5Ht+mAHSHXgwZZVZhR5XV5iViUx0tNHvd7+igkD9SB9cReotUSZfqiLNKfKZsrizPbKaZwo8OQ9x5SV%2FS%2FJwte2rmNi+sp32ch2qY%2FKWHpRThFFI67TyeLHFBP8ApKOn1GlVp7qZSpGlRVyyZVVWQ7pQq742JvaygMO39WLkab1R8xQiQEXI5Ptis3x3Z7oTOens+nc81P8Aw3P8rkjzTLKZXU%2FOlro0bR%2FiIt2YWCnk3HGDMfJF2yxgTJy7AlBNMZFPnea0+XwgXmkCC5sOTi8nxX%2FDvlnS74btDvlywePMiS1Lxdmdl3XOKHZXm9Tl1UlTBKyvG24EHFgOoHWHWmuOhGSw59m1RV09HWNTRrI5baoHAF8YtXmZT6GHYLVeG2%2FIHfxHbXw6xASU6xuQzjEzph8rhzameuG6JZFLA+18DzSF2JJ9cZqUnx0C+rAfvjdveGoJXYEbmEut8W+e9O8w6X6Gi0%2FGvzUeXqCo9OMUueUbiAPXDM60Zg+3IMsEu5IMvTi%2FuMLSnVHmUOeCRfA+PWKk5RCrrzew2NGNLR9fV5b0pzx1jZUqpAm73wNdO9NQ6y1plGnauuSljzCrjgeZuyBjycWz1lpDojRfBtluY6bz6KXP2KPUxiUGQyH8SsvpbFPNMMRqKiWEsD4y2I78HGgYurEdDG+O6VPXz%2FhEsv8AGj0c0%2F0nOmcuyPPBWxy0hLI23etuL8ehwo%2Fh96f511F6kUOnshiDTyK7EswVUUDlicR%2FWXUOZ5nqFI6+tmqGhhVAZXLED25xtdBNa55ojVr6iyKrNNV00LbXAB7+hB74GFdiY533je3IxvtQUHoPPWtn5COzS2qtdfCv1i1BkYoqR5qmH+ash3owPKspFj64XnTit0d1H+IGbNOq1bDDR11TNUSbpPCjea91Utfgd%2FXGnl+pdQdWtbZ5qzVGbGorQjbncAcC9gAOAABgL6eaB1T1F1zNlml8qqK+SB3ml8IcIoPcntiCqlQXZjo6GzIc%2FIq0vhDue8POtGmdLVPXJdPdJz%2FEaebYkUVPJ4iiQjzBWvyB734xJ6FzfNugPVCebWem5C9RR7Qm9d4UnujXII9+cAGX5rnnTPqya2Kn8LMMokKtFOh4YCxVhgmzvXtV1g1hUZ3qpqenakhWGGGEFVVb39SSecTcpCBe667wnhwVzvfvb84adUvig1Xn+T1WRZXl1JS0tdIsKNsJlEX9t77b%2FW2FDWl6+nZ6q0c0ani5BwYZXqrSumta5NmGbZd49HTTndaMNtNuGse9sbfWjVunNfZ+c10pD4MNPTCOSYxeGZX5N7d+BYXONsfSaGtSbMssIfkYEekrZWlvmZbm53HGvu+uPdaxE8oJudxvjV3n+7D5WGpze4++Zjvju4HrjwS17XGPIUk2GIJDDLpJlz511R0hlEMux67PKGmVvYvOig%2Fvgi+JSlpst66a1paU+Q5rLKfo0lnYf+ZiPyx6+F7Ikzzr1oyneXYaPMP4oBz5jSRtUhfzMNvzxDdeg3%2FXl1BdJGBGqs2sSeR%2Ftktv04xCRtuaTC9wvg76d%2Fr2gLI354wt3xkmeeV2mnkLvIxZmJuWJ5JOMXfvjMiJ2Z5JxzdzbHfYY6tYcY9MRs9B9aU+UZpJprMJSsWZODTmRyI1m2kbTzxvuFuOb29sOzqLQVFRk1NmcksnjU8sawwSMrsw%2FDYFQL8H6nFPYZpaeVJ4XZJI2DKwPII9cF2oOrWt9S01NTV+Yqi04F2hBQyn3bm3%2FlsOTxbGjoX6CW7g%2FtImHiHHvBJHbXp6S0mkdbquWxoH8wH4j3wc5f1MngjA8cKqi1h7YrbofPhW0EWYGNo4assouhCeKu0yKpsBwWBsL2DDDDoZ4q0rArC7LxY4BDtvlMt97rl0ixeoI3GzL1TpZqSamkYMzoYzuHYHv%2FnhAa9y%2FTNNVyVMUT1c01wu+feIub2APK2J4Hb6Y0tYS6ry3OVyrK6aUxSkHewHmPFhf0A+mOqDR2cV84%2FxPnEOW3chJIaYzp78+ZT+wwyrUFACZWjY2nqrSMPpfnfULIGjr8vqZYMoZECRliyk89r9uCb8249O2HTnHWvT7yUOU6gjhnmkUOrIQLWNiAPX37%2FlgL6YdOtN5fSpT5traXMKeeQSGOmpflt9vTczuQDe3ADezDDZqehnSbUifNNpakjrFhEUc6KRKAO25+7N9TzgG4ojEGVzKrat+Yw60s8NRQU9ZQzE0lQodGHcD2xQT45s+ps666T09JJvGXZfT0sg9pBuJH6EYvXT%2FK6A0qYKiRY6TLoWlaRmAARRc3J+2Pll1G1VUa513nerJyxOZ1kkyXFv5d7J%2FwDaBjOCpBJ10gVp6QeHDWw0q+pC9DsvpFBJbMmdv0wtKSmM0yp2ubXxdHKuj+Q1vwdz5zU11EuYRVfiw3YbyPa2DXYJ1Mkxa2sDBfSUuAJPAN8MnoZ0xqep+vsq01G1o6idfEN7eUHAHPTCCZlPNiRxgq6a6szfSOqKDMsmqXhnSZbMhse+NLASpCzbGCLYPE7Q9+K3RSaI6ky6ep2JiooViW59hhLIhB74bnxFZ9Xaj1z%2FABDMJWkmlgRnLHkm2FUkRdwLc4ixt+Eu5NksrXErGBlU9dL0zrYS7mES3+mGj8J3QzSnUuXMs%2F1HqQ0TZSQIadNt2a19zX%2Fp9OMTnTbpRQ578P2aZgKmMVNyyoTycILIkznJNRxUtNLUQDxNkgjcjcPY27jGljeMCiHRjfCYUOr3DY%2FObPWenjg11XQQyK0UbFEZexANr4cfwvfDxL1I0jn+q%2F43BR%2FLKYYYym8swW%2Fm5G0YR3UtjJnwcg3MYwU9KNaam0vp3OYsnzusoqerQpLHDKVVxt9QMQ53OKNL36QrHtobMYuOh3qQ+moqzK8%2FzagSYhkLxvsPBIYjBp8OXU3U%2FS3V2aZjkmVQ18dXG0c0cm4WseCGHbvhm%2FA7kPRrN8z1HnPVuopNyx2p1rpdkVuSzE3Fz98eelGVdOc5+ITUmQacrCum90slIUbzSC9rKT3H+mB7MhHVqXHYdZHbrmDIOgidzqTM9b9Ts21VnsaLJXO0rqgsqk+gxNdH+h2edSNczpRyLT5VFVJHPOzhfrtX3P7c4aGv+ieZ5dqvPKvR0TVuWQKJNzSJuU2uy24uR9Bhe9KOpWq9H1GYZfkyQSLVVBLJMhbYwFrixFj98aJcTXuv0jbFqDsocaB6iF3Wvo7obR+v9KZY+ZSx0NTO4rYpZQWQL%2FUWFrAnjAn170npTTUNPNoaaKMSwMamKCfxFA9De5sT98QueJmOfat+YzisZpmRpGZjckk4hNWNXQZbNTFi0SjaGt6Ylx2LlRvrJcupaqXJXp%2FMTc1HMSd3JOMXyUnscTrxm%2FIx58L6DD0dpQnpUmCp%2FEAe2PaoW4Fxjy3FvfGxS7PEAZrDtfEbGBooY6MsX8D2hKjOeqsetmnjSDS+1jC6k+PJOsiBDbsu0SXIuRccHthO9Xaepi6q6yWsbfN%2FiDMS7A3DH5l+QfUH3xd%2F4EK7oxlugM8hz%2FXOaZNquWtjly2jpPEMeYWQBUfahFg173ZbKxa9gxFO+umZ1uddTdR5lm2bTZjVtXyQGonfdIY4j4cYJPJ2oirz7c4W4uVZddYjD3QRr18%2F96y2cZ9n6uH4dN9e+Yj3iR7rb0RyHzAB0SN9QRFo5IuDjAQQcSCQLLyLEDvxjWqEVOwWwNr3wfKjMBtbHnHrvjye3bHpg9pzHajm+OKpPpjNGiEkSSiOykgsDYkC4HF+T2Hp72749MAecsNk9C2SfC9kdYZFBzfWEzh2VgYwlKyjafqzC5tbjviCyfVNXHP8u7COeI2IviA1BLXw9PNF5HPL48EUFXm8JCbfDNRMIyh5Ia3ylwePxEW4uc9Rlxz7KabOcvcrUbAHvwSw4N7fbAgq5UDt5k%2FudfpLxwq26tGoHVlAOvgQP9+sbumdRQZo%2FwAvXx+LIpBXnt9sT8+Q1OaD%2FwDZ9%2FFa6qRx+uK5UGrs0yGpRKqNleJrEMLXH3w0tMdaMupjHKs+yVRchu32xMoYSY5lDgjej6GOXSfQ%2FXOYPT1WYaj%2FAIXGlv5KzHzr68KeSO+LL6M002n6BKWfMGqzGnEjeuKcVXxETU0Aq46mMysfKoY2t74ncs+JLV+pqql0%2FpGjmq66pAjAjW4S5tdiRYAe+BbqmsbZGhKzmWKx907jS+J%2FWNJD0w1CgkMlIGp6CrMLgSLHPIEYrwRcC5F+DYjFDs+0ZlWUZCua02eTTzySAwxvDtWWInhuCdjW5Kk3HHuMXX6+9P8ANcu+GPM6J2lrsySenzCukF3ZisoZgPUgDsOw57YrV0WzHKs6p63ROeZeldT1KtWUjzQRyCKRF3P%2FANrdblR2se3piw8Ixas9RihuVt9D%2FB+f6RLkXHHBsYbGu38xLyVaTGCGnoI4ZE4YxliZD7m5P7Ww9c4zzN8s6R6Yy5ZZxDWB5HjubEc9xgsqtCdJK6o3V0OnphsVIayglaBHY9v5aERk347WvjFnOVZWI6PJMzj8XL6FNkcYIgnhQt2XuG7+qk4e2exWaRut1P1I%2FiBUcbp5tdREVU0rVrbIKcs55CqOcFHSjptnmrdXUNHQUEkjLOpZQvIAOHFlPSPRmT10edZfn1SyNGHMc%2FhSWv2G5WAv9LXwZdIcy07oHW6Z3lutcmqHLs7QPLGsiW%2FFddx7YTZvs1xmhCUq38iD+m9xrgcT4fkXAWPofEEfxEj8RGi82yPWUsdXSPGUjVeRbsMKGGhqZJ0iRfMzAD74s78Teq67XurKjMaAU9ZEV3GSkdZVA9yVJt+dsLTQPSPVesc6oYMqpS8086ogI4uThFWl2LUFylKsPIjUYZjY4s+4bYltuivwl9VtWdE4s9yqviooJoPEgppGO6oAH07Xwgun3TGfU3Wmn0Zmsq0Tid0qGZblSh8wA9Tj6WZN1Xqfh+6TZPp7W2QTSVVNS%2FLwPR7WjZgvZrkEfocUBqsg1ZqbqXmevMthlpGq6mSrQx3QoSb8EYxUiWVswOjBK+IGvJVLOo9IG%2FF50cy3plq2ihyzMxVwVtP4gDqFdCDY3tgy6QdG+m+adDqjUVbmTNmE0MjvJ44CxyD%2FAOHt7fTnGnV9F+qnxAa%2FGn8umkrsxkUXqa6VisSDuSeTb6DG11R+GDqd8PGRmgz6WlqxUo0kU9G7FCR3BBAN8D3VF6QCdywVcRxjk6Ud4K02kcs09paaSPZaZWN1OBXSeQzh6zOcpoKxlpBd6iBWtH9dw7Y8ZdqPMp9LTU+Zyn+UrCx4tg96QfEbp7Q%2FTvNNMV2RT1FSxlMckQXZJvH9dyCLfQHANyXVjajZjGyylyFpHT4wZ0l111Jp7Jc2yKkEE0cskhWWYMzoW7835%2FPAXoHUUtLmEtQIjLLNMSAByTg1+HzKunWo11DXa0lp0lLs8MU1R4SqhBJINxcjEf02XTum9c1Gf0J+dyzLquZoBcEtGLgEE+uJiUrVgRDsXxrDWVbtBvPTnWZatEDQy085iLFWBQgX9sRursxrqGgegqo7kBbve98MjqLrCt6laofPtH6ZzA02U0%2FhTVBhuSe5B23Fh98KnWOo%2FmsoaKeO8zNtva2JaOZip10kedZUlLhnPMfygZJXBj2x4+dXEa01z7Y8+KffDgGUk2dZGhixtjNGFHZgDf8APGuARzbHoG3rjVoCDqOz4Tsylh646fpGkYwFK0sp7G1JKf19sAfVV2HUnVcbixTOq5SPYid+MSnQTOv4N1f0xWBSxmrlowoFr+MDFb%2F78Y+ri0sHV%2FV3zdHUS06ajr3aHf4byRGpdgN202upFjY9wecR8oXTeu%2F01%2FcatlW24AqZtqrdB6bH+IBq7Hhb4yrl9dNTPURwNKirucx2Yot7XYDkC5Aufce4x7jjhqWEdLCUkYkWZ927+1QLDng%2Ff6erH0p0ZzjOVaTOq6HKadE8Qs4SR3F1ttUNc9zfuRa9iLkT0Y9uS3JUNmKe3WK400yweOBdb2ItyMSGX6Uz7NVSamoHSBhcTSkRxkXtcFrbub9rnD%2FyzQukssH8Po6eCplZJHFRXywBEI22LGRkVRzxtBc2O0NbjNmtFmchhy%2FMq14ApMitDGG8RT6h3X+YpINmFgRa31sGN7O2E7vP0E18WgfiMSkWgJYCGzPNIFj7jwAWvzY3JAt97H7Y9jL8qoYp2pKYy7rmOSpW7BfYG224PqLd8NDU2jFqKOkkX5hfHXxI3eHw1IBIIQj8QBHftcsLdiFnm+VzUEjQ1MuxnLOVKEMOLjsNvN+No+9uMEX8JrxhtFkyZFTdaxMWXVdSwNRDNOJ0beZVc7%2FvfviX0pna5RVGiqSTS1Tbmv8A0ufUn9MD1BV1dFsjVpFhIYBWJKsGPm4PHNgDa3bErUVtM5hNPQQgRRkt4h3CSQ3uwAWw9LKQVFu3e4NmKuRUa27ybFzbMW0XVnqIb5tp+krwkgg8RbBiP6lH%2FDEKdA0TOZI1kUN2IexH+mJHSuooqGZcrmqElhkjWWPdIrlVNxZrcqwII5Ck2vYAjB3Bk8GYxCoy919Lr3%2FTFUtD4zlG8pZ%2FtOPnp4pUbg1prp1lFZURJUxTyr2O6Q2P14xbfo1pTTWl6CL+GUFPAzFS%2Fhryze5PrhJ6dyX5aRHYi4N+1xhzaczmnyylRXckqLkngD9MK8q526AxXeidkEYfVuoosw6aZ1Q18Ky09RTmJlKgix9eeP2xRvpRpzMtPark8KOIJlOYgiYtukMa%2FiVWC23MjC4A9cWY6g61OZ5TT5TRylkne0pX8LC3bAD0401TV2a5kk1LTzTVVewT5lj4QtEFsxFig5+v5YtfscHuy1H1%2FaIuLp4eIzGZkoptP9Qmy9ytPSVT%2FNQllcIl%2FwAS8Eseeb9vN7Y0NZaeirGqahG2OxJZw5Z0YG+1Tc3BH935EYL9QUaJHR11M0dRPQzBarw0jkCi+1gsvm8oPN+CbWtiOqoXizNsveJ5FzWPdAVccPc2WwHJ78cW+vbHbgdaPwnOVsbmDDvACHMaAyUVDU0STsCEYTqr7Dfgji%2Fp3NycMqGrWiyuWqnaeOclI45IEj8Pb7EC1zb8%2Fc+mFdqyNcp1CcvjpJGqpJkAdyyFTexAT3v74YOcyrHk6s1Godo%2FDbcxOxwLFgFt+9xjOS3Kq685PY%2FQH1m%2FJm6pkprTLH4kYV%2FDkQOsnPJuT5Tb8x6Ye%2Fw7aZ09ncyZ7lzw0lXEi1kKGy7hfmw9ecVpq56eXS8U0NVUSOi2lEoVEIHcKbm%2F5j8sFfQ7V1RQNJKaqanNBUX3Ah1YN2QAbR+l%2Ftis8d4enFcN6mHvDqPgf8yfFyXxm8QHpvr8pb7XUNf1OZcpzGkDxULEoI+zN2ucaml+ksH8JrEqhLRmMlEAUEjjub+mGP0MMGfRLnPhRvDKAdx5sfY4LuoVPlU1LPDBH4LyIQXRioP6Y4z9ncKUf3SDrUteDaPHFz6IlQ+lvVHKOjPUiozDOoTLSuXpZZI03EC%2F4hiwequofSTrlpSqjSaCriSCRUjnhtLuI42gi+EZqjovQ52asxVRSW5KhT3OAbSyZn02efLaiOQb7gG3f88DW2JUnhM3eNsY+Ja9ta9ovuqXw2166Mr87yM06xKryiIttkKX79rflfCn6QfDFUa9yHMsyqtQCh8FzFGgj3lmt3PIsMOfqR1T1XFlFTpqCrCUUqbSNg3hSe27vbCt05muqcryutOQV9bTxyqTOKcsAR7m3b74FS27kIJlmAr5EKdyIqv+rDNcrpcwpBOGNPJJGWU8MRxcYKdJ9KNS6fyBc5zrL6iGhqY%2FJIzC3m7XF7j8xjdqKmeDJJH8Q3kJYk9ySffDu0JNnnVnpzPl9TNSUCU6rCZApcysouOLjaO3POJLLbCvU9I0wFrPvKOoETmidZT6Oos0yaDKkqkmkZ4ZPE27Sf7hY3wtdZ6cpK2iXZtWV5CzWHbBxT11Pk1fmVJWxqzwzNHdeRwbYDNT5wlQbQIVBYkC3pgmnm5gRBc23%2FpyH1s+UXVVpWOG%2FwDN5++NT%2FD4%2FwDmYJGWaolCgFnY8AY2f8P5p%2F3M%2FphunOw6SsitT5RUJKVI4BAPYjHHk8R77QPt2x1YY6FsSEbiyE3TOV4uoul3S91zmibg2PEyHvg9+KaCKl66amamki8JxQTBQbkmSigc9vqxwB9MqKorte5HHSzUcTx1sdRurKyKliIjO8gyysqKSFIAJ5JAFyQMWb+LboBlsE+lNX6UrnmqszSPKs28TMKeYD5eBI4Zgq7dv8uJgxJ2khPwluR7L1FtdPm2wPmdf1HeJw6%2FK4dbbUNhWBPy0f7lfulukqHNK45%2FnkW6gpGPhRMoZZpgLgMD3UG1we9%2FXkYb9fm0+Yhf4XUu6eIwq5ghXwx2VeCVBIBsO%2FBPpZoDKs9yXI4aPI8trokko1MO2SLw1%2Fq3h5VLKzMP6bENuIP12qCSjinUmdvAeYGUhS3hKSONoa+0AjgN9jzjo3CsWvFqCronzPxlZyWI6SYb+ER1Jaho3pqIj+XAkjM0d15877mY7rnc3fvYdh3HKuXVcL1FJSVqFRKYnnZkYH0JiYFTb+m4I9frEVmoZmzafLmYRQVZWWWKCQiPd3AAJIO0sR5rkG%2FtjazCvolqqOuocmnFLRQo1d492WRxJs7qUuLNEDbaSxY8C2G3iKF15RTaxHSSNTSDMaefOquKnSPxY0WOmeKN0W1rgKQykECzbOSbk3N2ENWpl9fmL0GZVEsgBkkp6iqAWUxgs2yQ3A32O7yEAkni+JmTOcrqJlmAnZZGtKsqgCViWJbchG26hfKAe7Hdxzh1FltHXwx0bVJmSpRmjDSCRqVdxCRs3F2sCTYAWK+5C4IFi6kFVz0tvcU2a0LZZXGnq4atUA2L4jglSDz%2FAEjj6fvj1TzQinNO8KNIwAWQsQVF%2FYGxPpyPU%2FQgizGdcsRNP5rQ3pZDYVUzl%2FS24EC4t3sPTjnAtn+X19BRTCnUVlISbVNM7NE4PZgrKrpbn8QxXMur7OWZB9PT%2FEd05AcbMJdL6q01nNJPobM8thgmVZJMrzGOcqy1txYOzMU8Ngu07QoN1JJKqRN6P1jPlsscc8haM8AjscJ3I563Lq6PNKGPdJTecMYw4T0vyCPzw5dU5Ukb5VrnTdLDNlGp6cVDxbfJBWCy1EduNn8y7LYABZAqiy4rz4zcTUn%2FAMh+ohVeZ9jcE9jH3pLNKLNqYSxrHvAuFB9cYNQ5pmctStFBGwG7YoAtfA709ySUwU2ZZFVB0kAD0zsH2N2Khhe%2Frz%2F6jFj9EaJoK6g%2FimZ5eiVaHys4J%2FbFPyaWx7CjDr6SwI63ILFPQwF0%2FpiWVqWOWlNljN7r3J5OAjqXrDQXTOAZpmshOpYxLUZbQBygSVQdrSbAWIYgAX8p9SBh0dWs7OiNE5rnWVmRKxYvAglRVIhduA5DEDaPUnHz5nyvUGt89qMyzeWWrqZbzzSykudpPG4i9r8ft9MWv2cNmLW1yD3z0HoPOJuNW1kCljodzJDTXWLVeSalkqkzF6jLc4neero3b+UTK26RlVb+G27nygEgDj0xaDPZKHMtKxZ5TKrSQpHLTlFcKxBF2bdytx6WH5YqlD06zyKfxKeCI01NapdzItolvbbcm5J9u+LYZCktboalSRhUJFACwhX8AP8ASbev37%2FXHRPZ9so1M95OgRrf66lJ4v4JKPV9YI60SPNspo80jhkiAKpLGGN9399mPP37YM4KxZtMw1eUO0cMVPctPL4crLYAgspF7m%2FA74C6iWWiqP8ADVUlMlHXFJKZ4njDD+3cfxAjm4a1v0wb5dHWpph4KicTsTJHacs44%2Fq9QT7HnFlyyPDX5xUx0oBgpXVxpchUxzFvBl3wpY7VJNybgggg8+uNXQ2qZ21VUR5vUtPJNH5po3DFyORdgbH98bNfRVM+mapkkkWhSVWqdqeKY29CVHKg9gTYfU9sCGi62hGr6cZhVSKpfYHjS9wRYCxtax+mAnIG4bSgapp9Dfhj6qw5RLLpWpm2w5gvi0rMed68FfzHt64sVUSJnqLSvcM4I3EY+dGn9QHLs9yiojnnieDdYKt%2FMLWvcggH7YstlvWmolamjRhGCouT745p7V4PgWLlL+Fu%2FwAx%2FiMuD2F%2Fu+%2FLGVqjSGVafqvmjW%2FzD6FsL%2FVdHpfOG8WSJFaGNixtfkDGbPc%2Fps8dKmqzUut72B4wr9U9VMh0rWVFFMBJ40bopA9TjmdzrddrXyMuGEuRWrGrse8Fermn+nA0RV5zT1cYro4xtfxuTJf8Gy%2F+l8C3RTrTonp%2FovMcv1DlsrzTlpFeKIN4oItsPthX9SEzOsnlzpqGpio6t90TvGwVx9DaxwK5tl80GSJKJBZgLi+JHRbAFJluTSqAV7CTGuNQZNmVDLPltMsCzSmRUUW2qTe2NrTGqq%2FI9J1FPkuZVFJJMoEgjci5t3%2F9cQeW6NnzinoIJK1YVqpEQsf6QTgn6ldPo9CUVGMor5apasEMjgbgVHfj05xtpOUID5xxU9wfxCmhywBoRl9XSSGpkvO8jFmJ5JvgT1XDBT1SRwtcFb98F2W5HEMokqqqUxyeY2PFsA+cL%2FtNt17DDHHYF%2FdMT8SVloBsUAnsYQ9LNKzaj1FD%2FL3RIebjFmf+rPKf+7xfphQ%2FDzUxx1UqBRccXtiwPzZ%2Fvb9cdH4BjI2MXcb2Zvh4VJoVwep7z5hmKNPxsxI78W%2F5%2FTHQaBTwoP7%2FAPDErR6RzWuq46OB4DJKbLdiB%2Flhm6d+FPqFnBjmzCtyzLqVwD4hkaVyD7KosfzYYpzWIB3lHYFO8Bem%2FwAvV64yGjlQsk+Y00ZW3e8ii1sW5+MbrVoHWdPk%2FTfpxlK0aZEstHXVCKiy19RHIyCZyqqxugVrHsXcEeW5TGrvh5g6Vacl1pJrOoqa2glielWGnEB8XeLEHex4%2FFxb8Pp3wvMqc5fTPmYmCtVXEaeFfZwQ34uPXjk9wbgjjONhJm3pcT+H%2Fdyw8O483D8J8ZF2W312egI0enmfTfQdem+okpJYcqy+SDLmkJEXhzSxPtIZiA2%2Fg3Ugle4vcfYyVHmudUuUR0+cyoEniDwVDwJJUGHcQCrkF1G5D%2FaRzwQxGBinrpqeQPAYRI0ex3AN2ub3N+xBsPLxxbkE3k46bN6OvqqPKYaiSVmMTx0yMzOHFvwqLlGB7WIsbG+LlQ%2FKenlKpe3P1M2q+pUyU9ckaKsco3R+MGYlbE7gDuAN+L8H0vbBVDPRZ%2FlNe2VUtS89NUfMeGUaXwqZVe5dgQp%2FEtz4foTdBcMFLJWLQJRNHTu1MrHx0AMh2OzM3iKbMRc8nuDx2GNnIc3r4tTwVWWzlaqsjemmhpAYj4QiCkGwG4su4Hklub3LcmLkFT73nF1tXODruJJSVxp5xVThaipqBKJWqkV9t9tnD7927dydwANh+IE2KaHMDn9fPHNlkdK3io5NCjsI1JAui3IsSQRY25AWwsMRtdLkUNIaOryUl6tJiazxN7iW3kKL5AoBte7G+4+wGBvL85ny0mijrGlhjZTNNTb+YyBuWx2hhcgXYWuvlNjcmrca2gYQXL07w6zqketWo0%2FXZ1VyZZVsJfFScHxwGN5GjLgbtykgOVYjaxC3GFhRn+B5uMtzOuMFA1w8rxswK828gBIJ9sNXJhlmf5ekrVPhSu20SPCxRSBe+5ST9xtPBOMFZpynzHK5KyCmyypqKdiGpauJWexQqHUXDOoJuQOxCk8cibJxvGQPWfeHn6yKi%2FwGKP2ijzbIKT5dszyiQGMsP5ZXnk%2FmMZ9D69r+nVdLT5hlIr8srrfNUklo5Lf3I5B2tb3BH7HHKGpzbT9c2n69f5Rks0cgUAe5u34e3PbsL9sS2f6ejz7L11DSSNPCVEOzxQzRmxsACSdot2At9RiuvjF92Ve647iNHsXl5Leqnzlg+lWdZHXV3+K+mlYlXDAlswy+oDs6ptBO5PKVI%2FuHHl%2FFYE4t3k2eUWZaQpKzKoqesZ4tolSVoFVwOfEjIc7r9wGUewsRj5HUjZ9pLMo81yavmoK6nYhHjJV7diPYj0Knv7HFpOg%2FxcU+XzU+Q6xYUgmVY52lYeFNLewkRto8E8i6tdDz5hwAp4ljrxJQeUJcPXWm+Gz2PpJsFmwH1zFqj+Y+PTuIddf%2FAOLZrLlWQ5%2FmsTvVSvamoqPw4G8pAYiRpHL3I%2Fr28AhVPOFVR6Njoq6ran+Zy9pYXjUeIr+ILAi%2FYgE3ubt7Ww0viVSmzrL8tz6hkksOF7qY9wDAsPQ9vvcehwFaD1TTatiaHUeU0T1cCGGWSOFYipUcTBUKAnbz5r3IOGPssteRvDyOjLs%2F2Jj2lpYKuZSdqRo%2FwZpZtkCrkY+UiFMyQeXwSzSVBbg3BYk%2FXaLAemD%2FAEHLLFpeOQAU6jllVmAZbckEkn7%2FAH9MQut6QSU0a5bX1FbEoWITPM53oeQhLW23ubr6Xtc2vgjyagqcmy40NZABIBceFKHI9l3I7L9O5P546VatdOKEr6b8pSHcuvWAupMsiqsyimijiSFZS8VmJYG9tpF%2FKPvYn0vhk6bapiyqnkmo1m8GTbED5DYebkJZjf8Auvf64AKsZbU5lLPLXTiWJnLxlD4a+3JPJvxYqPvg3y+ekTLEWip3FX4K+MskS7mb1P04tby3t64izH3WqTzn3RBvWtDlslLmE9YlZEkjrMvhAS8X5vuIJsebluf3wr8hoaWXUMT09bcF1MYkQJI5uLiwYgfrh0ayrF%2Fwu01XPTzKIWjWGMWfYD2kClWsfQ3vhD5XVn+L0xWKNUSo8QguFNr%2FAIQSbn7XOAw2wYfhklCI%2FwDK68TT01VmM8xipmKXazsoHAVSeLe3NsH+W5vlz0geeqMMkaiXa5ALL7jCKgzXMRUx5PmNP8vTh90cs4CsyngHxGt5B97YgNdaj1DRUFdntNO8kFCPCTwYwQ%2FoW3LwR9ecVjjwTNwXo+B18CPP8409nrvsOelxGx6eu5a+q6gaZgyZYVn3SgfiLf6YU+dbdS5z88DvSKQEAng4qPF1e1HUVSL47EO4Fifri7Pw+av6NTaUqoOo+aZZS5q%2F4VrpxESm3vHci7fbnHG78JsfXmZ0zhlYyrbGQ635fWYus3WHIdQaFg0jTZM8NSpQO0m3YmwW8ljf9hiv+bV05y+ONixS4C34vgW6y60p6XV9RS5LWGWhErmFrkkpu4%2FbDh111g6Mp0byvLcso6d862whIkpSsqSC25mcix9fU3x4VWVhTy73GNtiG1qi2uXpFtnWoqmmgp6FpWRSQQL88Yl5M7zhKKPMcyqJ6shSEM8jPYW7Ak8YAM+zHNdY19F%2FCsslNuL7bX+uHLp3p7m2Z5RBBqBfBUC9jxid6gAoI6+kbYVF97v4ZJAA0fKB3yeYZ9RJUwXUMPwi5GImo0TWitU1xMcRFy2H%2FQ6OynKcuSmoxuYCw54wJap0zmOYzNCH2i3GGvC8O3IfWtCFcT4NVXjrZkNtpudJciynK1kkoZRI9ubc4ZPj%2FwC7+2BDphpmXKKJ6ctvkb1we%2FwCu9sdV4RjLRjBCYgutTF5a0PSUHyOeemzmlmRdzq4IGHbqDrNqjTGUwStlbvEqqgP4R9Lm2E3pBhWajooSOTKB2xZrW+k6eTSsYqYI5FkpwrKR3BGOM52YmHylxsEytrjDI2PMSuWqupmpepMX8OzqtjioopBOsEacIRcAk8ljYkegub8YGq6s8Z0iSRQtMFhijHI2C%2FI9O4555v684y5lDRZVWy5dRR+KAzK5Z9h3chV3HiwNj6X5H1GjSV8zQpE8au0UishMcdrDdcNdbty3q1gLi3a1xwVVKwF84qs2DyyTlWomhkzaLKhFCjfLTFYz4QkIbix%2FCbA%2FmL98atNmBoYpJNm5JWCSDxbAoOSpW%2FPJUgni6+vNvcs0UFQtXRzLIPELBaiBb3DXG9DuQhuOLkX3Ai1i2TMqj+KyS5i9LTQwCQBo4I0iCM5ZyqotiVBLhb3IUKpPAw12d9IOx8psS%2FMHJ6eqpIvCpow9M1RGjjcZA%2FDG5HKkrYW4XgE3vHtE8ctM0LxB4mUqJkAQ3PZy%2Flt24PHPON+Cvlj0iKNK+m8Ja0F4URRMwA%2FEHK7ivA8pNr2O3i+NTMpFFRIlD4ckZ3m%2Fib32H38q24Nr7R2J+gnLDWzBB3I+MPcqEOdZI0L1FJGYIXmVgCxDeGGEZK3NyQBybKTzaxwN5jnWZw5cunpJdmWfNfMmJRvCy22lxckg7fYi9vvjR0Nq9NNZzBPWZbS1tLKrwTwSk7QHBW4PowvwefzwTaryhqFzRTQ0tQGYSQ1AI2DcqMy7+DcXVWBbyncOL3wYlwyk6dxAghx7dHsZ1o%2FVM2nq2tyyi1DtymoF3jm8RUqrfh8gDAOLmxa1jfzDDN+RXOKKnkyovNMFklKrEihFABB33u97HggW4te+EBR1sNPvWpgapaMXg2uoQPf8TAqxZe%2FlBH3wyumGrJGlTTxzueFKkBdzKygN7HYSzAfb8sF4OVo+GZHn4%2FTxUmfWeSx6iy+GaoiSaeBSu4QIpNu15FIaT2u3IHF7cBb5HnddorNDFmNO09FI4SenbhZFvyQfQ+1sOjNKymyLMEo6rL7pGzrU%2FMs5R3BtayhSg4PHfnk8YhNR6Pps0DVmXCkZUjMqidkCdr2G4lWN+FBJJ4sL8YnysUWkWVe6w8%2FWDY2ToeHYNqYP59o3xaFNT5TQyyafzBiaeWqhkQI1+VVxxdQe549TbC6zfT7UsZljEc1OzeWdXBK%2FwC6SDa%2F27+mJ6lfOdFslSJUqKBmaGopNxJ29yWU+nsw9ufS8rmUeTUUAzjTGY1s+WVZ2VcDUyqIEYC6kCQ7uSQBYC1ufTCa2lbyVsXTDv8A38oxrZqToHY8v6Pxg9p3qNqHTmVvpyatlq8pl2n5aSxEJBuGjPcdzcdjc%2FfDD0vqb+FzRaio1E9IwCVIFrmP3BPYr34N8BFbpyn%2FAIWmoMiqw0D+JHNEGYSQAEAFrHgNu4uebHvjxozOqfIc9OVbzPl1WRGd%2FADEcnntzccfvhRbTdhWLkVHqvUGNse6vIrNFg909CPSWffL8vq6Fxl1VNTxMiSRU23cp4DC5Niw5uLg9%2FzxJ5PPTS5HUyNPGJUcQskgKspt+MrydvvhfUGdyaPp4shzmd6d4I%2FmKFHpmYtC58reYg27i4BvYYxt1GNZPFDlmUotdXOyVCRqI6cw2CjYguyn1JJvfF9HF0yaUJ89H5SlZGA9VrV+hhEyQ5W001DUJXqjDcoW29mNtqI4uebdlOJrSsjy5JJPDTzsEnaOdpE8LwmPoVXsAeBfj0wJfxpYJSKv5dq+RAsKhaeRB6G8bqVa9uDYEHnG1pXOmjp56GnqU3+I4lHhKhS57ccn25Fh2xO9jPsmDvWeSEefxQ1GRVdJI0njhVMKIFl8Q+tgtrelhz98Jqnp6g5l4E1DPPMHVYgW2GN78XBPYc3w1aGvSlq6nOKdZJZS2wJU2Kog9AgAUfcKDgWpoFz7P6wRUsdPUSN4gLMIowPX+W6lSPbgYjRubYElxmNexIHUma1mW5xVXQoXn2hnsyWsOV45%2FwAsEPTvVceo9SVuQ5zT0sWQ09HIKuNY0ERLgKODwPfuOecBetq7R+Vapq6fOnatngBjeCkk8u+3fePKT27XwWdL8xzHM9PVMVZR5ZQ5A86WghjQTFrX5O0mx9798Ia38TJIHXr2%2FSMHTloD618f6iT1ho1dJdRP4NTTR1NG1SslNLGwZXiJuvIJHb64kteTyPq3L6WEsojRAQt++LXZb0u0dqnVumdQ57BuoaFXjeEqdgHdCwUC%2FPtgkzno70pi1jWZ3QZaJo5ivggg7UNvTdyBjnXH6zw7iDU8u+X0+P8AU6t7H8FyOOYiWo2ubz+A6GUtqunWsNX58iZblUzR2UeIy2GHRkfw0RU8dJVarqjdAG8O2LFzZVlun1jjpEhjVlBGxQP1x3m4izemiYgLtFrjAuPVkZYRtaWWm7guLw3LZGPOTr%2FdQRoNPaS01SU4y+hiDrYBiLnEnV1MNREWt6WAGOZjp9HhRi+1VF+R6Yio6ppKhaKhh324J9MPMPgqKAwHMY+4h7TcM4PU6XEA8o6TmY16UGX+OQFKC5wIaSzmfXWZ1cC2VIbi+CfXdItDp6omqnAbYfL+WAH4f1MkuY1IaybmN%2FzxbsDhLIw8RdAzkvHfbh+IVjwOiiMylU5DA4ibdIvONf8Ax7nP9jfpjzXTPUVDRxm9zbjGH+ET%2FwBh%2FTFqGIlYCiD0cRF9SvadnUqDoMINWZef%2FwBYYth1AqFg09SyzShU8AX3H6Ypro7LNXyZ1TVdBlVQ3huDypAxZWu0H1I6gZRBDIHgRYwCAp7Y+fOK8NtzeRU9ZtTxGiglnbXSJjOtD0WZZTU5sM8rAI5NyJ4Rli8RySy7wbRk2Y8rzt%2FUGEUuXynL6h2Et7SbrAKbkcEHkWtybc39r4b1WkPTJ5cjkMFdmVPJ%2FtAlfckUe5TYKQVdw36KzqQ1%2FKNZjpY5%2FXrX6XzGnizVmFVDGrmEbiu8iI7VCFOb32qNpNwLHHQsalb6FdF047j1+X8RfkgVOGVuZWAPy2N6Pyg5G1NlmWnNabMaCpmn8SlmoKmmLSRhlI8RCQV47hgQQbCxF8aMM6RUNVEHVJJkVSjU6NuUMG8rnzJyP6e%2FbkE48GmYTrl2aq1LX7zGFdCoIB%2FESePa1r+vbi+avgmyOrg2VtPmEr06yFo1ciBu2y7AXZRblbqOLE2xsAep%2FwBEGLAzJRGozDKpKQVlQSkZ8IhuAF82zkgWvzb6iwJIx3MUr9PU2cGuy4VFFKKN6VUCTlCGYSMoWzr3G65P4QeLYxaZrMty+vhfNI4J4ahrNcyboQPUhGW4N+178d1vzH5mrUlezs0gVgCoA3+Xv6n04x7xNICPkZCw9%2FU0qyXY0kEbGII4dUc3PY25At2NvzwdZRXfO0SpmkVn8JmRo2VFfg7eylbX4sLeouvoB5xXQVlNSmOihilh3I8yF984JuC4LFQRyPKB9b98S+itRSZHVfMmgpaliBt+ZViFIYHcLEc8Wub9z684iw8rwryvkZm+rnr+Ikrnk+aVXgwSTNJHSgtAFAGwEKCq25HCLwOL+l740Wq0oJIFp6NIKylYiSoR5Azm4sGVvVbMOAO%2Fr6lU1L%2FiqoL5WH3GPxapooJpI6ReAXZgGc83Ja3cixJPAjFBKa6WGLLS7xxOWj3MNu1Td+9+LXt%2F7YaWkK3MshqPMOUx16XzWo13p1aELN81YU7CJfLIe63t+NrgnnngW7Y2aWsq6LUqaezLTceXz0iQwS0VTIYvFk4G7a21vNfdYdgb3thRaO1LDkWoKeorhOlCzhapYRucLfkoGIG4egY2v3w2tXZO2rsrbU1DUy1Kx7AKuUeYrayhhc2IAtYEgWAueLuMbJF6AjuO8TZGOKLNH8J%2FQzW1Xo3KczymPMoaqMVlS7RmiSmdQEVR%2FM3fhNz6A3+mFfULmOj8zalPgRQML7VbejggeQkXB%2FM8G4NvRh0mew08i0k9PWxRRwjY8ilncheHUkLdCwNjbge5Bxv6kyM6lykV1XS1gnrO1bU8hmH4djFbgi3fcfyx66kZA50OmHb+pvVcaPcfqsWtf4UGYx5hQpSxU9TCrz08Mi7EXsWUDdbtcqRuHe1iMaOdT5GsST0+aUyVVOw8OWmidFYDkMGsG3X9dv54lamjznMKiTIs4mmfPKXzUdQ7+I86j+nceW47eY9rWwL1UdHmKy0soEFerXZWjt4h9efQ%2FT1wrsdgpUAbPr6%2F3+8YVa3s%2FwCiNrOepD9R6fLc7zZZ%2Fm6bKoYKiUiWUMYtwaQDebkixZjc3ufbER0%2FqpKvUDNANo8J44FicR9xweeWv6jucBZlgy+jgoUWRFK+d95Xdb0B2j3wQaIz7L9P5lSVtOzrVpUi+6S8bRH+nbt7%2FUn8sYxrN2BnPz+cguq2rFR37QzTLYpqyPNKupplLLsk8ZW3ysDZiGsVBB%2FvIFvXtgj0x%2FF6TN5KjLY45llUwyhoIjEVJ4ve6H3v3xragznTtLmdaYsnpaes3RSJ4sMiTHcLsRdeL8clx9FxJaf1Pnup5YsseMytSj+SY4dwew%2Fq9bDm5N8WG2+sIRvfrFDc5TepNVFGPBeGrMUDox8WWSU7WHoxUe30BwJ0dRs1hK01Q+aOzKiVCS+V+1j5hcj0txg2Vq9KWSSeGiCVMTyICCyyA8bbqbg35sSCD7dsA1AKWOrhaSkqFqI6hQ0jkPGy%2FRCLX+hJxtj9ifWQ1ne4sNbinpep2fU82Ry1U0dYbo7kJFwP7SCf1GGHlms4YqMrpCgyzJJoqYfN5hUx7%2FCYDlI3ex%2F+lSefQ4AtbZ01N1DzuGHLjIi1jM0cjrGW8o7kC4%2FLGbSGa1GcZ3S0NTldEUJCU6wBphEfU7SxF%2Fc2viu1ZJqsZaz1JO+n+n9Y5tqD0qWHYDz%2FAIlhOj2qYIqanyiszLMsyr62YtJNXUwp3B%2F3U3E7PYm1%2FYYcVcFilC2t5QcLzQlPl9KaenkWN5yxcs1iQ3a45NsNCelpQqSVb8gfhHc4U8Xx6%2FHWxwB06%2FHU6b7B8YTF4Tddc+gjgDr2BHYCRckMlQgSNN1+LnEwkdFR5asMwV5e%2FHpjAhqK6VaWghKj0sMEGXaWECGozBt7ei414ZgvnEJWvug94o9rvb9LLS9B10A+J%2FqDEWTVWdyEyKUgH5Yjp8vo8mzQxUyDi9zb2wwp5YoIvDiVVA7Wwt83qDJm8zXvYE46Nw3hVeOyjWzOKcR47kZ5d7GMVXWnP5Vy+aLxCLg8XwC9IdQVFBlNUkF7ue%2F54k+tU2+CTk+oxqdIMnh%2FgslTO3DH1PfDm+pPtKLrpqTYtpThpYnqTHLoanfMIRWTi9zfnBz8pT%2F24hNFxQChRYeFvgr8CL+%2F9sC5SjxJa8bL1So35T3kHT3RWRgCOgplPuVBOCGprclyuAxw0pIPA4sMQ1DCKumNQrMXS555ONOorKqe0Hy19vdjjhFWFfcx8Ru02uzKKwOVdmU76v6YnybW2ZyZpTJDDmdfUV9JWNcRyRO2%2FwAO5Nty3IK8MfqCMLhqxKCaKiiqwI4F2rJDGOFYkuLX55ZrXPaw4w9fi6y+af8Aw%2FViTZDRCpeQh9ouzQhVv7n%2FAInsDisSV8tCxjnhZh7q1jutdT7ev6E%2FfFgwcwisGwaI6SxHToNeghlVatyysMkGY5NR%2FLO6lI0S7QhR%2FwDDkctIByTbfz63sMenj0hXZrHT5LqWqp6GQrG8uaxguqsoEjkx3NvxeXm49ecZdJ5lpipUZhLmscOaGezUzCTe3YiTcQUa73uDzyOCASPeb9Oaqsepqctral5ppGmmWS9iSCxY8egJNz23YfDntXxK9MP1it2WtuV9iB2pdLzZXMKjL3+bpyodpI0bYp9ie1uLg+xF7G4GrWzQZvlYkioKekqMvQJKqM38wXChj4jlixJ5C+UW4C3OJeap1bp6krdPJJItFT1qtPJCFeNpU3ojCRbjsXtY2IJ740jXwSu5qcqoZV2+czjYztYclk2seebX7evrhQ9aknl93fcGThyQN9dQTrPLGY+bra91sQfbHdFNIVUbSwT1B7C%2F7d8TWrtPUuQ1CwpNFKkyrIktNKZIWQi4Kkjd3uCGseMDtMxUlUY+bjk2BwocGuyGIwYbEOMjaaUTVEJEcNM3iN4soHm9FBP4mIHYD0vaw4z5tQwVsJzOKnleJJQsqmdS+1uR6e4a7WtyBYeonR1T0jrPESjxsCpC8BgfW%2F2wb5XmFdUS%2FwAbqMogqY4mSV70QFNybANGoCbSRa3Aw9xbxkJ4bd4JahRudYLzJLDUmkeHwbvcLNZWQEcXY29CD7YYPTXV8GVTvp3NpYmppWvHPuYiM24tY2t9+cClTkUrQ1Mgpy5ijD7lkACC45Isbi3oCObfbEMsklGY5aUSIeFd91huN+L2FuPS5xlLXwreaa2Vrk1lDHHqfJMxTUMMlqqWbMSGpZXZmM5PAKtwT24PPa3NsbeT57WQ08+W6inro4KOSQQRmlU7apvxo8jMhjJ2eu4jaeO+OaT1SnU7JYMg1bWT+NSQfL0dUf6Aouik7WLKv9vtexGB2vyaXL6ary%2FO5%2Fka+n2TUqSUpJqQTbiQC4W1zzwbe+Hos2ouTsYm5dE02dx%2Fu4W5rklTrigjrMigM+aUBDxNSwneQP7yBy36398L3X2WfxBKHU8NNIsrMsNUpfcFkvz355Jv39T749ZPqrNNLZlBXUXzNJHIVJkjdgfEU33KfQjjscMaCWlz3KqwZjNBJLm0RjIJRzuP9becMGv6gfmMauteWpGuv8zYM+KQfL%2FdiAOfZJXzZDBRGWKjdWaoaN9kJlBB2MNlzJxcAtZr+XAOsOZ5FmiUc9LU09bSuGZSSH9CLC3HH3w5n0hRZxo6OvzDOIPHgJpJIFkVJodptexHnUkXvtNrjnnCf1LkkuU5l4D1yVllDGSJibDttN+xAHPthLk4px9OnaG4d%2FikoTGhXatyvOWoMzq8tVfHh8JQ0okfcpALORttc83It9PXB7l2W5ippttClDC0aM1nlDTKezWNwB+g9sV0y%2FN0jiT+b4csJICsDZk9rr3P3AH1GLCdItX5LmGWx5Uhnp6pLrUKZbCVT22iw2getzhli5IyNJuA52OaK+ZB0haaN6FEhSulpqdhtkmgUneo7ixIv6D2wEVdFTDUfz1PMKaleVFIlA8Q3PJVATe3fuAffDObJq2ozFcsQwVjyU5Q7JhOsaKpYMGUm1ueL29xhe5mkKZutRJLTTxR7YRHEEjJIHD%2FAMtVFvvdvcnDpCFHQxRSe8UmbZ5Q5L1R1Cy1LNTzVLFHN4gQALFlux%2FK5wWaS1LoWqrZKqodKKcx7Y2qJAwDHuQqIB+4P1wqs4zMz6nrq1aam3mqZvElLeUg9xyPbE1l+Y5ZT1KTDM2zGaQ7mWkheMgn+ncQAT+ZH1xWca4pYwBGtnv85YrccPWu970O0tDkOq8myijgkp9X5UkUl3DTyxpfixBJsFB7gf54bXTZabXdD89S5lT1UKNsaWnlV1Yj2IJxUHTdCmY07w5fp6FKyZhd8xp1kjKjtbYwkQ372e2LNfDjVayhzeuy7PsnoaemWnQx1FHM7LI1yCCH8wNrep++HDY9eYBVcgI3vfWIch2w0Zqm0fpHrS5VQ5VFsp4xuA%2FF641a2YmMtewxIVV9hHrbviHr2IiIB7emLBiY9dKhUGhKblXvadsZB19QF4Lc4XVVMJMwqmJ7XwcV1rliebHC9kk3TVb8cXw4oA5xAQSUaIvrTUXDLfucd9Pap4shAZisY5JxG9Y5lap8O%2FJbE%2FpenpaTRbeJbdJGfy4xixj9s2PISzoAvDUB8zCNviF0vo6iFFFaadeDfnn7Yjf%2FAMX1B%2F3A%2FwD9s4rLqmkMOc1DgkhnJ5xF7W+v7Y55n8bzBkMvbRl4xcKkVLrr0n0Ck656dy2JoqZwzH3%2FAOGBzMOt2YVhK0dKQrH8VrDAv0b6G6j6kZqqfKyRR35dhycXM0p8Gen8qpKeXNZEkkADHcLknFHtyExhtjqS1YiN1A3qU81zLUan0lXDUFDM8RheWNmSyq6qSGH2%2FwArjtitZp9P1dIiLnhy75lTNUwT0RdElBbaI2BLbSLck9yQRYAn6F%2FHr06zzSHS%2FJs76eRfLUmWV6DNTFELhWG2KQt6Ksm1bepdT%2FTj5s5hDWVxmrayt8R1cBi8m5nY+3Nz6knsPe5FzOH2oay6jmBjNQ3IB2krDoerrqVKmjzfI5w5kKrT16NUKEFyzwqTIigDuwA7n0xMZDqzU+S5nBl+omqc1oqeIIhqDJKsUCn+llO5UF+wIAv7nAOKGIU5qPFUOltiqw3E3+nI9f0xuUmZ5lTq1PTTp4MyGNkqY1lA3AqSpK3U2J5Xke+GNWQtTBkUqfgf4kVtRsXlbqIwc+yfLc5%2F2qKpVi%2FKlGAAJ9SB2AFuOO+I%2FVGnslos5mpKPNZM0yymBioGqKop5L34MnhhASWO3bYE2ufxENp87zqnpXo1rYoImdXJ23cWBFge+3nkepsfTGLO8yqalYKNs4mzBYUBQvuCx7uSqgn7X47379yRfxGqwc5TrA0xnU8obpNHO6+nan+VpaeBFL7gVU7gLdrnnERAOePXvjutinhqGhnTaycW%2FwAsZaBd7eGLBm45tbFfZzbZsxkq8q6mwoKnzPYC+11XhiPvbvjbpKp45Awc8kkMRyPyxrSCWJGpxI2zcGKhrqTbvYevJ%2FXHdKAZLOkjIvmZYzYlRyebH9cEITW2xPHqNGGkGbTxwCmoc1leF0RqiElvl5XvfzRt5Xtx+IHkG1xbEXmWRzxjw9s7PKqvTqsJtKTbtex4BPYG5+98a+WViCrp1q6ycwoNqyKnmRe%2FlUmxsSeLj15F8TcEIzLdAZJ52sRH4aFg0pW4Fjb1Fjb2Nr4doVyq9HvA23S3TtIbJs9q8jkhFPmEioswkeHZyGHr9e54vh9UVVkPU%2FT0s01Uz51TqgjlMjeawA2kMtyAOO4AtxfjFfqinjjmPzFOrC1gEdYiD6elj9eLn3xK6P1fU6bqaaSEpZJdzrcgv9D6EfvjbAzDh2eDb+AyHMxftKiyvowhlrHSGcVVbIvzM9e8CoDPUf0CwB3NuayL2BJtYDt2xFZfnVbpHM%2F4TXyRVSgJukUrItgTbw3BN1Pp2+2HfFlVHrzThz6kigEQK7xGS3h772DHmw4t5iDhN9Q9CZlkMZkjoWWlaRmimFMLuw9BIOSOR6kYY5VBqPjURbi3rZui7oYyshzJRqispBVwV1FVxRVni06gMUYANGSF8p7C5tYg9++NLqRoug1Yauv03k8dO1JC0ppRJ40ixgc8qoP5kW+uFppXUFZ%2FHMvop6KSnqQhpxHBGzyksOCVcsQfXgfYYajal0%2FQR08tJmlWlfGSs6TqCpvxxYjaR2N79+wwVjvTmU6b5f6JBdVbjWApK%2F0mV182YJl2X0ss9SzEJHHFvdiPQD1xK6f1BWZPnglCCjlR7EK7IFI78d%2FuOcMbqHpE0k1BrLTbxI0qhnaLv4hNjwFAB9%2F8zhdZ3S1tFNGa6jSNHf8AHIqgv9R%2FUV+ouL%2FXCa7EsxH5h01GtWSmUmj5yxmS5%2FQZ%2FkK1os00e1nUAtYD8TXDCw+6nGhqailo8xir%2FloII3TcGDLuBA3coPS3qQRhQ0OraXLKSGOlhLsBvdyuyxAttQBrbfX8N%2F8ALBhSa4oNSVtPSwRyQ07r4bwsfFZSVtcMQvF%2FT98M6uILYOUnrFL4LVMWUdIhZ5Wq80qaiVy5aZyobmwLE2sP9MEmTUuczyKlKWhTg7i5j4+gFziS0N06z%2FWWoqjL8phSOOOodHmcHagDHt6k%2FwDN8Ww6e%2FDBpWkEM+d5lmVfUBfOqskMJP0ABb%2F7sIuHGiti1xPfsJZzjXXp92Br1MTOk8lzSSMU82fVwYWIemrI4nt%2F4SrA%2FmMPbpHLqbT2raKGXPqnMqOo%2FlstXFH4yAjvvQKGH5HDQh+HLp9U0yLQnMstkX%2F4kFSJD+kyuv7YHqrQObdONY5I2YTQVuU1tUIaeugTwmSUg7Y5YySLkA2ZTYkHhcWOnjODZcKl2CenX%2F3K3xPhOVXUznRGj2%2F9RxzSlo%2FviHzG4jvfviYlsIePbEFmzFY7Ys9U5tdsQar32o7E9gcAJVWSpkUWJODnMmBp5WPohwGQx+JSTN7scMKTqwTRV+6J+IlcerybcxQc8uMEuTUzy6UW%2FYR4gerqXzuKP3kGDOkhSLSSRx9zFc4iL7ynPwlofphVL8ZWzWMiDNpkHoxF8QG8exxO6uC%2FxmdV58xxCbD%2FAGftjlnE2LZbn4y+4nShdek+zHTTLYdPITBTRUwYi5X0%2FPDzos7yyaihp1qFebsRe+K8ac1pl1fl0iVMoWSNSQB2ODrpvXUWYO1U87N4b8AtYY5FhcVyuN2feV8qjuDGmJSgoNgJXr594zNbZDkVRoXOJdXw0z5LJQT%2FADoqbCL5fYfE3k8Bdt7n2x8KM3gySQ1uaCqpKaCGp2Rw+MrSFS3kAQncePXtxj7IfF9mz6h+G3Wml8kzSSmr58olaEQE75DH%2FMMQt%2FeEKf8A1Y+IZQrP4m1nYKQzOu47vQ2v3v6%2F+2L1wcpUrBPgPlI1ZnBLSWnzLTlIYGoKeeqmVd0kj2MTsRcARlBbbexuWuRcGxtjNJnyVmnYKCXJTQwRzuorqSmCPMrbSYpGFvE27bi5Nrn6YiYa+uhFksLrtuKdGYC9+Nyn9e+M6ZrXQSKxqq1UJIYikjJC+ntc4dhye%2F7f5kTibtDleQNLH4FbDU+N5FaqXwFjYkgF2dgotwe7KLi9+QIaaKn+aWmgTkyKt7hltft2IP3GNnMc8qs1b%2Fb6+oWFAqxxrAqqoHZtiqFZuTc8Ek3JOPeQVdAdUZYZap0p4ZozuKiPdZr82B7k2ue35YhuKsNLoTRFIaN74n+hWa6Xyuj19AsLUqrDR1ccMIQRC1kkNuOSQvb1Hpiu9L5wBwNo7njH0w1pW0eudK1mkM2yqNaavpzBIzSkkXFriwFiO4P7Y+dGpNLZho7UOYabzPaKmgnaFrf125DAd7MtmH0Iwg4cb239oHXf6R3mcMycKtbbl0DMUVURtEMaNHG4YLKiksR78c+vH+eMDxB2klSF1jDDtciO59Tb8u9%2FvjkZjiKOTskQgnevH542ZWFY01Y0EBLtYhfKFJ%2FtAPb9sOuXmiyaqTeFN5SSqtcX7cdjY4IKXMVepElSsT3YF1hCoCPUCwsPyFsQjQSidofmoy4VfMr3DcCwBHt%2FpjqjcRuXc7QQQGIHf2%2F5%2FbElFppaauoYQ+zakyTPIkbL4Tl8cMbAh5GmeQ3JA7Abv%2FKPtgJrKKKnChJZDKPxqybQPbabm%2F3NsE+TZ78xTrDX1ksgogBDTs7SRPdhuuTJ5AfdBzYffGxmWVZZmFDUzeDUCrdh8tHCl4xduQWJv24Asb++G11KZVfOneA1uaG5W7Tc6U67TT2bJBmTLJSL5mimkZVcj+m6ebn3Fv8AXD3qMty7VeXGpQfKUdSQBWyB3jQbT5PJuuL3I9eMVOqY6mCoWGoSRZoboRPLYAD+mxtttzxfDJ6WdRarLCMrq6pDTMd5il2m9u9iRf8AId8T8Oz+X7i4%2FIwLiODz%2Ff1d5B6m0hUaazySeGoFMKVxJ4rMFV1vwyBrFr%2F22v74In1ZDleXrmeUZZTVNVdkmeoiVk3EXXaoFlNubcW+uGhrTSmRa30sJqUxiplLSeJuXyH0UDYCAb8AMe3b1wuMiyeGoymfSmZAUVRSSgVISUjxJALIxUsYzcH+wt7EYLtxrKXP2cdGkFWSl9Y8Xus2unPVOor6s6RzqKkpqarR4vFRWLeI3Zm3sw47eUDj3wU5v0ur0UU2YZxNWRQciESIUYnkG62Nv94G%2FwCeE1rfRGotG5kixOlQE2SJUUjq6FrXG3bypHsbG4P3w3elXV6m1Uv+HtWxpHXogiglF0JYf3MSSTiPGv8AEb7Nlb35E+fwmMugqv2nF7eYH7wWzPpxSR1YlpJ5qUMCUSJJGMR9F3ta%2FwB92IWh0TmFDUpJ4pSQSAqGHrfuWOLMPk0tNWKIkRBazxk+LHJ6XUqb35HIbA5qSPLdM0b1FTAkk88ngRb4VO1j3AuDz68WOJ7OG1r1EEq4jYfd7yY6DaboqLLJJlUPLLKzO%2FqTfn98WQ03QDajBAcJXozRhMlhIBG92NyLdziwWQw+FGAV9O+K06eCG9es6Mn%2FAALr0EnqWIKFVRiN1dldFm0VFFWpuFLUrVRj2kUEA%2FucS8HlFziKzOXxq3w7%2FhHbAXDV8fiVS9+v7dYk45Z4WBa3wI%2FPpNWYDYBgdz1yBsAwQVRsthgdzAeLKQ3YC+Ov1dOs4naNnUGM3kCUE3a+3A3SoP4axt3JOJjUMhWlnUdu2Iul4ykcWO0nBiHT%2FSbIv3f1lcOrKh9QxIO+%2FBrQxrDpR5Zh+GH%2FAEwH9QQtVrGGMjgP%2Frja6gas%2FgOnvkorXeO1r4BuyBS1tjeQln8Frqqal84hdRTrPnVTIqm3iEY0bj6%2FrjaWpM0rylFYubnjHvef%2FkDHLsi3xbC585eq%2Fu0C+k+g2V1tVQmpLneWU9sODpFnsaZLK9cPBZjcXwtl0pPlNO9bUSeIe23dfE9kEOY1lOh2GGG%2FJta+OeYwSgMx7mNb7GsJUdp31X1LVVNXUJDUySRBW8inuLdsfNR6jL6Rts1JM0svZFjViPuL%2FwCWPohrPLT%2FABIhpAsLA7mJ7C3OPnXWVtDBLNDTUsytI3Mscu1m%2FOx4+1sP%2FZQuLsh38yuv1hWUmsasrNuCrjjKicTUMHcmVURgO3bcT+wxmXwp1aSnoqytIPM0zmOP8rdx+Vsd5O+VQWmOXxpIw%2FGWLsP%2FAKmucFuQ0dXntfBleUQCeWdvKvFre5vwAO+OiVqnJz2Ea%2F3%2FAHtEjI7sEQbJ7QDnyXNMxZmlp6Sjh4DeFAoJH%2Fi7+ve+JvTPSvVkldSZjlemKqqpEkjmd6hDGk8d7+Vn2qwI9ji1+gujumdPRRVmbrHmGaL5%2FFkHkQ3B8injiw8x57ni9sMF8nopxZQORwRit52dQSRjrv4n+BLHiez9lYD5LaPoP5MFKDN6OYRLI%2FgSOB%2FKmADKf7TzYkduCR9cIn4r+nDVlLS9RMtQtJTBaWvt6xk%2Fy3tf0YlTwT5h6DFkavSENQriylW55Xsf9cCuoNA1tVl9Rlo8Soo542ikpix2OjCxHBuMJxeF%2FEJdGup4hWcXM6Bv%2FIeR8jr599SgAYOR4aH2AJub%2FwDvjkQ+Xd0lXkAgD2P1wU660Dn%2FAE81DLQ19HUQUjylaarZTtdDe1yt7NYG69+DxbA+yUs5BnMp813kUgkj6A2%2Fzw0qItUMs5tdW1Dmt+4mMksjp4iAOAS3m5tzbHjw4GjUxSsZmuHV0VVA4tY3+%2Fe2NnK5J98tBFHTv8wDGDM6oF+u5iFB+5sPvzjFIgiYBH2SRXBZDcE%2FRgTf7jjGxXY3I5iRjTMjo4YEXNr8H64YGT6ietyr+BNR0JJdXNQlMpnIAsFDj+n39b+vfAC0LiFJRGBG7Hax7kjuPrbjG7kmb1mnq2HMcvrvClW5BVAxW4IsQwsf374Ixbzjv1HSQ31C1decLs90%2FTTZT%2FEDVyLViQRJCef5VjuJ%2FtsbAA97m1+cBUkL0czOjMyx2Kt4fBP+mDzJc8izDLTRSSxr5wdhFmPHqbdvucY6%2FTsEsopaiup6KOUcyyR+KqjvxYE3PuP1GGWRirkDxau8Cquak+G8NOmmvMiqKSkoarUeYCskBSsgroxIrnsphYkAAAWszAn0xua5FbkGdZZq6nyilo6dl+SqgoZfHUH8bAOpvyORYcffCMlp3yur2hEkj5YBj+Nb+oBNj9L4Koc%2FhbTcsdFmNVJFyr5XNH4kKgj8cb33IQfS1vU37Y3xs5gvhWdx5+cHuwlFnip2PeNybSxzXLmrsurp6uVYmeoaRo4ognFljAJvcc2UXP1wlNU6dzjSObpmkcXgLKWeCQoCDY82HIv%2FAJYZnTrU8WZ0UdHLKY5MvVYpYkXxI6ngnc7g8EiwsvHl55wVV0PT3UVJNlVQ+12jUUkc4G13Y+bYY7bLd7Ekn19sHX1JnVKw6Hy+cDrtsxLSpGx%2FE1em3VUayy5cnzTbSZlTwhIpIyVLEDg+9%2Fr3xlOX5jKGzLOFFSKOe6RVJmUMADc8bTf7nnCp1DoXVHTWuh1TlMsMsELB4pV2uV57MvcYPqnq02q9O5fBSGkatrn+WqopE3vHyLkC1kB5tYn8sYxssowqy+6%2FrPPhc7h8TqrH8jLJdI4iMppDexcB7AEAX5th9ZJCxjU35t2OE10romFDSLHGpVUUAg%2FTDuy3dFCiyJz7+2K5nv0J9Z0C4eGq1+gm85CRsx4t9cDylpaiWcm4LWH0tiUziq8GmPucRNNdIVvySLk439lMf7RxA2+SD9T0%2FuUz2uyRThCod2P6Dr%2FUxVzhVIHrgcrpCpLA3PbE9WODc4HMwJa5F8dQX0nKj1O4I6mJWkex5YjEczGLLApP9GN%2FUe54Avu2MVZSgZZYjkJidWAfr6SetPuxr1lfdTUYn1XGwFyXwDdby0FRDTgn8IuMNOaiep1lHHt43YXPxEZe1LncBYd%2FT8sVvi1u6bZc+Hj72sfCKbL4md+9uMSvyj+6495PRGYfyoyXtcAYk%2F4Pmf8A3N%2F0xQ2GjLPvc+omvaTKdIwU8eYTRyCa9xxfcLcbe5++FxnHVejgplossphAoNiz23fkBx+5wOVlc9fVPWZjUzVtSw2vNNIzuR6csb40qqmirCCFVDzbjnFTxuHJUPf6zrPCfZvDSwNle%2F8AoPynqt1RU5zKlTJI0luBc8W%2FyxTPqhkY03rXNKNIwkRnM0Kqm1VjfzKF+gvtv%2Fu4tzPTyUynxCQoBO70wnerWgst1HmcWdVWdS0iwwCFoxAH3gFmuGuLcse98NMXKrxH69BLv7VeyD5vBkODWAVII7Aa7H+%2FpEDTTyzSingjaSVyAoXD36YT0ekadpnKvXTqBLJ6IvHlW%2Fp6n1J+wABNNZHp2mllWkrBPUxcPvI3j8uOMECfynFrfXEuVxB7xyL+H95z7g3BFwz412i%2F5gf5j3yrWqzqo3E39b2AGCrLtRxygWkPH14GEPlGZxhAisQRb1waZTmwXjd5gOLnAivHltAaOKnzUScOwN%2FbGwKhCdzf1el8LujzNyA5mJHsP88TkGZt6uTYXH%2Fvibowi+zD2ek3dTabyTVeXzZVnuWUtZSzKd8Uqgj7j1BHuOcVh1v8K2YUFVJW6NrDUUBZn+TlA8WMHsqsSA4%2F8RBAH9RxZiPMJZSyg8jk3xnRiWCmTcWPONqi1Lc1ZgORwivIGrB%2Fc+eWf6P1JposM6yeqy87iqienYeIOxKvtsR9j7YjKdzOQpLSufLsN+R6c4+mEWW5Wd0dTAJVf8UbDg3HrgF1N0G6OapaXxNLQZfUypZaihPy5U7u+0eQn6spvhgtzHqwiG%2FgDr%2Fwtv5yhEqK1X4cUbQozWVJZB5fe7Gw%2FwAsevAK+JT+AhlHmDu20qoF+OQOR9D9MXBzn4N8irKd6PT+t6ylgKhhDU0cUrNIo4BlTYQvPbaff2wFS%2FA%2F1LjpnloMwyOocbiIVr5Q7j0A3QKtz9WFsTKytFdnDsmvusr1Q1s9PAyw0t%2FC8zyR7r7bjhhexF+1xxhnad1HlecUEOVZxqTZTRxEL41PLULS7vxbVUEr2F9oOM2efC31l01lfzFb09zupqqlgkIyvbWogvz4oh3lb+nYe5wvXos%2F0JqaTK9QZdmOU1dBL4dbRVMLRTRH1VkccHtwRg3FyWxzrusVZWKW6MNGT+e5dpsrKIMyMmw7lnWlnFh2%2FttY9+bH7YETE1JJ85TV0FSm7aUZrM33UkH9MNHTuvzX5fJQmSeKEMbwRsixvfuSvvbubHGrqnRiQURraiGlgeXYYKdpGE0aHne102uCO21wfcemGN1AvAsQj6QCq41HksEEdN50jahlnU0+XCdQyhUd4oWUdwh3kn6t+owWS5nT0tRJTvNS5ikTi9TNMsKqOOUNt5+3mA9sL+npkos0iWM%2FzSxXc4BSxHsfXEjV5lmVVB8rmKTeGoPkMgRS%2Foyqw9vbk++BqbnqBU95JbSrsCIfHVlDX5f8lmWcxVUO5gtMqKIoh6csBuP1tY+wwO6X0xEdd5YMtk3xTSbmQ2I3A9xbi2A2cVCpGvyzJt7sLkt9Th%2FfDlorN6zVCZhqSiqqYU0Qam+bQxbwwvdQ4BYW5uOLYI5zkjTodjt3hGDQtV6kN031luOnGVyrRRgq1woF%2FbDLilmRQhNwAL3xC6by%2FwCUplZgCCONpxJSz+Hc3NrYrXELevKfKWK+wWPsTUzufxqiKmBF25PPoMeVO1CfXtgVi1bT1WtJckYi8cYAbcPxd7d%2FbBUwW1gMXT2Sxlowjb5ud%2FTynK%2Fa3IN+aK%2FJBr6nvNKtN+ABfA9Xta%2FOJ2scbtowP5hyWA5xbV7yoMIMZuBIyD3fGxmEf+wsn+5%2FpjxXQM0kVx%2FVjZr4n+Ucdztxh2HOfpDqFPhr84pMmojPr9YlS9m7YjPiY6dfMGhrIuJZLcYP+neVrU9QJamVLiG5xk+I+rjeCikjW2xgB+uKLxnKbnetDL5wjGVijtEd0%2F6QZpS1UNbWRgwkdiMNz%2FAuXf8Ac4%2F%2FAC4ktKzwtp+CeWQKoUXviR%2FjOVf98ixUsO23IUs3rLBm010WcqyKFRIAAbd++Mon2vtc9++NWpCoTsYj173xjgDTwVF180W1o2F733cg89rc9vTGz4zr3E7JRkKGGjJKZGq0UIGZr2AHfsf+GF51F0%2FNUZUKqiqlZpfKFc25+44P%2FP5NXSOZLk+d5dnU8Ec6UdQkkkUiblaO9mFvsTgV6mVHztc01JHGkNVVVFQqLxZS9wAPYbsKqaebO8Jh09Z0%2FjXFXX2UNlY6Ko6%2FEtoj8iDKmZxo3VWXVRzGnppUZPMrxsGJ+tgSfyOMdPrXOctYUmd5e7kHmRV2vb%2Fwm2LAS0CSrd4eAQbgW5xBZrpbLczulRSRyIb%2FAIlvz7jD1+H1sOk+eEyrqnL1Nrf5flALK9W5dXIHpKpSwHmQmzD8jieptVGGRX8QtcDgNYY0cy6KZbWB6ykqny8RkEykjw4+D3uQR2973tgKrcursjnemTOfno4zZJfD27uO%2FPNvqeffC67Bao9YcPaM16S4dfh%2FUduXa2DKqiUAbb3v%2FwCmCSi1ssi7A6%2FXm98VmTUdVTcOGBv3UXt+WJKh12IrK1YAR%2Fdwb%2FniPwHHaT0+0VDnTSz1Dq9SxQPdTxfEtR6giZ1lilQqBbg9rYrPT65ljT+W5v734OJ7LepLrZG3BrWG3sBjHh2Ie0YV8Uxbf%2FKWTpc8E5Z2kuW%2FB9sbMFashO9lBUm4vhGZT1LSo2xmUsVAH1P5YJqPXcbqrNNfn69sTLcw7wxXpce6Y68qrNh8kh2gbhfm2DHIM0jkmWKZ7E2AB+%2FphSaQzymr9reK3h+pwxMgkoMzzaly2KqgR5ZAgZ5liVbn1duFH1PGD6HDRZnVooO46ciykHK6jOK1ZKWljZFp3KsBM9wSEupDkC%2FrYHvxhW9Yfh36VdcpqzMNTadXLs3rCXOaZURT1BPFt9gVmsABeRWNhwQecF+otRzzZjS0MvgrFQQ%2FLMIhGoV9xuT4YAJsEDH1K+uIrNdXHIsqqsxazJTwtJ354GCnUO3Ksp6Y72nnsGye3ylIdefAl1Y0dmYqdEV1FqXLmlUCQOlJNAp%2FqmR2ClRwLozE%2FwBowxdD%2FBVq2KCnbVOvaGjqCx8SCiy01Sbf%2FwCZIU5+6EffFiND%2FF300qsrbKNQ1cOW5g14mjrIwpf3KEn9wcczT4gOmBiZctz+GslhYIYMvBq5gbcApEGYfpgeziv2JOWtuvyml%2FCEWwrYm4tf%2FwADPR6OeCtznN9SZkIpRNJTNVxwwSn1BEcauB9nB+uMuqfhC6P5%2FlZyvTTZnpdlDFflKp542Y+rrOXJ9rKy8YndRddUovl0XTepPCqBu+YbJqkQxJ6tI4TyAeu62JnR+pazUjGsp3WeFhuimjpaoQyKTwVmeBY2+ysfvgKriWTkNzqTNxw2soQFGoi9HfBvqDQ+pXr6nNsm1JldJLHPRRTB6WaWQH%2F4h2SCNR3spYsQOV74bPTTRVLpjUEUmtKWKOGapnmq6sHx4I1eQCNQWAKsEJBYxbe53A2w2oCZEPicMO4xq1NLGzbio%2F44dUcfyqU5ARFtnDaDsEd47azS2n9aTrleTx002WUxNPRfwsRt4RCC8jzG1z2JVie%2FBY3OEXrzTuZ6OzGsyvNUCS06l9ym6shFwQfXBJ016hQdOqs5Nm1RWR6XzCTY6pOix5dJIQC+2Ty+E3Zl%2FpJuBzg6+Iilo84yDL8hyTIlrcxziYJCtK0SmjpWFmdTHfxGPB5JWwJ8uEjo+a4VOpP1+e5EoOENMdifP6hzkVmoq%2FNY3iZxL4izRuRIDfygBrXtbkDjnD103nsWeZPDWrw5G2QeocdxhIak0Pnegs+qMozsQqUkk2Vbb2V1XsA9tpJHoL29SMF%2FTLN%2Fl8ymyyZoWSps6tFIGXf+RsL+2Oj8LsrpVa0OxoTnHFka5mcjruMGrVt5a+IerVmYj3xO1ank4V2Ua7zGo6hVujc1ohEsa76eQD8Qw9fIWrW%2FOI68drSdeXWEOYReBLAjd3%2F443%2Flfm7Qqh82Oq2ETZlTIwvbBtpfIopC9XMllXtfC3LzFoR7GjrCxTaURZDZRpTJ9PSGuSwqJhdr4VPXyKjq1oqNHUvI44HfvhvazyyrMEtTTswCAtYe2Kw6ozHNc31LDUJKJFpW2lCcUXJdbVNpbqZ0DBp5WCgdBJrVGU1uX9OXGXyMJFX0xX35jVX%2FAHqb98W5yilg1Hkb5bOLGRLEW7HA5%2F1D0f8AfhJhZH2ZWRh5xrl1G1wyzA7hieb35vjE8synw4g208kA2BI7X%2Ff9cZAPS36jGTwrgnjgYtNlYYS712cp7zfylzttKW4%2Ff%2FTEHq2ZJ8xEYUIIUA7Ack%2F+2JCKRoW2oS3r2x1V6aSKY5nqed8vppR4iQiPdVTAgWKx3FhyOXK3Fyu4ixVjGrpu8ZoZxnj1i8J+xFtIWBP0%2FwAwXo6aozCpSloYWmeXhRGNxPH0xsVf8DyOCSTNm+crV5ipqeS8SnveWReGH+7GfX8SkWxsZxqJYoZMtyKk%2FhtBKpR1DBpZl%2F8A1Xtc8AXUWXi+2%2FOFzqLNNieCknma9yOSPb7H%2FwBcR25XN0TpOZ3cSZvdr6SG1Zn9XnVQzSSbKcMTFTpxHEL8BR6ffubcknnC%2FwA4Vnkv2FuTgkq3aRiFufz4xtZf0%2FzjPKd82kphT5bFGzGVxYyEf2gnkXI54H37Y1xsa3Lt5KxsxXdkrSviWtFXWRSzN4MUZZ2PYemM+XaVL3qa+NiV7RhuPztg%2FkyGhymNlhhLOeC7csT98RioCzECwPoMWzE4ClJD3DZ9PL%2FMX2cTa0ar6CROo6ali04tRT0wilBUb0Fjfd6kfT7YDKXN66nf%2FwDMMBcdzhiZ5GlRpmdLG8RUbl7fi9cLuKCOKq2TwyyqwIURNtbd6G9j6+n+WIeL4wFgIHTUL4be%2FIdk73JyPP6yml3s%2FPBvGykFSLjtcX+l+O3piXy7qEtLtNWsnhA7Tx%2FlbEHSUVAsT%2FLZkIy%2FkaCUBzyLXHFr%2FUG4x1mOnxNToYXUSRCzs7AbueAF78c379%2FS2Ez8P5hsCOqeKXVH3Wjx6e6%2FyXMJGgizqOjaQAbvEtsPviyXSWvXSFVmGrKqtmzDbQSpQzURFxKUuxe%2FA8gYjtyBj5x1OX5rkksMrJLCZF8WKVQQCtyLg+o4OLNdBupVRQ9HtW1ec7GekzKgiWYopL79wIU2up2g32kAi9xgAY71PsDqJYKeOHJQU29z035SxeRavkqJFDVDNITvDOfM5vyb+pwe76bUmXywuilGUrKlr3wiMg1TlGcsvjXikJ5jcAEYK1rs4yV1rctqWKbrlSQVYYgS9lGjHWRjKwBTpNt+iGmDWvMZ3ZWN1QgBlHtfkEflhg6U0tp%2FTdMIabKkTav4gAdw+pt+37YhtL62yrUci0NYy0deR%2FLWQ2WQ%2FwC6f9MEplzLLB4rwCaC%2FIUg41ShLG5mG4ryBYTyt3hTQVlPMohUbLjyiwAGMeU1FDlGqoKKLbEM2MgniLBVZwtxIFt+M9iQRcd74ictzGiqJFkhYJJfzITiLjirM16ipmtTEy5dkEJeJuNs87i3qOdo9R2ODQ3K4RfOC01MtkOa0pFmMqRiwvjyVMnpx64hGzloKrdV22yEm%2FHc+mJmKshbzRuCGF%2FywDfpGMjylKwM6ryPl2ic1rqaRkeCITKwPYoQ3+mDLoT1Eoupek8v1S0W3NaSiED7Y9rK19quE5sLdjwe98A%2FVKQVei88Vk3b6GoCoOeyEjET8CuraTMcgMWZapWoFFQgSNPFJClM+7cYiXLKRbm6tcjkqp4xri32Kjmsn6fHp+0S5vYbg98Ti1MGr6ZZwUfwZJTCzgB7va6i9iftzhO0WeSZTmlNPltU6x08ivNZ2BYA9iLi5tf0wR%2FEv1Iy%2FXnVut%2FhqmShoUFFSmKS6nb3f35NzY84BvmIbXCxU0cSx2Q3VpL3uR6i%2Fri6cM+6oQHvKTmae1m8jLZUMseZ0MFbCwZJY1cEG%2FcYWme5KkPVvLsxjS3iU5Vjid6O59T5npw5aJCHo2KoH4Yx+n%2FDElXZcKjVVPU25hjPNsWFm8Ub9IjRPCfXzm5TUJqs+p4VS%2FGGO8AoKNaaO261zb3xDadygpUjNJALItlviUqKhHl%2Fmck8YqvF7za5rHYS3cIxglYsPczSniWppJ1qxaNkKsPpirnU3pdmcOZTZrpKVtu4uUPcnFpNSTrS5csESjc%2F1wICnjmQq0d2HfCbGQOC7fSM7rWrYKhiB0LrWoy5xlWeTNTVi%2F3ggG31wef46%2F8A4nD%2FAOb%2FANMEGoOm+RZ3AZKilQSgE+IBZhgS%2FwCpbJP++S%2F+Y%2F8AHENuEHbamFVZ4C6cdZ5GTwxncSx%2FL7f8%2FnjalyzKcsoP4rn+ZUuV0ZVjE1RKolqSpUFIIid8zAugIQELvUsVHOJDqNnWmOldLQR1Wp8vbNMxrFo3r5qJ6mkoBZmaWKIWNQ67QRvVksHBRwQyjGb5Vnb0s2t9QCHKErYkWHO89rYqrMZbhQyU1CrMkSqCCiu0YUPw9tqs7e8WAmv8I6cx7fT1jTN4+lYIx+p9fKbOQdRMnEKjItL1eTV5LSQTZqYpKqSmAQxVUcS7o4QztKu0PI6mBWLJ4gUieb1xllmleokkYlpGZ2LFmJuTc8m5v+uAuvr9N0Wc0eYZZkLUUAngHzDVc01RLNJsi8V34uSGZdgCR2P4ATuWZrp3qJBHGHs%2Fa4N%2FzB5wlyNu%2Fcn5ys25luQ%2FiWHZmhXVJKuxsQvHftgQroqvOKwQ0UUkzubBUH+foPz7Ya+b5VW55l+T5TFlUeWxUEAjkdWLPUljdm8xugPHckAkkcHG3k2m8p05EgFEkpccSSIvDA3A83rwOT624Ho4wPZ+7IIa73V%2FUxXl8apoGq%2Feb9IJ6V6VRrNFLnciPUswtTkAoq37sCLk29+O4se+DjV1ElJk0tFTKEhjgsCB2P8AmffnEtltKaa9UkI3Sra5Ftqn1tfvf79saWqvNlVQHkkclfKLcWP+f5H2xesPAqxE5Kl0JT8nPtyrQbDuV0zNGClXkDyXPnAPmPr%2FAMnAtNK6y7bW9MFObF1eRUUsFYjcGBHBPIPtgWq1J3OOL4kvXQ2JYcU7E7rXkk09UKTY+ILbeb84AKpCGJAP3wdCRP4JWxScbQHBPY8j1tgLq1Nzawt6Yr%2FFE5gDHeAdbHxmzkc2RSyCHOXq412PaSNVk%2FmEeS4Yiy3725tjaijhkSRKVvPIQ9OgU3YXtYbjwO%2FoTcWv3wPUqwqWNTI6LtbZZLhmHpfElHl8NXRApWDxEbcIPlx2Nu78H8vTnCGu1h0A3GhUd5K1eYUtMEpEo5EqovLUrVssqO3awQxjbb1BJwZ9Nuo+ndIVueUOeZLDLlGd0rRSwUUYZIZShXxI0kZWuVZlO104YgccYAIdK6kzCCrraGkj8GlQvMnjISim%2FKqx3W9Li9vfEd%2FDMzlc%2FNrLF4Q5ae4UccAX7%2FQC59hjNtrsNMs8nKp2pjn0f1Go8yzeeiqkgpYpp3bL2S0d4gbBSu5irWsbFm5J5OHhpzWCOjUFdKb2sgB4N%2Fv64pFL%2FDoI40ihqY6uNiZZGkurEdio2gr9jc%2FUdsMLSfVqOCGPLdRkhUA2Vlief94e31A%2F44SZFGzzJLXw7jHueDkH5H+5ZjNjNRyioR2eBiANtyR9eO2DfTeqaGbLI5ZMwenlS6uFaym3YlbkX+%2Ff64VGnte0uY0C0QU1c8ovGka+I8l+20L3v+pwR6Z6P6n1aair1W0+m8pDhkikjJq5x%2F4Ljwh6Xfn%2FAHSMD1K5Olj+zVqiTVfR6z1%2Fq+PJNIZ4KKGABsxr0vsiiI7bQReQ+g%2FM2w9sly3KdKZPHlVFJIwXzSTTSF5JnP4nZieWOFjpys6f9MY5sgyFDFNUsHmeWcvLNIBYM7N6%2FYAD2GPeZ60mG4Qo09ZMdtJSI29pn9hxYAepPAx665cVSSdsYBc3hjkHeSesc%2F8Al0MNHUDe0m0bnAZW+gvzf3xPdO5ql6Rlra1pJG83Jt+VsA0Gia2lg%2FxHqyvFRmjDcUT%2FALGmB%2F8AhoPX7nk%2FtjJSZ1mNLmEc+VlEoiLNI5sX+gFrj88J2fn99zAbveXRMYHULMKHKtJ5pmVeJPl4KZlcx2vZuOL8X59cUjl1CKGbMMq01DIqZkipMsjEsbH12cEewN8WX+IbUs1F0xjo8sqZxVV1TGSYVJui8tcjsBxiuGXUWXyUFRmk22LNZyPlUkiYqwW5kbxWfaGP+9u9hY4snA0Aqa31MpvGHPiBPQTYoqupyWn8T5lqeVmRvIvm3r2IPoftbE18vKtIgroWiaqAqfHeKTc5PKggnaQeTuse%2FfEFlcma5vWmesrKmukdAVlrmGyMeoG4kW44tb7YmIKqOjpCXaOs8UFH2yfhHptAPlH0tbFqx9dzK1aId9PM0q8hz2nrhIk9EWFK8sanbduw3WsftfFh8pyp8wzcSKLh1AxUvJppqaelnVZGi8VWlVNx8MXHJvwD9sXb0ZTRU2UrmchJMkS7N3BtbBluUcfHYn6SCnF+0XqJu1Lw0UaUQNgo5++MEFMkj%2FMWBC84jKypaWoKlybm+N2tqIqPKiolCMy+pxUbizHXmZbq9Vr07CC+qs0Z65Igh2r9cadFUxEkhhdvTGhPmXzNW8VQu49lfHcIaOVUlF1B4YYL8Dw0CiAl+dyTJCvLnaqqecavh%2FQ%2FpjZqFnnS9Pxt7hvXGp4db%2F8AJ%2F8AuxEFm8qJ8dleytpjK43WymeZgTcnhQOO3Fz9ef1H9N6s1LqzRmT1GfZvVVb0VJHSRrO5IEcIaOIKPbaOT6m57nn18b+YePrbJaICQLFTzHaxJAB8P8N%2Fqp7D3wK9N6kppOlQFGa7hrEXA3tYcdjxfnnzYCpB5OWeI+4UmHNIRmGdZVlZQTLU19LEUZxtVvFQqeb8Xt9r+mLFae6f0GRw%2FP5hH8zWXDqXXiJgbjZcXBvzf7cDFctFVMLa+07E4BU5tSbj3sTKpPYe%2FwDp+dss9VIqYpeRCx3KviEkX79729eMW72fwseytr3G2B0Ph%2FmVDjuVeli0IdKRs%2FHr+0F81anpy0hsNx7nlvsPU9sQwgatkWOXiPxAVUGxI9zzb8j7X+23Wzx0iGIUokkkJ2SIBvFhfm%2FuB3v+XoYV53qER5lMasWTbyx9RewF%2FwBP9eLVVWe8RsQBqFcsiQIYIk2xoCUXuSPt+eIbN1MmXzxTRKSVJ%2FCCRxwARzzz2+uN6Cfx4vHRWBIG8H6DuP8AL8sYM0qIocrkeRVcuhtyLnixX73%2FAC5wWo0ILs825XfNgkYqAm0FizWPrzfj2N74DaoXDEj19sGmoxHI0rKFRQ5I4788cYDK26gutmJPIwJkDpLhhnYmtGxGW11gDtUX55Hbn64EqsEkk9z7YLUi8SnqQ5CoVufQEj3OBqrRmIYjyLe%2FBwiz12I8wzomD8q7HJUnduvf%2FL%2FXEnR51m2WTxV9MwhmkjaNHQhWINwWtf6nnGrVhoK0EILFB+Jbjn1x7NNP8qZmiJplYgSogClj%2FTc2J+3pirFeViI4B2Jtw6j2LGJPEKg2lRitpB7ADkffEzUZ9T0aw1HzGX1iyBJflkZzGhsQdwJDBv1HPf0xD0+XtV0aVKUEq0tPIFnqlUmMbuwYhPL69yfpjuQUPjKyRDwyNrIhZSAOLliDe%2F29+BxghXt13mCimSC5zSQRQPV5dS1cUyFmSOuJF+bK6owKkWvYgE41bZJVQj5mOohqg4C2CqpS3ck2IPa3pjTrMs+VkNNUIwdOdljwCAQRcDggg%2F52x18lTywpHDT7GBu0juCD+wsPpc48Ta%2FcbmAFXtLhdHqjJ+knSKDVWR5GJ8wmvJmNTUzE1MCkmwQMo2R2s3He9+eMdV%2FxCvmrSvT087StYeGqh5D9QFJJH1tip2W5d8pHNWJmlMJUWxp4%2FE3EdwzXTaVv%2FTe5wfaZ6hJlMSx1GTslxcsgSO4%2FusSP9Thbk493XwxLNicZDItTHl0NRkU9XqrVGfQyUuWxUbtJuL1Z8Rrj+oqpt+ZcW9vTDnyV8t0JTjMKplr82qh%2FPrXlD7SediW4Vf8Ad4xXebVNZmyfMZdFURuU3Bw0YDj0vZ+fzFsHGja6s1xXLSair4aampgpKNOzSTgDsTyCPov5m3GK5l0svvN11DS6n8P5xuUmf57reN6bKGjWkZyJauRbqo9RH%2FcfqeB9cZ46bLcuqBp+GWatq9m+XkGw93P4R9uPoMCmcatqaCsXTumo2iMCAMIyrJCh7OxHlF%2FQd%2FpbC76k9UDleRjTmTCZYsxZ1zLOYjvke3DIpB9T3P5dsCY2Lbl2hPL9ouzMmuhN7%2FzN7XmpKzXleaDKKwplGSuY3cq3grPewYkAm9xtF+%2F74j6XR0EFIMwzBkgkljWWGYVK3ba1nO0XF7kcXW3oDhZ5FnmmMls1AcxrEmgBDywABJPa28dvcXB9sT8+qK6qokinlqVpZCPlBI52xHuSABtO71xfcalcaoVJ2EomW1t9psbzhXntbHLH4NPFT0e1dkttkQlYdjtJAue%2FH5DEXRNUTTvUT0sZjhYhmbhRdeBYEffjm%2F6Yj1rKapjirql3qJFP4VgCqsagWBAK+vsPruOJA0s2YzQmmuI5lDjxG2rcAkgB2ANuwuftg9SPlA+XXeT+nUWulpopp3E9TUpAPIXDbmAG4k9+f%2FTF7loRSZdSUKHiKFENvoAMVC+HXSr6t15QvmMEdTSZOnzZcRqPDYEhFa31vxz29sXIqmANibX4HGAuKZA5lrB7dT9Y04bRpTYfORyZPSuWqHN9npgO1XC1RIVWUhF9VPAwaZnUJR0DIX2b+xOA6qkp2AE1huHJ98A4u2Y2n6QrJYa5BAxqerhcst5B6X9cSMBlkVGqBsI44GN9EiW8iqdl7WHtjJTrCrnYdyXubjtg17ObpA0XRmOZoiqJuZbD0PfGLwD%2FAPObGzIaeScghTzwe1sbHy9N%2FeMRSafOX4mtVU2reoEE9HR1MEUVMQPmNoYkuQbBbgAbbcE3tfi9hqaFmpqfI%2FBhnWU3B3IGtvbcSDccW4HtdTYkcnH15Rf8bUahEVly6NXVBtUMJZbgDjtcY1tCy2oJovDcBbbWAADeeTnjv6%2FrgzjGFXg5D00jSqdD9ILhXHIwa7G7kbjF0LUqeoemdz7L5vSKGuBx4q9%2F3OLUaozIxOIAoZgDx259O%2FHv%2FwA2xUfRJA17kDlYykWZU7Mh5uokBtc+nAv%2FAMbYshmlRBU1TpCqrAWYudigFgLc%2Fqf1w59nFBof5%2FxK3x%2F3bUI9D+8wMzS23uWa4JNvb0%2FQn%2FnnGrMhkUloiQr2APYi%2FmuOb%2F8AvjKjP40lMqlTGtvMgBLcE%2Fsf%2Fa%2FPVSJDTGJGPiKltwFz%2FwAMWhRo6lfMnKWojkiTxFC7AGYL6cWt6fpgV1PVPWgRrU7Y0aw4PAANrfXm%2FrjdkjmpFmMbRlSR5VU7mPAtYdzxiLzgKIQpnJKkWBBNwbfTjm+Nx6zVVG4o9WwTU1W8bybi4LgXBNj%2FAM%2FQ4Eqte7W7HBvrCJ5GMhjYryoBBtz%2FAOxwGSoioCZQR639%2FY4GyOnSWnA61iR0KBnljYAgobi3f8sRtPCk0jCPzDjzLyO%2FviepklNQZFjVk2kea4JxsUWSRyOkrxsWUMfKeOT688%2F+mFlqBhG1TaMXepaeSGvaDYGJjVhwSwW54%2FbEQsksAeDcYlPmKncbkdh62OCTXFOKHPJVVCPEVJPNwVNrW%2FEe+298QYmCllhZnWQAHcguT3PFzbn1vz+2KlkJ963zj2o7QT1Fmngx%2FL+GFDcsVF955G7zevNri2JrL4slzDK6mSqmqjmCOvgKgRYmS%2FIfi9%2FbviIVqOSIOKNXYNvdmYLcH+kAW4+vJ+2NzLJII65vDppNr+VYI25+wJB5H2xtUOum6ibP26SZhyOqlp6iqo6iljQRuB4lmncKvmtEu5lA%2FvNh639MeTSwTUkJrap9sd4jDCu12vyW37NpUccFiQT2scehVT158eUBd1heOJUBIFgAq2F+PTk9+TjXkzKnUoj0s04iZkkUybQD9Ba4+t73wVyKvUmD7Y9JtQ5dFQ0MdfTvAAZdnh+MDKthe5HcD68fTGfM6+jV4J546ORxED8vGlto5tuIsWb6kk9ucR1SXr8whpckoal4nCIkUt2Z3tzYJawvwByfrjFEMyjgqMsEdQsUk4SoRE5LreyG9+Qb8H1GI2fr7s8B5mboqs2o6L+JZbmAiQOu6LxfEkS4%2Fq4tb6Yy0uus8pZUrkanadDfxL7SAeLALYj73Ixr0OXx0Na5zmhn8MCzxM3hTn2FihCjsfqO2Nn5GjWvimlyyc0sh3rCsfgF19wwXbb6hcRHGW78Yki5Dp0BM2n1Xq+sSop4Mx2NmJZKlIpheUsLDzfiH33W9MbOhc8zyFjl1TUVUk1IPCMLyy3eIH8ClL+U8qe4xH1GXwtEzZdPKpclkSpZQV9luDY39D7d7YyVgl0zDlVX4kDQTSukiKU3cixuFa457X49RiFsdKTzKNSKy1rxyt1MO8ulylqiVs5y16YVysixhg6wOTwGeW55t6AEehN7YIZtN0dBM0WWwR11EGE2+eBgwBWwDMpBUE9hfm2APNM+q6qCHNpKSlE8LBlKyBWlIHqsdrA2F%2Fe3c436HqFX0VP8tLIvhZgibt4u0ZBJA57i54xMoGusWOrnqIwBkulqPLYJhWVEtQ6u08Sw+H4SX4uWYhy1+ApU2HY4wZZT5nquqoNOZHSp%2FtUy08McaOzSHd+I2BHHJ+wOImtkzII9UlBUXikvIWIkCqy2AYLyOebjj6euHz8GdHl7apz6quKp6WnUwyte6FmswHlHHFvU%2FXG1lwprLDrqaU1G1wsf%2FS3pll3S%2FS8eT08gqKyT+bWVOwAyyH%2FQdhgqWMTM0jAkLyL4zVG97WexOMOaVq5fl4U3DHFasZ3bZO2MsSqEXQ7CCOqKmWeTwb+UHAvOs7v5pBsHltiSrMyeWpdTzY3uwxpPIHlKyRgKwuDhxUprQLFljc7bmolUyCSndTtU2BX1xsRt4ahACd%2FcEemPdJBFJvstrGxBx7mgmUbEYFSfXGzECYUec0TeKcMiFxfke2N35pP+7f548%2FJHxBKGsF4P1xm2R+4%2FXGAdzefNzrwJF1rBLIgBNErDzbgR40vP0P5D0NsaGiHYZfPFuJClSAfwgbnv9SfX27fXGbrXKJNXU%2FLlBQrYHuD4kh4PqLn0xHaKlEdNUkGRmABUeg5c%2FwDDnth17RgHOtH%2FAPUB4YNcOq+QhzpF4zq%2FJBLEXRszp94B2m3iDke%2Fp%2Fpi0Ks5qpEDIUh5TbYck3v+w%2FTFV9KSSjVGTGPxFLV9PwAT3cD257%2FXti0NPJ%2FtMoHG5VUKWux5JJP%2FAJh2wb7PdKnHxH7RB7Q%2Fjr+R%2Fed1cqxwyyG5dfOfZbf+hx0sSmNpYwoaYWBBva4797HGRIElicyvcSEra1jfm%2F1NgP0GMc0he+wIsQ%2FA97XHqft7YsY69BK7NaoZEiKITeUdrevf8u2BXOWnd1R0iJLKxNza%2Fv8A+h9be2COcujOvePww9ze5N7WF%2Ft9fXA5VGAxySSSEXF7g8gk8d%2FrxiZek3rGzArU1LFU5eKgowEJupPAWwsO%2FwBsA0i07MCYSpYXAK%2FiHNj9cMmvgnmidTEHQgkjk3Pp2Btzz+WAmoWNmkUqkhBN1I7%2FAJfr6YFyR13LFgNpeWadHETOJGPrwpxOUdPt8PYwJLEFuRYH6X%2FfEdTKn4VJsT2N++JrLYXmlAYqAvvfn6djgCzrGan1ir6nCP8AxTHDNO6+HSIu9VDc3Yji4t3%2FAE55wH7UN0YMyX3EBttx+frg96p6UnyvNjqKOMT0dYyiRGJskgAFiRY2IHe45vz2wByjww0MgRmBBDq1yLenBtb%2FAIDm3eq5albm5hLBjENUvLPPy5IMpbjt5WBYHuO%2FP7YlUME1Ei01O0PhpeVlj37nBIDFzyoNwLA29bY0Y9hjINRLtVgyx2up9yRe2MsQEtRcoLTfhttQAn72UD9BiOvQO5MeslIqPK8wggipvGjq+zAkGOQi9nuSNp9Lcj6jtjYippaCQ5eslUhnRPEgcbfEb8QJX8wR+oxGOs4malqqwSNTnwv+0EirY2sCOCPtxiZEFFUtTw0chQAFS8zKoN7ckj074MrAPUCQPsSdabI5KwvNl1VSRw03hNFFNveSW3PiPYbQWPPBPpzjUy1MtirYVzMxxUyjkqdo282DFbkfaxP0xsRZTHQZEMzjzKgaSZti00EqtMi3%2FE6WuoPYcm%2FtjVSpSZIq4PHFLTXDK8KMpseDtc2c97gjEwAA6QXzmu8VLXmoMEsKN5%2FCSV1RCtuAHJHN+25QLeoxIadp8wrWAoaqaGoy9TIZBM1o07HZt%2Fex5viIrswevqVq6iKWV3JM81lKl7cbQAoXi1gSe35Ym9P5SJKlIKbMfHEyLd1LRqXb+h94XseLm4PocRkmZchV6wq6P6Jy%2FX%2FVnJtF5%2FNNSUucVkVJJVIwDQkk3I5sSbW5uMHPx09AdF%2FDzNo7LdE12ZVf8YpJaqpfMJo5ZN6S2FiqLYW4sBgX6Z02c6J6o5UtBPURVMWZU4eRQZfKZFBCkeVl579v0w%2FP+lcyGpgn6e5+qP8AKvTVVJvurBpS4YjjkG3p2wmzbStgAPQgzfH0zAmVxyfNKWuyihzJ8qV6Sojj3silJgALOLkEMW57DEfmtbTZvUPRRGnoxToHhaeoip7qDwpbgdiBtBPbjGLo%2Fq6sybJaijqaelrYYS4SGoiWVV3jkgMpswHY3sMT+o6vL%2F8AD8ddLlVPQyTBTRzRmzSMp5IO7j6249QBglX5kDagTKa7SnxmCuzJTllLGZopKp4gCEa4BHBbcR5ieBe5xY34KGFNmmdehlpI9wNj2Y+uKkUtZUGeSpml3ySHzFjuJ%2FPv++LWfBfGkua1iwzEmWnvckkkBuRck3xFafEQiTUr4dg+cuBR2kdp5JFCx83J4wOalzeKpcxwMjlTfvgizWnpqTK3pZbkSrzzbC%2FEdIJpICCqgfivzhVi1eLabPIRpkWKKwu+v8TSqKEzB5pW8jc8d8aaU7KSpZnjXkW7jG+LxS7Um3I3YHvjyGSGTxFHJ4KnDX4RX5zx8rLTxs8TBlbzfXGrVV%2Fjokf4HX6Y2pWLEhnsG7LjW8ONyA8RK3tvGNZsD6TxE5RLmS9x748fMH+4fpjOaZYHYX4I8t++NbbJ%2Fb+wx7U26z5z9fsqzjT%2FAFBOSZ9AIq+jo41lUMrfid3HmUlTw47Ej64iNJKpy+d5AWZfLH5%2FS7cfmT%2Fn743+uGaZnm+vZM2zmslra+ppkaeomYO0r7nBJN7duwAAAsAAAMRmlm8PK3bylpZDc259bD%2FM4a8bL%2Fa7PF1zb667b89QbBA+xVhe2hCvTdYI9S5XZmJSshJCkjzbhbtzfFqxS%2FMyFFk8NrM25X5W%2FftbjFTNGGWTWOSqis3iZhACEJ3cyKLcf8MXCijFPEEFiL8tfn639h2wx9nj92%2FzH7Su+0Q9+v5H95qyp8qQviFgbBixHe9z7XH+g9caMn8tmRXCon4V4Nh7Aj072xuSOzgyAWVzYEG4YX47emIqefduCm6%2Fh4N7sL%2FT7i3vizL3lbImvXNG1PLHMgCtYAnzmw73v+mBfMmkFKI4pAhSRQpceVgpHHHPI%2FzxPZkauYfJIsfiSsGQM3HFuLfv64gs8AicxFBeKyvaxCtbnnviXtJ6OpkURK0bBZDGRyzg3INrEi%2F%2FAKC2AzMwUklaWRW2D0AHF+3BJvgyYlYgIrKrm%2FAve%2FJII++BrOY1Ly3JcI%2Fl8vAJAv6fX298DXDYjrDbTakbRhWK7mG57E%2F6c4JaJNqFzwbcC3Nr4HKJWSdlAAIAN7jn6cHjBPQqyxlbNY98AWDXSNQes2cyyelz3JqnKq2APHOpAdhfY3owv2I7g4r1qDIqvTOZVGSV0S7VkD+MIyGZLcFb24N+3uO%2FGLM06GysvawPA7Yyag6X5b1Ly1aRp2pKxYz8vUqt9nqA6i11uBcdx6Wwty8YXLsdxDMXK+znT9jKouKaRVAkYOWbe7nve1uLcet+Te+PS%2FLGJWaSZJgQpNwUI9%2FcHsLdsSWpcmzTTeoazKc9EQzCgkEMiqBIjWAAIPttsQe%2Fa9jiNSNUa0bJMz2KkNZUa%2FIYMBfj62+%2FbCTlIbUeBgw2Jvtk9VS5XDXS1UK09W5KKZOX2%2FRb2Iv%2FAFAd8Sj1+XT%2FAC15Ehp41MamGGIzMbC5dFK+vALWuPfnEHSpPJHIWlkWKVSWAU7XtzYgcd%2F3xJQ0CCmFSZikOy5Z7bi3sg5J4HB4H2wRWSB0Eis15yTOW1lFDR5jUL4cFcpkp2mdAJApsT3HY%2FbG5PmCUmYtPUw5XmIdSsiKGEdyALqyFfMPQ3IvckH1iWTLxmMgy0VFTSOQITVNaVeBcm3lve%2FpjM0jQ0LZU1OsTmYPLIyDd27fhLD37%2Flgleog5HWSM2QTnLzn3hwCmQgbt0c2y%2FZXKiwPrZtv2xtUtLTUVHvg8WrmaEGZxCPBi3HyspVjY+lmH5Y70pBFWZnLl0eYvT0IiYvJMhqFRR3cqigkA822X+oPOPNXDHktTUU1ZXpPl5bwpGpN15V9GCtax5Bs3Y++I7Ng6kDHrywi6ZVNbk+d5JmXgSTFM2jJjMN3BWVTYKhL3t2uv64sp%2F0j3WjQfUzQ+mtP6SrKqqqckzOWoq5ZaCSnSPxE2+GPFCvvDcHy29jin+WxVtPC1NljIIrt4b7wHKk2sQQBfEfqwZxQ5KlDLURSwTSi%2FnjZltyBwLqPzGFWZUGHieYmaSRaAD3MydP82ocjWszCqqCHC2jiuLSG3aw5xmqM9r858Nq+rkZYVIijdiViBNyFF7AHAbRkK6rw3ufrgihL+GqRWue5IvgepyyhT5Qu2oBi%2FmZIRP4ttu7vbj2xdD4IdG5uGrtTzXTL418CIejMeWt9B%2FninWUZZLW1UcUS7iWUKpUkuSewx9RulWlIennTLKMijiVKj5YSzkC26Rxdj++NMpylel7npNaQGfr5dZv6lzRpapoIwZI1%2FEAeRgTnhFbNIyOUK%2FhB7nG7XVLzVUu1CrA+hxGxzjxmZZdrr3BwRTSKawog9tniMWM4tLPF%2FOZBtUWBOPaz0jqXqUKyr+A+hx5lYzKyrOWA5tjTVvGqIlY719QeLHGTMCbkrwyX3pc2vcYjjKtG5iKPZ+Vf0GNyudYy6eE0bW7+mMCw1Hgq0pDg8d%2FTGBJNTxJJUVBXYRIR6472z%2F8Ay%2F3xlWP5GZGU+Ip7qPTG18%2FS%2FwDdn%2FQ4zMifMHrEpTVkKE8rRILWF187gg%2Fp9MRem5hHl8gLbUZtzciwNyPy4%2FYYlur9Qk2pIoDDsmhgG9vELbgxJAtbi3P3BH3MLkh25ZJaQXdvr5bbvQi1+37Yb+0I%2FwCvt%2F8A0YJw7%2FsKvkIR6PEs+sMliVXYyV8C%2FiIH%2FaKLXB%2Ff9Di5kEc8rsZNjREKYzYjd63P69rc2GKZ6JiEms8h2Wucypi1%2FNttKOwJ5+1x359MXGjjgCyR2PCCRifwqTcm629Tzz9b%2FU32eP3L%2FMftK97Rf8tfyMw18reMUDBmtc2bcFv+3a37jjELWsy1EYSQEEhW8Rhtv2HJ+%2Fbv3xuVNSGPhwhNpFm2ggA+rXA79uOPr6YyZHlpVRUyOQ0LCzS3BN78m1vQ%2FbtYDFmXp1lcMyRRJQRmSdws9txtyd3oPf7YXueSpNWSSvtLMSTdQP3we5rUxxvMqAs2xjv58vHHr%2FlhcVUzSTO4hLXJPH9Vz9fbt+WNwOm5PjdSZru5uY9w3N+EXPP5+g4GITPXWGGSF5dp3jgjllPf9wf3xMVXEKmGQCaXhXBuPyPtiMzCjWeGISG6x3N2FyQB3JP63xq42sa0e6wkPlKvJOwUnYzbha%2FAsBx%2Fz64KstjcNu2g%2Fsf+OICiWNJV3vGqAlVAFve2CLLpEjku5WxF7g%2F1fn%2FxwBasaBtyViIa27m1rm%2Frg70dAu7fsZTa1ybW%2FTv++AYBmXYrEE+otx%2FphgaRjdoTJJGygHygEEEe%2FbAp15TW4+4ZWP4nIIKTqk8tNEkZqaCCaQqL7nuyk%2FeyjC8SoqMwy8UKjmItMrKVUMoBvcADe3PBJJHIA5w2PivyOtodb5dnMyn5avy9Y4Ta3MbHd%2F8A5jCao6s0pVnhE8fJMbEjk+ot2OK7kHlyWBllwTzYqH4TN4tOqQtTo8M8QtJdy3iG%2FwCIWHl49CcSMPghWjkqxLC4D3WwufoTyD6Yj6mt+bjhT56RggISIlrRAnkC%2FAv34xtvQJKVShnqKtigZmkTaRYc9ieB9%2FbGaz16dZOw6SSioqeOrWfKsykkRFWVfmYkj2OOSBZjuAPb1Ptj3U5jNVT1M1SsEk9XJveQxhXLE3JUDt9sR1LlVTUxGseqSFfMiNIDZ2A5UWB5t6mw+uMgoao0UFT4qOPF8JFedFa5BPClySvu20AYI59eUhKj1k9p0TV+YvH4JSWFdu1YwHPpxGAGJ97AkdzbEwtbnElKkuWJRU0kBYyyJTgFATYeIwBPPYcDGrkFLl3z0b0krQF9sM8SzB5N638+8RqgS%2FqXP+uCXMoKDKJKaNcxo6j5yHx9lJIs7hidrJKb%2FwAtjyeLA8G5xG9gOgTArOjdpBZXFPTQGVmpnnklLO%2FO9R%2FVYBh+4%2FPGr1HynKP4ZNPRV1QwQpIBKiruuv4fxW783FziO1ZrrM9N5pPlmT0fyxkg2tKXZWO4WBARgCbepvf1GAGarr68qcxrp6jZ+ESys20ewv2GFWTlVndajcIpxXJFhOpvZam51faLDsD64IIELlaePzSP6XAxBUR8La+0m%2FbBJlsMpQSFiC9hYBgwGIKR0hF51HZ8Muhk1j1TyfLWRpaTLpDXzlm2tZOfQn1t62ti%2FwDqvMZFj8OEgFeLX5tiu3wO6Xgy%2FT2eazeJvFqpFpISeQVXliPzNsOfM6hnqJZpJCebWPpjQA35PXsv7yJmFdO%2FNpHySszO8StuIvz6nGsiCeRfF4kPdsbxMU1I8Zazj8BXGnLTtTukySFj6m3b74YxfsnrOKsNO3heIQ7fljzDSgVIEjbCTc2PfHVUC43SSrccq4Hf6YxrIWEccl3e%2FlP1xC8JrHabdZI5m3KgePbbnHRZZFWULZkHK+4xrh5AjI+5XjN%2FfG9Qqk15J28xXy3Fr41EmM8tBHPTvPGQHtcG+IrxMz%2FtjxutHJDVhUtsbgi+JL5A+%2F7Yz2mJ8uOrtJFBqSWePgkBbWFrWP059ufQYg8mG3L7qSN7sp54t%2Fyf+eccxzDj2j%2F767%2F9GB8P%2FwCxr+QhPoweHq%2FT7ofNJmNMDcAjmUc27Xxb2qp1dKWN5JGEzRu12PrvBH24GOY5gz2d%2FwCJ%2FmP2le9of+Wv5H95F1s1RRvGiTs6iFnAcL3DOB2A%2FtH6nBACP4X4gRQSin8Pra98cxzFnbuJWz3kNXwRxwOyXDTWZ2vyeO2F7dpKWBi7AvCrttJFz2798cxzG7QrF7maFfRwU0EcsC7XEigN328g8X7d8a8yloyN7A71W4PYG4P0%2FXHMcx49oyXuJHU6mOWQK7d3Xk+m7%2FhxiXpJ3BSPi3ftjmOYX2RlX3k9B5mjDXPN73OGFpAl6dgTwpCe9wTjmOYEbvPX%2FwDHFt8YdBRtpjIa1oFNRDWPBHKfxLGYySv2JAP5YqtCq+JtIuLX5xzHMIM8DxvpH%2FCP+2+pnuSJLA7e+PEbPCbwyPGRz5WIxzHMBdozm7DWVaRgLUOOQR24I7H7%2FXG7ltZWrIpSrkXaxItYWJNj6Y5jmJlY77yEgSWp1kniEs9RI5IB5IAPpyABf874n8jjiRJQsSC83JAsW7d8cxzGjwG%2FvAfqOvh6pIDE7oIySeT64HoRcgHnnHMcwjt%2F5T84zq%2F4x8pN5ZCks+1uyruH3GCjLAXlDl2vu2Xv6WxzHMH09oNfPo18O+XU2T9FNPx0W8CeBp3LMWJdiSTc4IahRJdnFyxsccxzEeJ+Oz5mQZH4F+U1FJp5HSPsffGGpqJfAc3Hb2xzHMHQMGRkTtNAA54VrgDGRaqVagW2jaOOMcxzEFkLo7iYaesqKiacyvu2njEglRK0EfmtY24xzHMYEmbuZmBIKseTYd8b3zMvvjmOY9PCf%2F%2FZ%22 width=%22100%25%22 height=%22100%25%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M746.5 573q-45.5 73-87 181.5T487.5 901q-130.5 38-141-122T175 559.5Q14 500 106.5 391T279 174q80-108 184.5 4T689 282.5q121-7.5 112 105T746.5 573Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

</style>