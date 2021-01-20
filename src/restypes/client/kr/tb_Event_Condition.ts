import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("id")
  .uint16('v6')
  .uint8('v7')
  .uint8('v8')
  .uint32('v9')
  .uint32('v10');
