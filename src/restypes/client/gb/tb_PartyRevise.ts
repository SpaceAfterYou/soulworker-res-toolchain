import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint8("v2")
	.uint32("v3")
	.swstring("v4")
	.uint32("v5")
	.uint32("v6")
	.uint8("v7")
	.uint32("v8")
	.swstring("v9")
	.swstring("v10")
	.uint8("v11")
	.swstring("v12")
	.swstring("v13")
	.uint32("v14")