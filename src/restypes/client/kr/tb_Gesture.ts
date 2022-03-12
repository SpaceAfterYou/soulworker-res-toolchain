import { Parser } from "binary-parser";
import "../../sw-string";

export default (parser = new Parser()) =>
  parser
    .endianess("little")
    .uint32("id")
    .uint8("class")
    .uint8("minLevel")
    .uint8("initialGesture")
    .uint32("coolTime")
    .uint16("unk1")
    .uint32("unk2")
    .swstring("icon")
    .uint8("unk4")
    .uint32("unk5")
    .uint32("unk6")
    .uint32("unk7")
    .uint32("unk8")
    .swstring("gestureInit")
    .swstring("gestureLoop")
    .swstring("gestureEnd")
    .uint32("unk12")
    .uint16("unk13")
    .uint16("unk14");
