import { ParsersBuilder } from "../parsers-builder";

import Korean_tb_UI_String from "@/restypes/client/kr/tb_UI_String";
import Korean_tb_Option_String from "@/restypes/client/kr/tb_Option_String";
import Korean_tb_item_model from "@/restypes/client/kr/tb_item_model";
import Korean_tb_item from "@/restypes/client/kr/tb_item";
import Korean_tb_Appearance from "@/restypes/client/kr/tb_Appearance";
import Korean_tb_Create_Cloth from "@/restypes/client/kr/tb_Create_Cloth";
import Korean_tb_CreateOption from "@/restypes/client/kr/tb_CreateOption";
import Korean_tb_Customize_Info from "@/restypes/client/kr/tb_Customize_Info";
import Korean_tb_Customize_Eyes from "@/restypes/client/kr/tb_Customize_Eyes";
import Korean_tb_Customize_Hair from "@/restypes/client/kr/tb_Customize_Hair";
import Korean_tb_Customize_Skin from "@/restypes/client/kr/tb_Customize_Skin";
import Korean_tb_Customize_View_Ani from "@/restypes/client/kr/tb_Customize_View_Ani";
import Korean_tb_Customize_View_Costume from "@/restypes/client/kr/tb_Customize_View_Costume";
import Korean_tb_Customize_View_Sound from "@/restypes/client/kr/tb_Customize_View_Sound";
import Korean_tb_Customize_View_Weapon from "@/restypes/client/kr/tb_Customize_View_Weapon";
import Korean_tb_Event_Condition from "@/restypes/client/kr/tb_Event_Condition";
import Korean_tb_District from "@/restypes/client/kr/tb_District";
import Korean_tb_Npc from "@/restypes/client/kr/tb_Npc";
import Korean_tb_Photo_Item from "@/restypes/client/kr/tb_Photo_Item";

import { GameVersion } from "../../types/game-version";
import { GameToken } from "../../types/game-token";

export const registerKorean = (parsers: ParsersBuilder) => {
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_UI_String", Korean_tb_UI_String);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Option_String", Korean_tb_Option_String);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_item_model", Korean_tb_item_model);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_50_11, "tb_item", Korean_tb_item);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Appearance", Korean_tb_Appearance);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Create_Cloth", Korean_tb_Create_Cloth);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_CreateOption", Korean_tb_CreateOption);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_Info", Korean_tb_Customize_Info);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_Eyes", Korean_tb_Customize_Eyes);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_Hair", Korean_tb_Customize_Hair);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_Skin", Korean_tb_Customize_Skin);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_View_Ani", Korean_tb_Customize_View_Ani);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_View_Costume", Korean_tb_Customize_View_Costume);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_View_Sound", Korean_tb_Customize_View_Sound);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Customize_View_Weapon", Korean_tb_Customize_View_Weapon);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Event_Condition", Korean_tb_Event_Condition);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_District", Korean_tb_District);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Npc", Korean_tb_Npc);
  parsers.add(GameToken.kr, GameVersion.kr_1_7_66_13, "tb_Photo_Item", Korean_tb_Photo_Item);
};
