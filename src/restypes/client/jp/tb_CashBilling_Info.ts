import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint16("id")
  .uint32("Item_ID_1st")
  .uint32("Item_ID_2nd")
  .uint32("Item_ID_3rd")
  .uint32("Item_ID_4th")
  .uint32("Item_ID_5th")
  .uint32("Value_1st")
  .uint32("Value_2nd")
  .uint32("Value_3rd")
  .uint32("Value_4th")
  .uint32("Value_5th")
  .uint32("B_Price_1st")
  .uint32("B_Price_2nd")
  .uint32("B_Price_3rd")
  .uint32("B_Price_4th")
  .uint32("B_Price_5th")
  .uint32("S_Price_1st")
  .uint32("S_Price_2nd")
  .uint32("S_Price_3rd")
  .uint32("S_Price_4th")
  .uint32("S_Price_5th");

