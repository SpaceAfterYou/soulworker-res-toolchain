import { Parser } from "binary-parser";
import { GameToken } from "../types/game-token";

import type { ClientInfos } from "../types/client-infos";
import type { GameVersion } from "../types/game-version";

export class ParsersBuilder {
  public build() {
    return this.values;
  }

  public add(region: GameToken, version: GameVersion, name: string, func: (parser: Parser) => Parser) {
    const lowerName = name.toLowerCase();

    const info = this.values[region];

    if (lowerName in info.parsers) {
      throw new Error(`Already parser (${lowerName}) for ${region} region with ${version} game version already registered. Wanna some bear?`);
    }

    const parser = new Parser()
      .endianess("little")
      .uint32("count")
      .array("rows", { length: "count", type: func(new Parser().endianess("little")) })
      .uint16("crcLen")
      .string("crc", { length: "crcLen" });

    this.values[region].parsers[lowerName] = { tested: version, parser };
  }

  private readonly values: ClientInfos = {
    [GameToken.gb]: {
      token: GameToken.gb,
      parsers: {},
    },
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
