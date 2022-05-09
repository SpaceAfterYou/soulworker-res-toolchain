import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint8("v2")
	.uint8("v3")
	.swstring("v4")
	.uint32("v5")
	.uint32("v6")
	.int16("v7")
	.int16("v8")
	.swstring("v9")
	.uint16("v10")
	.swstring("v11")
	.swstring("v12")
	.swstring("v13")
	.swstring("v14")
	.uint32("v15")
	.uint32("v16")
	.swstring("v17")
	.swstring("v18")