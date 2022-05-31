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

    <section class="mt-[5%]">
      <h1 class="neon font-210-box italic text-5xl text-center mb-5">Erreur 404</h1>
      <h2 class="font-210-d text-3xl mt-[5%] mb-3 text-center" >Vous vous etes perdu je pense, revenez parmis nous !</h2>
      <p class="font-cairo font-semibold text-xl text-center" >La page que vous avez demandé n'existe pas malheureusement, laissez moi vous aider à sortir d'ici.</p>
      <div class="md:flex md:justify-evenly mt-[10%] md:mt-[5%]">
        <div class="my-auto">
          <h2 class="font-210 text-3xl text-center mb-5 mt-[5%]" >Revenir a l'accueuil</h2>
          <router-link to="/">
            <bouton class="mx-auto" :text="'ACCUEUIL'"/>
          </router-link>
        </div>
        <div class="mt-[10%] md:mt-0">
          <h2 class="font-210 text-3xl text-center mb-5 mt-[5%]">Rechercher sur internet</h2>
          <form class="flex flex-col" action="https://google.com/" method="GET" x-data="{ q:'', }" x-on:submit="q = q">
            <label class="font-cairo font-semibold text-xl text-center mb-3" for="q">Que'est ce que vous recherchez ?</label>
            <input class="bg-sombre text-accent font-cairo font-semibold text-xl text-center w-[290px] m-auto" type="text" id="q" autocomplete="off" name="q" x-model="q">
            <underline class="mb-3 w-[290px] m-auto"/>
            <button class="font-210-d bg-white text-sombre w-fit px-5 py-3 border border-accent rounded-3xl m-auto" type="submit">Rechercher</button>
          </form>
        </div>
      </div>
      <div>
        <h2 class="font-210-d text-3xl mt-[5%] mb-3">Plan du site</h2>
        <div class="flex flex-col">
          <router-link class="font-cairo font-semibold text-xl" to="/">Page d'accueuil</router-link>
          <router-link class="font-cairo font-semibold text-xl" to="/festival">Le festival</router-link>
          <router-link class="font-cairo font-semibold text-xl" to="/programmation">Programme</router-link>
          <router-link class="font-cairo font-light italic ml-5 text-xl" to="/concert">Jour 1</router-link>
          <p class="font-cairo font-light italic ml-5 text-xl">Jour 2</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Jour 3</p>
          <router-link class="font-cairo font-semibold text-xl" to="/artistes">Les artistes</router-link>
          <router-link class="font-cairo font-light italic ml-5 text-xl" to="/personne">Alan Walker</router-link>
          <p class="font-cairo font-light italic ml-5 text-xl">Disclosure</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Justice</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Cassius</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Tiesto</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Solomon</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Moodyman</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Maya Jane Coles</p>
          <p class="font-cairo font-light italic ml-5 text-xl">St Germain</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Ben Watt</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Petit Biscuit</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Flume</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Hallucinogen</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Kungs</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Marshmellow</p>
          <p class="font-cairo font-light italic ml-5 text-xl">Skrillex</p>
          <p class="font-cairo font-light italic ml-5 text-xl">LUUUL</p>
          <router-link class="font-cairo font-semibold text-xl" to="/contact">Page de contact</router-link>
          <router-link class="font-cairo font-semibold text-xl" to="/ml">Mentions légales</router-link>
        </div>
      </div>
    </section>

    <DDbas class="mt-[100px]"/>

  </div>
</template>

<script>
import underline from "../../src/components/decors/UnderlineView.vue"
import DDbas from "../../src/components/FooterView.vue"
import bouton from "../../src/components/bouttons/Boutton1Blanc.vue"
export default {
  components:{ underline, DDbas, bouton },
}
</script>

<style>

</style>