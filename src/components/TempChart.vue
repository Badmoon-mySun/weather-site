<template>
  <div class="chart__handler" id="weather-chart">
    <canvas id="chart" class="chart" style="display: block; height: 150px; width: 100%"></canvas>
  </div>
</template>

<script>
import renderLineChart from "./CustomChart";

export default {
  name: 'TempChart',
  props: ["hourly", "timezone"],
  data() {
    return {
      "chart": null,
      "pointCount": 8,
    }
  },

  mounted() {
    const ctx = document.getElementById('chart');

    this.chart=renderLineChart(ctx, this.getPreparedData(this.hourly), this.getPreparedTime(this.hourly))
  },

  methods: {
    getNormalizeStrHours(millis) {
      let date = new Date((millis + this.timezone) * 1000)
      return date.getHours() + ":00"
    },
    getPreparedData(hourly) {
      let preparedData = []

      for (let i = 0; i < this.pointCount * 3; i += 3) {
        preparedData.push(hourly[i].temp)
      }

      return preparedData
    },
    getPreparedTime(hourly) {
      let preparedTime = []

      for (let i = 0; i < this.pointCount * 3; i += 3) {
        preparedTime.push(this.getNormalizeStrHours(hourly[i].dt))
      }

      return preparedTime
    },
    updateChart(hourly) {
      this.chart.data.labels = this.getPreparedTime(hourly)
      this.chart.data.datasets.forEach((dataset) => {
        dataset.data = this.getPreparedData(hourly);
      });
      this.chart.update();
    },
  },
  watch: {
    hourly(newData, oldData) {
      this.updateChart(newData)
    }
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