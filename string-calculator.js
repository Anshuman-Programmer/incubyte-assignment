function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = delimiterMatch[1];
        numbers = numbers.slice(delimiterMatch[0].length);
      }
    }
  
    const nums = numbers.replace(/\n/g, delimiter).split(delimiter).map(num => parseInt(num, 10)).filter(num => !isNaN(num));
  
    // Check for negatives
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
module.exports = { add };