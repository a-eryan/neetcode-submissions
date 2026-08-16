class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let leftptr = 0;
        let rightptr = 0;
        let capacity = k;
        let longestSubstringLength = 0;
        let intermediateSubstringLength = 0;

        let characterFrequency = {};

        while (rightptr < s.length) {
            if (!characterFrequency[s[rightptr]]) {
                characterFrequency[s[rightptr]] = 1
            } else {
                 characterFrequency[s[rightptr]]++;
            }
            let [highestCharacter, highestFrequency] = Object.entries(characterFrequency).reduce((max, current) =>  {
                return current[1] > max[1] ? current : max;
            })
            while ((rightptr - leftptr + 1) - highestFrequency > k) {
                characterFrequency[s[leftptr]]--; // Remove the left-most character from the map
                leftptr++;
            }
            longestSubstringLength = Math.max(longestSubstringLength, rightptr - leftptr + 1);
            rightptr++; 

        }
        return longestSubstringLength;
    }

}
