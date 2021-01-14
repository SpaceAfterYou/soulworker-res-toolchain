import { Parser } from 'binary-parser';
import '../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("id")
  .uint8("v1")
  .uint8("v2")
  .uint16("v3")
  .uint16("v4")

  .uint16("v5Len1")
  .swstring("v5", 'v5Len1')

  .uint8("v6")

