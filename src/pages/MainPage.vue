<template>
  <div :class="{ 'popup-fade': showAuthModal }">
    <Header @openAuthModal="showAuthModal = true" />
    <div class="home">
      <h1 class="title">Место для получения медицинской помощи</h1>
      <div class="home__group-buttons">
        <GuiButton :text="buttonSignIn" @click="showAuthModal = true" />
        <GuiButton
          :text="buttonContacts.text"
          :color="buttonContacts.styleWhite"
          @click="openConctactsPage"
        />
      </div>
      <div class="home__block-items">
        <Card
          v-for="(item, index) of dataOfCard"
          :key="index"
          :content="item"
        />
      </div>
    </div>

    <AuthModal
      v-if="showAuthModal"
      :users="users"
      @close="showAuthModal = false"
    />
  </div>
</template>

<script>
import Card from "../components/HealthCard.vue";
import Header from "../components/Header.vue";
import AuthModal from "../components/AuthModal.vue";
import GuiButton from "../components/Gui/GuiButton.vue";
import usersJson from "../../dataOfUsers.json";

export default {
  name: "Home",
  components: {
    Header,
    Card,
    AuthModal,
    GuiButton,
  },
  data() {
    return {
      users: [],
      dataOfCard: [
        {
          icon: "icons/heart.svg",
          title: "Онлайн-приём",
          text: "Рыба текст",
        },
        {
          icon: "icons/sos.svg",
          title: "Экстренный случай",
          text: "Рыба текст",
        },
        {
          icon: "icons/cancer.svg",
          title: "Лечение рака",
          text: "Рыба текст",
        },
      ],
      buttonSignIn: "Войти",
      buttonContacts: { text: "Контакты", styleWhite: true },
      showAuthModal: false,
    };
  },
  methods: {
    openConctactsPage() {
      if (this.$store.getters["isAuthenticated"]) {
        this.$router.push("contacts");
      } else {
        this.showAuthModal = true;
      }
    },
  },
  created() {
    this.users = usersJson;
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1086px;
  margin: 0 auto;
  padding: 56px 10px 24px;

  @media screen and(min-width:576px) {
    padding: 96px 20px 24px;
  }

  &__group-buttons {
    margin-top: 35px;
  }

  &__block-items {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media screen and(min-width:576px) {
      margin-top: 96px;
    }

    @media screen and(min-width:768px) {
      flex-direction: row;
    }
  }
}

.title {
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: 0.2px;
  color: #252b42;

  @media screen and(min-width:576px) {
    font-size: 46px;
    line-height: 60px;
  }

  @media screen and(min-width:768px) {
    font-size: 58px;
    line-height: 80px;
  }
}

.popup-fade {
  &::before {
    content: "";
    background: #000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
}
</style>
