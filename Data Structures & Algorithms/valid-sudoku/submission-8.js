class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const hasDuplicates = (arr) => new Set(arr).size != arr.length ? true : false;
        let columnArrays = {};
        let subboxes = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: []
        };

        for (let i = 0; i < board.length; i++) {
            // console.log(board[i].map((element) => Number(element)).filter(element => !isNaN(element)))
            
            if (hasDuplicates(board[i].map((element) => Number(element)).filter(element => !isNaN(element))) == true) {
                return false;
            }

            for (let j = 0; j < board[i].length; j++) {
                if (!columnArrays[j]) columnArrays[j] = [];
                columnArrays[j].push(board[i][j]); 
            }
         

        }
        for (let i = 0; i < Object.keys(columnArrays).length; i++) { //go through each column 
            console.log('columnArrays \n', columnArrays[i])
            if (hasDuplicates(columnArrays[i].map((element) => Number(element)).filter(element => !isNaN(element))) == true) {
                return false;
            }  
            //each column iteration puts elements into their respesctive subbox
            if (i < 3) { //leftmost columns
                /*
                i = 0 [ '1', '4', '.' ]
                i = 1 [ '2', '.', '9' ]
                i = 2 [ '.', '.', '8' ]
                */
                subboxes[0].push(columnArrays[i].slice(0,3)); 
                subboxes[1].push(columnArrays[i].slice(3,6)); 
                subboxes[2].push(columnArrays[i].slice(6,9));                    
            }  
            if (i >= 3 && i < 6) { //middle columns
                subboxes[3].push(columnArrays[i].slice(0,3));
                subboxes[4].push(columnArrays[i].slice(3,6));
                subboxes[5].push(columnArrays[i].slice(6,9));                   
            }
            if (i >= 6 && i < 9) { //rightmost columns 
                subboxes[6].push(columnArrays[i].slice(0,3));
                subboxes[7].push(columnArrays[i].slice(3,6));
                subboxes[8].push(columnArrays[i].slice(6,9));                  
            }          
            console.log('subboxes', subboxes)

        }

        for (let i = 0; i < Object.keys(subboxes).length; i++) {
            console.log('flat', subboxes[i].flat());
            if (hasDuplicates(subboxes[i].flat().map((element) => Number(element)).filter(element => !isNaN(element))) == true) {
                console.log('duplicate detected')
                return false
            }
        }
        // console.log('subbox flat',subboxes[])
        return true
    }

}
