class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let leftptr = 0;
    let rightptr = heights.length - 1;
    let maxArea = 0;

    while (leftptr < rightptr) {
 
        let height = Math.min(heights[leftptr], heights[rightptr]);
        let width = (rightptr + 1) - (leftptr + 1);
        maxArea = Math.max(height * width, maxArea);
        
        if (heights[leftptr] > heights[rightptr]) {
            rightptr--;            
        } else if (heights[leftptr] < heights[rightptr]) {
            leftptr++;
        } else {
            leftptr++, rightptr--;
        }
        
    }
    return maxArea;
    }
}
