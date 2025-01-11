# String Calculator

This project implements a **String Calculator** using **Test-Driven Development (TDD)** in JavaScript.

## Features

1. Returns 0 for an empty string.
2. Handles one or more comma-separated numbers.
3. Supports new line (`\n`) as a delimiter.
4. Allows custom delimiters (e.g., `//;\n1;2` where `;` is the delimiter).
5. Throws an exception for negative numbers, listing all negative numbers in the error message.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

## Setup

1. Clone this repository:

   ```bash
   git clone git@github.com:Anshuman-Programmer/incubyte-assignment.git
   cd incubyte-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

This project uses **Jest** for testing.

1. To run the tests:

   ```bash
   npm test
   ```

2. Jest will run all the test cases and display the results in the terminal.

## Usage

The `add` method is the main function implemented in the `string-calculator.js` file.

### Example Usage

```javascript
const { add } = require("./string-calculator");

console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,2,3")); // Output: 6
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
```

### Error Handling

- If the input contains negative numbers, the `add` function will throw an error:

```javascript
try {
  add("-1,2,-3");
} catch (error) {
  console.error(error.message); // Output: negative numbers not allowed: -1,-3
}
```

## Directory Structure

```
.
├── string-calculator.js        # Implementation
├── string-calculator.test.js   # Test cases
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

## License

This project is open-source and available under the MIT License.
