<template>
  <div class="max-w-6xl mx-auto px-6 py-20 text-white">

    <!-- TITLE -->
    <h1 class="text-4xl font-bold mb-10 text-center text-cyan-400">
      🎵 My Favorite Music
    </h1>

    <!-- GRID -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div
        v-for="song in songs"
        :key="song.title"
        class="bg-slate-800 rounded-xl p-4 shadow-lg hover:scale-105 hover:shadow-cyan-400/30 transition duration-300"
      >
        <!-- TITLE -->
        <h3 class="font-semibold mb-3 text-center">
          {{ song.title }}
        </h3>

        <!-- PLAYER -->
        <iframe
          class="w-full rounded-lg"
          height="200"
          :src="song.embed"
          allowfullscreen
        ></iframe>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        {
          title: "Parisienne Walkways - Gary Moore",
          embed: "https://www.youtube.com/embed/98eIW6CN62k"
        },
        {
          title: "Fuwa Fuwa Time - Hokago Tea Time",
          embed: "https://www.youtube.com/embed/I0xRbWqIohQ"
        },
        {
          title: "I Will Survive - Demi Lovato",
          embed: "https://www.youtube.com/embed/VPStmeD17xk"
        },
        {
          title: "Forget Me Not - Laufey",
          embed: "https://www.youtube.com/embed/Yr4tx6wPVhw"
        },
        {
          title: "Ma Vie Mes Rêves - Sheena Ringo",
          embed: "https://www.youtube.com/embed/ECxBHhMc7oI"
        },
        {
          title: "Secret Door - Arctic Monkeys",
          embed: "https://www.youtube.com/embed/f9HF0DJ1cu8"
        },
        {
          title: "Crime and Punishment - Ado",
          embed: "https://www.youtube.com/embed/x1UsJ2Znjk0"
        },
        {
          title: "Given Up - Linkin Park",
          embed: "https://www.youtube.com/embed/0xyxtzD54rM"
        },
        {
          title: "IAM - IVE",
          embed: "https://www.youtube.com/embed/6ZUIwj3FgUY"
        }
      ]
    };
  }
};
</script>