describe("Laser saber", function() {

  it("Su 'calidad' disminuye en '1' unidad cada dia", function() {
    const gilgedRose = new Shop([ new Item("Laser saber", 1, 20) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(19);
  });

  it("Una vez que la fecha recomendada de venta, la 'calidad' se degrada al doble de velocidad", function() {
    const gilgedRose = new Shop([ new Item("Laser saber", 0, 20) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(18);
  });

  it("La 'calidad' de un articulo nunca es negativa", function() {
    const gilgedRose = new Shop([ new Item("Laser saber", 2, 0) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

});
