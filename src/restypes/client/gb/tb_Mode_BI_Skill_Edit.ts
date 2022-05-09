import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.swstring("v2")
	.uint32("v3")
	.uint8("v4")
	.uint8("v5")
	.uint8("v6")
	.uint32("v7")
	.uint32("v8")
	.uint32("v9")
	.uint32("v10")
	.swstring("v11")