<template>
  <button class="flex glow align-middle gap-5 bg-sombre border-2 border-accent px-9 py-2 rounded-full w-fit">
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
.glow {
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    border: none;
    outline: none;
    color: #1F1F1F;
    background: white;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow:before {
    content: '';
    background: linear-gradient(45deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 1));
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow:active {
    color: white
}

.glow:active:after {
    background: transparent;
}

.glow:hover:before {
    opacity: 1;
}

.glow:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>