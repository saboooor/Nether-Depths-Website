import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useVisibleTask$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(32px)';
    backDrop.style.transform = 'scale(1.32)';
  });

  return (
    <section class="flex mx-auto px-6 items-center justify-center text-center" style="min-height: calc(100lvh - 64px);">
      <div class="p-10 sm:p-16 drop-shadow-xl rounded-xl text-orange-100 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <h1 class="font-bold text-3xl sm:text-5xl mb-3 shadow-outline">
          Vote for <span class="text-red-500">Nether Depths!</span>
        </h1>
        <p class="mb-6 shadow-outline">
          Hold CTRL while clicking to open each site in multiple tabs
        </p>
        <div class="mt-6 mb-12 grid grid-cols-3 md:grid-cols-6 gap-3 justify-center">
          <a href="https://bit.ly/NetherMCSL" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCSL
          </a>
          <a href="https://bit.ly/NetherMCSO" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCSO
          </a>
          <a href="https://bit.ly/NetherMSCN" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCSN
          </a>
          <a href="https://bit.ly/NetherMCMP" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCMP
          </a>
          <a href="https://bit.ly/NetherMCSP" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCPS
          </a>
          <a href="https://bit.ly/NetherPMC"  class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            PMC
          </a>
        </div>
        <h1 class="font-bold text-3xl sm:text-5xl mb-3 shadow-outline">
          Optional Vote Sites
        </h1>
        <p class="mb-6 shadow-outline">
          Please support Nether Depths through the sites below! These sites don't give any reward though.
        </p>

        <div class="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="https://bit.ly/NetherTOPG" class="flex transition rounded-xl bg-indigo-900/80 hover:bg-indigo-900 border-indigo-900 border-2 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            TOPG.ORG
          </a>
          <a href="https://bit.ly/NetherTMCS" class="flex transition rounded-xl bg-indigo-900/80 hover:bg-indigo-900 border-indigo-900 border-2 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            TMCS
          </a>
          <a href="https://disboard.org/server/865519986806095902" class="flex transition rounded-xl bg-indigo-900/80 hover:bg-indigo-900 border-indigo-900 border-2 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            DISBOARD
          </a>
          <a href="https://top.gg/servers/865519986806095902/vote" class="flex transition rounded-xl bg-indigo-900/80 hover:bg-indigo-900 border-indigo-900 border-2 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            TOP.GG
          </a>
          <a href="https://top.gg/bot/848775888673439745/vote" class="flex transition rounded-xl bg-indigo-900/80 hover:bg-indigo-900 border-indigo-900 border-2 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            TOP.GG (Cactie)
          </a>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Vote',
  meta: [
    {
      name: 'description',
      content: 'Vote for Nether Depths and get rewarded!',
    },
    {
      name: 'og:description',
      content: 'Vote for Nether Depths and get rewarded!',
    },
  ],
};
