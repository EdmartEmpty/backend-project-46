import stylishFormat from './stylerFormat.js'

const formatStyle = { stylish: stylishFormat }

export default (style, file1, file2) => {
  if (formatStyle[style] === undefined) {
    throw new Error('Unknown format')
  }
  return formatStyle[style](file1, file2)
}
