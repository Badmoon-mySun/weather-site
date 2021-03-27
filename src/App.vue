<template>
  <div class="page" id="app">
    <header class="header">
      <div class="container-fluid">

        <Header
            @change-city="changeCity"
        />

      </div>
    </header>

    <main class="main">
      <div class="container" v-if="!loading">


        <CityInfo
            v-bind:currentData="currentData"
        />

        <TempChart v-if="!loading"
                   v-bind:hourly="oneCallData.hourly" v-bind:timezone="oneCallData.timezone_offset"
        />

        <Forecast
            v-bind:dailyForecast="oneCallData.daily" v-bind:timezone="oneCallData.timezone_offset"
        />

      </div>

      <Loader v-else/>
    </main>
  </div>
</template>

<script>
import Header from "../../../dev/weather-site/src/components/Header";
import CityInfo from "../../../dev/weather-site/src/components/CityInfo";
import Forecast from "../../../dev/weather-site/src/components/Forecast";
import TempChart from "./components/TempChart";
import Loader from "./components/Loader";

export default {
  name: 'App',
  components: {
    Loader,
    TempChart,
    Forecast,
    CityInfo,
    Header
  },
  data() {
    return {
      currentData: [],
      oneCallData: [],
      loading: true,
      defaultCity: 'Казань',
      defaultUrl: "https://api.openweathermap.org/data/2.5/",
      appid: "&appid=" + process.env.VUE_APP_TOKEN,
      options: "&lang=ru&units=metric"
    }
  },
  methods: {
    changeCity(cityName) {
      this.loading = true

      this.loadCurrentWeatherDataByCityName(cityName)
    },
    loadCurrentWeatherDataByCityName(cityName) {
      let url = this.defaultUrl + "weather?q=" + cityName + this.appid + this.options

      fetch(url)
          .then(response => response.json())
          .then(json => this.currentData = json)
          .then(json => this.loadOneCallDataByCoordinates(json.coord.lat, json.coord.lon))
    },
    loadOneCallDataByCoordinates(lat, lon) {
      let url = this.defaultUrl + "onecall?lat=" + lat + "&lon=" + lon +
          this.appid + this.options + "&exclude=current,alerts,minutely"
      fetch(url)
          .then(response => response.json())
          .then(json => {
            this.oneCallData = json
            this.loading = false
          })
    }
  },
  mounted() {
    this.loadCurrentWeatherDataByCityName(this.defaultCity)
  }
}
</script>

<style>

html {
  font-size: 62.5%;
}

body {
  padding: 0;
  margin: 0;

  background: url("../../../dev/weather-site/src/assets/img/NewYork.jpg") center no-repeat;
  background-size: cover;

  font-family: 'Noto Sans', sans-serif;
  color: white;

  overflow: hidden;
}

*, *:after, *:before {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5 {
  margin: 0;
}

.page {
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}

.container-fluid {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: 6rem;
  z-index: 1000;

  position: absolute;
  left: 0;
  top: 0;

  background-color: #43415b;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.main {
  padding-top: 10rem;

  width: 100%;
  height: 100vh;

  background: linear-gradient(0deg,
  rgba(46, 44, 73, 1) 0%,
  rgba(46, 44, 73, 1) 30%,
  rgba(46, 44, 73, 0.91) 60%,
  rgba(46, 44, 73, 1) 98%,
  rgb(46, 44, 73) 100%
  );
}

@media screen and (min-width: 1580px) {
  html {
    font-size: 13px;
  }
}

@media screen and (min-width: 1824px) {
  html {
    font-size: 16px;
  }
}

</style>
