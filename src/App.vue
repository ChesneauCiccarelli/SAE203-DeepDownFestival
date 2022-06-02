<template>
<div>
  <header>
    <Menu>
      <div class="fixed bg-white dark:bg-sombre w-full z-30 border-b-2 rounded-bl-xl rounded-br-xl border-sombre dark:border-white" onclick="anim.classList.remove('opened'), document.body.style.overflow = 'auto'">
        <div class="flex md:hidden m-[5%]">
          <div class="flex-auto">
            <router-link to="/">
              <img class="flex-auto h-[50px] w-[50px] z-50" src="../public/icons/LogoDDBlanc.jpg" alt="Logo du festival Deep Down" >
            </router-link>
          </div>
          <MenuButton>
            <div>
              <button id="anim" class="menu flex items-center justify-center h-[50px] w-[50px]" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened')), document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden'" aria-label="Main Menu">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path class="line line2" d="M 20,50 H 80" />
                  <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
              </button>
            </div>
            <span class="sr-only">Menu</span> 
          </MenuButton>
        </div>
        <div>
          <transition class="md:hidden h-screen overflow-y-hidden"
            enter-active-class="transition duration-1000 ease-out"
            enter-from-class="transform -translate-x-full"
            enter-to-class="transform translate-x-0"
            leave-active-class="transition duration-400 ease-in"
            leave-from-class="transform translate-0"
            leave-to-class="transform -translate-x-full"
          >
            <MenuItems class="flex flex-col items-center">     
              <MenuItem class="font-210-box italic text-3xl text-sombre dark:text-white">
                <router-link to="/festival" class="w-full text-center py-5">LE FESTIVAL </router-link>
              </MenuItem>
              <MenuItem class="font-210-box italic text-3xl text-sombre dark:text-white">
                <router-link to="/programmation" class="w-full text-center py-5">PROGRAMME </router-link>
              </MenuItem>
              <MenuItem class="font-210-box italic text-3xl text-sombre dark:text-white">
                <router-link to="/artistes" class="w-full text-center py-5">ARTISTES</router-link>
              </MenuItem>
              <MenuItem>
                <DDbas class="pb-[500px]"/>
              </MenuItem>
            </MenuItems>
          </transition>
        </div>
      </div>
    </Menu>

    <nav class="hidden fixed z-40 w-full md:flex md:justify-center bg-white dark:bg-sombre dark:border-x dark:border-b p-5 rounded-br-3xl rounded-bl-3xl">
        <div class="mr-[2%]">
          <router-link to="/">
            <img class="h-[50px] w-[50px]" src="../public/icons/LogoDDBlanc.jpg" alt="Logo du festival Deep Down" >
          </router-link>
        </div>
        <div class="flex gap-8 items-center justify-center">
          <router-link to="/festival">
            <p class="font-210-box italic text-3xl text-sombre dark:text-white">LE FESTIVAL</p>
          </router-link>
          <router-link to="/programmation">
            <p class="font-210-box italic text-3xl text-sombre dark:text-white">PROGRAMME</p>
          </router-link>
          <router-link to="/artistes">
            <p class="font-210-box italic text-3xl text-sombre dark:text-white">ARTISTES</p>
          </router-link>
        </div>
    </nav>

  </header>


  <RouterView />
</div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { MenuIcon } from "@heroicons/vue/outline";
import DDbas from "../src/components/FooterView.vue"

export default {

  components: { MenuIcon, Menu, MenuButton, MenuItems, MenuItem, DDbas },

}
</script>

<style>
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: #1F1F1F;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-color-scheme: dark){
  .line {
  stroke: white;
  }
}

.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>