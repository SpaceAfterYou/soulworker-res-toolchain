import type { Parser } from "binary-parser";
import type { GameToken } from "./game-token";
import type { GameVersion } from "./game-version";

export type ClientInfo = {
  token: GameToken;
  parsers: {
    [key: string]: {
      parser: Parser;
      tested: GameVersion;
    };
  };
};
