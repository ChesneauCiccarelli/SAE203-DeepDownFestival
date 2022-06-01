<template>
  <div class="md:pt-[90px]">
    <div class="hometop md:flex md:max-h-[830px]">
      <div class=" md:w-[50%] py-20">
        <img class="m-auto md:flex-auto" src="../../public/icons/svg/hometop.svg" alt="Illustration">
      </div>
      <div class="md:m-auto">
        <img class="md:max-h-[1000px]" src="../../public/Logosdecor.jpg" alt="Logos du Deep Down Festival">
      </div>
    </div>

    <div class="fondronds mt-[5%] p-[5%] pt-[7%] rounded-3xl">
      <h1 class="neon font-210 text-3xl text-center mb-5">LE FESTIVAL DE L'HISTOIRE DE LA MUSIQUE ELECTRONIQUE</h1>
      <p class="font-cairo font-semibold text-xl text-center ">Plonger avec nous les <strong>27, 28 et 29 mai 2022</strong>. Bordeaux se transforme en sanctuaire de la musique éléctronique.</p>
      <div class="flex justify-center items-center gap-5">
        <p class="font-210-box italic text-xl text-center">VENEZ NOMBREUX</p>
        <img src="../../public/icons/svg/Headphones.svg" alt="Icônes de casque audio">
      </div>
    </div>

    <section>
      <div>
        <div>
          <images class="mt-[5%]"/>
          <carrousel class="mt-[5%]"/>
          <images class="mt-[5%]"/>
        </div>
      </div>

      <div class="md:flex md:gap-7 md:justify-center md:items-center md:flex-auto">
        <div class="bg-blanc mt-[5%] p-5 md:flex-auto">
          <p class="font-210-box italic text-3xl text-sombre">BORDEAUX</p>
          <p class="font-210-box italic text-3xl text-sombre text-right">27 / 28 / 29 MAI</p>
          <p class="font-210-box italic text-3xl text-sombre">25 000 PLACES</p>
          <p class="font-210-box italic text-3xl text-sombre text-right">18 ARTISTES</p>
          <p class="font-210-box italic text-3xl text-sombre">1 GRANDE SCENE</p>
        </div>
        <div class="mt-[5%] p-5 md:flex-auto">
          <p class="font-210-box italic text-3xl">HOUSE</p>
          <p class="font-210-box italic text-3xl text-right">DEEP HOUSE</p>
          <p class="font-210-box italic text-3xl">CHILLOUT</p>
          <p class="font-210-box italic text-3xl text-right">DOWNTEMPO</p>
          <p class="font-210-box italic text-3xl">TECHNO</p>
          <p class="font-210-box italic text-3xl text-right">EXPERIMENTAL</p>
          <p class="font-210-box italic text-3xl">ELECTRO</p>
        </div>
      </div>
    </section>

    <section class="h-[18rem] my-[5%]">
      <animation/>
    </section>

    <div class="fondronds my-[5%] py-5">
      <p class="font-210 text-5xl text-center">TR<strong class="text-accent neon fade">O</strong>IS</p>
      <p class="font-210 text-5xl text-center">J<strong class="text-accent neon fade">O</strong>URS</p>
      <p class="font-210 text-5xl text-center">P<strong class="text-accent neon fade">O</strong>UR</p>
      <p class="font-210 text-5xl text-center mb-3">V<strong class="text-accent neon fade">O</strong>US</p>
      <router-link to="/programmation" class="text-center">
        <glow2 :text="'JE VEUX MA PLACE'"/>
      </router-link>
    </div>

    <section class="mt-[10%]">
      <div class="md:flex md:flex-auto">
        <router-link to="/programmation">
          <composant :titre="'PROGRAMMATION'" :text='"Découvrez le programme des 3 jours de festival. Oubliez pas de réserver votre place avec nous !"'/>
        </router-link>
        <router-link to="/artistes">
          <composant class="md:mt-[15%]" :titre="'LES ARTISTES'" :text='"Découvrez les artistes présents durant les trois jours du DEEP DOWN Festival. Venez voir vos artistes favoris, ceux qui ont fait bouger le monde de la musique électronique."'/>
        </router-link>
      </div>
      <div>
        <router-link to="/festival">
          <composant class="md:mt-[3%] md:-ml-[20%]" :titre="'LE FESTIVAL'" :text='"Qu’est - ce que le festival DEEP DOWN ? Découvrez l’histoire et les valeurs de notre projet."'/>
        </router-link>
      </div>
    </section>

    <section>
      <div class="mt-[5%] md:grid md:grid-cols-2 md:justify-center md:align-middle">
        <img class="" src="../../public/deepdown.jpg" alt="Illustration Deep Down Festival">
        <newsletter class="my-auto"/>
      </div>
    </section>
    
    <section>
      <div class="bg-white mt-[5%] p-5 rounded-3xl">
        <h1 class="text-center font-210 font-black text-sombre mb-3">Pour toute autre question</h1>
          <router-link to="/contact" class="text-center">
            <glow :text="'CONTACTEZ - NOUS'"/>
          </router-link>
      </div>
    </section>

    <DDbas class="mt-[100px]"/>

  </div>
</template>

<script>
import carrousel from "../components/CarrouselView.vue"
import images from "../components/ImageView.vue"
import glow from "../components/bouttons/ButtonDarkView.vue"
import glow2 from "../components/bouttons/ButtonWhite.vue"
import composant from "../components/bouttons/ComposantView.vue"
import newsletter from "../components/NewsletterView.vue"
import DDbas from "../../src/components/FooterView.vue"
import animation from "../../src/components/decors/AnimationView.vue"

export default {
  components: { carrousel, images, glow, glow2, composant, newsletter, DDbas, animation },
};
</script>

<style>
.hometop{
  background-image: url("../../fonds/accueuil.png");
  background-position: center;
}

div#slider { width: 100%; max-width: 1000px; overflow: hidden }
div#slider figure {
  position: relative;
  width: 500%;
  margin: 0;
  padding: 0;
  font-size: 0;
  text-align: left;
  animation: 20s slidy infinite;
}
div#slider figure img { width: 20%; height: auto; float: left; }
@keyframes slidy {
  0% { left: 0%; }
  20% { left: 0%; }
  25% { left: -100%; }
  45% { left: -100%; }
  50% { left: -200%; }
  70% { left: -200%; }
  75% { left: -300%; }
  95% { left: -300%; }
  100% { left: -400%; }
}

.fade{
  animation: fade 6s linear 0s infinite normal forwards;
}
@keyframes fade {
	0%,
	50%,
	100% {
		opacity: 1;
	}

	25%,
	75% {
		opacity: 0.7;
	}
}
</style>