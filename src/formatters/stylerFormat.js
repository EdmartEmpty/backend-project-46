import stringify from '../helpers/stringify.js'

const stylishFormat = (tree, deep = 0) => {
  const spaces = 4
  const result = []

  for (const object of tree) {
    const currentDepth = deep + 1
    const leftShift = ' '.repeat(currentDepth * spaces - 2)
    const noShift = ' '.repeat(currentDepth * spaces)

    if (object.type === 'added') {
      result.push(`${leftShift}+ ${object.key}: ${stringify(object.value, ' ', spaces, currentDepth)}`)
    }
    else if (object.type === 'deleted') {
      result.push(`${leftShift}- ${object.key}: ${stringify(object.value, ' ', spaces, currentDepth)}`)
    }
    else if (object.type === 'changed') {
      result.push(`${leftShift}- ${object.key}: ${stringify(object.oldValue, ' ', spaces, currentDepth)}`)
      result.push(`${leftShift}+ ${object.key}: ${stringify(object.newValue, ' ', spaces, currentDepth)}`)
    }
    else if (object.type === 'nested') {
      result.push(`${noShift}${object.key}: ${stylishFormat(object.children, currentDepth)}`)
    }
    else {
      result.push(`${noShift}${object.key}: ${stringify(object.value, ' ', spaces, currentDepth)}`)
    }
  }
  const closeBrackets = ' '.repeat(deep * spaces)
  return ['{', ...result, `${closeBrackets}}`].join('\n')
}
export default stylishFormat
