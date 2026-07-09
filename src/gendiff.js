import getParseObject from './helpers/getParseObject.js'
import formatter from './formatters/index.js'
import buildDifference from './helpers/buildDifference.js'

export const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = getParseObject(filepath1)
  const file2 = getParseObject(filepath2)
  const tree = buildDifference(file1, file2)
  const result = formatter(format, tree)
  return result
}

export default gendiff
