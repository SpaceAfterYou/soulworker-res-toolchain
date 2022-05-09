import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint16("v1")
	.uint8("v2")
	.uint8("v3")
	.uint8("v4")
	.uint32("v5")
	.uint32("v6")
	.uint32("v7")
	.int16("v8")
	.int16("v9")
	.int16("v10")