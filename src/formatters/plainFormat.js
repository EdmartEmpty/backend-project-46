import finderDifference from '../helpers/finderDifference.js'
import _ from 'lodash'
import normalizeValue from '../helpers/normalizeValue.js'

const plainFormat = (object, object2, startProperty = '') => {
  const tree = finderDifference(object, object2)
  const treeKeys = _.sortBy(Object.keys(tree))
  let result = []
  for (const key of treeKeys) {
    const currentPath = startProperty ? `${startProperty}.${key}` : key
    const valueObject = object[key]
    const valueObject2 = object2[key]
    if (tree[key] === 'added') {
      result.push(`Property '${currentPath}' was added with value: ${normalizeValue(valueObject2)}`)
    }
    else if (tree[key] === 'deleted') {
      result.push(`Property '${currentPath}' was removed`)
    }
    else if (tree[key] === 'changed') {
      if (typeof valueObject === 'object' && valueObject !== null
        && typeof valueObject2 === 'object' && valueObject2 !== null) {
        result.push(plainFormat(valueObject, valueObject2, currentPath))
      }
      else {
        result.push(`Property '${currentPath}' was updated. From ${normalizeValue(valueObject)} to ${normalizeValue(valueObject2)}`)
      }
    }
  }
  return result.join('\n')
}
export default plainFormat
