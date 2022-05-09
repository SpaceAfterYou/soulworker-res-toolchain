import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint8("v1")
	.uint16("v2")
	.uint32("v3")
	.uint32("v4")
	.uint32("v5")
	.uint8("v6")
	.uint8("v7")
	.uint8("v8")