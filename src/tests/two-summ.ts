//https://leetcode.com/problems/two-sum/


function twoSum(nums: number[], target: number): number[] {
    let sortedVal = nums.sort((a: number, b: number) => a - b)
    let indexCounter = [];
    let incrementor = 0;
    let currentValue = 0;
    while (target > currentValue) {
        indexCounter.push(incrementor)
        currentValue = currentValue + sortedVal[incrementor];
        incrementor = incrementor + 1
        if (currentValue > target) {
            break;
        }

    }

    return indexCounter;
};

// let Input: s = "III"
// Output: 3
// Explanation: III = 3.


test('nums = [2,7,11,15], target = 9', () => {
    const expected = [0, 1]
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining(expected));;
});

test('nums = [2,7,11,15], target = 9', () => {
    const expected = [1, 2]
    expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining(expected));;
});