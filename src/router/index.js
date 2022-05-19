import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../pages/MainPage.vue";
import Contacts from "../pages/ContactsPage.vue";
import Profile from "../pages/ProfilePage.vue";

//https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthorized = localStorage.getItem("user") !== null;

  if (to.name === "Home" && isAuthorized) {
    next({ name: "Profile" });
  } else {
    next();
  }

  if (to.name === "Contacts" && !isAuthorized) {
    next({ name: "Home" });
  } else {
    next();
  }

  if (to.name !== "Home" && !isAuthorized) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
