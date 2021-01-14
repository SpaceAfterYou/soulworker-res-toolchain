import { Parser } from 'binary-parser';
import '../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint8("id")
  .uint8("v1")
  .uint8("v2")
  .uint8("v3")
  .uint8("v4")
  .uint8("v5")
  .uint8("v6")
  .uint8("v7")
  .uint8("v8")
  .uint8("v9")
  .uint8("v10")
  .uint8("v11")

  .uint16("v12Len1")
  .swstring("v12", 'v12Len1')

  .uint16("v13Len1")
  .swstring("v13", 'v13Len1')

  .uint16("v4Len1")
  .swstring("v4", 'v4Len1')

  .uint16("v15Len1")
  .swstring("v15", 'v15Len1')

  .uint16("v16Len1")
  .swstring("v16", 'v16Len1')

