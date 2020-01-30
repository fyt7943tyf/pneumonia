export function cityNameDict(provinceName, cityName) {
    let newCityName = cityName;
    switch (provinceName) {
        case "湖北":
            switch (cityName) {
                case "神农架林区":
                    newCityName = "神农架";
                    break;
                case "恩施州":
                    newCityName = "恩施";
                    break;
                default:
                    break;
            }
            break;
        case "湖南":
            switch (cityName) {
                case "湘西自治州":
                    newCityName = "湘西";
                    break;
                default:
                    break;
            }
            break;
        case "河南":
            switch (cityName) {
                case "安阳市":
                    newCityName = "安阳";
                    break;
                case "漯河市":
                    newCityName = "漯河";
                    break;
                default:
                    break;
            }
            break;
        case "重庆":
            switch (cityName) {
                case "秀山县":
                    newCityName = "秀山";
                    break;
                case "石柱县":
                    newCityName = "石柱土家族";
                    break;
                default:
                    break;
            }
            break;
        case "北京":
            newCityName += "区";
            break;
        case "上海":
            switch (cityName) {
                case "浦东":
                    newCityName = "浦东新区";
                    break;
                default:
                    newCityName += "区";
                    break;
            }
            break;
        case "云南":
            switch (cityName) {
                case "西双版纳":
                    newCityName = "西双版纳傣族";
                    break;
                case "大理":
                    newCityName = "大理白族";
                    break;
                case "红河":
                    newCityName = "红河哈尼族彝族";
                    break;
                case "德宏":
                    newCityName = "德宏傣族景颇族";
                    break;
                default:
                    break;
            }
            break;
        case "海南":
            switch (cityName) {
                case "陵水县":
                    newCityName = "陵水黎族";
                    break;
                case "琼海市":
                    newCityName = "琼海"
                    break;
                case "东方市":
                    newCityName = "东方"
                    break;
                case "琼中县":
                    newCityName = "琼中"
                    break;
                default:
                    break;
            }
            break;
        case "山西":
            switch (cityName) {
                case "朔州市":
                    newCityName = "朔州";
                    break;
                case "临汾市":
                    newCityName = "临汾";
                    break;
                default:
                    break;
            }
            break;
        case "甘肃":
            switch (cityName) {
                case "白银市":
                    newCityName = "白银";
                    break;
                case "金昌市":
                    newCityName = "金昌";
                    break;
                case "天水市":
                    newCityName = "天水";
                    break;
                case "平凉市":
                    newCityName = "平凉";
                    break;
                default:
                    break;
            }
            break;
        case "新疆":
            switch (cityName) {
                case "伊犁州":
                    newCityName = "伊犁哈萨克";
                    break;
                case "吐鲁番市":
                    newCityName = "吐鲁番";
                    break;
                case "第八师石河子":
                    newCityName = "石河子";
                    break;
                default:
                    break;
            }
            break;
        case "贵州":
            switch (cityName) {
                case "黔南州":
                    newCityName = "黔";
                    break;
                case "黔西南州":
                    newCityName = "黔西";
                    break;
                case "黔东南州":
                    newCityName = "黔东";
                    break;
                default:
                    break;
            }
            break;
        case "吉林":
            switch (cityName) {
                case "四平市":
                    newCityName = "四平";
                    break;
                default:
                    break;
            }
            break;
        case "四川":
            switch (cityName) {
                case "甘孜州":
                    newCityName = "甘孜";
                    break;
                case "凉山":
                    newCityName = "凉山彝族";
                    break;
                default:
                    break;
            }
            break;
        default:
            break
    }
    return newCityName
}