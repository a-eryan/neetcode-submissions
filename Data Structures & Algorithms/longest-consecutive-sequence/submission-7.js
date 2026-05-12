class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let consecutiveSeq = [];
        let seq = nums.length > 0 ? 1 : 0
        let sortedUniqueNums = Array.from(new Set(nums.sort((a,b) => a - b))); //convert back to array to access index
        for (let i = 0; i < sortedUniqueNums.length - 1; i++) {
            if (sortedUniqueNums[i+1] == sortedUniqueNums[i] + 1) {
                seq++;
            } else {
                consecutiveSeq.push(seq)
                seq = 1;
            }
            if (i == sortedUniqueNums.length - 2) {
                console.log('all unique elements ')
                consecutiveSeq.push(seq)
            }
        }
        if (seq == sortedUniqueNums.length) return seq
        console.log('consecutiveSeq.length', consecutiveSeq.length)
        console.log(sortedUniqueNums)
        console.log(seq);
        console.log('consecutiveSeq\n', consecutiveSeq)
        return consecutiveSeq.sort((a,b) => b - a)[0];
    }
}
