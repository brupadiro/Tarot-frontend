<template>
  <router-view />
</template>


<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Raleway:wght@500;600;700&display=swap');
/* Global styling
   ====================================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100vh;
}

::selection {
  background-color: #fafafa;
  color: #1e1e1e;
}

#app,
body {
  width: 100%;
  height: 100%;
}

body {
  font-family: "Afacad", serif!important;
  color: #fafafa;
  background: #0c1023;
background: url('./assets/images/background.png') no-repeat center center fixed;
background-size: cover;
}
body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Ajusta la opacidad según sea necesario */
  z-index: 1; /* Asegúrate de que la capa oscura esté por encima del fondo pero debajo del contenido */
  height:400%;
}
#app {
  position: relative;
  z-index: 2; /* Asegúrate de que el contenido esté por encima de la capa oscura */
}
select, input {
    height: 48px;
    border: none;
    background-color: white;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 0.5rem;
    border: none !important;
    font-family: 'Afacad'!important;
    font-weight: bold;
}
.toggle-sex{
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
.buttonNext{
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 15px;
    height: 48px;
    width: 100%;
    border: none !important;
    background: #4e0e70;
    font-family: Afacad !important;
    font-size: 20px;
    font-weight: 700;
    cursor:pointer;
    color:white;
}

.buttonNext:disabled {
  background: #cccccc;
  cursor: default;
}

.toggle-sex button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background-color: #f8f8f8;
    cursor: pointer;
    outline: none;
    width: 50%;
    height: 48px;
    font-family: 'Afacad'!important;
    font-weight: 900;
    font-size: 20px;
    margin:0!important;
}
.toggle-sex button:first-child{
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.toggle-sex button:last-child{
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}


/* Page styling
   ====================================================== */
main {
  margin: 2em;
  padding-top: 3em;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Page titles */
h1,
h2,
h3 {
  font-family: "Afacad", serif;
}

/* Component styling
   ====================================================== */
/* Modal */
.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: #06060580;
  cursor: pointer;
}

.modal {
  margin: 6em auto;
  padding: 1em;
  width: 80%;
  height: 80%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    305deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(5px);
  cursor: default;
}

.modal i {
  width: 10%;
  text-align: center;
  color: #b1b1b1;
  cursor: pointer;
}

/* Card back pattern */
.card-back {
  background: #2b2b2b center/70px 120px;
  background-image: url("assets/images/card-back.png");
  background-repeat: no-repeat;
  background-size:cover;


}
@keyframes moveDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.dynamic-card:hover{
  animation: moveDown 1s;
}
/* Shiny effect */
.shine {
  position: relative;
  overflow: hidden;
}

.shine::before {
  content: "";
  position: absolute;
  top: 0;
  left: -200%;
  width: 100px;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    305deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-30deg);
  transition: left 0.5s linear;
}

.shine:hover {
}

.shine:hover::before {
  left: 150%;
}

/* Shading */
.shaded {
  box-shadow: 0 20px 50px #06060580, 3px 3px 2px #0606053f;
}

/* Loading animation */
.placeholder {
  margin: 1em;
  font-size: 1.5rem;
  text-align: center;
}

.placeholder::after {
  content: ".";
  animation: dots 1s infinite;
}

@keyframes dots {
  0%,
  20% {
    color: #00000000;
    text-shadow: 0.25em 0 0 #00000000, 0.5em 0 0 #00000000;
  }
  40% {
    color: currentColor;
    text-shadow: 0.25em 0 0 #00000000, 0.5em 0 0 #00000000;
  }
  60% {
    text-shadow: 0.25em 0 0 currentColor, 0.5em 0 0 #00000000;
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 currentColor, 0.5em 0 0 currentColor;
  }
}

/* Media queries
   ====================================================== */
/* Tablets and up */
@media (min-width: 481px) {
  html {
    font-size: 18px;
  }
}

/* Desktops */
@media (min-width: 1025px) {
  .modal {
    max-width: 60%;
  }
}
</style>