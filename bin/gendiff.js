#!/usr/bin/env node

import { program } from 'commander'
import gendiff from '../src/gendiff.js'

program.description('Compares two configuration files and shows a difference.')
program.version('1.0.0', '-V, --version', 'output the version number')
program.option('-f, --format [type]', 'output format')
program.argument('<filepath1>', 'path to first file')
program.argument('<filepath2>', 'path to second file')
program.action(gendiff)

program.parse()
