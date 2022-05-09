import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.swstring("v1")
	.uint8("v2")
	.uint32("v3")
	.uint32("v4")
	.uint32("v5")
	.uint32("v6")
	.uint32("v7")
	.uint32("v8")
	.uint32("v9")
	.uint32("v10")
	.uint32("v11")