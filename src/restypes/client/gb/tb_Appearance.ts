import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.uint8("v2")
	.uint16("v3")
	.uint16("v4")
	.swstring("v5")
	.uint8("v6")