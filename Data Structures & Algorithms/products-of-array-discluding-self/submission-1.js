class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let resultArray = [];        
        for (let i = 0; i < nums.length; i++) { //element
            let prefixProd = nums.slice(0, i).reduce((acc, curr) => acc * curr, 1)
            let postfixProd = nums.slice(i+1,nums.length).reduce((acc, curr) => acc * curr, 1) //since the second parameter is inclusive
            console.log('prefixProd', prefixProd)
            console.log('postfixProd', postfixProd)
            resultArray.push(prefixProd * postfixProd)
        }
        return resultArray;
    }
}
