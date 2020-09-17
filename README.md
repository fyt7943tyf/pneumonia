# COVID-19世界、省级、市级图

## 使用说明
经以下步骤部署本项目
```
# 克隆到本地
git clone https://github.com/fyt7943tyf/pneumonia.git

# 进入文件夹
cd pneumonia

# 安装依赖
npm install 或 yarn(推荐)

# 发布环境
npm run build

# 页面挂载至nginx
# 配置nginx /pneumonia 路径反向代理至 https://ncov.dxy.cn/ncovh5/view/pneumonia
```
## 现有问题
* 爬取数据的地级市可能与地图的地级市名称不符，例如宿松、两江新区、外地来津等，采用src/js/cityNameDict进行名称修正，若数据中出现新的市，则可能无法在地图上显示出该市
* 地图的国家名称为英文名，而爬取数据为中文名，采用src/js/countryNameDict进行名称修正，若出现新的国家，需要对countryNameDict进行修正
* 地级市地图显示时有严重卡顿现象

## 使用效果
![世界地图](https://github.com/fyt7943tyf/pneumonia/blob/master/world.jpg)
![省级地图](https://github.com/fyt7943tyf/pneumonia/blob/master/province.jpg)
![市级地图](https://github.com/fyt7943tyf/pneumonia/blob/master/city.jpg)

