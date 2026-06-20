class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxArea = 0;


        for (let i = 0; i < height.length; i++) {
            let maxLeft = (i == 0 ? 0 : height.slice(0,i).sort((a,b) => b - a)[0])
            let maxRight = (i == height.length ? 0 : height.slice(i, height.length).sort((a,b) => b - a)[0])

            let intermediateWater = Math.min(maxLeft, maxRight) - height[i];

            if (intermediateWater >= 0) {
                maxArea += intermediateWater
            }


        }

        return maxArea;

    }
}
