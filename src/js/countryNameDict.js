let counryMap = {
    "中国": "China",
    "泰国": "Thailand",
    "新加坡": "Singapore",
    "马来西亚": "Malaysia",
    "日本": "Japan",
    "澳大利亚": "Australia",
    "美国": "United States of America",
    "法国": "France",
    "韩国": "South Korea",
    "德国": "Germany",
    "加拿大": "Canada",
    "越南": "Vietnam",
    "尼泊尔": "Nepal",
    "柬埔寨": "Cambodia",
    "斯里兰卡": "Sri Lanka",
    "阿联酋": "United Arab Emirates",
    "芬兰": "Finland",
    "印度": "India",
    "意大利": "Italy",
    "英国": "United Kingdom",
    "俄罗斯": "Russia",
    "西班牙": "Spain",
    "瑞典": "Sweden",
    "菲律宾": "Philippines"
}

export function countryNameDict(countryName) {
    return counryMap[countryName];
}