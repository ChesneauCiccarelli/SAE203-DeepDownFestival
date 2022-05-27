<template>
<div class="pt-[90px]">
  <div>
    <heading :titre="'PROGRAMMATION'" :text="'Les trois jours les plus remplis de votre année.'"/>
  </div>



</div>
</template>

<script>
import heading from "../../src/components/HeadingsPageView.vue"
export default {
  components: { heading }
}
</script>

<style>
.imgtop{
  background-image: url("../../public/fonds/programmation.png");
  background-position: center;
}
</style>