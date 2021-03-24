<template>
  <div class="forecast">
    <div class="forecast__item" v-for="item in 6">
      <div class="item__temp">
        <span class="temp__digit">-70</span>
        <span class="temp__char">°</span>
      </div>
      <img src="../assets/img/cloudy.svg" alt="cloudy" class="item__img">
      <div class="item__week_day">
        <span class="week_day__text">Суббота</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Forecast"
}
</script>

<style scoped>

.forecast {
  height: 15rem;
  width: 100%;

  margin-top: 5rem;
  background-color: #42405a;

  border-radius: 1rem;
  display: flex;
}

.forecast__item {
  height: 100%;
  width: calc(100% / 6);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item__temp {
  font-size: 170%;
  font-weight: bold;
}

.item__img {
  height: 6rem;
  margin: 1rem 0;
}

.item__week_day {
  font-size: 140%;
}

</style>