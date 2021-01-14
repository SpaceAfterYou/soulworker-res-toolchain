import { Parser } from 'binary-parser';
import { stringFormatter } from './string-formatter';
import { stringLength } from './string-length';

declare module 'binary-parser' {
  export interface Parser<O extends object | undefined = undefined> {
    swstring<N extends string>(name: N): Parser.Next<O, N, string>;
  }
}

Parser.prototype.swstring = function (name: string): Parser {
  const lenToken = `${name}Len`;

  return this
    .uint16(lenToken)
    .string(name, {
      encoding: 'utf-16',
      length: stringLength(lenToken),
      formatter: stringFormatter
    });
};
