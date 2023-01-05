import {GoodsManager} from "../controller/goodsmanager";

var readlineSync = require('readline-sync');
import {Goods} from "../model/goods";
let goodsManager = new GoodsManager([])
while (true) {
    console.log(`1. Display item
2. Find item
3. Add item
4. Edit item
5. Delete item`)
    let choice = +readlineSync.question("Enter your choice: ")
    switch(choice) {
        case 1:
            goodsManager.displayGoods()
            break
        case 2:
            goodsManager.findGoods()
            break
        case 3:
            goodsManager.addGoods()
            break
        case 4:
            goodsManager.editGoods ()
            break
        case 5:
            goodsManager.deleteGoods()
            break
    }
}