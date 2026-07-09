import normalizeValue from '../helpers/normalizeValue.js'

const plainFormat = (tree, startProperty = '') => {
  let result = []
  for (const object of tree) {
    const currentPath = startProperty ? `${startProperty}.${object.key}` : object.key
    if (object.type === 'added') {
      result.push(`Property '${currentPath}' was added with value: ${normalizeValue(object.value)}`)
    }
    else if (object.type === 'deleted') {
      result.push(`Property '${currentPath}' was removed`)
    }
    else if (object.type === 'changed') {
      result.push(`Property '${currentPath}' was updated. From ${normalizeValue(object.oldValue)} to ${normalizeValue(object.newValue)}`)
    }
    else if (object.type === 'nested') {
      result.push(plainFormat(object.children, currentPath))
    }
  }
  return result.join('\n')
}
export default plainFormat
