class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    /*
    solution 1: O(n) time complexity, O(n) space complexity
    solution 2: O(n^2) time complexity, O(1) space complexity
    solution 3: O(n) time complexity, O(1) space complexity
    */
    twoSum(numbers, target) {
        let leftptr = 0;
        let rightptr = numbers.length - 1;

        while (numbers[leftptr] + numbers[rightptr] != target) {
            if (numbers[leftptr] + numbers[rightptr] > target) {
                console.log('greater than target');
                rightptr -= 1;
                console.log(rightptr)
            } else {
                console.log('less than target');
                leftptr += 1;
                console.log(leftptr)
            }            
        }
        return [leftptr + 1, rightptr + 1];
    }
}
