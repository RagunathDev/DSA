function findDuplicatesAndUniques(input) {
    const freq = {};
    const duplicates = [];
    const uniques = [];

    let dLen = 0;
    let uLen = 0;

    // build frequency map
    for (let i = 0; i < input.length; i++) {
        if (freq[input[i]] === undefined) {
            freq[input[i]] = 1;
        } else {
            freq[input[i]] = freq[input[i]] + 1;
        }
    }

    // separate duplicates and uniques
    for (let key in freq) {
        if (freq[key] > 1) {
            duplicates[dLen] = key * 1; // numeric conversion without Number()
            dLen++;
        } else {
            uniques[uLen] = key * 1;
            uLen++;
        }
    }

    return { duplicates, uniques };
}

const input = [3, 7, 2, 4, 9, 2, 3, 1];
console.log(findDuplicatesAndUniques(input));


function removeDuplicates(arr) {
    // 1. Create empty result array
    let result = [];
    
    // 2. Loop through input array
    for (let i = 0; i < arr.length; i++) {
        // 3. Check if element already exists in result
        let isDuplicate = false;
        
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        
        // If not duplicate, add to result
        if (!isDuplicate) {
            result[result.length] = arr[i];
        }
    }
    
    // 4. Return result
    return result;
}
let arr = "aabbccddeeff";
console.log(removeDuplicates(arr),"removeDuplicates(arr)");


// abcbb
function isuniqueChar(str){
    let char = {};
    for(let ch in str){
        console.log(ch,"cchchchc");
         char[ch] = (char[ch] || 0) +1
           console.log(ch,"cchchchc-1111111");
    }
    for(let i = 0; i <= str.length; i++){
        if(char[i] === 1 ){
            console.log(i + 1,"cchchchc22222");
             return i + 1;
              
        }
    }

   
return -1
}
var str = " abcbb";
console.log( isuniqueChar(str) ," isUniqueChar(str) ");
