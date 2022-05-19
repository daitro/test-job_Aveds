<template>
  <button
    @click="onClick"
    :disabled="disabled"
    :class="{ 'button-primary': true, 'button-primary--white': color }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    color: {
      type: Boolean,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button-primary {
  padding: 15px 40px;
  height: 52px;
  background: #ff685b;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: white;
  text-align: center;
  letter-spacing: 0.2px;

  &:not(&:first-of-type) {
    margin-left: 10px;
  }

  &:hover {
    background-color: #ff8479;
  }

  &[disabled] {
    background: #9e9e9e;
    cursor: default;
  }

  &--white {
    background: white;
    color: #ff8479;
    border: 1px solid #ff8479;

    &:hover {
      color: white;
    }
  }
}
</style>
