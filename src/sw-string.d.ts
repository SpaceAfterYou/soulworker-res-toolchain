import type { Parser } from "binary-parser";

declare module "binary-parser" {
  export interface Parser {
    swstring<N extends string>(name: N): this;
  }
}
