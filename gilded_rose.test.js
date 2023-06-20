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
});