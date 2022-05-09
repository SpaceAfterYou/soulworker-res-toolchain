import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint32("v2")
	.uint32("v3")
	.uint32("v4")
	.uint8("v5")
	.uint32("v6")
	.uint16("v7")
	.uint16("v8")
	.swstring("v9")
	.swstring("v10")
	.swstring("v11")
	.int16("v12")
	.swstring("v13")
	.swstring("v14")
	.int16("v15")
	.swstring("v16")
	.uint32("v17")
	.uint8("v18")