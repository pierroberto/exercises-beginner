# 1. flat-array

Write a function which takes an array as argument. The latter can contain nested arrays.
Return a flat array containing all the elements of the array.
```
function flatArray(arr) {
    // ...
}
flatArray([1,2,3,[4],[5,6,[7]]])
```
The expected result is: `[1,2,3,4,5,6,7]`.
# 2. sum
Write a function which adds all the elements of an array.
```
function sum(arr) {
    // ...
}
sum([1,2,3]])
```
The expected result is: `6`.

# 3. Fibonacci (part 1)

Write a function which takes a positive number as argument and returns the Fibonacci series into an array.
Hint: use recursion.
```
function fibonacci(n) {
    // ...
}
fibonacci(10)
```
The expected result is `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]`.

# 4. Fibonacci (part 2)

Given an array of numbers, write a function which returns an array of numbers containing the list of numbers which belongs to Fibonacci serie. If an empty array is provided an empty array is returned. The array returned has to be sorted in crescent order and should not contain any duplicated value.
```
function belongToFibonacci(arr) {
    // ...
}

belongToFibonacci([0, 11, 25, 55])
```
The expected result is `[0, 55]`


## Setup
- Fork this repo.
- `git clone` the repo.
- `cd` into the project.
- Run `yarn`.
- Run `yarn test --watch`.

