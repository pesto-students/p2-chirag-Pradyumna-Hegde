function best_returns_from_pricesStock(array) {
    let purchase_stock = array[0];
    let best_returns = i = 0;
    for (let i = 1; i < array.length; i++) {

      if (purchase_stock > array[i]) purchase_stock = array[i];
      //purchase should be done when the stock is at lower price.

      else if ((array[i] - purchase_stock) > best_returns) {
        //if difference between sellable stock value and purchased_stock value is greater than previously stored best_returns value, then update best_returns with difference value.
            best_returns = array[i] - purchase_stock;
        }
    }
    return best_returns;
}


const prices = [7, 1, 5, 3, 6, 4];
console.log(best_returns_from_pricesStock(prices));