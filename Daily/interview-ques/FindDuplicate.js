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
