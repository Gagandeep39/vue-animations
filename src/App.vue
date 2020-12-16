<template>
  <!-- Transition group animation -->
  <div class="container">
    <user-list></user-list>
  </div>
  <!-- Router aimation -->
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component
    ></transition>
  </router-view>
  <!-- Simple css aniation -->
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">
      Animate
    </button>
  </div>
  <!-- Single transition animation -->
  <div class="container">
    <transition
      :css="false"
      name="para"
      @before-enter="beforeEnterTransition"
      @before-leave="beforeLeaveTransition"
      @enter="enter"
      @leave="leave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paragraphIsVisible">Sometie Visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <!-- Transition with multiple elemnts -->
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <!-- Dialog animation -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UserList from './components/UserList';

export default {
  components: {
    UserList,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
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
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    // ############## Javascript based animation ##############
    beforeEnterTransition(element) {
      // Executed on enter transtion
      // We also get the element as param on which transition is performed
      console.log('beforeEnterTransition');
      element.style.opacity = 0;
    },
    beforeLeaveTransition(element) {
      // Executed on leave transtion
      // We also get the element as param on which transition is performed
      console.log('beforeLeaveTransition');
      element.style.opacity = 1;
    },
    enter(element, done) {
      // When enter animation starts
      let round = 1;
      this.enterInterval = setInterval(() => {
        element.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          // Usd to tell that this event is complete
          done();
        }
      }, 20);
    },
    leave(element, done) {
      // When leave animation starts
      let round = 1;
      this.leaveInterval = setInterval(() => {
        element.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          // Usd to tell that this event is complete
          done();
        }
      }, 20);
    },
    enterCancelled() {
      // Called when another transition event is called while enter event is getting executed
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      // Called when another transition event is called while leave event is getting executed
      clearInterval(this.leaveInterval);
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

/* Button animation */
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

/* ############### Router animation ############### */
.router-enter-from {
}
.router-enter-to {
}
.router-enter-active {
  animation: custom-fade 0.4s ease-out;
}
.router-leave-active {
  animation: custom-fade 0.4s ease-in;
}
</style>
