import _ from 'lodash'

const buildDifference = (file1, file2) => {
  const keys1 = Object.keys(file1)
  const keys2 = Object.keys(file2)
  const keys = _.union(keys1, keys2)

  const allKeys = _.sortBy(keys)
  return allKeys.map((key) => {
    switch (true) {
      case !Object.hasOwn(file1, key):
        return { key, type: 'added', value: file2[key] }
      case !Object.hasOwn(file2, key):
        return { key, type: 'deleted', value: file1[key] }
      case _.isObject(file1[key]) && _.isObject(file2[key]):
        return { key, type: 'nested', children: buildDifference(file1[key], file2[key]) }
      case file1[key] !== file2[key]:
        return { key, type: 'changed', oldValue: file1[key], newValue: file2[key] }
      default:
        return { key, type: 'unchanged', value: file1[key] }
    }
  })
}

export default buildDifference
