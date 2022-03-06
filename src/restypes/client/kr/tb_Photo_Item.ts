import { Parser } from "binary-parser";
import "../../sw-string";

export default (parser = new Parser()) =>
  parser
    .endianess("little")
    .uint32("id")
    .uint32("uid")
    .uint16("subid")
    .swstring("mainImage")
    .swstring("partyImage")
    .swstring("partyoffImage")
    .swstring("forceImage")
    .swstring("HelperImage")
    .swstring("cultivationImage")
    .swstring("commuintyImage")
    .swstring("selectImage")
    .swstring("quickPartyImage")
    .swstring("loadingImage")
    .uint8("classRequire")
    .uint8("promotionRequire");
