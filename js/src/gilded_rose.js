class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Aged Brie':

        if (this.items[i].quality < 50) {
          if (this.items[i].sellIn <= 0) {
            this.items[i].quality = this.items[i].quality + 2
          }else {
            this.items[i].quality = this.items[i].quality + 1
          }
        }

        this.items[i].sellIn - 1
          
          break;

        case 'Sulfuras, Hand of Ragnaros':
          
          break;

        case 'Conjured':

        this.items[i].quality = this.items[i].quality - 2

        this.items[i].sellIn - 1
        
        break;

        case 'Backstage passes to a TAFKAL80ETC concert':

        if(this.items[i].sellIn > 10) {
          this.items[i].quality = this.items[i].quality + 1
        }
        if(this.items[i].sellIn <= 10 && this.items[i].sellIn > 5) {
          this.items[i].quality = this.items[i].quality + 2
        }
        if(this.items[i].sellIn <= 5 && this.items[i].sellIn > 0) {
          this.items[i].quality = this.items[i].quality + 3
        }
        if(this.items[i].sellIn <= 0) {
          this.items[i].quality = 0
        }

        this.items[i].sellIn - 1
          
          break;
      
        default:

        if (this.items[i].quality != 0) {
          if(this.items[i].sellIn <= 0) {
            this.items[i].quality = this.items[i].quality - 2
          }else {
            this.items[i].quality = this.items[i].quality - 1
          }
        }

        this.items[i].sellIn - 1

          break;
      }
      
    }

    return this.items;
  }
}
