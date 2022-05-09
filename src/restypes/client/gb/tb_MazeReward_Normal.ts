import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.swstring("v1")
	.uint8("v2")
	.swstring("v3")
	.uint8("v4")
	.uint8("v5")
	.swstring("v6")
	.uint16("v7")
	.swstring("v8")
	.uint16("v9")
	.swstring("v10")
	.uint32("v11")
	.swstring("v12")
	.swstring("v13")
	.uint16("v14")
	.uint16("v15")
	.uint16("v16")
	.uint32("v17")
	.uint32("v18")