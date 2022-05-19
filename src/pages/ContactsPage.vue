<template>
  <div>
    <Header />
    <div class="contacts">
      <h1 class="title">Контакты</h1>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  max-width: 1086px;
  margin: 0 auto;
  padding: 0 24px;
}

.title {
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: 0.2px;
  color: #252b42;
  position: absolute;
  top: calc(50% - 20px);

  @media screen and(min-width: 576px) {
    font-size: 46px;
    line-height: 60px;
    top: calc(50% - 30px);
  }

  @media screen and(min-width:768px) {
    font-size: 58px;
    line-height: 80px;
    top: calc(50% - 40px);
  }
}
</style>
