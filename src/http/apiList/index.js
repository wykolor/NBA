import {
    get,
    post
} from '../http';
let goodsUrl = "/v1/edu/manag/list";
export default {
    goodsAddress: function (goodsObj) {
        return get(goodsUrl, goodsObj)
    }
}