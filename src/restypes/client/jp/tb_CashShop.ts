import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
  .endianess("little")
  .uint32("Shop_Index")
  .uint16("MainTab_ID")
  .uint16("SubTab_ID")
  .uint8("Sell_Active")
  .uint32("SellItem_ID")
  .uint8("Need_Slot")
  .uint8("Sell_Type")
  .uint8("Item_Gift")
  .uint32("Sell_priority")
  .uint8("Limit_Type")
  .swstring("Limit_Start_Date")
  .swstring("Limit_End_Date")
  .uint8("Sell_Number_Type")
  .uint16("Sell_Number_Value")
  .uint8("Sell_Level")
  .uint16("BillingInfo_ID")
  .uint16("Mileage_ID")
  .uint8("Hot_Icon")
  .uint8("New_Icon")
  .swstring("Unknown1");

