const {Shop, Item} = require("./gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
  });

  it("backstage pass", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 6)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });


});