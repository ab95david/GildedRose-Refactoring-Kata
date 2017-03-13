describe("Aged Brie", function() {

  it("Su 'calidad' aumenta en '1' unidad cada dia", function() {
    const gilgedRose = new Shop([ new Item("Aged Brie", 1, 1) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });

  it("Luego de la 'fecha de venta' su 'calidad' aumenta '2' unidades por dia", function() {
    const gilgedRose = new Shop([ new Item("Aged Brie", 0, 1) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(3);
  });

  it("La 'calidad' de un articulo nunca es mayor a '50'", function() {
    const gilgedRose = new Shop([ new Item("Aged Brie", 2, 50) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

});
