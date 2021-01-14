import { Parser } from 'binary-parser';
import '../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint16("id")
  .uint8("v1")
  .uint8("v2")
  .uint8("v3")
  .uint8("v4")
  .uint8("v5")
  .uint32("v6")
  .uint8("v7")
  .uint8("v8")
  .uint8("v9")
  .uint8("v10")
  .uint32("v11")
  .uint8("v12")
  .uint32("v13")
