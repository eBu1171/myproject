class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let highest = 0;
        for(let key in prices){
         for (let i = Number(key) + 1; i < prices.length; i++) {
                if((prices[i] - prices[key]) > highest){
                    highest = (prices[i] - prices[key]);
                }
            }
        }
        return highest
    }
}
