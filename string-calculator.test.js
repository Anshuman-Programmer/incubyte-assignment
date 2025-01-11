const { add } = require('./string-calculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself if the string contains one number', () => {
    expect(add("1")).toBe(1);
  });
  
  test('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('should handle multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  
  test('should return 0 for invalid input', () => {
    expect(add("a,b,c")).toBe(0);
  });

  test('should handle new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6); // New lines and commas mixed
    expect(add("1\n2\n3")).toBe(6); // Only new lines
  });

  test('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3); // Semicolon delimiter
    expect(add("//|\n1|2|3")).toBe(6); // Pipe delimiter
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });
  
  test('should list all negative numbers in the exception', () => {
    expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed: -1,-2");
  });
  
});

