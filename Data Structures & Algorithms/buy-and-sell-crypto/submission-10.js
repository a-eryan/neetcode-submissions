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
        console.log(leftptr, rightptr);

        if (prices[rightptr] < prices[leftptr]) { //found the lowest intermediate price on the rightptr
            leftptr = rightptr; //update to lowest intermediate leftptr to identify which days in the future to sell
        } else { //currently at the lowest intermediate leftptr
            maxProfit = Math.max(maxProfit, prices[rightptr] - prices[leftptr]);
            rightptr++; 
        }
    }
    return maxProfit;
    }


}
