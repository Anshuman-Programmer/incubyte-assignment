function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      // Extract delimiter from the format "//[delimiter]\n"
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = delimiterMatch[1]; // Custom delimiter
        numbers = numbers.slice(delimiterMatch[0].length); // Remove delimiter declaration
      }
    }
  
    // Replace new lines with the delimiter, then split
    const nums = numbers.replace(/\n/g, delimiter).split(delimiter).map(num => parseInt(num, 10)).filter(num => !isNaN(num));
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
module.exports = { add };