import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint8("id")
  .uint16("v5")
  .uint16("v6")
  .swstring("v7")
  .swstring("v8")
  .uint32("v9");
