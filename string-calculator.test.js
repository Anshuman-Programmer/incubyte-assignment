const { add } = require('./string-calculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });
  
  test('should return the number itself if the string contains one number', () => {
    expect(add("1")).toBe(1);
  });
  
});

