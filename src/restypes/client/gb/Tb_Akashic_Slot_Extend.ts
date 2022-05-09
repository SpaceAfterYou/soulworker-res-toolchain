import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint32("v1")
	.uint8("v2")
	.swstring("v3")
	.uint32("v4")
	.uint8("v5")
	.uint8("v6")
	.uint16("v7")
	.uint16("v8")
	.swstring("v9")
	.uint8("v10")