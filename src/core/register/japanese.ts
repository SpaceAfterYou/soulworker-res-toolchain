import tb_UI_String from "@/restypes/client/kr/tb_UI_String";

import tb_CashBilling_Info from "@/restypes/client/jp/tb_CashBilling_Info";
import tb_CashShop from "@/restypes/client/jp/tb_CashShop";
import tb_NPC from "@/restypes/client/jp/tb_NPC";
import tb_Akashic_Records from "@/restypes/client/jp/tb_Akashic_Records";
import tb_Random_Option from "@/restypes/client/jp/tb_Random_Option";
import tb_Social_Item from "@/restypes/client/jp/tb_Social_Item";
import tb_Echelon from "@/restypes/client/jp/tb_Echelon";
import tb_Title_Info from "@/restypes/client/jp/tb_Title_Info";
import tb_Title_Reward from "@/restypes/client/jp/tb_Title_Reward";
import tb_Title_String from "@/restypes/client/jp/tb_Title_String";
import tb_Buff from "@/restypes/client/jp/tb_Buff";

import { GameToken } from "../../types/game-token";
import { GameVersion } from "../../types/game-version";

import type { ParsersBuilder } from "./../parsers-builder";

export const registerJapanese = (parsers: ParsersBuilder) => {
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_UI_String", tb_UI_String);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_CashBilling_Info", tb_CashBilling_Info);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_CashShop", tb_CashShop);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_NPC", tb_NPC);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_Akashic_Records", tb_Akashic_Records);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_Random_Option", tb_Random_Option);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_Social_Item", tb_Social_Item);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Echelon", tb_Echelon);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Title_Info", tb_Title_Info);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Title_Reward", tb_Title_Reward);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Title_String", tb_Title_String);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Buff", tb_Buff);
};
