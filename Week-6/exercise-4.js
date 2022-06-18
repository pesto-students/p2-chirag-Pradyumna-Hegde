function best_returns_from_pricesStock(array) {
    let buy = array[0];
    let best_returns = i = 0;
    for (let i = 1; i < array.length; i++) {

      if (buy > array[i]) buy = array[i];
      else if ((array[i] - buy) > best_returns) {
            best_returns = array[i] - buy;
        }
    }
    return best_returns;
}


const prices = [7, 1, 5, 3, 6, 4];
console.log(best_returns_from_pricesStock(prices));