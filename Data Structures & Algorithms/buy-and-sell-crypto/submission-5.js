class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let leftptr = 0;
        let rightptr = 1;
        let maxProfit = 0;

        while (rightptr < prices.length) {
            if (prices[leftptr] > prices[rightptr]) { //profit is negative since the buy > sell
                leftptr = rightptr;
                rightptr++;

            } else {
                console.log(prices[leftptr], prices[rightptr]);
                maxProfit = Math.max(maxProfit, prices[rightptr] - prices[leftptr]);
                rightptr++;
            }
        }
        return maxProfit;
    }
}
