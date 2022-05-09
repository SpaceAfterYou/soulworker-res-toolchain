import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.int32("v0")
	.swstring("v1")
	.swstring("v2")