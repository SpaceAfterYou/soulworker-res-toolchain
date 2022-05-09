import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.int32("v1")
	.uint8("v2")
	.uint8("v3")
	.swstring("v4")
	.uint16("v5")
	.uint16("v6")
	.uint8("v7")
	.uint8("v8")
	.uint8("v9")
	.uint8("v10")
	.uint8("v11")
	.uint8("v12")
	.uint8("v13")
	.uint8("v14")
	.uint8("v15")
	.uint8("v16")
	.uint8("v17")