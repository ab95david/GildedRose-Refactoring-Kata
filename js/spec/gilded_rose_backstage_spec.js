describe("Backstage passes to a TAFKAL80ETC concert", function() {

  it("Incrementa su 'calidad' a medida que la 'fecha de venta' se aproxima", function() {
    const gilgedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(31);
  });

  it("Si faltan 10 dias o menos, la 'calidad' se incrementa en '2' unidades", function() {
    const gilgedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 30) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(32);
  });

  it("Si faltan 5 dias o menos, la 'calidad' se incrementa en '3' unidades", function() {
    const gilgedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 3, 30) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(33);
  });

  it("Luego de la 'fecha de venta' la 'calidad' cae a '0'", function() {
    const gilgedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 80) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

});
