import stylishFormat from './stylerFormat.js'
import plainFormat from './plainFormat.js'
import jsonFormat from './jsonFormat.js'

const formatStyle = { stylish: stylishFormat,
  plain: plainFormat,
  json: jsonFormat }

export default (style, file1, file2) => {
  console.log('ПРИШЕЛ СТИЛЬ:', style)
  if (formatStyle[style] === undefined) {
    throw new Error('Unknown format')
  }
  return formatStyle[style](file1, file2)
}
