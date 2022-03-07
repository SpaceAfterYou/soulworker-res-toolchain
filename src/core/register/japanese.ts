import { ParsersBuilder } from "./../parsers-builder";

import Korean_tb_UI_String from "@/restypes/client/kr/tb_UI_String";

import Japanese_tb_CashBilling_Info from "@/restypes/client/jp/tb_CashBilling_Info";
import Japanese_tb_CashShop from "@/restypes/client/jp/tb_CashShop";
import Japanese_tb_NPC from "@/restypes/client/jp/tb_NPC";
import Japanese_tb_Akashic_Records from "@/restypes/client/jp/tb_Akashic_Records";
import Japanese_tb_Random_Option from "@/restypes/client/jp/tb_Random_Option";
import Japanese_tb_Social_Item from "@/restypes/client/jp/tb_Social_Item";
import Japanese_tb_Echelon from "@/restypes/client/jp/tb_Echelon";
import Japanese_tb_Title_Info from "@/restypes/client/jp/tb_Title_Info";
import Japanese_tb_Title_Reward from "@/restypes/client/jp/tb_Title_Reward";
import Japanese_tb_Title_String from "@/restypes/client/jp/tb_Title_String";
import Japanese_tb_Buff from "@/restypes/client/jp/tb_Buff";

import { GameToken } from "../../types/game-token";
import { GameVersion } from "../../types/game-version";

export const registerJapanese = (parsers: ParsersBuilder) => {
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_UI_String", Korean_tb_UI_String);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_CashBilling_Info", Japanese_tb_CashBilling_Info);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_CashShop", Japanese_tb_CashShop);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_NPC", Japanese_tb_NPC);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_Akashic_Records", Japanese_tb_Akashic_Records);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_Random_Option", Japanese_tb_Random_Option);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_11_7, "tb_Social_Item", Japanese_tb_Social_Item);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Echelon", Japanese_tb_Echelon);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Title_Info", Japanese_tb_Title_Info);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Title_Reward", Japanese_tb_Title_Reward);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Title_String", Japanese_tb_Title_String);
  parsers.add(GameToken.jp, GameVersion.jp_1_11_9_3, "tb_Buff", Japanese_tb_Buff);
};
