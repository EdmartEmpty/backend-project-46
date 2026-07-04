const stringify = (obj, replace = ' ', spacesCount = 1, deep = 0) => {
  const iter = (currentObj, depth = 0) => {
    if (typeof currentObj !== 'object' || currentObj === null) {
      return `${currentObj}`
    }

    let currentResult = '{\n'

    const keys = Object.keys(currentObj)
    const nextDepth = depth + 1
    const indent = replace.repeat(nextDepth * spacesCount)
    const closingIndent = replace.repeat(depth * spacesCount)

    for (const key of keys) {
      const value = currentObj[key]

      currentResult += `${indent}${key}: ${iter(value, nextDepth)}\n`
    }

    currentResult += `${closingIndent}}`

    return currentResult
  }

  return iter(obj, deep)
}
export default stringify
