import { Parser } from 'binary-parser';
import '../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("id")

  .uint16("v5Len1")
  .swstring("v5", 'v5Len1')

  .uint16("v6Len1")
  .swstring("v6", "v6Len1")

  .uint16("v7Len1")
  .swstring("v7", "v7Len1")

  .int16("v8")
  .uint16("v9")
  .uint16("v10")
  .uint16("v11")

  .uint16("v12Len1")
  .swstring("v12", "v12Len1")

  .uint8("v13")
