function invariants(
  conditions: [boolean, string][],
  errorClass: ErrorConstructor = Error,
  data: object = {},
): asserts conditions {
  const failedConditions = conditions.filter(([condition]) => !condition);

  if (failedConditions.length > 0) {
    const errorMessages = failedConditions.map(([, message]) => message);

    const error = new errorClass(`Invariant violation: ${errorMessages.join('. ')}`);

    Object.assign(error, data);

    throw error;
  }
}

export default invariants;
