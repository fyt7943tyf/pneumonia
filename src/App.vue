<template>
  <div id="app">
    <highcharts ref="chart" :style="chartStyle" :constructor-type="'mapChart'" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
  import NProgress from 'nprogress'
  import { cityNameDict } from './js/cityNameDict'
  import { countryNameDict } from "./js/countryNameDict";
  export default {
  name: 'app',
  mounted() {
    this.onResizeInit()
    this.getChinaMap()
  },
  computed: {
    chartStyle() {
      return "height:" + (this.height - 16) + "px"
    }
  },
  methods: {
    onResizeInit() {
      window.onresize = () => {
        return (() => {
          this.height = document.documentElement.clientHeight
        })()
      };
      let event = document.createEvent("HTMLEvents");
      event.initEvent("resize", true, true);
      window.dispatchEvent(event);
    },
    getChinaMap() {
      NProgress.start()
      this.getProvinceData().then((res) => {
        this.chartOptions.series[0].data = res
        this.axios.get('map/provinces.json').then((res) => {
          this.chartOptions.series[0].mapData = res.data
          NProgress.done()
        })
      })
    },
    getCityMap() {
      NProgress.start()
      this.axios.get('map/cities.json').then((res) => {
        this.chartOptions.series[0].mapData = res.data;
        let dataMap = {}
        res.data['features'].forEach((item) => {
          dataMap[item['properties']['name']] = 0;
        });
        this.getCityData().then((res) => {
          res.forEach((item) => {
            if (dataMap[item[0]] == null) {
              // eslint-disable-next-line no-console
              console.error(item[0]);
            }
            dataMap[item[0]] = item[1];
          });
          res = [];
          for (let [key, value] of Object.entries(dataMap)){
            res.push([key, value]);
          }
          this.chartOptions.series[0].data = res;
          NProgress.done()
        })
      })
    },
    getWorldMap() {
      NProgress.start();
      this.axios.get("map/world-highres2.geo.json").then((res) => {
        let dataMap = {}
        res.data['features'].forEach((item) => {
          dataMap[item['properties']['name']] = 0;
        });
        this.chartOptions.series[0].mapData = res.data;
        this.getDxyData().then((res) => {
          res = res["world"];
          res.forEach((item) => {
            let countryName = countryNameDict(item["provinceName"])
            if (dataMap[countryName] == null) {
              // eslint-disable-next-line no-console
              console.error(item["provinceName"]);
            }
            dataMap[countryName] = item["confirmedCount"];
          });
          res = [];
          for (let [key, value] of Object.entries(dataMap)){
            res.push([key, value]);
          }
          this.chartOptions.series[0].data = res;
          NProgress.done();
        })
      });
    },
    getDxyData() {
      NProgress.start();
      let that = this;
      return new Promise(function (resolve, reject) {
        that.axios.get('pneumonia').then((res) => {
          let beginSign = "window.getAreaStat = ";
          let begin = res.data.indexOf(beginSign) + beginSign.length;
          let end = res.data.indexOf("}catch(e)", begin);
          let china = JSON.parse(res.data.substr(begin, end - begin));
          beginSign = "window.getListByCountryTypeService2 = ";
          begin = res.data.indexOf(beginSign) + beginSign.length;
          end = res.data.indexOf("}catch(e)", begin);
          let world = JSON.parse(res.data.substr(begin, end - begin));
          beginSign = "window.getStatisticsService = ";
          begin = res.data.indexOf(beginSign) + beginSign.length;
          end = res.data.indexOf("}catch(e)", begin);
          let statistics = JSON.parse(res.data.substr(begin, end - begin));
          world.push({"provinceName": "中国", "confirmedCount": statistics['confirmedCount'], "suspectedCount": statistics["suspectedCount"], "curedCount": statistics["curedCount"], "deadCount": statistics["deadCount"]});
          let data = {
            "china": china,
            "world": world,
            "statistics": statistics
          };
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getProvinceData() {
      let that = this
      return new Promise(function (resolve, reject) {
        that.getDxyData().then((res) => {
          res = res['china'];
          let data = [];
          res.forEach((item) => {
            data.push([item.provinceShortName, item.confirmedCount])
          });
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getCityData() {
      let that = this
      return new Promise(function (resolve, reject) {
        that.getDxyData().then((res) => {
          res = res['china'];
          let data = [];
          res.forEach((item) => {
            if (item.provinceShortName === "香港" || item.provinceShortName === "澳门" || item.provinceShortName === "台湾") {
              data.push([item.provinceShortName, item.confirmedCount])
            } else {
              let provinceShortName = item.provinceShortName
              item.cities.forEach((item) => {
                data.push([cityNameDict(provinceShortName, item.cityName), item.confirmedCount])
              })
            }
          });
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  },
  data() {
    let that = this
    return {
      height: 0,
      chartOptions: {
        title: {
          text: 'Wuhan Pneumonia'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [{
                text: 'Province',
                onclick: function () {
                  that.getChinaMap()
                }
              }, {
                text: 'City',
                onclick: function () {
                  that.getCityMap()
                }
              }, {
                text: 'World',
                onclick: function () {
                  that.getWorldMap()
                }
              }, {
                  text: 'Export to PNG',
                  onclick: function () {
                    this.exportChart();
                  },
                  separator: false
              }]
            }
          }
        },
        colorAxis: {
          dataClasses: [{
            from: 0,
            to: 1,
            color: "#FFFFFF"
          }, {
            from: 1,
            to: 10,
            color: "#F08F7F"
          }, {
            from: 10,
            to: 100,
            color: "#E26061"
          }, {
            from: 100,
            to: 500,
            color: "#C34548"
          }, {
            from: 500,
            to: 1000,
            color: "#9C2F31"
          }, {
            from: 1000,
            color: "#731919"
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          floating: true,
          valueDecimals: 0,
          symbolRadius: 0,
          symbolHeight: 14
        },
        credits: {
          enable: true,
          text: "Data from 3g.dxy.cn",
          href: "https://3g.dxy.cn/newh5/view/pneumonia"
        },
        series: [{
          data: null,
          mapData: null,
          joinBy: 'name',
          keys: ['name', 'value'],
          name: 'Confirmed Count',
          states: {
            hover: {
              color: '#a4edba'
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px'
            },
            crop: false
          }
        }]
      },
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
