import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Anime from "../pages/Anime.vue";
import Music from "../pages/Music.vue";
import AnimeDetail from "../pages/AnimeDetail.vue"; 

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/anime", component: Anime },
  { path: "/anime/:id", component: AnimeDetail },
  { path: "/music", component: Music },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;