import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint32("v1")
	.uint8("v2")
	.uint8("v3")
	.uint16("v4")
	.uint8("v5")
	.uint8("v6")
	.uint16("v7")
	.uint8("v8")
	.uint8("v9")