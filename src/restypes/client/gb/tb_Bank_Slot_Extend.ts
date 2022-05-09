import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint8("v1")
	.uint8("v2")
	.uint8("v3")
	.uint32("v4")
	.uint8("v5")
	.uint16("v6")
	.uint8("v7")
	.uint8("v8")
	.uint32("v9")
	.uint8("v10")
	.uint16("v11")