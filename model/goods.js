"use strict";
exports.__esModule = true;
exports.Goods = void 0;
var Goods = /** @class */ (function () {
    function Goods(id, name, type, price, quantity, createTime, status) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.createTime = createTime;
        this.status = status;
    }
    return Goods;
}());
exports.Goods = Goods;
