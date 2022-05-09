import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.uint32("v2")
	.uint8("v3")
	.uint8("v4")
	.uint8("v5")
	.uint8("v6")
	.uint8("v7")
	.uint16("v8")