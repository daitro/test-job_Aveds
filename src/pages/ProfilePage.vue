<template>
  <div>
    <Header />
    <div class="profile">
      <div class="profile__container">
        <h1 class="title">Привет, {{ userName }}</h1>
        <div class="profile__buttons-group">
          <GuiButton @click="logout" :text="signUp" />
          <GuiButton
            :text="buttonContacts.text"
            :color="buttonContacts.styleWhite"
            @click="$router.push('contacts')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GuiButton from "../components/Gui/GuiButton.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
    GuiButton,
  },
  data() {
    return {
      signUp: "Выйти из аккаунта",
      buttonContacts: { text: "Перейти в контакты", styleWhite: true },
    };
  },
  computed: {
    userName() {
      return this.$store.getters["userName"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  max-width: 1086px;
  margin: 0 auto;
  padding: 0 24px;

  &__container {
    position: absolute;
    top: calc(50% - 80px);
  }

  &__buttons-group {
    margin-top: 35px;
  }
}

.title {
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: 0.2px;
  color: #252b42;

  @media screen and(min-width: 576px) {
    font-size: 46px;
    line-height: 60px;
  }

  @media screen and(min-width:768px) {
    font-size: 58px;
    line-height: 80px;
  }
}
</style>
