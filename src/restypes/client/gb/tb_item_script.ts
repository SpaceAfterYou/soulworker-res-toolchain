import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.swstring("v1")
	.swstring("v2")
	.swstring("v3")
	.swstring("v4")
	.swstring("v5")
	.swstring("v6")
	.uint8("v7")
	.uint8("v8")
	.uint8("v9")
	.uint8("v10")
	.uint8("v11")
	.swstring("v12")
	.swstring("v13")