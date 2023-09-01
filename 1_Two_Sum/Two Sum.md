# Solution Description
- 1st normal approach is brute force, check every number with other numbers, by adding, if it reaches to the target. But it needs, a 2D nested for loop. The runtime will be O(n^2). 


- Next approach can be, at first sort the whole array. then find out from the number which are lesser than the target value. But it will also take more time. The runtime for sorting algorithm will also be accounted here.


Now, we know, there always must be one solution for this. So, there will be only 2 numbers, which indices we need.
- So, check each number, starts from the beginning and store that number's index.
- Before storing the index, check the index is already stored or not, based on target - nums[i], which is the remaining value.
- Because, if the remaining value is already there, the current value is THE another number
- For 1st example, for target = 9, 2 & 7 is enough
- when storing index 0 for 2, this is the 1st one
- when storing index 1 for 7, we found out that THE REMAINING 9 - 7 = 2, is already present. So, we found both of our number.
- So, just return those indexes.


### Next question
3. Longest Substring Without Repeating Characters

### More challenges
4. 4Sum - medium
5. Two Sum III - Data structure design - Easy
6. Subarray Sum Equals K - Easy

| Language   | Runtime             | Memory                 |
|------------|---------------------|------------------------|
| JavaScript | 57 ms(Beats 91.27%) | 42.6 MB (Beats 49.14%) |
