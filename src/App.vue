<script setup>
import SubComponent from "./components/SubComponent.vue";

import useCountStore from "./store/count";
const { state, setters } = useCountStore();
</script>

<template>
  <div>
    <div>
      <h1>Main component</h1>
      <p>{{ state.count }}</p>
      <button @click="setters.increment">+</button>
      <button @click="setters.decrement">-</button>
    </div>
    <SubComponent />
  </div>
</template>
