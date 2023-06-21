class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Items {
  regularItem(item) {
    if (item.quality > 0) {
      if (item.sellIn < 0) {
        item.quality = item.quality - 2;
      } else {
        item.quality = item.quality - 1;
      }
    }
    item.sellIn = item.sellIn - 1;
  }

  agedBrie(item) {
    if (item.quality < 50) {
      if (item.sellIn <= 0) {
        item.quality = item.quality + 2;
      } else {
        item.quality = item.quality + 1;
      }
    }
    item.sellIn = item.sellIn - 1;
  }

  concert(item) {
    if (item.sellIn <= 0) {
      item.quality = 0
    } else if (item.sellIn <= 5) {
      item.quality = item.quality + 3;
    } else if (item.sellIn <= 10) {
      item.quality = item.quality + 2;
    }
    item.sellIn = item.sellIn - 1;
  }

  conjured(item) {
    if (item.quality > 0) {
      if (item.sellIn < 0) {
        item.quality = item.quality - 4;
      } else {
        item.quality = item.quality - 2;
      }
    }
    item.sellIn = item.sellIn - 1;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.map(item => {
      const itemsClass = new Items()

      if (item.name == 'Aged Brie') {
        itemsClass.agedBrie(item)
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        itemsClass.concert(item)
      } else if (item.name.includes('Conjured')) {
        itemsClass.conjured(item)
      } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
        return
      } else {
        itemsClass.regularItem(item)
      }
    })

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}