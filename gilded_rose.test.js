const {Shop, Item} = require("./gilded_rose");

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("should fooo", () => {
    const gildedRose = new Shop([new Item("foo", -1, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  it("should fum", () => {
    const gildedRose = new Shop([new Item("fum", 4, 8)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("fum");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(7);
  });

  it('should fi', () => {
    const gildedRose = new Shop([new Item("fi", 4, 12)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("fi");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(11);
  })

  it("backstage pass", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 6)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });

  it("backstage pass", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 8, 38)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(7);
    expect(items[0].quality).toBe(40);
  });

  it("Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(40);
  });

  it("Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 15)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(16);
  });

  it("Aged Brie 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(50);
  });

  it("two items", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 15), new Item("fum", 4, 8)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(17);
    expect(items[1].name).toBe("fum");
    expect(items[1].sellIn).toBe(3);
    expect(items[1].quality).toBe(7);
  });

  it("has conjured items", () => {
    const gildedRose = new Shop([new Item("Conjured spirit", 12, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Conjured spirit");
    expect(items[0].sellIn).toBe(11);
    expect(items[0].quality).toBe(38);
  })

  it("has conjured items", () => {
    const gildedRose = new Shop([new Item("Conjured Monkey", -4, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Conjured Monkey");
    expect(items[0].sellIn).toBe(-5);
    expect(items[0].quality).toBe(16);
  })
});