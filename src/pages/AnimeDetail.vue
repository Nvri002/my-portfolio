<template>
  <div class="max-w-5xl mx-auto px-6 py-20 text-white">


    <div v-if="loading" class="text-center">
      <p>Loading anime...</p>
    </div>


    <div v-else class="grid md:grid-cols-2 gap-10">

   
      <img
        :src="anime.images.jpg.large_image_url"
        class="rounded-xl shadow-lg"
      />

   
      <div>
        <h1 class="text-3xl font-bold mb-3">
          {{ anime.title }}
        </h1>

        <p class="text-yellow-400 mb-2">
          ⭐ {{ anime.score }}
        </p>

        <p class="text-gray-300 leading-relaxed">
          {{ anime.synopsis }}
        </p>

      
        <div v-if="anime.trailer?.embed_url" class="mt-6">
          <iframe
            :src="anime.trailer.embed_url"
            class="w-full h-64 rounded"
            allowfullscreen
          ></iframe>
        </div>

   
        <button
          @click="$router.back()"
          class="mt-6 text-cyan-400 hover:underline"
        >
          ← Kembali
        </button>
      </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      anime: null,
      loading: true,
    };
  },

  mounted() {
    const id = this.$route.params.id;

    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => {
        this.anime = res.data.data;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>