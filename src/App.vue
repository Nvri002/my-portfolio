<template>
  <div>

    <Particles
      id="tsparticles"
      :options="particlesOptions"
      class="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />


    <nav class="fixed top-0 w-full bg-slate-900/70 backdrop-blur border-b border-slate-700 z-50">
      <div class="max-w-6xl mx-auto flex justify-between items-center p-4">

        <router-link to="/" class="text-xl font-bold text-cyan-400">
          MyPortfolio
        </router-link>

        <div class="space-x-6">
          <router-link to="/about" class="hover:text-cyan-400 transition">
            About
          </router-link>

          <router-link to="/contact" class="bg-cyan-500 px-3 py-1 rounded hover:bg-cyan-400 transition">
            Contact
          </router-link>
        </div>

      </div>
    </nav>

 
    <div class="relative z-10 pt-20">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      particlesOptions: {
        background: {
          color: "#020617"
        },
        particles: {
          number: { value: 60 },
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 120,
            opacity: 0.4
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: 2
          },
          opacity: {
            value: 0.5
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 100
            }
          }
        }
      },
    };
  }
  
};
</script>