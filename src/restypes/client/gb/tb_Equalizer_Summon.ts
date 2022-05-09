import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint32("v2")
	.uint32("v3")
	.swstring("v4")
	.uint32("v5")
	.uint16("v6")
	.uint8("v7")
	.uint8("v8")
	.uint32("v9")
	.uint32("v10")