<template>
  <div class="loader animation">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.loader{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.line{
  width: 1rem;
  height: 5rem;
  border-radius: 1rem;
  background-color: red;
}
.line:nth-child(1){
  animation: animateLoader 0.7s 0.6s infinite
}
.line:nth-child(2){
  animation: animateLoader 0.7s 0.3s infinite
}
.line:nth-child(3){
  animation: animateLoader 0.7s infinite
}
.line:nth-child(4){
  animation: animateLoader 0.7s 0.3s infinite
}
.line:nth-child(5){
  animation: animateLoader 0.7s 0.6s infinite
}
@keyframes animateLoader {
  0% {
    height: 5rem;
  }
  50% {
    height: 18rem;
  }
  100% {
    height: 5rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .animation {
  animation: none;
  }
}
</style>