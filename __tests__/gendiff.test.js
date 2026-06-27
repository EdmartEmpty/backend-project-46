import { test, expect, beforeEach } from '@jest/globals'
import gendiff from '../src/gendiff.js'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
let jsonContentPath1
let jsonContentPath2
let yamlContentPath1
let yamlContentPath2

beforeEach(() => {
  jsonContentPath1 = getFixturePath('file1.json')
  jsonContentPath2 = getFixturePath('file2.json')
  yamlContentPath1 = getFixturePath('file1.yaml')
  yamlContentPath2 = getFixturePath('file2.yaml')
},
)
test('gendiff json test ', () => {
  const result = gendiff(jsonContentPath1, jsonContentPath2)
  const expectedResult = '{"- follow":false," host":"hexlet.io","- proxy":"123.234.53.22","- timeout":50,"+ timeout":20,"+ verbose":true}'
  expect(result).toEqual(expectedResult)
})

test('gendiff yaml test ', () => {
  const result = gendiff(yamlContentPath1, yamlContentPath2)
  const expectedResult = '{"- follow":false," host":"hexlet.io","- proxy":"123.234.53.22","- timeout":50,"+ timeout":20,"+ verbose":true}'
  expect(result).toEqual(expectedResult)
})

test('gendiff with format', () => {
  const result = gendiff(yamlContentPath1, yamlContentPath2, { options: 'json' })
  const expectedResult = '{"- follow":false," host":"hexlet.io","- proxy":"123.234.53.22","- timeout":50,"+ timeout":20,"+ verbose":true}'
  expect(result).toEqual(expectedResult)
})
