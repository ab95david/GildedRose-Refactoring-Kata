describe("Conjured", function() {

  it("Degradan su 'calidad' al doble de velocidad que los normales", function() {
    const gilgedRose = new Shop([ new Item("Conjured", 20, 30) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(28);
  });
});
