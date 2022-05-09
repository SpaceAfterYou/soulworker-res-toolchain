import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.uint8("v2")
	.uint8("v3")
	.uint32("v4")
	.uint16("v5")
	.uint32("v6")
	.swstring("v7")
	.uint8("v8")
	.uint32("v9")
	.uint32("v10")
	.uint32("v11")
	.uint32("v12")
	.swstring("v13")
	.swstring("v14")
	.swstring("v15")
	.uint32("v16")
	.uint16("v17")
	.uint16("v18")