<template>
  <div class="max-w-6xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-bold mb-6">🎬 Anime Favorit</h2>

<div class="grid md:grid-cols-3 gap-6">
  <router-link
    v-for="anime in animes"
    :key="anime.mal_id"
    :to="`/anime/${anime.mal_id}`"
    class="block bg-slate-800 p-4 rounded-xl hover:scale-105 transition duration-300"
  >
    <img :src="anime.images.jpg.image_url" class="w-full rounded mb-3" />

    <h3 class="font-semibold">{{ anime.title }}</h3>
    <p class="text-yellow-400">⭐ {{ anime.score }}</p>
  </router-link>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      animes: [],
    };
  },

mounted() {
  const queries = [
    "darling in the franxx",
    "k-on",
    "bocchi the rock",
    "re zero",
    "your lie in april",
    "eminence in shadow"
  ];

  this.animes = [];

  queries.forEach((q, i) => {
    setTimeout(() => {
      axios
        .get(`https://api.jikan.moe/v4/anime?q=${q}&limit=1`)
        .then(res => {
          if (res.data.data[0]) {
            this.animes.push(res.data.data[0]);
          }
        });
    }, i * 800); 
  });
}
};
</script>