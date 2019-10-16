

/**
 * # flat-array

Write a function which takes an array as argument. The latter can contain nested arrays.
Return a flat array containing all the elements of the array.

```
function flatArray(arr) {
    // ...
}

flatArray([1,2,3,[4],[5,6,[7]]])
```

The expected result is: `[1,2,3,4,5,6,7]`

## Extra

Write tests using `Jest`

 */

function flatArray(array, res = []) {
    for (i = 0; i < array.length; i++) {

        //il valore a quella posizione è un array?
        if (Array.isArray(array[i])) {
            //toglie le parentesi ed aggiunge il valore a res
            res = [...res, ...array[i]]
        }
        if (!Array.isArray(array[i]))
            res = [...res, array[i]]
    }
    return res;
}
flatArray([1, [2], [67, [7, [57], 5]]])

//1,2,67,[7 ,[57] ,5]

module.exports = flatArray;
