import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("id")
  .uint32("v51")
  .uint32("v52")
  .uint32("v53")
  .uint32("v54")
  .uint32("v55")
  .uint32("v56")
  .uint32("v57")
  .uint32("v58");
