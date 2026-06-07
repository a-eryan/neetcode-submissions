class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let triplelets = [];
        for (let i = 0; i < nums.length; i++) {
            let leftptr = i + 1; //one index higher than target i
            let rightptr = nums.length - 1;
            let countr = 0;
            while (leftptr < rightptr) {
                if (nums[leftptr] + nums[rightptr] > -nums[i]) {
                    rightptr -= 1;
                } else if (nums[leftptr] + nums[rightptr] < -nums[i]) {
                    leftptr += 1;
                } else { /*TARGET I's OPPOSITE SUM FOUND: nums[leftptr] + nums[rightptr] == -nums[i] 
                    aka nums[leftptr] + nums[rightptr] + nums[i] == 0*/
                    triplelets.push([nums[i], nums[leftptr], nums[rightptr]]);
                    leftptr += 1;
                }
            }
            
        }
        return Array.from(new Set(triplelets.map(JSON.stringify)), JSON.parse);    
    }     
}
