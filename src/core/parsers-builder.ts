import { Parser } from "binary-parser";
import { GameToken } from "../types/game-token";

import type { ClientInfos } from "../types/client-infos";
import type { GameVersion } from "../types/game-version";

export class ParsersBuilder {
  public build() {
    return this.values;
  }

  public add(gameToken: GameToken, tested: GameVersion, name: string, func: (parser: Parser) => Parser) {
    const fixedName = name.toLowerCase();

    const parser = new Parser()
      .endianess("little")
      .uint32("count")
      .array("rows", { length: "count", type: func(new Parser()) })
      .uint16("crcLen")
      .string("crc", { length: "crcLen" }) as unknown as Parser;

    this.values[gameToken].parsers[fixedName] = { tested, parser };
  }

  private readonly values: ClientInfos = {
    [GameToken.kr]: {
      token: GameToken.kr,
      parsers: {},
    },
    [GameToken.jp]: {
      token: GameToken.jp,
      parsers: {},
    },
  };
}
