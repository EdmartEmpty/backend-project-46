import { test, expect, beforeEach } from '@jest/globals'
import parse from '../src/helpers/parser.js'
import { fileURLToPath } from 'url'
import path from 'path'
import { readFileSync } from 'node:fs'
import { load } from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixture = filename => readFileSync(getFixturePath(filename), 'utf-8')

let jsonContent
let yamlContent

beforeEach(() => {
  jsonContent = readFixture('file1.json')
  yamlContent = readFixture('file1.yaml')
})

test('parser test json', () => {
  expect(parse('json', jsonContent)).toEqual(JSON.parse(jsonContent))
})
test('parser test yaml', () => {
  expect(parse('yaml', yamlContent)).toEqual(load(yamlContent))
})

test('parser test error format', () => {
  expect(parse('txt', yamlContent)).toEqual('Такого формата нет')
})
