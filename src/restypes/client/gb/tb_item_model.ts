import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.swstring("v1")
	.swstring("v2")
	.swstring("v3")
	.int16("v4")
	.uint16("v5")
	.uint16("v6")
	.uint16("v7")
	.swstring("v8")
	.uint8("v9")