function add(numbers) {
    if (numbers === "") return 0;
  
    // Replace new lines with commas, then split by commas
    const nums = numbers.replace(/\n/g, ",").split(",").map(num => parseInt(num, 10)).filter(num => !isNaN(num));
  
    return nums.reduce((sum, num) => sum + num, 0);
  }

module.exports = { add };