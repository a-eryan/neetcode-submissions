class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftptr = 0;
        let rightptr = numbers.length - 1;

        while (numbers[leftptr] < numbers[rightptr]) {
            let sum = numbers[leftptr] + numbers[rightptr];
            if (sum > target) {
                console.log('too big')
                rightptr--;
            } else if (sum < target) {
                console.log('too small')
                leftptr++
            } else {
                return [leftptr + 1, rightptr + 1]
            }
        }


    }
}
