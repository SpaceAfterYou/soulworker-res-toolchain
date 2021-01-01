import { Parser } from 'binary-parser';
import { stringFormatter } from './string-formatter';
import { stringLength } from './string-length';

declare module 'binary-parser' {
  export interface Parser<O extends object | undefined = undefined> {
    swstring<N extends string>(name: N, len: N): Parser.Next<O, N, string>;
  }
}

Parser.prototype.swstring = function (name: string, len: string): Parser {
  return this.string(name, {
    encoding: 'utf-16',
    length: stringLength(len),
    formatter: stringFormatter
  });
};
