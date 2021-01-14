import { Parser } from 'binary-parser';
import '../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint16('v5')
  .uint16('v6')
  .uint16('v7')
  .uint16('v8')
  .uint16('v9')
  .swstring('v10')
  .swstring('v11')
  .swstring('v12')
  .swstring('v13')
  .swstring('v14');

