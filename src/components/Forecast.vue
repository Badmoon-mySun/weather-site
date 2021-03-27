<template>
  <div class="forecast">
    <div class="forecast__item" v-for="day in dailyForecast.slice(1, 7)">
      <div class="item__temp">
        <span class="temp__digit">{{ Math.round(day.temp.day) }}</span>
        <span class="temp__char">°</span>
      </div>
      <img :src="getSrcImg(day.weather[0].icon)" alt="cloudy" class="item__img">
      <div class="item__week_day">
        <span class="week_day__text">{{ getWeekDay(day.dt + timezone) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forecast",
  props: ["dailyForecast", "timezone"],
  methods: {
    getSrcImg(icon) {
      return require("../assets/img/" + icon.toString() + ".svg");
    },
    getWeekDay(millis) {
      let date = new Date()
      date.setTime(millis * 1000)

      let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];

      return days[date.getDay()]
    },
  },

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

@media screen and (max-width: 576px) {
  .forecast {
    overflow-x: scroll;
  }

  .forecast__item {
    min-width: 100px;
  }
}

</style>