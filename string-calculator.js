const doesNumberHasCustomDemiliters = (numbers) => numbers.startsWith("//");

const calculateResult = (result, num, delimiter) => {
  if (delimiter === "*") return result * num;
  return result + num;
};

const getIntialDefaultValue = (delimiter) => {
  return delimiter === "*" ? 1 : 0;
};

function add(numbers) {
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

  return nums.reduce(
    (result, num) => calculateResult(result, num, delimiter),
    getIntialDefaultValue(delimiter)
  );
}

module.exports = { add };
