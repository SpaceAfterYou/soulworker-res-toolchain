import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.int16("v0")
	.uint16("v1")
	.uint16("v2")
	.uint16("v3")
	.swstring("v4")
	.swstring("v5")
	.uint16("v6")
	.uint32("v7")
	.uint32("v8")
	.swstring("v9")
	.swstring("v10")
	.uint8("v11")
	.uint8("v12")
	.swstring("v13")
	.uint8("v14")
	.uint8("v15")