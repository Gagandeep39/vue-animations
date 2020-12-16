<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">
      Animate
    </button>
  </div>
  <div class="container">
    <transition>
      <p v-if="paragraphIsVisible">Sometie Visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
    };
  },
  methods: {
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: CSS-property-name duration function name; */
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* Moves object by 50px to left */
  /* transform: translateX(-150px); */
  /* custom-fade - Name of keyframe 
    0.3s duration
    ease-out - animation
    forwards - Keep final keey frame
  */

  animation: custom-fade 0.3s ease-out forwards;
}
@keyframes custom-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.2);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
/* Enter */

.v-enter-active {
  /* All changes occuring wil be in duration of 0.3s with eas-out animation  */
  /* transition: all 0.3s ease-out; */
  animation: custom-fade 0.3s ease-out forwards
}

/* Leave */
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  /* All changes occuring wil be in duration of 0.3s with eas-out animation  */
  transition: all 0.3s ease-in;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
