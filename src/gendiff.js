import getParseObject from './helpers/getParseObject.js'
import formatter from './formatters/index.js'

export const gendiff = (filepath1, filepath2, options = { format: 'stylish' }) => {
  const file1 = getParseObject(filepath1)
  const file2 = getParseObject(filepath2)
  const { format } = options
  const result = formatter(format, file1, file2)

  return result
}

export default gendiff
