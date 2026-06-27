import { test, expect } from '@jest/globals'
import gendiff from '../src/gendiff.js'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
test('gendiff test', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')
  const expectedResult = '{"- follow":false," host":"hexlet.io","- proxy":"123.234.53.22","- timeout":50,"+ timeout":20,"+ verbose":true}'
  const result = gendiff(filepath1, filepath2)
  expect(result).toEqual(expectedResult)
})
