import getParseObject from './helpers/getParseObject.js'
import _ from 'lodash'

const outputFormats = {
  json: JSON.stringify,

}

export const gendiff = (filepath1, filepath2, options = null) => {
  try {
    const file1 = getParseObject(filepath1)
    const file2 = getParseObject(filepath2)
    const allKeys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)))

    const result = {}

    for (const key of allKeys) {
      const value1 = file1[key]
      const value2 = file2[key]
      if (!Object.hasOwn(file1, key)) {
        result[`+ ${key}`] = value2
      }
      else if (!Object.hasOwn(file2, key)) {
        result[`- ${key}`] = value1
      }
      else if (file1[key] !== file2[key]) {
        result[`- ${key}`] = value1
        result[`+ ${key}`] = value2
      }
      else {
        result[` ${key}`] = value1
      }
    }
    const format = options?.format || false
    if (format) {
      const srtingResult = outputFormats[options.format](result)
      console.log(srtingResult)
      return
    }
    console.log(result)
    return JSON.stringify(result)
  }
  catch (error) {
    console.warn('Ошибка \n', error)
  }
}

export default gendiff
