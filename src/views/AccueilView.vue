<template>
  <div>
    <div class="md:flex md:max-h-[830px]">
      <div class="hometop md:w-[50%] py-20">
        <img class="m-auto md:flex-auto" src="../../public/icons/svg/hometop.svg" alt="Illustration">
      </div>
      <div class="md:m-auto">
        <img class="md:max-h-[1000px]" src="../../public/Logosdecor.jpg" alt="Logos du Deep Down Festival">
      </div>
    </div>

    <section>
      <div>
        <div class="fondronds mt-[5%] p-[5%] pt-[7%]">
          <h1 class="font-210 text-3xl text-center mb-5">LE FESTIVAL DE L'HISTOIRE DE LA MUSIQUE ELECTRONIQUE</h1>
          <p class="font-cairo font-semibold text-xl text-center ">Plonger avec nous les <strong>27, 28 et 29 mai 2022</strong>. Bordeaux se transforme en sanctuaire de la musique éléctronique.</p>
          <div class="flex justify-center items-center gap-5">
            <p class="font-210-box italic text-xl text-center">VENEZ NOMBREUX</p>
            <img src="../../public/icons/svg/Headphones.svg" alt="Icônes de casque audio">
          </div>
        </div>
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

    <div class="fondronds my-[5%]">
      <p class="font-210 text-5xl text-center">TR<strong class="text-accent">O</strong>IS</p>
      <p class="font-210 text-5xl text-center">J<strong class="text-accent">O</strong>URS</p>
      <p class="font-210 text-5xl text-center">P<strong class="text-accent">O</strong>UR</p>
      <p class="font-210 text-5xl text-center">V<strong class="text-accent">O</strong>US</p>
      <router-link to="/programmation">
        <bouton class="mx-auto"/>
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
          <div class="w-[325px] h-[70px] mx-auto relative">
            <svg
              viewBox="0 0 299 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto"
              preserveAspectRatio="none"
            >
              <path
                d="M52.5043 3.00873L3.61412 53.0087C-2.57667 59.3401 1.90907 70 10.7641 70H239.346C242.037 70 244.614 68.9154 246.496 66.9913L295.386 16.9913C301.577 10.6599 297.091 0 288.236 0H59.6543C56.9632 0 54.3857 1.08462 52.5043 3.00873Z"
                fill="#1D1D1B"
              ></path>
            </svg>
            <router-link to="/contact">
              <p class="w-[325px] absolute top-[7.8px] text-xl font-210-d text-center text-white">CONTACTEZ<br/>NOUS</p>
            </router-link>
          </div>
      </div>
    </section>

    <DDbas class="mt-[100px]"/>

  </div>
</template>

<script>
import carrousel from "../components/CarrouselView.vue"
import images from "../components/ImagesView.vue"
import bouton from "../components/bouttons/BouttonView.vue"
import composant from "../components/bouttons/ComposantView.vue"
import newsletter from "../components/NewsletterView.vue"
import DDbas from "../../src/components/FooterView.vue"
export default {
  components: { carrousel, images, bouton, composant, newsletter, DDbas },
};
</script>

<style>
.hometop{
  background-image: url("../../public/Fonds/accueuil.png");
  background-position: center;
}

.fondronds{
  background-image: url("../../public/Fonds/Pattern.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
</style>