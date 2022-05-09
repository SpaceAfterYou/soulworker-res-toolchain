import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.swstring("v2")
	.swstring("v3")
	.uint32("v4")
	.uint32("v5")
	.uint32("v6")
	.uint32("v7")
	.uint32("v8")
	.uint16("v9")
	.uint32("v10")