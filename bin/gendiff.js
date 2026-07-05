#!/usr/bin/env node

import { program } from 'commander'
import gendiff from '../src/gendiff.js'

program.description('Compares two configuration files and shows a difference.')
program.version('1.0.0', '-V, --version', 'output the version number')
program.option('-f, --format [type]', 'output format', 'stylish')
program.argument('<filepath1>', 'path to first file')
program.argument('<filepath2>', 'path to second file')
program.action((filepath1, filepath2) => {
  const options = program.opts()
  const formatName = options.format
  const result = gendiff(filepath1, filepath2, formatName)
  console.log(result)
})

program.parse(process.argv)
