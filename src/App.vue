<template>
  <div class="page" id="app">
    <header class="header">
      <div class="container-fluid">

        <Header/>

      </div>
    </header>

    <main class="main">
      <div class="container">

        <CityInfo/>

        <Chart/>

        <Forecast/>

      </div>
    </main>
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

</style>
