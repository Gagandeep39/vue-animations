# Vue Animations

- [Vue Animations](#vue-animations)
  - [Deployment](#deployment)
  - [Basic Animation](#basic-animation)
  - [Keyframe animation](#keyframe-animation)
  - [Dialog animation](#dialog-animation)
  - [Transition](#transition)
  - [Scope](#scope)

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

## Dialog animation

- Simple scaling animation
- Executed when dialog is opened

```css
dialog {
  animation: dialog-model 0.3s ease-out forwards;
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
```

## Transition

- Used to animate DOM elemnt
- Can have only 1 child elemnt
- Used to animate enter/leave state
- Adds few utility classes in specified order
  - To mount elemnt `*-enter-from`, `*-enter-active`, `*-enter-to`,
  - To remove element `*-leave-from`, `*-leave-active`, `*-leave-to`,
- Custom duration and css can be specified, `<transition>` will use those CSS property and accordingly manipulate dom
- Vue adds/removes these classes itself, it uses `v-*-*` in class names
- Anything enclosed in `<transition> </transition>` will ndergo these animation

```html
<div class="container">
  <transition>
    <p v-if="paragraphIsVisible">Sometie Visible...</p>
  </transition>
  <button @click="toggleParagraph">Toggle Paragraph</button>
</div>
```

```css
/* Entering */
.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active {
  /* All changes occuring wil be in duration of 0.3s with eas-out animation  */
  transition: all 0.3s ease-out;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Leaving */
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  /* All changes occuring wil be in duration of 0.3s with eas-out animation  */
  transition: all 0.3s ease-out;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
```

- `.v-leave-active`, `.v-enter-active` are important
- We can specifify keyframes instead of using comibination of all three classes

```css
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
.v-enter-active {
  /* All changes occuring wil be in duration of 0.3s with eas-out animation  */
  /* transition: all 0.3s ease-out; */
  animation: custom-fade 0.3s ease-out forwards;
}
```

## Scope

- By defaut, one page can have single transition elemnt
- If there are multiple elemnt, all will have same animation
  1. To avoid this we have to replace `v-enter-from` with `para-enter-from`
  2. Add name="para" attribute in transition elemnt
- For more flexibility, we can use spcific class names such as
  - `enter-to-class`, `enter-active-class` etc.
