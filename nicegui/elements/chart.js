export default {
  template: "<div></div>",
  mounted() {
    setTimeout(() => {
      const imports = this.extras.map((extra) => import(window.path_prefix + extra));
      Promise.allSettled(imports).then(() => {
        this.chart = Highcharts[this.type](this.$el, this.options);
        this.chart.reflow();
      });
    }, 0); // NOTE: wait for window.path_prefix to be set in app.mounted()
  },
  beforeDestroy() {
    this.destroyChart();
  },
  beforeUnmount() {
    this.destroyChart();
  },
  methods: {
    update_chart() {
      if (this.chart) {
        while (this.chart.series.length > this.options.series.length) this.chart.series[0].remove();
        while (this.chart.series.length < this.options.series.length) this.chart.addSeries({}, false);
        this.chart.update(this.options);
      }
    },
    destroyChart () {
      if (this.chart) {
        this.chart.destroy()
      }
    }
  },
  props: {
    type: String,
    options: Object,
    extras: Array,
  },
};
