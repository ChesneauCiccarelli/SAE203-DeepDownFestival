<template>
<div class="md:pt-[90px]">
  <div class="festtop">
    <heading :titre="'LE FESTIVAL'" :text="'Découvrez en détail le DEEP DOWN Festival.'"/>
  </div>

  <section class="mt-[5%]">
    <h1 class="neon font-210 font-black text-5xl text-center">Bienvenue au DEEP DOWN Festival </h1>
      <div class="mt-[5%]">
        <separation/>
        <images class="my-3"/>
        <separation/>
      </div>
  </section>

  <section class="fondronds p-8 rounded-full mt-[5%]">
    <h2 class="font-210 font-normal text-3xl text-center mb-[3%]">La musique electronique en plein coeur de Bordeaux</h2>
    <p class="font-210 font-black text-2xl text-center">3 jours de folie</p>
    <p class="neon font-210 font-black text-2xl text-center mb-[3%]">du 27 au 29 mai 2022</p>
    <agenda class="m-auto mb-[3%]"/>
    <p class="font-cairo font-semibold text-2xl text-center mb-[3%]">25 000 places</p>
    <p class="font-cairo font-semibold text-2xl text-center mb-[3%]">1 grande scène</p>
    <p class="font-cairo font-semibold text-2xl text-center">18 artistes</p>
  </section>

  <section class="mt-[5%] md:flex md:justify-center md:align-middle">
    <p class="font-cairo font-semibold text-xl m-auto">Le festival <strong class="neon">DEEP DOWN</strong> est un mémento sur la musique électronique et de ses plus grands aspect. Le nom mets en rapport les deux plus grands genres électroniques connu du grand public qui sont La House (ou Deep House) et le Chillout (aussi appelé Down Tempo). L’idée est de plonger au plus profondément du genre musical en passant sur tout ce qui a constitué son univers en seulement 3 jours. Ce nom fait référence à cette idée de re-dévoiler l’histoire des plus grandes avancées sur la dispersion du genre électronique.</p>
    <div class="p-5 md:flex-auto">
      <p class="font-210-box italic text-3xl">HOUSE</p>
      <p class="font-210-box italic text-3xl text-right">DEEP HOUSE</p>
      <p class="font-210-box italic text-3xl">CHILLOUT</p>
      <p class="font-210-box italic text-3xl text-right">DOWNTEMPO</p>
      <p class="font-210-box italic text-3xl">TECHNO</p>
      <p class="font-210-box italic text-3xl text-right">EXPERIMENTAL</p>
      <p class="font-210-box italic text-3xl">ELECTRO</p>
    </div>
  </section>

  <div class="md:mt-[5%]">
    <div class="flex gap-[4%]">
      <img class="w-[48%] h-[50%]" src="../../public/vertical/fire.jpeg" alt="Photo du festival">
      <img class="w-[48%] h-[50%] pt-[10%]" src="../../public/vertical/nightfirework.jpeg" alt="Photo du festival">
    </div >
    <div class="mt-[4%] flex gap-[4%]">
      <img class="w-[48%] h-[50%] -mt-[10%]" src="../../public/vertical/nightfirework2.jpeg" alt="Photo du festival">
      <img class="w-[48%] h-[50%]" src="../../public/vertical/roue.jpeg" alt="Photo du festival">
    </div>
  </div>

  <DDbas class="mt-[100px]"/>

</div>
</template>

<script>
import heading from "../../src/components/HeadingsPageView.vue"
import images from "../../src/components/ImageView.vue"
import agenda from "../../src/components/bouttons/AgendaView.vue"
import separation from "../../src/components/decors/LogosSeparationView.vue"
import DDbas from "../../src/components/FooterView.vue"
export default {
  components: { heading, images, agenda, DDbas, separation },
};
</script>

<style>
.festtop{
  background-image: url("../../public/fonds/festival.png");
  background-position: center;
}

.neon{
  text-shadow: 0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000, 0px 0px 5px #FF0000;
}

.fondronds{
  background-image: url("../../public/fonds/pattern.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>