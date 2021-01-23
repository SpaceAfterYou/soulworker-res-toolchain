import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("id")
  .uint8("unknown1")
  .swstring('str1');
