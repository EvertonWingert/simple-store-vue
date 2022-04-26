import { readonly, reactive, watch } from "vue";

const state = reactive({
  count: 0,
});

const setters = {
  increment() {
    state.count++;
  },
  decrement() {
    state.count--;
  },
};

export default () => ({
  state,
  setters,
});
