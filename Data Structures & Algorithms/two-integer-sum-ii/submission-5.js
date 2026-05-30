class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let hashmap = {};
        for (let i = 0; i < numbers.length; i++) {
            hashmap[numbers[i]] = i + 1 //1-indexed
        }

        console.log(hashmap);
        for (let i = 0; i < numbers.length; i++) {
            // if (Object.hasOwn(hashmap, (target - numbers.indexOf(i)))) {
            //     return ([numbers.indexOf(i), Object.keys(hashmap).find(key => hashmap[key] === target - numbers.indexOf(i))])
            // }
            if (Object.hasOwn(hashmap, (target - numbers[i]))) {
                
                console.log('Found complement:', target - numbers[i])
                console.log('Within hashmap', Object.values(hashmap).find(key => hashmap[key] === target - numbers[i]))
                return ([i + 1, numbers.indexOf(target - numbers[i]) + 1])
            }
        }

    }
}
