import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.swstring("v2")