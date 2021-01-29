import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("id")
  .swstring("v5")
  .swstring("v6")
  .swstring("v7");
