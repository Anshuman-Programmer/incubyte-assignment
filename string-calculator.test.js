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
  
});

