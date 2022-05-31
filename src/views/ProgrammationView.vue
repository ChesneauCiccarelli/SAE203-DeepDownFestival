<template>
<div class="md:pt-[90px]">
  <div class="programmtop">
    <heading :titre="'PROGRAMMATION'" :text="'Les trois jours les plus remplis de votre année.'"/>
  </div>

  <div class="mt-[5%]">
    <separation/>
    <programme :titre="'Jour 1'" :date="'27 MAI 2022'" :heure="'19H00 - 9H00'" :genre1="'HOUSE'" :genre2="'DEEP HOUSE'" :genre3="'ELECTRO'" :artiste1="'Disclosure'" :artiste2="'Cassius'" :artiste3="'Solomon'" :artiste4="'Maya Jane Coles'" :artiste5="'ST. Germain'" :artiste6="'Justice'" :artiste7="'Tiësto'" :artiste8="'Moodyman'" :artiste9="'Alan Walker'" :artiste10="'Ben Watt'"/>
    <router-link to="/concert">
      <boutonblanc class="my-[5%] m-auto" :text="'DECOUVRIR'"/>
    </router-link>
    <separation/>
  </div>

  <div class="mt-[5%]">
    <separation/>
    <programme :titre="'Jour 2'" :date="'28 MAI 2022'" :heure="'19H00 - 9H00'" :genre1="'CHILLOUT'" :genre2="'DOWN TEMPO'" :genre3="'EXPERIMENTAL'" :artiste1="'Disclosure'" :artiste2="'Petit Biscuit'" :artiste3="'Solomon'" :artiste4="'Hallucinogen'" :artiste5="'Kungs'" :artiste6="'Justice'" :artiste7="'Marshmellow'" :artiste8="'Moodyman'" :artiste9="'Flume'" :artiste10="'LUUUL'"/>
    <router-link to="/concert">
      <boutonblanc class="my-[5%] m-auto" :text="'DECOUVRIR'"/>
    </router-link>
    <separation/>
  </div>

  <div class="mt-[5%]">
    <separation/>
    <programme :titre="'Jour 3'" :date="'29 MAI 2022'" :heure="'14H00 - 21H00'" :genre1="'TECHNO'" :genre2="'ELECTRO'" :genre3="'HOUSE'" :artiste1="'Disclosure'" :artiste2="'Justice'" :artiste3="'Solomon'" :artiste4="'Petit Biscuit'" :artiste5="'Skrillex'" :artiste6="'Marshmellow'" :artiste7="'Tiësto'" :artiste8="'Moodyman'" :artiste9="'Alan Walker'" :artiste10="'Invité Mystère'"/>
    <router-link to="/concert">
      <boutonblanc class="my-[5%] m-auto" :text="'DECOUVRIR'"/>
    </router-link>
    <separation/>
  </div>

  <DDbas class="mt-[100px]"/>

</div>
</template>

<script>
import heading from "../../src/components/HeadingsPageView.vue"
import separation from "../../src/components/decors/LogosSeparationView.vue"
import programme from "../../src/components/ProgrammeView.vue"
import boutonblanc from "../../src/components/bouttons/Boutton1Blanc.vue"
import DDbas from "../../src/components/FooterView.vue"

export default {
  components: { heading, separation, programme, boutonblanc, DDbas }
}
</script>

<style>
.programmtop{
  background-image: url("../../public/fonds/programmation.png");
  background-position: center;
}
</style>