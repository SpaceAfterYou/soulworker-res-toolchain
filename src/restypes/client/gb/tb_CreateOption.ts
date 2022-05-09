import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint8("v1")
	.uint8("v2")
	.uint8("v3")
	.uint8("v4")
	.uint8("v5")
	.int32("v6")
	.uint8("v7")
	.uint8("v8")
	.uint8("v9")
	.uint8("v10")
	.uint32("v11")
	.uint8("v12")
	.int32("v13")