<template>
  <div class="md:pt-[90px]">
    <div class="md:flex md:max-h-[830px]">
      <div class="m-auto">
        <img class="m-auto max-h-[500px] md:flex-auto" src="../../../public/logosx3.jpg" alt="Illustration Deep Down">
        <div class="my-[10%]">
          <div class="mt-[5%] mb-2 flex justify-center">
            <h1 class="font-210 text-5xl text-center">ERREUR 404</h1>
          </div>
          <underline/>
        </div>
        <img class="m-auto max-h-[500px] md:flex-auto" src="../../../public/logosx3.jpg" alt="Illustration Deep Down">
      </div>
      <div class="md:m-auto">
        <img class="md:max-h-[1000px]" src="../../../public/Logosdecor.jpg" alt="Logos du Deep Down Festival">
      </div>
    </div>

    <section>
      <h1 class="intropage__titre titre404">Erreur 404</h1>
      <h2 class="sous-titre soustitre404" >You seem to be lost</h2>
      <p class="introduction introduction404" >Unfortunately, the page you are looking for does not exist. But let me guide you out of here</p>
      <h2 class="sous-titre soustitre404 modiftitre404 parlonsfem" >Come back to the home page,</h2>
      <div class="navarticle__nav button404"> <a class="navarticle__boutontxt" href="/homepage.html">Home Page</a> </div>
      <h2 class="sous-titre soustitre404 modiftitre404 parlonsfem" >or browse the internet :</h2>
    </section>
    <section>
      <form action="https://duckduckgo.com/" method="GET" x-data="{ q:'', }" x-on:submit="q = q">
        <label for="q">What are you looking for ?</label>
        <input type="text" id="q" autocomplete="off" name="q" x-model="q">
        <button class="bouttonrecherche404" type="submit">Browse</button>
      </form>
    </section>

  </div>
</template>

<script>
import underline from "../../src/components/decors/UnderlineView.vue"
import DDbas from "../../src/components/FooterView.vue"
export default {
  components:{ underline, DDbas },
}
</script>

<style>

</style>