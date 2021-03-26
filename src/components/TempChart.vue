<template>
  <div class="chart__handler" id="weather-chart">
    <canvas id="chart" class="chart" style="display: block; height: 150px; width: 100%"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import createLineChart from "./ChartData";

export default {
  name: 'TempChart',
  // data() {
  //   return {
  //     planetChartData: chartData
  //   }
  // },
  mounted() {
    const ctx = document.getElementById('chart');
    // new Chart(ctx, this.planetChartData);
    createLineChart(ctx)
  }
}

</script>

<style scoped>

#chart {
  margin-top: 4rem;
  width: 100%;
  max-height: 12rem;
}

canvas {
  height: 15rem;
}

</style>