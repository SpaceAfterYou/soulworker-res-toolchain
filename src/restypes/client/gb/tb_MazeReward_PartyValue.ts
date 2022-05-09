import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.swstring("v1")
	.uint8("v2")
	.uint8("v3")
	.swstring("v4")
	.uint16("v5")
	.swstring("v6")
	.uint16("v7")
	.swstring("v8")
	.uint32("v9")
	.swstring("v10")
	.swstring("v11")
	.uint16("v12")
	.uint16("v13")
	.uint16("v14")
	.uint32("v15")
	.uint32("v16")