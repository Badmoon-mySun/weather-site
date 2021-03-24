<template>
  <div class="page" id="app">
    <Header/>

    <div class="main">
      <div class="container">

        <CityInfo/>

        <Chart/>

        <Forecast/>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../../dev/weather-site/src/components/Header";
import CityInfo from "../../../dev/weather-site/src/components/CityInfo";
import Forecast from "../../../dev/weather-site/src/components/Forecast";
import Chart from "../../../dev/weather-site/src/components/Chart";

export default {
  name: 'App',
  components: {
    Chart,
    Forecast,
    CityInfo,
    Header
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
}
</style>

<style scoped>

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.main {
  width: 100%;
  height: 100vh;

  background: linear-gradient(0deg,
  rgba(58,55,81,1) 0%,
  rgba(58,55,81,1) 30%,
  rgba(58,55,81,0.91) 60%,
  rgba(58,55,81,1) 98%,
  rgb(58, 55, 81) 100%
  );
}
</style>
