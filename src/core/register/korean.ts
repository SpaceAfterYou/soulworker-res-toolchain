import tb_UI_String from "@/restypes/client/kr/tb_UI_String";
import tb_Option_String from "@/restypes/client/kr/tb_Option_String";
import tb_item_model from "@/restypes/client/kr/tb_item_model";
import tb_item from "@/restypes/client/kr/tb_item";
import tb_Appearance from "@/restypes/client/kr/tb_Appearance";
import tb_Create_Cloth from "@/restypes/client/kr/tb_Create_Cloth";
import tb_CreateOption from "@/restypes/client/kr/tb_CreateOption";
import tb_Customize_Info from "@/restypes/client/kr/tb_Customize_Info";
import tb_Customize_Eyes from "@/restypes/client/kr/tb_Customize_Eyes";
import tb_Customize_Hair from "@/restypes/client/kr/tb_Customize_Hair";
import tb_Customize_Skin from "@/restypes/client/kr/tb_Customize_Skin";
import tb_Customize_View_Ani from "@/restypes/client/kr/tb_Customize_View_Ani";
import tb_Customize_View_Costume from "@/restypes/client/kr/tb_Customize_View_Costume";
import tb_Customize_View_Sound from "@/restypes/client/kr/tb_Customize_View_Sound";
import tb_Customize_View_Weapon from "@/restypes/client/kr/tb_Customize_View_Weapon";
import tb_Event_Condition from "@/restypes/client/kr/tb_Event_Condition";
import tb_District from "@/restypes/client/kr/tb_District";
import tb_Npc from "@/restypes/client/kr/tb_Npc";
import tb_Photo_Item from "@/restypes/client/kr/tb_Photo_Item";
import tb_Gesture from "@/restypes/client/kr/tb_Gesture";

import { GameVersion } from "../../types/game-version";
import { GameToken } from "../../types/game-token";

import type { ParsersBuilder } from "../parsers-builder";

export const registerKorean = (parsers: ParsersBuilder) => {
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_UI_String", tb_UI_String);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Option_String", tb_Option_String);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_item_model", tb_item_model);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_50_11, "tb_item", tb_item);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Appearance", tb_Appearance);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Create_Cloth", tb_Create_Cloth);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_CreateOption", tb_CreateOption);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_Info", tb_Customize_Info);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_Eyes", tb_Customize_Eyes);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_Hair", tb_Customize_Hair);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_Skin", tb_Customize_Skin);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_View_Ani", tb_Customize_View_Ani);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_View_Costume", tb_Customize_View_Costume);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_View_Sound", tb_Customize_View_Sound);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_View_Weapon", tb_Customize_View_Weapon);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Event_Condition", tb_Event_Condition);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_District", tb_District);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Npc", tb_Npc);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Photo_Item", tb_Photo_Item);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Gesture", tb_Gesture);
};
