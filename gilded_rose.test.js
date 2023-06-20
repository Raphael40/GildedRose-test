const {Shop, Item} = require("./gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("should fum", function() {
    const gildedRose = new Shop([new Item("fum", 4, 8)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("fum");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(7);
  });

  it("backstage pass", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 6)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });

  it("Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(40);
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 15)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(16);
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 15)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(17);
  });

  it("two items", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 15), new Item("fum", 4, 8)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(17);
    expect(items[1].name).toBe("fum");
    expect(items[1].sellIn).toBe(3);
    expect(items[1].quality).toBe(7);
  });
});