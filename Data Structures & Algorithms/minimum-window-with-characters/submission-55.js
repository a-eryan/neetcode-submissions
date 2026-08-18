class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let leftptr = 0;
        let rightptr = 0;
        let frequency = {}; //determines whether window is valid 
        //if (t.length > s.length || !([...t].every(char => s.includes(char)))) return "";
        
        
        for (let i = 0; i < t.length; i++) {
            if (!frequency[t[i]]) {
                frequency[t[i]] = 1;
            } else {
                frequency[t[i]]++;
            }
        }
        let need = Object.keys(frequency).length;
        let have = 0;
        let windowFrequency = {};
        let minWindowSubstring = [];
        while (rightptr < s.length) {
            if (Object.hasOwn(frequency, s[rightptr])) { //O(1) lookup whether the character is in the frequency table
                //console.log('This character exists in the frequency table:', s[rightptr]);
                if (!windowFrequency[s[rightptr]]) {
                    windowFrequency[s[rightptr]] = 1;
                } else {
                    windowFrequency[s[rightptr]]++;
                }

                if (windowFrequency[s[rightptr]] === frequency[s[rightptr]]) { //O(1) check if the key's value is equal to the frequency. condition becomes true once a frequency is met  
                    //console.log(windowFrequency[s[rightptr]], frequency[s[rightptr]])
                    have++;
                while (have === need) {
                    if (Object.hasOwn(frequency, s[leftptr])) { //leftptr is a character within t
                        windowFrequency[s[leftptr]]--;
                        if ((windowFrequency[s[leftptr]] < frequency[s[leftptr]])) have--; //no longer equal to the frequency
                        
                    }
                    
                    minWindowSubstring.push(s.slice(leftptr, rightptr + 1));
                    leftptr++;
                    //console.log(s.slice(leftptr, rightptr + 1), have, need)
                }                    
                } 
            }

                // while (this.meetsOrExceeds(windowFrequency, frequency)) {   //O(n)
                //     minWindowSubstring.push(s.slice(leftptr, rightptr + 1));
                //     if (windowFrequency[s[leftptr]]) {
                //         windowFrequency[s[leftptr]]--;
                //     }
                    
                //     leftptr++;
                //     //console.log(windowFrequency)
                // }
            
            //console.log(minWindowSubstring)
            // console.log(frequency, windowFrequency)
            // console.log(rightptr, windowFrequency);
            rightptr++;
        
        }
        if (minWindowSubstring.length > 0) {
            return minWindowSubstring.reduce((a,b) => a.length <= b.length ? a : b);
        } else {
            return "";
        }
        

    }
    meetsOrExceeds(obj1, obj2) {
        return Object.entries(obj2).every(
        ([key, value]) => obj1[key] !== undefined && obj1[key] >= value);
    }    
}
