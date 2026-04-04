<template>
  <div class="max-w-4xl mx-auto px-6 py-20 text-white">


    <h1 class="text-4xl font-bold mb-4">Contact Me</h1>
    <p class="text-gray-400 mb-10">
      Hubungi saya melalui WhatsApp atau sosial media di bawah.
    </p>


    <div class="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">

  
      <div class="mb-5">
        <label class="block mb-2 text-sm">Nama</label>
        <input
          v-model="name"
          type="text"
          placeholder="Masukkan nama kamu"
          class="w-full p-3 rounded bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_#22d3ee]"
        />
      </div>

  
      <div class="mb-6">
        <label class="block mb-2 text-sm">Pesan</label>
        <textarea
          v-model="message"
          placeholder="Tulis pesan kamu..."
          class="w-full p-3 rounded bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_#22d3ee]"
          rows="4"
        ></textarea>
      </div>

  
      <button
        @click="sendWhatsApp"
        class="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded text-black font-semibold transition hover:shadow-[0_0_15px_#22d3ee]"
      >
        📲 Hubungi Saya
      </button>


      <p
        v-if="showToast"
        class="mt-4 text-green-400 text-sm animate-pulse"
      >
        Pesan sedang dibuka di WhatsApp...
      </p>

    </div>

    <div class="mt-10 flex gap-6">

      <a
        href="https://instagram.com/aegryn"
        target="_blank"
        class="hover:text-cyan-400 transition"
      >
        📸 Instagram
      </a>

      <a
        href="https://github.com/Nvri002"
        target="_blank"
        class="hover:text-cyan-400 transition"
      >
        💻 GitHub
      </a>

      <a
        href="mailto:nullsigma1@gmail.com"
        class="hover:text-cyan-400 transition"
      >
        📧 Email
      </a>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      message: "",
      showToast: false,
    };
  },

  methods: {
    sendWhatsApp() {
      if (!this.name || !this.message) {
        alert("Isi dulu nama dan pesan!");
        return;
      }

      const phone = "6281273304238"; 
      const text = `Halo, saya ${this.name}.%0A${this.message}`;
      const url = `https://wa.me/${phone}?text=${text}`;

      this.showToast = true;

      setTimeout(() => {
        window.open(url, "_blank");
        this.showToast = false;
      }, 800);
    },
  },
};
</script>