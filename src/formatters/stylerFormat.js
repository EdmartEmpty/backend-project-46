import finderDifference from '../helpers/finderDifference.js'
import stringify from '../helpers/stringify.js'
import _ from 'lodash'

const stylishFormat = (file1, file2, deep = 0) => {
  const difference = finderDifference(file1, file2)
  const allKeys = _.sortBy(Object.keys(difference))

  const spaces = 4
  const result = []

  for (const key of allKeys) {
    const currentDepth = deep + 1
    const leftShift = ' '.repeat(currentDepth * spaces - 2)
    const noShift = ' '.repeat(currentDepth * spaces)

    if (difference[key] === 'added') {
      result.push(`${leftShift}+ ${key}: ${stringify(file2[key], ' ', spaces, currentDepth)}`)
    }
    else if (difference[key] === 'deleted') {
      result.push(`${leftShift}- ${key}: ${stringify(file1[key], ' ', spaces, currentDepth)}`)
    }
    else if (difference[key] === 'changed') {
      if (_.isObject(file1[key]) && _.isObject(file2[key])) {
        result.push(`${noShift}${key}: ${stylishFormat(file1[key], file2[key], currentDepth)}`)
      }
      else {
        result.push(`${leftShift}- ${key}: ${stringify(file1[key], ' ', spaces, currentDepth)}`)
        result.push(`${leftShift}+ ${key}: ${stringify(file2[key], ' ', spaces, currentDepth)}`)
      }
    }
    else {
      result.push(`${noShift}${key}: ${stringify(file1[key], ' ', spaces, currentDepth)}`)
    }
  }
  const closeBrackets = ' '.repeat(deep * spaces)
  return ['{', ...result, `${closeBrackets}}`].join('\n')
}
export default stylishFormat
