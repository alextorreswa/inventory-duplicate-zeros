# Tech Interview Prep: Inventory Management System Update (Duplicate Zeros)

## Problem
Given an array `inventory` of stock counts, duplicate every `0` in-place (0 means out-of-stock and needs a restock order). Shift elements to the right. Anything that overflows past the original length is ignored.

Example:
Input:  [4,0,1,3,0,2,5,0]
Output: [4,0,0,1,3,0,0,2]

## Clarifying Questions
1. Must we modify the same array in-place (no new output array)?
2. If duplicating a zero causes overflow, do we drop values beyond the original length?
3. Are values integers? (Only 0 matters for this operation.)
4. What if a 0 is near the end? (We only write what fits.)

## Approach (Diagram / Flow)
1. Count the zeros in the array.
2. Use two pointers:
   - `i` starts at the end of the original array (n - 1)
   - `j` starts at the end of a virtual expanded array (n + zeros - 1)
3. Walk backward:
   - If `j < n`, write `inventory[j] = inventory[i]`
   - If `inventory[i] == 0`, decrement `j` and write a second 0 (if `j < n`)
4. This avoids overwriting values we still need to read.

## Complexity
- Time: O(n)
- Space: O(1)

## Run Tests
```bash
npm install
npm test
