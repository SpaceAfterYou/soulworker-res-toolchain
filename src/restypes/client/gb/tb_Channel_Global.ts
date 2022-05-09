import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint8("v1")
	.uint32("v2")
	.uint32("v3")
	.swstring("v4")
	.uint32("v5")
	.uint16("v6")
	.uint16("v7")
	.uint16("v8")
	.swstring("v9")