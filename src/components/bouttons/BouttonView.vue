<template>
  <div class="w-[325px] h-[70px] relative">
    <svg
      width="299"
      height="70"
      viewBox="0 0 299 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="mx-auto"
      preserveAspectRatio="none"
    >
      <path
        d="M52.5043 3.00873L3.61412 53.0087C-2.57667 59.3401 1.90907 70 10.7641 70H239.346C242.037 70 244.614 68.9154 246.496 66.9913L295.386 16.9913C301.577 10.6599 297.091 0 288.236 0H59.6543C56.9632 0 54.3857 1.08462 52.5043 3.00873Z"
        fill="white"
      ></path>
    </svg>
    <p class="w-[325px] absolute top-[7.8px] text-xl font-210-d text-center text-sombre">{{text1}}<br/>{{text2}}</p>
  </div>
</template>

<script>
export default {
      props:{
      text1: {
        type: String,
        default: 'Text',
        },
      text2: {
        type: String,
        default: 'Text',
        },
  },
}
</script>

<style>

</style>