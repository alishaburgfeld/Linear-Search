//Linear Search::

// const arrayToSearchThrough = [];
// for (let i = 1; i <= 1000; i++) {
//     arrayToSearchThrough.push(i);
// }

// exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
//     for (let i=0;i<arrayToSearchThrough.length;i++) {
//         if (arrayToSearchThrough[i]===valueToFind) {
//             return i
//         }
//     }
//     return undefined
// };

///Global Linear Search:

let arr=["b","a","n","a","n","a","s"]

const linearSearchGlobal = function(valueToFind, arr) {
    let newArr=[]
    for (let i=0;i<arr.length;i++) {
        if (arr[i]===valueToFind) {
            newArr.push(i)
        }
    }
    if (newArr.length===0) {
        return undefined
    }
    else {
        return newArr
    }
};
console.log(linearSearchGlobal("c",arr))
