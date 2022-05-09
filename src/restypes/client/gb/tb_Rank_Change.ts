import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.int16("v2")
	.int16("v3")
	.swstring("v4")
	.uint16("v5")
	.uint32("v6")
	.uint8("v7")
	.uint8("v8")
	.uint8("v9")
	.uint16("v10")
	.uint8("v11")
	.uint32("v12")
	.uint32("v13")
	.swstring("v14")