# Vue Animations

- [Vue Animations](#vue-animations)
  - [Deployment](#deployment)
  - [Basic Animation](#basic-animation)
  - [Keyframe animation](#keyframe-animation)

## Deployment

- Checkout deployment at <https://gagandeep39.github.io/vue-animations/>

## Basic Animation

```html
<div class="container">
  <div class="block" :class="{ animate: animatedBlock }"></div>
  <button @click="animateBlock">
    Animate
  </button>
</div>
```

```js
 data() {
    return {
      animatedBlock: false,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
  },
```

```css
.block {
  /* transition: CSS-property-name duration function name; */
  transition: transform 0.3s ease-out;
}
.animate {
  /* Moves object by 50px to left */
  transform: translateX(-150px);
}
```

- We are moving the box in left direction
- `transition` is a property that allows us to specify anther property to use for animation
- `transform` moves the elemnt from a specifi position
- `transition: CSS-property-name duration function name;`

## Keyframe animation

- Allows defining xustom animation (More complex animation)
- Below code will run for a duration of 0.3s
- `forwards` imply 100% position will remain

```css
.animate {
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
```
