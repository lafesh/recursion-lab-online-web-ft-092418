// Code your solution here!
function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(str) {
      if (str.length > 1) {
          let subStr = str.substring(str.length - 1)
          return subStr + reverseString(str.substring(0, str.length - 1))
      } else {
          return str
      }
  }

function isPalindrome(str) {
    if (str.length === 1) {
        return true
    } else if (str[0] === str[str.length-1]) {
        let newString = str.substring(1, str.length-1)
        return isPalindrome(newString)
    } else {
        return false
    }
}

function addUpTo(nums, idx) {
    let total = 0
    if (idx > 0) {
        total = nums[idx] + addUpTo(nums, idx - 1) 
    } else {
        total += nums[idx]
    }
    return total
}

function maxOf(nums) {
    if (nums[0] <= nums[1]) {
        return maxOf(nums.slice(1))
    } else if (nums[0] > nums[1]) {
        return maxOf(nums.slice(0, 1).concat(nums.slice(2)))
    } else {
        return nums[0]
    }
}

function includesNumber(array, n) {
    if (array[0] === n) {
        return true
    } else if (array.length > 1) {
        return includesNumber(array.slice(1), n)
    } else {
        return false
    }
  }
