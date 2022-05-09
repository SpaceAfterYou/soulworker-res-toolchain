import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.swstring("v1")
	.uint8("v2")
	.swstring("v3")
	.uint8("v4")
	.swstring("v5")
	.uint8("v6")
	.uint8("v7")
	.int16("v8")
	.int16("v9")
	.int16("v10")
	.uint8("v11")
	.uint8("v12")