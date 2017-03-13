describe("Sulfuras, Hand of Ragnaros", function() {

  it("Siendo un articulo legendario posee una calidad inmutable de '80'", function() {
    const gilgedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 80) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it("Luego de la 'fecha de venta' posee una calidad inmutable de '80'", function() {
    const gilgedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it("No modifica su 'fecha de venta' ni se degrada en 'calidad'", function() {
    const gilgedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10);
    expect(items[0].quality).toEqual(80);
  });

});
