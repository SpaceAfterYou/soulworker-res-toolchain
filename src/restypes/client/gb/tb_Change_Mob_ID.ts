import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint32("v2")
	.swstring("v3")
	.uint16("v4")
	.uint16("v5")
	.uint16("v6")
	.swstring("v7")
	.uint16("v8")
	.uint8("v9")
	.uint32("v10")
	.uint32("v11")
	.swstring("v12")
	.uint32("v13")
	.uint16("v14")
	.uint16("v15")
	.uint16("v16")
	.swstring("v17")