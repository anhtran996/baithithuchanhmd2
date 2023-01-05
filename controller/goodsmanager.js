"use strict";
exports.__esModule = true;
exports.Goodsmanager = void 0;
var goods_1 = require("../model/goods");
var readlineSync = require('readline-sync');
var Goodsmanager = /** @class */ (function () {
    function Goodsmanager() {
        this.listgoods = [];
    }
    Goodsmanager.prototype.displayGoods = function () {
        console.table(this.listgoods);
    };
    Goodsmanager.prototype.addGoods = function () {
        var date = new Date();
        var id = readlineSync.question("Choose your id: ");
        var name = readlineSync.question("Choose your name: ");
        var type = readlineSync.question("Choose your type: ");
        var price = readlineSync.question("Choose your price: ");
        var quantity = readlineSync.question("Choose your quantity: ");
        var createTime = date.getTime();
        var status = readlineSync.question("Choose your status: ");
        var goods = new goods_1.Goods(id, name, type, price, quantity, createTime, status);
        this.listgoods.push(goods);
    };
    Goodsmanager.prototype.editCars = function () {
        var id = readlineSync.question("Choose your id you want to edit: ");
        while (true) {
            for (var i = 0; i < this.listgoods.length; i++) {
                if (id == this.listgoods[i].id) {
                    this.listgoods[i].name = readlineSync.question("Edit your name: ");
                    this.listgoods[i].type = readlineSync.question("Edit your type: ");
                    this.listgoods[i].quantity = readlineSync.question("Edit your quantity: ");
                    this.listgoods[i].createTime = readlineSync.question("Edit your createTime: ");
                    this.listgoods[i].status = readlineSync.question("Edit your status: ");
                    return;
                }
            }
            console.log('Không tồn  tại mặt hàng cần  update');
            id = readlineSync.question("Choose your id you want to edit: ");
        }
    };
    Goodsmanager.prototype.deleteCars = function () {
        var id = readlineSync.question("Choose your id you want to delete: ");
        while (true) {
            for (var i = 0; i < this.listgoods.length; i++) {
                if (id == this.listgoods[i].id) {
                    this.listgoods.splice(i, 1);
                    return;
                }
            }
            console.log('wrong id, enter again');
            id = +readlineSync.question("Choose your id you want to delete: ");
        }
    };
    return Goodsmanager;
}());
exports.Goodsmanager = Goodsmanager;
