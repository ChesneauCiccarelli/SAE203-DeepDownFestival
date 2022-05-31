<template>
  <div class="text-center mt-[5%]">
    <h1 class="font-210 font-black text-6xl mb-8 neon">{{titre}}</h1>
    <p class="font-210-box italic text-3xl">{{date}}</p>
    <p class="font-210-box italic text-3xl mb-8">{{heure}}</p>
    <images class="mb-8"/>
    <div class="flex mb-3">
      <p class="font-210-box italic text-3xl grow">{{genre1}}</p>
      <svg
        width="176"
        viewBox="0 0 176 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-grow"
        preserveAspectRatio="xMidYMid meet"
      >
        <g filter="url(#filter0_f_1241_25712)">
          <path
            d="M5.83333 8C5.83333 9.47276 7.02724 10.6667 8.5 10.6667C9.97276 10.6667 11.1667 9.47276 11.1667 8C11.1667 6.52724 9.97276 5.33333 8.5 5.33333C7.02724 5.33333 5.83333 6.52724 5.83333 8ZM8.5 8.5L171 8.5V7.5L8.5 7.5V8.5Z"
            fill="#FF0000"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_f_1241_25712"
            x="0.833328"
            y="0.333328"
            width="175.167"
            height="15.3333"
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
              result="effect1_foregroundBlur_1241_25712"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
    <div class="flex mb-3">
      <p class="font-210-box italic text-3xl grow">{{genre2}}</p>
      <svg
      width="176"
      viewBox="0 0 176 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="order-first flex-grow"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter0_f_1241_25714)">
        <path
          d="M164.833 8C164.833 9.47276 166.027 10.6667 167.5 10.6667C168.973 10.6667 170.167 9.47276 170.167 8C170.167 6.52724 168.973 5.33333 167.5 5.33333C166.027 5.33333 164.833 6.52724 164.833 8ZM5 8.5H167.5V7.5H5V8.5Z"
          fill="#FF0000"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_1241_25714"
          x="0"
          y="0.333344"
          width="175.167"
          height="15.3333"
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
            result="effect1_foregroundBlur_1241_25714"
          ></feGaussianBlur>
        </filter>
      </defs>
      </svg>
    </div>
    <div class="flex mb-8">
      <p class="font-210-box italic text-3xl grow">{{genre3}}</p>
      <svg
        width="176"
        viewBox="0 0 176 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-grow"
        preserveAspectRatio="xMidYMid meet"
      >
        <g filter="url(#filter0_f_1241_25712)">
          <path
            d="M5.83333 8C5.83333 9.47276 7.02724 10.6667 8.5 10.6667C9.97276 10.6667 11.1667 9.47276 11.1667 8C11.1667 6.52724 9.97276 5.33333 8.5 5.33333C7.02724 5.33333 5.83333 6.52724 5.83333 8ZM8.5 8.5L171 8.5V7.5L8.5 7.5V8.5Z"
            fill="#FF0000"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_f_1241_25712"
            x="0.833328"
            y="0.333328"
            width="175.167"
            height="15.3333"
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
              result="effect1_foregroundBlur_1241_25712"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
    <div class="fondronds p-5">
      <h2 class="font-210 font-black text-3xl mb-3">Vos artistes</h2>
      <div class="flex gap-5">
        <div class="w-[50%] text-right">
          <p class="font-cairo font-semibold text-xl">{{artiste1}}</p>
          <p class="font-cairo font-semibold text-xl">{{artiste2}}</p>
          <p class="font-cairo font-semibold text-xl">{{artiste3}}</p>
          <p class="font-cairo font-semibold text-xl">{{artiste4}}</p>
          <p class="font-cairo font-semibold text-xl">{{artiste5}}</p>
        </div>
        <div class="w-[50%] text-left">
          <p class="font-cairo font-semibold text-xl">{{artiste6}}</p>
          <p class="font-cairo font-semibold text-xl">{{artiste7}}</p>
          <p class="font-cairo font-semibold text-xl">{{artiste8}}</p>
          <p class="font-cairo font-semibold text-xl">{{artiste9}}</p>
          <p class="font-cairo font-semibold text-xl">{{artiste10}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import images from "../components/ImageView.vue"

export default {

  components: { images },

  props:{

    titre: {
      type: String,
      default: 'Titre',
      },
    date: {
      type: String,
      default: 'Date',
      },
    heure: {
      type: String,
      default: 'Heure',
      },
    genre1: {
      type: String,
      default: 'Genre1',
      },
    genre2: {
      type: String,
      default: 'Genre2',
      },
    genre3: {
      type: String,
      default: 'Genre3',
      },
    artiste1: {
      type: String,
      default: 'Artiste1',
      },
    artiste2: {
      type: String,
      default: 'Artiste2',
      },
    artiste3: {
      type: String,
      default: 'Artiste3',
      },
    artiste4: {
      type: String,
      default: 'Artiste4',
      },
    artiste5: {
      type: String,
      default: 'Artiste5',
      },
    artiste6: {
      type: String,
      default: 'Artiste6',
      },
    artiste7: {
      type: String,
      default: 'Artiste7',
      },
    artiste8: {
      type: String,
      default: 'Artiste8',
      },
    artiste9: {
      type: String,
      default: 'Artiste9',
      },
    artiste10: {
      type: String,
      default: 'Artiste10',
      },
      
  },

}
</script>

<style>
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