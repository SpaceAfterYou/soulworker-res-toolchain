import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint32("v1")
	.uint8("v2")
	.uint8("v3")
	.uint8("v4")
	.uint16("v5")
	.uint8("v6")
	.uint32("v7")
	.uint32("v8")
	.swstring("v9")