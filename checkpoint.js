// STRING MANIPULATION

// 1. Reverse a String
function reverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 2. Count Characters in a String
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Each Word
function capitalizeWords(sentence) {
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
}
console.log(reverseString("hello"));
console.log(countCharacters("hello world"));
console.log(capitalizeWords("hello rourou welcome to js"));

// ARRAY FUNCTIONS

// 4. Find Maximum
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// 5. Find Minimum
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// 6. Sum of Array
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 7. Filter Array (keep values > condition)
function filterArray(arr, condition) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > condition) {
            result.push(arr[i]);
        }
    }
    return result;
  }

   console.log(findMax([3, 7, 1, 9]));
   console.log(findMin([3, 7, 1, 9]));
   console.log(sumArray([1, 2, 3, 4]));
   console.log(filterArray([10, 5, 2, 20, 7], 6));

// MATHEMATICAL FUNCTIONS

// 8. Factorial
function factorial(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 9. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// 10. Fibonacci Sequence
function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
        fib[fib.length] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
console.log(factorial(5));
console.log(isPrime(11));
console.log(fibonacci(10));
