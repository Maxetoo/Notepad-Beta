export const createUndefinedPropError = (args) => {
  if (!args) {
    throw new Error('Component must accept children components')
  }
}
