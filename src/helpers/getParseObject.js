import { readFileSync } from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import parser from './parser.js'

const getPath = filePath => path.resolve(cwd(), filePath)

const getParseObject = (filePath) => {
  const absolutePath = getPath(filePath)

  const content = readFileSync(absolutePath, 'utf-8')
  const format = path.extname(filePath).slice(1)
  const parseObject = parser(format, content)
  return parseObject
}

export default getParseObject
