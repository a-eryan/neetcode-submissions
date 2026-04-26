class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //sort the array 
        //iterate through the strings: if the next element 
        let hashmap = {};

        const sortedStrs = strs.map((str) => str.split('').sort().join(''));  //sort each element individually
        console.log(sortedStrs);
        for (let i = 0; i < sortedStrs.length; i++) {
            if (!(hashmap[sortedStrs[i]])) {
                hashmap[sortedStrs[i]] = [strs[i]];  //initialize the dynamic property and add the first element 
            } else {
                hashmap[sortedStrs[i]].push(strs[i]); 
            }

        }
        let output = [];
        Object.values(hashmap).forEach((anagram) => output.push(anagram))
        return output;
    }
}
