class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    let concertPass = 'Backstage passes to a TAFKAL80ETC concert'

    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]
      if (item.name != 'Aged Brie' && item.name != concertPass) {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == concertPass) {
            if (item.sellIn <= 10) {
              item.quality = item.quality + 1;
            }
            if (item.sellIn <= 5) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie' && item.name != concertPass) {
            if (item.quality > 0 && item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = item.quality - 1;
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}