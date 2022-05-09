import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint16("v2")
	.swstring("v3")
	.swstring("v4")
	.swstring("v5")
	.swstring("v6")
	.swstring("v7")
	.swstring("v8")
	.swstring("v9")
	.swstring("v10")
	.swstring("v11")
	.swstring("v12")
	.uint8("v13")
	.uint8("v14")