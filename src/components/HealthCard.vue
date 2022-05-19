<template>
  <div class="card">
    <img :src="`${content.icon}`" alt="health" />
    <h2 class="card__title">{{ content.title }}</h2>
    <div class="card__line"></div>
    <p class="card__text">{{ content.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 328px;
  width: 100%;
  padding: 35px 40px;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  cursor: pointer;

  &:not(&:last-of-type) {
    margin-bottom: 30px;
  }

  &:hover {
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.2);
  }

  @media screen and(min-width:768px) {
    &:not(&:last-of-type) {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #252b42;
    margin: 20px 0;
  }

  &__line {
    width: 50px;
    border-top: 2px solid #e74040;
    padding-bottom: 20px;
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #737373;
  }
}
</style>
