import { test, expect } from '@jest/globals'
import stringify from '../src/helpers/stringify.js'

const table = [[false, 'false'], [1, '1'], [{ a: 1 }, `{\n a: 1\n}`], [null, `null`]]

test.each(table)(`тесты функции stringify %$`, (object, result) => {
  const string = stringify(object)
  expect(string).toEqual(result)
})
