import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.int16("v2")
	.int16("v3")
	.int16("v4")
	.int16("v5")
	.int16("v6")
	.uint8("v7")
	.swstring("v8")