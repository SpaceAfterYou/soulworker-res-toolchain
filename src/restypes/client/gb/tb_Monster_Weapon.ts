import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.swstring("v1")
	.swstring("v2")
	.swstring("v3")
	.swstring("v4")
	.swstring("v5")
	.uint32("v6")
	.uint32("v7")
	.uint32("v8")
	.uint32("v9")
	.uint32("v10")
	.uint32("v11")