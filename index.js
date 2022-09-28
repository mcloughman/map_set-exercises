// what does  new Set([1,1,2,2,3,4]) return?
// A. [1,2,3,4]
// "ref"

// I got the below wrong first time. When you set an array with same values as another array, you don't override the additional array since you're not pointing to that reference. At least I think that's the reason
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

console.log(m)

let k = new Map();
k.set(1, true);
k.set(1, false);
console.log(k)

function hasDuplicate(arr) {
    return arr.length !== new Set(arr).size; 
}

console.log(hasDuplicate([2,3,4,5,3]))

const vowelCount = (str) => {
    const vowelCounter = new Map()
    const vowelStr = "aeiou";
    for (let letter of str.toLowerCase()) {
        if (vowelStr.indexOf(letter) !== -1) {
            if (vowelCounter.has(letter)) {
                vowelCounter.set(letter, vowelCounter.get(letter) + 1)
            } else {
                vowelCounter.set(letter, 1)
            }
        }
    }
    console.log(vowelCounter)
    return vowelCounter
}
vowelCount("Hello sir. How Are yOu today?")


