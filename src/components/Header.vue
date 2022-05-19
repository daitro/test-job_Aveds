<template>
  <div class="header">
    <div class="header__container">
      <img
        @click="$router.push('/')"
        class="header__logo"
        src="../../public/logotype/logo.svg"
        alt="logo"
      />

      <div class="header__buttons-group">
        <button @click="openConctactsPage" class="header__contacts">
          Контакты
        </button>
        <button @click="onClickAuthButton" class="button-sign-in">
          {{ buttonLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    buttonLabel() {
      return this.$store.getters["isAuthenticated"] ? "Выйти" : "Войти";
    },
  },
  methods: {
    onClickAuthButton() {
      if (this.$store.getters["isAuthenticated"]) {
        this.$store.dispatch("logout");
        this.$router.push("/");
      } else {
        this.$emit("openAuthModal");
      }
    },
    openConctactsPage() {
      if (this.$store.getters["isAuthenticated"]) {
        this.$router.push("contacts");
      } else {
        this.$emit("openAuthModal");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #000;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;

    @media screen and(min-width:576px) {
      padding: 20px 24px;
    }

    @media screen and(min-width:768px) {
      padding: 20px 70px;
    }
  }

  &__logo {
    cursor: pointer;
  }

  &__buttons-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__contacts {
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #737373;
    margin-right: 20px;

    &:hover {
      color: #b6b6b6;
    }

    @media screen and(min-width:768px) {
      margin-right: 60px;
    }
  }
}

.button-sign-in {
  max-width: 106px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  font-size: 20px;
  color: #ff685b;
  border: 2px solid #ff685b;
  border-radius: 7px;
  padding: 6px 20px;
  max-width: 106px;

  &:hover {
    background-color: #ff8479;
    border: 2px solid #ff8479;
    color: white;
  }

  @media screen and(min-width:768px) {
    max-width: 186px;
    padding: 8px 24px;
  }
}
</style>
