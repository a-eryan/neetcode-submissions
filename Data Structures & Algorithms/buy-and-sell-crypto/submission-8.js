class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let leftptr = 0; //cost on ith day
        let rightptr = 1; //value on ith day
        let maxProfit = 0;

        while (rightptr < prices.length) {
            if (prices[leftptr] > prices[rightptr]) { //value - cost = negative profit 
                leftptr = rightptr; 
            } else {
                maxProfit = Math.max(maxProfit, prices[rightptr] - prices[leftptr]);
            }
            rightptr++;
        }
        return maxProfit;

    }
}
