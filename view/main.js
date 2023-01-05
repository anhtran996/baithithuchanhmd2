"use strict";
exports.__esModule = true;
var goodsmanager_1 = require("../controller/goodsmanager");
var readlineSync = require('readline-sync');
var goodsmanager = new goodsmanager_1.Goodsmanager();
while (true) {
    console.log("\n1. display\n2. Add\n3. Find\n4. Edit\n5. Delete\n6. Exit\n");
    var choice = readlineSync.question("enter your choice: ");
    if (choice > 7 || choice < 0) {
        console.log('-1');
    }
    switch (choice) {
        case 1:
            goodsmanager.displayGoods();
            break;
        case 2:
            goodsmanager.addGoods();
            break;
        case 3:
            break;
    }
}
