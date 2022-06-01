<template>
  <div class="mx-auto mt-[5%]">
    <h1 class="font-210-box italic text-3xl text-center mb-3">{{titre}}</h1>
    <p class="font-cairo font-semibold text-xl text-center mb-[3%]">{{text}}</p>
    <div class="flex justify-center">
      <p class="font-cairo font-semibold text-sm text-center border-b-2 border-accent hover:text-accent">EN SAVOIR PLUS</p>
    </div>
  </div>
</template>

<script>
export default {

      props:{

      titre: {
        type: String,
        default: 'Titre',
        },

      text: {
        type: String,
        default: 'Text',
        },

  },

}
</script>

<style>

</style>