<script setup>
import useCountStore from "../store/count";

const { state, setters } = useCountStore();
</script>
<template>
  <h1>SubComponent</h1>
  <p>{{ state.count }}</p>
  <button @click="setters.increment">+</button>
  <button @click="setters.decrement">-</button>
</template>
