const normalizeValue = (element) => {
  const types = { string: `'${element}'`, object: `[complex value]`, boolean: `${element}`, number: `${element}` }
  if (element === null) {
    return null
  }
  return types[typeof element]
}

export default normalizeValue
