import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint8("v2")
	.uint8("v3")
	.swstring("v4")
	.swstring("v5")
	.uint8("v6")