<template>
  <div class="input-text">
    <label>{{ label }}</label>
    <input
      class="input-text__field"
      type="text"
      :value="value"
      @input="onInput"
    />
    <span class="input-text__error" v-if="hasError">{{ errorText }}</span>
  </div>
</template>

<script>
export default {
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    hasError: {
      type: Boolean,
    },
    errorText: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.input-text {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  position: relative;

  &__field {
    width: 260px;
    padding: 8px;
    border: 1px solid rgb(35, 33, 33);
    box-sizing: border-box;
    margin: 8px 24px 0 0;
  }

  &__error {
    position: absolute;
    top: 60px;
    font-size: 11px;
    color: rgb(251, 87, 87);
  }
}
</style>
