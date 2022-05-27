<template>
    <div>
    <div class="md:flex md:max-h-[830px]">
      <div class="imgtop md:w-[50%] py-20">
        <img class="m-auto max-h-[500px] md:flex-auto" src="../../public/deepdown.jpg" alt="Illustration Deep Down">
        <div class="mt-[5%] mb-2 flex justify-center">
          <h1 class="font-210-d text-3xl">{{titre}}</h1>
        </div>
        <underline/>
        <p class="font-cairo font-semibold text-xl text-center mt-[5%]">{{text}}</p>
      </div>
      <div class="md:m-auto">
        <img class="md:max-h-[1000px]" src="../../public/Logosdecor.jpg" alt="Logos du Deep Down Festival">
      </div>
    </div>
  </div>
</template>

<script>
import underline from "../../src/components/decors/UnderlineView.vue"
export default {
    components: { underline },
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