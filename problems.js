// Challenge Company 1 : Microsoft 

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Combination Sum with a twist.
// Bulls and Cows
// You are given an integer array nums of length n. Return maximum length of Rotation Function.
// Largest Divisible Subset.
// How to find a perfect Rectangle.
// Scheduling a Course.
// Profitable Path in a Tree.
// Number of Pairs satisfying Inequality.
// Shortest Unsorted continuous Subarray
// Number of ways to arrive at a Destination.
// Longest Happy Prefix
// Seat Arrangement in a SpiceJet Problem - Online OA February ‘22
// Deletions to make an array divisible.
// Substrings containing all three Characters








// 150. Evaluate Reverse Polish Notation
// Medium
// 5.2K
// 834
// Companies
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
 

var evalRPN = function(tokens) {
    let stack=[]
    let operator={
        "+":(a,b)=>a+b,
        "-":(a,b)=>a-b,
        "*":(a,b)=>a*b,
        "/":(a,b)=>Math.trunc(a/b)
    }
    for(let t of tokens){
        if(operator[t]){
            let num2=stack.pop()
            let num1=stack.pop()
        stack.push(operator[t](num1,num2))
        }else{
            stack.push(parseInt(t))
        }
    }
    return stack.pop()
};








// 216. Combination Sum III
// Medium
// 4.5K
// 93
// Companies
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.
// Example 3:

// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.





/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n,i=0,arr1=[],res=[]) {
    let arr=[]
    for (let i = 1; i <=9; i++) {
            arr.push(i)
    }

    if(i==arr.length){
        if(n==0){
            if(k==arr1.length){
            res.push([...arr1])
            }
        }
    }else{
        if(arr[i]<=n){
        arr1.push(arr[i])
        combinationSum3(k,n-arr[i],i+1,arr1,res)
        arr1.pop()
        }
        combinationSum3(k,n,i+1,arr1,res)
    }
    return res
};