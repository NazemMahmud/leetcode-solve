# Solution Description
- Sliding window approach is followed here.

To, find out a sliding window problem :-
```angular2html
> 1st point:  is it an `Array` or `String`? Yes, it is a `string`
> 2nd point: is the problem about `subsequence` or `substring`? Yes, it is a `substring` problem
> 3rd point: is there a `window size` or have to `manually find the window size`? No given window size.

```
Total is 2 out of 3. So, it's a 100% sliding window problem.
``
# Algorithm
We will use 2 pointer here. 
- One is to go through the value/character one by one. Say, `i`
- Another is for, reducing/removing/sliding value from left if duplicate/repeated character is found. Say, `start` or `left`
- Window size will be like, `i-left+1`, because the value of `left` will always increase later. And, both `i` & `left` will start from `0`. 

**Steps:**
1. Initially set, an empty set, maximum length to 0, left value to 0. you may use array or hashmap etc.
2. Now go through the character of the string one by one, using a Loop. `for(let i = 0; i < s.length;  i++) {}`

    
    2.1. If the current character is found in the set, that is, `set.has(s[i])`, that means, it is repeated, 

        2.1.1. we will slide the value of `left` by 1, until the repeated value is removed from the set.

    2.2 Set maxSize = (maxSize, i-left+1). Push the current character value in the set/array/map

3. Return `maxSize`


### More challenges
159. Longest Substring with At Most Two Distinct Characters - m
340. Longest Substring with At Most K Distinct Characters - m
992. Subarrays with K Different Integers - H

| Language   | Runtime             | Memory                  |
|------------|---------------------|-------------------------|
| JavaScript | 67 ms(Beats 89.60%) | 47.43 MB (Beats 54.66%) |
