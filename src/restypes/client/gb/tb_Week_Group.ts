import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint8("v1")
	.uint16("v2")
	.uint8("v3")
	.uint8("v4")
	.uint16("v5")
	.uint8("v6")
	.uint8("v7")
	.uint8("v8")
	.uint32("v9")
	.uint16("v10")
	.uint32("v11")
	.uint32("v12")
	.swstring("v13")
	.swstring("v14")