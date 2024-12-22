// squares of [1, 2, 3] => [1, 4, 9]
const square = function (number) {
  return number * number;
};

const squaresOf = function (numbers) {
  return numbers.map(square);
};

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const getLengths = function (element) {
  return element.length;
};

const lengthsOf = function (strings) {
  return strings.map(getLengths);
};

console.log = lengthsOf(["hi", "hello"]);


// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const upperCase = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(upperCase);
};

console.log = uppercaseOf(["hi", "heloo"]);

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstChar = function (string) {
  return string[0];
};

const firstCharactersOf = function (strings) {
  return strings.map(firstChar);
};

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const isItTruthy = function (number) {
  return number === 0;
};

const truthValuesOf = function (numbers) {
  return numbers.map(isItTruthy);
};


// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const doubleChar = function (char) {
  return char + char;
};

const doubleLetters = function (string) {
  return string.split("").map(doubleChar).join("");
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleLetters);
};

// boolean negation of [true, false, true] => [false, true, false]
const compliment = function (boolean) {
  return !boolean;
};

const negatedBooleansOf = function (booleans) {
  return booleans.map(compliment);
};

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const getCharCode = function (char) {
  return char.charCodeAt();
};

const charCodesOf = function (strings) {
  return strings.map(getCharCode);
};

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]

const domainName = function (email) {
  return email.split("@")[1];
};

const domainNamesOf = function (emails) {
  return emails.map(domainName);
};


//-----------------------------------10--------------------------------------

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]

const splitWords = function (sentence) {
  return sentence.split(" ");
};

const splitWordsOf = function (strings) {
  return strings.map(splitWords);
};

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]

const joinArray = function (array) {
  return array.join("");
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinArray);
};

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]

const repeatString = function (string) {
  return string.repeat(2);
};

const repeatedStringsOf = function (strings) {
  return strings.map(repeatString);
};

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]

const countIfVowel = function (noOfVowels, char) {
  if ("aeiou".includes(char)) {
    return noOfVowels + 1;
  }
  return noOfVowels;
};

const countVowels = function (string) {
  return string.split("").reduce(countIfVowel, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(countVowels);
};

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]

const reverseArray = function (array) {
  return array.reverse();
};

const reversedArraysOf = function (arrays) {
  return arrays.map(reverseArray);
};

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]

const consonentString = function (consonentStr, char) {
  if (!"aeiou".includes(char)) {
    return consonentStr + char;
  }
  return consonentStr;
};

const removeVowels = function (string) {
  return string.split("").reduce(consonentString, "");
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]

const cumulativeSum = function () {
  let sum = 0;

  return function (element) {
    sum += element;
    return sum;
  };
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(cumulativeSum());
};

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]

const reverseWords = function (words) {
  return words.split(" ").map(reverseString).join(" ");
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWords);
};


// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grap"]
// Maintain the order of their first appearance in each string

const uniqueCharacters = function (uniqueStr, char) {
  if (!uniqueStr.includes(char)) {
    return uniqueStr + char;
  }
  return uniqueStr;
};

const removeDuplicateChar = function (string) {
  return string.split("").reduce(uniqueCharacters, "");
};

const uniqueCharactersOf = function (strings) {
  return strings.map(removeDuplicateChar);
};

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const rangeOf = function (number) {
  const array = [];
  for (let index = start; index < number; index++) {
    array.push(index);
  }
  return array;
};
const rangesOf = function (numbers) {
  return numbers.map(rangeOf);
};

//---------------------------------------20----------------------------------

// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]

const firstCharCapital = function (string) {
  let stringArray = string.split("");
  stringArray[0] = stringArray[0].toUpperCase();

  return stringArray.join("");
};

const firstLetterCapitalInSentence = function (sentence) {
  return sentence.split(" ").map(firstCharCapital).join(" ");
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(firstLetterCapitalInSentence);
};


// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]

const wordLength = function (word) {
  return word.length;
};

const wordLenInSentence = function (sentence) {
  return sentence.split(" ").map(wordLength);
};

const wordLengthsOf = function (strings) {
  return strings.map(wordLenInSentence);
};

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]

const flatArray = function (nestedArray) {
  return nestedArray.flat();
};

const flattenedArraysOf = function (arrays) {
  return arrays.map(flatArray);
};

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]

const sortString = function (string) {
  return string.split("").toSorted().join("");
};

const sortedLettersOf = function (strings) {
  return strings.map(sortString);
};

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]

const wrapString = function (string) {
  return '[' + string + ']';
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrapString);
};

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]

const getNames = function (person) {
  return person.name;
};

const extractNames = function (objects) {
  return objects.map(getNames);
};

console.log = extractNames([{ name: "Alice" }, { name: "Bob" }]);

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]

const getAges = function (person) {
  return person.age;
};

const extractAges = function (objects) {
  return objects.map(getAges);
};

console.log = extractAges([{ age: 25 }, { age: 30 }]);

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]


const getFirstLetterInName = function (person) {
  return person.name[0];
};

const firstLettersOfNames = function (objects) {
  return objects.map(getFirstLetterInName);
};

console.log = firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]);

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]

const area = function (dimensions) {
  return dimensions.width * dimensions.height;
};

const calculateAreas = function (rectangles) {
  return rectangles.map(area);
};

console.log = calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]);

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]

const extractBooleans = function (boolean) {
  return boolean["active"];
};
const extractFlags = function (objects) {
  return objects.map(extractBooleans);
};

console.log = extractFlags([{ active: true }, { active: false }]);

// --------------------------------------30------------------------------------

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]

const concatenateNames = function (name) {
  return name["firstName"] + " " + name["lastName"];
};

const fullNames = function (objects) {
  return objects.map(concatenateNames);
};

console.log = fullNames([{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }]);

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)

const totalCost = function (product) {
  return product.price * product.quantity;
};

const totalPrices = function (objects) {
  return objects.map(totalCost);
};

console.log = totalPrices([{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }]);

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)

const isAnAdult = function (person) {
  return person.age >= 18;
};

const isAdult = function (objects) {
  return objects.map(isAnAdult);
};

console.log = isAdult([{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }]);

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]

const createAbbrevations = function (place) {
  const regex = /[A-Z]/g;
  const city = place.city.match(regex).join("");
  const country = place.country.match(regex).join("");
  return city + ", " + country;
};

const abbreviations = function (objects) {
  return objects.map(createAbbrevations);
};

console.log = abbreviations([{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }]);

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]

const extractMathsMarks = function (personMarks) {
  return personMarks.scores.math;
};

const mathScores = function (objects) {
  return objects.map(extractMathsMarks);
};

console.log = mathScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]);

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]

const getXandY = function (coordinates) {
  return [coordinates.x, coordinates.y];
};

const extractCoordinates = function (objects) {
  return objects.map(getXandY);
};

console.log = extractCoordinates([{ x: 1, y: 2 }, { x: 3, y: 4 }]);

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]

const extractFullNameAndAge = function (person) {
  return [person["firstName"] + " " + person["lastName"], person["age"]];
};

const fullNameAndAge = function (objects) {
  return objects.map(extractFullNameAndAge);
};

console.log = fullNameAndAge([{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }]);

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]

const getScores = function (person) {
  return [person.scores.math, person.scores.english];
};

const extractScores = function (objects) {
  return objects.map(getScores);
};

console.log = extractScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]);

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]

const extractKeyValuePairs = function (keyValue) {
  return [keyValue.key, keyValue.value];
};

const keyValuePairs = function (objects) {
  return objects.map(extractKeyValuePairs);
};

console.log = keyValuePairs([{ key: "a", value: 1 }, { key: "b", value: 2 }]);

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]

const getFirstAndLastName = function (person) {
  return person.name.split(" ");
};

const splitFullNames = function (objects) {
  return objects.map(getFirstAndLastName);
};

console.log = splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]);

//------------------------------------40--------------------------------------

// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]

const normalizeScore = function (attributes) {
  return attributes.score / 100;
};

const normalizeScores = function (objects) {
  return objects.map(normalizeScore);
};

console.log = normalizeScores([{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }]);

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]

const totalSum = function (sum, number) {
  return sum + number;
};

const percentage = function (sum) {
  return function (number) {
    return (number / sum) * 100;
  };
};

const percentageContributions = function (numbers) {
  const sum = numbers.reduce(totalSum, 0);

  return numbers.map(percentage(sum));
};

console.log = percentageContributions([10, 20, 30]);

// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]

const smallestNumber = function (smallerNumber, number) {
  return Math.min(smallerNumber, number);
};

const subract = function (smallerNumber) {
  return function (number) {
    return number - smallerNumber;
  };
};

const subtractMin = function (numbers) {
  const smallerNumber = numbers.reduce(smallestNumber, Infinity);

  return numbers.map(subract(smallerNumber));
};

console.log = subtractMin([3, 8, 1]);

// calculate ranks (1-based, descending) for scores in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [2, 1, 3]

const getScore = function (person) {
  return person.score;
};

const rangeOfRanks = function (number) {
  const array = [];
  for (let index = start; index < number; index++) {
    array.push(index);
  }
  return array;
};

const assignRanks = function (sortedScores, ranks) {
  const object = {};

  for (let index = 0; index < sortedScores.length; index++) {
    object[sortedScores[index]] = ranks[index];
  }

  return object;
};

const getRank = function (scoresRankObject) {
  return function (score) {
    return scoresRankObject[score];
  };
};

const calculateRanks = function (objects) {
  const scores = objects.map(getScore);
  const sortedScores = scores.toSorted(function (a, b) {
    return b - a;
  });
  const ranks = rangeOfRanks(sortedScores.length);
  const scoresRankObject = assignRanks(sortedScores, ranks);

  return scores.map(getRank(scoresRankObject));
};

console.log = calculateRanks([{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }]);

// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)

const longestString = function (longestString, string) {
  if (string.length > longestString.length) {
    return string;
  }
  return longestString;
};

const padWithSpaces = function (longestStr) {
  return function (string) {
    return string.padEnd(longestStr.length, " ");

  };
};

const normalizeStringLengths = function (strings) {
  const longestStr = strings.reduce(longestString, "");

  return strings.map(padWithSpaces(longestStr));

};

console.log = normalizeStringLengths(["cat", "elephant", "dog"]);

// normalize strings by centering them based on the longest string length in ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   ","   ab   "]
// (pad with spaces to justify to the center)

const padWithSpacesInCenter = function (longestStrLength) {
  return function (string) {
    const padStartLen = Math.floor((longestStrLength - string.length) / 2);

    return string.padStart(padStartLen + string.length, " ").padEnd(longestStrLength, " ");
  };
};

const centerJustifyStrings = function (strings) {
  const longestStrLength = strings.reduce(longestString, "").length;

  return strings.map(padWithSpacesInCenter(longestStrLength));
};

console.log = centerJustifyStrings(["cat", "elephant", "dog", "ab"]);

// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] => [25, 62.5, 100]

const largestNumber = function (smallerNumber, number) {
  return Math.max(smallerNumber, number);
};

const scaleTo100 = function (scalingFactor) {
  return function (number) {
    return number * scalingFactor;
  };
};

const scaleToMax100 = function (numbers) {
  const scalingFactor = 100 / numbers.reduce(largestNumber, -Infinity);
  return numbers.map(scaleTo100(scalingFactor));
};

console.log = scaleToMax100([20, 50, 80]);

// map each number to the difference between it and the average of the array in [10, 20, 30] => [-10, 0, 10]

const sum = function (sum, number) {
  return sum + number;
};

const subractAverage = function (average) {
  return function (number) {
    return number - average;
  };
};
const differencesFromMean = function (numbers) {
  const average = numbers.reduce(sum, 0) / numbers.length;

  return numbers.map(subractAverage(average));
};

console.log = differencesFromMean([10, 20, 30]);

// map each string to its frequency in ["apple", "banana", "apple", "apple", "banana"] => [3, 2, 3, 3, 2]

// mark the largest number in an array as true, others as false in [1, 3, 2] => [false, true, false]

const isItLargestNumber = function (largestNum) {
  return function (number) {
    return number === largestNum;
  };
};

const markLargestNumber = function (numbers) {
  const largestNum = numbers.reduce(largestNumber, -Infinity);

  return numbers.map(isItLargestNumber(largestNum));
};

console.log = markLargestNumber([1, 3, 2]);

//----------------------------------------50------------------------------------

// normalize scores based on a curve: first find the max score, then subtract the mean, and scale the results to a range of 0-100 in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [60, 100, 80]
// Steps: Find max score, calculate mean, normalize each score.
const normalizeWithCurve = function (objects) { };

// group students by their grades: first categorize them into A, B, C, and so on, then map each student to their respective category in [{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }] => [['Alice', 'B'], ['Bob', 'A']]
// Steps: Categorize grades, then group students by category.
const groupByGrade = function (objects) { };

// sort strings by length first, and then alphabetically if lengths are equal in ["cat", "banana", "apple", "kiwi"] => ["cat", "kiwi", "apple", "banana"]
// Steps: Sort by length, then by lexicographical order.
const sortByLengthAndAlphabet = function (strings) { };

// find the difference between the max and min values, and then normalize the array based on this range in [10, 20, 30, 5] => [0.25, 0.75, 1, 0]
// Steps: Find min, max, calculate range, then normalize each value.
const normalizeByRange = function (numbers) { };

// calculate the percentage of each number relative to the total sum of the array, and then sort the percentages in descending order in [100, 200, 50, 25] => [50, 25, 12.5, 12.5]
// Steps: Calculate sum, find percentage of each number, sort in descending order.
const percentageOfTotalSorted = function (numbers) { };

// map a list of students' grades in multiple subjects to their average score, and then sort the averages in descending order in [{ name: "Alice", grades: [80, 90, 85] }, { name: "Bob", grades: [70, 75, 80] }] => [{ name: "Alice", avg: 85 }, { name: "Bob", avg: 75 }]
// Steps: Calculate average for each student, then sort by average score.
const sortStudentsByAverage = function (students) { };

// map a list of numbers to their corresponding binary representation and then group them into arrays of equal lengths in [1, 2, 3, 4, 5] => [["1"], ["10"], ["11"], ["100"], ["101"]]
// Steps: Convert numbers to binary, then group them into arrays.
const mapToBinaryAndGroup = function (numbers) { };

// flatten an array of arrays into a single array and then filter out only the even numbers in [[1, 2, 3], [4, 5], [6, 7, 8]] => [2, 4, 6, 8]
// Steps: Flatten the arrays into one, then filter for even numbers.
const flattenAndFilterEven = function (arrays) { };

// from an array of arrays, where each array contains [name, age], return an array of names of people who are over 18, and then sort them alphabetically in [["Alice", 25], ["Bob", 17], ["Charlie", 22]] => ["Alice", "Charlie"]
// Steps: Filter for age > 18, then sort by name.
const filterAdultsAndSort = function (arrays) { };

// given an array of objects representing sales with date and amount, calculate the total sales for each month and return them as an array of arrays like [[month, total], ...] in [{ date: "2024-01-15", amount: 100 }, { date: "2024-02-10", amount: 150 }, { date: "2024-01-25", amount: 200 }] => [["2024-01", 300], ["2024-02", 150]]
// Steps: Group by month, sum the sales for each month.
const totalSalesByMonth = function (sales) { };

// map each employee's department to their total salary, and then return an array of objects with department name and total salary in [{ name: "Alice", department: "HR", salary: 5000 }, { name: "Bob", department: "Engineering", salary: 6000 }, { name: "Charlie", department: "HR", salary: 4500 }] => [{ department: "HR", totalSalary: 9500 }, { department: "Engineering", totalSalary: 6000 }]
// Steps: Group by department, sum the salaries for each department.
const totalSalaryByDepartment = function (employees) { };

// for a list of students, return an array of objects that includes the student's name and their highest grade in [{ name: "Alice", grades: { math: 80, science: 90, history: 70 } }, { name: "Bob", grades: { math: 70, science: 85, history: 95 } }] => [{ name: "Alice", highestGrade: 90 }, { name: "Bob", highestGrade: 95 }]
// Steps: For each student, find the highest grade from their grades object.
const highestGradeByStudent = function (students) { };

// for a list of books with authors and publication years, return an array of objects that categorizes books into "old" (published before 2000) and "new" (published after 2000) in [{ title: "Book1", author: "Author1", year: 1999 }, { title: "Book2", author: "Author2", year: 2005 }] => [{ category: "old", books: [{ title: "Book1", author: "Author1" }] }, { category: "new", books: [{ title: "Book2", author: "Author2" }] }]
// Steps: Categorize by year, group books accordingly.
const categorizeBooksByYear = function (books) { };

// for a list of transactions, return an array of objects where each object contains the user's name and the total amount they spent, grouping by user name in [{ user: "Alice", transaction: { amount: 50, date: "2024-01-01" } }, { user: "Bob", transaction: { amount: 30, date: "2024-01-02" } }, { user: "Alice", transaction: { amount: 20, date: "2024-01-03" } }] => [{ user: "Alice", totalSpent: 70 }, { user: "Bob", totalSpent: 30 }]
// Steps: Group by user, sum the transaction amounts for each user.
const totalSpentByUser = function (transactions) { };

// given an array of products, each with name, price, and discount, return a list of objects containing the product name and final price (after applying the discount), rounding the final price to two decimal places in [{ name: "Product1", price: 100, discount: 0.1 }, { name: "Product2", price: 150, discount: 0.2 }] => [{ name: "Product1", finalPrice: 90.00 }, { name: "Product2", finalPrice: 120.00 }]
// Steps: Apply discount, calculate final price, round to two decimal places.
const finalPriceAfterDiscount = function (products) { };

// flatten a list of arrays representing orders, where each order contains items, and return a single array of item names in [["item1", "item2"], ["item3", "item4"]] => ["item1", "item2", "item3", "item4"]
// Steps: Use `flatMap` to flatten the arrays into a single array of items.
const flattenOrderItems = function (orders) { };

// given a list of objects representing students with their courses, use `flatMap` to return a list of all unique courses that the students are enrolled in in [{ name: "Alice", courses: ["Math", "History"] }, { name: "Bob", courses: ["Math", "Science"] }] => ["Math", "History", "Science"]
// Steps: Use `flatMap` to combine all courses into a single array, then filter out duplicates.
const uniqueCourses = function (students) { };


// given a list of users, where each user has a list of messages, return an array of messages that contain the word "urgent" in [{ name: "Alice", messages: ["Urgent: Pay bills", "Meeting at 3"] }, { name: "Bob", messages: ["Urgent: Call customer", "Check email"] }] => ["Urgent: Pay bills", "Urgent: Call customer"]
// Steps: Use `flatMap` to combine all messages, then filter for "urgent" messages.
const urgentMessages = function (users) { };

// given a list of categories, where each category contains multiple tags, use `flatMap` to return a list of all tags in [{ category: "Tech", tags: ["JavaScript", "Node"] }, { category: "Design", tags: ["UX", "UI"] }] => ["JavaScript", "Node", "UX", "UI"]
// Steps: Use `flatMap` to combine all tags into a single array.
const allTags = function (categories) { };

// given a list of people, where each person has a list of friends, use `flatMap` to return a list of all friends, excluding duplicates, in [{ name: "Alice", friends: ["Bob", "Charlie"] }, { name: "Bob", friends: ["Alice", "David"] }] => ["Bob", "Charlie", "David"]
// Steps: Use `flatMap` to flatten the friends arrays, then remove duplicates.
const allFriends = function (people) { };

// given an array of strings, return a new array where each string is prefixed with its index (e.g., "0: Alice", "1: Bob") in ["Alice", "Bob", "Charlie"] => ["0: Alice", "1: Bob", "2: Charlie"]
// Steps: Use the index parameter in the `map` function to prefix the strings.
const prefixWithIndex = function (names) { };

// given an array of numbers, return a new array where each number is multiplied by its index in [2, 4, 6] => [0, 4, 12]
// Steps: Use the index parameter in the `map` function to multiply the number by its index.
const multiplyByIndex = function (numbers) { };

// given an array of prices, return a new array where each price is discounted by 5% for every index greater than 2, and the discount is 0% for indices less than or equal to 2 in [100, 200, 300, 400, 500] => [100, 200, 300, 380, 475]
// Steps: Use the index parameter in `map` to conditionally apply the discount.
const discountByIndex = function (prices) { };

// given an array of names, return a new array where each name is formatted as "Name: X", where X is the index of the name, and prepend "Index - " to names at even indices in ["Alice", "Bob", "Charlie"] => ["Index - 0: Alice", "1: Bob", "Index - 2: Charlie"]
// Steps: Use the index parameter in `map` to conditionally format the names.
const formatNamesWithIndex = function (names) { };

// given an array of objects with 'name' and 'age' properties, return a new array of strings where each string is "name is age years old" and append "(old)" for every person whose index is greater than or equal to 2 in [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }] => ["Alice is 30 years old", "Bob is 25 years old", "Charlie is 35 years old (old)"]
// Steps: Use the index parameter in `map` to conditionally append "(old)".
const formatNamesWithAge = function (people) { };

// given an array of posts, each with a list of hashtags, return a flat list of all hashtags used in the posts in 
// [{ post: "Vacation", hashtags: ["#sunny", "#beach"] }, { post: "Dinner", hashtags: ["#food", "#yum"] }] 
// => ["#sunny", "#beach", "#food", "#yum"]
// Steps: Use `flatMap` to extract all hashtags and combine them into a single list.
const extractHashtags = function (posts) { };

// given an array of users, each with a list of followers, return an array where each user is paired with the number of their followers 
// [{ username: "alice", followers: ["bob", "charlie"] }, { username: "bob", followers: ["alice"] }] 
// => [{ username: "alice", followersCount: 2 }, { username: "bob", followersCount: 1 }]
// Steps: Use `map` to create an object with the username and the count of followers.
const countFollowers = function (users) { };

// given an array of posts, each with a list of comments, return a new array of the comments with a "replied to" note added if the post index is even 
// [{ post: "Vacation", comments: ["Nice!", "Love it!"] }, { post: "Dinner", comments: ["Yummy", "Looks great!"] }] 
// => [["Nice! replied to", "Love it! replied to"], ["Yummy", "Looks great!"]]
// Steps: Use `map` and the index to conditionally append "replied to" for even indexed posts.
const addReplyNoteToComments = function (posts) { };

// given an array of videos, each with a list of comments, return a new array where each comment is capitalized if the number of likes on the video is more than 1000 
// [{ video: "Dance", likes: 1200, comments: ["great video", "love this"] }, { video: "Food", likes: 800, comments: ["looks good", "yum"] }] 
// => [["Great video", "Love this"], ["looks good", "yum"]]
// Steps: Use `map` to capitalize comments only if the number of likes exceeds 1000.
const capitalizeCommentsIfPopular = function (videos) { };

// given an array of posts, each with a list of user tags, return a new array where each tag is transformed into an object with { tag: 'username', count: x }, 
// where x is the number of times the tag appears in the post's list of tags, in [{ post: "TikTok Challenge", tags: ["fun", "dance", "fun"] }, { post: "Viral Recipe", tags: ["recipe", "yum", "fun"] }]
// => [{ tag: "fun", count: 2 }, { tag: "dance", count: 1 }, { tag: "recipe", count: 1 }, { tag: "yum", count: 1 }]
// Steps: Use `map` to return objects with the tag and count, aggregating the counts based on the tags in each post.
const tagCount = function (posts) { };

// given two arrays, one of numbers and one of multipliers, create closures to multiply the base by the multiplier, then use flatMap to multiply each number in the base array by each multiplier
// [1, 2], [1, 2, 3] => [1, 2, 3, 2, 4, 6]
const multiply = function (bases, multipliers) { };

// given two arrays, one of numbers and one of addends, create closures to add the base number to the addend, then use flatMap to apply each addend to each number
// [1, 2], [5, 10] => [6, 11, 7, 12]
const add = function (bases, addends) { };

// given two arrays, one of numbers and one of divisors, create closures to divide the base number by the divisor, then use flatMap to divide each number by each divisor
// [10, 20], [2, 5] => [5, 2, 4, 4]
const divide = function (bases, divisors) { };

// given two arrays, one of numbers and one of exponents, create closures to raise the base number to the exponent, then use flatMap to raise each number by each exponent
// [2, 3], [2, 3] => [4, 8, 9, 27]
const power = function (bases, exponents) { };

// given two arrays, one of prices and one of discounts, create closures to apply the discount to the price, then use flatMap to apply each discount to each price
// [100, 200], [0.1, 0.2] => [90, 180, 160, 240]
const applyDiscount = function (prices, discounts) { };

// given two arrays, one of names and one of titles, create closures that combine each name with each title, then use flatMap to generate all combinations of names and titles
// ["Alice", "Bob"], ["Developer", "Manager"] => ["Alice Developer", "Alice Manager", "Bob Developer", "Bob Manager"]
const combineNameAndTitle = function (names, titles) { };

// given two arrays, one of numbers and one of multipliers, create closures that multiply the base number by the corresponding multiplier at the same index, then return the results
// [1, 2, 3], [2, 3, 4] => [2, 6, 12]
const multiplyByCorresponding = function (bases, multipliers) { };

// given an array of objects, where each object contains a `name` and `age`, create a closure for each person that adds a `yearsToRetirement` property, then use flatMap to calculate the retirement year for each person assuming retirement at 65
// [{name: "Alice", age: 30}, {name: "Bob", age: 40}] => ["Alice will retire in 35 years", "Bob will retire in 25 years"]
const calculateRetirement = function (people) { };

// given an array of numbers, create a closure that checks if a number is greater than or equal to a specified value (e.g., 10), then use flatMap to return only the numbers that meet the condition
// [5, 10, 15], 10 => [10, 15]
const filterGreaterThanEqual = function (numbers, threshold) { };

// given an array of strings representing messages and an array of punctuation marks, create closures that append each punctuation mark to each message, then use flatMap to create all possible combinations of messages with punctuation
// ["Hello", "Goodbye"], ["!", "?"] => ["Hello!", "Hello?", "Goodbye!", "Goodbye?"]
const addPunctuation = function (messages, punctuations) { };

// given an array of user objects with `name` and `age`, create closures that return a greeting with the user's name, then use flatMap to apply the closure to each user
// [{name: "Alice", age: 30}, {name: "Bob", age: 25}] => ["Hello Alice!", "Hello Bob!"]
const greetUsers = function (users) { };

// given two arrays, one of people’s names and one of ages, create closures to generate a message indicating whether each person is an adult (18 or older), then use flatMap to apply the closure to each person
// ["Alice", "Bob"], [20, 17] => ["Alice is an adult", "Bob is not an adult"]
const checkAdultStatus = function (names, ages) { };

// given an array of product objects, each containing `name` and `price`, create closures to apply a sales tax (e.g., 10%) to the price, then use flatMap to calculate the price with tax for each product
// [{name: "Shirt", price: 20}, {name: "Shoes", price: 50}] => [22, 55]
const applySalesTax = function (products) { };

// given an array of user objects with `name` and `posts`, return an array of objects where each object contains the user's name and an array of post titles
// [{name: "Alice", posts: [{title: "Post 1"}, {title: "Post 2"}]}, {name: "Bob", posts: [{title: "Post 3"}]}] 
// => [{name: "Alice", posts: ["Post 1", "Post 2"]}, {name: "Bob", posts: ["Post 3"]}]
const getUserPostTitles = function (users) { };

// given an array of products, where each product contains a `name`, `price`, and `tags` array, return a new array of products where each product contains its name and an array of uppercased tags
// [{name: "Shirt", price: 20, tags: ["cotton", "summer"]}, {name: "Shoes", price: 50, tags: ["leather", "winter"]}] 
// => [{name: "Shirt", tags: ["COTTON", "SUMMER"]}, {name: "Shoes", tags: ["LEATHER", "WINTER"]}]
const formatProductTags = function (products) { };

// given an array of categories where each category has a `categoryName` and `items` array, return a new array where each item is an object with the category name and an array of item names
// [{categoryName: "Fruits", items: [{name: "Apple"}, {name: "Banana"}]}, {categoryName: "Vegetables", items: [{name: "Carrot"}]}] 
// => [{categoryName: "Fruits", items: ["Apple", "Banana"]}, {categoryName: "Vegetables", items: ["Carrot"]}]
const getCategoryItems = function (categories) { };

// given an array of order objects with `orderId` and `products`, where each product has a `name` and `quantity`, return an array of orders, where each order contains its `orderId` and an array of product names, each with the quantity
// [{orderId: 1, products: [{name: "Laptop", quantity: 1}, {name: "Mouse", quantity: 2}]}, {orderId: 2, products: [{name: "Keyboard", quantity: 1}]}]
// => [{orderId: 1, products: ["Laptop x1", "Mouse x2"]}, {orderId: 2, products: ["Keyboard x1"]}]
const summarizeOrderProducts = function (orders) { };

// given an array of students, each with a `name` and a `courses` array, return a new array of objects, where each object contains the student's name and an array of their course names in uppercase
// [{name: "Alice", courses: [{courseName: "Math"}, {courseName: "Science"}]}, {name: "Bob", courses: [{courseName: "English"}]}]
// => [{name: "Alice", courses: ["MATH", "SCIENCE"]}, {name: "Bob", courses: ["ENGLISH"]}]
const getStudentCourses = function (students) { };

// given an array of books, each with a `title` and `chapters`, where each chapter has a `title` and a `pageCount`, return an array of books, each containing the book's title and an array of chapter titles along with their page counts
// [{title: "Book 1", chapters: [{title: "Chapter 1", pageCount: 10}, {title: "Chapter 2", pageCount: 20}]}, {title: "Book 2", chapters: [{title: "Chapter 1", pageCount: 15}]}]
// => [{title: "Book 1", chapters: ["Chapter 1: 10 pages", "Chapter 2: 20 pages"]}, {title: "Book 2", chapters: ["Chapter 1: 15 pages"]}]
const summarizeBookChapters = function (books) { };

// given an array of events, where each event has a `name` and an array of `attendees`, where each attendee has a `firstName` and `lastName`, return an array of events where each event contains the event name and an array of full names of attendees
// [{name: "Concert", attendees: [{firstName: "John", lastName: "Doe"}, {firstName: "Jane", lastName: "Smith"}]}, {name: "Conference", attendees: [{firstName: "Bob", lastName: "Brown"}]}]
// => [{name: "Concert", attendees: ["John Doe", "Jane Smith"]}, {name: "Conference", attendees: ["Bob Brown"]}]
const getEventAttendees = function (events) { };