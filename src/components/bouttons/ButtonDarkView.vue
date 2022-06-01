<template>
<div class="m-auto">
  <button class="glow-dark font-210-d text-xl" type="button">{{text}}</button>
</div>
</template>

<script>
export default {
  props:{

    text: {
      type: String,
      default: 'Bouton',
      },

  }
  
}
</script>

<style>
.glow-dark {
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    border: none;
    outline: none;
    color: white;
    background: #1F1F1F;
    cursor: pointer;
    position: relative;
    transform: skew(-21deg);
    z-index: 0;
    border-radius: 10px;
}

.glow-dark:before {
    content: '';
    background: linear-gradient(45deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 1));
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-dark:active {
    color: #1F1F1F
}

.glow-dark:active:after {
    background: transparent;
}

.glow-dark:hover:before {
    opacity: 1;
}

.glow-dark:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1F1F1F;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>