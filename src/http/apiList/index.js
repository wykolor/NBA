import {
    get,
    post
} from '../http';
let goodsUrl = "/index/goods";
export default {
    goodsAddress: function (goodsObj) {
        return post(goodsUrl, goodsObj)
    }
}