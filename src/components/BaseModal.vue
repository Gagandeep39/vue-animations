<template>
  <div class="backdrop" @click="$emit('close')" v-if="open"></div>
  <!-- Added inside because it has transition can have nly one child elemnt -->
  <!-- Initially parent <base-model> had 2 elements -->
  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: dialog-model 0.3s ease-out forwards; */
}

/*************** Enter/leave Dialog animation ******************/
.modal-enter-active {
  animation: dialog-model 0.3s ease-out;
}
.modal-leave-active {
  animation: dialog-model 0.3s ease-in reverse;
}

@keyframes dialog-model {
  /* Replacement to 0 and 100% */
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
