import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("id")
  .swstring("v5")
  .swstring("v6")
  .swstring("v7")
  .int16("v8")
  .uint16("v9")
  .uint16("v10")
  .uint16("v11")
  .swstring("v12")
  .uint8("v13")
