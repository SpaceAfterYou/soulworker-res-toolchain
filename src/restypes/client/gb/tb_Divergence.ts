import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint32("v2")
	.uint8("v3")
	.uint8("v4")
	.uint32("v5")
	.uint8("v6")
	.uint8("v7")
	.uint8("v8")
	.uint16("v9")
	.uint8("v10")
	.swstring("v11")
	.uint8("v12")
	.uint32("v13")
	.swstring("v14")