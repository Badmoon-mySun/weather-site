<template>
  <div class="loader__handler">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {
name: "Loader"
}
</script>

<style scoped>
.loader__handler {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>