<template>
  <div class="flex flex-col justify-center items-center w-full relative gap-[25px] px-3 py-[25px] bg-white dark:bg-sombre dark:border-t-2">
    <svg
      viewBox="0 0 351 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      class="dark:hidden"
    >
      <line x1="-4.37114e-8" y1="0.5" x2="351" y2="0.499969" stroke="#1D1D1B"></line>
    </svg>

    <div class="relative">
      <div class="w-[350px] h-[106px]">
        <p class="w-[243.09px] absolute left-[106.91px] top-12 text-[50px] font-black text-center text-sombre dark:text-white">DOWN</p>
        <p class="w-[198.55px] absolute left-0 top-0 text-[50px] font-black text-center text-sombre dark:text-white">DEEP</p>
      </div>
    </div>
    
    <img class="w-[450px]" src="../../public/logosnewletter.jpg" alt="Logos du Deep Down Festival">

    <div class="flex flex-col justify-center items-center relative">
      <p class="text-3xl font-black italic text-center text-sombre dark:text-white">SUIVEZ-NOUS</p>
      <div class="flex relative gap-5 dark:bg-white dark:p-2 dark:rounded-2xl">
        <a href="https://www.facebook.com/">
          <img src="../../public/icons/svg/Brands/facebook.svg" alt="Logo Facebook">
        </a>
        <a href="https://www.instagram.com/">
          <img src="../../public/icons/svg/Brands/instagram.svg" alt="Logo Instagram">
        </a>
        <a href="https://twitter.com/">
          <img src="../../public/icons/svg/Brands/twitter.svg" alt="Logo Twitter">
        </a>
      </div>
    </div>

    <div class="flex justify-center items-center self-stretch gap-[50px]">
      <div class="flex flex-col justify-center items-center flex-grow relative">
          <router-link to="/contact">
            <p class="font-cairo text-xs font-semibold text-center text-sombre dark:text-white dark:border-b">NOUS CONTACTER</p>
          </router-link>
        <svg
          width="82"
          height="1"
          viewBox="0 0 82 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <line x1="1.25" y1="0.5" x2="81.25" y2="0.5" stroke="black" stroke-linecap="round"></line>
        </svg>
      </div>
      <div class="flex flex-col justify-center items-center flex-grow relative">
          <router-link to="/ml">
            <p class="font-cairo text-xs font-semibold text-center text-sombre dark:text-white dark:border-b">MENTIONS LEGALES</p>
          </router-link>
        <svg
          width="82"
          height="1"
          viewBox="0 0 82 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <line x1="1.25" y1="0.5" x2="81.25" y2="0.5" stroke="black" stroke-linecap="round"></line>
        </svg>
      </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>