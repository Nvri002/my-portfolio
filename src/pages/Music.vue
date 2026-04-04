<template>
  <div class="max-w-6xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-bold mb-6">🎵 List Music</h2>

    <div class="grid md:grid-cols-3 gap-6">
  <div
    v-for="item in music"
    :key="item.trackId"
    class="bg-slate-800 p-4 rounded-xl hover:scale-105 hover:shadow-xl transition duration-300"
  >
    <img :src="item.artworkUrl100" class="w-full rounded mb-3" />

    <h3 class="font-semibold">{{ item.trackName }}</h3>
    <p class="text-gray-400">{{ item.artistName }}</p>

    <audio controls :src="item.previewUrl" class="mt-2 w-full"></audio>
  </div>
</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      music: [],
    };
  },

  mounted() {
    const queries = [
      "billie eilish",
      "the weeknd",
      "taylor swift",
      "drake",
      "ariana grande",
      "dua lipa"
    ];

    Promise.all(
      queries.map(q =>
        axios.get(`https://itunes.apple.com/search?term=${q}&limit=2`)
      )
    ).then(res => {
      this.music = res.flatMap(r => r.data.results);
    });
  },
};
</script>