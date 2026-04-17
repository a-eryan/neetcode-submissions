class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const stringLength = s.length;
        let stringCounter = {};
        let stringS = [];
        let stringT = [];
        /*append into two arrays and then sort them. if the array elements end up being the same
        return true 
        */
        for (let i = 0; i < stringLength; i++) {
            stringS.push(s[i]);
            stringT.push(t[i]);
        }
        // stringS.sort();
        // stringT.sort();
        const compareSorted = (s, t) => s.every((element, index) => element == t[index])

        if (compareSorted(stringS.sort(), stringT.sort())) {
            return true
        }
        else {
            return false; 
        }
    }
}
