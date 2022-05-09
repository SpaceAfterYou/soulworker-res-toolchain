import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint32("v2")
	.uint8("v3")
	.uint8("v4")
	.swstring("v5")
	.uint16("v6")
	.swstring("v7")
	.uint32("v8")