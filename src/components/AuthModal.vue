<template>
  <div class="modal-window">
    <div class="modal-window__header">
      <h1 class="title">Авторизация</h1>
      <img
        class="modal-window__close-icon"
        @click="closeModalWindow"
        src="../../public/icons/close-icon.svg"
        alt="close"
      />
    </div>

    <div class="modal-window__text-error" v-if="showTextError">
      Пользователь не найден. Попробуйте ещё раз
    </div>

    <GuiInput
      v-model="login.value"
      :label="login.label"
      :hasError="login.errorOfValidate"
      :errorText="login.errorText"
      @input="errorOfValidateLogin"
    />

    <GuiInput
      v-model="password.value"
      :label="password.label"
      :hasError="password.errorOfValidate"
      :errorText="password.errorText"
      @input="errorOfValidatePassword"
    />

    <div class="modal-window__button">
      <GuiButton @click="signIn" :disabled="isDisabledButton" :text="button" />
    </div>
  </div>
</template>

<script>
import GuiInput from "./Gui/GuiInput.vue";
import GuiButton from "./Gui/GuiButton.vue";

export default {
  components: { GuiInput, GuiButton },
  props: {
    users: {
      type: Array,
    },
  },
  data() {
    return {
      login: {
        label: "Логин",
        value: "",
        errorOfValidate: false,
        touched: false,
        errorText: "Логин должен быть не менее 3 символов",
      },
      password: {
        label: "Пароль",
        value: "",
        errorOfValidate: false,
        touched: false,
        errorText: "Пароль должен быть не менее 8 символов",
      },
      button: "Войти",
      showTextError: false,
    };
  },
  computed: {
    isDisabledButton() {
      return (
        !this.password.touched ||
        !this.login.touched ||
        this.login.errorOfValidate ||
        this.password.errorOfValidate
      );
    },
  },
  methods: {
    errorOfValidateLogin() {
      this.login.errorOfValidate = this.login.value.length < 3;
      this.login.touched = true;
    },
    errorOfValidatePassword() {
      this.password.errorOfValidate = this.password.value.length < 8;
      this.password.touched = true;
    },
    closeModalWindow() {
      this.$emit("close");
    },
    signIn() {
      let authUser = this.users.find((user) => user.login === this.login.value);

      if (!authUser || authUser.password !== this.password.value) {
        this.showTextError = true;
        return;
      }

      localStorage.setItem("user", JSON.stringify(authUser));
      this.$store.dispatch("logIn", authUser);
      this.$router.push("profile");

      this.login.value = "";
      this.password.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-window {
  position: absolute;
  top: calc(50% - 175px);
  left: calc(50% - 230px);
  max-width: 460px;
  width: 100%;
  background-color: #fff;
  padding: 24px;
  border: 1px solid rgb(212, 212, 212);

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__close-icon {
    width: 24px;
    cursor: pointer;
  }

  &__button {
    margin-top: 24px;
  }

  &__text-error {
    font-size: 12px;
    color: rgb(255, 118, 118);
  }
}

.title {
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.2px;
  color: #252b42;
}
</style>
