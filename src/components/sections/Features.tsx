import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="mx-auto backdrop-blur-2xl bg-black/50 rounded-2xl max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-16">
      <div class="font-bold text-orange-100 text-2xl sm:text-3xl mb-6 p-10 xl:p-16 items-center justify-center">
        <h1 class="mb-8 sm:mb-16">
          Features
        </h1>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Custom Terrain</h2>
            <p class="text-lg font-normal mb-2">Tired of boring minecraft generation? Nether Depths has beautiful, big, terrain generation. Go explore!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Custom Structures</h2>
            <p class="text-lg font-normal mb-2">Bored of the old minecraft structures? Nether Depths has bigger, better, cleaner structures. Go explore!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Dispenser Tools</h2>
            <p class="text-lg font-normal mb-2">Wanna break things but are too lazy to do it yourself? Make dispensers do them for you, put a tool in a dispenser to break blocks in front of it!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">AngelChest</h2>
            <p class="text-sm font-normal mb-2">When you die, your items are added into a chest at your death location. You will be given a map to locate your death location. You can also do /actp to tp there!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">ChestShop</h2>
            <p class="text-lg font-normal mb-4">Sell anything for any price with Chest Shops! You can sell at your own custom warp with /iwarp create or at /warp shops!</p>
            <a href="https://dev.bukkit.org/projects/chestshop#title-1-1" class="transition duration-200 rounded-2xl bg-red-700/80 hover:bg-red-700 px-6 py-3 font-bold text-red-100 text-lg whitespace-nowrap">
              Learn How...
            </a>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Rideable Mobs</h2>
            <p class="text-lg font-normal mb-2">You can ride any of the select mobs with a special token you can get from vote crates! Including flying glow squids, fishes, bees, and dogs/cats! Whichever one you prefer.</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Teleportable Mobs</h2>
            <p class="text-lg font-normal mb-2">You can teleport any rideable mob with you while riding it!Useful if you want to transport villagers in boats.</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Community Server</h2>
            <p class="text-lg font-normal mb-4">Please join the Discord or Guilded Server for important updates! All announcements are there.</p>
            <a href="/discord" class="transition duration-200 rounded-2xl bg-red-700/80 hover:bg-red-700 px-6 py-3 font-bold text-red-100 text-lg whitespace-nowrap">
              Discord
            </a>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Vote Crates</h2>
            <p class="text-lg font-normal mb-4">Get crate keys for crates that give you many different rewards like armor, money, and more!</p>
            <a href="/vote" class="transition duration-200 rounded-2xl bg-red-700/80 hover:bg-red-700 px-6 py-3 font-bold text-red-100 text-lg whitespace-nowrap">
              Vote here to get them!
            </a>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Sit Anywhere</h2>
            <p class="text-lg font-normal mb-2">Sit, lay or crawl anywhere with /sit, /crawl, and /lay. You can also right click stairs with a free hand to sit!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Claims</h2>
            <p class="text-lg font-normal mb-2">Claim your base to avoid grief! How? Just take a golden shovel and mark the corners! You can also play around with various claim flags with /gpflags</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">PvPToggle</h2>
            <p class="text-lg font-normal mb-2">Tired of PvPing and don't want others to kill you? Do /pvp off to disable PvP!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Jobs</h2>
            <p class="text-lg font-normal mb-2">Do various jobs to earn money with /jobs and get money from doing different actions in the server!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Custom Music Discs</h2>
            <p class="text-lg font-normal mb-2">Get Custom Music Discs from a Music Disc Crate to jam with your friends at a nearby Jukebox with over 20 different discs!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Donation Perks</h2>
            <p class="text-lg font-normal mb-4">You can donate to get some perks like /stack, /condense, custom armor stands, and more!</p>
            <a href="https://netherdepths.tebex.io" class="transition duration-200 rounded-2xl bg-red-700/80 hover:bg-red-700 px-6 py-3 font-bold text-red-100 text-lg whitespace-nowrap">
                Learn More...
            </a>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Marriage</h2>
            <p class="text-lg font-normal mb-2">Love someone so much that you want to marry them in the server? Marry them with /marry [name]!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">DrSleep</h2>
            <p class="text-lg font-normal mb-2">Easily skip the night with the need of only 1 player to sleep! Want to keep the night? do /nosleep!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Aurelium Skills</h2>
            <p class="text-lg font-normal mb-2">Earn experience in different aspects of Minecraft and get special abilities!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Chat Races</h2>
            <p class="text-lg font-normal mb-2">Earn money for racing others in chat, answering various questions, unscrambling words, and more!</p>
          </div>
        </div>
      </div>
    </section>
  )
});