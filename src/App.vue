<template>
  <header>
    <Menu>
      <div class="flex">
        <div class="flex-auto">
          <router-link to="/">
            <img class="flex-auto h-[50px] w-[50px]" src="../public/icons/LogoDDBlanc.jpg" alt="Logo du festival Deep Down" >
          </router-link>
        </div>
        <MenuButton> <MenuIcon class="inline-block h-[50px] w-[50px]" /><span class="sr-only">Menu</span> </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform -translate-x-full"
        enter-to-class="transform translate-x-0"
        leave-active-class="transition duration-1000 ease-in"
        leave-from-class="transform translate-0"
        leave-to-class="transform -translate-x-full"
      >
        <MenuItems class="flex flex-col gap-[30px] my-[50px] items-center">
          <MenuItem class="font-210-box italic text-3xl" v-slot="{ active }">
            <router-link to="/festival" :class="{ 'bg-blue-500': active }"> LE FESTIVAL </router-link>
          </MenuItem>
          <MenuItem class="font-210-box italic text-3xl" v-slot="{ active }">
            <router-link to="/programmation" :class="{ 'bg-blue-500 ring-2': active }">PROGRAMME </router-link>
          </MenuItem>
          <MenuItem class="font-210-box italic text-3xl" v-slot="{ active }">
            <router-link to="/artistes" :class="{ 'bg-blue-500 ring-2': active }">ARTISTES</router-link
            >
          </MenuItem>
          <DDbas/>
        </MenuItems>
      </transition>
    </Menu>
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