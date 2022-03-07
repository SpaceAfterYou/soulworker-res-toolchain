import { Parser } from "binary-parser";
import { stringFormatter } from "./string-formatter";
import { stringLength } from "./string-length";

Parser.prototype.swstring = function(name: string): Parser {
  const lenToken = `${name}Len`;

  return this.uint16(lenToken).string(name, {
    encoding: "utf-16",
    length: stringLength(lenToken),
    formatter: stringFormatter,
  });
};
