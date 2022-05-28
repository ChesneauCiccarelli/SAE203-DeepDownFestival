<template>
  <div class="md:pt-[90px]">

  <div class="artisttop">
    <heading :titre="'ARTISTES'" :text="'Vos artistes favoris montent sur la grande scène pour vous.'"/>
  </div>

  <section class="mt-[5%]">
    <div class="flex">
        <input class="bg-sombre font-cairo font-semibold text-xl text-accent flex-auto" type="text" v-model="query" placeholder="Rechercher">
        <SearchIcon class="w-6 h-6"/>
    </div>
    <underline/>
  </section>

  <section class="mt-[5%] grid grid-cols-[repeat(auto-fit,300px)] gap-5 justify-center align-middle">
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/alanwalker.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Alan Walker</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/tiesto.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Tiesto</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/justice.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Justice</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/cassius.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Cassius</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/disclosure.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Disclosure</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/solomon.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Solomon</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/moodyman.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Moodyman</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/mayajanecoles.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Maya Jane Coles</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/stgermain.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">St Germain</p>
        </div>
      </div>
    </router-link>
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/invitemystere.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Invite Mystere</p>
        </div>
      </div>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/benwatt.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Ben Watt</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/petitbiscuit.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Petit Biscuit</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/flume.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Flume</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/hallucinogen.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Hallucinogen</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/kungs.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Kungs</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/marshmellow.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Marshmellow</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/skrillex.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Skrillex</p>
        </div>
      </div>
    </router-link>
    <router-link to="/personne">
      <div>
        <div class="w-[300px] h-[200px]">
          <img
            src="../../public/artistes/luuul.jpg"
            class="w-[300px] h-[200px]"
            alt="Photo de l'artiste"
          />
          <p class="w-[300px] shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">LUUUL</p>
        </div>
      </div>
    </router-link>
  </section>

  <DDbas class="mt-[100px]"/>

  </div>
</template>

<script>
import heading from "../../src/components/HeadingsPageView.vue"
import DDbas from "../../src/components/FooterView.vue"
import { SearchIcon } from "@heroicons/vue/outline"
import underline from "../../src/components/decors/UnderlineView.vue"
export default {
  components: { heading, DDbas, SearchIcon, underline },
}
</script>

<style>
.artisttop{
  background-image: url("../../public/fonds/artistes.png");
  background-position: center;
}
.neon{
  text-shadow: 0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000, 0px 0px 5px #FF0000;
}
.shadow{
  text-shadow: 3px 3px 2px black, 2px 2px 5px red;
}
</style>