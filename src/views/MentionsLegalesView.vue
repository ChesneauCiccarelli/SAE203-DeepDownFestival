<template>
  <div class="md:pt-[90px]">
    <div class="mltop md:flex md:max-h-[830px]">
      <div class=" md:w-[50%] py-20">
        <img class="m-auto max-h-[500px] md:flex-auto" src="../../public/logosx3.jpg" alt="Illustration Deep Down">
        <div class="my-[10%]">
          <div class="mt-[5%] mb-2 flex justify-center">
            <h1 class="font-210 text-5xl text-center">MENTIONS LEGALES</h1>
          </div>
          <underline/>
        </div>
        <img class="m-auto max-h-[500px] md:flex-auto" src="../../public/logosx3.jpg" alt="Illustration Deep Down">
      </div>
      <div class="md:m-auto">
        <img class="md:max-h-[1000px]" src="../../public/Logosdecor.jpg" alt="Logos du Deep Down Festival">
      </div>
    </div>

    <section class="md:w-[50%]">
      <div class="mt-[5%]">
        <p class="mb-10">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site DEEP DOWN Festival l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
        <h2 class="font-210 font-black text-3xl mb-5">Edition du site </h2>
        <p class="mb-5">Le présent site, accessible à l’URL https://www.deepdown.fr/ (le « Site »), est édité par :</p>
        <p class="mb-10">L’association DEEP DOWN Festival, enregistrée auprès de la préfecture/sous-préfecture de 33 - Préfecture Bordeaux sous le numéro W123456789, ayant son siège situé à 15 Rue du Jardin public, 33000 Bordeaux, représentée par Patrick Soiret dûment habilité(e)</p>
        <h2 class="font-210 font-black text-3xl mb-10">Hebergement </h2>
        <p class="mb-10">Le Site est hébergé par la société Infomaniak, situé Rue Eugène-Marziano 25, 1227 Genève, Suisse, (contact téléphonique ou email : (+41) 22 820 35 44).</p>
        <h2 class="font-210 font-black text-3xl mb-10">Directeur de publication</h2>
        <p class="mb-10">Le Directeur de la publication du Site est Mr. Patrick Soiret</p>
        <h2 class="font-210 font-black text-3xl mb-10">Nous contacter</h2>
        <p>Par téléphone : +33632732828</p>
        <p>Par email : deepdown@fest</p>
        <p class="mb-10">Par courrier : 15 Rue du Jardin public, 33000 Bordeaux</p>
        <h2 class="font-210 font-black text-3xl mb-10">Donnees personnelles</h2>
        <p class="mb-5">Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, disponible depuis la section "Charte de Protection des Données Personnelles", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).</p>
        <p class="mb-5">Les coordonnées de notre Délégué à la Protection des Données sont les suivantes :</p>
        <p>Nom : Patrick Soiret</p>
        <p>Adresse : 15 Rue du Jardin public, 33000 Bordeaux</p>
        <p>Téléphone : +33628320392</p>
        <p>Email : pdd.deepdown@fest</p>
      </div>
    </section>

    <DDbas class="mt-[100px]"/>

  </div>
</template>

<script>
import underline from "../../src/components/decors/UnderlineView.vue"
import DDbas from "../../src/components/FooterView.vue"
export default {
    components: { underline, DDbas },
}
</script>

<style>
.mltop{
  background-image: url("../../public/fonds/mentionslegales.png");
  background-position: center;
}
</style>