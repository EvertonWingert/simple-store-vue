import { readonly, reactive, watch } from "vue";

const state = reactive({
  ...JSON.parse(
    localStorage.getItem("state") || {
      count: 0,
    }
  ),
});

const setters = {
  increment() {
    state.count++;
  },
  decrement() {
    state.count--;
  },
};

watch(
  state,
  (to) => {
    localStorage.setItem("state", JSON.stringify(to));
  },
  { deep: true }
);

export default () => ({
  state,
  setters,
});
