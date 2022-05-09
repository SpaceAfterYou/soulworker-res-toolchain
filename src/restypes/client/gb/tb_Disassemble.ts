import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.swstring("v1")
	.int16("v2")
	.uint16("v3")
	.uint16("v4")
	.uint16("v5")
	.swstring("v6")
	.swstring("v7")
	.uint16("v8")
	.uint32("v9")
	.uint32("v10")
	.swstring("v11")
	.swstring("v12")
	.uint8("v13")
	.uint8("v14")
	.swstring("v15")
	.uint8("v16")
	.uint8("v17")