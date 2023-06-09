# Fast Invariants

A lightweight utility function to check multiple conditions with their corresponding messages, and throw an error when the conditions fail.

A tiny [`invariant`](https://www.npmjs.com/package/invariant) alternative.

## Installation

npm install fast-invariants

## Usage

```javascript
import invariants from 'fast-invariants';

invariant(
  [
    [true, 'Condition 1 failed'],
    [true, 'Condition 2 failed'],
    [false, 'Condition 3 failed'],
  ],
  TypeError,
  { errorCode: '123' },
);
```

This will throw a TypeError error with the message: Invariant violation: Condition 3 failed.

## Parameters

The function accepts the following parameters:

- `conditions` (array): An array of conditions with their corresponding messages. Each condition should be an array of two elements: the condition (a boolean) and the error message (a string).
- `errorClass` (optional): The type of error to throw. Defaults to the Error class.
  data (optional): An object with additional data to include in the error object.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
