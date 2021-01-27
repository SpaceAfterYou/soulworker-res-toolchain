import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint16("id")
  .uint8("b1")
  .uint8("b2");
