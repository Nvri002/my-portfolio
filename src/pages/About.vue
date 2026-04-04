<template>
  <div class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

 
    <div>
      <p class="text-sm text-cyan-400 mb-3">ABOUT ME</p>

      <h1 class="text-5xl font-bold leading-tight text-gray-200">
        Seorang mahasiswa biasa yang suka bermalas-malasan.
      </h1>
    </div>


    <div>
      <p class="text-gray-300 leading-relaxed">
        Halo, saya Novri, mahasiswa Informatika di UIN Suska Riau, Pekanbaru.
        Saat ini saya tengah mendalami bidang web development, mencakup HTML,
            CSS, hingga Vue. Saya juga memiliki ketertarikan pada UI/UX design, yang saya pelajari secara otodidak
            melalui berbagai sumber online. Selain itu, saya aktif mengikuti perkembangan teknologi terbaru, 
            terutama yang berkaitan dengan dunia web. Saya percaya bahwa teknologi adalah alat yang 
            kuat untuk menciptakan solusi inovatif, dan saya bersemangat untuk terus belajar dan berkembang di bidang ini.
        </p>

   
      <div class="grid grid-cols-2 gap-6 mt-8 text-sm">

        <div>
          <p class="text-gray-400">NAMA</p>
          <p class="font-semibold">NOVRI FERDIANSYAH</p>
        </div>

        <div>
          <p class="text-gray-400">KAMPUS</p>
          <p class="font-semibold">UIN SUSKA RIAU</p>
        </div>

        <div>
          <p class="text-gray-400">JURUSAN</p>
          <p class="font-semibold">Informatika</p>
        </div>

        <div>
          <p class="text-gray-400">KOTA</p>
          <p class="font-semibold">Pekanbaru</p>
        </div>
      </div>

     
      <div class="mt-10">
        <h3 class="text-xl font-semibold mb-4">Hobi Saya</h3>

        <div class="flex gap-4">
          <router-link
            to="/music"
            class="border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition"
          >
            🎵 Mendengarkan Musik
          </router-link>

          <router-link
            to="/anime"
            class="border border-pink-400 px-4 py-2 rounded hover:bg-pink-400 hover:text-black transition"
          >
            🎬 Menonton Anime
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>