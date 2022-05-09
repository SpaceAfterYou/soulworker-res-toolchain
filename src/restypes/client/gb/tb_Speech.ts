import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.uint8("v2")
	.uint8("v3")
	.uint32("v4")
	.uint32("v5")
	.uint32("v6")
	.swstring("v7")
	.uint8("v8")
	.uint8("v9")
	.uint8("v10")
	.uint32("v11")
	.uint32("v12")
	.uint32("v13")
	.swstring("v14")