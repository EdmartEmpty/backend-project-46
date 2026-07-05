import finderDifference from '../helpers/finderDifference.js'
import _ from 'lodash'
const makeJsObject = (file1, file2) => {
  const difference = finderDifference(file1, file2)
  const allKeys = _.sortBy(Object.keys(difference))
  const result = allKeys.map((key) => {
    if (difference[key] === 'added') {
      return { key, type: 'added', value: file2[key] }
    }
    else if (difference[key] === 'deleted') {
      return { key, type: 'deleted', value: file1[key] }
    }
    else if (difference[key] === 'changed') {
      if (_.isObject(file1[key]) && _.isObject(file2[key])) {
        return { key, type: 'nested', children: makeJsObject(file1[key], file2[key]) }
      }
      else {
        return { key, type: 'changed', oldValue: file1[key], newValue: file2[key] }
      }
    }
    else {
      return { key, type: 'unchanged', value: file1[key] }
    }
  })
  return result
}
const jsonFormat = (file1, file2) => {
  return JSON.stringify(makeJsObject(file1, file2), null, 2)
}
export default jsonFormat
