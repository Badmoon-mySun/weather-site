<template>
  <div class="header__date">
    <svg class="date__icon" viewBox="0 0 512 512" height="32" width="32">
      <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm121.75 388.414062c-4.160156 4.160157-9.621094 6.253907-15.082031 6.253907-5.460938 0-10.925781-2.09375-15.082031-6.253907l-106.667969-106.664062c-4.011719-3.988281-6.25-9.410156-6.25-15.082031v-138.667969c0-11.796875 9.554687-21.332031 21.332031-21.332031s21.332031 9.535156 21.332031 21.332031v129.835938l100.417969 100.414062c8.339844 8.34375 8.339844 21.824219 0 30.164062zm0 0"/>
    </svg>
    <div class="date__week_day">Суббота</div>
    <div class="date__time">19:13</div>
  </div>
</template>

<script>
export default {
  name: "DateTime"
}
</script>

<style scoped>

.header__date {
  height: 100%;
  padding: 0 1rem;

  border-left: solid 1px grey;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.date__icon {
  display: block;
  height: 1.5rem;
  width: 1.5rem;

  fill: white;
}

.date__week_day {
  margin: 0 .3rem;
  font-size: 125%;
}

.date__time {
  font-size: 130%;
  font-weight: bold;
}

</style>