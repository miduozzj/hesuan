"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let express = require("express");
let router = express.Router();
let qs = require("qs");
let bodyParser = require('body-parser'); //解析,用req.body获取post参数
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.post("/getWjwList", async (req, res, next) => {
    try {
        let params = qs.stringify(req.body);
        const responseData = await getJson(params);
        console.log("成功");
        res.send(JSON.stringify(responseData));
    }
    catch (err) {
        console.log("失败");
    }
});
const config = {
    method: "post",
    url: "https://szwj.borycloud.com/ilhapi/wjw/checkpoint/list",
    headers: {
        Accept: "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://szwj.borycloud.com",
        Pragma: "no-cache",
        Referer: "https://szwj.borycloud.com/wh5/index.html",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "sec-ch-ua": '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
    },
};
const getJson = async (data) => {
    const res = await (0, axios_1.default)({
        ...config,
        data,
    });
    const unBlock = res.data.data.filter((item) => item.status === 2);
    return unBlock;
};
exports.default = router;
