// Geenrate From Res Structure Extractor
// https://github.com/SpaceAfterYou/SoulWorker.ResStructureExtractor

const { readFile, writeFile } = require('node:fs/promises')

if (process.argv.length < 3) {
  console.error('Need path to json file')
  process.exit(-1)
}

const definedTypes = {
  'SByte': 'int8',
  'Byte': 'uint8',
  'Int8': 'int8',
  'UInt8': 'uint8',
  'Int16': 'int16',
  'UInt16': 'uint16',
  'Int32': 'int32',
  'UInt32': 'uint32',
  'Int64': 'int64',
  'UInt64': 'uint64',
  'String': 'swstring'
}

/**
 * 
 * @param {number} index
 * @param {string} type
 */
function exchangeType(type, index) {
  if (type in definedTypes) return `\t.${definedTypes[type]}("v${index}")`
  throw new Error(`Bad type: ${type}`)
}

/**
 * 
 * @param {string[]} types
 */
function generateTables(types) {
  return [
    "import { Parser } from 'binary-parser';",
    "import '../../sw-string';",
    "",
    "export default (parser = new Parser()) => parser",
    ...types.map(exchangeType)
  ]
}

/**
 * 
 * @param {string[]} names
 */
function generateRegister(names) {
  return [
    ...names.map(name => `import ${name} from '@/restypes/client/gb/${name}';`),
    "",
    "import { GameToken } from '../../types/game-token';",
    "import { GameVersion } from '../../types/game-version';",
    "",
    "import type { ParsersBuilder } from './../parsers-builder';",
    "",
    "export const registerGlobal = (parsers: ParsersBuilder) => {",
    ...names.map(name => `\tparsers.add(GameToken.gb, GameVersion.gb_1_8_38_5, '${name}', ${name});`),
    "};"
  ]
}

readFile(process.argv[2], 'ascii').then(async file => {
  const data = JSON.parse(file)
  await Promise.all(Object.entries(data).map(([name, types]) => {
    return writeFile(`../src/restypes/client/gb/${name}.ts`, generateTables(types).join('\n'))
  }))

  await writeFile(`../src/core/register/global.ts`, generateRegister(Object.keys(data)).join('\n'))
})