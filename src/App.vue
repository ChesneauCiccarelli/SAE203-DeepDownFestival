<template>
  <header>
    <Menu>
      <div class="flex mb-9 md:hidden m-[5%]">
        <div class="flex-auto">
          <router-link to="/">
            <img class="flex-auto h-[50px] w-[50px]" src="../public/icons/LogoDDBlanc.jpg" alt="Logo du festival Deep Down" >
          </router-link>
        </div>
        <MenuButton> <MenuIcon class="inline-block h-[50px] w-[50px]" /><span class="sr-only">Menu</span> </MenuButton>
      </div>

      <transition class="md:hidden"
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform -translate-x-full"
        enter-to-class="transform translate-x-0"
        leave-active-class="transition duration-1000 ease-in"
        leave-from-class="transform translate-0"
        leave-to-class="transform -translate-x-full"
      >
        <MenuItems class="flex flex-col gap-[30px] my-[50px] items-center">     
          <MenuItem class="font-210-box italic text-3xl">
            <router-link to="/festival"> LE FESTIVAL </router-link>
          </MenuItem>
          <MenuItem class="font-210-box italic text-3xl">
            <router-link to="/programmation">PROGRAMME </router-link>
          </MenuItem>
          <MenuItem class="font-210-box italic text-3xl">
            <router-link to="/artistes">ARTISTES</router-link>
          </MenuItem>
          <DDbas/>
        </MenuItems>
      </transition>
    </Menu>

    <nav class="hidden fixed z-40 w-full md:flex bg-white dark:bg-sombre dark:border-x dark:border-b p-5 rounded-br-3xl rounded-bl-3xl">
        <div class="mr-[2%]">
          <router-link to="/">
            <img class="flex-auto h-[50px] w-[50px]" src="../public/icons/LogoDDBlanc.jpg" alt="Logo du festival Deep Down" >
          </router-link>
        </div>
        <div class="flex gap-8 flex-auto items-center justify-center">
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
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { MenuIcon } from "@heroicons/vue/outline";
import DDbas from "../src/components/FooterView.vue"
export default {
  components: { MenuIcon, Menu, MenuButton, MenuItems, MenuItem, DDbas },
};
</script>