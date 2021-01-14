import { Parser } from 'binary-parser';
import '../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint8("id")
  .uint32('v5')
  .uint32('v6')
  .uint32('v7')
  .uint32('v8')
  .uint32('v9');
