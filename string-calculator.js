const doesNumberHasCustomDemiliters = (numbers) => numbers.startsWith("//");

const sum = (numbers) => {
  return numbers.reduce((result, num) => num + result, 0);
};

const multiplication = (numbers) => {
  return numbers.reduce((result, num) => num * result, 1);
};

function calculate(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",";
  if (doesNumberHasCustomDemiliters(numbers)) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = delimiterMatch[1];
      numbers = numbers.slice(delimiterMatch[0].length);
    }
  }

  const nums = numbers
    .replace(/\n/g, delimiter)
    .split(delimiter)
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));

  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  if (delimiter === "*") return multiplication(nums);
  return sum(nums);
}

module.exports = { calculate };
