// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

console.log = sumOf([1, 2, 3, 4]);

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((num1, num2) => num1 * num2, 1);
};

console.log = productOf([1, 2, 3, 4]);

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
};

console.log = averageOf([1, 2, 3, 4, 5]);

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((min, number) => {
    if (number < min) {
      return number;
    }
    return min;
  }, Infinity);
};

console.log = minOf([3, 1, 4, 1, 5, 9, 2]);

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9

const maxOf = function (numbers) {
  return numbers.reduce((max, number) => {
    if (number > max) {
      return number;
    }
    return max;
  }, -Infinity);
};

console.log = maxOf([3, 1, 4, 1, 5, 9, 2]);

// sumPositiveNumbers([1, -2, 3, -4]) => 4

const sumPositiveNumbers = (numbers) => {
  return numbers.reduce((sum, number) => {
    if (number > 0) {
      sum = sum + number;
    }
    return sum;
  }, 0);
};

console.log = sumPositiveNumbers([1, -2, 3, -4]);

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.reduce((sum, number) => sum + number * number, 0);
};

console.log = sumOfSquares([1, 2, 3, 4]);

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  return numbers.reduce((sum, number) => {
    if (number % 2 === 1) {
      sum += number;
    }
    return sum;
  });
};

console.log = sumOfOddNumbers([1, 2, 3, 4, 5]);

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce((count, number) => {
    if (number < 0) {
      count += 1;
    }
    return count;
  }, 0);
};

console.log = countNegativeNumbers([1, -2, 3, -4]);

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce((sum, number) => {
    if (number % 2 === 0) {
      sum += number * number;
    }
    return sum;
  }, 0);
};

console.log = findSumOfEvenSquares([1, 2, 3, 4]);

//--------------------------------------10-------------------------------------

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((concatedWord, word) => {
    return concatedWord + word;
  }, "");
};

console.log = concatenateWords(["hello", "world"]);

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"

const longestWord = function (words) {
  return words.reduce((longestString, string) => {
    if (string.length > longestString.length) {
      longestString = string;
    }
    return longestString;
  }, "");
};

console.log = longestWord(["apple", "banana", "cherry", "kiwi"]);

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"

const shortestWord = function (words) {
  return words.reduce((shortestString, string) => {
    if (shortestString.length === 0) {
      return string;
    }
    if (shortestString.length > string.length) {
      shortestString = string;
    }
    return shortestString;
  }, "");
};

console.log = shortestWord(["apple", "banana", "cherry", "kiwi"]);

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"

const joinWithComma = function (words) {
  return words
    .reduce((newString, word) => {
      newString.push(word);
      return newString;
    }, [])
    .join(",");
};

console.log = joinWithComma(["apple", "banana", "cherry"]);

// reverseWords(["hello", "world"]) => "world hello"

const reverseWords = function (words) {
  return words
    .reduceRight((newString, word) => {
      newString.push(word);
      return newString;
    }, [])
    .join(",");
};

console.log = reverseWords(["hello", "world"]);

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words
    .reduce((newString, word) => {
      newString.push(word);
      return newString;
    }, [])
    .join(" ");
};

console.log = joinWordsWithSpace(["apple", "banana", "cherry"]);

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((newString, word) => {
    return (newString += word);
  }, "");
};

console.log = concatenateNames(["John", "Jane", "Doe"]);

// countVowelsInWords(["hello", "world"]) => "eoo"

const countVowelsInWords = function (words) {
  return words.reduce((newString, word) => {
    newString += word.split("").reduce((vowels, char) => {
      if ("aeiou".includes(char)) {
        vowels += char;
      }
      return vowels;
    }, []);
    return newString;
  }, []);
};

console.log = countVowelsInWords(["hello", "world"]);

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"

const getFirstLetterCapital = (string) => {
  return string.split("").reduce((result, char) => {
    if (result === "") {
      result += char.toUpperCase();
      return result;
    }
    return result + char;
  }, "");
};

const makeCamelCase = function (words) {
  return words.reduce((result, string) => {
    return result + getFirstLetterCapital(string);
  }, "");
};

console.log = makeCamelCase(["hello", "world", "how", "are", "you"]);

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"

const getReverseWord = (word) => {
  return word.split("").reverse().join("");
};

const reverseString = function (words) {
  return words.reduce((reversedString, word) => {
    return (reversedString += getReverseWord(word));
  }, "");
};

console.log = reverseString(["apple", "banana", "cherry"]);
//---------------------------------20-------------------------------------

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  return numbers.reduce((result, number) => {
    result.push(number);
    result.push(number);
    return result;
  }, []);
};

console.log = duplicateNumbers([1, 2, 3]);

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {
  return arrays.reduce((result, array) => {
    result = result.concat(array);
    return result;
  }, []);
};

console.log = concatenateArrays([
  [1, 2],
  [3, 4],
  [5, 6],
]);

// flattenArray([[1, 2], [3,[ 4]], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  return arrays
    .reduce((result, array) => {
      result.push(array);
      return result;
    }, [])
    .flat();
};

console.log = flattenArray([
  [1, 2],
  [3, 4, 7],
  [5, 6],
]);

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce((uniqueElements, number) => {
    if (!uniqueElements.includes(number)) {
      uniqueElements.push(number);
    }
    return uniqueElements;
  }, []);
};

console.log = uniqueNumbers([1, 2, 2, 3, 4, 4, 5]);

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "chery"], 6: ["banana"], 4: ["date"] }

const getValues = (strings, length) => {
  return strings.filter((string) => string.length === length);
};

const groupByLength = function (strings) {
  return strings.reduce((init, string) => {
    if (!Object.keys(init).includes(string.length.toString(10))) {
      init[string.length] = getValues(strings, string.length);
    }
    return init;
  }, {});
};

groupByLength = ["apple", "banana", "cherry", "date", "apple", "mango", "kiwi"];

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }

const countOccurrences = function (strings) {
  return strings.reduce((init, string) => {
    const count = init[string] || 0;
    init[string] = count + 1;
    return init;
  }, {});
};

console.log = countOccurrences(["apple", "banana", "cherry", "banana"]);

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {
  return objects.reduce((object) => {});
};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {
  let index = 0;
  return keys.reduce((init, key) => {
    init[key] = values[index];
    index++;
    return init;
  }, {});
};

console.log = zip(["a", "b", "c"], [1, 2, 3]);

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  return keys.reduce((init, key, index) => {
    init[key] = values[index];
    return init;
  }, {});
};

console.log = makeObject(["city", "country"], ["Paris", "France"]);

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  return Object.entries(obj).reduce((init, attribute) => {
    init[attribute[1]] = attribute[0];
    return init;
  }, {});
};

console.log = invertObject({ a: 1, b: 2, c: 3 });

//-------------------------------------------30-------------------------------

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }

const mergeArrays = function (arr1, arr2) {
  const concatedArray = arr1.concat(arr2);
  return concatedArray.reduce((init, array) => {
    init[array[0]] = array[1];
    return init;
  }, {});
};

console.log = mergeArrays(
  [
    ["a", 1],
    ["b", 2],
  ],
  [
    ["c", 3],
    ["d", 4],
  ]
);

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }

const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {
  return numbers.reduce(
    (init, number) => {
      const length = init.length - 1;
      if (number > init[length].at(-1)) {
        init.at(-1).push(number);
        return init;
      }
      init.push([number]);
      return init;
    },
    [[-Infinity]]
  );
};

console.log = ascendingGroups([1, 2, 3, 4, 3, 4, 5, 10, 6, 7, 8, 9]);

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {
  return pairs.reduce((init, array) => {
    init[array[0]] = array[1];
    return init;
  }, {});
};

console.log = flattenToObject([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"

const longestString = function (strings) {
  return strings.reduce((longestString, string) => {
    if (string.length > longestString.length) {
      return string;
    }
    return longestString;
  }, "");
};

console.log = longestString(["apple", "banana", "cherry", "dates"]);

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {
  return numbers.reduce(
    (obj, number) => {
      obj["sum"] = obj["sum"] + number;
      obj["count"] = obj["count"] + 1;
      return obj;
    },
    { sum: 0, count: 0 }
  );
};

console.log = sumAndCount([1, 2, 3, 4]);

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]

const deepFlatten = function (arr) {
  return arr.reduce((result, array) => {
    result.push(array.flat());
    return result;
  }, []);
};

console.log = deepFlatten([[1, 2], [3, 4, [5, 6]], 7]);

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {
  return numbers.reduce((max, number) => {
    if (number > max) {
      return number;
    }
    return max;
  }, -Infinity);
};

console.log = findMax([1, 2, 3, 4, 5]);

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {
  let sum = 0;
  return numbers.reduce((result, number) => {
    sum += number;
    result.push(sum);
    return result;
  }, []);
};

console.log = cumulativeSum([1, 2, 3, 4]);

//---------------------------------------40------------------------------

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]

const equalChunksOfAtLeast = function (numbers) {
  return numbers.reduce(
    (init, number) => {
      init.at(-1).at(-1) === number
        ? init.at(-1).push(number)
        : init.push([number]);
      return init;
    },
    [[]]
  );
};

console.log = equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]);

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }

const separateArray = (array) => {
  return array.reduce(
    (init, element) => {
      typeof element === "number"
        ? init[0].push(element)
        : init[1].push(element);
      return init;
    },
    [["number"], ["string"]]
  );
};

const groupByType = function (array) {
  const separatedArray = separateArray(array);
  return separatedArray.reduce((groupBy, array) => {
    groupBy[array[0]] = array.slice(1);
    return groupBy;
  }, {});
};

console.log = groupByType([1, "a", 2, "b", 3, "c", 4]);

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]

const average = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
};

const runningAverages = function (givenNumbers) {
  let numbers = [];
  return givenNumbers.reduce((init, number) => {
    numbers.push(number);
    init.push(average(numbers));
    return init;
  }, []);
};

console.log = runningAverages([1, 2, 3, 4]);

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {
  return arr.reduce(
    (init, element) => {
      if (init.at(-1).length === size) {
        init.push([]);
      }
      init.at(-1).push(element);
      return init;
    },
    [[]]
  );
};

console.log = splitIntoSubarrays([1, 2, 3, 4, 5, 6, 7], 3);

// groupByFirstLetter(["apple", "banana", "cherry", "date","axe"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }

const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3

const findFirstNonRepeated = function (numbers) {
  const countNumbers = countOccurrences(numbers);
  return numbers.reduceRight((init, num) => {
    if (countNumbers[num] === 1) {
      return num;
    }
    return init;
  }, -1);
};

console.log = findFirstNonRepeated([1, 2, 3, 4, 2, 1, 5]);

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {
  return words
    .join("")
    .split("")
    .reduce(
      (init, char) => {
        if ("aeiou".includes(char)) {
          const count = init[char];
          init[char] = count + 1;
        }
        return init;
      },
      { a: 0, e: 0, i: 0, o: 0, u: 0 }
    );
};

console.log = countVowels(["apple", "banana", "grape"]);

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {
  return array.reduce((uniq, element) => {
    if (uniq.at(-1) === element) {
      return uniq;
    }
    uniq.push(element);
    return uniq;
  }, []);
};

console.log = mergeConsecutiveDuplicates([1, 1, 1, 2, 3, 3, 4]);

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]

const longestConsecutiveSubsequence = function (numbers) {
  const sortElements = numbers.toSorted((a, b) => a - b);
  return mergeConsecutiveDuplicates(sortElements);
};

console.log = longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]);

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]

const topKFrequent = function (numbers, k) {
  const noOfOccuerences = countOccurrences(numbers);
  return Object.entries(noOfOccuerences).reduce((init, array) => {
    if (array[1] >= k) {
      init.push(array[0]);
    }
    return init;
  }, []);
};

console.log = topKFrequent([1, 1, 1, 2, 2, 3], 2);

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {
  const flattenArray = nestedNumbers.flat(Infinity);
  return (
    flattenArray.reduce((sum, number) => sum + number, 0) / flattenArray.length
  );
};

console.log = nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]);

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

const cartesianProduct = function (arr1, arr2) {
  return arr1.reduce((init, element1) => {
    return init.concat(arr2.map((element2) => [element1, element2]));
  }, []);
};

console.log = cartesianProduct([1, 2], ["a", "b"]);

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  return numbers.reduce(
    (maxmin, number) => {
      if (number > maxmin.max) {
        maxmin["max"] = number;
      }
      if (number < maxmin.min) {
        maxmin["min"] = number;
      }
      return maxmin;
    },
    { max: -Infinity, min: Infinity }
  );
};

console.log = findMinMax([1, 2, 3, 4, 5]);

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }

const sumByCategory = function (items) {};
