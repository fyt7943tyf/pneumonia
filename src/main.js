import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts);
import mapInit from 'highcharts/modules/map'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'
import App from './App.vue'
import 'nprogress/nprogress.css'

// Vue.config.productionTip = false
mapInit(Highcharts)
Vue.use(HighchartsVue)
Vue.use(VueAxios, axios)
Vue.use(VueJsonp)

new Vue({
  render: h => h(App),
}).$mount('#app')
