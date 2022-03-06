import { Parser } from "binary-parser";
import "../../sw-string";

export default (parser = new Parser()) =>
  parser
    .endianess("little")
    .uint16("id")
    .uint16("unk")
    .uint16("unk1")
    .uint16("unk2")
    .swstring("WorldPath")
    .swstring("WorldName")
    .uint16("unk3")
    .uint32("unk4")
    .uint32("unk5")
    .swstring("WorldBGM")
    .swstring("WorldIntro")
    .uint8("unk6")
    .uint8("unk7")
    .swstring("WorldGUI")
    .uint8("unk8")
    .uint8("unk9");
