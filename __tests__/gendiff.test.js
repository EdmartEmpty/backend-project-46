import { test, expect } from '@jest/globals'
import gendiff from '../src/gendiff.js'
import { fileURLToPath } from 'url'
import path from 'path'
import { readFileSync } from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const conten = [
  ['file1.json', 'file2.json', 'result.txt', 'stylish'],
  ['file1.yaml', 'file2.yaml', 'result.txt'],
  ['deepFile1.json', 'deepFile2.json', 'deepResult.txt'],
  ['deepFile1.yaml', 'deepFile2.yaml', 'deepResult.txt'],
  ['deepFile1.json', 'deepFile2.json', 'planiDeepFixtures.txt', 'plain'],
  ['deepFile1.yaml', 'deepFile2.yaml', 'planiDeepFixtures.txt', 'plain'],
  ['deepFile1.yml', 'deepFile2.yml', 'jsonResult.txt', 'json'],
]

test.each(conten)('test function gendiff on all levels %i', (file1, file2, result, options = 'stylish') => {
  const pathFile1 = getFixturePath(file1)
  const pathFile2 = getFixturePath(file2)
  const difference = gendiff(pathFile1, pathFile2, options)
  const expectedResultPath = getFixturePath(result)
  const expectedResultContent = readFileSync(expectedResultPath, 'utf-8')
  expect(difference).toEqual(expectedResultContent)
})
