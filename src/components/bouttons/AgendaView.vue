<template>
  <button class="flex align-middle gap-5 bg-sombre border-2 border-accent px-9 py-2 rounded-full w-fit">
    <CalendarIcon class="w-6 h-6"/>
    <p class="font-cairo font-semibold text-base">Ajouter à mon agenda</p>
  </button>
</template>

<script>
import { CalendarIcon } from '@heroicons/vue/outline'
export default {
  components: { CalendarIcon},
}
</script>

<style>

</style>