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
                case "彭水县":
                    newCityName = "彭水苗族土家族";
                    break;
                case "酉阳县":
                    newCityName = "酉阳";
                    break;
                default:
                    break;
            }
            break;
        case "云南":
            switch (cityName) {
                case "西双版纳":
                    newCityName = "西双版纳傣族";
                    break;
                case "大理州":
                    newCityName = "大理白族";
                    break;
                case "红河州":
                    newCityName = "红河哈尼族彝族";
                    break;
                case "德宏州":
                    newCityName = "德宏傣族景颇族";
                    break;
                case "楚雄州":
                    newCityName = "楚雄彝族";
                    break;
                case "文山州":
                    newCityName = "文山苗族";
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
                case "定安":
                    newCityName = "定安县"
                    break;
                case "昌江":
                    newCityName = "昌江黎族"
                    break;
                case "乐东":
                    newCityName = "乐东黎族"
                    break;
                case "陵水":
                    newCityName = "陵水黎族"
                    break;
                case "澄迈":
                    newCityName = "澄迈县"
                    break;
                case "临高":
                    newCityName = "临高县"
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
                case "兵团第四师":
                    newCityName = "可克达拉";
                    break;
                case "兵团第六师五家渠市":
                    newCityName = "五家渠";
                    break;
                case "兵团第八师石河子市":
                    newCityName = "石河子";
                    break;
                case "兵团第九师":
                    newCityName = "塔城";
                    break;
                case "兵团第十二师":
                    newCityName = "乌鲁木齐";
                    break;
                case "昌吉州":
                    newCityName = "昌吉";
                    break;
                case "巴州":
                    newCityName = "巴音郭楞";
                    break;
                case "兵团第七师":
                    newCityName = "克拉玛依";
                    break;
                case "阿克苏地区":
                    newCityName = "阿克苏";
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
                case "吉林市":
                    newCityName = "吉林";
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
                case "凉山州":
                    newCityName = "凉山彝族";
                    break;
                case "阿坝州":
                    newCityName = "阿坝羌族";
                    break;
                default:
                    break;
            }
            break;
        case "青海":
            switch (cityName) {
                case "西宁市":
                    newCityName = "西宁";
                    break;
                case "海北州":
                    newCityName = "海北";
                    break;
                default:
                    break;
            }
            break;
        case "内蒙古":
            switch (cityName) {
                case "乌海市":
                    newCityName = "乌海";
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