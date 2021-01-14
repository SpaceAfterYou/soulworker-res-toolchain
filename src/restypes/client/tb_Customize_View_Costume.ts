import { Parser } from 'binary-parser';
import '../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint8('id')
  .uint32('v5')
  .uint32('v6')
  .uint32('v7')
  .uint32('v8')
  .uint32('v9')
  .uint32('v10')
  .uint32('v11')
  .uint32('v12')
  .uint32('v13')
  .uint32('v14')
  .uint32('v15')
  .uint32('v16')
  .swstring('v17')

