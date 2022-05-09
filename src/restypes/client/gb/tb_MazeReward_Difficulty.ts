import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.swstring("v1")
	.uint32("v2")
	.uint32("v3")
	.uint32("v4")
	.uint32("v5")
	.swstring("v6")
	.swstring("v7")
	.swstring("v8")
	.swstring("v9")