<template>
  <div>
    <img class="mx-auto" src="../../public/logosnewletter.jpg" alt="Logos du Deep Down Festival">
    <div class="flex flex-col justify-center items-center gap-5 bg-white p-5">
      <div>
        <p class="text-3xl font-210-box font-black italic text-center text-sombre">NEWSLETTER</p>
        <p class="text-xl font-black text-center text-sombre">RESTEZ INFORMÉ</p>
      </div>
      <form class="self-stretch flex-grow-0 flex-shrink-0">
        <div>
          <label class="font-black font-210 text-left text-sombre" for="email">Email</label>
          <input class="w-full border-2 border-accent rounded-2xl" type="email" name="email"/>
        </div>
        <svg
          viewBox="0 0 315 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
          preserveAspectRatio="xMidYMid meet"
        >
          <g filter="url(#filter0_f_1236_83986)">
            <line
              y1="-0.5"
              x2="304.547"
              y2="-0.5"
              transform="matrix(0.999995 -0.00328353 0.0076135 0.999971 5.45483 7.5)"
              stroke="#FF0000"
            ></line>
          </g>
        <defs>
          <filter
            id="filter0_f_1236_83986"
            x="0.447205"
            y="0.5"
            width="314.553"
            height="12"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="2.5"
              result="effect1_foregroundBlur_1236_83986"
            ></feGaussianBlur>
          </filter>
        </defs>
        </svg>
        <div class="text-center flex gap-5 justify-center align-middle mt-5">
          <input type="checkbox">
          <label class="font-semibold font-cairo text-sm text-center text-sombre" for="RGPD">J’accepte de partager mes données avec l’administrateur du site web pour qu’il puisse m’envoyer les dernières nouveautées par mail</label>
        </div>
        <div class="flex justify-center align-middle mt-6">
          <button class="font-cairo text-sombre font-semibold text-sm text-center border-b-2 border-accent" type="submit">JE M'ABONNE</button>
        </div>
      </form>
    </div>
    <img class="mx-auto" src="../../public/logosnewletter.jpg" alt="Logos du Deep Down Festival">
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>