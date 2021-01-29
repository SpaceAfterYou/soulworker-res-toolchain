import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("v51")
  .uint8("v52")
  .uint8("v521")
  .uint16("v521")
  .uint8("v53")
  .uint32("v531")
  .uint8("v541")
  .uint8("v542")
  .uint8("v543")
  .uint8("v55")
  .uint8("v551")
  .uint8("v552")
  .uint16("v553")
  .uint16("v561")
  .uint16("v563")
  .uint16("v571")
  .uint16("v573");
