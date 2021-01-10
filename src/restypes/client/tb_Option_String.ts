import { Parser } from 'binary-parser';

export default () => new Parser()
  .endianess("little")
  .uint16("id")
  .uint8("u1")
  .uint16("u2")
  .uint16("u3")
  .uint8("u4")
  .uint8("u5");
