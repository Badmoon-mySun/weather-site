<template>
  <div class="main__city_temp">
    <img class="city_temp__img" src="../assets/img/cloudy.svg" alt="Cloudy">
    <div class="city_temp__temp">
      <span class="temp__digit">-70</span>
      <span class="temp__char">°</span>
    </div>
    <div class="city_temp__description">
      <span class="description__weather">Облачно с прояснениями</span>
      <div class="description__city_name">
        <svg class="city_name__img" viewBox="0 0 97.713 97.713" enable-background="new 0 0 97.713 97.713"
             width="32" height="32">
          <g>
            <path d="M48.855,0C29.021,0,12.883,16.138,12.883,35.974c0,5.174,1.059,10.114,3.146,14.684
                c8.994,19.681,26.238,40.46,31.31,46.359c0.38,0.441,0.934,0.695,1.517,0.695s1.137-0.254,1.517-0.695
                c5.07-5.898,22.314-26.676,31.311-46.359c2.088-4.57,3.146-9.51,3.146-14.684C84.828,16.138,68.69,0,48.855,0z M48.855,54.659
                c-10.303,0-18.686-8.383-18.686-18.686c0-10.304,8.383-18.687,18.686-18.687s18.686,8.383,18.686,18.687
                C67.542,46.276,59.159,54.659,48.855,54.659z"/>
          </g>
        </svg>
        <span class="city_name__text">Казань</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityInfo"
}
</script>

<style scoped>

.main__city_temp {
  display: flex;
  align-items: center;

  height: 10rem;
  width: 60%;
  margin: 0 auto;
}

.city_temp__img {
  height: 100%;
}

.city_temp__temp {
  font-size: 10rem;
  padding-right: 1rem;
}

.temp__char {
  font-size: 80%;
  vertical-align: top;
}

.city_temp__description {
  height: 100%;
  border-left: solid 1px gray;
  padding-left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description__weather {
  font-size: 140%;
  font-style: italic;
}

.description__city_name {
  font-size: 250%;
}

.description__city_name > * {
  display: inline;
  vertical-align: middle;
}

.city_name__img {
  height: 3.2rem;
  margin-right: .5rem;

  fill: white;
}

</style>