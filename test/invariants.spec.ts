import invariants from '../src/invariants';

test('invariant throws error with multiple conditions and messages', () => {
  expect(() =>
    invariants([
      [false, 'Condition 1 failed'],
      [true, 'Condition 2 failed'],
      [false, 'Condition 3 failed'],
    ]),
  ).toThrowError('Condition 1 failed');
});

test('invariant throws error with multiple conditions and messages', () => {
  expect(() =>
    invariants([
      [true, 'Condition 1 failed'],
      [false, 'Condition 2 failed'],
      [true, 'Condition 3 failed'],
    ]),
  ).toThrowError('Condition 2 failed');
});

test('invariant throws error with multiple conditions and messages', () => {
  expect(() =>
    invariants([
      [false, 'Condition 1 failed'],
      [false, 'Condition 2 failed'],
      [false, 'Condition 3 failed'],
    ]),
  ).toThrowError('Condition 1 failed');
});

test('invariant does not throw error when all conditions are true', () => {
  expect(() =>
    invariants([
      [true, 'Condition 1 failed'],
      [true, 'Condition 2 failed'],
      [true, 'Condition 3 failed'],
    ]),
  ).not.toThrowError();
});

test('invariant does not throw error when there are no conditions', () => {
  expect(() => invariants([])).not.toThrowError();
});
