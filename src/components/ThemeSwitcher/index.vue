<template>
<body id="bod"> <div class="darksoul-toggle-container" id="container">
    <div class="darksoul-toggle-border" id="border">
        <div class="darksoul-toggle" id="toggle" onclick="{roll()}">
      
        </div>
    </div>
</div>
<p class="disclaimer">Designed & Created by <a href="https://darksoul-codepen.github.io/" target="_blank"  id="disclaimer">DarkSoul</a></p>
</body>
</template>
<style>
   @import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Rubik+Vinyl&display=swap');
   
   body
   {
       margin: 0;
       display: flex;
       width: 100%;
       height: 100vh;
       background-color: rgb(23, 23, 23);
       transition: background-color 0.5s;
       font-family: 'Belanosima', sans-serif;
   }
   .darksoul-toggle-container
   {
       width: 300px;
       height: 130px;
       margin: auto;
       display: flex;
       border-radius: 70px;
       padding: 2px;
       box-shadow: 10px 10px 10px rgba(16, 16, 16, 0.667), 0px -8px 10px rgba(32, 32, 32, 0.453), -5px -5px 15px rgb(17, 17, 17) inset, 15px 15px 50px rgb(26, 26, 26) inset;
       transition: background-color 0.5s, box-shadow 0.5s;
   }
   .darksoul-toggle-border
   {
       width: 300px;
       height: 130px;
       background-color: rgb(23, 23, 23);
       box-shadow: 5px 5px 10px rgb(23, 23, 23) inset, -4px -10px 10px rgb(25, 25, 25) inset;
       border-radius: 70px;
       margin: auto;
       display: flex;
       transition: background-color 0.5s, box-shadow 0.5s;
   }
   .darksoul-toggle
   {
       margin: auto;
       margin-left: 15px;
       width: 100px;
       height: 100px;
       background-color: rgb(23, 23, 23);
       border: 1px solid rgba(28, 28, 28, 0);
       box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.312), -10px -10px 10px rgba(30, 30, 30, 0.696), 40px -5px 1px rgb(255, 255, 255) inset,  -2px 5px 10px rgba(23, 23, 23, 0.986) inset;
       border-radius: 50%;
       transition: box-shadow 1s;
   }
   .darksoul-toggle:hover
   {
       cursor: pointer;
    
   }
   @keyframes roll 
   {
       100%
       {
           transform: translateX(170px) rotate(360deg);
       }
   }
   @keyframes rollback 
   { 
       0%
       {
           transform: translateX(170px) rotate(360deg);
       }
       100%
       {
           transform: translateX(0px) rotate(0deg);
       }
   }
   .disclaimer
   {
       position: absolute;
       bottom: 0px; 
       left: 0; 
       margin-left: auto; 
       right: 0; 
       margin-right: auto; 
       width: fit-content;
       color: #6a6a6a;
      
       text-align: center;
   }
   .disclaimer a
   {
       text-decoration: none;
       color: white;
   }
   .disclaimer a:hover
   {
       font-weight: bolder;
   }
</style>

<script>
 var toggle = document.getElementById("toggle");
        var bod = document.getElementById("bod");
        var border = document.getElementById("border");
        var container = document.getElementById("container"); 
        var disclaimer = document.getElementById("disclaimer");
        var flag = 0;
       
        function togglel() 
        {
            toggle.style.boxShadow = "5px 5px 500px rgb(255, 255, 0) inset, 0.5px 0.5px 50px yellow";
            toggle.style.border = "1px solid rgb(255, 255, 255)";
            toggle.style.backgroundColor = "orange";
        }
        function toggled() 
        {
            toggle.style.boxShadow = "10px 10px 15px rgba(0, 0, 0, 0.312), -10px -10px 10px rgba(30, 30, 30, 0.696), 40px -5px 1px rgb(255, 255, 255) inset,  -2px 5px 10px rgba(23, 23, 23, 0.986) inset";
            toggle.style.border = "1px solid rgba(28, 28, 28, 0)";
            toggle.style.backgroundColor = "rgb(23, 23, 23)";
        }
        function roll() 
        {
            if(flag==0)
            {
                toggle.style.animation = "roll 1.5s forwards";
                container.style.boxShadow ="10px 10px 10px rgb(242, 241, 241), -4px -7px 15px rgb(242, 241, 241), 2px -5px 10px rgb(255, 255, 255) inset, -10px -1px 5px yellow inset";
                border.style.backgroundColor = " rgb(255, 255, 255)";
                border.style.boxShadow = "2px 5px 10px rgb(236, 235, 235) inset, -2px 0px 2px rgb(254, 254, 1) inset";
                bod.style.backgroundColor = "rgb(253, 253, 253)"; 
                disclaimer.style.color = "black";
                setTimeout(togglel, 250);
                flag = 1;
            }
            else
            {
                toggle.style.animation = "rollback 1.5s forwards";
                container.style.boxShadow ="10px 10px 10px rgba(16, 16, 16, 0.667), 0px -8px 10px rgba(32, 32, 32, 0.453), -5px -5px 15px rgb(17, 17, 17) inset, 15px 15px 50px rgb(26, 26, 26) inset";
                border.style.backgroundColor = "rgb(23, 23, 23)";
                border.style.boxShadow = "5px 5px 10px rgb(23, 23, 23) inset, -4px -10px 10px rgb(25, 25, 25) inset";
                bod.style.backgroundColor = "rgb(23, 23, 23)"; 
                disclaimer.style.color = "white";
                setTimeout(toggled, 250);
                flag = 0;
            }
        }
       
</script>