
// Function to find two indices such that they add up to a specific target
function twoSum(nums, target) {
    // Create an object to map each number to its index
    const numMap = {};

    // Iterate over the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement by subtracting the current number from the target
        const complement = target - nums[i];

        // Check if the complement exists in our map
        if (numMap[complement] !== undefined) {
            // If it exists, return the current index and the index of the complement
            return [numMap[complement], i];
        }

        // If the complement is not found, add the current number along with its index to the map
        numMap[nums[i]] = i;
    }

    // If no solution is found, return an empty array
    return [];
}

