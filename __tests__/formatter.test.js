import formatter from '../src/formatters/index.js'
import { expect, test } from '@jest/globals'

const file1 = { a: 1 }
const file2 = { b: 1 }

test('Unknown format', () => {
  expect( () => formatter(file1, file2, { format: 'unknow format' })).toThrow('Unknown format')
})
