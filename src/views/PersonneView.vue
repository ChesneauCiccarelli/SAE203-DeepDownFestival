<template>
  <div class="md:pt-[90px]">
    <div class="personnetop md:flex">
      <div class="m-auto">
        <img src="../../public/logosx3.jpg" alt="Illustration Deep Down">
        <div>
            <img
              src="../../public/artistes/alanwalker.jpg"
              class="m-auto"
              alt="Photo de l'artiste"
            />
            <p class="-mb-7 shadow relative bottom-10 text-xl font-210-box font-black italic text-center text-white">Alan Walker</p>
        </div>
        <img class="m-auto" src="../../public/logosx3.jpg" alt="Illustration Deep Down">
      </div>
      <div class="md:m-auto">
        <img class="md:max-h-[1000px]" src="../../public/Logosdecor.jpg" alt="Logos du Deep Down Festival">
      </div>
    </div>

    <section class="mt-[5%] md:flex md:justify-center md:align-middle">
      <div class="m-auto mb-[5%] md:mb-0 md:flex-auto">
        <p class="font-cairo font-semibold text-xl text-center m-auto mb-5"> <strong class="neon">Alan Olav Walker</strong>, ayant autrefois utilisé le pseudonyme DJ Walkzz, est né le 24 août 1997 à Northampton en Angleterre. C’est un DJ, auteur-compositeur et producteur britannico-norvégien. Après ses débuts, en 2014, son morceau instrumental Fade fait sensation après avoir été mis en ligne sur YouTube, lui permettant de signer un contrat avec le label NoCopyrightSounds. Depuis 2015, ses titres Spectre ou Force sont aussi remarqués, mais c'est aujourd'hui une nouvelle version vocale de Fade, baptisée Faded (avec la vocaliste Iselin Solheim), qui rencontre le succès.</p>
        <div class="flex flex-col items-center mr-auto">
          <a href="https://fr.wikipedia.org/wiki/Alan_Walker_(producteur)">
            <p class="flex-grow-0 flex-shrink-0 font-cairo text-xs font-semibold text-center">DECOUVRIR PLUS</p>
          </a>
          <svg
            width="81"
            height="6"
            viewBox="0 0 81 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM81 3L76 0.113249V5.88675L81 3ZM1 3.5H76.5V2.5H1V3.5Z"
              fill="url(#paint0_linear_1295_22003)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1295_22003"
                x1="81"
                y1="3"
                x2="1"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF0000"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div class="p-5 md:flex-auto text-center md:m-auto">
        <p class="font-210-box italic text-3xl">ELECTRO</p>
        <p class="font-210-box italic text-3xl">HOUSE</p>
        <p class="font-210-box italic text-3xl">CHILLOUT</p>
      </div>
    </section>

    <section class="h-[18rem] my-[5%]">
      <animation/>
    </section>

    <h1 class="font-210 text-3xl text-center mt-[5%]">Les titres phares</h1>
    <div class="grid grid-cols-[repeat(auto-fit,200px)] gap-5 justify-center mt-5">
      <div>
        <img
        src="../../public/titres/faded.jpeg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Faded</p>
      </div>
      <div>
        <img
        src="../../public/titres/lily.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Lily</p>
      </div>
      <div>
        <img
        src="../../public/titres/differentworld.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Different World</p>
      </div>
      <div>
        <img
        src="../../public/titres/singmetosleep.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Sing me to sleep</p>
      </div>
      <div>
        <img
        src="../../public/titres/diamondheart.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Diamon Heart</p>
      </div>
      <div>
        <img
        src="../../public/titres/endoftime.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">End of Time</p>
      </div>
      <div>
        <img
        src="../../public/titres/alone.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Alone</p>
      </div>
      <div>
        <img
        src="../../public/titres/alone2.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Alone pt.2</p>
      </div>
      <div>
        <img
        src="../../public/titres/onmyway.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">On my way</p>
      </div>
      <div>
        <img
        src="../../public/titres/allfallsdown.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">All falls down</p>
      </div>
      <div>
        <img
        src="../../public/titres/thespectre.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">The Spectre</p>
      </div>
      <div>
        <img
        src="../../public/titres/lostcontrol.jpg"
        class="w-[200px] h-[200px]"
        alt="Image du single"/>
        <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Lost Control</p>
      </div>
    </div>

    <h1 class="font-210 text-3xl text-center mt-[5%]">Albums</h1>
    <div class="grid grid-cols-[repeat(auto-fit,200px)] gap-5 justify-center mt-5">
        <div>
          <img
          src="../../public/albums/worldofwalker.png"
          class="w-[200px] h-[200px]"
          alt="Image de l'album"/>
          <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">World of Walker</p>
        </div>
        <div>
          <img
          src="../../public/albums/differentworld.png"
          class="w-[200px] h-[200px]"
          alt="Image de l'album"/>
          <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Different World</p>
        </div>
        <div>
          <img
          src="../../public/albums/walkerracingleague.png"
          class="w-[200px] h-[200px]"
          alt="Image de l'album"/>
          <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Walker Racing League</p>
        </div>
        <div>
          <img
          src="../../public/albums/faded.png"
          class="w-[200px] h-[200px]"
          alt="Image de l'album"/>
          <p class="w-[200px] mt-3 text-base font-210-box italic text-center text-white">Faded</p>
        </div>
      </div>

    <section class="mt-[5%] fondronds p-5 rounded-3xl w-[500px] m-auto">
      <p class="font-cairo text-xl font-semibold text-center mb-3">Retrouvez-le le <strong>27, 28 et 29 mai 2022</strong> sur la grande scène du <strong>DEEP DOWN Festival</strong>.</p>
      <router-link to="/programmation" class="text-center">
        <bouton :text="'PROGRAMMATION'"/>
      </router-link>
    </section>

    <DDbas class="mt-[100px]"/>

  </div>
</template>

<script>
import DDbas from "../../src/components/FooterView.vue"
import bouton from "../../src/components/bouttons/ButtonWhite.vue"
import animation from "../../src/components/decors/AnimationView.vue"

export default {
  components: { DDbas, bouton, animation } 
}
</script>

<style>
.personnetop{
  background-image: url("../../public/fonds/alanwalker.png");
  background-position: center;
}
.neon{
  text-shadow: 0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000, 0px 0px 5px #FF0000;
}
</style>