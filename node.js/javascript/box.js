function Item(title,price){
    this.title=title;
    this.price=price;
    this.showPrice=function(){
        console.log(`가격은 ${price}입니다`);

    }
}
const item1 = new Item('인형',4000);
const item2 = new Item('가방',10000);
const item3 = new Item('사과',3000);

console.log(item1,item2,item3);
item3.showPrice();
item2.showPrice();
item1.showPrice();