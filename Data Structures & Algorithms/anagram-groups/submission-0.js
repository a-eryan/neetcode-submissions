class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedStrs = strs.map((str) => str.split('').sort().join(''))
        console.log(sortedStrs)
        let hashmap = {}; 
        let groupAnagramsArray = [];
        for (let i = 0; i < strs.length; i++) {
            hashmap[sortedStrs[i]] = []; //initialize empty array
        }
        for (let i = 0; i < strs.length; i++) {
            hashmap[sortedStrs[i]].push(strs[i]);
        }
        for (let i = 0; i < Object.keys(hashmap).length; i++) {
            groupAnagramsArray.push(Object.values(hashmap)[i])
        }
        return groupAnagramsArray; 
    }
}
